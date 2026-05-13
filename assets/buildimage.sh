#!/bin/bash

DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR" || exit 1

echo "🔧 Generando favicon.ico desde PNG…"

# Convertir PNG → BMP3 sin alfa (ICO usa BMP internamente)
convert favicon-16.png -alpha off BMP3:16.bmp
convert favicon-32.png -alpha off BMP3:32.bmp

# Generar ICO usando icotool si está disponible
if command -v icotool >/dev/null 2>&1; then
    icotool -c -o favicon.ico 16.bmp 32.bmp
    echo "✔️ favicon.ico generado con icotool"
else
    # Fallback: usar magick (ImageMagick 7)
    if command -v magick >/dev/null 2>&1; then
        magick 16.bmp 32.bmp favicon.ico
        echo "✔️ favicon.ico generado con magick"
    else
        # Último recurso: usar convert pero ignorar el error falso
        convert 16.bmp 32.bmp favicon.ico 2>/dev/null || true
        echo "⚠️ favicon.ico generado con convert (ignorando error falso)"
    fi
fi

# Limpiar temporales
rm 16.bmp 32.bmp

echo "✅ favicon.ico listo en:"
echo "   $DIR/favicon.ico"


