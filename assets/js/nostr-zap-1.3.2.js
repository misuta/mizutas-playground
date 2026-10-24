
      var $parcel$global = globalThis;
    
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire1faa"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire1faa"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("58QMB", function(module, exports) {
/**
 * EasyQRCodeJS
 * 
 * Cross-browser QRCode generator for pure javascript. Support Canvas, SVG and Table drawing methods. Support Dot style, Logo, Background image, Colorful, Title etc. settings. Support Angular, Vue.js, React, Next.js, Svelte framework. Support binary(hex) data mode.(Running with DOM on client side)
 * 
 * Version 4.6.2
 * 
 * @author [ inthinkcolor@gmail.com ]
 * 
 * @see https://github.com/ushelp/EasyQRCodeJS 
 * @see http://www.easyproject.cn/easyqrcodejs/tryit.html
 * @see https://github.com/ushelp/EasyQRCodeJS-NodeJS
 * 
 * Copyright 2017 Ray, EasyProject
 * Released under the MIT license
 * 
 * [Support AMD, CMD, CommonJS/Node.js]
 * 
 */ !function() {
    "use strict";
    function a(a, b) {
        var c, d = Object.keys(b);
        for(c = 0; c < d.length; c++)a = a.replace(new RegExp("\\{" + d[c] + "\\}", "gi"), b[d[c]]);
        return a;
    }
    function b(a) {
        var b, c, d;
        if (!a) throw new Error("cannot create a random attribute name for an undefined object");
        b = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", c = "";
        do for(c = "", d = 0; d < 12; d++)c += b[Math.floor(Math.random() * b.length)];
        while (a[c]);
        return c;
    }
    function c(a) {
        var b = {
            left: "start",
            right: "end",
            center: "middle",
            start: "start",
            end: "end"
        };
        return b[a] || b.start;
    }
    function d(a) {
        var b = {
            alphabetic: "alphabetic",
            hanging: "hanging",
            top: "text-before-edge",
            bottom: "text-after-edge",
            middle: "central"
        };
        return b[a] || b.alphabetic;
    }
    var e, f, g, h, i;
    i = function(a, b) {
        var c, d, e, f = {};
        for(a = a.split(","), b = b || 10, c = 0; c < a.length; c += 2)d = "&" + a[c + 1] + ";", e = parseInt(a[c], b), f[d] = "&#" + e + ";";
        return f["\\xa0"] = "&#160;", f;
    }("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32), e = {
        strokeStyle: {
            svgAttr: "stroke",
            canvas: "#000000",
            svg: "none",
            apply: "stroke"
        },
        fillStyle: {
            svgAttr: "fill",
            canvas: "#000000",
            svg: null,
            apply: "fill"
        },
        lineCap: {
            svgAttr: "stroke-linecap",
            canvas: "butt",
            svg: "butt",
            apply: "stroke"
        },
        lineJoin: {
            svgAttr: "stroke-linejoin",
            canvas: "miter",
            svg: "miter",
            apply: "stroke"
        },
        miterLimit: {
            svgAttr: "stroke-miterlimit",
            canvas: 10,
            svg: 4,
            apply: "stroke"
        },
        lineWidth: {
            svgAttr: "stroke-width",
            canvas: 1,
            svg: 1,
            apply: "stroke"
        },
        globalAlpha: {
            svgAttr: "opacity",
            canvas: 1,
            svg: 1,
            apply: "fill stroke"
        },
        font: {
            canvas: "10px sans-serif"
        },
        shadowColor: {
            canvas: "#000000"
        },
        shadowOffsetX: {
            canvas: 0
        },
        shadowOffsetY: {
            canvas: 0
        },
        shadowBlur: {
            canvas: 0
        },
        textAlign: {
            canvas: "start"
        },
        textBaseline: {
            canvas: "alphabetic"
        },
        lineDash: {
            svgAttr: "stroke-dasharray",
            canvas: [],
            svg: null,
            apply: "stroke"
        }
    }, g = function(a, b) {
        this.__root = a, this.__ctx = b;
    }, g.prototype.addColorStop = function(b, c) {
        var d, e, f = this.__ctx.__createElement("stop");
        f.setAttribute("offset", b), -1 !== c.indexOf("rgba") ? (d = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi, e = d.exec(c), f.setAttribute("stop-color", a("rgb({r},{g},{b})", {
            r: e[1],
            g: e[2],
            b: e[3]
        })), f.setAttribute("stop-opacity", e[4])) : f.setAttribute("stop-color", c), this.__root.appendChild(f);
    }, h = function(a, b) {
        this.__root = a, this.__ctx = b;
    }, f = function(a) {
        var b, c = {
            width: 500,
            height: 500,
            veiwBoxWidth: 500,
            veiwBoxHeight: 500,
            enableMirroring: !1
        };
        if (arguments.length > 1 ? (b = c, b.width = arguments[0], b.height = arguments[1], b.veiwBoxWidth = arguments[2], b.veiwBoxHeight = arguments[3]) : b = a || c, !(this instanceof f)) return new f(b);
        this.width = b.width || c.width, this.height = b.height || c.height, this.veiwBoxWidth = b.veiwBoxWidth || this.width, this.veiwBoxHeight = b.veiwBoxHeight || this.height, this.enableMirroring = void 0 !== b.enableMirroring ? b.enableMirroring : c.enableMirroring, this.canvas = this, this.__document = b.document || document, b.ctx ? this.__ctx = b.ctx : (this.__canvas = this.__document.createElement("canvas"), this.__ctx = this.__canvas.getContext("2d")), this.__setDefaultStyles(), this.__stack = [
            this.__getStyleState()
        ], this.__groupStack = [], this.__root = this.__document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.__root.setAttribute("version", 1.1), this.__root.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.__root.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), this.__root.setAttribute("width", this.width), this.__root.setAttribute("height", this.height), this.__root.setAttribute("viewBox", "0 0 " + this.veiwBoxWidth + " " + this.veiwBoxHeight), this.__ids = {}, this.__defs = this.__document.createElementNS("http://www.w3.org/2000/svg", "defs"), this.__root.appendChild(this.__defs), this.__currentElement = this.__document.createElementNS("http://www.w3.org/2000/svg", "g"), this.__root.appendChild(this.__currentElement);
    }, f.prototype.__createElement = function(a, b, c) {
        void 0 === b && (b = {});
        var d, e, f = this.__document.createElementNS("http://www.w3.org/2000/svg", a), g = Object.keys(b);
        for(c && (f.setAttribute("fill", "none"), f.setAttribute("stroke", "none")), d = 0; d < g.length; d++)e = g[d], f.setAttribute(e, b[e]);
        return f;
    }, f.prototype.__setDefaultStyles = function() {
        var a, b, c = Object.keys(e);
        for(a = 0; a < c.length; a++)b = c[a], this[b] = e[b].canvas;
    }, f.prototype.__applyStyleState = function(a) {
        var b, c, d = Object.keys(a);
        for(b = 0; b < d.length; b++)c = d[b], this[c] = a[c];
    }, f.prototype.__getStyleState = function() {
        var a, b, c = {}, d = Object.keys(e);
        for(a = 0; a < d.length; a++)b = d[a], c[b] = this[b];
        return c;
    }, f.prototype.__applyStyleToCurrentElement = function(b) {
        var c = this.__currentElement, d = this.__currentElementsToStyle;
        d && (c.setAttribute(b, ""), c = d.element, d.children.forEach(function(a) {
            a.setAttribute(b, "");
        }));
        var f, i, j, k, l, m, n = Object.keys(e);
        for(f = 0; f < n.length; f++)if (i = e[n[f]], j = this[n[f]], i.apply) {
            if (j instanceof h) {
                if (j.__ctx) for(; j.__ctx.__defs.childNodes.length;)k = j.__ctx.__defs.childNodes[0].getAttribute("id"), this.__ids[k] = k, this.__defs.appendChild(j.__ctx.__defs.childNodes[0]);
                c.setAttribute(i.apply, a("url(#{id})", {
                    id: j.__root.getAttribute("id")
                }));
            } else if (j instanceof g) c.setAttribute(i.apply, a("url(#{id})", {
                id: j.__root.getAttribute("id")
            }));
            else if (-1 !== i.apply.indexOf(b) && i.svg !== j) {
                if ("stroke" !== i.svgAttr && "fill" !== i.svgAttr || -1 === j.indexOf("rgba")) {
                    var o = i.svgAttr;
                    if ("globalAlpha" === n[f] && (o = b + "-" + i.svgAttr, c.getAttribute(o))) continue;
                    c.setAttribute(o, j);
                } else {
                    l = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi, m = l.exec(j), c.setAttribute(i.svgAttr, a("rgb({r},{g},{b})", {
                        r: m[1],
                        g: m[2],
                        b: m[3]
                    }));
                    var p = m[4], q = this.globalAlpha;
                    null != q && (p *= q), c.setAttribute(i.svgAttr + "-opacity", p);
                }
            }
        }
    }, f.prototype.__closestGroupOrSvg = function(a) {
        return a = a || this.__currentElement, "g" === a.nodeName || "svg" === a.nodeName ? a : this.__closestGroupOrSvg(a.parentNode);
    }, f.prototype.getSerializedSvg = function(a) {
        var b, c, d, e, f, g, h = (new XMLSerializer).serializeToString(this.__root);
        if (g = /xmlns="http:\/\/www\.w3\.org\/2000\/svg".+xmlns="http:\/\/www\.w3\.org\/2000\/svg/gi, g.test(h) && (h = h.replace('xmlns="http://www.w3.org/2000/svg', 'xmlns:xlink="http://www.w3.org/1999/xlink')), a) for(b = Object.keys(i), c = 0; c < b.length; c++)d = b[c], e = i[d], f = new RegExp(d, "gi"), f.test(h) && (h = h.replace(f, e));
        return h;
    }, f.prototype.getSvg = function() {
        return this.__root;
    }, f.prototype.save = function() {
        var a = this.__createElement("g"), b = this.__closestGroupOrSvg();
        this.__groupStack.push(b), b.appendChild(a), this.__currentElement = a, this.__stack.push(this.__getStyleState());
    }, f.prototype.restore = function() {
        this.__currentElement = this.__groupStack.pop(), this.__currentElementsToStyle = null, this.__currentElement || (this.__currentElement = this.__root.childNodes[1]);
        var a = this.__stack.pop();
        this.__applyStyleState(a);
    }, f.prototype.__addTransform = function(a) {
        var b = this.__closestGroupOrSvg();
        if (b.childNodes.length > 0) {
            "path" === this.__currentElement.nodeName && (this.__currentElementsToStyle || (this.__currentElementsToStyle = {
                element: b,
                children: []
            }), this.__currentElementsToStyle.children.push(this.__currentElement), this.__applyCurrentDefaultPath());
            var c = this.__createElement("g");
            b.appendChild(c), this.__currentElement = c;
        }
        var d = this.__currentElement.getAttribute("transform");
        d ? d += " " : d = "", d += a, this.__currentElement.setAttribute("transform", d);
    }, f.prototype.scale = function(b, c) {
        void 0 === c && (c = b), this.__addTransform(a("scale({x},{y})", {
            x: b,
            y: c
        }));
    }, f.prototype.rotate = function(b) {
        var c = 180 * b / Math.PI;
        this.__addTransform(a("rotate({angle},{cx},{cy})", {
            angle: c,
            cx: 0,
            cy: 0
        }));
    }, f.prototype.translate = function(b, c) {
        this.__addTransform(a("translate({x},{y})", {
            x: b,
            y: c
        }));
    }, f.prototype.transform = function(b, c, d, e, f, g) {
        this.__addTransform(a("matrix({a},{b},{c},{d},{e},{f})", {
            a: b,
            b: c,
            c: d,
            d: e,
            e: f,
            f: g
        }));
    }, f.prototype.beginPath = function() {
        var a, b;
        this.__currentDefaultPath = "", this.__currentPosition = {}, a = this.__createElement("path", {}, !0), b = this.__closestGroupOrSvg(), b.appendChild(a), this.__currentElement = a;
    }, f.prototype.__applyCurrentDefaultPath = function() {
        var a = this.__currentElement;
        "path" === a.nodeName ? a.setAttribute("d", this.__currentDefaultPath) : console.error("Attempted to apply path command to node", a.nodeName);
    }, f.prototype.__addPathCommand = function(a) {
        this.__currentDefaultPath += " ", this.__currentDefaultPath += a;
    }, f.prototype.moveTo = function(b, c) {
        "path" !== this.__currentElement.nodeName && this.beginPath(), this.__currentPosition = {
            x: b,
            y: c
        }, this.__addPathCommand(a("M {x} {y}", {
            x: b,
            y: c
        }));
    }, f.prototype.closePath = function() {
        this.__currentDefaultPath && this.__addPathCommand("Z");
    }, f.prototype.lineTo = function(b, c) {
        this.__currentPosition = {
            x: b,
            y: c
        }, this.__currentDefaultPath.indexOf("M") > -1 ? this.__addPathCommand(a("L {x} {y}", {
            x: b,
            y: c
        })) : this.__addPathCommand(a("M {x} {y}", {
            x: b,
            y: c
        }));
    }, f.prototype.bezierCurveTo = function(b, c, d, e, f, g) {
        this.__currentPosition = {
            x: f,
            y: g
        }, this.__addPathCommand(a("C {cp1x} {cp1y} {cp2x} {cp2y} {x} {y}", {
            cp1x: b,
            cp1y: c,
            cp2x: d,
            cp2y: e,
            x: f,
            y: g
        }));
    }, f.prototype.quadraticCurveTo = function(b, c, d, e) {
        this.__currentPosition = {
            x: d,
            y: e
        }, this.__addPathCommand(a("Q {cpx} {cpy} {x} {y}", {
            cpx: b,
            cpy: c,
            x: d,
            y: e
        }));
    };
    var j = function(a) {
        var b = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
        return [
            a[0] / b,
            a[1] / b
        ];
    };
    f.prototype.arcTo = function(a, b, c, d, e) {
        var f = this.__currentPosition && this.__currentPosition.x, g = this.__currentPosition && this.__currentPosition.y;
        if (void 0 !== f && void 0 !== g) {
            if (e < 0) throw new Error("IndexSizeError: The radius provided (" + e + ") is negative.");
            if (f === a && g === b || a === c && b === d || 0 === e) return void this.lineTo(a, b);
            var h = j([
                f - a,
                g - b
            ]), i = j([
                c - a,
                d - b
            ]);
            if (h[0] * i[1] == h[1] * i[0]) return void this.lineTo(a, b);
            var k = h[0] * i[0] + h[1] * i[1], l = Math.acos(Math.abs(k)), m = j([
                h[0] + i[0],
                h[1] + i[1]
            ]), n = e / Math.sin(l / 2), o = a + n * m[0], p = b + n * m[1], q = [
                -h[1],
                h[0]
            ], r = [
                i[1],
                -i[0]
            ], s = function(a) {
                var b = a[0];
                return a[1] >= 0 ? Math.acos(b) : -Math.acos(b);
            }, t = s(q), u = s(r);
            this.lineTo(o + q[0] * e, p + q[1] * e), this.arc(o, p, e, t, u);
        }
    }, f.prototype.stroke = function() {
        "path" === this.__currentElement.nodeName && this.__currentElement.setAttribute("paint-order", "fill stroke markers"), this.__applyCurrentDefaultPath(), this.__applyStyleToCurrentElement("stroke");
    }, f.prototype.fill = function() {
        "path" === this.__currentElement.nodeName && this.__currentElement.setAttribute("paint-order", "stroke fill markers"), this.__applyCurrentDefaultPath(), this.__applyStyleToCurrentElement("fill");
    }, f.prototype.rect = function(a, b, c, d) {
        "path" !== this.__currentElement.nodeName && this.beginPath(), this.moveTo(a, b), this.lineTo(a + c, b), this.lineTo(a + c, b + d), this.lineTo(a, b + d), this.lineTo(a, b), this.closePath();
    }, f.prototype.fillRect = function(a, b, c, d) {
        var e, f;
        e = this.__createElement("rect", {
            x: a,
            y: b,
            width: c,
            height: d,
            "shape-rendering": "crispEdges"
        }, !0), f = this.__closestGroupOrSvg(), f.appendChild(e), this.__currentElement = e, this.__applyStyleToCurrentElement("fill");
    }, f.prototype.strokeRect = function(a, b, c, d) {
        var e, f;
        e = this.__createElement("rect", {
            x: a,
            y: b,
            width: c,
            height: d
        }, !0), f = this.__closestGroupOrSvg(), f.appendChild(e), this.__currentElement = e, this.__applyStyleToCurrentElement("stroke");
    }, f.prototype.__clearCanvas = function() {
        for(var a = this.__closestGroupOrSvg(), b = a.getAttribute("transform"), c = this.__root.childNodes[1], d = c.childNodes, e = d.length - 1; e >= 0; e--)d[e] && c.removeChild(d[e]);
        this.__currentElement = c, this.__groupStack = [], b && this.__addTransform(b);
    }, f.prototype.clearRect = function(a, b, c, d) {
        if (0 === a && 0 === b && c === this.width && d === this.height) return void this.__clearCanvas();
        var e, f = this.__closestGroupOrSvg();
        e = this.__createElement("rect", {
            x: a,
            y: b,
            width: c,
            height: d,
            fill: "#FFFFFF"
        }, !0), f.appendChild(e);
    }, f.prototype.createLinearGradient = function(a, c, d, e) {
        var f = this.__createElement("linearGradient", {
            id: b(this.__ids),
            x1: a + "px",
            x2: d + "px",
            y1: c + "px",
            y2: e + "px",
            gradientUnits: "userSpaceOnUse"
        }, !1);
        return this.__defs.appendChild(f), new g(f, this);
    }, f.prototype.createRadialGradient = function(a, c, d, e, f, h) {
        var i = this.__createElement("radialGradient", {
            id: b(this.__ids),
            cx: e + "px",
            cy: f + "px",
            r: h + "px",
            fx: a + "px",
            fy: c + "px",
            gradientUnits: "userSpaceOnUse"
        }, !1);
        return this.__defs.appendChild(i), new g(i, this);
    }, f.prototype.__parseFont = function() {
        var a = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-,\'\"\sa-z0-9]+?)\s*$/i, b = a.exec(this.font), c = {
            style: b[1] || "normal",
            size: b[4] || "10px",
            family: b[6] || "sans-serif",
            weight: b[3] || "normal",
            decoration: b[2] || "normal",
            href: null
        };
        return "underline" === this.__fontUnderline && (c.decoration = "underline"), this.__fontHref && (c.href = this.__fontHref), c;
    }, f.prototype.__wrapTextLink = function(a, b) {
        if (a.href) {
            var c = this.__createElement("a");
            return c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a.href), c.appendChild(b), c;
        }
        return b;
    }, f.prototype.__applyText = function(a, b, e, f) {
        var g = this.__parseFont(), h = this.__closestGroupOrSvg(), i = this.__createElement("text", {
            "font-family": g.family,
            "font-size": g.size,
            "font-style": g.style,
            "font-weight": g.weight,
            "text-decoration": g.decoration,
            x: b,
            y: e,
            "text-anchor": c(this.textAlign),
            "dominant-baseline": d(this.textBaseline)
        }, !0);
        i.appendChild(this.__document.createTextNode(a)), this.__currentElement = i, this.__applyStyleToCurrentElement(f), h.appendChild(this.__wrapTextLink(g, i));
    }, f.prototype.fillText = function(a, b, c) {
        this.__applyText(a, b, c, "fill");
    }, f.prototype.strokeText = function(a, b, c) {
        this.__applyText(a, b, c, "stroke");
    }, f.prototype.measureText = function(a) {
        return this.__ctx.font = this.font, this.__ctx.measureText(a);
    }, f.prototype.arc = function(b, c, d, e, f, g) {
        if (e !== f) {
            e %= 2 * Math.PI, f %= 2 * Math.PI, e === f && (f = (f + 2 * Math.PI - .001 * (g ? -1 : 1)) % (2 * Math.PI));
            var h = b + d * Math.cos(f), i = c + d * Math.sin(f), j = b + d * Math.cos(e), k = c + d * Math.sin(e), l = g ? 0 : 1, m = 0, n = f - e;
            n < 0 && (n += 2 * Math.PI), m = g ? n > Math.PI ? 0 : 1 : n > Math.PI ? 1 : 0, this.lineTo(j, k), this.__addPathCommand(a("A {rx} {ry} {xAxisRotation} {largeArcFlag} {sweepFlag} {endX} {endY}", {
                rx: d,
                ry: d,
                xAxisRotation: 0,
                largeArcFlag: m,
                sweepFlag: l,
                endX: h,
                endY: i
            })), this.__currentPosition = {
                x: h,
                y: i
            };
        }
    }, f.prototype.clip = function() {
        var c = this.__closestGroupOrSvg(), d = this.__createElement("clipPath"), e = b(this.__ids), f = this.__createElement("g");
        this.__applyCurrentDefaultPath(), c.removeChild(this.__currentElement), d.setAttribute("id", e), d.appendChild(this.__currentElement), this.__defs.appendChild(d), c.setAttribute("clip-path", a("url(#{id})", {
            id: e
        })), c.appendChild(f), this.__currentElement = f;
    }, f.prototype.drawImage = function() {
        var a, b, c, d, e, g, h, i, j, k, l, m, n, o, p = Array.prototype.slice.call(arguments), q = p[0], r = 0, s = 0;
        if (3 === p.length) a = p[1], b = p[2], e = q.width, g = q.height, c = e, d = g;
        else if (5 === p.length) a = p[1], b = p[2], c = p[3], d = p[4], e = q.width, g = q.height;
        else {
            if (9 !== p.length) throw new Error("Invalid number of arguments passed to drawImage: " + arguments.length);
            r = p[1], s = p[2], e = p[3], g = p[4], a = p[5], b = p[6], c = p[7], d = p[8];
        }
        h = this.__closestGroupOrSvg(), this.__currentElement;
        var t = "translate(" + a + ", " + b + ")";
        if (q instanceof f) {
            if (i = q.getSvg().cloneNode(!0), i.childNodes && i.childNodes.length > 1) {
                for(j = i.childNodes[0]; j.childNodes.length;)o = j.childNodes[0].getAttribute("id"), this.__ids[o] = o, this.__defs.appendChild(j.childNodes[0]);
                if (k = i.childNodes[1]) {
                    var u, v = k.getAttribute("transform");
                    u = v ? v + " " + t : t, k.setAttribute("transform", u), h.appendChild(k);
                }
            }
        } else "CANVAS" !== q.nodeName && "IMG" !== q.nodeName || (l = this.__createElement("image"), l.setAttribute("width", c), l.setAttribute("height", d), l.setAttribute("preserveAspectRatio", "none"), l.setAttribute("opacity", this.globalAlpha), (r || s || e !== q.width || g !== q.height) && (m = this.__document.createElement("canvas"), m.width = c, m.height = d, n = m.getContext("2d"), n.drawImage(q, r, s, e, g, 0, 0, c, d), q = m), l.setAttribute("transform", t), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "CANVAS" === q.nodeName ? q.toDataURL() : q.originalSrc), h.appendChild(l));
    }, f.prototype.createPattern = function(a, c) {
        var d, e = this.__document.createElementNS("http://www.w3.org/2000/svg", "pattern"), g = b(this.__ids);
        return e.setAttribute("id", g), e.setAttribute("width", a.width), e.setAttribute("height", a.height), "CANVAS" === a.nodeName || "IMG" === a.nodeName ? (d = this.__document.createElementNS("http://www.w3.org/2000/svg", "image"), d.setAttribute("width", a.width), d.setAttribute("height", a.height), d.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "CANVAS" === a.nodeName ? a.toDataURL() : a.getAttribute("src")), e.appendChild(d), this.__defs.appendChild(e)) : a instanceof f && (e.appendChild(a.__root.childNodes[1]), this.__defs.appendChild(e)), new h(e, this);
    }, f.prototype.setLineDash = function(a) {
        a && a.length > 0 ? this.lineDash = a.join(",") : this.lineDash = null;
    }, f.prototype.drawFocusRing = function() {}, f.prototype.createImageData = function() {}, f.prototype.getImageData = function() {}, f.prototype.putImageData = function() {}, f.prototype.globalCompositeOperation = function() {}, f.prototype.setTransform = function() {}, "object" == typeof window && (window.C2S = f), "object" == typeof module.exports && (module.exports = f);
}(), (function() {
    "use strict";
    function a(a, b, c) {
        if (this.mode = q.MODE_8BIT_BYTE, this.data = a, this.parsedData = [], b) {
            for(var d = 0, e = this.data.length; d < e; d++){
                var f = [], g = this.data.charCodeAt(d);
                f[0] = g, this.parsedData.push(f);
            }
            this.parsedData = Array.prototype.concat.apply([], this.parsedData);
        } else this.parsedData = function(a) {
            for(var b = [], c = 0; c < a.length; c++){
                var d = a.charCodeAt(c);
                d < 128 ? b.push(d) : d < 2048 ? b.push(192 | d >> 6, 128 | 63 & d) : d < 55296 || d >= 57344 ? b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | 63 & d) : (c++, d = 65536 + ((1023 & d) << 10 | 1023 & a.charCodeAt(c)), b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | 63 & d));
            }
            return b;
        }(a);
        this.parsedData = Array.prototype.concat.apply([], this.parsedData), c || this.parsedData.length == this.data.length || (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
    }
    function b(a, b) {
        this.typeNumber = a, this.errorCorrectLevel = b, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [];
    }
    function c(a, b) {
        if (a.length == i) throw new Error(a.length + "/" + b);
        for(var c = 0; c < a.length && 0 == a[c];)c++;
        this.num = new Array(a.length - c + b);
        for(var d = 0; d < a.length - c; d++)this.num[d] = a[d + c];
    }
    function d(a, b) {
        this.totalCount = a, this.dataCount = b;
    }
    function e() {
        this.buffer = [], this.length = 0;
    }
    function f() {
        var a = !1, b = navigator.userAgent;
        if (/android/i.test(b)) {
            a = !0;
            var c = b.toString().match(/android ([0-9]\.[0-9])/i);
            c && c[1] && (a = parseFloat(c[1]));
        }
        return a;
    }
    function g(a, b) {
        for(var c = b.correctLevel, d = 1, e = h(a), f = 0, g = w.length; f < g; f++){
            var i = 0;
            switch(c){
                case r.L:
                    i = w[f][0];
                    break;
                case r.M:
                    i = w[f][1];
                    break;
                case r.Q:
                    i = w[f][2];
                    break;
                case r.H:
                    i = w[f][3];
            }
            if (e <= i) break;
            d++;
        }
        if (d > w.length) throw new Error("Too long data. the CorrectLevel." + [
            "M",
            "L",
            "H",
            "Q"
        ][c] + " limit length is " + i);
        return 0 != b.version && (d <= b.version ? (d = b.version, b.runVersion = d) : (console.warn("QR Code version " + b.version + " too small, run version use " + d), b.runVersion = d)), d;
    }
    function h(a) {
        return encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g, "a").length;
    }
    var i, j, k = "object" == typeof $parcel$global && $parcel$global && $parcel$global.Object === Object && $parcel$global, l = "object" == typeof self && self && self.Object === Object && self, m = k || l || Function("return this")(), n = exports && !exports.nodeType && exports, o = n && true && module && !module.nodeType && module, p = m.QRCode;
    a.prototype = {
        getLength: function(a) {
            return this.parsedData.length;
        },
        write: function(a) {
            for(var b = 0, c = this.parsedData.length; b < c; b++)a.put(this.parsedData[b], 8);
        }
    }, b.prototype = {
        addData: function(b, c, d) {
            var e = new a(b, c, d);
            this.dataList.push(e), this.dataCache = null;
        },
        isDark: function(a, b) {
            if (a < 0 || this.moduleCount <= a || b < 0 || this.moduleCount <= b) throw new Error(a + "," + b);
            return this.modules[a][b][0];
        },
        getEye: function(a, b) {
            if (a < 0 || this.moduleCount <= a || b < 0 || this.moduleCount <= b) throw new Error(a + "," + b);
            var c = this.modules[a][b];
            if (c[1]) {
                var d = "P" + c[1] + "_" + c[2];
                return "A" == c[2] && (d = "A" + c[1]), {
                    isDark: c[0],
                    type: d
                };
            }
            return null;
        },
        getModuleCount: function() {
            return this.moduleCount;
        },
        make: function() {
            this.makeImpl(!1, this.getBestMaskPattern());
        },
        makeImpl: function(a, c) {
            this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
            for(var d = 0; d < this.moduleCount; d++){
                this.modules[d] = new Array(this.moduleCount);
                for(var e = 0; e < this.moduleCount; e++)this.modules[d][e] = [];
            }
            this.setupPositionProbePattern(0, 0, "TL"), this.setupPositionProbePattern(this.moduleCount - 7, 0, "BL"), this.setupPositionProbePattern(0, this.moduleCount - 7, "TR"), this.setupPositionAdjustPattern("A"), this.setupTimingPattern(), this.setupTypeInfo(a, c), this.typeNumber >= 7 && this.setupTypeNumber(a), null == this.dataCache && (this.dataCache = b.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, c);
        },
        setupPositionProbePattern: function(a, b, c) {
            for(var d = -1; d <= 7; d++)if (!(a + d <= -1 || this.moduleCount <= a + d)) for(var e = -1; e <= 7; e++)b + e <= -1 || this.moduleCount <= b + e || (0 <= d && d <= 6 && (0 == e || 6 == e) || 0 <= e && e <= 6 && (0 == d || 6 == d) || 2 <= d && d <= 4 && 2 <= e && e <= 4 ? (this.modules[a + d][b + e][0] = !0, this.modules[a + d][b + e][2] = c, this.modules[a + d][b + e][1] = -0 == d || -0 == e || 6 == d || 6 == e ? "O" : "I") : this.modules[a + d][b + e][0] = !1);
        },
        getBestMaskPattern: function() {
            for(var a = 0, b = 0, c = 0; c < 8; c++){
                this.makeImpl(!0, c);
                var d = t.getLostPoint(this);
                (0 == c || a > d) && (a = d, b = c);
            }
            return b;
        },
        createMovieClip: function(a, b, c) {
            var d = a.createEmptyMovieClip(b, c);
            this.make();
            for(var e = 0; e < this.modules.length; e++)for(var f = 1 * e, g = 0; g < this.modules[e].length; g++){
                var h = 1 * g, i = this.modules[e][g][0];
                i && (d.beginFill(0, 100), d.moveTo(h, f), d.lineTo(h + 1, f), d.lineTo(h + 1, f + 1), d.lineTo(h, f + 1), d.endFill());
            }
            return d;
        },
        setupTimingPattern: function() {
            for(var a = 8; a < this.moduleCount - 8; a++)null == this.modules[a][6][0] && (this.modules[a][6][0] = a % 2 == 0);
            for(var b = 8; b < this.moduleCount - 8; b++)null == this.modules[6][b][0] && (this.modules[6][b][0] = b % 2 == 0);
        },
        setupPositionAdjustPattern: function(a) {
            for(var b = t.getPatternPosition(this.typeNumber), c = 0; c < b.length; c++)for(var d = 0; d < b.length; d++){
                var e = b[c], f = b[d];
                if (null == this.modules[e][f][0]) for(var g = -2; g <= 2; g++)for(var h = -2; h <= 2; h++)-2 == g || 2 == g || -2 == h || 2 == h || 0 == g && 0 == h ? (this.modules[e + g][f + h][0] = !0, this.modules[e + g][f + h][2] = a, this.modules[e + g][f + h][1] = -2 == g || -2 == h || 2 == g || 2 == h ? "O" : "I") : this.modules[e + g][f + h][0] = !1;
            }
        },
        setupTypeNumber: function(a) {
            for(var b = t.getBCHTypeNumber(this.typeNumber), c = 0; c < 18; c++){
                var d = !a && 1 == (b >> c & 1);
                this.modules[Math.floor(c / 3)][c % 3 + this.moduleCount - 8 - 3][0] = d;
            }
            for(var c = 0; c < 18; c++){
                var d = !a && 1 == (b >> c & 1);
                this.modules[c % 3 + this.moduleCount - 8 - 3][Math.floor(c / 3)][0] = d;
            }
        },
        setupTypeInfo: function(a, b) {
            for(var c = this.errorCorrectLevel << 3 | b, d = t.getBCHTypeInfo(c), e = 0; e < 15; e++){
                var f = !a && 1 == (d >> e & 1);
                e < 6 ? this.modules[e][8][0] = f : e < 8 ? this.modules[e + 1][8][0] = f : this.modules[this.moduleCount - 15 + e][8][0] = f;
            }
            for(var e = 0; e < 15; e++){
                var f = !a && 1 == (d >> e & 1);
                e < 8 ? this.modules[8][this.moduleCount - e - 1][0] = f : e < 9 ? this.modules[8][15 - e - 1 + 1][0] = f : this.modules[8][15 - e - 1][0] = f;
            }
            this.modules[this.moduleCount - 8][8][0] = !a;
        },
        mapData: function(a, b) {
            for(var c = -1, d = this.moduleCount - 1, e = 7, f = 0, g = this.moduleCount - 1; g > 0; g -= 2)for(6 == g && g--;;){
                for(var h = 0; h < 2; h++)if (null == this.modules[d][g - h][0]) {
                    var i = !1;
                    f < a.length && (i = 1 == (a[f] >>> e & 1));
                    var j = t.getMask(b, d, g - h);
                    j && (i = !i), this.modules[d][g - h][0] = i, e--, -1 == e && (f++, e = 7);
                }
                if ((d += c) < 0 || this.moduleCount <= d) {
                    d -= c, c = -c;
                    break;
                }
            }
        }
    }, b.PAD0 = 236, b.PAD1 = 17, b.createData = function(a, c, f) {
        for(var g = d.getRSBlocks(a, c), h = new e, i = 0; i < f.length; i++){
            var j = f[i];
            h.put(j.mode, 4), h.put(j.getLength(), t.getLengthInBits(j.mode, a)), j.write(h);
        }
        for(var k = 0, i = 0; i < g.length; i++)k += g[i].dataCount;
        if (h.getLengthInBits() > 8 * k) throw new Error("code length overflow. (" + h.getLengthInBits() + ">" + 8 * k + ")");
        for(h.getLengthInBits() + 4 <= 8 * k && h.put(0, 4); h.getLengthInBits() % 8 != 0;)h.putBit(!1);
        for(;;){
            if (h.getLengthInBits() >= 8 * k) break;
            if (h.put(b.PAD0, 8), h.getLengthInBits() >= 8 * k) break;
            h.put(b.PAD1, 8);
        }
        return b.createBytes(h, g);
    }, b.createBytes = function(a, b) {
        for(var d = 0, e = 0, f = 0, g = new Array(b.length), h = new Array(b.length), i = 0; i < b.length; i++){
            var j = b[i].dataCount, k = b[i].totalCount - j;
            e = Math.max(e, j), f = Math.max(f, k), g[i] = new Array(j);
            for(var l = 0; l < g[i].length; l++)g[i][l] = 255 & a.buffer[l + d];
            d += j;
            var m = t.getErrorCorrectPolynomial(k), n = new c(g[i], m.getLength() - 1), o = n.mod(m);
            h[i] = new Array(m.getLength() - 1);
            for(var l = 0; l < h[i].length; l++){
                var p = l + o.getLength() - h[i].length;
                h[i][l] = p >= 0 ? o.get(p) : 0;
            }
        }
        for(var q = 0, l = 0; l < b.length; l++)q += b[l].totalCount;
        for(var r = new Array(q), s = 0, l = 0; l < e; l++)for(var i = 0; i < b.length; i++)l < g[i].length && (r[s++] = g[i][l]);
        for(var l = 0; l < f; l++)for(var i = 0; i < b.length; i++)l < h[i].length && (r[s++] = h[i][l]);
        return r;
    };
    for(var q = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
    }, r = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    }, s = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    }, t = {
        PATTERN_POSITION_TABLE: [
            [],
            [
                6,
                18
            ],
            [
                6,
                22
            ],
            [
                6,
                26
            ],
            [
                6,
                30
            ],
            [
                6,
                34
            ],
            [
                6,
                22,
                38
            ],
            [
                6,
                24,
                42
            ],
            [
                6,
                26,
                46
            ],
            [
                6,
                28,
                50
            ],
            [
                6,
                30,
                54
            ],
            [
                6,
                32,
                58
            ],
            [
                6,
                34,
                62
            ],
            [
                6,
                26,
                46,
                66
            ],
            [
                6,
                26,
                48,
                70
            ],
            [
                6,
                26,
                50,
                74
            ],
            [
                6,
                30,
                54,
                78
            ],
            [
                6,
                30,
                56,
                82
            ],
            [
                6,
                30,
                58,
                86
            ],
            [
                6,
                34,
                62,
                90
            ],
            [
                6,
                28,
                50,
                72,
                94
            ],
            [
                6,
                26,
                50,
                74,
                98
            ],
            [
                6,
                30,
                54,
                78,
                102
            ],
            [
                6,
                28,
                54,
                80,
                106
            ],
            [
                6,
                32,
                58,
                84,
                110
            ],
            [
                6,
                30,
                58,
                86,
                114
            ],
            [
                6,
                34,
                62,
                90,
                118
            ],
            [
                6,
                26,
                50,
                74,
                98,
                122
            ],
            [
                6,
                30,
                54,
                78,
                102,
                126
            ],
            [
                6,
                26,
                52,
                78,
                104,
                130
            ],
            [
                6,
                30,
                56,
                82,
                108,
                134
            ],
            [
                6,
                34,
                60,
                86,
                112,
                138
            ],
            [
                6,
                30,
                58,
                86,
                114,
                142
            ],
            [
                6,
                34,
                62,
                90,
                118,
                146
            ],
            [
                6,
                30,
                54,
                78,
                102,
                126,
                150
            ],
            [
                6,
                24,
                50,
                76,
                102,
                128,
                154
            ],
            [
                6,
                28,
                54,
                80,
                106,
                132,
                158
            ],
            [
                6,
                32,
                58,
                84,
                110,
                136,
                162
            ],
            [
                6,
                26,
                54,
                82,
                110,
                138,
                166
            ],
            [
                6,
                30,
                58,
                86,
                114,
                142,
                170
            ]
        ],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function(a) {
            for(var b = a << 10; t.getBCHDigit(b) - t.getBCHDigit(t.G15) >= 0;)b ^= t.G15 << t.getBCHDigit(b) - t.getBCHDigit(t.G15);
            return (a << 10 | b) ^ t.G15_MASK;
        },
        getBCHTypeNumber: function(a) {
            for(var b = a << 12; t.getBCHDigit(b) - t.getBCHDigit(t.G18) >= 0;)b ^= t.G18 << t.getBCHDigit(b) - t.getBCHDigit(t.G18);
            return a << 12 | b;
        },
        getBCHDigit: function(a) {
            for(var b = 0; 0 != a;)b++, a >>>= 1;
            return b;
        },
        getPatternPosition: function(a) {
            return t.PATTERN_POSITION_TABLE[a - 1];
        },
        getMask: function(a, b, c) {
            switch(a){
                case s.PATTERN000:
                    return (b + c) % 2 == 0;
                case s.PATTERN001:
                    return b % 2 == 0;
                case s.PATTERN010:
                    return c % 3 == 0;
                case s.PATTERN011:
                    return (b + c) % 3 == 0;
                case s.PATTERN100:
                    return (Math.floor(b / 2) + Math.floor(c / 3)) % 2 == 0;
                case s.PATTERN101:
                    return b * c % 2 + b * c % 3 == 0;
                case s.PATTERN110:
                    return (b * c % 2 + b * c % 3) % 2 == 0;
                case s.PATTERN111:
                    return (b * c % 3 + (b + c) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + a);
            }
        },
        getErrorCorrectPolynomial: function(a) {
            for(var b = new c([
                1
            ], 0), d = 0; d < a; d++)b = b.multiply(new c([
                1,
                u.gexp(d)
            ], 0));
            return b;
        },
        getLengthInBits: function(a, b) {
            if (1 <= b && b < 10) switch(a){
                case q.MODE_NUMBER:
                    return 10;
                case q.MODE_ALPHA_NUM:
                    return 9;
                case q.MODE_8BIT_BYTE:
                case q.MODE_KANJI:
                    return 8;
                default:
                    throw new Error("mode:" + a);
            }
            else if (b < 27) switch(a){
                case q.MODE_NUMBER:
                    return 12;
                case q.MODE_ALPHA_NUM:
                    return 11;
                case q.MODE_8BIT_BYTE:
                    return 16;
                case q.MODE_KANJI:
                    return 10;
                default:
                    throw new Error("mode:" + a);
            }
            else {
                if (!(b < 41)) throw new Error("type:" + b);
                switch(a){
                    case q.MODE_NUMBER:
                        return 14;
                    case q.MODE_ALPHA_NUM:
                        return 13;
                    case q.MODE_8BIT_BYTE:
                        return 16;
                    case q.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + a);
                }
            }
        },
        getLostPoint: function(a) {
            for(var b = a.getModuleCount(), c = 0, d = 0; d < b; d++)for(var e = 0; e < b; e++){
                for(var f = 0, g = a.isDark(d, e), h = -1; h <= 1; h++)if (!(d + h < 0 || b <= d + h)) for(var i = -1; i <= 1; i++)e + i < 0 || b <= e + i || 0 == h && 0 == i || g == a.isDark(d + h, e + i) && f++;
                f > 5 && (c += 3 + f - 5);
            }
            for(var d = 0; d < b - 1; d++)for(var e = 0; e < b - 1; e++){
                var j = 0;
                a.isDark(d, e) && j++, a.isDark(d + 1, e) && j++, a.isDark(d, e + 1) && j++, a.isDark(d + 1, e + 1) && j++, 0 != j && 4 != j || (c += 3);
            }
            for(var d = 0; d < b; d++)for(var e = 0; e < b - 6; e++)a.isDark(d, e) && !a.isDark(d, e + 1) && a.isDark(d, e + 2) && a.isDark(d, e + 3) && a.isDark(d, e + 4) && !a.isDark(d, e + 5) && a.isDark(d, e + 6) && (c += 40);
            for(var e = 0; e < b; e++)for(var d = 0; d < b - 6; d++)a.isDark(d, e) && !a.isDark(d + 1, e) && a.isDark(d + 2, e) && a.isDark(d + 3, e) && a.isDark(d + 4, e) && !a.isDark(d + 5, e) && a.isDark(d + 6, e) && (c += 40);
            for(var k = 0, e = 0; e < b; e++)for(var d = 0; d < b; d++)a.isDark(d, e) && k++;
            return c += Math.abs(100 * k / b / b - 50) / 5 * 10;
        }
    }, u = {
        glog: function(a) {
            if (a < 1) throw new Error("glog(" + a + ")");
            return u.LOG_TABLE[a];
        },
        gexp: function(a) {
            for(; a < 0;)a += 255;
            for(; a >= 256;)a -= 255;
            return u.EXP_TABLE[a];
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
    }, v = 0; v < 8; v++)u.EXP_TABLE[v] = 1 << v;
    for(var v = 8; v < 256; v++)u.EXP_TABLE[v] = u.EXP_TABLE[v - 4] ^ u.EXP_TABLE[v - 5] ^ u.EXP_TABLE[v - 6] ^ u.EXP_TABLE[v - 8];
    for(var v = 0; v < 255; v++)u.LOG_TABLE[u.EXP_TABLE[v]] = v;
    c.prototype = {
        get: function(a) {
            return this.num[a];
        },
        getLength: function() {
            return this.num.length;
        },
        multiply: function(a) {
            for(var b = new Array(this.getLength() + a.getLength() - 1), d = 0; d < this.getLength(); d++)for(var e = 0; e < a.getLength(); e++)b[d + e] ^= u.gexp(u.glog(this.get(d)) + u.glog(a.get(e)));
            return new c(b, 0);
        },
        mod: function(a) {
            if (this.getLength() - a.getLength() < 0) return this;
            for(var b = u.glog(this.get(0)) - u.glog(a.get(0)), d = new Array(this.getLength()), e = 0; e < this.getLength(); e++)d[e] = this.get(e);
            for(var e = 0; e < a.getLength(); e++)d[e] ^= u.gexp(u.glog(a.get(e)) + b);
            return new c(d, 0).mod(a);
        }
    }, d.RS_BLOCK_TABLE = [
        [
            1,
            26,
            19
        ],
        [
            1,
            26,
            16
        ],
        [
            1,
            26,
            13
        ],
        [
            1,
            26,
            9
        ],
        [
            1,
            44,
            34
        ],
        [
            1,
            44,
            28
        ],
        [
            1,
            44,
            22
        ],
        [
            1,
            44,
            16
        ],
        [
            1,
            70,
            55
        ],
        [
            1,
            70,
            44
        ],
        [
            2,
            35,
            17
        ],
        [
            2,
            35,
            13
        ],
        [
            1,
            100,
            80
        ],
        [
            2,
            50,
            32
        ],
        [
            2,
            50,
            24
        ],
        [
            4,
            25,
            9
        ],
        [
            1,
            134,
            108
        ],
        [
            2,
            67,
            43
        ],
        [
            2,
            33,
            15,
            2,
            34,
            16
        ],
        [
            2,
            33,
            11,
            2,
            34,
            12
        ],
        [
            2,
            86,
            68
        ],
        [
            4,
            43,
            27
        ],
        [
            4,
            43,
            19
        ],
        [
            4,
            43,
            15
        ],
        [
            2,
            98,
            78
        ],
        [
            4,
            49,
            31
        ],
        [
            2,
            32,
            14,
            4,
            33,
            15
        ],
        [
            4,
            39,
            13,
            1,
            40,
            14
        ],
        [
            2,
            121,
            97
        ],
        [
            2,
            60,
            38,
            2,
            61,
            39
        ],
        [
            4,
            40,
            18,
            2,
            41,
            19
        ],
        [
            4,
            40,
            14,
            2,
            41,
            15
        ],
        [
            2,
            146,
            116
        ],
        [
            3,
            58,
            36,
            2,
            59,
            37
        ],
        [
            4,
            36,
            16,
            4,
            37,
            17
        ],
        [
            4,
            36,
            12,
            4,
            37,
            13
        ],
        [
            2,
            86,
            68,
            2,
            87,
            69
        ],
        [
            4,
            69,
            43,
            1,
            70,
            44
        ],
        [
            6,
            43,
            19,
            2,
            44,
            20
        ],
        [
            6,
            43,
            15,
            2,
            44,
            16
        ],
        [
            4,
            101,
            81
        ],
        [
            1,
            80,
            50,
            4,
            81,
            51
        ],
        [
            4,
            50,
            22,
            4,
            51,
            23
        ],
        [
            3,
            36,
            12,
            8,
            37,
            13
        ],
        [
            2,
            116,
            92,
            2,
            117,
            93
        ],
        [
            6,
            58,
            36,
            2,
            59,
            37
        ],
        [
            4,
            46,
            20,
            6,
            47,
            21
        ],
        [
            7,
            42,
            14,
            4,
            43,
            15
        ],
        [
            4,
            133,
            107
        ],
        [
            8,
            59,
            37,
            1,
            60,
            38
        ],
        [
            8,
            44,
            20,
            4,
            45,
            21
        ],
        [
            12,
            33,
            11,
            4,
            34,
            12
        ],
        [
            3,
            145,
            115,
            1,
            146,
            116
        ],
        [
            4,
            64,
            40,
            5,
            65,
            41
        ],
        [
            11,
            36,
            16,
            5,
            37,
            17
        ],
        [
            11,
            36,
            12,
            5,
            37,
            13
        ],
        [
            5,
            109,
            87,
            1,
            110,
            88
        ],
        [
            5,
            65,
            41,
            5,
            66,
            42
        ],
        [
            5,
            54,
            24,
            7,
            55,
            25
        ],
        [
            11,
            36,
            12,
            7,
            37,
            13
        ],
        [
            5,
            122,
            98,
            1,
            123,
            99
        ],
        [
            7,
            73,
            45,
            3,
            74,
            46
        ],
        [
            15,
            43,
            19,
            2,
            44,
            20
        ],
        [
            3,
            45,
            15,
            13,
            46,
            16
        ],
        [
            1,
            135,
            107,
            5,
            136,
            108
        ],
        [
            10,
            74,
            46,
            1,
            75,
            47
        ],
        [
            1,
            50,
            22,
            15,
            51,
            23
        ],
        [
            2,
            42,
            14,
            17,
            43,
            15
        ],
        [
            5,
            150,
            120,
            1,
            151,
            121
        ],
        [
            9,
            69,
            43,
            4,
            70,
            44
        ],
        [
            17,
            50,
            22,
            1,
            51,
            23
        ],
        [
            2,
            42,
            14,
            19,
            43,
            15
        ],
        [
            3,
            141,
            113,
            4,
            142,
            114
        ],
        [
            3,
            70,
            44,
            11,
            71,
            45
        ],
        [
            17,
            47,
            21,
            4,
            48,
            22
        ],
        [
            9,
            39,
            13,
            16,
            40,
            14
        ],
        [
            3,
            135,
            107,
            5,
            136,
            108
        ],
        [
            3,
            67,
            41,
            13,
            68,
            42
        ],
        [
            15,
            54,
            24,
            5,
            55,
            25
        ],
        [
            15,
            43,
            15,
            10,
            44,
            16
        ],
        [
            4,
            144,
            116,
            4,
            145,
            117
        ],
        [
            17,
            68,
            42
        ],
        [
            17,
            50,
            22,
            6,
            51,
            23
        ],
        [
            19,
            46,
            16,
            6,
            47,
            17
        ],
        [
            2,
            139,
            111,
            7,
            140,
            112
        ],
        [
            17,
            74,
            46
        ],
        [
            7,
            54,
            24,
            16,
            55,
            25
        ],
        [
            34,
            37,
            13
        ],
        [
            4,
            151,
            121,
            5,
            152,
            122
        ],
        [
            4,
            75,
            47,
            14,
            76,
            48
        ],
        [
            11,
            54,
            24,
            14,
            55,
            25
        ],
        [
            16,
            45,
            15,
            14,
            46,
            16
        ],
        [
            6,
            147,
            117,
            4,
            148,
            118
        ],
        [
            6,
            73,
            45,
            14,
            74,
            46
        ],
        [
            11,
            54,
            24,
            16,
            55,
            25
        ],
        [
            30,
            46,
            16,
            2,
            47,
            17
        ],
        [
            8,
            132,
            106,
            4,
            133,
            107
        ],
        [
            8,
            75,
            47,
            13,
            76,
            48
        ],
        [
            7,
            54,
            24,
            22,
            55,
            25
        ],
        [
            22,
            45,
            15,
            13,
            46,
            16
        ],
        [
            10,
            142,
            114,
            2,
            143,
            115
        ],
        [
            19,
            74,
            46,
            4,
            75,
            47
        ],
        [
            28,
            50,
            22,
            6,
            51,
            23
        ],
        [
            33,
            46,
            16,
            4,
            47,
            17
        ],
        [
            8,
            152,
            122,
            4,
            153,
            123
        ],
        [
            22,
            73,
            45,
            3,
            74,
            46
        ],
        [
            8,
            53,
            23,
            26,
            54,
            24
        ],
        [
            12,
            45,
            15,
            28,
            46,
            16
        ],
        [
            3,
            147,
            117,
            10,
            148,
            118
        ],
        [
            3,
            73,
            45,
            23,
            74,
            46
        ],
        [
            4,
            54,
            24,
            31,
            55,
            25
        ],
        [
            11,
            45,
            15,
            31,
            46,
            16
        ],
        [
            7,
            146,
            116,
            7,
            147,
            117
        ],
        [
            21,
            73,
            45,
            7,
            74,
            46
        ],
        [
            1,
            53,
            23,
            37,
            54,
            24
        ],
        [
            19,
            45,
            15,
            26,
            46,
            16
        ],
        [
            5,
            145,
            115,
            10,
            146,
            116
        ],
        [
            19,
            75,
            47,
            10,
            76,
            48
        ],
        [
            15,
            54,
            24,
            25,
            55,
            25
        ],
        [
            23,
            45,
            15,
            25,
            46,
            16
        ],
        [
            13,
            145,
            115,
            3,
            146,
            116
        ],
        [
            2,
            74,
            46,
            29,
            75,
            47
        ],
        [
            42,
            54,
            24,
            1,
            55,
            25
        ],
        [
            23,
            45,
            15,
            28,
            46,
            16
        ],
        [
            17,
            145,
            115
        ],
        [
            10,
            74,
            46,
            23,
            75,
            47
        ],
        [
            10,
            54,
            24,
            35,
            55,
            25
        ],
        [
            19,
            45,
            15,
            35,
            46,
            16
        ],
        [
            17,
            145,
            115,
            1,
            146,
            116
        ],
        [
            14,
            74,
            46,
            21,
            75,
            47
        ],
        [
            29,
            54,
            24,
            19,
            55,
            25
        ],
        [
            11,
            45,
            15,
            46,
            46,
            16
        ],
        [
            13,
            145,
            115,
            6,
            146,
            116
        ],
        [
            14,
            74,
            46,
            23,
            75,
            47
        ],
        [
            44,
            54,
            24,
            7,
            55,
            25
        ],
        [
            59,
            46,
            16,
            1,
            47,
            17
        ],
        [
            12,
            151,
            121,
            7,
            152,
            122
        ],
        [
            12,
            75,
            47,
            26,
            76,
            48
        ],
        [
            39,
            54,
            24,
            14,
            55,
            25
        ],
        [
            22,
            45,
            15,
            41,
            46,
            16
        ],
        [
            6,
            151,
            121,
            14,
            152,
            122
        ],
        [
            6,
            75,
            47,
            34,
            76,
            48
        ],
        [
            46,
            54,
            24,
            10,
            55,
            25
        ],
        [
            2,
            45,
            15,
            64,
            46,
            16
        ],
        [
            17,
            152,
            122,
            4,
            153,
            123
        ],
        [
            29,
            74,
            46,
            14,
            75,
            47
        ],
        [
            49,
            54,
            24,
            10,
            55,
            25
        ],
        [
            24,
            45,
            15,
            46,
            46,
            16
        ],
        [
            4,
            152,
            122,
            18,
            153,
            123
        ],
        [
            13,
            74,
            46,
            32,
            75,
            47
        ],
        [
            48,
            54,
            24,
            14,
            55,
            25
        ],
        [
            42,
            45,
            15,
            32,
            46,
            16
        ],
        [
            20,
            147,
            117,
            4,
            148,
            118
        ],
        [
            40,
            75,
            47,
            7,
            76,
            48
        ],
        [
            43,
            54,
            24,
            22,
            55,
            25
        ],
        [
            10,
            45,
            15,
            67,
            46,
            16
        ],
        [
            19,
            148,
            118,
            6,
            149,
            119
        ],
        [
            18,
            75,
            47,
            31,
            76,
            48
        ],
        [
            34,
            54,
            24,
            34,
            55,
            25
        ],
        [
            20,
            45,
            15,
            61,
            46,
            16
        ]
    ], d.getRSBlocks = function(a, b) {
        var c = d.getRsBlockTable(a, b);
        if (c == i) throw new Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b);
        for(var e = c.length / 3, f = [], g = 0; g < e; g++)for(var h = c[3 * g + 0], j = c[3 * g + 1], k = c[3 * g + 2], l = 0; l < h; l++)f.push(new d(j, k));
        return f;
    }, d.getRsBlockTable = function(a, b) {
        switch(b){
            case r.L:
                return d.RS_BLOCK_TABLE[4 * (a - 1) + 0];
            case r.M:
                return d.RS_BLOCK_TABLE[4 * (a - 1) + 1];
            case r.Q:
                return d.RS_BLOCK_TABLE[4 * (a - 1) + 2];
            case r.H:
                return d.RS_BLOCK_TABLE[4 * (a - 1) + 3];
            default:
                return i;
        }
    }, e.prototype = {
        get: function(a) {
            var b = Math.floor(a / 8);
            return 1 == (this.buffer[b] >>> 7 - a % 8 & 1);
        },
        put: function(a, b) {
            for(var c = 0; c < b; c++)this.putBit(1 == (a >>> b - c - 1 & 1));
        },
        getLengthInBits: function() {
            return this.length;
        },
        putBit: function(a) {
            var b = Math.floor(this.length / 8);
            this.buffer.length <= b && this.buffer.push(0), a && (this.buffer[b] |= 128 >>> this.length % 8), this.length++;
        }
    };
    var w = [
        [
            17,
            14,
            11,
            7
        ],
        [
            32,
            26,
            20,
            14
        ],
        [
            53,
            42,
            32,
            24
        ],
        [
            78,
            62,
            46,
            34
        ],
        [
            106,
            84,
            60,
            44
        ],
        [
            134,
            106,
            74,
            58
        ],
        [
            154,
            122,
            86,
            64
        ],
        [
            192,
            152,
            108,
            84
        ],
        [
            230,
            180,
            130,
            98
        ],
        [
            271,
            213,
            151,
            119
        ],
        [
            321,
            251,
            177,
            137
        ],
        [
            367,
            287,
            203,
            155
        ],
        [
            425,
            331,
            241,
            177
        ],
        [
            458,
            362,
            258,
            194
        ],
        [
            520,
            412,
            292,
            220
        ],
        [
            586,
            450,
            322,
            250
        ],
        [
            644,
            504,
            364,
            280
        ],
        [
            718,
            560,
            394,
            310
        ],
        [
            792,
            624,
            442,
            338
        ],
        [
            858,
            666,
            482,
            382
        ],
        [
            929,
            711,
            509,
            403
        ],
        [
            1003,
            779,
            565,
            439
        ],
        [
            1091,
            857,
            611,
            461
        ],
        [
            1171,
            911,
            661,
            511
        ],
        [
            1273,
            997,
            715,
            535
        ],
        [
            1367,
            1059,
            751,
            593
        ],
        [
            1465,
            1125,
            805,
            625
        ],
        [
            1528,
            1190,
            868,
            658
        ],
        [
            1628,
            1264,
            908,
            698
        ],
        [
            1732,
            1370,
            982,
            742
        ],
        [
            1840,
            1452,
            1030,
            790
        ],
        [
            1952,
            1538,
            1112,
            842
        ],
        [
            2068,
            1628,
            1168,
            898
        ],
        [
            2188,
            1722,
            1228,
            958
        ],
        [
            2303,
            1809,
            1283,
            983
        ],
        [
            2431,
            1911,
            1351,
            1051
        ],
        [
            2563,
            1989,
            1423,
            1093
        ],
        [
            2699,
            2099,
            1499,
            1139
        ],
        [
            2809,
            2213,
            1579,
            1219
        ],
        [
            2953,
            2331,
            1663,
            1273
        ]
    ], x = function() {
        return "undefined" != typeof CanvasRenderingContext2D;
    }() ? function() {
        function a() {
            if ("svg" == this._htOption.drawer) {
                var a = this._oContext.getSerializedSvg(!0);
                this.dataURL = a, this._el.innerHTML = a;
            } else {
                !function(a, b, c, d) {
                    var e = document.createElement("canvas");
                    e.width = c, e.height = d, e.getContext("2d").drawImage(a, 0, 0, c, d), a.width = c, a.height = d, b.drawImage(e, 0, 0);
                }(this._elCanvas, this._oContext, this._htOption.width + 2 * this._htOption.quietZone, this._htOption.height + this._htOption.titleHeight + 2 * this._htOption.quietZone);
                try {
                    var b = this._elCanvas.toDataURL("image/png");
                    this.dataURL = b;
                } catch (a) {
                    console.error(a);
                }
            }
            this._htOption.onRenderingEnd && (this.dataURL || console.error("Can not get base64 data, please check: 1. Published the page and image to the server 2. The image request support CORS 3. Configured `crossOrigin:'anonymous'` option"), this._htOption.onRenderingEnd(this._htOption, this.dataURL));
        }
        function b(a, b) {
            var c = this;
            if (c._fFail = b, c._fSuccess = a, null === c._bSupportDataURI) {
                var d = document.createElement("img"), e = function() {
                    c._bSupportDataURI = !1, c._fFail && c._fFail.call(c);
                }, f = function() {
                    c._bSupportDataURI = !0, c._fSuccess && c._fSuccess.call(c);
                };
                d.onabort = e, d.onerror = e, d.onload = f, d.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
            } else !0 === c._bSupportDataURI && c._fSuccess ? c._fSuccess.call(c) : !1 === c._bSupportDataURI && c._fFail && c._fFail.call(c);
        }
        if (m._android && m._android <= 2.1) {
            var c = 1 / window.devicePixelRatio, d = CanvasRenderingContext2D.prototype.drawImage;
            CanvasRenderingContext2D.prototype.drawImage = function(a, b, e, f, g, h, i, j, k) {
                if ("nodeName" in a && /img/i.test(a.nodeName)) for(var l = arguments.length - 1; l >= 1; l--)arguments[l] = arguments[l] * c;
                else void 0 === j && (arguments[1] *= c, arguments[2] *= c, arguments[3] *= c, arguments[4] *= c);
                d.apply(this, arguments);
            };
        }
        var e = function(a, b) {
            this._bIsPainted = !1, this._android = f(), this._el = a, this._htOption = b, "svg" == this._htOption.drawer ? (this._oContext = {}, this._elCanvas = {}) : (this._elCanvas = document.createElement("canvas"), this._el.appendChild(this._elCanvas), this._oContext = this._elCanvas.getContext("2d")), this._bSupportDataURI = null, this.dataURL = null;
        };
        return e.prototype.draw = function(a) {
            function b() {
                d.quietZone > 0 && d.quietZoneColor && (j.lineWidth = 0, j.fillStyle = d.quietZoneColor, j.fillRect(0, 0, k._elCanvas.width, d.quietZone), j.fillRect(0, d.quietZone, d.quietZone, k._elCanvas.height - 2 * d.quietZone), j.fillRect(k._elCanvas.width - d.quietZone, d.quietZone, d.quietZone, k._elCanvas.height - 2 * d.quietZone), j.fillRect(0, k._elCanvas.height - d.quietZone, k._elCanvas.width, d.quietZone));
            }
            function c(a) {
                function c(a) {
                    var c = Math.round(d.width / 3.5), e = Math.round(d.height / 3.5);
                    c !== e && (c = e), d.logoMaxWidth ? c = Math.round(d.logoMaxWidth) : d.logoWidth && (c = Math.round(d.logoWidth)), d.logoMaxHeight ? e = Math.round(d.logoMaxHeight) : d.logoHeight && (e = Math.round(d.logoHeight));
                    var f, g;
                    void 0 === a.naturalWidth ? (f = a.width, g = a.height) : (f = a.naturalWidth, g = a.naturalHeight), (d.logoMaxWidth || d.logoMaxHeight) && (d.logoMaxWidth && f <= c && (c = f), d.logoMaxHeight && g <= e && (e = g), f <= c && g <= e && (c = f, e = g));
                    var h = (d.realWidth - c) / 2, i = (d.calculatedQRHeight - e) / 2 + d.titleHeight + d.quietZone, k = Math.min(c / f, e / g), l = f * k, m = g * k;
                    (d.logoMaxWidth || d.logoMaxHeight) && (c = l, e = m, h = (d.realWidth - c) / 2, i = (d.realHeight - e) / 2), d.logoBackgroundTransparent || (j.fillStyle = d.logoBackgroundColor, j.fillRect(h, i, c, e));
                    var n = j.imageSmoothingQuality, o = j.imageSmoothingEnabled;
                    j.imageSmoothingEnabled = !0, j.imageSmoothingQuality = "high", j.drawImage(a, h + (c - l) / 2, i + (e - m) / 2, l, m), j.imageSmoothingEnabled = o, j.imageSmoothingQuality = n, b(), s._bIsPainted = !0, s.makeImage();
                }
                d.onRenderingStart && d.onRenderingStart(d);
                for(var h = 0; h < e; h++)for(var i = 0; i < e; i++){
                    var k = i * f + d.quietZone, l = h * g + d.quietZone, m = a.isDark(h, i), n = a.getEye(h, i), o = d.dotScale;
                    j.lineWidth = 0;
                    var p, q;
                    n ? (p = d[n.type] || d[n.type.substring(0, 2)] || d.colorDark, q = d.colorLight) : d.backgroundImage ? (q = "rgba(0,0,0,0)", 6 == h ? d.autoColor ? (p = d.timing_H || d.timing || d.autoColorDark, q = d.autoColorLight) : p = d.timing_H || d.timing || d.colorDark : 6 == i ? d.autoColor ? (p = d.timing_V || d.timing || d.autoColorDark, q = d.autoColorLight) : p = d.timing_V || d.timing || d.colorDark : d.autoColor ? (p = d.autoColorDark, q = d.autoColorLight) : p = d.colorDark) : (p = 6 == h ? d.timing_H || d.timing || d.colorDark : 6 == i ? d.timing_V || d.timing || d.colorDark : d.colorDark, q = d.colorLight), j.strokeStyle = m ? p : q, j.fillStyle = m ? p : q, n ? (o = "AO" == n.type ? d.dotScaleAO : "AI" == n.type ? d.dotScaleAI : 1, d.backgroundImage && d.autoColor ? (p = ("AO" == n.type ? d.AI : d.AO) || d.autoColorDark, q = d.autoColorLight) : p = ("AO" == n.type ? d.AI : d.AO) || p, m = n.isDark, j.fillRect(Math.ceil(k + f * (1 - o) / 2), Math.ceil(d.titleHeight + l + g * (1 - o) / 2), Math.ceil(f * o), Math.ceil(g * o))) : 6 == h ? (o = d.dotScaleTiming_H, j.fillRect(Math.ceil(k + f * (1 - o) / 2), Math.ceil(d.titleHeight + l + g * (1 - o) / 2), Math.ceil(f * o), Math.ceil(g * o))) : 6 == i ? (o = d.dotScaleTiming_V, j.fillRect(Math.ceil(k + f * (1 - o) / 2), Math.ceil(d.titleHeight + l + g * (1 - o) / 2), Math.ceil(f * o), Math.ceil(g * o))) : (d.backgroundImage, j.fillRect(Math.ceil(k + f * (1 - o) / 2), Math.ceil(d.titleHeight + l + g * (1 - o) / 2), Math.ceil(f * o), Math.ceil(g * o))), 1 == d.dotScale || n || (j.strokeStyle = d.colorLight);
                }
                if (d.title && (j.fillStyle = d.titleBackgroundColor, j.fillRect(d.quietZone, d.quietZone, d.calculatedQRWidth, d.titleHeight), j.font = d.titleFont, j.fillStyle = d.titleColor, j.textAlign = "center", j.fillText(d.title, this._elCanvas.width / 2, +d.quietZone + d.titleTop)), d.subTitle && (j.font = d.subTitleFont, j.fillStyle = d.subTitleColor, j.fillText(d.subTitle, this._elCanvas.width / 2, +d.quietZone + d.subTitleTop)), d.logo) {
                    var r = new Image, s = this;
                    r.onload = function() {
                        c(r);
                    }, r.onerror = function(a) {
                        console.error(a);
                    }, null != d.crossOrigin && (r.crossOrigin = d.crossOrigin), r.originalSrc = d.logo, r.src = d.logo;
                } else b(), this._bIsPainted = !0, this.makeImage();
            }
            var d = this._htOption, e = a.getModuleCount(), f = d.width / e, g = d.height / e;
            f <= 1 && (f = 1), g <= 1 && (g = 1), f = Math.round(f), g = Math.round(g);
            var h = f * e, i = g * e;
            d.heightWithTitle = i + d.titleHeight, d.realHeight = d.heightWithTitle + 2 * d.quietZone, d.realWidth = h + 2 * d.quietZone, d.calculatedQRWidth = h, d.calculatedQRHeight = i, this._elCanvas.width = d.realWidth, this._elCanvas.height = d.realHeight, "canvas" != d.drawer && (this._oContext = new C2S(d.width + 2 * this._htOption.quietZone, d.height + d.titleHeight + 2 * this._htOption.quietZone, d.realWidth, d.realHeight)), this.clear();
            var j = this._oContext;
            j.lineWidth = 0, j.fillStyle = d.colorLight, j.fillRect(0, 0, this._elCanvas.width, this._elCanvas.height), j.clearRect(d.quietZone, d.quietZone, d.calculatedQRWidth, d.titleHeight);
            var k = this;
            if (d.backgroundImage) {
                var l = new Image;
                l.onload = function() {
                    j.globalAlpha = 1, j.globalAlpha = d.backgroundImageAlpha;
                    var b = j.imageSmoothingQuality, e = j.imageSmoothingEnabled;
                    j.imageSmoothingEnabled = !0, j.imageSmoothingQuality = "high", (d.title || d.subTitle) && d.titleHeight ? j.drawImage(l, d.quietZone, d.quietZone + d.titleHeight, d.width, d.height) : j.drawImage(l, 0, 0, d.realWidth, d.realHeight), j.imageSmoothingEnabled = e, j.imageSmoothingQuality = b, j.globalAlpha = 1, c.call(k, a);
                }, null != d.crossOrigin && (l.crossOrigin = d.crossOrigin), l.originalSrc = d.backgroundImage, l.src = d.backgroundImage;
            } else c.call(k, a);
        }, e.prototype.makeImage = function() {
            this._bIsPainted && b.call(this, a);
        }, e.prototype.isPainted = function() {
            return this._bIsPainted;
        }, e.prototype.clear = function() {
            this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1;
        }, e.prototype.remove = function() {
            this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1, this._el.innerHTML = "";
        }, e.prototype.round = function(a) {
            return a ? Math.floor(1e3 * a) / 1e3 : a;
        }, e;
    }() : function() {
        var a = function(a, b) {
            this._el = a, this._htOption = b;
        };
        return a.prototype.draw = function(a) {
            var b = this._htOption, c = this._el, d = a.getModuleCount(), e = b.width / d, f = b.height / d;
            e <= 1 && (e = 1), f <= 1 && (f = 1);
            var g = e * d, h = f * d;
            b.heightWithTitle = h + b.titleHeight, b.realHeight = b.heightWithTitle + 2 * b.quietZone, b.realWidth = g + 2 * b.quietZone;
            var i = [], j = "", k = Math.round(e * b.dotScale), l = Math.round(f * b.dotScale);
            k < 4 && (k = 4, l = 4);
            var m = b.colorDark, n = b.colorLight;
            if (b.backgroundImage) {
                b.autoColor ? (b.colorDark = "rgba(0, 0, 0, .6);filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#99000000', EndColorStr='#99000000');", b.colorLight = "rgba(255, 255, 255, .7);filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#B2FFFFFF', EndColorStr='#B2FFFFFF');") : b.colorLight = "rgba(0,0,0,0)";
                var o = '<div style="display:inline-block; z-index:-10;position:absolute;"><img src="' + b.backgroundImage + '" width="' + (b.width + 2 * b.quietZone) + '" height="' + b.realHeight + '" style="opacity:' + b.backgroundImageAlpha + ";filter:alpha(opacity=" + 100 * b.backgroundImageAlpha + '); "/></div>';
                i.push(o);
            }
            if (b.quietZone && (j = "display:inline-block; width:" + (b.width + 2 * b.quietZone) + "px; height:" + (b.width + 2 * b.quietZone) + "px;background:" + b.quietZoneColor + "; text-align:center;"), i.push('<div style="font-size:0;' + j + '">'), i.push('<table  style="font-size:0;border:0;border-collapse:collapse; margin-top:' + b.quietZone + 'px;" border="0" cellspacing="0" cellspadding="0" align="center" valign="middle">'), i.push('<tr height="' + b.titleHeight + '" align="center"><td style="border:0;border-collapse:collapse;margin:0;padding:0" colspan="' + d + '">'), b.title) {
                var p = b.titleColor, q = b.titleFont;
                i.push('<div style="width:100%;margin-top:' + b.titleTop + "px;color:" + p + ";font:" + q + ";background:" + b.titleBackgroundColor + '">' + b.title + "</div>");
            }
            b.subTitle && i.push('<div style="width:100%;margin-top:' + (b.subTitleTop - b.titleTop) + "px;color:" + b.subTitleColor + "; font:" + b.subTitleFont + '">' + b.subTitle + "</div>"), i.push("</td></tr>");
            for(var r = 0; r < d; r++){
                i.push('<tr style="border:0; padding:0; margin:0;" height="7">');
                for(var s = 0; s < d; s++){
                    var t = a.isDark(r, s), u = a.getEye(r, s);
                    if (u) {
                        t = u.isDark;
                        var v = u.type, w = b[v] || b[v.substring(0, 2)] || m;
                        i.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + 'px;"><span style="width:' + e + "px;height:" + f + "px;background-color:" + (t ? w : n) + ';display:inline-block"></span></td>');
                    } else {
                        var x = b.colorDark;
                        6 == r ? (x = b.timing_H || b.timing || m, i.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + "px;background-color:" + (t ? x : n) + ';"></td>')) : 6 == s ? (x = b.timing_V || b.timing || m, i.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + "px;background-color:" + (t ? x : n) + ';"></td>')) : i.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + 'px;"><div style="display:inline-block;width:' + k + "px;height:" + l + "px;background-color:" + (t ? x : b.colorLight) + ';"></div></td>');
                    }
                }
                i.push("</tr>");
            }
            if (i.push("</table>"), i.push("</div>"), b.logo) {
                var y = new Image;
                null != b.crossOrigin && (y.crossOrigin = b.crossOrigin), y.src = b.logo;
                var z = b.width / 3.5, A = b.height / 3.5;
                z != A && (z = A), b.logoWidth && (z = b.logoWidth), b.logoHeight && (A = b.logoHeight);
                var B = "position:relative; z-index:1;display:table-cell;top:-" + (b.height / 2 + A / 2 + b.quietZone) + "px;text-align:center; width:" + z + "px; height:" + A + "px;line-height:" + z + "px; vertical-align: middle;";
                b.logoBackgroundTransparent || (B += "background:" + b.logoBackgroundColor), i.push('<div style="' + B + '"><img  src="' + b.logo + '"  style="max-width: ' + z + "px; max-height: " + A + 'px;" /> <div style=" display: none; width:1px;margin-left: -1px;"></div></div>');
            }
            b.onRenderingStart && b.onRenderingStart(b), c.innerHTML = i.join("");
            var C = c.childNodes[0], D = (b.width - C.offsetWidth) / 2, E = (b.heightWithTitle - C.offsetHeight) / 2;
            D > 0 && E > 0 && (C.style.margin = E + "px " + D + "px"), this._htOption.onRenderingEnd && this._htOption.onRenderingEnd(this._htOption, null);
        }, a.prototype.clear = function() {
            this._el.innerHTML = "";
        }, a;
    }();
    j = function(a, b) {
        if (this._htOption = {
            width: 256,
            height: 256,
            typeNumber: 4,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: r.H,
            dotScale: 1,
            dotScaleTiming: 1,
            dotScaleTiming_H: i,
            dotScaleTiming_V: i,
            dotScaleA: 1,
            dotScaleAO: i,
            dotScaleAI: i,
            quietZone: 0,
            quietZoneColor: "rgba(0,0,0,0)",
            title: "",
            titleFont: "normal normal bold 16px Arial",
            titleColor: "#000000",
            titleBackgroundColor: "#ffffff",
            titleHeight: 0,
            titleTop: 30,
            subTitle: "",
            subTitleFont: "normal normal normal 14px Arial",
            subTitleColor: "#4F4F4F",
            subTitleTop: 60,
            logo: i,
            logoWidth: i,
            logoHeight: i,
            logoMaxWidth: i,
            logoMaxHeight: i,
            logoBackgroundColor: "#ffffff",
            logoBackgroundTransparent: !1,
            PO: i,
            PI: i,
            PO_TL: i,
            PI_TL: i,
            PO_TR: i,
            PI_TR: i,
            PO_BL: i,
            PI_BL: i,
            AO: i,
            AI: i,
            timing: i,
            timing_H: i,
            timing_V: i,
            backgroundImage: i,
            backgroundImageAlpha: 1,
            autoColor: !1,
            autoColorDark: "rgba(0, 0, 0, .6)",
            autoColorLight: "rgba(255, 255, 255, .7)",
            onRenderingStart: i,
            onRenderingEnd: i,
            version: 0,
            tooltip: !1,
            binary: !1,
            drawer: "canvas",
            crossOrigin: null,
            utf8WithoutBOM: !0
        }, "string" == typeof b && (b = {
            text: b
        }), b) for(var c in b)this._htOption[c] = b[c];
        this._htOption.title || this._htOption.subTitle || (this._htOption.titleHeight = 0), (this._htOption.version < 0 || this._htOption.version > 40) && (console.warn("QR Code version '" + this._htOption.version + "' is invalidate, reset to 0"), this._htOption.version = 0), (this._htOption.dotScale < 0 || this._htOption.dotScale > 1) && (console.warn(this._htOption.dotScale + " , is invalidate, dotScale must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScale = 1), (this._htOption.dotScaleTiming < 0 || this._htOption.dotScaleTiming > 1) && (console.warn(this._htOption.dotScaleTiming + " , is invalidate, dotScaleTiming must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleTiming = 1), this._htOption.dotScaleTiming_H ? (this._htOption.dotScaleTiming_H < 0 || this._htOption.dotScaleTiming_H > 1) && (console.warn(this._htOption.dotScaleTiming_H + " , is invalidate, dotScaleTiming_H must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleTiming_H = 1) : this._htOption.dotScaleTiming_H = this._htOption.dotScaleTiming, this._htOption.dotScaleTiming_V ? (this._htOption.dotScaleTiming_V < 0 || this._htOption.dotScaleTiming_V > 1) && (console.warn(this._htOption.dotScaleTiming_V + " , is invalidate, dotScaleTiming_V must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleTiming_V = 1) : this._htOption.dotScaleTiming_V = this._htOption.dotScaleTiming, (this._htOption.dotScaleA < 0 || this._htOption.dotScaleA > 1) && (console.warn(this._htOption.dotScaleA + " , is invalidate, dotScaleA must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleA = 1), this._htOption.dotScaleAO ? (this._htOption.dotScaleAO < 0 || this._htOption.dotScaleAO > 1) && (console.warn(this._htOption.dotScaleAO + " , is invalidate, dotScaleAO must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleAO = 1) : this._htOption.dotScaleAO = this._htOption.dotScaleA, this._htOption.dotScaleAI ? (this._htOption.dotScaleAI < 0 || this._htOption.dotScaleAI > 1) && (console.warn(this._htOption.dotScaleAI + " , is invalidate, dotScaleAI must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleAI = 1) : this._htOption.dotScaleAI = this._htOption.dotScaleA, (this._htOption.backgroundImageAlpha < 0 || this._htOption.backgroundImageAlpha > 1) && (console.warn(this._htOption.backgroundImageAlpha + " , is invalidate, backgroundImageAlpha must between 0 and 1, now reset to 1. "), this._htOption.backgroundImageAlpha = 1), this._htOption.quietZone || (this._htOption.quietZone = 0), this._htOption.titleHeight || (this._htOption.titleHeight = 0), this._htOption.width = Math.round(this._htOption.width), this._htOption.height = Math.round(this._htOption.height), this._htOption.quietZone = Math.round(this._htOption.quietZone), this._htOption.titleHeight = Math.round(this._htOption.titleHeight), "string" == typeof a && (a = document.getElementById(a)), (!this._htOption.drawer || "svg" != this._htOption.drawer && "canvas" != this._htOption.drawer) && (this._htOption.drawer = "canvas"), this._android = f(), this._el = a, this._oQRCode = null, this._htOption._element = a;
        var d = {};
        for(var c in this._htOption)d[c] = this._htOption[c];
        this._oDrawing = new x(this._el, d), this._htOption.text && this.makeCode(this._htOption.text);
    }, j.prototype.makeCode = function(a) {
        this._oQRCode = new b(g(a, this._htOption), this._htOption.correctLevel), this._oQRCode.addData(a, this._htOption.binary, this._htOption.utf8WithoutBOM), this._oQRCode.make(), this._htOption.tooltip && (this._el.title = a), this._oDrawing.draw(this._oQRCode);
    }, j.prototype.makeImage = function() {
        "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage();
    }, j.prototype.clear = function() {
        this._oDrawing.remove();
    }, j.prototype.resize = function(a, b) {
        this._oDrawing._htOption.width = a, this._oDrawing._htOption.height = b, this._oDrawing.draw(this._oQRCode);
    }, j.prototype.download = function(a) {
        var b = this._oDrawing.dataURL, c = document.createElement("a");
        if ("svg" == this._htOption.drawer) {
            a += ".svg";
            var d = new Blob([
                b
            ], {
                type: "text/plain"
            });
            if (navigator.msSaveBlob) navigator.msSaveBlob(d, a);
            else {
                c.download = a;
                var e = new FileReader;
                e.onload = function() {
                    c.href = e.result, c.click();
                }, e.readAsDataURL(d);
            }
        } else if (a += ".png", navigator.msSaveBlob) {
            var f = function(a) {
                var b = atob(a.split(",")[1]), c = a.split(",")[0].split(":")[1].split(";")[0], d = new ArrayBuffer(b.length), e = new Uint8Array(d);
                for(v = 0; v < b.length; v++)e[v] = b.charCodeAt(v);
                return new Blob([
                    d
                ], {
                    type: c
                });
            }(b);
            navigator.msSaveBlob(f, a);
        } else c.download = a, c.href = b, c.click();
    }, j.prototype.noConflict = function() {
        return m.QRCode === this && (m.QRCode = p), j;
    }, j.CorrectLevel = r, "function" == typeof define && (define.amd || define.cmd) ? define([], function() {
        return j;
    }) : o ? ((o.exports = j).QRCode = j, n.QRCode = j) : m.QRCode = j;
}).call(this);

});


var $58QMB = parcelRequire("58QMB");
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */ var $b811d544982c9a9d$exports = {};
"use strict";


const $eebec0a1229b249a$var$_0n = BigInt(0);
const $eebec0a1229b249a$var$_1n = BigInt(1);
const $eebec0a1229b249a$var$_2n = BigInt(2);
const $eebec0a1229b249a$var$_3n = BigInt(3);
const $eebec0a1229b249a$var$_8n = BigInt(8);
const $eebec0a1229b249a$export$8ff8607b70325343 = Object.freeze({
    a: $eebec0a1229b249a$var$_0n,
    b: BigInt(7),
    P: BigInt('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f'),
    n: BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141'),
    h: $eebec0a1229b249a$var$_1n,
    Gx: BigInt('55066263022277343669578718895168534326250603453777594175500187360389116729240'),
    Gy: BigInt('32670510020758816978083085130507043184471273380659243275938904335757337482424'),
    beta: BigInt('0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee')
});
const $eebec0a1229b249a$var$divNearest = (a, b)=>(a + b / $eebec0a1229b249a$var$_2n) / b;
const $eebec0a1229b249a$var$endo = {
    beta: BigInt('0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'),
    splitScalar (k) {
        const { n: n } = $eebec0a1229b249a$export$8ff8607b70325343;
        const a1 = BigInt('0x3086d221a7d46bcde86c90e49284eb15');
        const b1 = -$eebec0a1229b249a$var$_1n * BigInt('0xe4437ed6010e88286f547fa90abfe4c3');
        const a2 = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8');
        const b2 = a1;
        const POW_2_128 = BigInt('0x100000000000000000000000000000000');
        const c1 = $eebec0a1229b249a$var$divNearest(b2 * k, n);
        const c2 = $eebec0a1229b249a$var$divNearest(-b1 * k, n);
        let k1 = $eebec0a1229b249a$var$mod(k - c1 * a1 - c2 * a2, n);
        let k2 = $eebec0a1229b249a$var$mod(-c1 * b1 - c2 * b2, n);
        const k1neg = k1 > POW_2_128;
        const k2neg = k2 > POW_2_128;
        if (k1neg) k1 = n - k1;
        if (k2neg) k2 = n - k2;
        if (k1 > POW_2_128 || k2 > POW_2_128) throw new Error('splitScalarEndo: Endomorphism failed, k=' + k);
        return {
            k1neg: k1neg,
            k1: k1,
            k2neg: k2neg,
            k2: k2
        };
    }
};
const $eebec0a1229b249a$var$fieldLen = 32;
const $eebec0a1229b249a$var$groupLen = 32;
const $eebec0a1229b249a$var$hashLen = 32;
const $eebec0a1229b249a$var$compressedLen = $eebec0a1229b249a$var$fieldLen + 1;
const $eebec0a1229b249a$var$uncompressedLen = 2 * $eebec0a1229b249a$var$fieldLen + 1;
function $eebec0a1229b249a$var$weierstrass(x) {
    const { a: a, b: b } = $eebec0a1229b249a$export$8ff8607b70325343;
    const x2 = $eebec0a1229b249a$var$mod(x * x);
    const x3 = $eebec0a1229b249a$var$mod(x2 * x);
    return $eebec0a1229b249a$var$mod(x3 + a * x + b);
}
const $eebec0a1229b249a$var$USE_ENDOMORPHISM = $eebec0a1229b249a$export$8ff8607b70325343.a === $eebec0a1229b249a$var$_0n;
class $eebec0a1229b249a$var$ShaError extends Error {
    constructor(message){
        super(message);
    }
}
function $eebec0a1229b249a$var$assertJacPoint(other) {
    if (!(other instanceof $eebec0a1229b249a$var$JacobianPoint)) throw new TypeError('JacobianPoint expected');
}
class $eebec0a1229b249a$var$JacobianPoint {
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static fromAffine(p) {
        if (!(p instanceof $eebec0a1229b249a$export$baf26146a414f24a)) throw new TypeError('JacobianPoint#fromAffine: expected Point');
        if (p.equals($eebec0a1229b249a$export$baf26146a414f24a.ZERO)) return $eebec0a1229b249a$var$JacobianPoint.ZERO;
        return new $eebec0a1229b249a$var$JacobianPoint(p.x, p.y, $eebec0a1229b249a$var$_1n);
    }
    static toAffineBatch(points) {
        const toInv = $eebec0a1229b249a$var$invertBatch(points.map((p)=>p.z));
        return points.map((p, i)=>p.toAffine(toInv[i]));
    }
    static normalizeZ(points) {
        return $eebec0a1229b249a$var$JacobianPoint.toAffineBatch(points).map($eebec0a1229b249a$var$JacobianPoint.fromAffine);
    }
    equals(other) {
        $eebec0a1229b249a$var$assertJacPoint(other);
        const { x: X1, y: Y1, z: Z1 } = this;
        const { x: X2, y: Y2, z: Z2 } = other;
        const Z1Z1 = $eebec0a1229b249a$var$mod(Z1 * Z1);
        const Z2Z2 = $eebec0a1229b249a$var$mod(Z2 * Z2);
        const U1 = $eebec0a1229b249a$var$mod(X1 * Z2Z2);
        const U2 = $eebec0a1229b249a$var$mod(X2 * Z1Z1);
        const S1 = $eebec0a1229b249a$var$mod($eebec0a1229b249a$var$mod(Y1 * Z2) * Z2Z2);
        const S2 = $eebec0a1229b249a$var$mod($eebec0a1229b249a$var$mod(Y2 * Z1) * Z1Z1);
        return U1 === U2 && S1 === S2;
    }
    negate() {
        return new $eebec0a1229b249a$var$JacobianPoint(this.x, $eebec0a1229b249a$var$mod(-this.y), this.z);
    }
    double() {
        const { x: X1, y: Y1, z: Z1 } = this;
        const A = $eebec0a1229b249a$var$mod(X1 * X1);
        const B = $eebec0a1229b249a$var$mod(Y1 * Y1);
        const C = $eebec0a1229b249a$var$mod(B * B);
        const x1b = X1 + B;
        const D = $eebec0a1229b249a$var$mod($eebec0a1229b249a$var$_2n * ($eebec0a1229b249a$var$mod(x1b * x1b) - A - C));
        const E = $eebec0a1229b249a$var$mod($eebec0a1229b249a$var$_3n * A);
        const F = $eebec0a1229b249a$var$mod(E * E);
        const X3 = $eebec0a1229b249a$var$mod(F - $eebec0a1229b249a$var$_2n * D);
        const Y3 = $eebec0a1229b249a$var$mod(E * (D - X3) - $eebec0a1229b249a$var$_8n * C);
        const Z3 = $eebec0a1229b249a$var$mod($eebec0a1229b249a$var$_2n * Y1 * Z1);
        return new $eebec0a1229b249a$var$JacobianPoint(X3, Y3, Z3);
    }
    add(other) {
        $eebec0a1229b249a$var$assertJacPoint(other);
        const { x: X1, y: Y1, z: Z1 } = this;
        const { x: X2, y: Y2, z: Z2 } = other;
        if (X2 === $eebec0a1229b249a$var$_0n || Y2 === $eebec0a1229b249a$var$_0n) return this;
        if (X1 === $eebec0a1229b249a$var$_0n || Y1 === $eebec0a1229b249a$var$_0n) return other;
        const Z1Z1 = $eebec0a1229b249a$var$mod(Z1 * Z1);
        const Z2Z2 = $eebec0a1229b249a$var$mod(Z2 * Z2);
        const U1 = $eebec0a1229b249a$var$mod(X1 * Z2Z2);
        const U2 = $eebec0a1229b249a$var$mod(X2 * Z1Z1);
        const S1 = $eebec0a1229b249a$var$mod($eebec0a1229b249a$var$mod(Y1 * Z2) * Z2Z2);
        const S2 = $eebec0a1229b249a$var$mod($eebec0a1229b249a$var$mod(Y2 * Z1) * Z1Z1);
        const H = $eebec0a1229b249a$var$mod(U2 - U1);
        const r = $eebec0a1229b249a$var$mod(S2 - S1);
        if (H === $eebec0a1229b249a$var$_0n) {
            if (r === $eebec0a1229b249a$var$_0n) return this.double();
            else return $eebec0a1229b249a$var$JacobianPoint.ZERO;
        }
        const HH = $eebec0a1229b249a$var$mod(H * H);
        const HHH = $eebec0a1229b249a$var$mod(H * HH);
        const V = $eebec0a1229b249a$var$mod(U1 * HH);
        const X3 = $eebec0a1229b249a$var$mod(r * r - HHH - $eebec0a1229b249a$var$_2n * V);
        const Y3 = $eebec0a1229b249a$var$mod(r * (V - X3) - S1 * HHH);
        const Z3 = $eebec0a1229b249a$var$mod(Z1 * Z2 * H);
        return new $eebec0a1229b249a$var$JacobianPoint(X3, Y3, Z3);
    }
    subtract(other) {
        return this.add(other.negate());
    }
    multiplyUnsafe(scalar) {
        const P0 = $eebec0a1229b249a$var$JacobianPoint.ZERO;
        if (typeof scalar === 'bigint' && scalar === $eebec0a1229b249a$var$_0n) return P0;
        let n = $eebec0a1229b249a$var$normalizeScalar(scalar);
        if (n === $eebec0a1229b249a$var$_1n) return this;
        if (!$eebec0a1229b249a$var$USE_ENDOMORPHISM) {
            let p = P0;
            let d = this;
            while(n > $eebec0a1229b249a$var$_0n){
                if (n & $eebec0a1229b249a$var$_1n) p = p.add(d);
                d = d.double();
                n >>= $eebec0a1229b249a$var$_1n;
            }
            return p;
        }
        let { k1neg: k1neg, k1: k1, k2neg: k2neg, k2: k2 } = $eebec0a1229b249a$var$endo.splitScalar(n);
        let k1p = P0;
        let k2p = P0;
        let d = this;
        while(k1 > $eebec0a1229b249a$var$_0n || k2 > $eebec0a1229b249a$var$_0n){
            if (k1 & $eebec0a1229b249a$var$_1n) k1p = k1p.add(d);
            if (k2 & $eebec0a1229b249a$var$_1n) k2p = k2p.add(d);
            d = d.double();
            k1 >>= $eebec0a1229b249a$var$_1n;
            k2 >>= $eebec0a1229b249a$var$_1n;
        }
        if (k1neg) k1p = k1p.negate();
        if (k2neg) k2p = k2p.negate();
        k2p = new $eebec0a1229b249a$var$JacobianPoint($eebec0a1229b249a$var$mod(k2p.x * $eebec0a1229b249a$var$endo.beta), k2p.y, k2p.z);
        return k1p.add(k2p);
    }
    precomputeWindow(W) {
        const windows = $eebec0a1229b249a$var$USE_ENDOMORPHISM ? 128 / W + 1 : 256 / W + 1;
        const points = [];
        let p = this;
        let base = p;
        for(let window = 0; window < windows; window++){
            base = p;
            points.push(base);
            for(let i = 1; i < 2 ** (W - 1); i++){
                base = base.add(p);
                points.push(base);
            }
            p = base.double();
        }
        return points;
    }
    wNAF(n, affinePoint) {
        if (!affinePoint && this.equals($eebec0a1229b249a$var$JacobianPoint.BASE)) affinePoint = $eebec0a1229b249a$export$baf26146a414f24a.BASE;
        const W = affinePoint && affinePoint._WINDOW_SIZE || 1;
        if (256 % W) throw new Error('Point#wNAF: Invalid precomputation window, must be power of 2');
        let precomputes = affinePoint && $eebec0a1229b249a$var$pointPrecomputes.get(affinePoint);
        if (!precomputes) {
            precomputes = this.precomputeWindow(W);
            if (affinePoint && W !== 1) {
                precomputes = $eebec0a1229b249a$var$JacobianPoint.normalizeZ(precomputes);
                $eebec0a1229b249a$var$pointPrecomputes.set(affinePoint, precomputes);
            }
        }
        let p = $eebec0a1229b249a$var$JacobianPoint.ZERO;
        let f = $eebec0a1229b249a$var$JacobianPoint.BASE;
        const windows = 1 + ($eebec0a1229b249a$var$USE_ENDOMORPHISM ? 128 / W : 256 / W);
        const windowSize = 2 ** (W - 1);
        const mask = BigInt(2 ** W - 1);
        const maxNumber = 2 ** W;
        const shiftBy = BigInt(W);
        for(let window = 0; window < windows; window++){
            const offset = window * windowSize;
            let wbits = Number(n & mask);
            n >>= shiftBy;
            if (wbits > windowSize) {
                wbits -= maxNumber;
                n += $eebec0a1229b249a$var$_1n;
            }
            const offset1 = offset;
            const offset2 = offset + Math.abs(wbits) - 1;
            const cond1 = window % 2 !== 0;
            const cond2 = wbits < 0;
            if (wbits === 0) f = f.add($eebec0a1229b249a$var$constTimeNegate(cond1, precomputes[offset1]));
            else p = p.add($eebec0a1229b249a$var$constTimeNegate(cond2, precomputes[offset2]));
        }
        return {
            p: p,
            f: f
        };
    }
    multiply(scalar, affinePoint) {
        let n = $eebec0a1229b249a$var$normalizeScalar(scalar);
        let point;
        let fake;
        if ($eebec0a1229b249a$var$USE_ENDOMORPHISM) {
            const { k1neg: k1neg, k1: k1, k2neg: k2neg, k2: k2 } = $eebec0a1229b249a$var$endo.splitScalar(n);
            let { p: k1p, f: f1p } = this.wNAF(k1, affinePoint);
            let { p: k2p, f: f2p } = this.wNAF(k2, affinePoint);
            k1p = $eebec0a1229b249a$var$constTimeNegate(k1neg, k1p);
            k2p = $eebec0a1229b249a$var$constTimeNegate(k2neg, k2p);
            k2p = new $eebec0a1229b249a$var$JacobianPoint($eebec0a1229b249a$var$mod(k2p.x * $eebec0a1229b249a$var$endo.beta), k2p.y, k2p.z);
            point = k1p.add(k2p);
            fake = f1p.add(f2p);
        } else {
            const { p: p, f: f } = this.wNAF(n, affinePoint);
            point = p;
            fake = f;
        }
        return $eebec0a1229b249a$var$JacobianPoint.normalizeZ([
            point,
            fake
        ])[0];
    }
    toAffine(invZ) {
        const { x: x, y: y, z: z } = this;
        const is0 = this.equals($eebec0a1229b249a$var$JacobianPoint.ZERO);
        if (invZ == null) invZ = is0 ? $eebec0a1229b249a$var$_8n : $eebec0a1229b249a$var$invert(z);
        const iz1 = invZ;
        const iz2 = $eebec0a1229b249a$var$mod(iz1 * iz1);
        const iz3 = $eebec0a1229b249a$var$mod(iz2 * iz1);
        const ax = $eebec0a1229b249a$var$mod(x * iz2);
        const ay = $eebec0a1229b249a$var$mod(y * iz3);
        const zz = $eebec0a1229b249a$var$mod(z * iz1);
        if (is0) return $eebec0a1229b249a$export$baf26146a414f24a.ZERO;
        if (zz !== $eebec0a1229b249a$var$_1n) throw new Error('invZ was invalid');
        return new $eebec0a1229b249a$export$baf26146a414f24a(ax, ay);
    }
}
$eebec0a1229b249a$var$JacobianPoint.BASE = new $eebec0a1229b249a$var$JacobianPoint($eebec0a1229b249a$export$8ff8607b70325343.Gx, $eebec0a1229b249a$export$8ff8607b70325343.Gy, $eebec0a1229b249a$var$_1n);
$eebec0a1229b249a$var$JacobianPoint.ZERO = new $eebec0a1229b249a$var$JacobianPoint($eebec0a1229b249a$var$_0n, $eebec0a1229b249a$var$_1n, $eebec0a1229b249a$var$_0n);
function $eebec0a1229b249a$var$constTimeNegate(condition, item) {
    const neg = item.negate();
    return condition ? neg : item;
}
const $eebec0a1229b249a$var$pointPrecomputes = new WeakMap();
class $eebec0a1229b249a$export$baf26146a414f24a {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    _setWindowSize(windowSize) {
        this._WINDOW_SIZE = windowSize;
        $eebec0a1229b249a$var$pointPrecomputes.delete(this);
    }
    hasEvenY() {
        return this.y % $eebec0a1229b249a$var$_2n === $eebec0a1229b249a$var$_0n;
    }
    static fromCompressedHex(bytes) {
        const isShort = bytes.length === 32;
        const x = $eebec0a1229b249a$var$bytesToNumber(isShort ? bytes : bytes.subarray(1));
        if (!$eebec0a1229b249a$var$isValidFieldElement(x)) throw new Error('Point is not on curve');
        const y2 = $eebec0a1229b249a$var$weierstrass(x);
        let y = $eebec0a1229b249a$var$sqrtMod(y2);
        const isYOdd = (y & $eebec0a1229b249a$var$_1n) === $eebec0a1229b249a$var$_1n;
        if (isShort) {
            if (isYOdd) y = $eebec0a1229b249a$var$mod(-y);
        } else {
            const isFirstByteOdd = (bytes[0] & 1) === 1;
            if (isFirstByteOdd !== isYOdd) y = $eebec0a1229b249a$var$mod(-y);
        }
        const point = new $eebec0a1229b249a$export$baf26146a414f24a(x, y);
        point.assertValidity();
        return point;
    }
    static fromUncompressedHex(bytes) {
        const x = $eebec0a1229b249a$var$bytesToNumber(bytes.subarray(1, $eebec0a1229b249a$var$fieldLen + 1));
        const y = $eebec0a1229b249a$var$bytesToNumber(bytes.subarray($eebec0a1229b249a$var$fieldLen + 1, $eebec0a1229b249a$var$fieldLen * 2 + 1));
        const point = new $eebec0a1229b249a$export$baf26146a414f24a(x, y);
        point.assertValidity();
        return point;
    }
    static fromHex(hex) {
        const bytes = $eebec0a1229b249a$var$ensureBytes(hex);
        const len = bytes.length;
        const header = bytes[0];
        if (len === $eebec0a1229b249a$var$fieldLen) return this.fromCompressedHex(bytes);
        if (len === $eebec0a1229b249a$var$compressedLen && (header === 0x02 || header === 0x03)) return this.fromCompressedHex(bytes);
        if (len === $eebec0a1229b249a$var$uncompressedLen && header === 0x04) return this.fromUncompressedHex(bytes);
        throw new Error(`Point.fromHex: received invalid point. Expected 32-${$eebec0a1229b249a$var$compressedLen} compressed bytes or ${$eebec0a1229b249a$var$uncompressedLen} uncompressed bytes, not ${len}`);
    }
    static fromPrivateKey(privateKey) {
        return $eebec0a1229b249a$export$baf26146a414f24a.BASE.multiply($eebec0a1229b249a$var$normalizePrivateKey(privateKey));
    }
    static fromSignature(msgHash, signature, recovery) {
        const { r: r, s: s } = $eebec0a1229b249a$var$normalizeSignature(signature);
        if (![
            0,
            1,
            2,
            3
        ].includes(recovery)) throw new Error('Cannot recover: invalid recovery bit');
        const h = $eebec0a1229b249a$var$truncateHash($eebec0a1229b249a$var$ensureBytes(msgHash));
        const { n: n } = $eebec0a1229b249a$export$8ff8607b70325343;
        const radj = recovery === 2 || recovery === 3 ? r + n : r;
        const rinv = $eebec0a1229b249a$var$invert(radj, n);
        const u1 = $eebec0a1229b249a$var$mod(-h * rinv, n);
        const u2 = $eebec0a1229b249a$var$mod(s * rinv, n);
        const prefix = recovery & 1 ? '03' : '02';
        const R = $eebec0a1229b249a$export$baf26146a414f24a.fromHex(prefix + $eebec0a1229b249a$var$numTo32bStr(radj));
        const Q = $eebec0a1229b249a$export$baf26146a414f24a.BASE.multiplyAndAddUnsafe(R, u1, u2);
        if (!Q) throw new Error('Cannot recover signature: point at infinify');
        Q.assertValidity();
        return Q;
    }
    toRawBytes(isCompressed = false) {
        return $eebec0a1229b249a$var$hexToBytes(this.toHex(isCompressed));
    }
    toHex(isCompressed = false) {
        const x = $eebec0a1229b249a$var$numTo32bStr(this.x);
        if (isCompressed) {
            const prefix = this.hasEvenY() ? '02' : '03';
            return `${prefix}${x}`;
        } else return `04${x}${$eebec0a1229b249a$var$numTo32bStr(this.y)}`;
    }
    toHexX() {
        return this.toHex(true).slice(2);
    }
    toRawX() {
        return this.toRawBytes(true).slice(1);
    }
    assertValidity() {
        const msg = 'Point is not on elliptic curve';
        const { x: x, y: y } = this;
        if (!$eebec0a1229b249a$var$isValidFieldElement(x) || !$eebec0a1229b249a$var$isValidFieldElement(y)) throw new Error(msg);
        const left = $eebec0a1229b249a$var$mod(y * y);
        const right = $eebec0a1229b249a$var$weierstrass(x);
        if ($eebec0a1229b249a$var$mod(left - right) !== $eebec0a1229b249a$var$_0n) throw new Error(msg);
    }
    equals(other) {
        return this.x === other.x && this.y === other.y;
    }
    negate() {
        return new $eebec0a1229b249a$export$baf26146a414f24a(this.x, $eebec0a1229b249a$var$mod(-this.y));
    }
    double() {
        return $eebec0a1229b249a$var$JacobianPoint.fromAffine(this).double().toAffine();
    }
    add(other) {
        return $eebec0a1229b249a$var$JacobianPoint.fromAffine(this).add($eebec0a1229b249a$var$JacobianPoint.fromAffine(other)).toAffine();
    }
    subtract(other) {
        return this.add(other.negate());
    }
    multiply(scalar) {
        return $eebec0a1229b249a$var$JacobianPoint.fromAffine(this).multiply(scalar, this).toAffine();
    }
    multiplyAndAddUnsafe(Q, a, b) {
        const P = $eebec0a1229b249a$var$JacobianPoint.fromAffine(this);
        const aP = a === $eebec0a1229b249a$var$_0n || a === $eebec0a1229b249a$var$_1n || this !== $eebec0a1229b249a$export$baf26146a414f24a.BASE ? P.multiplyUnsafe(a) : P.multiply(a);
        const bQ = $eebec0a1229b249a$var$JacobianPoint.fromAffine(Q).multiplyUnsafe(b);
        const sum = aP.add(bQ);
        return sum.equals($eebec0a1229b249a$var$JacobianPoint.ZERO) ? undefined : sum.toAffine();
    }
}
$eebec0a1229b249a$export$baf26146a414f24a.BASE = new $eebec0a1229b249a$export$baf26146a414f24a($eebec0a1229b249a$export$8ff8607b70325343.Gx, $eebec0a1229b249a$export$8ff8607b70325343.Gy);
$eebec0a1229b249a$export$baf26146a414f24a.ZERO = new $eebec0a1229b249a$export$baf26146a414f24a($eebec0a1229b249a$var$_0n, $eebec0a1229b249a$var$_0n);
function $eebec0a1229b249a$var$sliceDER(s) {
    return Number.parseInt(s[0], 16) >= 8 ? '00' + s : s;
}
function $eebec0a1229b249a$var$parseDERInt(data) {
    if (data.length < 2 || data[0] !== 0x02) throw new Error(`Invalid signature integer tag: ${$eebec0a1229b249a$var$bytesToHex(data)}`);
    const len = data[1];
    const res = data.subarray(2, len + 2);
    if (!len || res.length !== len) throw new Error(`Invalid signature integer: wrong length`);
    if (res[0] === 0x00 && res[1] <= 0x7f) throw new Error('Invalid signature integer: trailing length');
    return {
        data: $eebec0a1229b249a$var$bytesToNumber(res),
        left: data.subarray(len + 2)
    };
}
function $eebec0a1229b249a$var$parseDERSignature(data) {
    if (data.length < 2 || data[0] != 0x30) throw new Error(`Invalid signature tag: ${$eebec0a1229b249a$var$bytesToHex(data)}`);
    if (data[1] !== data.length - 2) throw new Error('Invalid signature: incorrect length');
    const { data: r, left: sBytes } = $eebec0a1229b249a$var$parseDERInt(data.subarray(2));
    const { data: s, left: rBytesLeft } = $eebec0a1229b249a$var$parseDERInt(sBytes);
    if (rBytesLeft.length) throw new Error(`Invalid signature: left bytes after parsing: ${$eebec0a1229b249a$var$bytesToHex(rBytesLeft)}`);
    return {
        r: r,
        s: s
    };
}
class $eebec0a1229b249a$export$848620f5f2f26e86 {
    constructor(r, s){
        this.r = r;
        this.s = s;
        this.assertValidity();
    }
    static fromCompact(hex) {
        const arr = hex instanceof Uint8Array;
        const name = 'Signature.fromCompact';
        if (typeof hex !== 'string' && !arr) throw new TypeError(`${name}: Expected string or Uint8Array`);
        const str = arr ? $eebec0a1229b249a$var$bytesToHex(hex) : hex;
        if (str.length !== 128) throw new Error(`${name}: Expected 64-byte hex`);
        return new $eebec0a1229b249a$export$848620f5f2f26e86($eebec0a1229b249a$var$hexToNumber(str.slice(0, 64)), $eebec0a1229b249a$var$hexToNumber(str.slice(64, 128)));
    }
    static fromDER(hex) {
        const arr = hex instanceof Uint8Array;
        if (typeof hex !== 'string' && !arr) throw new TypeError(`Signature.fromDER: Expected string or Uint8Array`);
        const { r: r, s: s } = $eebec0a1229b249a$var$parseDERSignature(arr ? hex : $eebec0a1229b249a$var$hexToBytes(hex));
        return new $eebec0a1229b249a$export$848620f5f2f26e86(r, s);
    }
    static fromHex(hex) {
        return this.fromDER(hex);
    }
    assertValidity() {
        const { r: r, s: s } = this;
        if (!$eebec0a1229b249a$var$isWithinCurveOrder(r)) throw new Error('Invalid Signature: r must be 0 < r < n');
        if (!$eebec0a1229b249a$var$isWithinCurveOrder(s)) throw new Error('Invalid Signature: s must be 0 < s < n');
    }
    hasHighS() {
        const HALF = $eebec0a1229b249a$export$8ff8607b70325343.n >> $eebec0a1229b249a$var$_1n;
        return this.s > HALF;
    }
    normalizeS() {
        return this.hasHighS() ? new $eebec0a1229b249a$export$848620f5f2f26e86(this.r, $eebec0a1229b249a$var$mod(-this.s, $eebec0a1229b249a$export$8ff8607b70325343.n)) : this;
    }
    toDERRawBytes() {
        return $eebec0a1229b249a$var$hexToBytes(this.toDERHex());
    }
    toDERHex() {
        const sHex = $eebec0a1229b249a$var$sliceDER($eebec0a1229b249a$var$numberToHexUnpadded(this.s));
        const rHex = $eebec0a1229b249a$var$sliceDER($eebec0a1229b249a$var$numberToHexUnpadded(this.r));
        const sHexL = sHex.length / 2;
        const rHexL = rHex.length / 2;
        const sLen = $eebec0a1229b249a$var$numberToHexUnpadded(sHexL);
        const rLen = $eebec0a1229b249a$var$numberToHexUnpadded(rHexL);
        const length = $eebec0a1229b249a$var$numberToHexUnpadded(rHexL + sHexL + 4);
        return `30${length}02${rLen}${rHex}02${sLen}${sHex}`;
    }
    toRawBytes() {
        return this.toDERRawBytes();
    }
    toHex() {
        return this.toDERHex();
    }
    toCompactRawBytes() {
        return $eebec0a1229b249a$var$hexToBytes(this.toCompactHex());
    }
    toCompactHex() {
        return $eebec0a1229b249a$var$numTo32bStr(this.r) + $eebec0a1229b249a$var$numTo32bStr(this.s);
    }
}
function $eebec0a1229b249a$var$concatBytes(...arrays) {
    if (!arrays.every((b)=>b instanceof Uint8Array)) throw new Error('Uint8Array list expected');
    if (arrays.length === 1) return arrays[0];
    const length = arrays.reduce((a, arr)=>a + arr.length, 0);
    const result = new Uint8Array(length);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const arr = arrays[i];
        result.set(arr, pad);
        pad += arr.length;
    }
    return result;
}
const $eebec0a1229b249a$var$hexes = Array.from({
    length: 256
}, (v, i)=>i.toString(16).padStart(2, '0'));
function $eebec0a1229b249a$var$bytesToHex(uint8a) {
    if (!(uint8a instanceof Uint8Array)) throw new Error('Expected Uint8Array');
    let hex = '';
    for(let i = 0; i < uint8a.length; i++)hex += $eebec0a1229b249a$var$hexes[uint8a[i]];
    return hex;
}
const $eebec0a1229b249a$var$POW_2_256 = BigInt('0x10000000000000000000000000000000000000000000000000000000000000000');
function $eebec0a1229b249a$var$numTo32bStr(num) {
    if (typeof num !== 'bigint') throw new Error('Expected bigint');
    if (!($eebec0a1229b249a$var$_0n <= num && num < $eebec0a1229b249a$var$POW_2_256)) throw new Error('Expected number 0 <= n < 2^256');
    return num.toString(16).padStart(64, '0');
}
function $eebec0a1229b249a$var$numTo32b(num) {
    const b = $eebec0a1229b249a$var$hexToBytes($eebec0a1229b249a$var$numTo32bStr(num));
    if (b.length !== 32) throw new Error('Error: expected 32 bytes');
    return b;
}
function $eebec0a1229b249a$var$numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? `0${hex}` : hex;
}
function $eebec0a1229b249a$var$hexToNumber(hex) {
    if (typeof hex !== 'string') throw new TypeError('hexToNumber: expected string, got ' + typeof hex);
    return BigInt(`0x${hex}`);
}
function $eebec0a1229b249a$var$hexToBytes(hex) {
    if (typeof hex !== 'string') throw new TypeError('hexToBytes: expected string, got ' + typeof hex);
    if (hex.length % 2) throw new Error('hexToBytes: received invalid unpadded hex' + hex.length);
    const array = new Uint8Array(hex.length / 2);
    for(let i = 0; i < array.length; i++){
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0) throw new Error('Invalid byte sequence');
        array[i] = byte;
    }
    return array;
}
function $eebec0a1229b249a$var$bytesToNumber(bytes) {
    return $eebec0a1229b249a$var$hexToNumber($eebec0a1229b249a$var$bytesToHex(bytes));
}
function $eebec0a1229b249a$var$ensureBytes(hex) {
    return hex instanceof Uint8Array ? Uint8Array.from(hex) : $eebec0a1229b249a$var$hexToBytes(hex);
}
function $eebec0a1229b249a$var$normalizeScalar(num) {
    if (typeof num === 'number' && Number.isSafeInteger(num) && num > 0) return BigInt(num);
    if (typeof num === 'bigint' && $eebec0a1229b249a$var$isWithinCurveOrder(num)) return num;
    throw new TypeError('Expected valid private scalar: 0 < scalar < curve.n');
}
function $eebec0a1229b249a$var$mod(a, b = $eebec0a1229b249a$export$8ff8607b70325343.P) {
    const result = a % b;
    return result >= $eebec0a1229b249a$var$_0n ? result : b + result;
}
function $eebec0a1229b249a$var$pow2(x, power) {
    const { P: P } = $eebec0a1229b249a$export$8ff8607b70325343;
    let res = x;
    while(power-- > $eebec0a1229b249a$var$_0n){
        res *= res;
        res %= P;
    }
    return res;
}
function $eebec0a1229b249a$var$sqrtMod(x) {
    const { P: P } = $eebec0a1229b249a$export$8ff8607b70325343;
    const _6n = BigInt(6);
    const _11n = BigInt(11);
    const _22n = BigInt(22);
    const _23n = BigInt(23);
    const _44n = BigInt(44);
    const _88n = BigInt(88);
    const b2 = x * x * x % P;
    const b3 = b2 * b2 * x % P;
    const b6 = $eebec0a1229b249a$var$pow2(b3, $eebec0a1229b249a$var$_3n) * b3 % P;
    const b9 = $eebec0a1229b249a$var$pow2(b6, $eebec0a1229b249a$var$_3n) * b3 % P;
    const b11 = $eebec0a1229b249a$var$pow2(b9, $eebec0a1229b249a$var$_2n) * b2 % P;
    const b22 = $eebec0a1229b249a$var$pow2(b11, _11n) * b11 % P;
    const b44 = $eebec0a1229b249a$var$pow2(b22, _22n) * b22 % P;
    const b88 = $eebec0a1229b249a$var$pow2(b44, _44n) * b44 % P;
    const b176 = $eebec0a1229b249a$var$pow2(b88, _88n) * b88 % P;
    const b220 = $eebec0a1229b249a$var$pow2(b176, _44n) * b44 % P;
    const b223 = $eebec0a1229b249a$var$pow2(b220, $eebec0a1229b249a$var$_3n) * b3 % P;
    const t1 = $eebec0a1229b249a$var$pow2(b223, _23n) * b22 % P;
    const t2 = $eebec0a1229b249a$var$pow2(t1, _6n) * b2 % P;
    const rt = $eebec0a1229b249a$var$pow2(t2, $eebec0a1229b249a$var$_2n);
    const xc = rt * rt % P;
    if (xc !== x) throw new Error('Cannot find square root');
    return rt;
}
function $eebec0a1229b249a$var$invert(number, modulo = $eebec0a1229b249a$export$8ff8607b70325343.P) {
    if (number === $eebec0a1229b249a$var$_0n || modulo <= $eebec0a1229b249a$var$_0n) throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
    let a = $eebec0a1229b249a$var$mod(number, modulo);
    let b = modulo;
    let x = $eebec0a1229b249a$var$_0n, y = $eebec0a1229b249a$var$_1n, u = $eebec0a1229b249a$var$_1n, v = $eebec0a1229b249a$var$_0n;
    while(a !== $eebec0a1229b249a$var$_0n){
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        b = a, a = r, x = u, y = v, u = m, v = n;
    }
    const gcd = b;
    if (gcd !== $eebec0a1229b249a$var$_1n) throw new Error('invert: does not exist');
    return $eebec0a1229b249a$var$mod(x, modulo);
}
function $eebec0a1229b249a$var$invertBatch(nums, p = $eebec0a1229b249a$export$8ff8607b70325343.P) {
    const scratch = new Array(nums.length);
    const lastMultiplied = nums.reduce((acc, num, i)=>{
        if (num === $eebec0a1229b249a$var$_0n) return acc;
        scratch[i] = acc;
        return $eebec0a1229b249a$var$mod(acc * num, p);
    }, $eebec0a1229b249a$var$_1n);
    const inverted = $eebec0a1229b249a$var$invert(lastMultiplied, p);
    nums.reduceRight((acc, num, i)=>{
        if (num === $eebec0a1229b249a$var$_0n) return acc;
        scratch[i] = $eebec0a1229b249a$var$mod(acc * scratch[i], p);
        return $eebec0a1229b249a$var$mod(acc * num, p);
    }, inverted);
    return scratch;
}
function $eebec0a1229b249a$var$bits2int_2(bytes) {
    const delta = bytes.length * 8 - $eebec0a1229b249a$var$groupLen * 8;
    const num = $eebec0a1229b249a$var$bytesToNumber(bytes);
    return delta > 0 ? num >> BigInt(delta) : num;
}
function $eebec0a1229b249a$var$truncateHash(hash, truncateOnly = false) {
    const h = $eebec0a1229b249a$var$bits2int_2(hash);
    if (truncateOnly) return h;
    const { n: n } = $eebec0a1229b249a$export$8ff8607b70325343;
    return h >= n ? h - n : h;
}
let $eebec0a1229b249a$var$_sha256Sync;
let $eebec0a1229b249a$var$_hmacSha256Sync;
class $eebec0a1229b249a$var$HmacDrbg {
    constructor(hashLen, qByteLen){
        this.hashLen = hashLen;
        this.qByteLen = qByteLen;
        if (typeof hashLen !== 'number' || hashLen < 2) throw new Error('hashLen must be a number');
        if (typeof qByteLen !== 'number' || qByteLen < 2) throw new Error('qByteLen must be a number');
        this.v = new Uint8Array(hashLen).fill(1);
        this.k = new Uint8Array(hashLen).fill(0);
        this.counter = 0;
    }
    hmac(...values) {
        return $eebec0a1229b249a$export$eab97d15b1788b8d.hmacSha256(this.k, ...values);
    }
    hmacSync(...values) {
        return $eebec0a1229b249a$var$_hmacSha256Sync(this.k, ...values);
    }
    checkSync() {
        if (typeof $eebec0a1229b249a$var$_hmacSha256Sync !== 'function') throw new $eebec0a1229b249a$var$ShaError('hmacSha256Sync needs to be set');
    }
    incr() {
        if (this.counter >= 1000) throw new Error('Tried 1,000 k values for sign(), all were invalid');
        this.counter += 1;
    }
    async reseed(seed = new Uint8Array()) {
        this.k = await this.hmac(this.v, Uint8Array.from([
            0x00
        ]), seed);
        this.v = await this.hmac(this.v);
        if (seed.length === 0) return;
        this.k = await this.hmac(this.v, Uint8Array.from([
            0x01
        ]), seed);
        this.v = await this.hmac(this.v);
    }
    reseedSync(seed = new Uint8Array()) {
        this.checkSync();
        this.k = this.hmacSync(this.v, Uint8Array.from([
            0x00
        ]), seed);
        this.v = this.hmacSync(this.v);
        if (seed.length === 0) return;
        this.k = this.hmacSync(this.v, Uint8Array.from([
            0x01
        ]), seed);
        this.v = this.hmacSync(this.v);
    }
    async generate() {
        this.incr();
        let len = 0;
        const out = [];
        while(len < this.qByteLen){
            this.v = await this.hmac(this.v);
            const sl = this.v.slice();
            out.push(sl);
            len += this.v.length;
        }
        return $eebec0a1229b249a$var$concatBytes(...out);
    }
    generateSync() {
        this.checkSync();
        this.incr();
        let len = 0;
        const out = [];
        while(len < this.qByteLen){
            this.v = this.hmacSync(this.v);
            const sl = this.v.slice();
            out.push(sl);
            len += this.v.length;
        }
        return $eebec0a1229b249a$var$concatBytes(...out);
    }
}
function $eebec0a1229b249a$var$isWithinCurveOrder(num) {
    return $eebec0a1229b249a$var$_0n < num && num < $eebec0a1229b249a$export$8ff8607b70325343.n;
}
function $eebec0a1229b249a$var$isValidFieldElement(num) {
    return $eebec0a1229b249a$var$_0n < num && num < $eebec0a1229b249a$export$8ff8607b70325343.P;
}
function $eebec0a1229b249a$var$kmdToSig(kBytes, m, d, lowS = true) {
    const { n: n } = $eebec0a1229b249a$export$8ff8607b70325343;
    const k = $eebec0a1229b249a$var$truncateHash(kBytes, true);
    if (!$eebec0a1229b249a$var$isWithinCurveOrder(k)) return;
    const kinv = $eebec0a1229b249a$var$invert(k, n);
    const q = $eebec0a1229b249a$export$baf26146a414f24a.BASE.multiply(k);
    const r = $eebec0a1229b249a$var$mod(q.x, n);
    if (r === $eebec0a1229b249a$var$_0n) return;
    const s = $eebec0a1229b249a$var$mod(kinv * $eebec0a1229b249a$var$mod(m + d * r, n), n);
    if (s === $eebec0a1229b249a$var$_0n) return;
    let sig = new $eebec0a1229b249a$export$848620f5f2f26e86(r, s);
    let recovery = (q.x === sig.r ? 0 : 2) | Number(q.y & $eebec0a1229b249a$var$_1n);
    if (lowS && sig.hasHighS()) {
        sig = sig.normalizeS();
        recovery ^= 1;
    }
    return {
        sig: sig,
        recovery: recovery
    };
}
function $eebec0a1229b249a$var$normalizePrivateKey(key) {
    let num;
    if (typeof key === 'bigint') num = key;
    else if (typeof key === 'number' && Number.isSafeInteger(key) && key > 0) num = BigInt(key);
    else if (typeof key === 'string') {
        if (key.length !== 2 * $eebec0a1229b249a$var$groupLen) throw new Error('Expected 32 bytes of private key');
        num = $eebec0a1229b249a$var$hexToNumber(key);
    } else if (key instanceof Uint8Array) {
        if (key.length !== $eebec0a1229b249a$var$groupLen) throw new Error('Expected 32 bytes of private key');
        num = $eebec0a1229b249a$var$bytesToNumber(key);
    } else throw new TypeError('Expected valid private key');
    if (!$eebec0a1229b249a$var$isWithinCurveOrder(num)) throw new Error('Expected private key: 0 < key < n');
    return num;
}
function $eebec0a1229b249a$var$normalizePublicKey(publicKey) {
    if (publicKey instanceof $eebec0a1229b249a$export$baf26146a414f24a) {
        publicKey.assertValidity();
        return publicKey;
    } else return $eebec0a1229b249a$export$baf26146a414f24a.fromHex(publicKey);
}
function $eebec0a1229b249a$var$normalizeSignature(signature) {
    if (signature instanceof $eebec0a1229b249a$export$848620f5f2f26e86) {
        signature.assertValidity();
        return signature;
    }
    try {
        return $eebec0a1229b249a$export$848620f5f2f26e86.fromDER(signature);
    } catch (error) {
        return $eebec0a1229b249a$export$848620f5f2f26e86.fromCompact(signature);
    }
}
function $eebec0a1229b249a$export$889def73691f9837(privateKey, isCompressed = false) {
    return $eebec0a1229b249a$export$baf26146a414f24a.fromPrivateKey(privateKey).toRawBytes(isCompressed);
}
function $eebec0a1229b249a$export$952dd09fbe0232b7(msgHash, signature, recovery, isCompressed = false) {
    return $eebec0a1229b249a$export$baf26146a414f24a.fromSignature(msgHash, signature, recovery).toRawBytes(isCompressed);
}
function $eebec0a1229b249a$var$isProbPub(item) {
    const arr = item instanceof Uint8Array;
    const str = typeof item === 'string';
    const len = (arr || str) && item.length;
    if (arr) return len === $eebec0a1229b249a$var$compressedLen || len === $eebec0a1229b249a$var$uncompressedLen;
    if (str) return len === $eebec0a1229b249a$var$compressedLen * 2 || len === $eebec0a1229b249a$var$uncompressedLen * 2;
    if (item instanceof $eebec0a1229b249a$export$baf26146a414f24a) return true;
    return false;
}
function $eebec0a1229b249a$export$151f26f9d84a2c64(privateA, publicB, isCompressed = false) {
    if ($eebec0a1229b249a$var$isProbPub(privateA)) throw new TypeError('getSharedSecret: first arg must be private key');
    if (!$eebec0a1229b249a$var$isProbPub(publicB)) throw new TypeError('getSharedSecret: second arg must be public key');
    const b = $eebec0a1229b249a$var$normalizePublicKey(publicB);
    b.assertValidity();
    return b.multiply($eebec0a1229b249a$var$normalizePrivateKey(privateA)).toRawBytes(isCompressed);
}
function $eebec0a1229b249a$var$bits2int(bytes) {
    const slice = bytes.length > $eebec0a1229b249a$var$fieldLen ? bytes.slice(0, $eebec0a1229b249a$var$fieldLen) : bytes;
    return $eebec0a1229b249a$var$bytesToNumber(slice);
}
function $eebec0a1229b249a$var$bits2octets(bytes) {
    const z1 = $eebec0a1229b249a$var$bits2int(bytes);
    const z2 = $eebec0a1229b249a$var$mod(z1, $eebec0a1229b249a$export$8ff8607b70325343.n);
    return $eebec0a1229b249a$var$int2octets(z2 < $eebec0a1229b249a$var$_0n ? z1 : z2);
}
function $eebec0a1229b249a$var$int2octets(num) {
    return $eebec0a1229b249a$var$numTo32b(num);
}
function $eebec0a1229b249a$var$initSigArgs(msgHash, privateKey, extraEntropy) {
    if (msgHash == null) throw new Error(`sign: expected valid message hash, not "${msgHash}"`);
    const h1 = $eebec0a1229b249a$var$ensureBytes(msgHash);
    const d = $eebec0a1229b249a$var$normalizePrivateKey(privateKey);
    const seedArgs = [
        $eebec0a1229b249a$var$int2octets(d),
        $eebec0a1229b249a$var$bits2octets(h1)
    ];
    if (extraEntropy != null) {
        if (extraEntropy === true) extraEntropy = $eebec0a1229b249a$export$eab97d15b1788b8d.randomBytes($eebec0a1229b249a$var$fieldLen);
        const e = $eebec0a1229b249a$var$ensureBytes(extraEntropy);
        if (e.length !== $eebec0a1229b249a$var$fieldLen) throw new Error(`sign: Expected ${$eebec0a1229b249a$var$fieldLen} bytes of extra data`);
        seedArgs.push(e);
    }
    const seed = $eebec0a1229b249a$var$concatBytes(...seedArgs);
    const m = $eebec0a1229b249a$var$bits2int(h1);
    return {
        seed: seed,
        m: m,
        d: d
    };
}
function $eebec0a1229b249a$var$finalizeSig(recSig, opts) {
    const { sig: sig, recovery: recovery } = recSig;
    const { der: der, recovered: recovered } = Object.assign({
        canonical: true,
        der: true
    }, opts);
    const hashed = der ? sig.toDERRawBytes() : sig.toCompactRawBytes();
    return recovered ? [
        hashed,
        recovery
    ] : hashed;
}
async function $eebec0a1229b249a$export$c5552dfdbc7cec71(msgHash, privKey, opts = {}) {
    const { seed: seed, m: m, d: d } = $eebec0a1229b249a$var$initSigArgs(msgHash, privKey, opts.extraEntropy);
    const drbg = new $eebec0a1229b249a$var$HmacDrbg($eebec0a1229b249a$var$hashLen, $eebec0a1229b249a$var$groupLen);
    await drbg.reseed(seed);
    let sig;
    while(!(sig = $eebec0a1229b249a$var$kmdToSig(await drbg.generate(), m, d, opts.canonical)))await drbg.reseed();
    return $eebec0a1229b249a$var$finalizeSig(sig, opts);
}
function $eebec0a1229b249a$export$6ff6692656050317(msgHash, privKey, opts = {}) {
    const { seed: seed, m: m, d: d } = $eebec0a1229b249a$var$initSigArgs(msgHash, privKey, opts.extraEntropy);
    const drbg = new $eebec0a1229b249a$var$HmacDrbg($eebec0a1229b249a$var$hashLen, $eebec0a1229b249a$var$groupLen);
    drbg.reseedSync(seed);
    let sig;
    while(!(sig = $eebec0a1229b249a$var$kmdToSig(drbg.generateSync(), m, d, opts.canonical)))drbg.reseedSync();
    return $eebec0a1229b249a$var$finalizeSig(sig, opts);
}
const $eebec0a1229b249a$var$vopts = {
    strict: true
};
function $eebec0a1229b249a$export$532244b5b8b0b4b6(signature, msgHash, publicKey, opts = $eebec0a1229b249a$var$vopts) {
    let sig;
    try {
        sig = $eebec0a1229b249a$var$normalizeSignature(signature);
        msgHash = $eebec0a1229b249a$var$ensureBytes(msgHash);
    } catch (error) {
        return false;
    }
    const { r: r, s: s } = sig;
    if (opts.strict && sig.hasHighS()) return false;
    const h = $eebec0a1229b249a$var$truncateHash(msgHash);
    let P;
    try {
        P = $eebec0a1229b249a$var$normalizePublicKey(publicKey);
    } catch (error) {
        return false;
    }
    const { n: n } = $eebec0a1229b249a$export$8ff8607b70325343;
    const sinv = $eebec0a1229b249a$var$invert(s, n);
    const u1 = $eebec0a1229b249a$var$mod(h * sinv, n);
    const u2 = $eebec0a1229b249a$var$mod(r * sinv, n);
    const R = $eebec0a1229b249a$export$baf26146a414f24a.BASE.multiplyAndAddUnsafe(P, u1, u2);
    if (!R) return false;
    const v = $eebec0a1229b249a$var$mod(R.x, n);
    return v === r;
}
function $eebec0a1229b249a$var$schnorrChallengeFinalize(ch) {
    return $eebec0a1229b249a$var$mod($eebec0a1229b249a$var$bytesToNumber(ch), $eebec0a1229b249a$export$8ff8607b70325343.n);
}
class $eebec0a1229b249a$var$SchnorrSignature {
    constructor(r, s){
        this.r = r;
        this.s = s;
        this.assertValidity();
    }
    static fromHex(hex) {
        const bytes = $eebec0a1229b249a$var$ensureBytes(hex);
        if (bytes.length !== 64) throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${bytes.length}`);
        const r = $eebec0a1229b249a$var$bytesToNumber(bytes.subarray(0, 32));
        const s = $eebec0a1229b249a$var$bytesToNumber(bytes.subarray(32, 64));
        return new $eebec0a1229b249a$var$SchnorrSignature(r, s);
    }
    assertValidity() {
        const { r: r, s: s } = this;
        if (!$eebec0a1229b249a$var$isValidFieldElement(r) || !$eebec0a1229b249a$var$isWithinCurveOrder(s)) throw new Error('Invalid signature');
    }
    toHex() {
        return $eebec0a1229b249a$var$numTo32bStr(this.r) + $eebec0a1229b249a$var$numTo32bStr(this.s);
    }
    toRawBytes() {
        return $eebec0a1229b249a$var$hexToBytes(this.toHex());
    }
}
function $eebec0a1229b249a$var$schnorrGetPublicKey(privateKey) {
    return $eebec0a1229b249a$export$baf26146a414f24a.fromPrivateKey(privateKey).toRawX();
}
class $eebec0a1229b249a$var$InternalSchnorrSignature {
    constructor(message, privateKey, auxRand = $eebec0a1229b249a$export$eab97d15b1788b8d.randomBytes()){
        if (message == null) throw new TypeError(`sign: Expected valid message, not "${message}"`);
        this.m = $eebec0a1229b249a$var$ensureBytes(message);
        const { x: x, scalar: scalar } = this.getScalar($eebec0a1229b249a$var$normalizePrivateKey(privateKey));
        this.px = x;
        this.d = scalar;
        this.rand = $eebec0a1229b249a$var$ensureBytes(auxRand);
        if (this.rand.length !== 32) throw new TypeError('sign: Expected 32 bytes of aux randomness');
    }
    getScalar(priv) {
        const point = $eebec0a1229b249a$export$baf26146a414f24a.fromPrivateKey(priv);
        const scalar = point.hasEvenY() ? priv : $eebec0a1229b249a$export$8ff8607b70325343.n - priv;
        return {
            point: point,
            scalar: scalar,
            x: point.toRawX()
        };
    }
    initNonce(d, t0h) {
        return $eebec0a1229b249a$var$numTo32b(d ^ $eebec0a1229b249a$var$bytesToNumber(t0h));
    }
    finalizeNonce(k0h) {
        const k0 = $eebec0a1229b249a$var$mod($eebec0a1229b249a$var$bytesToNumber(k0h), $eebec0a1229b249a$export$8ff8607b70325343.n);
        if (k0 === $eebec0a1229b249a$var$_0n) throw new Error('sign: Creation of signature failed. k is zero');
        const { point: R, x: rx, scalar: k } = this.getScalar(k0);
        return {
            R: R,
            rx: rx,
            k: k
        };
    }
    finalizeSig(R, k, e, d) {
        return new $eebec0a1229b249a$var$SchnorrSignature(R.x, $eebec0a1229b249a$var$mod(k + e * d, $eebec0a1229b249a$export$8ff8607b70325343.n)).toRawBytes();
    }
    error() {
        throw new Error('sign: Invalid signature produced');
    }
    async calc() {
        const { m: m, d: d, px: px, rand: rand } = this;
        const tag = $eebec0a1229b249a$export$eab97d15b1788b8d.taggedHash;
        const t = this.initNonce(d, await tag($eebec0a1229b249a$var$TAGS.aux, rand));
        const { R: R, rx: rx, k: k } = this.finalizeNonce(await tag($eebec0a1229b249a$var$TAGS.nonce, t, px, m));
        const e = $eebec0a1229b249a$var$schnorrChallengeFinalize(await tag($eebec0a1229b249a$var$TAGS.challenge, rx, px, m));
        const sig = this.finalizeSig(R, k, e, d);
        if (!await $eebec0a1229b249a$var$schnorrVerify(sig, m, px)) this.error();
        return sig;
    }
    calcSync() {
        const { m: m, d: d, px: px, rand: rand } = this;
        const tag = $eebec0a1229b249a$export$eab97d15b1788b8d.taggedHashSync;
        const t = this.initNonce(d, tag($eebec0a1229b249a$var$TAGS.aux, rand));
        const { R: R, rx: rx, k: k } = this.finalizeNonce(tag($eebec0a1229b249a$var$TAGS.nonce, t, px, m));
        const e = $eebec0a1229b249a$var$schnorrChallengeFinalize(tag($eebec0a1229b249a$var$TAGS.challenge, rx, px, m));
        const sig = this.finalizeSig(R, k, e, d);
        if (!$eebec0a1229b249a$var$schnorrVerifySync(sig, m, px)) this.error();
        return sig;
    }
}
async function $eebec0a1229b249a$var$schnorrSign(msg, privKey, auxRand) {
    return new $eebec0a1229b249a$var$InternalSchnorrSignature(msg, privKey, auxRand).calc();
}
function $eebec0a1229b249a$var$schnorrSignSync(msg, privKey, auxRand) {
    return new $eebec0a1229b249a$var$InternalSchnorrSignature(msg, privKey, auxRand).calcSync();
}
function $eebec0a1229b249a$var$initSchnorrVerify(signature, message, publicKey) {
    const raw = signature instanceof $eebec0a1229b249a$var$SchnorrSignature;
    const sig = raw ? signature : $eebec0a1229b249a$var$SchnorrSignature.fromHex(signature);
    if (raw) sig.assertValidity();
    return {
        ...sig,
        m: $eebec0a1229b249a$var$ensureBytes(message),
        P: $eebec0a1229b249a$var$normalizePublicKey(publicKey)
    };
}
function $eebec0a1229b249a$var$finalizeSchnorrVerify(r, P, s, e) {
    const R = $eebec0a1229b249a$export$baf26146a414f24a.BASE.multiplyAndAddUnsafe(P, $eebec0a1229b249a$var$normalizePrivateKey(s), $eebec0a1229b249a$var$mod(-e, $eebec0a1229b249a$export$8ff8607b70325343.n));
    if (!R || !R.hasEvenY() || R.x !== r) return false;
    return true;
}
async function $eebec0a1229b249a$var$schnorrVerify(signature, message, publicKey) {
    try {
        const { r: r, s: s, m: m, P: P } = $eebec0a1229b249a$var$initSchnorrVerify(signature, message, publicKey);
        const e = $eebec0a1229b249a$var$schnorrChallengeFinalize(await $eebec0a1229b249a$export$eab97d15b1788b8d.taggedHash($eebec0a1229b249a$var$TAGS.challenge, $eebec0a1229b249a$var$numTo32b(r), P.toRawX(), m));
        return $eebec0a1229b249a$var$finalizeSchnorrVerify(r, P, s, e);
    } catch (error) {
        return false;
    }
}
function $eebec0a1229b249a$var$schnorrVerifySync(signature, message, publicKey) {
    try {
        const { r: r, s: s, m: m, P: P } = $eebec0a1229b249a$var$initSchnorrVerify(signature, message, publicKey);
        const e = $eebec0a1229b249a$var$schnorrChallengeFinalize($eebec0a1229b249a$export$eab97d15b1788b8d.taggedHashSync($eebec0a1229b249a$var$TAGS.challenge, $eebec0a1229b249a$var$numTo32b(r), P.toRawX(), m));
        return $eebec0a1229b249a$var$finalizeSchnorrVerify(r, P, s, e);
    } catch (error) {
        if (error instanceof $eebec0a1229b249a$var$ShaError) throw error;
        return false;
    }
}
const $eebec0a1229b249a$export$1f2401df071be9f = {
    Signature: $eebec0a1229b249a$var$SchnorrSignature,
    getPublicKey: $eebec0a1229b249a$var$schnorrGetPublicKey,
    sign: $eebec0a1229b249a$var$schnorrSign,
    verify: $eebec0a1229b249a$var$schnorrVerify,
    signSync: $eebec0a1229b249a$var$schnorrSignSync,
    verifySync: $eebec0a1229b249a$var$schnorrVerifySync
};
$eebec0a1229b249a$export$baf26146a414f24a.BASE._setWindowSize(8);
const $eebec0a1229b249a$var$crypto = {
    node: $b811d544982c9a9d$exports,
    web: typeof self === 'object' && 'crypto' in self ? self.crypto : undefined
};
const $eebec0a1229b249a$var$TAGS = {
    challenge: 'BIP0340/challenge',
    aux: 'BIP0340/aux',
    nonce: 'BIP0340/nonce'
};
const $eebec0a1229b249a$var$TAGGED_HASH_PREFIXES = {};
const $eebec0a1229b249a$export$eab97d15b1788b8d = {
    bytesToHex: $eebec0a1229b249a$var$bytesToHex,
    hexToBytes: $eebec0a1229b249a$var$hexToBytes,
    concatBytes: $eebec0a1229b249a$var$concatBytes,
    mod: $eebec0a1229b249a$var$mod,
    invert: $eebec0a1229b249a$var$invert,
    isValidPrivateKey (privateKey) {
        try {
            $eebec0a1229b249a$var$normalizePrivateKey(privateKey);
            return true;
        } catch (error) {
            return false;
        }
    },
    _bigintTo32Bytes: $eebec0a1229b249a$var$numTo32b,
    _normalizePrivateKey: $eebec0a1229b249a$var$normalizePrivateKey,
    hashToPrivateKey: (hash)=>{
        hash = $eebec0a1229b249a$var$ensureBytes(hash);
        const minLen = $eebec0a1229b249a$var$groupLen + 8;
        if (hash.length < minLen || hash.length > 1024) throw new Error(`Expected valid bytes of private key as per FIPS 186`);
        const num = $eebec0a1229b249a$var$mod($eebec0a1229b249a$var$bytesToNumber(hash), $eebec0a1229b249a$export$8ff8607b70325343.n - $eebec0a1229b249a$var$_1n) + $eebec0a1229b249a$var$_1n;
        return $eebec0a1229b249a$var$numTo32b(num);
    },
    randomBytes: (bytesLength = 32)=>{
        if ($eebec0a1229b249a$var$crypto.web) return $eebec0a1229b249a$var$crypto.web.getRandomValues(new Uint8Array(bytesLength));
        else if ($eebec0a1229b249a$var$crypto.node) {
            const { randomBytes: randomBytes } = $eebec0a1229b249a$var$crypto.node;
            return Uint8Array.from(randomBytes(bytesLength));
        } else throw new Error("The environment doesn't have randomBytes function");
    },
    randomPrivateKey: ()=>$eebec0a1229b249a$export$eab97d15b1788b8d.hashToPrivateKey($eebec0a1229b249a$export$eab97d15b1788b8d.randomBytes($eebec0a1229b249a$var$groupLen + 8)),
    precompute (windowSize = 8, point = $eebec0a1229b249a$export$baf26146a414f24a.BASE) {
        const cached = point === $eebec0a1229b249a$export$baf26146a414f24a.BASE ? point : new $eebec0a1229b249a$export$baf26146a414f24a(point.x, point.y);
        cached._setWindowSize(windowSize);
        cached.multiply($eebec0a1229b249a$var$_3n);
        return cached;
    },
    sha256: async (...messages)=>{
        if ($eebec0a1229b249a$var$crypto.web) {
            const buffer = await $eebec0a1229b249a$var$crypto.web.subtle.digest('SHA-256', $eebec0a1229b249a$var$concatBytes(...messages));
            return new Uint8Array(buffer);
        } else if ($eebec0a1229b249a$var$crypto.node) {
            const { createHash: createHash } = $eebec0a1229b249a$var$crypto.node;
            const hash = createHash('sha256');
            messages.forEach((m)=>hash.update(m));
            return Uint8Array.from(hash.digest());
        } else throw new Error("The environment doesn't have sha256 function");
    },
    hmacSha256: async (key, ...messages)=>{
        if ($eebec0a1229b249a$var$crypto.web) {
            const ckey = await $eebec0a1229b249a$var$crypto.web.subtle.importKey('raw', key, {
                name: 'HMAC',
                hash: {
                    name: 'SHA-256'
                }
            }, false, [
                'sign'
            ]);
            const message = $eebec0a1229b249a$var$concatBytes(...messages);
            const buffer = await $eebec0a1229b249a$var$crypto.web.subtle.sign('HMAC', ckey, message);
            return new Uint8Array(buffer);
        } else if ($eebec0a1229b249a$var$crypto.node) {
            const { createHmac: createHmac } = $eebec0a1229b249a$var$crypto.node;
            const hash = createHmac('sha256', key);
            messages.forEach((m)=>hash.update(m));
            return Uint8Array.from(hash.digest());
        } else throw new Error("The environment doesn't have hmac-sha256 function");
    },
    sha256Sync: undefined,
    hmacSha256Sync: undefined,
    taggedHash: async (tag, ...messages)=>{
        let tagP = $eebec0a1229b249a$var$TAGGED_HASH_PREFIXES[tag];
        if (tagP === undefined) {
            const tagH = await $eebec0a1229b249a$export$eab97d15b1788b8d.sha256(Uint8Array.from(tag, (c)=>c.charCodeAt(0)));
            tagP = $eebec0a1229b249a$var$concatBytes(tagH, tagH);
            $eebec0a1229b249a$var$TAGGED_HASH_PREFIXES[tag] = tagP;
        }
        return $eebec0a1229b249a$export$eab97d15b1788b8d.sha256(tagP, ...messages);
    },
    taggedHashSync: (tag, ...messages)=>{
        if (typeof $eebec0a1229b249a$var$_sha256Sync !== 'function') throw new $eebec0a1229b249a$var$ShaError('sha256Sync is undefined, you need to set it');
        let tagP = $eebec0a1229b249a$var$TAGGED_HASH_PREFIXES[tag];
        if (tagP === undefined) {
            const tagH = $eebec0a1229b249a$var$_sha256Sync(Uint8Array.from(tag, (c)=>c.charCodeAt(0)));
            tagP = $eebec0a1229b249a$var$concatBytes(tagH, tagH);
            $eebec0a1229b249a$var$TAGGED_HASH_PREFIXES[tag] = tagP;
        }
        return $eebec0a1229b249a$var$_sha256Sync(tagP, ...messages);
    },
    _JacobianPoint: $eebec0a1229b249a$var$JacobianPoint
};
Object.defineProperties($eebec0a1229b249a$export$eab97d15b1788b8d, {
    sha256Sync: {
        configurable: false,
        get () {
            return $eebec0a1229b249a$var$_sha256Sync;
        },
        set (val) {
            if (!$eebec0a1229b249a$var$_sha256Sync) $eebec0a1229b249a$var$_sha256Sync = val;
        }
    },
    hmacSha256Sync: {
        configurable: false,
        get () {
            return $eebec0a1229b249a$var$_hmacSha256Sync;
        },
        set (val) {
            if (!$eebec0a1229b249a$var$_hmacSha256Sync) $eebec0a1229b249a$var$_hmacSha256Sync = val;
        }
    }
});


var $b5280835b16caf32$exports = {};
"use strict";
Object.defineProperty($b5280835b16caf32$exports, "__esModule", {
    value: true
});
$b5280835b16caf32$exports.sha224 = $b5280835b16caf32$exports.sha256 = void 0;
var $70a3a5f666667cd5$exports = {};
"use strict";
Object.defineProperty($70a3a5f666667cd5$exports, "__esModule", {
    value: true
});
$70a3a5f666667cd5$exports.SHA2 = void 0;
var $b17cd3543bb4c9a3$exports = {};
"use strict";
Object.defineProperty($b17cd3543bb4c9a3$exports, "__esModule", {
    value: true
});
$b17cd3543bb4c9a3$exports.output = $b17cd3543bb4c9a3$exports.exists = $b17cd3543bb4c9a3$exports.hash = $b17cd3543bb4c9a3$exports.bytes = $b17cd3543bb4c9a3$exports.bool = $b17cd3543bb4c9a3$exports.number = void 0;
function $b17cd3543bb4c9a3$var$number(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error(`Wrong positive integer: ${n}`);
}
$b17cd3543bb4c9a3$exports.number = $b17cd3543bb4c9a3$var$number;
function $b17cd3543bb4c9a3$var$bool(b) {
    if (typeof b !== 'boolean') throw new Error(`Expected boolean, not ${b}`);
}
$b17cd3543bb4c9a3$exports.bool = $b17cd3543bb4c9a3$var$bool;
function $b17cd3543bb4c9a3$var$bytes(b, ...lengths) {
    if (!(b instanceof Uint8Array)) throw new TypeError('Expected Uint8Array');
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new TypeError(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
$b17cd3543bb4c9a3$exports.bytes = $b17cd3543bb4c9a3$var$bytes;
function $b17cd3543bb4c9a3$var$hash(hash) {
    if (typeof hash !== 'function' || typeof hash.create !== 'function') throw new Error('Hash should be wrapped by utils.wrapConstructor');
    $b17cd3543bb4c9a3$var$number(hash.outputLen);
    $b17cd3543bb4c9a3$var$number(hash.blockLen);
}
$b17cd3543bb4c9a3$exports.hash = $b17cd3543bb4c9a3$var$hash;
function $b17cd3543bb4c9a3$var$exists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
$b17cd3543bb4c9a3$exports.exists = $b17cd3543bb4c9a3$var$exists;
function $b17cd3543bb4c9a3$var$output(out, instance) {
    $b17cd3543bb4c9a3$var$bytes(out);
    const min = instance.outputLen;
    if (out.length < min) throw new Error(`digestInto() expects output buffer of length at least ${min}`);
}
$b17cd3543bb4c9a3$exports.output = $b17cd3543bb4c9a3$var$output;
const $b17cd3543bb4c9a3$var$assert = {
    number: $b17cd3543bb4c9a3$var$number,
    bool: $b17cd3543bb4c9a3$var$bool,
    bytes: $b17cd3543bb4c9a3$var$bytes,
    hash: $b17cd3543bb4c9a3$var$hash,
    exists: $b17cd3543bb4c9a3$var$exists,
    output: $b17cd3543bb4c9a3$var$output
};
$b17cd3543bb4c9a3$exports.default = $b17cd3543bb4c9a3$var$assert;


var $a4a7a2e03d59da9d$exports = {};
"use strict";
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty($a4a7a2e03d59da9d$exports, "__esModule", {
    value: true
});
$a4a7a2e03d59da9d$exports.randomBytes = $a4a7a2e03d59da9d$exports.wrapConstructorWithOpts = $a4a7a2e03d59da9d$exports.wrapConstructor = $a4a7a2e03d59da9d$exports.checkOpts = $a4a7a2e03d59da9d$exports.Hash = $a4a7a2e03d59da9d$exports.concatBytes = $a4a7a2e03d59da9d$exports.toBytes = $a4a7a2e03d59da9d$exports.utf8ToBytes = $a4a7a2e03d59da9d$exports.asyncLoop = $a4a7a2e03d59da9d$exports.nextTick = $a4a7a2e03d59da9d$exports.hexToBytes = $a4a7a2e03d59da9d$exports.bytesToHex = $a4a7a2e03d59da9d$exports.isLE = $a4a7a2e03d59da9d$exports.rotr = $a4a7a2e03d59da9d$exports.createView = $a4a7a2e03d59da9d$exports.u32 = $a4a7a2e03d59da9d$exports.u8 = void 0;
var $2a18ae2a3ed9d5e7$exports = {};
"use strict";
Object.defineProperty($2a18ae2a3ed9d5e7$exports, "__esModule", {
    value: true
});
$2a18ae2a3ed9d5e7$exports.crypto = void 0;
$2a18ae2a3ed9d5e7$exports.crypto = {
    node: undefined,
    web: typeof self === 'object' && 'crypto' in self ? self.crypto : undefined
};


// Cast array to different type
const $a4a7a2e03d59da9d$var$u8 = (arr)=>new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
$a4a7a2e03d59da9d$exports.u8 = $a4a7a2e03d59da9d$var$u8;
const $a4a7a2e03d59da9d$var$u32 = (arr)=>new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
$a4a7a2e03d59da9d$exports.u32 = $a4a7a2e03d59da9d$var$u32;
// Cast array to view
const $a4a7a2e03d59da9d$var$createView = (arr)=>new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
$a4a7a2e03d59da9d$exports.createView = $a4a7a2e03d59da9d$var$createView;
// The rotate right (circular right shift) operation for uint32
const $a4a7a2e03d59da9d$var$rotr = (word, shift)=>word << 32 - shift | word >>> shift;
$a4a7a2e03d59da9d$exports.rotr = $a4a7a2e03d59da9d$var$rotr;
$a4a7a2e03d59da9d$exports.isLE = new Uint8Array(new Uint32Array([
    0x11223344
]).buffer)[0] === 0x44;
// There is almost no big endian hardware, but js typed arrays uses platform specific endianness.
// So, just to be sure not to corrupt anything.
if (!$a4a7a2e03d59da9d$exports.isLE) throw new Error('Non little-endian hardware is not supported');
const $a4a7a2e03d59da9d$var$hexes = Array.from({
    length: 256
}, (v, i)=>i.toString(16).padStart(2, '0'));
/**
 * @example bytesToHex(Uint8Array.from([0xde, 0xad, 0xbe, 0xef]))
 */ function $a4a7a2e03d59da9d$var$bytesToHex(uint8a) {
    // pre-caching improves the speed 6x
    if (!(uint8a instanceof Uint8Array)) throw new Error('Uint8Array expected');
    let hex = '';
    for(let i = 0; i < uint8a.length; i++)hex += $a4a7a2e03d59da9d$var$hexes[uint8a[i]];
    return hex;
}
$a4a7a2e03d59da9d$exports.bytesToHex = $a4a7a2e03d59da9d$var$bytesToHex;
/**
 * @example hexToBytes('deadbeef')
 */ function $a4a7a2e03d59da9d$var$hexToBytes(hex) {
    if (typeof hex !== 'string') throw new TypeError('hexToBytes: expected string, got ' + typeof hex);
    if (hex.length % 2) throw new Error('hexToBytes: received invalid unpadded hex');
    const array = new Uint8Array(hex.length / 2);
    for(let i = 0; i < array.length; i++){
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0) throw new Error('Invalid byte sequence');
        array[i] = byte;
    }
    return array;
}
$a4a7a2e03d59da9d$exports.hexToBytes = $a4a7a2e03d59da9d$var$hexToBytes;
// There is no setImmediate in browser and setTimeout is slow. However, call to async function will return Promise
// which will be fullfiled only on next scheduler queue processing step and this is exactly what we need.
const $a4a7a2e03d59da9d$var$nextTick = async ()=>{};
$a4a7a2e03d59da9d$exports.nextTick = $a4a7a2e03d59da9d$var$nextTick;
// Returns control to thread each 'tick' ms to avoid blocking
async function $a4a7a2e03d59da9d$var$asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await (0, $a4a7a2e03d59da9d$exports.nextTick)();
        ts += diff;
    }
}
$a4a7a2e03d59da9d$exports.asyncLoop = $a4a7a2e03d59da9d$var$asyncLoop;
function $a4a7a2e03d59da9d$var$utf8ToBytes(str) {
    if (typeof str !== 'string') throw new TypeError(`utf8ToBytes expected string, got ${typeof str}`);
    return new TextEncoder().encode(str);
}
$a4a7a2e03d59da9d$exports.utf8ToBytes = $a4a7a2e03d59da9d$var$utf8ToBytes;
function $a4a7a2e03d59da9d$var$toBytes(data) {
    if (typeof data === 'string') data = $a4a7a2e03d59da9d$var$utf8ToBytes(data);
    if (!(data instanceof Uint8Array)) throw new TypeError(`Expected input type is Uint8Array (got ${typeof data})`);
    return data;
}
$a4a7a2e03d59da9d$exports.toBytes = $a4a7a2e03d59da9d$var$toBytes;
/**
 * Concats Uint8Array-s into one; like `Buffer.concat([buf1, buf2])`
 * @example concatBytes(buf1, buf2)
 */ function $a4a7a2e03d59da9d$var$concatBytes(...arrays) {
    if (!arrays.every((a)=>a instanceof Uint8Array)) throw new Error('Uint8Array list expected');
    if (arrays.length === 1) return arrays[0];
    const length = arrays.reduce((a, arr)=>a + arr.length, 0);
    const result = new Uint8Array(length);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const arr = arrays[i];
        result.set(arr, pad);
        pad += arr.length;
    }
    return result;
}
$a4a7a2e03d59da9d$exports.concatBytes = $a4a7a2e03d59da9d$var$concatBytes;
// For runtime check if class implements interface
class $a4a7a2e03d59da9d$var$Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
$a4a7a2e03d59da9d$exports.Hash = $a4a7a2e03d59da9d$var$Hash;
// Check if object doens't have custom constructor (like Uint8Array/Array)
const $a4a7a2e03d59da9d$var$isPlainObject = (obj)=>Object.prototype.toString.call(obj) === '[object Object]' && obj.constructor === Object;
function $a4a7a2e03d59da9d$var$checkOpts(defaults, opts) {
    if (opts !== undefined && (typeof opts !== 'object' || !$a4a7a2e03d59da9d$var$isPlainObject(opts))) throw new TypeError('Options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
$a4a7a2e03d59da9d$exports.checkOpts = $a4a7a2e03d59da9d$var$checkOpts;
function $a4a7a2e03d59da9d$var$wrapConstructor(hashConstructor) {
    const hashC = (message)=>hashConstructor().update($a4a7a2e03d59da9d$var$toBytes(message)).digest();
    const tmp = hashConstructor();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashConstructor();
    return hashC;
}
$a4a7a2e03d59da9d$exports.wrapConstructor = $a4a7a2e03d59da9d$var$wrapConstructor;
function $a4a7a2e03d59da9d$var$wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update($a4a7a2e03d59da9d$var$toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
$a4a7a2e03d59da9d$exports.wrapConstructorWithOpts = $a4a7a2e03d59da9d$var$wrapConstructorWithOpts;
/**
 * Secure PRNG
 */ function $a4a7a2e03d59da9d$var$randomBytes(bytesLength = 32) {
    if ($2a18ae2a3ed9d5e7$exports.crypto.web) return $2a18ae2a3ed9d5e7$exports.crypto.web.getRandomValues(new Uint8Array(bytesLength));
    else if ($2a18ae2a3ed9d5e7$exports.crypto.node) return new Uint8Array($2a18ae2a3ed9d5e7$exports.crypto.node.randomBytes(bytesLength).buffer);
    else throw new Error("The environment doesn't have randomBytes function");
}
$a4a7a2e03d59da9d$exports.randomBytes = $a4a7a2e03d59da9d$var$randomBytes;


// Polyfill for Safari 14
function $70a3a5f666667cd5$var$setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === 'function') return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number(value >> _32n & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
// Base SHA2 class (RFC 6234)
class $70a3a5f666667cd5$var$SHA2 extends $a4a7a2e03d59da9d$exports.Hash {
    constructor(blockLen, outputLen, padOffset, isLE){
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, $a4a7a2e03d59da9d$exports.createView)(this.buffer);
    }
    update(data) {
        $b17cd3543bb4c9a3$exports.default.exists(this);
        const { view: view, buffer: buffer, blockLen: blockLen } = this;
        data = (0, $a4a7a2e03d59da9d$exports.toBytes)(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, $a4a7a2e03d59da9d$exports.createView)(data);
                for(; blockLen <= len - pos; pos += blockLen)this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        $b17cd3543bb4c9a3$exports.default.exists(this);
        $b17cd3543bb4c9a3$exports.default.output(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer: buffer, view: view, blockLen: blockLen, isLE: isLE } = this;
        let { pos: pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 128;
        this.buffer.subarray(pos).fill(0);
        // we have less than padOffset left in buffer, so we cannot put length in current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for(let i = pos; i < blockLen; i++)buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        $70a3a5f666667cd5$var$setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, $a4a7a2e03d59da9d$exports.createView)(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length) throw new Error('_sha2: outputLen bigger than state');
        for(let i = 0; i < outLen; i++)oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer: buffer, outputLen: outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen: blockLen, buffer: buffer, length: length, finished: finished, destroyed: destroyed, pos: pos } = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen) to.buffer.set(buffer);
        return to;
    }
}
$70a3a5f666667cd5$exports.SHA2 = $70a3a5f666667cd5$var$SHA2;



// Choice: a ? b : c
const $b5280835b16caf32$var$Chi = (a, b, c)=>a & b ^ ~a & c;
// Majority function, true if any two inpust is true
const $b5280835b16caf32$var$Maj = (a, b, c)=>a & b ^ a & c ^ b & c;
// Round constants:
// first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311)
// prettier-ignore
const $b5280835b16caf32$var$SHA256_K = new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
// Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
// prettier-ignore
const $b5280835b16caf32$var$IV = new Uint32Array([
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
]);
// Temporary buffer, not used to store anything between runs
// Named this way because it matches specification.
const $b5280835b16caf32$var$SHA256_W = new Uint32Array(64);
class $b5280835b16caf32$var$SHA256 extends $70a3a5f666667cd5$exports.SHA2 {
    constructor(){
        super(64, 32, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = $b5280835b16caf32$var$IV[0] | 0;
        this.B = $b5280835b16caf32$var$IV[1] | 0;
        this.C = $b5280835b16caf32$var$IV[2] | 0;
        this.D = $b5280835b16caf32$var$IV[3] | 0;
        this.E = $b5280835b16caf32$var$IV[4] | 0;
        this.F = $b5280835b16caf32$var$IV[5] | 0;
        this.G = $b5280835b16caf32$var$IV[6] | 0;
        this.H = $b5280835b16caf32$var$IV[7] | 0;
    }
    get() {
        const { A: A, B: B, C: C, D: D, E: E, F: F, G: G, H: H } = this;
        return [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H
        ];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4)$b5280835b16caf32$var$SHA256_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 64; i++){
            const W15 = $b5280835b16caf32$var$SHA256_W[i - 15];
            const W2 = $b5280835b16caf32$var$SHA256_W[i - 2];
            const s0 = (0, $a4a7a2e03d59da9d$exports.rotr)(W15, 7) ^ (0, $a4a7a2e03d59da9d$exports.rotr)(W15, 18) ^ W15 >>> 3;
            const s1 = (0, $a4a7a2e03d59da9d$exports.rotr)(W2, 17) ^ (0, $a4a7a2e03d59da9d$exports.rotr)(W2, 19) ^ W2 >>> 10;
            $b5280835b16caf32$var$SHA256_W[i] = s1 + $b5280835b16caf32$var$SHA256_W[i - 7] + s0 + $b5280835b16caf32$var$SHA256_W[i - 16] | 0;
        }
        // Compression function main loop, 64 rounds
        let { A: A, B: B, C: C, D: D, E: E, F: F, G: G, H: H } = this;
        for(let i = 0; i < 64; i++){
            const sigma1 = (0, $a4a7a2e03d59da9d$exports.rotr)(E, 6) ^ (0, $a4a7a2e03d59da9d$exports.rotr)(E, 11) ^ (0, $a4a7a2e03d59da9d$exports.rotr)(E, 25);
            const T1 = H + sigma1 + $b5280835b16caf32$var$Chi(E, F, G) + $b5280835b16caf32$var$SHA256_K[i] + $b5280835b16caf32$var$SHA256_W[i] | 0;
            const sigma0 = (0, $a4a7a2e03d59da9d$exports.rotr)(A, 2) ^ (0, $a4a7a2e03d59da9d$exports.rotr)(A, 13) ^ (0, $a4a7a2e03d59da9d$exports.rotr)(A, 22);
            const T2 = sigma0 + $b5280835b16caf32$var$Maj(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        $b5280835b16caf32$var$SHA256_W.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
    }
}
// Constants from https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
class $b5280835b16caf32$var$SHA224 extends $b5280835b16caf32$var$SHA256 {
    constructor(){
        super();
        this.A = -1056596264;
        this.B = 914150663;
        this.C = 812702999;
        this.D = -150054599;
        this.E = -4191439;
        this.F = 1750603025;
        this.G = 1694076839;
        this.H = -1090891868;
        this.outputLen = 28;
    }
}
/**
 * SHA2-256 hash function
 * @param message - data that would be hashed
 */ $b5280835b16caf32$exports.sha256 = (0, $a4a7a2e03d59da9d$exports.wrapConstructor)(()=>new $b5280835b16caf32$var$SHA256());
$b5280835b16caf32$exports.sha224 = (0, $a4a7a2e03d59da9d$exports.wrapConstructor)(()=>new $b5280835b16caf32$var$SHA224());


/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function $c97f81be67511c58$export$dfbcecb440255e4a(n) {
    if (!Number.isSafeInteger(n)) throw new Error(`Wrong integer: ${n}`);
}
function $c97f81be67511c58$var$chain(...args) {
    const wrap = (a, b)=>(c)=>a(b(c));
    const encode = Array.from(args).reverse().reduce((acc, i)=>acc ? wrap(acc, i.encode) : i.encode, undefined);
    const decode = args.reduce((acc, i)=>acc ? wrap(acc, i.decode) : i.decode, undefined);
    return {
        encode: encode,
        decode: decode
    };
}
function $c97f81be67511c58$var$alphabet(alphabet) {
    return {
        encode: (digits)=>{
            if (!Array.isArray(digits) || digits.length && typeof digits[0] !== 'number') throw new Error('alphabet.encode input should be an array of numbers');
            return digits.map((i)=>{
                $c97f81be67511c58$export$dfbcecb440255e4a(i);
                if (i < 0 || i >= alphabet.length) throw new Error(`Digit index outside alphabet: ${i} (alphabet: ${alphabet.length})`);
                return alphabet[i];
            });
        },
        decode: (input)=>{
            if (!Array.isArray(input) || input.length && typeof input[0] !== 'string') throw new Error('alphabet.decode input should be array of strings');
            return input.map((letter)=>{
                if (typeof letter !== 'string') throw new Error(`alphabet.decode: not string element=${letter}`);
                const index = alphabet.indexOf(letter);
                if (index === -1) throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet}`);
                return index;
            });
        }
    };
}
function $c97f81be67511c58$var$join(separator = '') {
    if (typeof separator !== 'string') throw new Error('join separator should be string');
    return {
        encode: (from)=>{
            if (!Array.isArray(from) || from.length && typeof from[0] !== 'string') throw new Error('join.encode input should be array of strings');
            for (let i of from)if (typeof i !== 'string') throw new Error(`join.encode: non-string input=${i}`);
            return from.join(separator);
        },
        decode: (to)=>{
            if (typeof to !== 'string') throw new Error('join.decode input should be string');
            return to.split(separator);
        }
    };
}
function $c97f81be67511c58$var$padding(bits, chr = '=') {
    $c97f81be67511c58$export$dfbcecb440255e4a(bits);
    if (typeof chr !== 'string') throw new Error('padding chr should be string');
    return {
        encode (data) {
            if (!Array.isArray(data) || data.length && typeof data[0] !== 'string') throw new Error('padding.encode input should be array of strings');
            for (let i of data)if (typeof i !== 'string') throw new Error(`padding.encode: non-string input=${i}`);
            while(data.length * bits % 8)data.push(chr);
            return data;
        },
        decode (input) {
            if (!Array.isArray(input) || input.length && typeof input[0] !== 'string') throw new Error('padding.encode input should be array of strings');
            for (let i of input)if (typeof i !== 'string') throw new Error(`padding.decode: non-string input=${i}`);
            let end = input.length;
            if (end * bits % 8) throw new Error('Invalid padding: string should have whole number of bytes');
            for(; end > 0 && input[end - 1] === chr; end--){
                if (!((end - 1) * bits % 8)) throw new Error('Invalid padding: string has too much padding');
            }
            return input.slice(0, end);
        }
    };
}
function $c97f81be67511c58$var$normalize(fn) {
    if (typeof fn !== 'function') throw new Error('normalize fn should be function');
    return {
        encode: (from)=>from,
        decode: (to)=>fn(to)
    };
}
function $c97f81be67511c58$var$convertRadix(data, from, to) {
    if (from < 2) throw new Error(`convertRadix: wrong from=${from}, base cannot be less than 2`);
    if (to < 2) throw new Error(`convertRadix: wrong to=${to}, base cannot be less than 2`);
    if (!Array.isArray(data)) throw new Error('convertRadix: data should be array');
    if (!data.length) return [];
    let pos = 0;
    const res = [];
    const digits = Array.from(data);
    digits.forEach((d)=>{
        $c97f81be67511c58$export$dfbcecb440255e4a(d);
        if (d < 0 || d >= from) throw new Error(`Wrong integer: ${d}`);
    });
    while(true){
        let carry = 0;
        let done = true;
        for(let i = pos; i < digits.length; i++){
            const digit = digits[i];
            const digitBase = from * carry + digit;
            if (!Number.isSafeInteger(digitBase) || from * carry / from !== carry || digitBase - digit !== from * carry) throw new Error('convertRadix: carry overflow');
            carry = digitBase % to;
            digits[i] = Math.floor(digitBase / to);
            if (!Number.isSafeInteger(digits[i]) || digits[i] * to + carry !== digitBase) throw new Error('convertRadix: carry overflow');
            if (!done) continue;
            else if (!digits[i]) pos = i;
            else done = false;
        }
        res.push(carry);
        if (done) break;
    }
    for(let i = 0; i < data.length - 1 && data[i] === 0; i++)res.push(0);
    return res.reverse();
}
const $c97f81be67511c58$var$gcd = (a, b)=>!b ? a : $c97f81be67511c58$var$gcd(b, a % b);
const $c97f81be67511c58$var$radix2carry = (from, to)=>from + (to - $c97f81be67511c58$var$gcd(from, to));
function $c97f81be67511c58$var$convertRadix2(data, from, to, padding) {
    if (!Array.isArray(data)) throw new Error('convertRadix2: data should be array');
    if (from <= 0 || from > 32) throw new Error(`convertRadix2: wrong from=${from}`);
    if (to <= 0 || to > 32) throw new Error(`convertRadix2: wrong to=${to}`);
    if ($c97f81be67511c58$var$radix2carry(from, to) > 32) throw new Error(`convertRadix2: carry overflow from=${from} to=${to} carryBits=${$c97f81be67511c58$var$radix2carry(from, to)}`);
    let carry = 0;
    let pos = 0;
    const mask = 2 ** to - 1;
    const res = [];
    for (const n of data){
        $c97f81be67511c58$export$dfbcecb440255e4a(n);
        if (n >= 2 ** from) throw new Error(`convertRadix2: invalid data word=${n} from=${from}`);
        carry = carry << from | n;
        if (pos + from > 32) throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from}`);
        pos += from;
        for(; pos >= to; pos -= to)res.push((carry >> pos - to & mask) >>> 0);
        carry &= 2 ** pos - 1;
    }
    carry = carry << to - pos & mask;
    if (!padding && pos >= from) throw new Error('Excess padding');
    if (!padding && carry) throw new Error(`Non-zero padding: ${carry}`);
    if (padding && pos > 0) res.push(carry >>> 0);
    return res;
}
function $c97f81be67511c58$var$radix(num) {
    $c97f81be67511c58$export$dfbcecb440255e4a(num);
    return {
        encode: (bytes)=>{
            if (!(bytes instanceof Uint8Array)) throw new Error('radix.encode input should be Uint8Array');
            return $c97f81be67511c58$var$convertRadix(Array.from(bytes), 256, num);
        },
        decode: (digits)=>{
            if (!Array.isArray(digits) || digits.length && typeof digits[0] !== 'number') throw new Error('radix.decode input should be array of strings');
            return Uint8Array.from($c97f81be67511c58$var$convertRadix(digits, num, 256));
        }
    };
}
function $c97f81be67511c58$var$radix2(bits, revPadding = false) {
    $c97f81be67511c58$export$dfbcecb440255e4a(bits);
    if (bits <= 0 || bits > 32) throw new Error('radix2: bits should be in (0..32]');
    if ($c97f81be67511c58$var$radix2carry(8, bits) > 32 || $c97f81be67511c58$var$radix2carry(bits, 8) > 32) throw new Error('radix2: carry overflow');
    return {
        encode: (bytes)=>{
            if (!(bytes instanceof Uint8Array)) throw new Error('radix2.encode input should be Uint8Array');
            return $c97f81be67511c58$var$convertRadix2(Array.from(bytes), 8, bits, !revPadding);
        },
        decode: (digits)=>{
            if (!Array.isArray(digits) || digits.length && typeof digits[0] !== 'number') throw new Error('radix2.decode input should be array of strings');
            return Uint8Array.from($c97f81be67511c58$var$convertRadix2(digits, bits, 8, revPadding));
        }
    };
}
function $c97f81be67511c58$var$unsafeWrapper(fn) {
    if (typeof fn !== 'function') throw new Error('unsafeWrapper fn should be function');
    return function(...args) {
        try {
            return fn.apply(null, args);
        } catch (e) {}
    };
}
function $c97f81be67511c58$var$checksum(len, fn) {
    $c97f81be67511c58$export$dfbcecb440255e4a(len);
    if (typeof fn !== 'function') throw new Error('checksum fn should be function');
    return {
        encode (data) {
            if (!(data instanceof Uint8Array)) throw new Error('checksum.encode: input should be Uint8Array');
            const checksum = fn(data).slice(0, len);
            const res = new Uint8Array(data.length + len);
            res.set(data);
            res.set(checksum, data.length);
            return res;
        },
        decode (data) {
            if (!(data instanceof Uint8Array)) throw new Error('checksum.decode: input should be Uint8Array');
            const payload = data.slice(0, -len);
            const newChecksum = fn(payload).slice(0, len);
            const oldChecksum = data.slice(-len);
            for(let i = 0; i < len; i++)if (newChecksum[i] !== oldChecksum[i]) throw new Error('Invalid checksum');
            return payload;
        }
    };
}
const $c97f81be67511c58$export$eab97d15b1788b8d = {
    alphabet: $c97f81be67511c58$var$alphabet,
    chain: $c97f81be67511c58$var$chain,
    checksum: $c97f81be67511c58$var$checksum,
    radix: $c97f81be67511c58$var$radix,
    radix2: $c97f81be67511c58$var$radix2,
    join: $c97f81be67511c58$var$join,
    padding: $c97f81be67511c58$var$padding
};
const $c97f81be67511c58$export$586f61c71cb02fe4 = $c97f81be67511c58$var$chain($c97f81be67511c58$var$radix2(4), $c97f81be67511c58$var$alphabet('0123456789ABCDEF'), $c97f81be67511c58$var$join(''));
const $c97f81be67511c58$export$4a4d5965e2738b2a = $c97f81be67511c58$var$chain($c97f81be67511c58$var$radix2(5), $c97f81be67511c58$var$alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'), $c97f81be67511c58$var$padding(5), $c97f81be67511c58$var$join(''));
const $c97f81be67511c58$export$c57d6760d519c8ac = $c97f81be67511c58$var$chain($c97f81be67511c58$var$radix2(5), $c97f81be67511c58$var$alphabet('0123456789ABCDEFGHIJKLMNOPQRSTUV'), $c97f81be67511c58$var$padding(5), $c97f81be67511c58$var$join(''));
const $c97f81be67511c58$export$5fbcb08925249358 = $c97f81be67511c58$var$chain($c97f81be67511c58$var$radix2(5), $c97f81be67511c58$var$alphabet('0123456789ABCDEFGHJKMNPQRSTVWXYZ'), $c97f81be67511c58$var$join(''), $c97f81be67511c58$var$normalize((s)=>s.toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1')));
const $c97f81be67511c58$export$b3b2de96497acc47 = $c97f81be67511c58$var$chain($c97f81be67511c58$var$radix2(6), $c97f81be67511c58$var$alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'), $c97f81be67511c58$var$padding(6), $c97f81be67511c58$var$join(''));
const $c97f81be67511c58$export$7d21597c7bc64465 = $c97f81be67511c58$var$chain($c97f81be67511c58$var$radix2(6), $c97f81be67511c58$var$alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'), $c97f81be67511c58$var$padding(6), $c97f81be67511c58$var$join(''));
const $c97f81be67511c58$var$genBase58 = (abc)=>$c97f81be67511c58$var$chain($c97f81be67511c58$var$radix(58), $c97f81be67511c58$var$alphabet(abc), $c97f81be67511c58$var$join(''));
const $c97f81be67511c58$export$61f53211c069eefb = $c97f81be67511c58$var$genBase58('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
const $c97f81be67511c58$export$c6a7baed2941aad2 = $c97f81be67511c58$var$genBase58('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ');
const $c97f81be67511c58$export$cbd4c72942a9201d = $c97f81be67511c58$var$genBase58('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz');
const $c97f81be67511c58$var$XMR_BLOCK_LEN = [
    0,
    2,
    3,
    5,
    6,
    7,
    9,
    10,
    11
];
const $c97f81be67511c58$export$e86cd8e7f8cff4a6 = {
    encode (data) {
        let res = '';
        for(let i = 0; i < data.length; i += 8){
            const block = data.subarray(i, i + 8);
            res += $c97f81be67511c58$export$61f53211c069eefb.encode(block).padStart($c97f81be67511c58$var$XMR_BLOCK_LEN[block.length], '1');
        }
        return res;
    },
    decode (str) {
        let res = [];
        for(let i = 0; i < str.length; i += 11){
            const slice = str.slice(i, i + 11);
            const blockLen = $c97f81be67511c58$var$XMR_BLOCK_LEN.indexOf(slice.length);
            const block = $c97f81be67511c58$export$61f53211c069eefb.decode(slice);
            for(let j = 0; j < block.length - blockLen; j++){
                if (block[j] !== 0) throw new Error('base58xmr: wrong padding');
            }
            res = res.concat(Array.from(block.slice(block.length - blockLen)));
        }
        return Uint8Array.from(res);
    }
};
const $c97f81be67511c58$export$fff625c574161df6 = (sha256)=>$c97f81be67511c58$var$chain($c97f81be67511c58$var$checksum(4, (data)=>sha256(sha256(data))), $c97f81be67511c58$export$61f53211c069eefb);
const $c97f81be67511c58$var$BECH_ALPHABET = $c97f81be67511c58$var$chain($c97f81be67511c58$var$alphabet('qpzry9x8gf2tvdw0s3jn54khce6mua7l'), $c97f81be67511c58$var$join(''));
const $c97f81be67511c58$var$POLYMOD_GENERATORS = [
    0x3b6a57b2,
    0x26508e6d,
    0x1ea119fa,
    0x3d4233dd,
    0x2a1462b3
];
function $c97f81be67511c58$var$bech32Polymod(pre) {
    const b = pre >> 25;
    let chk = (pre & 0x1ffffff) << 5;
    for(let i = 0; i < $c97f81be67511c58$var$POLYMOD_GENERATORS.length; i++)if ((b >> i & 1) === 1) chk ^= $c97f81be67511c58$var$POLYMOD_GENERATORS[i];
    return chk;
}
function $c97f81be67511c58$var$bechChecksum(prefix, words, encodingConst = 1) {
    const len = prefix.length;
    let chk = 1;
    for(let i = 0; i < len; i++){
        const c = prefix.charCodeAt(i);
        if (c < 33 || c > 126) throw new Error(`Invalid prefix (${prefix})`);
        chk = $c97f81be67511c58$var$bech32Polymod(chk) ^ c >> 5;
    }
    chk = $c97f81be67511c58$var$bech32Polymod(chk);
    for(let i = 0; i < len; i++)chk = $c97f81be67511c58$var$bech32Polymod(chk) ^ prefix.charCodeAt(i) & 0x1f;
    for (let v of words)chk = $c97f81be67511c58$var$bech32Polymod(chk) ^ v;
    for(let i = 0; i < 6; i++)chk = $c97f81be67511c58$var$bech32Polymod(chk);
    chk ^= encodingConst;
    return $c97f81be67511c58$var$BECH_ALPHABET.encode($c97f81be67511c58$var$convertRadix2([
        chk % 2 ** 30
    ], 30, 5, false));
}
function $c97f81be67511c58$var$genBech32(encoding) {
    const ENCODING_CONST = encoding === 'bech32' ? 1 : 0x2bc830a3;
    const _words = $c97f81be67511c58$var$radix2(5);
    const fromWords = _words.decode;
    const toWords = _words.encode;
    const fromWordsUnsafe = $c97f81be67511c58$var$unsafeWrapper(fromWords);
    function encode(prefix, words, limit = 90) {
        if (typeof prefix !== 'string') throw new Error(`bech32.encode prefix should be string, not ${typeof prefix}`);
        if (!Array.isArray(words) || words.length && typeof words[0] !== 'number') throw new Error(`bech32.encode words should be array of numbers, not ${typeof words}`);
        const actualLength = prefix.length + 7 + words.length;
        if (limit !== false && actualLength > limit) throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
        prefix = prefix.toLowerCase();
        return `${prefix}1${$c97f81be67511c58$var$BECH_ALPHABET.encode(words)}${$c97f81be67511c58$var$bechChecksum(prefix, words, ENCODING_CONST)}`;
    }
    function decode(str, limit = 90) {
        if (typeof str !== 'string') throw new Error(`bech32.decode input should be string, not ${typeof str}`);
        if (str.length < 8 || limit !== false && str.length > limit) throw new TypeError(`Wrong string length: ${str.length} (${str}). Expected (8..${limit})`);
        const lowered = str.toLowerCase();
        if (str !== lowered && str !== str.toUpperCase()) throw new Error(`String must be lowercase or uppercase`);
        str = lowered;
        const sepIndex = str.lastIndexOf('1');
        if (sepIndex === 0 || sepIndex === -1) throw new Error(`Letter "1" must be present between prefix and data only`);
        const prefix = str.slice(0, sepIndex);
        const _words = str.slice(sepIndex + 1);
        if (_words.length < 6) throw new Error('Data must be at least 6 characters long');
        const words = $c97f81be67511c58$var$BECH_ALPHABET.decode(_words).slice(0, -6);
        const sum = $c97f81be67511c58$var$bechChecksum(prefix, words, ENCODING_CONST);
        if (!_words.endsWith(sum)) throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
        return {
            prefix: prefix,
            words: words
        };
    }
    const decodeUnsafe = $c97f81be67511c58$var$unsafeWrapper(decode);
    function decodeToBytes(str) {
        const { prefix: prefix, words: words } = decode(str, false);
        return {
            prefix: prefix,
            words: words,
            bytes: fromWords(words)
        };
    }
    return {
        encode: encode,
        decode: decode,
        decodeToBytes: decodeToBytes,
        decodeUnsafe: decodeUnsafe,
        fromWords: fromWords,
        fromWordsUnsafe: fromWordsUnsafe,
        toWords: toWords
    };
}
const $c97f81be67511c58$export$27c42482533637da = $c97f81be67511c58$var$genBech32('bech32');
const $c97f81be67511c58$export$4963f7e473ccf819 = $c97f81be67511c58$var$genBech32('bech32m');
const $c97f81be67511c58$export$74329b762b589566 = {
    encode: (data)=>new TextDecoder().decode(data),
    decode: (str)=>new TextEncoder().encode(str)
};
const $c97f81be67511c58$export$834dfc94dde4b3d8 = $c97f81be67511c58$var$chain($c97f81be67511c58$var$radix2(4), $c97f81be67511c58$var$alphabet('0123456789abcdef'), $c97f81be67511c58$var$join(''), $c97f81be67511c58$var$normalize((s)=>{
    if (typeof s !== 'string' || s.length % 2) throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
    return s.toLowerCase();
}));
const $c97f81be67511c58$var$CODERS = {
    utf8: $c97f81be67511c58$export$74329b762b589566,
    hex: $c97f81be67511c58$export$834dfc94dde4b3d8,
    base16: $c97f81be67511c58$export$586f61c71cb02fe4,
    base32: $c97f81be67511c58$export$4a4d5965e2738b2a,
    base64: $c97f81be67511c58$export$b3b2de96497acc47,
    base64url: $c97f81be67511c58$export$7d21597c7bc64465,
    base58: $c97f81be67511c58$export$61f53211c069eefb,
    base58xmr: $c97f81be67511c58$export$e86cd8e7f8cff4a6
};
const $c97f81be67511c58$var$coderTypeError = `Invalid encoding type. Available types: ${Object.keys($c97f81be67511c58$var$CODERS).join(', ')}`;
const $c97f81be67511c58$export$7c746b75f47c9c7d = (type, bytes)=>{
    if (typeof type !== 'string' || !$c97f81be67511c58$var$CODERS.hasOwnProperty(type)) throw new TypeError($c97f81be67511c58$var$coderTypeError);
    if (!(bytes instanceof Uint8Array)) throw new TypeError('bytesToString() expects Uint8Array');
    return $c97f81be67511c58$var$CODERS[type].encode(bytes);
};
const $c97f81be67511c58$export$42d51816ce590c93 = $c97f81be67511c58$export$7c746b75f47c9c7d;
const $c97f81be67511c58$export$c8dd6bc66a63753c = (type, str)=>{
    if (!$c97f81be67511c58$var$CODERS.hasOwnProperty(type)) throw new TypeError($c97f81be67511c58$var$coderTypeError);
    if (typeof str !== 'string') throw new TypeError('stringToBytes() expects string');
    return $c97f81be67511c58$var$CODERS[type].decode(str);
};
const $c97f81be67511c58$export$b3317979f9250576 = $c97f81be67511c58$export$c8dd6bc66a63753c;



var $35851bee8b39b678$exports = {};
"use strict";
Object.defineProperty($35851bee8b39b678$exports, "__esModule", {
    value: true
});
$35851bee8b39b678$exports.wordlist = void 0;
$35851bee8b39b678$exports.wordlist = `abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split('\n');


var $86292e7ca3e7510b$exports = {};
"use strict";
Object.defineProperty($86292e7ca3e7510b$exports, "__esModule", {
    value: true
});
$86292e7ca3e7510b$exports.mnemonicToSeedSync = $86292e7ca3e7510b$exports.mnemonicToSeed = $86292e7ca3e7510b$exports.validateMnemonic = $86292e7ca3e7510b$exports.entropyToMnemonic = $86292e7ca3e7510b$exports.mnemonicToEntropy = $86292e7ca3e7510b$exports.generateMnemonic = void 0;

var $433d96f217f9e5ef$exports = {};
"use strict";
Object.defineProperty($433d96f217f9e5ef$exports, "__esModule", {
    value: true
});
$433d96f217f9e5ef$exports.pbkdf2Async = $433d96f217f9e5ef$exports.pbkdf2 = void 0;

var $d73a2cf144050a45$exports = {};
"use strict";
Object.defineProperty($d73a2cf144050a45$exports, "__esModule", {
    value: true
});
$d73a2cf144050a45$exports.hmac = void 0;


// HMAC (RFC 2104)
class $d73a2cf144050a45$var$HMAC extends $a4a7a2e03d59da9d$exports.Hash {
    constructor(hash, _key){
        super();
        this.finished = false;
        this.destroyed = false;
        $b17cd3543bb4c9a3$exports.default.hash(hash);
        const key = (0, $a4a7a2e03d59da9d$exports.toBytes)(_key);
        this.iHash = hash.create();
        if (typeof this.iHash.update !== 'function') throw new TypeError('Expected instance of class which extends utils.Hash');
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        // blockLen can be bigger than outputLen
        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36;
        this.iHash.update(pad);
        // By doing update (processing of first block) of outer hash here we can re-use it between multiple calls via clone
        this.oHash = hash.create();
        // Undo internal XOR && apply outer XOR
        for(let i = 0; i < pad.length; i++)pad[i] ^= 106;
        this.oHash.update(pad);
        pad.fill(0);
    }
    update(buf) {
        $b17cd3543bb4c9a3$exports.default.exists(this);
        this.iHash.update(buf);
        return this;
    }
    digestInto(out) {
        $b17cd3543bb4c9a3$exports.default.exists(this);
        $b17cd3543bb4c9a3$exports.default.bytes(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
    }
    digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
    }
    _cloneInto(to) {
        // Create new instance without calling constructor since key already in state and we don't know it.
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash: oHash, iHash: iHash, finished: finished, destroyed: destroyed, blockLen: blockLen, outputLen: outputLen } = this;
        to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
    }
    destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
    }
}
/**
 * HMAC: RFC2104 message authentication code.
 * @param hash - function that would be used e.g. sha256
 * @param key - message key
 * @param message - message data
 */ const $d73a2cf144050a45$var$hmac = (hash, key, message)=>new $d73a2cf144050a45$var$HMAC(hash, key).update(message).digest();
$d73a2cf144050a45$exports.hmac = $d73a2cf144050a45$var$hmac;
$d73a2cf144050a45$exports.hmac.create = (hash, key)=>new $d73a2cf144050a45$var$HMAC(hash, key);



// Common prologue and epilogue for sync/async functions
function $433d96f217f9e5ef$var$pbkdf2Init(hash, _password, _salt, _opts) {
    $b17cd3543bb4c9a3$exports.default.hash(hash);
    const opts = (0, $a4a7a2e03d59da9d$exports.checkOpts)({
        dkLen: 32,
        asyncTick: 10
    }, _opts);
    const { c: c, dkLen: dkLen, asyncTick: asyncTick } = opts;
    $b17cd3543bb4c9a3$exports.default.number(c);
    $b17cd3543bb4c9a3$exports.default.number(dkLen);
    $b17cd3543bb4c9a3$exports.default.number(asyncTick);
    if (c < 1) throw new Error('PBKDF2: iterations (c) should be >= 1');
    const password = (0, $a4a7a2e03d59da9d$exports.toBytes)(_password);
    const salt = (0, $a4a7a2e03d59da9d$exports.toBytes)(_salt);
    // DK = PBKDF2(PRF, Password, Salt, c, dkLen);
    const DK = new Uint8Array(dkLen);
    // U1 = PRF(Password, Salt + INT_32_BE(i))
    const PRF = $d73a2cf144050a45$exports.hmac.create(hash, password);
    const PRFSalt = PRF._cloneInto().update(salt);
    return {
        c: c,
        dkLen: dkLen,
        asyncTick: asyncTick,
        DK: DK,
        PRF: PRF,
        PRFSalt: PRFSalt
    };
}
function $433d96f217f9e5ef$var$pbkdf2Output(PRF, PRFSalt, DK, prfW, u) {
    PRF.destroy();
    PRFSalt.destroy();
    if (prfW) prfW.destroy();
    u.fill(0);
    return DK;
}
/**
 * PBKDF2-HMAC: RFC 2898 key derivation function
 * @param hash - hash function that would be used e.g. sha256
 * @param password - password from which a derived key is generated
 * @param salt - cryptographic salt
 * @param opts - {c, dkLen} where c is work factor and dkLen is output message size
 */ function $433d96f217f9e5ef$var$pbkdf2(hash, password, salt, opts) {
    const { c: c, dkLen: dkLen, DK: DK, PRF: PRF, PRFSalt: PRFSalt } = $433d96f217f9e5ef$var$pbkdf2Init(hash, password, salt, opts);
    let prfW; // Working copy
    const arr = new Uint8Array(4);
    const view = (0, $a4a7a2e03d59da9d$exports.createView)(arr);
    const u = new Uint8Array(PRF.outputLen);
    // DK = T1 + T2 + ⋯ + Tdklen/hlen
    for(let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen){
        // Ti = F(Password, Salt, c, i)
        const Ti = DK.subarray(pos, pos + PRF.outputLen);
        view.setInt32(0, ti, false);
        // F(Password, Salt, c, i) = U1 ^ U2 ^ ⋯ ^ Uc
        // U1 = PRF(Password, Salt + INT_32_BE(i))
        (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
        Ti.set(u.subarray(0, Ti.length));
        for(let ui = 1; ui < c; ui++){
            // Uc = PRF(Password, Uc−1)
            PRF._cloneInto(prfW).update(u).digestInto(u);
            for(let i = 0; i < Ti.length; i++)Ti[i] ^= u[i];
        }
    }
    return $433d96f217f9e5ef$var$pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
}
$433d96f217f9e5ef$exports.pbkdf2 = $433d96f217f9e5ef$var$pbkdf2;
async function $433d96f217f9e5ef$var$pbkdf2Async(hash, password, salt, opts) {
    const { c: c, dkLen: dkLen, asyncTick: asyncTick, DK: DK, PRF: PRF, PRFSalt: PRFSalt } = $433d96f217f9e5ef$var$pbkdf2Init(hash, password, salt, opts);
    let prfW; // Working copy
    const arr = new Uint8Array(4);
    const view = (0, $a4a7a2e03d59da9d$exports.createView)(arr);
    const u = new Uint8Array(PRF.outputLen);
    // DK = T1 + T2 + ⋯ + Tdklen/hlen
    for(let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen){
        // Ti = F(Password, Salt, c, i)
        const Ti = DK.subarray(pos, pos + PRF.outputLen);
        view.setInt32(0, ti, false);
        // F(Password, Salt, c, i) = U1 ^ U2 ^ ⋯ ^ Uc
        // U1 = PRF(Password, Salt + INT_32_BE(i))
        (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
        Ti.set(u.subarray(0, Ti.length));
        await (0, $a4a7a2e03d59da9d$exports.asyncLoop)(c - 1, asyncTick, (i)=>{
            // Uc = PRF(Password, Uc−1)
            PRF._cloneInto(prfW).update(u).digestInto(u);
            for(let i = 0; i < Ti.length; i++)Ti[i] ^= u[i];
        });
    }
    return $433d96f217f9e5ef$var$pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
}
$433d96f217f9e5ef$exports.pbkdf2Async = $433d96f217f9e5ef$var$pbkdf2Async;



var $029f7730c42bc787$exports = {};
"use strict";
Object.defineProperty($029f7730c42bc787$exports, "__esModule", {
    value: true
});
$029f7730c42bc787$exports.sha384 = $029f7730c42bc787$exports.sha512_256 = $029f7730c42bc787$exports.sha512_224 = $029f7730c42bc787$exports.sha512 = $029f7730c42bc787$exports.SHA512 = void 0;

var $4d3ad067a0fb42e7$exports = {};
"use strict";
Object.defineProperty($4d3ad067a0fb42e7$exports, "__esModule", {
    value: true
});
$4d3ad067a0fb42e7$exports.add = $4d3ad067a0fb42e7$exports.toBig = $4d3ad067a0fb42e7$exports.split = $4d3ad067a0fb42e7$exports.fromBig = void 0;
const $4d3ad067a0fb42e7$var$U32_MASK64 = BigInt(2 ** 32 - 1);
const $4d3ad067a0fb42e7$var$_32n = BigInt(32);
// We are not using BigUint64Array, because they are extremely slow as per 2022
function $4d3ad067a0fb42e7$var$fromBig(n, le = false) {
    if (le) return {
        h: Number(n & $4d3ad067a0fb42e7$var$U32_MASK64),
        l: Number(n >> $4d3ad067a0fb42e7$var$_32n & $4d3ad067a0fb42e7$var$U32_MASK64)
    };
    return {
        h: Number(n >> $4d3ad067a0fb42e7$var$_32n & $4d3ad067a0fb42e7$var$U32_MASK64) | 0,
        l: Number(n & $4d3ad067a0fb42e7$var$U32_MASK64) | 0
    };
}
$4d3ad067a0fb42e7$exports.fromBig = $4d3ad067a0fb42e7$var$fromBig;
function $4d3ad067a0fb42e7$var$split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for(let i = 0; i < lst.length; i++){
        const { h: h, l: l } = $4d3ad067a0fb42e7$var$fromBig(lst[i], le);
        [Ah[i], Al[i]] = [
            h,
            l
        ];
    }
    return [
        Ah,
        Al
    ];
}
$4d3ad067a0fb42e7$exports.split = $4d3ad067a0fb42e7$var$split;
const $4d3ad067a0fb42e7$var$toBig = (h, l)=>BigInt(h >>> 0) << $4d3ad067a0fb42e7$var$_32n | BigInt(l >>> 0);
$4d3ad067a0fb42e7$exports.toBig = $4d3ad067a0fb42e7$var$toBig;
// for Shift in [0, 32)
const $4d3ad067a0fb42e7$var$shrSH = (h, l, s)=>h >>> s;
const $4d3ad067a0fb42e7$var$shrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in [1, 32)
const $4d3ad067a0fb42e7$var$rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
const $4d3ad067a0fb42e7$var$rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const $4d3ad067a0fb42e7$var$rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
const $4d3ad067a0fb42e7$var$rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
// Right rotate for shift===32 (just swaps l&h)
const $4d3ad067a0fb42e7$var$rotr32H = (h, l)=>l;
const $4d3ad067a0fb42e7$var$rotr32L = (h, l)=>h;
// Left rotate for Shift in [1, 32)
const $4d3ad067a0fb42e7$var$rotlSH = (h, l, s)=>h << s | l >>> 32 - s;
const $4d3ad067a0fb42e7$var$rotlSL = (h, l, s)=>l << s | h >>> 32 - s;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const $4d3ad067a0fb42e7$var$rotlBH = (h, l, s)=>l << s - 32 | h >>> 64 - s;
const $4d3ad067a0fb42e7$var$rotlBL = (h, l, s)=>h << s - 32 | l >>> 64 - s;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
// Removing "export" has 5% perf penalty -_-
function $4d3ad067a0fb42e7$var$add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
$4d3ad067a0fb42e7$exports.add = $4d3ad067a0fb42e7$var$add;
// Addition with more than 2 elements
const $4d3ad067a0fb42e7$var$add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const $4d3ad067a0fb42e7$var$add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
const $4d3ad067a0fb42e7$var$add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const $4d3ad067a0fb42e7$var$add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
const $4d3ad067a0fb42e7$var$add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const $4d3ad067a0fb42e7$var$add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
// prettier-ignore
const $4d3ad067a0fb42e7$var$u64 = {
    fromBig: $4d3ad067a0fb42e7$var$fromBig,
    split: $4d3ad067a0fb42e7$var$split,
    toBig: $4d3ad067a0fb42e7$exports.toBig,
    shrSH: $4d3ad067a0fb42e7$var$shrSH,
    shrSL: $4d3ad067a0fb42e7$var$shrSL,
    rotrSH: $4d3ad067a0fb42e7$var$rotrSH,
    rotrSL: $4d3ad067a0fb42e7$var$rotrSL,
    rotrBH: $4d3ad067a0fb42e7$var$rotrBH,
    rotrBL: $4d3ad067a0fb42e7$var$rotrBL,
    rotr32H: $4d3ad067a0fb42e7$var$rotr32H,
    rotr32L: $4d3ad067a0fb42e7$var$rotr32L,
    rotlSH: $4d3ad067a0fb42e7$var$rotlSH,
    rotlSL: $4d3ad067a0fb42e7$var$rotlSL,
    rotlBH: $4d3ad067a0fb42e7$var$rotlBH,
    rotlBL: $4d3ad067a0fb42e7$var$rotlBL,
    add: $4d3ad067a0fb42e7$var$add,
    add3L: $4d3ad067a0fb42e7$var$add3L,
    add3H: $4d3ad067a0fb42e7$var$add3H,
    add4L: $4d3ad067a0fb42e7$var$add4L,
    add4H: $4d3ad067a0fb42e7$var$add4H,
    add5H: $4d3ad067a0fb42e7$var$add5H,
    add5L: $4d3ad067a0fb42e7$var$add5L
};
$4d3ad067a0fb42e7$exports.default = $4d3ad067a0fb42e7$var$u64;



// Round contants (first 32 bits of the fractional parts of the cube roots of the first 80 primes 2..409):
// prettier-ignore
const [$029f7730c42bc787$var$SHA512_Kh, $029f7730c42bc787$var$SHA512_Kl] = $4d3ad067a0fb42e7$exports.default.split([
    '0x428a2f98d728ae22',
    '0x7137449123ef65cd',
    '0xb5c0fbcfec4d3b2f',
    '0xe9b5dba58189dbbc',
    '0x3956c25bf348b538',
    '0x59f111f1b605d019',
    '0x923f82a4af194f9b',
    '0xab1c5ed5da6d8118',
    '0xd807aa98a3030242',
    '0x12835b0145706fbe',
    '0x243185be4ee4b28c',
    '0x550c7dc3d5ffb4e2',
    '0x72be5d74f27b896f',
    '0x80deb1fe3b1696b1',
    '0x9bdc06a725c71235',
    '0xc19bf174cf692694',
    '0xe49b69c19ef14ad2',
    '0xefbe4786384f25e3',
    '0x0fc19dc68b8cd5b5',
    '0x240ca1cc77ac9c65',
    '0x2de92c6f592b0275',
    '0x4a7484aa6ea6e483',
    '0x5cb0a9dcbd41fbd4',
    '0x76f988da831153b5',
    '0x983e5152ee66dfab',
    '0xa831c66d2db43210',
    '0xb00327c898fb213f',
    '0xbf597fc7beef0ee4',
    '0xc6e00bf33da88fc2',
    '0xd5a79147930aa725',
    '0x06ca6351e003826f',
    '0x142929670a0e6e70',
    '0x27b70a8546d22ffc',
    '0x2e1b21385c26c926',
    '0x4d2c6dfc5ac42aed',
    '0x53380d139d95b3df',
    '0x650a73548baf63de',
    '0x766a0abb3c77b2a8',
    '0x81c2c92e47edaee6',
    '0x92722c851482353b',
    '0xa2bfe8a14cf10364',
    '0xa81a664bbc423001',
    '0xc24b8b70d0f89791',
    '0xc76c51a30654be30',
    '0xd192e819d6ef5218',
    '0xd69906245565a910',
    '0xf40e35855771202a',
    '0x106aa07032bbd1b8',
    '0x19a4c116b8d2d0c8',
    '0x1e376c085141ab53',
    '0x2748774cdf8eeb99',
    '0x34b0bcb5e19b48a8',
    '0x391c0cb3c5c95a63',
    '0x4ed8aa4ae3418acb',
    '0x5b9cca4f7763e373',
    '0x682e6ff3d6b2b8a3',
    '0x748f82ee5defb2fc',
    '0x78a5636f43172f60',
    '0x84c87814a1f0ab72',
    '0x8cc702081a6439ec',
    '0x90befffa23631e28',
    '0xa4506cebde82bde9',
    '0xbef9a3f7b2c67915',
    '0xc67178f2e372532b',
    '0xca273eceea26619c',
    '0xd186b8c721c0c207',
    '0xeada7dd6cde0eb1e',
    '0xf57d4f7fee6ed178',
    '0x06f067aa72176fba',
    '0x0a637dc5a2c898a6',
    '0x113f9804bef90dae',
    '0x1b710b35131c471b',
    '0x28db77f523047d84',
    '0x32caab7b40c72493',
    '0x3c9ebe0a15c9bebc',
    '0x431d67c49c100d4c',
    '0x4cc5d4becb3e42b6',
    '0x597f299cfc657e2a',
    '0x5fcb6fab3ad6faec',
    '0x6c44198c4a475817'
].map((n)=>BigInt(n)));
// Temporary buffer, not used to store anything between runs
const $029f7730c42bc787$var$SHA512_W_H = new Uint32Array(80);
const $029f7730c42bc787$var$SHA512_W_L = new Uint32Array(80);
class $029f7730c42bc787$var$SHA512 extends $70a3a5f666667cd5$exports.SHA2 {
    constructor(){
        super(128, 64, 16, false);
        // We cannot use array here since array allows indexing by variable which means optimizer/compiler cannot use registers.
        // Also looks cleaner and easier to verify with spec.
        // Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 1779033703;
        this.Al = -205731576;
        this.Bh = -1150833019;
        this.Bl = -2067093701;
        this.Ch = 1013904242;
        this.Cl = -23791573;
        this.Dh = -1521486534;
        this.Dl = 1595750129;
        this.Eh = 1359893119;
        this.El = -1377402159;
        this.Fh = -1694144372;
        this.Fl = 725511199;
        this.Gh = 528734635;
        this.Gl = -79577749;
        this.Hh = 1541459225;
        this.Hl = 327033209;
    }
    // prettier-ignore
    get() {
        const { Ah: Ah, Al: Al, Bh: Bh, Bl: Bl, Ch: Ch, Cl: Cl, Dh: Dh, Dl: Dl, Eh: Eh, El: El, Fh: Fh, Fl: Fl, Gh: Gh, Gl: Gl, Hh: Hh, Hl: Hl } = this;
        return [
            Ah,
            Al,
            Bh,
            Bl,
            Ch,
            Cl,
            Dh,
            Dl,
            Eh,
            El,
            Fh,
            Fl,
            Gh,
            Gl,
            Hh,
            Hl
        ];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
        this.Ah = Ah | 0;
        this.Al = Al | 0;
        this.Bh = Bh | 0;
        this.Bl = Bl | 0;
        this.Ch = Ch | 0;
        this.Cl = Cl | 0;
        this.Dh = Dh | 0;
        this.Dl = Dl | 0;
        this.Eh = Eh | 0;
        this.El = El | 0;
        this.Fh = Fh | 0;
        this.Fl = Fl | 0;
        this.Gh = Gh | 0;
        this.Gl = Gl | 0;
        this.Hh = Hh | 0;
        this.Hl = Hl | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 64 words w[16..79] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4){
            $029f7730c42bc787$var$SHA512_W_H[i] = view.getUint32(offset);
            $029f7730c42bc787$var$SHA512_W_L[i] = view.getUint32(offset += 4);
        }
        for(let i = 16; i < 80; i++){
            // s0 := (w[i-15] rightrotate 1) xor (w[i-15] rightrotate 8) xor (w[i-15] rightshift 7)
            const W15h = $029f7730c42bc787$var$SHA512_W_H[i - 15] | 0;
            const W15l = $029f7730c42bc787$var$SHA512_W_L[i - 15] | 0;
            const s0h = $4d3ad067a0fb42e7$exports.default.rotrSH(W15h, W15l, 1) ^ $4d3ad067a0fb42e7$exports.default.rotrSH(W15h, W15l, 8) ^ $4d3ad067a0fb42e7$exports.default.shrSH(W15h, W15l, 7);
            const s0l = $4d3ad067a0fb42e7$exports.default.rotrSL(W15h, W15l, 1) ^ $4d3ad067a0fb42e7$exports.default.rotrSL(W15h, W15l, 8) ^ $4d3ad067a0fb42e7$exports.default.shrSL(W15h, W15l, 7);
            // s1 := (w[i-2] rightrotate 19) xor (w[i-2] rightrotate 61) xor (w[i-2] rightshift 6)
            const W2h = $029f7730c42bc787$var$SHA512_W_H[i - 2] | 0;
            const W2l = $029f7730c42bc787$var$SHA512_W_L[i - 2] | 0;
            const s1h = $4d3ad067a0fb42e7$exports.default.rotrSH(W2h, W2l, 19) ^ $4d3ad067a0fb42e7$exports.default.rotrBH(W2h, W2l, 61) ^ $4d3ad067a0fb42e7$exports.default.shrSH(W2h, W2l, 6);
            const s1l = $4d3ad067a0fb42e7$exports.default.rotrSL(W2h, W2l, 19) ^ $4d3ad067a0fb42e7$exports.default.rotrBL(W2h, W2l, 61) ^ $4d3ad067a0fb42e7$exports.default.shrSL(W2h, W2l, 6);
            // SHA256_W[i] = s0 + s1 + SHA256_W[i - 7] + SHA256_W[i - 16];
            const SUMl = $4d3ad067a0fb42e7$exports.default.add4L(s0l, s1l, $029f7730c42bc787$var$SHA512_W_L[i - 7], $029f7730c42bc787$var$SHA512_W_L[i - 16]);
            const SUMh = $4d3ad067a0fb42e7$exports.default.add4H(SUMl, s0h, s1h, $029f7730c42bc787$var$SHA512_W_H[i - 7], $029f7730c42bc787$var$SHA512_W_H[i - 16]);
            $029f7730c42bc787$var$SHA512_W_H[i] = SUMh | 0;
            $029f7730c42bc787$var$SHA512_W_L[i] = SUMl | 0;
        }
        let { Ah: Ah, Al: Al, Bh: Bh, Bl: Bl, Ch: Ch, Cl: Cl, Dh: Dh, Dl: Dl, Eh: Eh, El: El, Fh: Fh, Fl: Fl, Gh: Gh, Gl: Gl, Hh: Hh, Hl: Hl } = this;
        // Compression function main loop, 80 rounds
        for(let i = 0; i < 80; i++){
            // S1 := (e rightrotate 14) xor (e rightrotate 18) xor (e rightrotate 41)
            const sigma1h = $4d3ad067a0fb42e7$exports.default.rotrSH(Eh, El, 14) ^ $4d3ad067a0fb42e7$exports.default.rotrSH(Eh, El, 18) ^ $4d3ad067a0fb42e7$exports.default.rotrBH(Eh, El, 41);
            const sigma1l = $4d3ad067a0fb42e7$exports.default.rotrSL(Eh, El, 14) ^ $4d3ad067a0fb42e7$exports.default.rotrSL(Eh, El, 18) ^ $4d3ad067a0fb42e7$exports.default.rotrBL(Eh, El, 41);
            //const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const CHIh = Eh & Fh ^ ~Eh & Gh;
            const CHIl = El & Fl ^ ~El & Gl;
            // T1 = H + sigma1 + Chi(E, F, G) + SHA512_K[i] + SHA512_W[i]
            // prettier-ignore
            const T1ll = $4d3ad067a0fb42e7$exports.default.add5L(Hl, sigma1l, CHIl, $029f7730c42bc787$var$SHA512_Kl[i], $029f7730c42bc787$var$SHA512_W_L[i]);
            const T1h = $4d3ad067a0fb42e7$exports.default.add5H(T1ll, Hh, sigma1h, CHIh, $029f7730c42bc787$var$SHA512_Kh[i], $029f7730c42bc787$var$SHA512_W_H[i]);
            const T1l = T1ll | 0;
            // S0 := (a rightrotate 28) xor (a rightrotate 34) xor (a rightrotate 39)
            const sigma0h = $4d3ad067a0fb42e7$exports.default.rotrSH(Ah, Al, 28) ^ $4d3ad067a0fb42e7$exports.default.rotrBH(Ah, Al, 34) ^ $4d3ad067a0fb42e7$exports.default.rotrBH(Ah, Al, 39);
            const sigma0l = $4d3ad067a0fb42e7$exports.default.rotrSL(Ah, Al, 28) ^ $4d3ad067a0fb42e7$exports.default.rotrBL(Ah, Al, 34) ^ $4d3ad067a0fb42e7$exports.default.rotrBL(Ah, Al, 39);
            const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
            const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
            Hh = Gh | 0;
            Hl = Gl | 0;
            Gh = Fh | 0;
            Gl = Fl | 0;
            Fh = Eh | 0;
            Fl = El | 0;
            ({ h: Eh, l: El } = $4d3ad067a0fb42e7$exports.default.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
            Dh = Ch | 0;
            Dl = Cl | 0;
            Ch = Bh | 0;
            Cl = Bl | 0;
            Bh = Ah | 0;
            Bl = Al | 0;
            const All = $4d3ad067a0fb42e7$exports.default.add3L(T1l, sigma0l, MAJl);
            Ah = $4d3ad067a0fb42e7$exports.default.add3H(All, T1h, sigma0h, MAJh);
            Al = All | 0;
        }
        // Add the compressed chunk to the current hash value
        ({ h: Ah, l: Al } = $4d3ad067a0fb42e7$exports.default.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
        ({ h: Bh, l: Bl } = $4d3ad067a0fb42e7$exports.default.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
        ({ h: Ch, l: Cl } = $4d3ad067a0fb42e7$exports.default.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
        ({ h: Dh, l: Dl } = $4d3ad067a0fb42e7$exports.default.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
        ({ h: Eh, l: El } = $4d3ad067a0fb42e7$exports.default.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
        ({ h: Fh, l: Fl } = $4d3ad067a0fb42e7$exports.default.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
        ({ h: Gh, l: Gl } = $4d3ad067a0fb42e7$exports.default.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
        ({ h: Hh, l: Hl } = $4d3ad067a0fb42e7$exports.default.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
        this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
        $029f7730c42bc787$var$SHA512_W_H.fill(0);
        $029f7730c42bc787$var$SHA512_W_L.fill(0);
    }
    destroy() {
        this.buffer.fill(0);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
}
$029f7730c42bc787$exports.SHA512 = $029f7730c42bc787$var$SHA512;
class $029f7730c42bc787$var$SHA512_224 extends $029f7730c42bc787$var$SHA512 {
    constructor(){
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = -1942145080;
        this.Al = 424955298;
        this.Bh = 1944164710;
        this.Bl = -1982016298;
        this.Ch = 502970286;
        this.Cl = 855612546;
        this.Dh = 1738396948;
        this.Dl = 1479516111;
        this.Eh = 258812777;
        this.El = 2077511080;
        this.Fh = 2011393907;
        this.Fl = 79989058;
        this.Gh = 1067287976;
        this.Gl = 1780299464;
        this.Hh = 286451373;
        this.Hl = -1848208735;
        this.outputLen = 28;
    }
}
class $029f7730c42bc787$var$SHA512_256 extends $029f7730c42bc787$var$SHA512 {
    constructor(){
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 573645204;
        this.Al = -64227540;
        this.Bh = -1621794909;
        this.Bl = -934517566;
        this.Ch = 596883563;
        this.Cl = 1867755857;
        this.Dh = -1774684391;
        this.Dl = 1497426621;
        this.Eh = -1775747358;
        this.El = -1467023389;
        this.Fh = -1101128155;
        this.Fl = 1401305490;
        this.Gh = 721525244;
        this.Gl = 746961066;
        this.Hh = 246885852;
        this.Hl = -2117784414;
        this.outputLen = 32;
    }
}
class $029f7730c42bc787$var$SHA384 extends $029f7730c42bc787$var$SHA512 {
    constructor(){
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = -876896931;
        this.Al = -1056596264;
        this.Bh = 1654270250;
        this.Bl = 914150663;
        this.Ch = -1856437926;
        this.Cl = 812702999;
        this.Dh = 355462360;
        this.Dl = -150054599;
        this.Eh = 1731405415;
        this.El = -4191439;
        this.Fh = -1900787065;
        this.Fl = 1750603025;
        this.Gh = -619958771;
        this.Gl = 1694076839;
        this.Hh = 1203062813;
        this.Hl = -1090891868;
        this.outputLen = 48;
    }
}
$029f7730c42bc787$exports.sha512 = (0, $a4a7a2e03d59da9d$exports.wrapConstructor)(()=>new $029f7730c42bc787$var$SHA512());
$029f7730c42bc787$exports.sha512_224 = (0, $a4a7a2e03d59da9d$exports.wrapConstructor)(()=>new $029f7730c42bc787$var$SHA512_224());
$029f7730c42bc787$exports.sha512_256 = (0, $a4a7a2e03d59da9d$exports.wrapConstructor)(()=>new $029f7730c42bc787$var$SHA512_256());
$029f7730c42bc787$exports.sha384 = (0, $a4a7a2e03d59da9d$exports.wrapConstructor)(()=>new $029f7730c42bc787$var$SHA384());




// Japanese wordlist
const $86292e7ca3e7510b$var$isJapanese = (wordlist)=>wordlist[0] === '\u3042\u3044\u3053\u304f\u3057\u3093';
// Normalization replaces equivalent sequences of characters
// so that any two texts that are equivalent will be reduced
// to the same sequence of code points, called the normal form of the original text.
function $86292e7ca3e7510b$var$nfkd(str) {
    if (typeof str !== 'string') throw new TypeError(`Invalid mnemonic type: ${typeof str}`);
    return str.normalize('NFKD');
}
function $86292e7ca3e7510b$var$normalize(str) {
    const norm = $86292e7ca3e7510b$var$nfkd(str);
    const words = norm.split(' ');
    if (![
        12,
        15,
        18,
        21,
        24
    ].includes(words.length)) throw new Error('Invalid mnemonic');
    return {
        nfkd: norm,
        words: words
    };
}
function $86292e7ca3e7510b$var$assertEntropy(entropy) {
    $b17cd3543bb4c9a3$exports.default.bytes(entropy, 16, 20, 24, 28, 32);
}
/**
 * Generate x random words. Uses Cryptographically-Secure Random Number Generator.
 * @param wordlist imported wordlist for specific language
 * @param strength mnemonic strength 128-256 bits
 * @example
 * generateMnemonic(wordlist, 128)
 * // 'legal winner thank year wave sausage worth useful legal winner thank yellow'
 */ function $86292e7ca3e7510b$var$generateMnemonic(wordlist, strength = 128) {
    $b17cd3543bb4c9a3$exports.default.number(strength);
    if (strength % 32 !== 0 || strength > 256) throw new TypeError('Invalid entropy');
    return $86292e7ca3e7510b$var$entropyToMnemonic((0, $a4a7a2e03d59da9d$exports.randomBytes)(strength / 8), wordlist);
}
$86292e7ca3e7510b$exports.generateMnemonic = $86292e7ca3e7510b$var$generateMnemonic;
const $86292e7ca3e7510b$var$calcChecksum = (entropy)=>{
    // Checksum is ent.length/4 bits long
    const bitsLeft = 8 - entropy.length / 4;
    // Zero rightmost "bitsLeft" bits in byte
    // For example: bitsLeft=4 val=10111101 -> 10110000
    return new Uint8Array([
        (0, $b5280835b16caf32$exports.sha256)(entropy)[0] >> bitsLeft << bitsLeft
    ]);
};
function $86292e7ca3e7510b$var$getCoder(wordlist) {
    if (!Array.isArray(wordlist) || wordlist.length !== 2048 || typeof wordlist[0] !== 'string') throw new Error('Worlist: expected array of 2048 strings');
    wordlist.forEach((i)=>{
        if (typeof i !== 'string') throw new Error(`Wordlist: non-string element: ${i}`);
    });
    return $c97f81be67511c58$export$eab97d15b1788b8d.chain($c97f81be67511c58$export$eab97d15b1788b8d.checksum(1, $86292e7ca3e7510b$var$calcChecksum), $c97f81be67511c58$export$eab97d15b1788b8d.radix2(11, true), $c97f81be67511c58$export$eab97d15b1788b8d.alphabet(wordlist));
}
/**
 * Reversible: Converts mnemonic string to raw entropy in form of byte array.
 * @param mnemonic 12-24 words
 * @param wordlist imported wordlist for specific language
 * @example
 * const mnem = 'legal winner thank year wave sausage worth useful legal winner thank yellow';
 * mnemonicToEntropy(mnem, wordlist)
 * // Produces
 * new Uint8Array([
 *   0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f,
 *   0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f
 * ])
 */ function $86292e7ca3e7510b$var$mnemonicToEntropy(mnemonic, wordlist) {
    const { words: words } = $86292e7ca3e7510b$var$normalize(mnemonic);
    const entropy = $86292e7ca3e7510b$var$getCoder(wordlist).decode(words);
    $86292e7ca3e7510b$var$assertEntropy(entropy);
    return entropy;
}
$86292e7ca3e7510b$exports.mnemonicToEntropy = $86292e7ca3e7510b$var$mnemonicToEntropy;
/**
 * Reversible: Converts raw entropy in form of byte array to mnemonic string.
 * @param entropy byte array
 * @param wordlist imported wordlist for specific language
 * @returns 12-24 words
 * @example
 * const ent = new Uint8Array([
 *   0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f,
 *   0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f
 * ]);
 * entropyToMnemonic(ent, wordlist);
 * // 'legal winner thank year wave sausage worth useful legal winner thank yellow'
 */ function $86292e7ca3e7510b$var$entropyToMnemonic(entropy, wordlist) {
    $86292e7ca3e7510b$var$assertEntropy(entropy);
    const words = $86292e7ca3e7510b$var$getCoder(wordlist).encode(entropy);
    return words.join($86292e7ca3e7510b$var$isJapanese(wordlist) ? '\u3000' : ' ');
}
$86292e7ca3e7510b$exports.entropyToMnemonic = $86292e7ca3e7510b$var$entropyToMnemonic;
/**
 * Validates mnemonic for being 12-24 words contained in `wordlist`.
 */ function $86292e7ca3e7510b$var$validateMnemonic(mnemonic, wordlist) {
    try {
        $86292e7ca3e7510b$var$mnemonicToEntropy(mnemonic, wordlist);
    } catch (e) {
        return false;
    }
    return true;
}
$86292e7ca3e7510b$exports.validateMnemonic = $86292e7ca3e7510b$var$validateMnemonic;
const $86292e7ca3e7510b$var$salt = (passphrase)=>$86292e7ca3e7510b$var$nfkd(`mnemonic${passphrase}`);
/**
 * Irreversible: Uses KDF to derive 64 bytes of key data from mnemonic + optional password.
 * @param mnemonic 12-24 words
 * @param passphrase string that will additionally protect the key
 * @returns 64 bytes of key data
 * @example
 * const mnem = 'legal winner thank year wave sausage worth useful legal winner thank yellow';
 * await mnemonicToSeed(mnem, 'password');
 * // new Uint8Array([...64 bytes])
 */ function $86292e7ca3e7510b$var$mnemonicToSeed(mnemonic, passphrase = '') {
    return (0, $433d96f217f9e5ef$exports.pbkdf2Async)($029f7730c42bc787$exports.sha512, $86292e7ca3e7510b$var$normalize(mnemonic).nfkd, $86292e7ca3e7510b$var$salt(passphrase), {
        c: 2048,
        dkLen: 64
    });
}
$86292e7ca3e7510b$exports.mnemonicToSeed = $86292e7ca3e7510b$var$mnemonicToSeed;
/**
 * Irreversible: Uses KDF to derive 64 bytes of key data from mnemonic + optional password.
 * @param mnemonic 12-24 words
 * @param passphrase string that will additionally protect the key
 * @returns 64 bytes of key data
 * @example
 * const mnem = 'legal winner thank year wave sausage worth useful legal winner thank yellow';
 * mnemonicToSeedSync(mnem, 'password');
 * // new Uint8Array([...64 bytes])
 */ function $86292e7ca3e7510b$var$mnemonicToSeedSync(mnemonic, passphrase = '') {
    return (0, $433d96f217f9e5ef$exports.pbkdf2)($029f7730c42bc787$exports.sha512, $86292e7ca3e7510b$var$normalize(mnemonic).nfkd, $86292e7ca3e7510b$var$salt(passphrase), {
        c: 2048,
        dkLen: 64
    });
}
$86292e7ca3e7510b$exports.mnemonicToSeedSync = $86292e7ca3e7510b$var$mnemonicToSeedSync;



var $5dd0f0fb943c8c74$exports = {};
"use strict";
Object.defineProperty($5dd0f0fb943c8c74$exports, "__esModule", {
    value: true
});
$5dd0f0fb943c8c74$exports.ripemd160 = $5dd0f0fb943c8c74$exports.RIPEMD160 = void 0;


// https://homes.esat.kuleuven.be/~bosselae/ripemd160.html
// https://homes.esat.kuleuven.be/~bosselae/ripemd160/pdf/AB-9601/AB-9601.pdf
const $5dd0f0fb943c8c74$var$Rho = new Uint8Array([
    7,
    4,
    13,
    1,
    10,
    6,
    15,
    3,
    12,
    0,
    9,
    5,
    2,
    14,
    11,
    8
]);
const $5dd0f0fb943c8c74$var$Id = Uint8Array.from({
    length: 16
}, (_, i)=>i);
const $5dd0f0fb943c8c74$var$Pi = $5dd0f0fb943c8c74$var$Id.map((i)=>(9 * i + 5) % 16);
let $5dd0f0fb943c8c74$var$idxL = [
    $5dd0f0fb943c8c74$var$Id
];
let $5dd0f0fb943c8c74$var$idxR = [
    $5dd0f0fb943c8c74$var$Pi
];
for(let i = 0; i < 4; i++)for (let j of [
    $5dd0f0fb943c8c74$var$idxL,
    $5dd0f0fb943c8c74$var$idxR
])j.push(j[i].map((k)=>$5dd0f0fb943c8c74$var$Rho[k]));
const $5dd0f0fb943c8c74$var$shifts = [
    [
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8
    ],
    [
        12,
        13,
        11,
        15,
        6,
        9,
        9,
        7,
        12,
        15,
        11,
        13,
        7,
        8,
        7,
        7
    ],
    [
        13,
        15,
        14,
        11,
        7,
        7,
        6,
        8,
        13,
        14,
        13,
        12,
        5,
        5,
        6,
        9
    ],
    [
        14,
        11,
        12,
        14,
        8,
        6,
        5,
        5,
        15,
        12,
        15,
        14,
        9,
        9,
        8,
        6
    ],
    [
        15,
        12,
        13,
        13,
        9,
        5,
        8,
        6,
        14,
        11,
        12,
        11,
        8,
        6,
        5,
        5
    ]
].map((i)=>new Uint8Array(i));
const $5dd0f0fb943c8c74$var$shiftsL = $5dd0f0fb943c8c74$var$idxL.map((idx, i)=>idx.map((j)=>$5dd0f0fb943c8c74$var$shifts[i][j]));
const $5dd0f0fb943c8c74$var$shiftsR = $5dd0f0fb943c8c74$var$idxR.map((idx, i)=>idx.map((j)=>$5dd0f0fb943c8c74$var$shifts[i][j]));
const $5dd0f0fb943c8c74$var$Kl = new Uint32Array([
    0x00000000,
    0x5a827999,
    0x6ed9eba1,
    0x8f1bbcdc,
    0xa953fd4e
]);
const $5dd0f0fb943c8c74$var$Kr = new Uint32Array([
    0x50a28be6,
    0x5c4dd124,
    0x6d703ef3,
    0x7a6d76e9,
    0x00000000
]);
// The rotate left (circular left shift) operation for uint32
const $5dd0f0fb943c8c74$var$rotl = (word, shift)=>word << shift | word >>> 32 - shift;
// It's called f() in spec.
function $5dd0f0fb943c8c74$var$f(group, x, y, z) {
    if (group === 0) return x ^ y ^ z;
    else if (group === 1) return x & y | ~x & z;
    else if (group === 2) return (x | ~y) ^ z;
    else if (group === 3) return x & z | y & ~z;
    else return x ^ (y | ~z);
}
// Temporary buffer, not used to store anything between runs
const $5dd0f0fb943c8c74$var$BUF = new Uint32Array(16);
class $5dd0f0fb943c8c74$var$RIPEMD160 extends $70a3a5f666667cd5$exports.SHA2 {
    constructor(){
        super(64, 20, 8, true);
        this.h0 = 1732584193;
        this.h1 = -271733879;
        this.h2 = -1732584194;
        this.h3 = 271733878;
        this.h4 = -1009589776;
    }
    get() {
        const { h0: h0, h1: h1, h2: h2, h3: h3, h4: h4 } = this;
        return [
            h0,
            h1,
            h2,
            h3,
            h4
        ];
    }
    set(h0, h1, h2, h3, h4) {
        this.h0 = h0 | 0;
        this.h1 = h1 | 0;
        this.h2 = h2 | 0;
        this.h3 = h3 | 0;
        this.h4 = h4 | 0;
    }
    process(view, offset) {
        for(let i = 0; i < 16; i++, offset += 4)$5dd0f0fb943c8c74$var$BUF[i] = view.getUint32(offset, true);
        // prettier-ignore
        let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
        // Instead of iterating 0 to 80, we split it into 5 groups
        // And use the groups in constants, functions, etc. Much simpler
        for(let group = 0; group < 5; group++){
            const rGroup = 4 - group;
            const hbl = $5dd0f0fb943c8c74$var$Kl[group], hbr = $5dd0f0fb943c8c74$var$Kr[group]; // prettier-ignore
            const rl = $5dd0f0fb943c8c74$var$idxL[group], rr = $5dd0f0fb943c8c74$var$idxR[group]; // prettier-ignore
            const sl = $5dd0f0fb943c8c74$var$shiftsL[group], sr = $5dd0f0fb943c8c74$var$shiftsR[group]; // prettier-ignore
            for(let i = 0; i < 16; i++){
                const tl = $5dd0f0fb943c8c74$var$rotl(al + $5dd0f0fb943c8c74$var$f(group, bl, cl, dl) + $5dd0f0fb943c8c74$var$BUF[rl[i]] + hbl, sl[i]) + el | 0;
                al = el, el = dl, dl = $5dd0f0fb943c8c74$var$rotl(cl, 10) | 0, cl = bl, bl = tl; // prettier-ignore
            }
            // 2 loops are 10% faster
            for(let i = 0; i < 16; i++){
                const tr = $5dd0f0fb943c8c74$var$rotl(ar + $5dd0f0fb943c8c74$var$f(rGroup, br, cr, dr) + $5dd0f0fb943c8c74$var$BUF[rr[i]] + hbr, sr[i]) + er | 0;
                ar = er, er = dr, dr = $5dd0f0fb943c8c74$var$rotl(cr, 10) | 0, cr = br, br = tr; // prettier-ignore
            }
        }
        // Add the compressed chunk to the current hash value
        this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
    }
    roundClean() {
        $5dd0f0fb943c8c74$var$BUF.fill(0);
    }
    destroy() {
        this.destroyed = true;
        this.buffer.fill(0);
        this.set(0, 0, 0, 0, 0);
    }
}
$5dd0f0fb943c8c74$exports.RIPEMD160 = $5dd0f0fb943c8c74$var$RIPEMD160;
/**
 * RIPEMD-160 - a hash function from 1990s.
 * @param message - msg that would be hashed
 */ $5dd0f0fb943c8c74$exports.ripemd160 = (0, $a4a7a2e03d59da9d$exports.wrapConstructor)(()=>new $5dd0f0fb943c8c74$var$RIPEMD160());








$eebec0a1229b249a$export$eab97d15b1788b8d.hmacSha256Sync = (key, ...msgs)=>(0, $d73a2cf144050a45$exports.hmac)((0, $b5280835b16caf32$exports.sha256), key, $eebec0a1229b249a$export$eab97d15b1788b8d.concatBytes(...msgs));
const $12413ea56ac5b886$var$base58check = (0, $c97f81be67511c58$export$fff625c574161df6)((0, $b5280835b16caf32$exports.sha256));
function $12413ea56ac5b886$var$bytesToNumber(bytes) {
    return BigInt(`0x${(0, $a4a7a2e03d59da9d$exports.bytesToHex)(bytes)}`);
}
function $12413ea56ac5b886$var$numberToBytes(num) {
    return (0, $a4a7a2e03d59da9d$exports.hexToBytes)(num.toString(16).padStart(64, '0'));
}
const $12413ea56ac5b886$var$MASTER_SECRET = (0, $a4a7a2e03d59da9d$exports.utf8ToBytes)('Bitcoin seed');
const $12413ea56ac5b886$var$BITCOIN_VERSIONS = {
    private: 0x0488ade4,
    public: 0x0488b21e
};
const $12413ea56ac5b886$export$c16360648dc994f8 = 0x80000000;
const $12413ea56ac5b886$var$hash160 = (data)=>(0, $5dd0f0fb943c8c74$exports.ripemd160)((0, $b5280835b16caf32$exports.sha256)(data));
const $12413ea56ac5b886$var$fromU32 = (data)=>(0, $a4a7a2e03d59da9d$exports.createView)(data).getUint32(0, false);
const $12413ea56ac5b886$var$toU32 = (n)=>{
    if (!Number.isSafeInteger(n) || n < 0 || n > 2 ** 32 - 1) throw new Error(`Invalid number=${n}. Should be from 0 to 2 ** 32 - 1`);
    const buf = new Uint8Array(4);
    (0, $a4a7a2e03d59da9d$exports.createView)(buf).setUint32(0, n, false);
    return buf;
};
class $12413ea56ac5b886$export$bb670963070b393a {
    constructor(opt){
        this.depth = 0;
        this.index = 0;
        this.chainCode = null;
        this.parentFingerprint = 0;
        if (!opt || typeof opt !== 'object') throw new Error('HDKey.constructor must not be called directly');
        this.versions = opt.versions || $12413ea56ac5b886$var$BITCOIN_VERSIONS;
        this.depth = opt.depth || 0;
        this.chainCode = opt.chainCode;
        this.index = opt.index || 0;
        this.parentFingerprint = opt.parentFingerprint || 0;
        if (!this.depth) {
            if (this.parentFingerprint || this.index) throw new Error('HDKey: zero depth with non-zero index/parent fingerprint');
        }
        if (opt.publicKey && opt.privateKey) throw new Error('HDKey: publicKey and privateKey at same time.');
        if (opt.privateKey) {
            if (!$eebec0a1229b249a$export$eab97d15b1788b8d.isValidPrivateKey(opt.privateKey)) throw new Error('Invalid private key');
            this.privKey = typeof opt.privateKey === 'bigint' ? opt.privateKey : $12413ea56ac5b886$var$bytesToNumber(opt.privateKey);
            this.privKeyBytes = $12413ea56ac5b886$var$numberToBytes(this.privKey);
            this.pubKey = $eebec0a1229b249a$export$889def73691f9837(opt.privateKey, true);
        } else if (opt.publicKey) this.pubKey = $eebec0a1229b249a$export$baf26146a414f24a.fromHex(opt.publicKey).toRawBytes(true);
        else throw new Error('HDKey: no public or private key provided');
        this.pubHash = $12413ea56ac5b886$var$hash160(this.pubKey);
    }
    get fingerprint() {
        if (!this.pubHash) throw new Error('No publicKey set!');
        return $12413ea56ac5b886$var$fromU32(this.pubHash);
    }
    get identifier() {
        return this.pubHash;
    }
    get pubKeyHash() {
        return this.pubHash;
    }
    get privateKey() {
        return this.privKeyBytes || null;
    }
    get publicKey() {
        return this.pubKey || null;
    }
    get privateExtendedKey() {
        const priv = this.privateKey;
        if (!priv) throw new Error('No private key');
        return $12413ea56ac5b886$var$base58check.encode(this.serialize(this.versions.private, (0, $a4a7a2e03d59da9d$exports.concatBytes)(new Uint8Array([
            0
        ]), priv)));
    }
    get publicExtendedKey() {
        if (!this.pubKey) throw new Error('No public key');
        return $12413ea56ac5b886$var$base58check.encode(this.serialize(this.versions.public, this.pubKey));
    }
    static fromMasterSeed(seed, versions = $12413ea56ac5b886$var$BITCOIN_VERSIONS) {
        (0, $b17cd3543bb4c9a3$exports.bytes)(seed);
        if (8 * seed.length < 128 || 8 * seed.length > 512) throw new Error(`HDKey: wrong seed length=${seed.length}. Should be between 128 and 512 bits; 256 bits is advised)`);
        const I = (0, $d73a2cf144050a45$exports.hmac)((0, $029f7730c42bc787$exports.sha512), $12413ea56ac5b886$var$MASTER_SECRET, seed);
        return new $12413ea56ac5b886$export$bb670963070b393a({
            versions: versions,
            chainCode: I.slice(32),
            privateKey: I.slice(0, 32)
        });
    }
    static fromExtendedKey(base58key, versions = $12413ea56ac5b886$var$BITCOIN_VERSIONS) {
        const keyBuffer = $12413ea56ac5b886$var$base58check.decode(base58key);
        const keyView = (0, $a4a7a2e03d59da9d$exports.createView)(keyBuffer);
        const version = keyView.getUint32(0, false);
        const opt = {
            versions: versions,
            depth: keyBuffer[4],
            parentFingerprint: keyView.getUint32(5, false),
            index: keyView.getUint32(9, false),
            chainCode: keyBuffer.slice(13, 45)
        };
        const key = keyBuffer.slice(45);
        const isPriv = key[0] === 0;
        if (version !== versions[isPriv ? 'private' : 'public']) throw new Error('Version mismatch');
        if (isPriv) return new $12413ea56ac5b886$export$bb670963070b393a({
            ...opt,
            privateKey: key.slice(1)
        });
        else return new $12413ea56ac5b886$export$bb670963070b393a({
            ...opt,
            publicKey: key
        });
    }
    static fromJSON(json) {
        return $12413ea56ac5b886$export$bb670963070b393a.fromExtendedKey(json.xpriv);
    }
    derive(path) {
        if (!/^[mM]'?/.test(path)) throw new Error('Path must start with "m" or "M"');
        if (/^[mM]'?$/.test(path)) return this;
        const parts = path.replace(/^[mM]'?\//, '').split('/');
        let child = this;
        for (const c of parts){
            const m = /^(\d+)('?)$/.exec(c);
            if (!m || m.length !== 3) throw new Error(`Invalid child index: ${c}`);
            let idx = +m[1];
            if (!Number.isSafeInteger(idx) || idx >= $12413ea56ac5b886$export$c16360648dc994f8) throw new Error('Invalid index');
            if (m[2] === "'") idx += $12413ea56ac5b886$export$c16360648dc994f8;
            child = child.deriveChild(idx);
        }
        return child;
    }
    deriveChild(index) {
        if (!this.pubKey || !this.chainCode) throw new Error('No publicKey or chainCode set');
        let data = $12413ea56ac5b886$var$toU32(index);
        if (index >= $12413ea56ac5b886$export$c16360648dc994f8) {
            const priv = this.privateKey;
            if (!priv) throw new Error('Could not derive hardened child key');
            data = (0, $a4a7a2e03d59da9d$exports.concatBytes)(new Uint8Array([
                0
            ]), priv, data);
        } else data = (0, $a4a7a2e03d59da9d$exports.concatBytes)(this.pubKey, data);
        const I = (0, $d73a2cf144050a45$exports.hmac)((0, $029f7730c42bc787$exports.sha512), this.chainCode, data);
        const childTweak = $12413ea56ac5b886$var$bytesToNumber(I.slice(0, 32));
        const chainCode = I.slice(32);
        if (!$eebec0a1229b249a$export$eab97d15b1788b8d.isValidPrivateKey(childTweak)) throw new Error('Tweak bigger than curve order');
        const opt = {
            versions: this.versions,
            chainCode: chainCode,
            depth: this.depth + 1,
            parentFingerprint: this.fingerprint,
            index: index
        };
        try {
            if (this.privateKey) {
                const added = $eebec0a1229b249a$export$eab97d15b1788b8d.mod(this.privKey + childTweak, $eebec0a1229b249a$export$8ff8607b70325343.n);
                if (!$eebec0a1229b249a$export$eab97d15b1788b8d.isValidPrivateKey(added)) throw new Error('The tweak was out of range or the resulted private key is invalid');
                opt.privateKey = added;
            } else {
                const added = $eebec0a1229b249a$export$baf26146a414f24a.fromHex(this.pubKey).add($eebec0a1229b249a$export$baf26146a414f24a.fromPrivateKey(childTweak));
                if (added.equals($eebec0a1229b249a$export$baf26146a414f24a.ZERO)) throw new Error('The tweak was equal to negative P, which made the result key invalid');
                opt.publicKey = added.toRawBytes(true);
            }
            return new $12413ea56ac5b886$export$bb670963070b393a(opt);
        } catch (err) {
            return this.deriveChild(index + 1);
        }
    }
    sign(hash) {
        if (!this.privateKey) throw new Error('No privateKey set!');
        (0, $b17cd3543bb4c9a3$exports.bytes)(hash, 32);
        return $eebec0a1229b249a$export$6ff6692656050317(hash, this.privKey, {
            canonical: true,
            der: false
        });
    }
    verify(hash, signature) {
        (0, $b17cd3543bb4c9a3$exports.bytes)(hash, 32);
        (0, $b17cd3543bb4c9a3$exports.bytes)(signature, 64);
        if (!this.publicKey) throw new Error('No publicKey set!');
        let sig;
        try {
            sig = $eebec0a1229b249a$export$848620f5f2f26e86.fromCompact(signature);
        } catch (error) {
            return false;
        }
        return $eebec0a1229b249a$export$532244b5b8b0b4b6(sig, hash, this.publicKey);
    }
    wipePrivateData() {
        this.privKey = undefined;
        if (this.privKeyBytes) {
            this.privKeyBytes.fill(0);
            this.privKeyBytes = undefined;
        }
        return this;
    }
    toJSON() {
        return {
            xpriv: this.privateExtendedKey,
            xpub: this.publicExtendedKey
        };
    }
    serialize(version, key) {
        if (!this.chainCode) throw new Error('No chainCode set');
        (0, $b17cd3543bb4c9a3$exports.bytes)(key, 33);
        return (0, $a4a7a2e03d59da9d$exports.concatBytes)($12413ea56ac5b886$var$toU32(version), new Uint8Array([
            this.depth
        ]), $12413ea56ac5b886$var$toU32(this.parentFingerprint), $12413ea56ac5b886$var$toU32(this.index), this.chainCode, key);
    }
}



var $ae886a92a8b497c6$var$__defProp = Object.defineProperty;
var $ae886a92a8b497c6$var$__export = (target, all)=>{
    for(var name in all)$ae886a92a8b497c6$var$__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
function $ae886a92a8b497c6$export$38f4f9e52b1651a4() {
    return $eebec0a1229b249a$export$eab97d15b1788b8d.bytesToHex($eebec0a1229b249a$export$eab97d15b1788b8d.randomPrivateKey());
}
function $ae886a92a8b497c6$export$889def73691f9837(privateKey) {
    return $eebec0a1229b249a$export$eab97d15b1788b8d.bytesToHex($eebec0a1229b249a$export$1f2401df071be9f.getPublicKey(privateKey));
}
// utils.ts
var $ae886a92a8b497c6$export$eab97d15b1788b8d = {};
$ae886a92a8b497c6$var$__export($ae886a92a8b497c6$export$eab97d15b1788b8d, {
    insertEventIntoAscendingList: ()=>$ae886a92a8b497c6$var$insertEventIntoAscendingList,
    insertEventIntoDescendingList: ()=>$ae886a92a8b497c6$var$insertEventIntoDescendingList,
    normalizeURL: ()=>$ae886a92a8b497c6$var$normalizeURL,
    utf8Decoder: ()=>$ae886a92a8b497c6$var$utf8Decoder,
    utf8Encoder: ()=>$ae886a92a8b497c6$var$utf8Encoder
});
var $ae886a92a8b497c6$var$utf8Decoder = new TextDecoder("utf-8");
var $ae886a92a8b497c6$var$utf8Encoder = new TextEncoder();
function $ae886a92a8b497c6$var$normalizeURL(url) {
    let p = new URL(url);
    p.pathname = p.pathname.replace(/\/+/g, "/");
    if (p.pathname.endsWith("/")) p.pathname = p.pathname.slice(0, -1);
    if (p.port === "80" && p.protocol === "ws:" || p.port === "443" && p.protocol === "wss:") p.port = "";
    p.searchParams.sort();
    p.hash = "";
    return p.toString();
}
function $ae886a92a8b497c6$var$insertEventIntoDescendingList(sortedArray, event) {
    let start = 0;
    let end = sortedArray.length - 1;
    let midPoint;
    let position = start;
    if (end < 0) position = 0;
    else if (event.created_at < sortedArray[end].created_at) position = end + 1;
    else if (event.created_at >= sortedArray[start].created_at) position = start;
    else while(true){
        if (end <= start + 1) {
            position = end;
            break;
        }
        midPoint = Math.floor(start + (end - start) / 2);
        if (sortedArray[midPoint].created_at > event.created_at) start = midPoint;
        else if (sortedArray[midPoint].created_at < event.created_at) end = midPoint;
        else {
            position = midPoint;
            break;
        }
    }
    if (sortedArray[position]?.id !== event.id) return [
        ...sortedArray.slice(0, position),
        event,
        ...sortedArray.slice(position)
    ];
    return sortedArray;
}
function $ae886a92a8b497c6$var$insertEventIntoAscendingList(sortedArray, event) {
    let start = 0;
    let end = sortedArray.length - 1;
    let midPoint;
    let position = start;
    if (end < 0) position = 0;
    else if (event.created_at > sortedArray[end].created_at) position = end + 1;
    else if (event.created_at <= sortedArray[start].created_at) position = start;
    else while(true){
        if (end <= start + 1) {
            position = end;
            break;
        }
        midPoint = Math.floor(start + (end - start) / 2);
        if (sortedArray[midPoint].created_at < event.created_at) start = midPoint;
        else if (sortedArray[midPoint].created_at > event.created_at) end = midPoint;
        else {
            position = midPoint;
            break;
        }
    }
    if (sortedArray[position]?.id !== event.id) return [
        ...sortedArray.slice(0, position),
        event,
        ...sortedArray.slice(position)
    ];
    return sortedArray;
}
// event.ts
var $ae886a92a8b497c6$export$a84bdc57c5122798 = /* @__PURE__ */ ((Kind2)=>{
    Kind2[Kind2["Metadata"] = 0] = "Metadata";
    Kind2[Kind2["Text"] = 1] = "Text";
    Kind2[Kind2["RecommendRelay"] = 2] = "RecommendRelay";
    Kind2[Kind2["Contacts"] = 3] = "Contacts";
    Kind2[Kind2["EncryptedDirectMessage"] = 4] = "EncryptedDirectMessage";
    Kind2[Kind2["EventDeletion"] = 5] = "EventDeletion";
    Kind2[Kind2["Reaction"] = 7] = "Reaction";
    Kind2[Kind2["BadgeAward"] = 8] = "BadgeAward";
    Kind2[Kind2["ChannelCreation"] = 40] = "ChannelCreation";
    Kind2[Kind2["ChannelMetadata"] = 41] = "ChannelMetadata";
    Kind2[Kind2["ChannelMessage"] = 42] = "ChannelMessage";
    Kind2[Kind2["ChannelHideMessage"] = 43] = "ChannelHideMessage";
    Kind2[Kind2["ChannelMuteUser"] = 44] = "ChannelMuteUser";
    Kind2[Kind2["Report"] = 1984] = "Report";
    Kind2[Kind2["ZapRequest"] = 9734] = "ZapRequest";
    Kind2[Kind2["Zap"] = 9735] = "Zap";
    Kind2[Kind2["RelayList"] = 10002] = "RelayList";
    Kind2[Kind2["ClientAuth"] = 22242] = "ClientAuth";
    Kind2[Kind2["BadgeDefinition"] = 30008] = "BadgeDefinition";
    Kind2[Kind2["ProfileBadge"] = 30009] = "ProfileBadge";
    Kind2[Kind2["Article"] = 30023] = "Article";
    return Kind2;
})($ae886a92a8b497c6$export$a84bdc57c5122798 || {});
function $ae886a92a8b497c6$export$8194325f77b8f3e4() {
    return {
        kind: 255,
        content: "",
        tags: [],
        created_at: 0
    };
}
function $ae886a92a8b497c6$export$ba1b4a5137924b04(t, privateKey) {
    let event = t;
    event.pubkey = $ae886a92a8b497c6$export$889def73691f9837(privateKey);
    event.id = $ae886a92a8b497c6$export$11a838ad4e557e0e(event);
    event.sig = $ae886a92a8b497c6$export$33109f23e301ddf(event, privateKey);
    return event;
}
function $ae886a92a8b497c6$export$d32d86987f616a9e(evt) {
    if (!$ae886a92a8b497c6$export$d08d852dd562b1ce(evt)) throw new Error("can't serialize event with wrong or missing properties");
    return JSON.stringify([
        0,
        evt.pubkey,
        evt.created_at,
        evt.kind,
        evt.tags,
        evt.content
    ]);
}
function $ae886a92a8b497c6$export$11a838ad4e557e0e(event) {
    let eventHash = (0, $b5280835b16caf32$exports.sha256)($ae886a92a8b497c6$var$utf8Encoder.encode($ae886a92a8b497c6$export$d32d86987f616a9e(event)));
    return $eebec0a1229b249a$export$eab97d15b1788b8d.bytesToHex(eventHash);
}
var $ae886a92a8b497c6$var$isRecord = (obj)=>obj instanceof Object;
function $ae886a92a8b497c6$export$d08d852dd562b1ce(event) {
    if (!$ae886a92a8b497c6$var$isRecord(event)) return false;
    if (typeof event.kind !== "number") return false;
    if (typeof event.content !== "string") return false;
    if (typeof event.created_at !== "number") return false;
    if (typeof event.pubkey !== "string") return false;
    if (!event.pubkey.match(/^[a-f0-9]{64}$/)) return false;
    if (!Array.isArray(event.tags)) return false;
    for(let i = 0; i < event.tags.length; i++){
        let tag = event.tags[i];
        if (!Array.isArray(tag)) return false;
        for(let j = 0; j < tag.length; j++){
            if (typeof tag[j] === "object") return false;
        }
    }
    return true;
}
function $ae886a92a8b497c6$export$ab54e47fdf2903bb(event) {
    return $eebec0a1229b249a$export$1f2401df071be9f.verifySync(event.sig, $ae886a92a8b497c6$export$11a838ad4e557e0e(event), event.pubkey);
}
function $ae886a92a8b497c6$export$33109f23e301ddf(event, key) {
    return $eebec0a1229b249a$export$eab97d15b1788b8d.bytesToHex($eebec0a1229b249a$export$1f2401df071be9f.signSync($ae886a92a8b497c6$export$11a838ad4e557e0e(event), key));
}
// filter.ts
function $ae886a92a8b497c6$export$c6f8482e724e56c5(filter, event) {
    if (filter.ids && filter.ids.indexOf(event.id) === -1) {
        if (!filter.ids.some((prefix)=>event.id.startsWith(prefix))) return false;
    }
    if (filter.kinds && filter.kinds.indexOf(event.kind) === -1) return false;
    if (filter.authors && filter.authors.indexOf(event.pubkey) === -1) {
        if (!filter.authors.some((prefix)=>event.pubkey.startsWith(prefix))) return false;
    }
    for(let f in filter)if (f[0] === "#") {
        let tagName = f.slice(1);
        let values = filter[`#${tagName}`];
        if (values && !event.tags.find(([t, v])=>t === f.slice(1) && values.indexOf(v) !== -1)) return false;
    }
    if (filter.since && event.created_at < filter.since) return false;
    if (filter.until && event.created_at >= filter.until) return false;
    return true;
}
function $ae886a92a8b497c6$export$4bbf3f173cb9a4eb(filters, event) {
    for(let i = 0; i < filters.length; i++){
        if ($ae886a92a8b497c6$export$c6f8482e724e56c5(filters[i], event)) return true;
    }
    return false;
}
// fakejson.ts
var $ae886a92a8b497c6$export$7712baafc4f0e06e = {};
$ae886a92a8b497c6$var$__export($ae886a92a8b497c6$export$7712baafc4f0e06e, {
    getHex64: ()=>$ae886a92a8b497c6$var$getHex64,
    getInt: ()=>$ae886a92a8b497c6$var$getInt,
    getSubscriptionId: ()=>$ae886a92a8b497c6$var$getSubscriptionId,
    matchEventId: ()=>$ae886a92a8b497c6$var$matchEventId,
    matchEventKind: ()=>$ae886a92a8b497c6$var$matchEventKind,
    matchEventPubkey: ()=>$ae886a92a8b497c6$var$matchEventPubkey
});
function $ae886a92a8b497c6$var$getHex64(json, field) {
    let len = field.length + 3;
    let idx = json.indexOf(`"${field}":`) + len;
    let s = json.slice(idx).indexOf(`"`) + idx + 1;
    return json.slice(s, s + 64);
}
function $ae886a92a8b497c6$var$getInt(json, field) {
    let len = field.length;
    let idx = json.indexOf(`"${field}":`) + len + 3;
    let sliced = json.slice(idx);
    let end = Math.min(sliced.indexOf(","), sliced.indexOf("}"));
    return parseInt(sliced.slice(0, end), 10);
}
function $ae886a92a8b497c6$var$getSubscriptionId(json) {
    let idx = json.slice(0, 22).indexOf(`"EVENT"`);
    if (idx === -1) return null;
    let pstart = json.slice(idx + 7 + 1).indexOf(`"`);
    if (pstart === -1) return null;
    let start = idx + 7 + 1 + pstart;
    let pend = json.slice(start + 1, 80).indexOf(`"`);
    if (pend === -1) return null;
    let end = start + 1 + pend;
    return json.slice(start + 1, end);
}
function $ae886a92a8b497c6$var$matchEventId(json, id) {
    return id === $ae886a92a8b497c6$var$getHex64(json, "id");
}
function $ae886a92a8b497c6$var$matchEventPubkey(json, pubkey) {
    return pubkey === $ae886a92a8b497c6$var$getHex64(json, "pubkey");
}
function $ae886a92a8b497c6$var$matchEventKind(json, kind) {
    return kind === $ae886a92a8b497c6$var$getInt(json, "kind");
}
// relay.ts
var $ae886a92a8b497c6$var$newListeners = ()=>({
        connect: [],
        disconnect: [],
        error: [],
        notice: [],
        auth: []
    });
function $ae886a92a8b497c6$export$fe80edcb51def1e5(url, options = {}) {
    let { listTimeout: listTimeout = 3e3, getTimeout: getTimeout = 3e3, countTimeout: countTimeout = 3e3 } = options;
    var ws;
    var openSubs = {};
    var listeners = $ae886a92a8b497c6$var$newListeners();
    var subListeners = {};
    var pubListeners = {};
    var connectionPromise;
    async function connectRelay() {
        if (connectionPromise) return connectionPromise;
        connectionPromise = new Promise((resolve, reject)=>{
            try {
                ws = new WebSocket(url);
            } catch (err) {
                reject(err);
            }
            ws.onopen = ()=>{
                listeners.connect.forEach((cb)=>cb());
                resolve();
            };
            ws.onerror = ()=>{
                connectionPromise = void 0;
                listeners.error.forEach((cb)=>cb());
                reject();
            };
            ws.onclose = async ()=>{
                connectionPromise = void 0;
                listeners.disconnect.forEach((cb)=>cb());
            };
            let incomingMessageQueue = [];
            let handleNextInterval;
            ws.onmessage = (e)=>{
                incomingMessageQueue.push(e.data);
                if (!handleNextInterval) handleNextInterval = setInterval(handleNext, 0);
            };
            function handleNext() {
                if (incomingMessageQueue.length === 0) {
                    clearInterval(handleNextInterval);
                    handleNextInterval = null;
                    return;
                }
                var json = incomingMessageQueue.shift();
                if (!json) return;
                let subid = $ae886a92a8b497c6$var$getSubscriptionId(json);
                if (subid) {
                    let so = openSubs[subid];
                    if (so && so.alreadyHaveEvent && so.alreadyHaveEvent($ae886a92a8b497c6$var$getHex64(json, "id"), url)) return;
                }
                try {
                    let data = JSON.parse(json);
                    switch(data[0]){
                        case "EVENT":
                            {
                                let id2 = data[1];
                                let event = data[2];
                                if ($ae886a92a8b497c6$export$d08d852dd562b1ce(event) && openSubs[id2] && (openSubs[id2].skipVerification || $ae886a92a8b497c6$export$ab54e47fdf2903bb(event)) && $ae886a92a8b497c6$export$4bbf3f173cb9a4eb(openSubs[id2].filters, event)) {
                                    openSubs[id2];
                                    (subListeners[id2]?.event || []).forEach((cb)=>cb(event));
                                }
                                return;
                            }
                        case "COUNT":
                            let id = data[1];
                            let payload = data[2];
                            if (openSubs[id]) (subListeners[id]?.count || []).forEach((cb)=>cb(payload));
                            return;
                        case "EOSE":
                            {
                                let id2 = data[1];
                                if (id2 in subListeners) {
                                    subListeners[id2].eose.forEach((cb)=>cb());
                                    subListeners[id2].eose = [];
                                }
                                return;
                            }
                        case "OK":
                            {
                                let id2 = data[1];
                                let ok = data[2];
                                let reason = data[3] || "";
                                if (id2 in pubListeners) {
                                    if (ok) pubListeners[id2].ok.forEach((cb)=>cb());
                                    else pubListeners[id2].failed.forEach((cb)=>cb(reason));
                                    pubListeners[id2].ok = [];
                                    pubListeners[id2].failed = [];
                                }
                                return;
                            }
                        case "NOTICE":
                            let notice = data[1];
                            listeners.notice.forEach((cb)=>cb(notice));
                            return;
                        case "AUTH":
                            {
                                let challenge = data[1];
                                listeners.auth?.forEach((cb)=>cb(challenge));
                                return;
                            }
                    }
                } catch (err) {
                    return;
                }
            }
        });
        return connectionPromise;
    }
    function connected() {
        return ws?.readyState === 1;
    }
    async function connect() {
        if (connected()) return;
        await connectRelay();
    }
    async function trySend(params) {
        let msg = JSON.stringify(params);
        if (!connected()) {
            await new Promise((resolve)=>setTimeout(resolve, 1e3));
            if (!connected()) return;
        }
        try {
            ws.send(msg);
        } catch (err) {
            console.log(err);
        }
    }
    const sub = (filters, { verb: verb = "REQ", skipVerification: skipVerification = false, alreadyHaveEvent: alreadyHaveEvent = null, id: id = Math.random().toString().slice(2) } = {})=>{
        let subid = id;
        openSubs[subid] = {
            id: subid,
            filters: filters,
            skipVerification: skipVerification,
            alreadyHaveEvent: alreadyHaveEvent
        };
        trySend([
            verb,
            subid,
            ...filters
        ]);
        return {
            sub: (newFilters, newOpts = {})=>sub(newFilters || filters, {
                    skipVerification: newOpts.skipVerification || skipVerification,
                    alreadyHaveEvent: newOpts.alreadyHaveEvent || alreadyHaveEvent,
                    id: subid
                }),
            unsub: ()=>{
                delete openSubs[subid];
                delete subListeners[subid];
                trySend([
                    "CLOSE",
                    subid
                ]);
            },
            on: (type, cb)=>{
                subListeners[subid] = subListeners[subid] || {
                    event: [],
                    count: [],
                    eose: []
                };
                subListeners[subid][type].push(cb);
            },
            off: (type, cb)=>{
                let listeners2 = subListeners[subid];
                let idx = listeners2[type].indexOf(cb);
                if (idx >= 0) listeners2[type].splice(idx, 1);
            }
        };
    };
    function _publishEvent(event, type) {
        if (!event.id) throw new Error(`event ${event} has no id`);
        let id = event.id;
        trySend([
            type,
            event
        ]);
        return {
            on: (type2, cb)=>{
                pubListeners[id] = pubListeners[id] || {
                    ok: [],
                    failed: []
                };
                pubListeners[id][type2].push(cb);
            },
            off: (type2, cb)=>{
                let listeners2 = pubListeners[id];
                if (!listeners2) return;
                let idx = listeners2[type2].indexOf(cb);
                if (idx >= 0) listeners2[type2].splice(idx, 1);
            }
        };
    }
    return {
        url: url,
        sub: sub,
        on: (type, cb)=>{
            listeners[type].push(cb);
            if (type === "connect" && ws?.readyState === 1) cb();
        },
        off: (type, cb)=>{
            let index = listeners[type].indexOf(cb);
            if (index !== -1) listeners[type].splice(index, 1);
        },
        list: (filters, opts)=>new Promise((resolve)=>{
                let s = sub(filters, opts);
                let events = [];
                let timeout = setTimeout(()=>{
                    s.unsub();
                    resolve(events);
                }, listTimeout);
                s.on("eose", ()=>{
                    s.unsub();
                    clearTimeout(timeout);
                    resolve(events);
                });
                s.on("event", (event)=>{
                    events.push(event);
                });
            }),
        get: (filter, opts)=>new Promise((resolve)=>{
                let s = sub([
                    filter
                ], opts);
                let timeout = setTimeout(()=>{
                    s.unsub();
                    resolve(null);
                }, getTimeout);
                s.on("event", (event)=>{
                    s.unsub();
                    clearTimeout(timeout);
                    resolve(event);
                });
            }),
        count: (filters)=>new Promise((resolve)=>{
                let s = sub(filters, {
                    ...sub,
                    verb: "COUNT"
                });
                let timeout = setTimeout(()=>{
                    s.unsub();
                    resolve(null);
                }, countTimeout);
                s.on("count", (event)=>{
                    s.unsub();
                    clearTimeout(timeout);
                    resolve(event);
                });
            }),
        publish (event) {
            return _publishEvent(event, "EVENT");
        },
        auth (event) {
            return _publishEvent(event, "AUTH");
        },
        connect: connect,
        close () {
            listeners = $ae886a92a8b497c6$var$newListeners();
            subListeners = {};
            pubListeners = {};
            if (ws.readyState === WebSocket.OPEN) ws?.close();
        },
        get status () {
            return ws?.readyState ?? 3;
        }
    };
}
// pool.ts
var $ae886a92a8b497c6$export$db45add7d1880f0c = class {
    _conn;
    _seenOn = {};
    eoseSubTimeout;
    getTimeout;
    constructor(options = {}){
        this._conn = {};
        this.eoseSubTimeout = options.eoseSubTimeout || 3400;
        this.getTimeout = options.getTimeout || 3400;
    }
    close(relays) {
        relays.forEach((url)=>{
            let relay = this._conn[$ae886a92a8b497c6$var$normalizeURL(url)];
            if (relay) relay.close();
        });
    }
    async ensureRelay(url) {
        const nm = $ae886a92a8b497c6$var$normalizeURL(url);
        if (!this._conn[nm]) this._conn[nm] = $ae886a92a8b497c6$export$fe80edcb51def1e5(nm, {
            getTimeout: this.getTimeout * 0.9,
            listTimeout: this.getTimeout * 0.9
        });
        const relay = this._conn[nm];
        await relay.connect();
        return relay;
    }
    sub(relays, filters, opts) {
        let _knownIds = /* @__PURE__ */ new Set();
        let modifiedOpts = {
            ...opts || {}
        };
        modifiedOpts.alreadyHaveEvent = (id, url)=>{
            if (opts?.alreadyHaveEvent?.(id, url)) return true;
            let set = this._seenOn[id] || /* @__PURE__ */ new Set();
            set.add(url);
            this._seenOn[id] = set;
            return _knownIds.has(id);
        };
        let subs = [];
        let eventListeners = /* @__PURE__ */ new Set();
        let eoseListeners = /* @__PURE__ */ new Set();
        let eosesMissing = relays.length;
        let eoseSent = false;
        let eoseTimeout = setTimeout(()=>{
            eoseSent = true;
            for (let cb of eoseListeners.values())cb();
        }, this.eoseSubTimeout);
        relays.forEach(async (relay)=>{
            let r;
            try {
                r = await this.ensureRelay(relay);
            } catch (err) {
                handleEose();
                return;
            }
            if (!r) return;
            let s = r.sub(filters, modifiedOpts);
            s.on("event", (event)=>{
                _knownIds.add(event.id);
                for (let cb of eventListeners.values())cb(event);
            });
            s.on("eose", ()=>{
                if (eoseSent) return;
                handleEose();
            });
            subs.push(s);
            function handleEose() {
                eosesMissing--;
                if (eosesMissing === 0) {
                    clearTimeout(eoseTimeout);
                    for (let cb of eoseListeners.values())cb();
                }
            }
        });
        let greaterSub = {
            sub (filters2, opts2) {
                subs.forEach((sub)=>sub.sub(filters2, opts2));
                return greaterSub;
            },
            unsub () {
                subs.forEach((sub)=>sub.unsub());
            },
            on (type, cb) {
                if (type === "event") eventListeners.add(cb);
                else if (type === "eose") eoseListeners.add(cb);
            },
            off (type, cb) {
                if (type === "event") eventListeners.delete(cb);
                else if (type === "eose") eoseListeners.delete(cb);
            }
        };
        return greaterSub;
    }
    get(relays, filter, opts) {
        return new Promise((resolve)=>{
            let sub = this.sub(relays, [
                filter
            ], opts);
            let timeout = setTimeout(()=>{
                sub.unsub();
                resolve(null);
            }, this.getTimeout);
            sub.on("event", (event)=>{
                resolve(event);
                clearTimeout(timeout);
                sub.unsub();
            });
        });
    }
    list(relays, filters, opts) {
        return new Promise((resolve)=>{
            let events = [];
            let sub = this.sub(relays, filters, opts);
            sub.on("event", (event)=>{
                events.push(event);
            });
            sub.on("eose", ()=>{
                sub.unsub();
                resolve(events);
            });
        });
    }
    publish(relays, event) {
        const pubPromises = relays.map(async (relay)=>{
            let r;
            try {
                r = await this.ensureRelay(relay);
                return r.publish(event);
            } catch (_) {
                return {
                    on () {},
                    off () {}
                };
            }
        });
        const callbackMap = /* @__PURE__ */ new Map();
        return {
            on (type, cb) {
                relays.forEach(async (relay, i)=>{
                    let pub = await pubPromises[i];
                    let callback = ()=>cb(relay);
                    callbackMap.set(cb, callback);
                    pub.on(type, callback);
                });
            },
            off (type, cb) {
                relays.forEach(async (_, i)=>{
                    let callback = callbackMap.get(cb);
                    if (callback) {
                        let pub = await pubPromises[i];
                        pub.off(type, callback);
                    }
                });
            }
        };
    }
    seenOn(id) {
        return Array.from(this._seenOn[id]?.values?.() || []);
    }
};
// nip19.ts
var $ae886a92a8b497c6$export$10660ae21dbef115 = {};
$ae886a92a8b497c6$var$__export($ae886a92a8b497c6$export$10660ae21dbef115, {
    decode: ()=>$ae886a92a8b497c6$var$decode,
    naddrEncode: ()=>$ae886a92a8b497c6$var$naddrEncode,
    neventEncode: ()=>$ae886a92a8b497c6$var$neventEncode,
    noteEncode: ()=>$ae886a92a8b497c6$var$noteEncode,
    nprofileEncode: ()=>$ae886a92a8b497c6$var$nprofileEncode,
    npubEncode: ()=>$ae886a92a8b497c6$var$npubEncode,
    nrelayEncode: ()=>$ae886a92a8b497c6$var$nrelayEncode,
    nsecEncode: ()=>$ae886a92a8b497c6$var$nsecEncode
});
var $ae886a92a8b497c6$var$Bech32MaxSize = 5e3;
function $ae886a92a8b497c6$var$decode(nip19) {
    let { prefix: prefix, words: words } = (0, $c97f81be67511c58$export$27c42482533637da).decode(nip19, $ae886a92a8b497c6$var$Bech32MaxSize);
    let data = new Uint8Array((0, $c97f81be67511c58$export$27c42482533637da).fromWords(words));
    switch(prefix){
        case "nprofile":
            {
                let tlv = $ae886a92a8b497c6$var$parseTLV(data);
                if (!tlv[0]?.[0]) throw new Error("missing TLV 0 for nprofile");
                if (tlv[0][0].length !== 32) throw new Error("TLV 0 should be 32 bytes");
                return {
                    type: "nprofile",
                    data: {
                        pubkey: $eebec0a1229b249a$export$eab97d15b1788b8d.bytesToHex(tlv[0][0]),
                        relays: tlv[1] ? tlv[1].map((d)=>$ae886a92a8b497c6$var$utf8Decoder.decode(d)) : []
                    }
                };
            }
        case "nevent":
            {
                let tlv = $ae886a92a8b497c6$var$parseTLV(data);
                if (!tlv[0]?.[0]) throw new Error("missing TLV 0 for nevent");
                if (tlv[0][0].length !== 32) throw new Error("TLV 0 should be 32 bytes");
                if (tlv[2] && tlv[2][0].length !== 32) throw new Error("TLV 2 should be 32 bytes");
                return {
                    type: "nevent",
                    data: {
                        id: $eebec0a1229b249a$export$eab97d15b1788b8d.bytesToHex(tlv[0][0]),
                        relays: tlv[1] ? tlv[1].map((d)=>$ae886a92a8b497c6$var$utf8Decoder.decode(d)) : [],
                        author: tlv[2]?.[0] ? $eebec0a1229b249a$export$eab97d15b1788b8d.bytesToHex(tlv[2][0]) : void 0
                    }
                };
            }
        case "naddr":
            {
                let tlv = $ae886a92a8b497c6$var$parseTLV(data);
                if (!tlv[0]?.[0]) throw new Error("missing TLV 0 for naddr");
                if (!tlv[2]?.[0]) throw new Error("missing TLV 2 for naddr");
                if (tlv[2][0].length !== 32) throw new Error("TLV 2 should be 32 bytes");
                if (!tlv[3]?.[0]) throw new Error("missing TLV 3 for naddr");
                if (tlv[3][0].length !== 4) throw new Error("TLV 3 should be 4 bytes");
                return {
                    type: "naddr",
                    data: {
                        identifier: $ae886a92a8b497c6$var$utf8Decoder.decode(tlv[0][0]),
                        pubkey: $eebec0a1229b249a$export$eab97d15b1788b8d.bytesToHex(tlv[2][0]),
                        kind: parseInt($eebec0a1229b249a$export$eab97d15b1788b8d.bytesToHex(tlv[3][0]), 16),
                        relays: tlv[1] ? tlv[1].map((d)=>$ae886a92a8b497c6$var$utf8Decoder.decode(d)) : []
                    }
                };
            }
        case "nrelay":
            {
                let tlv = $ae886a92a8b497c6$var$parseTLV(data);
                if (!tlv[0]?.[0]) throw new Error("missing TLV 0 for nrelay");
                return {
                    type: "nrelay",
                    data: $ae886a92a8b497c6$var$utf8Decoder.decode(tlv[0][0])
                };
            }
        case "nsec":
        case "npub":
        case "note":
            return {
                type: prefix,
                data: $eebec0a1229b249a$export$eab97d15b1788b8d.bytesToHex(data)
            };
        default:
            throw new Error(`unknown prefix ${prefix}`);
    }
}
function $ae886a92a8b497c6$var$parseTLV(data) {
    let result = {};
    let rest = data;
    while(rest.length > 0){
        let t = rest[0];
        let l = rest[1];
        let v = rest.slice(2, 2 + l);
        rest = rest.slice(2 + l);
        if (v.length < l) continue;
        result[t] = result[t] || [];
        result[t].push(v);
    }
    return result;
}
function $ae886a92a8b497c6$var$nsecEncode(hex) {
    return $ae886a92a8b497c6$var$encodeBytes("nsec", hex);
}
function $ae886a92a8b497c6$var$npubEncode(hex) {
    return $ae886a92a8b497c6$var$encodeBytes("npub", hex);
}
function $ae886a92a8b497c6$var$noteEncode(hex) {
    return $ae886a92a8b497c6$var$encodeBytes("note", hex);
}
function $ae886a92a8b497c6$var$encodeBytes(prefix, hex) {
    let data = $eebec0a1229b249a$export$eab97d15b1788b8d.hexToBytes(hex);
    let words = (0, $c97f81be67511c58$export$27c42482533637da).toWords(data);
    return (0, $c97f81be67511c58$export$27c42482533637da).encode(prefix, words, $ae886a92a8b497c6$var$Bech32MaxSize);
}
function $ae886a92a8b497c6$var$nprofileEncode(profile) {
    let data = $ae886a92a8b497c6$var$encodeTLV({
        0: [
            $eebec0a1229b249a$export$eab97d15b1788b8d.hexToBytes(profile.pubkey)
        ],
        1: (profile.relays || []).map((url)=>$ae886a92a8b497c6$var$utf8Encoder.encode(url))
    });
    let words = (0, $c97f81be67511c58$export$27c42482533637da).toWords(data);
    return (0, $c97f81be67511c58$export$27c42482533637da).encode("nprofile", words, $ae886a92a8b497c6$var$Bech32MaxSize);
}
function $ae886a92a8b497c6$var$neventEncode(event) {
    let data = $ae886a92a8b497c6$var$encodeTLV({
        0: [
            $eebec0a1229b249a$export$eab97d15b1788b8d.hexToBytes(event.id)
        ],
        1: (event.relays || []).map((url)=>$ae886a92a8b497c6$var$utf8Encoder.encode(url)),
        2: event.author ? [
            $eebec0a1229b249a$export$eab97d15b1788b8d.hexToBytes(event.author)
        ] : []
    });
    let words = (0, $c97f81be67511c58$export$27c42482533637da).toWords(data);
    return (0, $c97f81be67511c58$export$27c42482533637da).encode("nevent", words, $ae886a92a8b497c6$var$Bech32MaxSize);
}
function $ae886a92a8b497c6$var$naddrEncode(addr) {
    let kind = new ArrayBuffer(4);
    new DataView(kind).setUint32(0, addr.kind, false);
    let data = $ae886a92a8b497c6$var$encodeTLV({
        0: [
            $ae886a92a8b497c6$var$utf8Encoder.encode(addr.identifier)
        ],
        1: (addr.relays || []).map((url)=>$ae886a92a8b497c6$var$utf8Encoder.encode(url)),
        2: [
            $eebec0a1229b249a$export$eab97d15b1788b8d.hexToBytes(addr.pubkey)
        ],
        3: [
            new Uint8Array(kind)
        ]
    });
    let words = (0, $c97f81be67511c58$export$27c42482533637da).toWords(data);
    return (0, $c97f81be67511c58$export$27c42482533637da).encode("naddr", words, $ae886a92a8b497c6$var$Bech32MaxSize);
}
function $ae886a92a8b497c6$var$nrelayEncode(url) {
    let data = $ae886a92a8b497c6$var$encodeTLV({
        0: [
            $ae886a92a8b497c6$var$utf8Encoder.encode(url)
        ]
    });
    let words = (0, $c97f81be67511c58$export$27c42482533637da).toWords(data);
    return (0, $c97f81be67511c58$export$27c42482533637da).encode("nrelay", words, $ae886a92a8b497c6$var$Bech32MaxSize);
}
function $ae886a92a8b497c6$var$encodeTLV(tlv) {
    let entries = [];
    Object.entries(tlv).forEach(([t, vs])=>{
        vs.forEach((v)=>{
            let entry = new Uint8Array(v.length + 2);
            entry.set([
                parseInt(t)
            ], 0);
            entry.set([
                v.length
            ], 1);
            entry.set(v, 2);
            entries.push(entry);
        });
    });
    return $eebec0a1229b249a$export$eab97d15b1788b8d.concatBytes(...entries);
}
// references.ts
var $ae886a92a8b497c6$var$mentionRegex = /\bnostr:((note|npub|naddr|nevent|nprofile)1\w+)\b|#\[(\d+)\]/g;
function $ae886a92a8b497c6$export$2b054a310b694903(evt) {
    let references = [];
    for (let ref of evt.content.matchAll($ae886a92a8b497c6$var$mentionRegex)){
        if (ref[2]) try {
            let { type: type, data: data } = $ae886a92a8b497c6$var$decode(ref[1]);
            switch(type){
                case "npub":
                    references.push({
                        text: ref[0],
                        profile: {
                            pubkey: data,
                            relays: []
                        }
                    });
                    break;
                case "nprofile":
                    references.push({
                        text: ref[0],
                        profile: data
                    });
                    break;
                case "note":
                    references.push({
                        text: ref[0],
                        event: {
                            id: data,
                            relays: []
                        }
                    });
                    break;
                case "nevent":
                    references.push({
                        text: ref[0],
                        event: data
                    });
                    break;
                case "naddr":
                    references.push({
                        text: ref[0],
                        address: data
                    });
                    break;
            }
        } catch (err) {}
        else if (ref[3]) {
            let idx = parseInt(ref[3], 10);
            let tag = evt.tags[idx];
            if (!tag) continue;
            switch(tag[0]){
                case "p":
                    references.push({
                        text: ref[0],
                        profile: {
                            pubkey: tag[1],
                            relays: tag[2] ? [
                                tag[2]
                            ] : []
                        }
                    });
                    break;
                case "e":
                    references.push({
                        text: ref[0],
                        event: {
                            id: tag[1],
                            relays: tag[2] ? [
                                tag[2]
                            ] : []
                        }
                    });
                    break;
                case "a":
                    try {
                        let [kind, pubkey, identifier] = tag[1].split(":");
                        references.push({
                            text: ref[0],
                            address: {
                                identifier: identifier,
                                pubkey: pubkey,
                                kind: parseInt(kind, 10),
                                relays: tag[2] ? [
                                    tag[2]
                                ] : []
                            }
                        });
                    } catch (err) {}
                    break;
            }
        }
    }
    return references;
}
// nip04.ts
var $ae886a92a8b497c6$export$4793e42c2cc9b120 = {};
$ae886a92a8b497c6$var$__export($ae886a92a8b497c6$export$4793e42c2cc9b120, {
    decrypt: ()=>$ae886a92a8b497c6$var$decrypt,
    encrypt: ()=>$ae886a92a8b497c6$var$encrypt
});
async function $ae886a92a8b497c6$var$encrypt(privkey, pubkey, text) {
    const key = $eebec0a1229b249a$export$151f26f9d84a2c64(privkey, "02" + pubkey);
    const normalizedKey = $ae886a92a8b497c6$var$getNormalizedX(key);
    let iv = Uint8Array.from((0, $a4a7a2e03d59da9d$exports.randomBytes)(16));
    let plaintext = $ae886a92a8b497c6$var$utf8Encoder.encode(text);
    let cryptoKey = await crypto.subtle.importKey("raw", normalizedKey, {
        name: "AES-CBC"
    }, false, [
        "encrypt"
    ]);
    let ciphertext = await crypto.subtle.encrypt({
        name: "AES-CBC",
        iv: iv
    }, cryptoKey, plaintext);
    let ctb64 = (0, $c97f81be67511c58$export$b3b2de96497acc47).encode(new Uint8Array(ciphertext));
    let ivb64 = (0, $c97f81be67511c58$export$b3b2de96497acc47).encode(new Uint8Array(iv.buffer));
    return `${ctb64}?iv=${ivb64}`;
}
async function $ae886a92a8b497c6$var$decrypt(privkey, pubkey, data) {
    let [ctb64, ivb64] = data.split("?iv=");
    let key = $eebec0a1229b249a$export$151f26f9d84a2c64(privkey, "02" + pubkey);
    let normalizedKey = $ae886a92a8b497c6$var$getNormalizedX(key);
    let cryptoKey = await crypto.subtle.importKey("raw", normalizedKey, {
        name: "AES-CBC"
    }, false, [
        "decrypt"
    ]);
    let ciphertext = (0, $c97f81be67511c58$export$b3b2de96497acc47).decode(ctb64);
    let iv = (0, $c97f81be67511c58$export$b3b2de96497acc47).decode(ivb64);
    let plaintext = await crypto.subtle.decrypt({
        name: "AES-CBC",
        iv: iv
    }, cryptoKey, ciphertext);
    let text = $ae886a92a8b497c6$var$utf8Decoder.decode(plaintext);
    return text;
}
function $ae886a92a8b497c6$var$getNormalizedX(key) {
    return key.slice(1, 33);
}
// nip05.ts
var $ae886a92a8b497c6$export$a60e5b740ad8d13e = {};
$ae886a92a8b497c6$var$__export($ae886a92a8b497c6$export$a60e5b740ad8d13e, {
    queryProfile: ()=>$ae886a92a8b497c6$var$queryProfile,
    searchDomain: ()=>$ae886a92a8b497c6$var$searchDomain,
    useFetchImplementation: ()=>$ae886a92a8b497c6$var$useFetchImplementation
});
var $ae886a92a8b497c6$var$_fetch;
try {
    $ae886a92a8b497c6$var$_fetch = fetch;
} catch  {}
function $ae886a92a8b497c6$var$useFetchImplementation(fetchImplementation) {
    $ae886a92a8b497c6$var$_fetch = fetchImplementation;
}
async function $ae886a92a8b497c6$var$searchDomain(domain, query = "") {
    try {
        let res = await (await $ae886a92a8b497c6$var$_fetch(`https://${domain}/.well-known/nostr.json?name=${query}`)).json();
        return res.names;
    } catch (_) {
        return {};
    }
}
async function $ae886a92a8b497c6$var$queryProfile(fullname) {
    let [name, domain] = fullname.split("@");
    if (!domain) {
        domain = name;
        name = "_";
    }
    if (!name.match(/^[A-Za-z0-9-_.]+$/)) return null;
    if (!domain.includes(".")) return null;
    let res;
    try {
        res = await (await $ae886a92a8b497c6$var$_fetch(`https://${domain}/.well-known/nostr.json?name=${name}`)).json();
    } catch (err) {
        return null;
    }
    if (!res?.names?.[name]) return null;
    let pubkey = res.names[name];
    let relays = res.relays?.[pubkey] || [];
    return {
        pubkey: pubkey,
        relays: relays
    };
}
// nip06.ts
var $ae886a92a8b497c6$export$2bb0f194d8b4fc43 = {};
$ae886a92a8b497c6$var$__export($ae886a92a8b497c6$export$2bb0f194d8b4fc43, {
    generateSeedWords: ()=>$ae886a92a8b497c6$var$generateSeedWords,
    privateKeyFromSeedWords: ()=>$ae886a92a8b497c6$var$privateKeyFromSeedWords,
    validateWords: ()=>$ae886a92a8b497c6$var$validateWords
});
function $ae886a92a8b497c6$var$privateKeyFromSeedWords(mnemonic, passphrase) {
    let root = (0, $12413ea56ac5b886$export$bb670963070b393a).fromMasterSeed((0, $86292e7ca3e7510b$exports.mnemonicToSeedSync)(mnemonic, passphrase));
    let privateKey = root.derive(`m/44'/1237'/0'/0/0`).privateKey;
    if (!privateKey) throw new Error("could not derive private key");
    return $eebec0a1229b249a$export$eab97d15b1788b8d.bytesToHex(privateKey);
}
function $ae886a92a8b497c6$var$generateSeedWords() {
    return (0, $86292e7ca3e7510b$exports.generateMnemonic)((0, $35851bee8b39b678$exports.wordlist));
}
function $ae886a92a8b497c6$var$validateWords(words) {
    return (0, $86292e7ca3e7510b$exports.validateMnemonic)(words, (0, $35851bee8b39b678$exports.wordlist));
}
// nip10.ts
var $ae886a92a8b497c6$export$ce5090ce1281ef76 = {};
$ae886a92a8b497c6$var$__export($ae886a92a8b497c6$export$ce5090ce1281ef76, {
    parse: ()=>$ae886a92a8b497c6$var$parse
});
function $ae886a92a8b497c6$var$parse(event) {
    const result = {
        reply: void 0,
        root: void 0,
        mentions: [],
        profiles: []
    };
    const eTags = [];
    for (const tag of event.tags){
        if (tag[0] === "e" && tag[1]) eTags.push(tag);
        if (tag[0] === "p" && tag[1]) result.profiles.push({
            pubkey: tag[1],
            relays: tag[2] ? [
                tag[2]
            ] : []
        });
    }
    for(let eTagIndex = 0; eTagIndex < eTags.length; eTagIndex++){
        const eTag = eTags[eTagIndex];
        const [_, eTagEventId, eTagRelayUrl, eTagMarker] = eTag;
        const eventPointer = {
            id: eTagEventId,
            relays: eTagRelayUrl ? [
                eTagRelayUrl
            ] : []
        };
        const isFirstETag = eTagIndex === 0;
        const isLastETag = eTagIndex === eTags.length - 1;
        if (eTagMarker === "root") {
            result.root = eventPointer;
            continue;
        }
        if (eTagMarker === "reply") {
            result.reply = eventPointer;
            continue;
        }
        if (eTagMarker === "mention") {
            result.mentions.push(eventPointer);
            continue;
        }
        if (isFirstETag) {
            result.root = eventPointer;
            continue;
        }
        if (isLastETag) {
            result.reply = eventPointer;
            continue;
        }
        result.mentions.push(eventPointer);
    }
    return result;
}
// nip13.ts
var $ae886a92a8b497c6$export$215f75f26b6c95fe = {};
$ae886a92a8b497c6$var$__export($ae886a92a8b497c6$export$215f75f26b6c95fe, {
    getPow: ()=>$ae886a92a8b497c6$var$getPow
});
function $ae886a92a8b497c6$var$getPow(id) {
    return $ae886a92a8b497c6$var$getLeadingZeroBits($eebec0a1229b249a$export$eab97d15b1788b8d.hexToBytes(id));
}
function $ae886a92a8b497c6$var$getLeadingZeroBits(hash) {
    let total, i, bits;
    for(i = 0, total = 0; i < hash.length; i++){
        bits = $ae886a92a8b497c6$var$msb(hash[i]);
        total += bits;
        if (bits !== 8) break;
    }
    return total;
}
function $ae886a92a8b497c6$var$msb(b) {
    let n = 0;
    if (b === 0) return 8;
    while(b >>= 1)n++;
    return 7 - n;
}
// nip21.ts
var $ae886a92a8b497c6$export$60e8a8091cb0f224 = {};
$ae886a92a8b497c6$var$__export($ae886a92a8b497c6$export$60e8a8091cb0f224, {
    BECH32_REGEX: ()=>$ae886a92a8b497c6$var$BECH32_REGEX,
    NOSTR_URI_REGEX: ()=>$ae886a92a8b497c6$var$NOSTR_URI_REGEX,
    parse: ()=>$ae886a92a8b497c6$var$parse2,
    test: ()=>$ae886a92a8b497c6$var$test
});
var $ae886a92a8b497c6$var$BECH32_REGEX = /[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;
var $ae886a92a8b497c6$var$NOSTR_URI_REGEX = new RegExp(`nostr:(${$ae886a92a8b497c6$var$BECH32_REGEX.source})`);
function $ae886a92a8b497c6$var$test(value) {
    return typeof value === "string" && new RegExp(`^${$ae886a92a8b497c6$var$NOSTR_URI_REGEX.source}$`).test(value);
}
function $ae886a92a8b497c6$var$parse2(uri) {
    const match = uri.match(new RegExp(`^${$ae886a92a8b497c6$var$NOSTR_URI_REGEX.source}$`));
    if (!match) throw new Error(`Invalid Nostr URI: ${uri}`);
    return {
        uri: match[0],
        value: match[1],
        decoded: $ae886a92a8b497c6$var$decode(match[1])
    };
}
// nip26.ts
var $ae886a92a8b497c6$export$5da776b11bffbdae = {};
$ae886a92a8b497c6$var$__export($ae886a92a8b497c6$export$5da776b11bffbdae, {
    createDelegation: ()=>$ae886a92a8b497c6$var$createDelegation,
    getDelegator: ()=>$ae886a92a8b497c6$var$getDelegator
});
function $ae886a92a8b497c6$var$createDelegation(privateKey, parameters) {
    let conditions = [];
    if ((parameters.kind || -1) >= 0) conditions.push(`kind=${parameters.kind}`);
    if (parameters.until) conditions.push(`created_at<${parameters.until}`);
    if (parameters.since) conditions.push(`created_at>${parameters.since}`);
    let cond = conditions.join("&");
    if (cond === "") throw new Error("refusing to create a delegation without any conditions");
    let sighash = (0, $b5280835b16caf32$exports.sha256)($ae886a92a8b497c6$var$utf8Encoder.encode(`nostr:delegation:${parameters.pubkey}:${cond}`));
    let sig = $eebec0a1229b249a$export$eab97d15b1788b8d.bytesToHex($eebec0a1229b249a$export$1f2401df071be9f.signSync(sighash, privateKey));
    return {
        from: $ae886a92a8b497c6$export$889def73691f9837(privateKey),
        to: parameters.pubkey,
        cond: cond,
        sig: sig
    };
}
function $ae886a92a8b497c6$var$getDelegator(event) {
    let tag = event.tags.find((tag2)=>tag2[0] === "delegation" && tag2.length >= 4);
    if (!tag) return null;
    let pubkey = tag[1];
    let cond = tag[2];
    let sig = tag[3];
    let conditions = cond.split("&");
    for(let i = 0; i < conditions.length; i++){
        let [key, operator, value] = conditions[i].split(/\b/);
        if (key === "kind" && operator === "=" && event.kind === parseInt(value)) continue;
        else if (key === "created_at" && operator === "<" && event.created_at < parseInt(value)) continue;
        else if (key === "created_at" && operator === ">" && event.created_at > parseInt(value)) continue;
        else return null;
    }
    let sighash = (0, $b5280835b16caf32$exports.sha256)($ae886a92a8b497c6$var$utf8Encoder.encode(`nostr:delegation:${event.pubkey}:${cond}`));
    if (!$eebec0a1229b249a$export$1f2401df071be9f.verifySync(sig, sighash, pubkey)) return null;
    return pubkey;
}
// nip27.ts
var $ae886a92a8b497c6$export$9ccc31c93a561269 = {};
$ae886a92a8b497c6$var$__export($ae886a92a8b497c6$export$9ccc31c93a561269, {
    matchAll: ()=>$ae886a92a8b497c6$var$matchAll,
    regex: ()=>$ae886a92a8b497c6$var$regex,
    replaceAll: ()=>$ae886a92a8b497c6$var$replaceAll
});
var $ae886a92a8b497c6$var$regex = ()=>new RegExp(`\\b${$ae886a92a8b497c6$var$NOSTR_URI_REGEX.source}\\b`, "g");
function* $ae886a92a8b497c6$var$matchAll(content) {
    const matches = content.matchAll($ae886a92a8b497c6$var$regex());
    for (const match of matches){
        const [uri, value] = match;
        yield {
            uri: uri,
            value: value,
            decoded: $ae886a92a8b497c6$var$decode(value),
            start: match.index,
            end: match.index + uri.length
        };
    }
}
function $ae886a92a8b497c6$var$replaceAll(content, replacer) {
    return content.replaceAll($ae886a92a8b497c6$var$regex(), (uri, value)=>{
        return replacer({
            uri: uri,
            value: value,
            decoded: $ae886a92a8b497c6$var$decode(value)
        });
    });
}
// nip39.ts
var $ae886a92a8b497c6$export$13ad325f8a2de8f7 = {};
$ae886a92a8b497c6$var$__export($ae886a92a8b497c6$export$13ad325f8a2de8f7, {
    useFetchImplementation: ()=>$ae886a92a8b497c6$var$useFetchImplementation2,
    validateGithub: ()=>$ae886a92a8b497c6$var$validateGithub
});
var $ae886a92a8b497c6$var$_fetch2;
try {
    $ae886a92a8b497c6$var$_fetch2 = fetch;
} catch  {}
function $ae886a92a8b497c6$var$useFetchImplementation2(fetchImplementation) {
    $ae886a92a8b497c6$var$_fetch2 = fetchImplementation;
}
async function $ae886a92a8b497c6$var$validateGithub(pubkey, username, proof) {
    try {
        let res = await (await $ae886a92a8b497c6$var$_fetch2(`https://gist.github.com/${username}/${proof}/raw`)).text();
        return res === `Verifying that I control the following Nostr public key: ${pubkey}`;
    } catch (_) {
        return false;
    }
}
// nip42.ts
var $ae886a92a8b497c6$export$900cb248cdec72b = {};
$ae886a92a8b497c6$var$__export($ae886a92a8b497c6$export$900cb248cdec72b, {
    authenticate: ()=>$ae886a92a8b497c6$var$authenticate
});
var $ae886a92a8b497c6$var$authenticate = async ({ challenge: challenge, relay: relay, sign: sign })=>{
    const e = {
        kind: 22242 /* ClientAuth */ ,
        created_at: Math.floor(Date.now() / 1e3),
        tags: [
            [
                "relay",
                relay.url
            ],
            [
                "challenge",
                challenge
            ]
        ],
        content: ""
    };
    const pub = relay.auth(await sign(e));
    return new Promise((resolve, reject)=>{
        pub.on("ok", function ok() {
            pub.off("ok", ok);
            resolve();
        });
        pub.on("failed", function fail(reason) {
            pub.off("failed", fail);
            reject(reason);
        });
    });
};
// nip57.ts
var $ae886a92a8b497c6$export$14e0982e3a536e29 = {};
$ae886a92a8b497c6$var$__export($ae886a92a8b497c6$export$14e0982e3a536e29, {
    getZapEndpoint: ()=>$ae886a92a8b497c6$var$getZapEndpoint,
    makeZapReceipt: ()=>$ae886a92a8b497c6$var$makeZapReceipt,
    makeZapRequest: ()=>$ae886a92a8b497c6$var$makeZapRequest,
    useFetchImplementation: ()=>$ae886a92a8b497c6$var$useFetchImplementation3,
    validateZapRequest: ()=>$ae886a92a8b497c6$var$validateZapRequest
});
var $ae886a92a8b497c6$var$_fetch3;
try {
    $ae886a92a8b497c6$var$_fetch3 = fetch;
} catch  {}
function $ae886a92a8b497c6$var$useFetchImplementation3(fetchImplementation) {
    $ae886a92a8b497c6$var$_fetch3 = fetchImplementation;
}
async function $ae886a92a8b497c6$var$getZapEndpoint(metadata) {
    try {
        let lnurl = "";
        let { lud06: lud06, lud16: lud16 } = JSON.parse(metadata.content);
        if (lud06) {
            let { words: words } = (0, $c97f81be67511c58$export$27c42482533637da).decode(lud06, 1e3);
            let data = (0, $c97f81be67511c58$export$27c42482533637da).fromWords(words);
            lnurl = $ae886a92a8b497c6$var$utf8Decoder.decode(data);
        } else if (lud16) {
            let [name, domain] = lud16.split("@");
            lnurl = `https://${domain}/.well-known/lnurlp/${name}`;
        } else return null;
        let res = await $ae886a92a8b497c6$var$_fetch3(lnurl);
        let body = await res.json();
        if (body.allowsNostr && body.nostrPubkey) return body.callback;
    } catch (err) {}
    return null;
}
function $ae886a92a8b497c6$var$makeZapRequest({ profile: profile, event: event, amount: amount, relays: relays, comment: comment = "" }) {
    if (!amount) throw new Error("amount not given");
    if (!profile) throw new Error("profile not given");
    let zr = {
        kind: 9734,
        created_at: Math.round(Date.now() / 1e3),
        content: comment,
        tags: [
            [
                "p",
                profile
            ],
            [
                "amount",
                amount.toString()
            ],
            [
                "relays",
                ...relays
            ]
        ]
    };
    if (event) zr.tags.push([
        "e",
        event
    ]);
    return zr;
}
function $ae886a92a8b497c6$var$validateZapRequest(zapRequestString) {
    let zapRequest;
    try {
        zapRequest = JSON.parse(zapRequestString);
    } catch (err) {
        return "Invalid zap request JSON.";
    }
    if (!$ae886a92a8b497c6$export$d08d852dd562b1ce(zapRequest)) return "Zap request is not a valid Nostr event.";
    if (!$ae886a92a8b497c6$export$ab54e47fdf2903bb(zapRequest)) return "Invalid signature on zap request.";
    let p = zapRequest.tags.find(([t, v])=>t === "p" && v);
    if (!p) return "Zap request doesn't have a 'p' tag.";
    if (!p[1].match(/^[a-f0-9]{64}$/)) return "Zap request 'p' tag is not valid hex.";
    let e = zapRequest.tags.find(([t, v])=>t === "e" && v);
    if (e && !e[1].match(/^[a-f0-9]{64}$/)) return "Zap request 'e' tag is not valid hex.";
    let relays = zapRequest.tags.find(([t, v])=>t === "relays" && v);
    if (!relays) return "Zap request doesn't have a 'relays' tag.";
    return null;
}
function $ae886a92a8b497c6$var$makeZapReceipt({ zapRequest: zapRequest, preimage: preimage, bolt11: bolt11, paidAt: paidAt }) {
    let zr = JSON.parse(zapRequest);
    let tagsFromZapRequest = zr.tags.filter(([t])=>t === "e" || t === "p" || t === "a");
    let zap = {
        kind: 9735,
        created_at: Math.round(paidAt.getTime() / 1e3),
        content: "",
        tags: [
            ...tagsFromZapRequest,
            [
                "bolt11",
                bolt11
            ],
            [
                "description",
                zapRequest
            ]
        ]
    };
    if (preimage) zap.tags.push([
        "preimage",
        preimage
    ]);
    return zap;
}
$eebec0a1229b249a$export$eab97d15b1788b8d.hmacSha256Sync = (key, ...msgs)=>(0, $d73a2cf144050a45$exports.hmac)((0, $b5280835b16caf32$exports.sha256), key, $eebec0a1229b249a$export$eab97d15b1788b8d.concatBytes(...msgs));
$eebec0a1229b249a$export$eab97d15b1788b8d.sha256Sync = (...msgs)=>(0, $b5280835b16caf32$exports.sha256)($eebec0a1229b249a$export$eab97d15b1788b8d.concatBytes(...msgs));


const $13e8be8e63ffb062$export$f75d0b121ef370b1 = (npub)=>(0, $ae886a92a8b497c6$export$10660ae21dbef115).decode(npub).data;
const $13e8be8e63ffb062$var$decodeNip19Entity = (nip19Entity)=>(0, $ae886a92a8b497c6$export$10660ae21dbef115).decode(nip19Entity).data;
let $13e8be8e63ffb062$var$cachedProfileMetadata = {};
const $13e8be8e63ffb062$export$238c7efc413ff216 = async (authorId)=>{
    if ($13e8be8e63ffb062$var$cachedProfileMetadata[authorId]) return $13e8be8e63ffb062$var$cachedProfileMetadata[authorId];
    const pool = new (0, $ae886a92a8b497c6$export$db45add7d1880f0c)();
    const relays = [
        "wss://relay.ditto.pub",
        "wss://purplepag.es",
        "wss://relay.damus.io",
        "wss://nostr.wine"
    ];
    try {
        return await pool.get(relays, {
            authors: [
                authorId
            ],
            kinds: [
                0
            ]
        });
    } catch (error) {
        throw new Error("failed to fetch user profile :(");
    } finally{
        pool.close(relays);
    }
};
const $13e8be8e63ffb062$export$a12b2cb2bfc97800 = (profileMetadata)=>JSON.parse(profileMetadata.content);
const $13e8be8e63ffb062$export$3d19459af3df635a = async (profileMetadata)=>{
    const zapEndpoint = await (0, $ae886a92a8b497c6$export$14e0982e3a536e29).getZapEndpoint(profileMetadata);
    if (!zapEndpoint) throw new Error("failed to retrieve zap endpoint :(");
    return zapEndpoint;
};
const $13e8be8e63ffb062$var$signEvent = async (zapEvent, anon)=>{
    const wantsExtension = $13e8be8e63ffb062$export$ce517a111590bc8e() && !anon;
    if (wantsExtension) try {
        return {
            signedEvent: await window.nostr.signEvent(zapEvent),
            signedAnonymously: false,
            usedAnonymousFallback: false
        };
    } catch (e) {
    // Extension prompt declined or failed — fall back to anonymous signing.
    }
    if (!zapEvent.tags.some((tag)=>tag[0] === "anon")) zapEvent.tags.push([
        "anon"
    ]);
    return {
        signedEvent: (0, $ae886a92a8b497c6$export$ba1b4a5137924b04)(zapEvent, (0, $ae886a92a8b497c6$export$38f4f9e52b1651a4)()),
        signedAnonymously: true,
        usedAnonymousFallback: wantsExtension
    };
};
const $13e8be8e63ffb062$var$makeZapEvent = async ({ profile: profile, nip19Target: nip19Target, amount: amount, relays: relays, comment: comment, anon: anon })=>{
    const zapEvent = (0, $ae886a92a8b497c6$export$14e0982e3a536e29).makeZapRequest({
        profile: profile,
        event: nip19Target && nip19Target.startsWith("note") ? $13e8be8e63ffb062$var$decodeNip19Entity(nip19Target) : undefined,
        amount: amount,
        relays: relays,
        comment: comment
    });
    const naddrData = nip19Target && nip19Target.startsWith("naddr") ? $13e8be8e63ffb062$var$decodeNip19Entity(nip19Target) : undefined;
    if (naddrData) {
        const relays = naddrData.relays ? naddrData.relays.reduce((acc, r)=>`${r},${acc}`, "") : "";
        zapEvent.tags.push([
            "a",
            `${naddrData.kind}:${naddrData.pubkey}:${naddrData.identifier}`,
            relays
        ]);
    }
    // Prefer the anon tag before the first sign attempt when anonymity is intentional.
    if (!$13e8be8e63ffb062$export$ce517a111590bc8e() || anon) zapEvent.tags.push([
        "anon"
    ]);
    return $13e8be8e63ffb062$var$signEvent(zapEvent, anon);
};
const $13e8be8e63ffb062$export$16630ab37b92a682 = async ({ zapEndpoint: zapEndpoint, amount: amount, comment: comment, authorId: authorId, nip19Target: nip19Target, normalizedRelays: normalizedRelays, anon: anon })=>{
    const { signedEvent: signedEvent, signedAnonymously: signedAnonymously, usedAnonymousFallback: usedAnonymousFallback } = await $13e8be8e63ffb062$var$makeZapEvent({
        profile: authorId,
        nip19Target: nip19Target,
        amount: amount,
        relays: normalizedRelays,
        comment: comment,
        anon: anon
    });
    let url = `${zapEndpoint}?amount=${amount}&nostr=${encodeURIComponent(JSON.stringify(signedEvent))}`;
    if (comment) url = `${url}&comment=${encodeURIComponent(comment)}`;
    const res = await fetch(url);
    const { pr: invoice, reason: reason, status: status } = await res.json();
    if (invoice) return {
        invoice: invoice,
        signedAnonymously: signedAnonymously,
        usedAnonymousFallback: usedAnonymousFallback
    };
    else if (status === "ERROR") throw new Error(reason ?? "Unable to fetch invoice");
    else throw new Error("Unable to fetch invoice");
};
const $13e8be8e63ffb062$export$ce517a111590bc8e = ()=>{
    return window !== undefined && window.nostr !== undefined;
};
const $13e8be8e63ffb062$export$554ff54ec5b056e7 = ({ relays: relays, invoice: invoice, onSuccess: onSuccess, recipientPubkey: recipientPubkey })=>{
    const pool = new (0, $ae886a92a8b497c6$export$db45add7d1880f0c)();
    const normalizedRelays = Array.from(new Set([
        ...relays,
        "wss://relay.ditto.pub"
    ]));
    const since = Math.round(Date.now() / 1000);
    let closed = false;
    let sub = null;
    let intervalId = null;
    const cleanup = ()=>{
        if (closed) return;
        closed = true;
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        if (sub) {
            sub.unsub();
            sub = null;
        }
        pool.close(normalizedRelays);
    };
    const filter = {
        kinds: [
            9735
        ],
        since: since
    };
    if (recipientPubkey) filter["#p"] = [
        recipientPubkey
    ];
    // Resubscribe periodically so dropped relay sockets reconnect and the
    // invoice dialog can still close after a successful payment.
    const subscribe = ()=>{
        if (closed) return;
        if (sub) {
            sub.unsub();
            sub = null;
        }
        sub = pool.sub(normalizedRelays, [
            filter
        ]);
        sub.on("event", (event)=>{
            if (closed) return;
            if (event.tags.find((t)=>t[0] === "bolt11" && t[1] === invoice)) {
                onSuccess();
                cleanup();
            }
        });
    };
    subscribe();
    intervalId = setInterval(subscribe, 5000);
    return cleanup;
};


const $ec69506f2f32e88e$var$CACHE_PREFIX = "nostrZap.";
const $ec69506f2f32e88e$var$LIGHTNING_URI_KEY = "lightningUri";
const $ec69506f2f32e88e$var$isLocalStorageAvailable = ()=>typeof localStorage !== "undefined";
const $ec69506f2f32e88e$var$getCachedValue = (key)=>{
    if (!$ec69506f2f32e88e$var$isLocalStorageAvailable()) return;
    return localStorage.getItem(`${$ec69506f2f32e88e$var$CACHE_PREFIX}${key}`);
};
const $ec69506f2f32e88e$var$setCachedValue = (key, value)=>{
    if (!$ec69506f2f32e88e$var$isLocalStorageAvailable()) return;
    localStorage.setItem(`${$ec69506f2f32e88e$var$CACHE_PREFIX}${key}`, value);
};
const $ec69506f2f32e88e$export$31aa9de2043a63be = ()=>$ec69506f2f32e88e$var$getCachedValue($ec69506f2f32e88e$var$LIGHTNING_URI_KEY);
const $ec69506f2f32e88e$export$d01920d2567d4232 = (value)=>$ec69506f2f32e88e$var$setCachedValue($ec69506f2f32e88e$var$LIGHTNING_URI_KEY, value);


let $ba417727cf57ac1f$var$shadow = null;
const $ba417727cf57ac1f$var$escapeHtml = (value)=>String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const $ba417727cf57ac1f$var$isSafeHttpUrl = (value)=>{
    try {
        const { protocol: protocol } = new URL(value);
        return protocol === "https:" || protocol === "http:";
    } catch  {
        return false;
    }
};
// Prefer lud16; otherwise show the callback host so users can see where the zap request goes.
const $ba417727cf57ac1f$var$getZapDestinationLabel = (profileContent, zapEndpoint)=>{
    if (profileContent?.lud16 && typeof profileContent.lud16 === "string") return profileContent.lud16;
    try {
        return new URL(zapEndpoint).host;
    } catch  {
        return zapEndpoint;
    }
};
// Only allow #RGB / #RRGGBB so values cannot break out of inline styles.
const $ba417727cf57ac1f$var$normalizeButtonColor = (value)=>{
    if (typeof value !== "string") return null;
    const hex = value.trim();
    return /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex) ? hex : null;
};
const $ba417727cf57ac1f$var$hexToRgb = (hex)=>{
    hex = hex.replace(/^#/, "");
    if (hex.length === 3) hex = hex.split("").map((char)=>char + char).join("");
    const bigint = parseInt(hex, 16);
    const r = bigint >> 16 & 255;
    const g = bigint >> 8 & 255;
    const b = bigint & 255;
    return {
        r: r,
        g: g,
        b: b
    };
};
const $ba417727cf57ac1f$var$getBrightness = ({ r: r, g: g, b: b })=>{
    return (r * 299 + g * 587 + b * 114) / 1000;
};
const $ba417727cf57ac1f$var$getContrastingTextColor = (hex)=>{
    const rgb = $ba417727cf57ac1f$var$hexToRgb(hex);
    const brightness = $ba417727cf57ac1f$var$getBrightness(rgb);
    return brightness < 128 ? "#fff" : "#000";
};
const $ba417727cf57ac1f$var$renderDialog = (htmlStrTemplate)=>{
    const dialog = document.createElement("dialog");
    dialog.classList.add("nostr-zap-dialog");
    dialog.innerHTML = htmlStrTemplate;
    // close dialog on backdrop click
    dialog.addEventListener("click", function({ clientX: clientX, clientY: clientY }) {
        const { left: left, right: right, top: top, bottom: bottom } = dialog.getBoundingClientRect();
        if (clientX === 0 && clientY === 0) return;
        if (clientX < left || clientX > right || clientY < top || clientY > bottom) dialog.close();
    });
    $ba417727cf57ac1f$export$1ab5838465dbd10a();
    $ba417727cf57ac1f$var$shadow.appendChild(dialog);
    return dialog;
};
const $ba417727cf57ac1f$var$anonymousFallbackNoticeHtml = (pastTense = false)=>`<p class="zap-anon-notice">Extension signing was declined or failed. This zap ${pastTense ? "was" : "will be"} sent anonymously.</p>`;
const $ba417727cf57ac1f$var$renderAnonymousFallbackNoticeDialog = ()=>{
    const noticeDialog = $ba417727cf57ac1f$var$renderDialog(`
    <button class="close-button">X</button>
    ${$ba417727cf57ac1f$var$anonymousFallbackNoticeHtml(true)}
    <button class="cta-button">OK</button>
  `);
    noticeDialog.addEventListener("close", function() {
        noticeDialog.remove();
    });
    noticeDialog.querySelector(".close-button").addEventListener("click", function() {
        noticeDialog.close();
    });
    noticeDialog.querySelector(".cta-button").addEventListener("click", function() {
        noticeDialog.close();
    });
    return noticeDialog;
};
const $ba417727cf57ac1f$var$renderInvoiceDialog = ({ dialogHeader: dialogHeader, invoice: invoice, relays: relays, buttonColor: buttonColor, usedAnonymousFallback: usedAnonymousFallback, recipientPubkey: recipientPubkey })=>{
    const cachedLightningUri = (0, $ec69506f2f32e88e$export$31aa9de2043a63be)();
    const safeButtonColor = $ba417727cf57ac1f$var$normalizeButtonColor(buttonColor);
    const anonymousNotice = usedAnonymousFallback ? $ba417727cf57ac1f$var$anonymousFallbackNoticeHtml() : "";
    const options = [
        {
            label: "Default Wallet",
            value: "lightning:"
        },
        {
            label: "Strike",
            value: "strike:lightning:"
        },
        {
            label: "Cash App",
            value: "https://cash.app/launch/lightning/"
        },
        {
            label: "Muun",
            value: "muun:"
        },
        {
            label: "Blue Wallet",
            value: "bluewallet:lightning:"
        },
        {
            label: "Wallet of Satoshi",
            value: "walletofsatoshi:lightning:"
        },
        {
            label: "Zebedee",
            value: "zebedee:lightning:"
        },
        {
            label: "Zeus LN",
            value: "zeusln:lightning:"
        },
        {
            label: "Phoenix",
            value: "phoenix://"
        },
        {
            label: "Breez",
            value: "breez:"
        },
        {
            label: "Bitcoin Beach",
            value: "bitcoinbeach://"
        },
        {
            label: "Blixt",
            value: "blixtwallet:lightning:"
        },
        {
            label: "River",
            value: "river://"
        }
    ];
    const invoiceDialog = $ba417727cf57ac1f$var$renderDialog(`
        <button class="close-button">X</button>
        ${dialogHeader}
        ${anonymousNotice}
        <div class="qrcode">
          <div class="overlay">copied invoice to clipboard</div>
        </div>
        <p>click QR code to copy invoice</p>
        <select name="lightning-wallet">
          ${options.map(({ label: label, value: value })=>`<option value="${value}" ${cachedLightningUri === value ? "selected" : ""}>${label}</option>`).join("")}
        </select>
        <button class="cta-button"
          ${safeButtonColor ? `style="background-color: ${safeButtonColor}; color: ${$ba417727cf57ac1f$var$getContrastingTextColor(safeButtonColor)}"` : ""} 
        >Open Wallet</button>
      `);
    const qrCodeEl = invoiceDialog.querySelector(".qrcode");
    const lightningWalletEl = invoiceDialog.querySelector('select[name="lightning-wallet"]');
    const ctaButtonEl = invoiceDialog.querySelector(".cta-button");
    const overlayEl = qrCodeEl.querySelector(".overlay");
    const closePool = (0, $13e8be8e63ffb062$export$554ff54ec5b056e7)({
        relays: relays,
        invoice: invoice,
        recipientPubkey: recipientPubkey,
        onSuccess: ()=>{
            invoiceDialog.close();
        }
    });
    new (0, (/*@__PURE__*/$parcel$interopDefault($58QMB)))(qrCodeEl, {
        text: invoice,
        quietZone: 10
    });
    qrCodeEl.addEventListener("click", function() {
        navigator.clipboard.writeText(invoice);
        overlayEl.classList.add("show");
        setTimeout(()=>overlayEl.classList.remove("show"), 2000);
    });
    ctaButtonEl.addEventListener("click", function() {
        (0, $ec69506f2f32e88e$export$d01920d2567d4232)(lightningWalletEl.value);
        window.location.href = `${lightningWalletEl.value}${invoice}`;
    });
    invoiceDialog.addEventListener("close", function() {
        closePool();
        invoiceDialog.remove();
    });
    invoiceDialog.querySelector(".close-button").addEventListener("click", function() {
        invoiceDialog.close();
    });
    return invoiceDialog;
};
const $ba417727cf57ac1f$var$renderAmountDialog = async ({ npub: npub, nip19Target: nip19Target, relays: relays, buttonColor: buttonColor, anon: anon })=>{
    const truncateNip19Entity = (hex)=>`${hex.substring(0, 12)}...${hex.substring(hex.length - 12)}`;
    const normalizedRelays = relays ? relays.split(",") : [
        "wss://relay.ditto.pub",
        "wss://relay.damus.io",
        "wss://nos.lol"
    ];
    const authorId = (0, $13e8be8e63ffb062$export$f75d0b121ef370b1)(npub);
    const metadataPromise = (0, $13e8be8e63ffb062$export$238c7efc413ff216)(authorId);
    const zapEndpoint = metadataPromise.then((0, $13e8be8e63ffb062$export$3d19459af3df635a));
    const safeButtonColor = $ba417727cf57ac1f$var$normalizeButtonColor(buttonColor);
    const nostrichAvatar = "https://pbs.twimg.com/profile_images/1604195803748306944/LxHDoJ7P_400x400.jpg";
    const getDialogHeader = async ()=>{
        const [profileMetadata, endpoint] = await Promise.all([
            metadataPromise,
            zapEndpoint
        ]);
        const profileContent = (0, $13e8be8e63ffb062$export$a12b2cb2bfc97800)(profileMetadata);
        const { picture: picture, display_name: display_name, name: name } = profileContent;
        const userAvatar = picture && $ba417727cf57ac1f$var$isSafeHttpUrl(picture) ? picture : nostrichAvatar;
        const displayName = $ba417727cf57ac1f$var$escapeHtml(display_name || name || "");
        const avatarUrl = $ba417727cf57ac1f$var$escapeHtml(userAvatar);
        const destination = $ba417727cf57ac1f$var$escapeHtml($ba417727cf57ac1f$var$getZapDestinationLabel(profileContent, endpoint));
        const targetLabel = $ba417727cf57ac1f$var$escapeHtml(nip19Target ? truncateNip19Entity(nip19Target) : truncateNip19Entity(npub));
        return `
      <h2>${displayName}</h2>
        <img
          src="${avatarUrl}"
          width="80"
          height="80"
          alt="nostr user avatar"
        />
      <p class="zap-destination">${destination}</p>
      <p>${targetLabel}</p>
    `;
    };
    const amountDialog = $ba417727cf57ac1f$var$renderDialog(`
      <button class="close-button">X</button>
      <div class="dialog-header-container">
        <h2 class="skeleton-placeholder"></h2>
          <img
            src="${nostrichAvatar}"
            width="80"
            height="80"
            alt="placeholder avatar"
          />
        <p class="skeleton-placeholder"></p>
      </div>
      <div class="preset-zap-options-container">
        <button data-value="21">21 \u{26A1}\u{FE0F}</button>
        <button data-value="69">69 \u{26A1}\u{FE0F}</button>
        <button data-value="420">420 \u{26A1}\u{FE0F}</button>
        <button data-value="1337">1337 \u{26A1}\u{FE0F}</button>
        <button data-value="5000">5k \u{26A1}\u{FE0F}</button>
        <button data-value="10000">10k \u{26A1}\u{FE0F}</button>
        <button data-value="21000">21k \u{26A1}\u{FE0F}</button>
        <button data-value="1000000">1M \u{26A1}\u{FE0F}</button>
      </div>
      <form>
        <input name="amount" type="number" placeholder="amount in sats" required />
        <input name="comment" placeholder="optional comment" />
        <button class="cta-button" 
          ${safeButtonColor ? `style="background-color: ${safeButtonColor}; color: ${$ba417727cf57ac1f$var$getContrastingTextColor(safeButtonColor)}"` : ""} 
          type="submit" disabled>Zap</button>
      </form>
    `);
    const presetButtonsContainer = amountDialog.querySelector(".preset-zap-options-container");
    const form = amountDialog.querySelector("form");
    const amountInput = amountDialog.querySelector('input[name="amount"]');
    const commentInput = amountDialog.querySelector('input[name="comment"]');
    const zapButtton = amountDialog.querySelector('button[type="submit"]');
    const dialogHeaderContainer = amountDialog.querySelector(".dialog-header-container");
    const handleError = (error)=>{
        amountDialog.close();
        const errorDialog = $ba417727cf57ac1f$var$renderErrorDialog(error, npub);
        errorDialog.showModal();
    };
    getDialogHeader().then((htmlString)=>{
        dialogHeaderContainer.innerHTML = htmlString;
        zapButtton.disabled = false;
    }).catch(handleError);
    const setZapButtonToLoadingState = ()=>{
        zapButtton.disabled = true;
        zapButtton.innerHTML = `<div class="spinner">Loading</div>`;
    };
    const setZapButtonToDefaultState = ()=>{
        zapButtton.disabled = false;
        zapButtton.innerHTML = "Zap";
    };
    const setAmountValue = (value)=>{
        amountInput.value = value;
    };
    amountDialog.addEventListener("close", function() {
        setZapButtonToDefaultState();
        form.reset();
    });
    amountDialog.querySelector(".close-button").addEventListener("click", function() {
        amountDialog.close();
    });
    presetButtonsContainer.addEventListener("click", function(event) {
        if (event.target.matches("button")) {
            setAmountValue(event.target.getAttribute("data-value"));
            amountInput.focus();
        }
    });
    form.addEventListener("submit", async function(event) {
        event.preventDefault();
        setZapButtonToLoadingState();
        const amount = Number(amountInput.value) * 1000;
        const comment = commentInput.value;
        try {
            const { invoice: invoice, usedAnonymousFallback: usedAnonymousFallback } = await (0, $13e8be8e63ffb062$export$16630ab37b92a682)({
                zapEndpoint: await zapEndpoint,
                amount: amount,
                comment: comment,
                authorId: authorId,
                nip19Target: nip19Target,
                normalizedRelays: normalizedRelays,
                anon: anon
            });
            const showInvoiceDialog = async ()=>{
                const invoiceDialog = $ba417727cf57ac1f$var$renderInvoiceDialog({
                    dialogHeader: await getDialogHeader(),
                    invoice: invoice,
                    relays: normalizedRelays,
                    buttonColor: safeButtonColor,
                    usedAnonymousFallback: usedAnonymousFallback,
                    recipientPubkey: authorId
                });
                const openWalletButton = invoiceDialog.querySelector(".cta-button");
                amountDialog.close();
                invoiceDialog.showModal();
                openWalletButton.focus();
            };
            if (window.webln) try {
                await window.webln.enable();
                await window.webln.sendPayment(invoice);
                amountDialog.close();
                if (usedAnonymousFallback) {
                    const noticeDialog = $ba417727cf57ac1f$var$renderAnonymousFallbackNoticeDialog();
                    noticeDialog.showModal();
                    noticeDialog.querySelector(".cta-button").focus();
                }
            } catch (e) {
                showInvoiceDialog();
            }
            else showInvoiceDialog();
        } catch (error) {
            handleError(error);
        }
    });
    return amountDialog;
};
const $ba417727cf57ac1f$var$renderErrorDialog = (error, npub)=>{
    const message = $ba417727cf57ac1f$var$escapeHtml(error instanceof Error ? error.message : String(error ?? "Something went wrong"));
    const profileNpub = encodeURIComponent(String(npub ?? ""));
    const errorDialog = $ba417727cf57ac1f$var$renderDialog(`
    <button class="close-button">X</button>
    <p class="error-message">${message}</p>
    <a href="https://nosta.me/${profileNpub}" target="_blank" rel="noopener noreferrer">
      <button class="cta-button">View Nostr Profile</button>
    </a>
  `);
    errorDialog.addEventListener("close", function() {
        errorDialog.remove();
    });
    errorDialog.querySelector(".close-button").addEventListener("click", function() {
        errorDialog.close();
    });
    return errorDialog;
};
const $ba417727cf57ac1f$export$2cd8252107eb640b = async ({ npub: npub, noteId: noteId, naddr: naddr, relays: relays, cachedAmountDialog: cachedAmountDialog, buttonColor: buttonColor, anon: anon })=>{
    let amountDialog = cachedAmountDialog;
    try {
        if (!amountDialog) amountDialog = await $ba417727cf57ac1f$var$renderAmountDialog({
            npub: npub,
            nip19Target: naddr ? naddr : noteId,
            relays: relays,
            buttonColor: buttonColor,
            anon: anon
        });
        amountDialog.showModal();
        if (!window.matchMedia("(max-height: 932px)").matches) amountDialog.querySelector('input[name="amount"]').focus();
        return amountDialog;
    } catch (error) {
        if (amountDialog) amountDialog.close();
        const errorDialog = $ba417727cf57ac1f$var$renderErrorDialog(error, npub);
        errorDialog.showModal();
    }
};
const $ba417727cf57ac1f$export$5ad548900f15d3e4 = (targetEl)=>{
    let cachedAmountDialog = null;
    let cachedParams = null;
    targetEl.addEventListener("click", async function() {
        const npub = targetEl.getAttribute("data-npub");
        const noteId = targetEl.getAttribute("data-note-id");
        const naddr = targetEl.getAttribute("data-naddr");
        const relays = targetEl.getAttribute("data-relays");
        const buttonColor = targetEl.getAttribute("data-button-color");
        const anon = targetEl.getAttribute("data-anon") === "true";
        if (cachedParams) {
            if (cachedParams.npub !== npub || cachedParams.noteId !== noteId || cachedParams.naddr !== naddr || cachedParams.relays !== relays || cachedParams.buttonColor !== buttonColor || cachedParams.anon !== anon) cachedAmountDialog = null;
        }
        cachedParams = {
            npub: npub,
            noteId: noteId,
            naddr: naddr,
            relays: relays,
            buttonColor: buttonColor,
            anon: anon
        };
        cachedAmountDialog = await $ba417727cf57ac1f$export$2cd8252107eb640b({
            npub: npub,
            noteId: noteId,
            naddr: naddr,
            relays: relays,
            cachedAmountDialog: cachedAmountDialog,
            buttonColor: buttonColor,
            anon: anon
        });
    });
};
const $ba417727cf57ac1f$export$ddb6d5b8ac50fa3b = (selector)=>{
    document.querySelectorAll(selector || "[data-npub]").forEach($ba417727cf57ac1f$export$5ad548900f15d3e4);
};
const $ba417727cf57ac1f$export$1ab5838465dbd10a = ()=>{
    if ($ba417727cf57ac1f$var$shadow) return;
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
      .nostr-zap-dialog {
        width: 424px;
        min-width: 376px;
        margin: auto;
        box-sizing: content-box;
        border: none;
        border-radius: 10px;
        padding: 36px;
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        background-color: white;
      }
      .nostr-zap-dialog[open],
      .nostr-zap-dialog form {
        display: block;
        max-width: fit-content;
      }
      .nostr-zap-dialog form {
        padding: 0;
        width: 100%;
      }
      .nostr-zap-dialog img {
        display: inline;
        border-radius: 50%;
      }
      .nostr-zap-dialog h2 {
        font-size: 1.5em;
        font-weight: bold;
        color: black;
      }
      .nostr-zap-dialog p {
        font-size: 1em;
        font-weight: normal;
        color: black;
      }
      .nostr-zap-dialog h2,
      .nostr-zap-dialog p,
      .nostr-zap-dialog .skeleton-placeholder {
        margin: 4px;
        word-wrap: break-word;
      }
      .nostr-zap-dialog button {
        background-color: inherit;
        padding: 12px 0;
        border-radius: 5px;
        border: none;
        font-size: 16px;
        cursor: pointer;
        border: 1px solid rgb(226, 232, 240);
        width: 100px;
        max-width: 100px;
        max-height: 52px;
        white-space: nowrap;
        color: black;
        box-sizing: border-box;
      }
      .nostr-zap-dialog button:hover {
        background-color: #edf2f7;
      }
      .nostr-zap-dialog button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .nostr-zap-dialog .cta-button {
        background-color: #7f00ff;
        color: #fff;
        width: 100%;
        max-width: 100%;
        margin-top: 16px;
      }
      .nostr-zap-dialog .cta-button:hover {
        background-color: indigo;
      }
      .nostr-zap-dialog .close-button {
        background-color: inherit;
        color: black;
        border-radius: 50%;
        width: 42px;
        height: 42px;
        position: absolute;
        top: 8px;
        right: 8px;
        padding: 12px;
        border: none;
      }
      .nostr-zap-dialog .preset-zap-options-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 24px 0 8px 0;
        height: 120px;
      }
      .nostr-zap-dialog input {
        padding: 12px;
        border-radius: 5px;
        border: none;
        font-size: 16px;
        width: 100%;
        max-width: 100%;
        background-color: #f7fafc;
        color: #1a202c;
        box-shadow: none;
        box-sizing: border-box;
        margin-bottom: 16px;
        border: 1px solid lightgray;
      }
      .nostr-zap-dialog .spinner {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .nostr-zap-dialog .spinner:after {
        content: " ";
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 4px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: nostr-zap-dialog-spinner 1.2s linear infinite;
        margin-left: 8px;
      }
      .nostr-zap-dialog .error-message {
        text-align: left;
        color: red;
        margin-top: 8px;
      }
      .nostr-zap-dialog .zap-destination {
        font-size: 0.875em;
        color: #4a5568;
        margin: 4px;
        word-break: break-word;
      }
      .nostr-zap-dialog .zap-anon-notice {
        font-size: 0.875em;
        color: #744210;
        margin: 8px 0 0 0;
        word-break: break-word;
      }
      .nostr-zap-dialog .qrcode {
        position: relative;
        display: inline-block;
        margin-top: 24px;
      }
      .nostr-zap-dialog .qrcode .overlay {
        position: absolute;
        color: white;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(127, 17, 224, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
      }
      .nostr-zap-dialog .qrcode .overlay.show {
        opacity: 1;
      }
      @keyframes nostr-zap-dialog-spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      @keyframes nostr-zap-dialog-skeleton-pulse {
        0% {
          opacity: 0.6;
        }
        50% {
          opacity: 0.8;
        }
        100% {
          opacity: 0.6;
        }
      }
      .nostr-zap-dialog .skeleton-placeholder {
        animation-name: nostr-zap-dialog-skeleton-pulse;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        background-color: #e8e8e8;
        border-radius: 4px;
        margin: 4px auto;
      }
      .nostr-zap-dialog p.skeleton-placeholder {
        height: 20px;
        width: 200px;
      }
      .nostr-zap-dialog h2.skeleton-placeholder {
        height: 28px;
        width: 300px;
      }
      .nostr-zap-dialog select[name="lightning-wallet"] {
        appearance: none;
        background-color: white;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%232D3748" width="24" height="24" viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /></svg>');
        background-repeat: no-repeat;
        background-position: right 0.7rem center;
        background-size: 16px;
        border: 1px solid #CBD5E0;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border-radius: 0.25rem;
        width: 100%;
        margin-top: 24px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        cursor: pointer;
      }
      .nostr-zap-dialog select[name="lightning-wallet"]:focus {
        outline: none;
        border-color: #4FD1C5;
        box-shadow: 0 0 0 2px #4FD1C5;
      }
      @media only screen and (max-width: 480px) {
        .nostr-zap-dialog {
          padding: 18px;
        }

        .nostr-zap-dialog button {
          width: 92px;
          max-width: 92px;
        }
      }
      @media only screen and (max-width: 413px) {
        .nostr-zap-dialog {
          min-width: 324px;
        }
        .nostr-zap-dialog button {
          width: 78px;
          max-width: 78px;
        }
      }
  `;
    const host = document.createElement("div");
    document.body.appendChild(host);
    $ba417727cf57ac1f$var$shadow = host.attachShadow({
        mode: "closed"
    });
    $ba417727cf57ac1f$var$shadow.appendChild(styleElement);
};


// Wait for <body> before mounting the shadow host. Scripts loaded from a CDN
// in <head> (common with unpkg/jsdelivr) otherwise crash with:
// Cannot read properties of null (reading 'appendChild')
const $2776a60caf88deef$var$boot = ()=>{
    (0, $ba417727cf57ac1f$export$1ab5838465dbd10a)();
    (0, $ba417727cf57ac1f$export$ddb6d5b8ac50fa3b)();
};
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", $2776a60caf88deef$var$boot);
else $2776a60caf88deef$var$boot();
window.nostrZap = {
    init: $ba417727cf57ac1f$export$2cd8252107eb640b,
    initTarget: $ba417727cf57ac1f$export$5ad548900f15d3e4,
    initTargets: $ba417727cf57ac1f$export$ddb6d5b8ac50fa3b
};


//# sourceMappingURL=main.js.map
