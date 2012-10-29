/*
 * adt-svg.js - Treat SVG like any old Algebraic Data Type
 * adt-svg.js is free, public domain software (http://creativecommons.org/publicdomain/zero/1.0/)
 * Originally created by Rehno Lindeque of http://www.mischievousmeerkat.com
 * Use it in combination with https://github.com/rehno-lindeque/adt.js
 */
var adt = adt || (typeof require === 'function'? require('adt.js') : {}), 
svg = (function() {
"use strict";
  // Using the svg (version 1.1) list of tags from (https://developer.mozilla.org/en-US/docs/SVG/Element)
  var
    _cons = adt(
      // Animation elements
      'animate', 'animateColor', 'animateMotion', 'animateTransform', 'set',
      // Basic shapes
      'circle', 'ellipse', 'line', 'polygon', 'polyline', 'rect',
      // Container elements
      'a', 'defs', 'glyph', 'g', 'marker', 'mask', 'missing-glyph', 'pattern',
      'svg', 'switch', 'symbol',
      // Descriptive elements
      'desc', 'metadata', 'title',
      // Filter primitive elements
      'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite',
      'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feFlood',
      'feGaussianBlur', 'feImage', 'feMerge', 'feMorphology', 'feOffset',
      'feSpecularLighting', 'feTile', 'feTurbulence',
      // Gradient elements
      'linearGradient', 'radialGradient',
      // Graphics elements
      'circle', 'ellipse', 'image', 'line', 'path', 'polygon', 'polyline',
      'rect', 'text', 'use',
      // Light source elements
      'feDistantLight', 'fePointLight', 'feSpotLight',
      // Shape elements
      'circle', 'ellipse', 'line', 'path', 'polygon', 'polyline', 'rect',
      // Structural elements
      'defs', 'g', 'svg', 'symbol', 'use',
      // Text content elements
      'altGlyph', 'textPath', 'text', 'tref', 'tspan',
      // Text content child elements
      'altGlyph', 'textPath', 'tref', 'tspan',
      // Uncategorized elements
      'altGlyphDef', 'altGlyphItem', 'clipPath', 'color-profile', 'cursor',
      'filter', 'font', 'font-face', 'font-face-format', 'font-face-name',
      'font-face-src', 'font-face-uri', 'foreignObject', 'glyph', 'glyphRef',
      'hkern', 'mpath', 'script', 'stop', 'style', 'view', 'vkern'
    ),
    _eval = adt({ _: function(attributes) {
        var el = document.createElementNS("http://www.w3.org/2000/svg", this._tag);
        for (var i = 0; i < arguments.length; ++i)
          // Check if the argument is a DOM node
          if (arguments[i].nodeType)
            el.appendChild(arguments[i]);
          else if (typeof arguments[i] === 'string')
            el.appendChild(document.createTextNode(arguments[i]));
        if (typeof attributes === 'object' && typeof attributes.nodeType === 'undefined') {
          for (var key in attributes)
            el.setAttribute(key, attributes[key]);
        }
        return el;
      }
    }),
    svg = (typeof adt.compose === 'undefined')?
      function(){ throw "`adt.compose()` is needed in order to use svg as a function."; }
      : adt.compose(_eval, _cons);
    svg.cons = _cons;
    svg.eval = _eval;
  // Export svg to a CommonJS module if exports is available
  if (typeof module !== "undefined" && module !== null)
    module.exports = svg;
  return svg;
})();
