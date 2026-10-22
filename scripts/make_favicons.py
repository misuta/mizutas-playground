#!/usr/bin/env python3
"""Genera los favicons de Mizuta's Playground a partir del hanko.

- Tamaños grandes (180, 192, 512): hanko completo sobre fondo washi.
- Tamaños pequeños (16, 32, 48 y favicon.ico): solo el kanji 水田, sin el
  círculo, en rojo hanko sólido, para que se lea en la pestaña.

Uso (desde la raíz del repo):  python3 scripts/make_favicons.py
"""
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets/images/logo-hanko.webp"
OUT = ROOT / "assets/images/favicon"
WASHI = "#FAFAF2"
HANKO_RED = (0xB3, 0x00, 0x00)
BASE = 512             # se normaliza el hanko a este tamaño
KANJI_RADIUS = 0.267   # radio (fracción del lado) que contiene el kanji sin el círculo


def on_washi(img: Image.Image, size: int, fill: float) -> Image.Image:
    w, h = img.size
    scale = size * fill / max(w, h)
    small = img.resize((max(1, round(w * scale)), max(1, round(h * scale))), Image.LANCZOS)
    bg = Image.new("RGBA", (size, size), WASHI)
    bg.alpha_composite(small, ((size - small.width) // 2, (size - small.height) // 2))
    return bg.convert("RGB")


def kanji_only(hanko: Image.Image) -> Image.Image:
    r = KANJI_RADIUS * BASE
    c = BASE / 2
    mask = Image.new("L", (BASE, BASE), 0)
    ImageDraw.Draw(mask).ellipse((c - r, c - r, c + r, c + r), fill=255)
    alpha = Image.composite(hanko.getchannel("A"), Image.new("L", (BASE, BASE), 0), mask)
    solid = alpha.point(lambda v: 255 if v > 80 else 0)
    # bbox ignorando motas sueltas de la textura
    px = solid.load()
    rows = [y for y in range(BASE) if sum(1 for x in range(BASE) if px[x, y]) >= 6]
    cols = [x for x in range(BASE) if sum(1 for y in range(BASE) if px[x, y]) >= 6]
    box = (min(cols), min(rows), max(cols) + 1, max(rows) + 1)
    kanji = Image.new("RGBA", (BASE, BASE), HANKO_RED + (0,))
    kanji.putalpha(solid)
    return kanji.crop(box)


def main() -> None:
    hanko = Image.open(SRC).convert("RGBA").resize((BASE, BASE), Image.LANCZOS)
    kanji = kanji_only(hanko)
    OUT.mkdir(parents=True, exist_ok=True)

    for size, name in [(180, "apple-touch-icon.png"),
                       (192, "android-chrome-192x192.png"),
                       (512, "android-chrome-512x512.png")]:
        on_washi(hanko, size, 0.88).save(OUT / name)

    for size in (16, 32):
        on_washi(kanji, size, 0.94).save(OUT / f"favicon-{size}.png")

    ico = on_washi(kanji, 256, 0.94)
    ico.save(ROOT / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    print("Favicons generados en", OUT, "y", ROOT / "favicon.ico")


if __name__ == "__main__":
    main()
