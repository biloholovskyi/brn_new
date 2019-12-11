!function(n){var e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(i,r,function(e){return n[e]}.bind(null,r));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){var i=t(1);"string"==typeof i&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1};t(3)(i,r);i.locals&&(n.exports=i.locals)},function(n,e,t){(n.exports=t(2)(!1)).push([n.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var r=(o=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),a=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot).concat(n," */")}));return[t].concat(a).concat([r]).join("\n")}var o,s,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var o=0;o<n.length;o++){var s=n[o];null!=s[0]&&i[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),e.push(s))}},e}},function(n,e,t){"use strict";var i,r={},a=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function s(n,e){for(var t=[],i={},r=0;r<n.length;r++){var a=n[r],o=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};i[o]?i[o].parts.push(s):t.push(i[o]={id:o,parts:[s]})}return t}function l(n,e){for(var t=0;t<n.length;t++){var i=n[t],a=r[i.id],o=0;if(a){for(a.refs++;o<a.parts.length;o++)a.parts[o](i.parts[o]);for(;o<i.parts.length;o++)a.parts.push(v(i.parts[o],e))}else{for(var s=[];o<i.parts.length;o++)s.push(v(i.parts[o],e));r[i.id]={id:i.id,refs:1,parts:s}}}}function c(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var i=t.nc;i&&(n.attributes.nonce=i)}if(Object.keys(n.attributes).forEach((function(t){e.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(e);else{var r=o(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var d,m=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,i){var r=t?"":i.css;if(n.styleSheet)n.styleSheet.cssText=m(e,r);else{var a=document.createTextNode(r),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(a,o[e]):n.appendChild(a)}}function f(n,e,t){var i=t.css,r=t.media,a=t.sourceMap;if(r&&n.setAttribute("media",r),a&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var h=null,p=0;function v(n,e){var t,i,r;if(e.singleton){var a=p++;t=h||(h=c(e)),i=u.bind(null,t,a,!1),r=u.bind(null,t,a,!0)}else t=c(e),i=f.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a());var t=s(n,e);return l(t,e),function(n){for(var i=[],a=0;a<t.length;a++){var o=t[a],c=r[o.id];c&&(c.refs--,i.push(c))}n&&l(s(n,e),e);for(var d=0;d<i.length;d++){var m=i[d];if(0===m.refs){for(var u=0;u<m.parts.length;u++)m.parts[u]();delete r[m.id]}}}}},function(n,e,t){"use strict";t.r(e);t(0);var i=!1,r=function(){if(i)console.log("clicking ing progress...");else{i=!0,$(".main-slider__nav .prev").removeClass("disabled");var n=$(".main-slider__nav .timeline .item"),e=$(".main-slider__nav .timeline .item--active").next(".item");if(e.length>0){var t=$(".main-slider__item");n.removeClass("item--active"),e.addClass("item--active");var r=$(".main-slider__item--current").next(".main-slider__item");t.removeClass("main-slider__item--current"),r.addClass("main-slider__item--current");var a=$(".main-slider__item--active"),o=$(".main-slider__body .active--left"),s=$(".main-slider__body .active--right"),l=a.last().next(".main-slider__item");s.eq(0).removeClass("active--right"),l.length>0&&(l.addClass("main-slider__item--active"),l.addClass("active--right")),$(".main-slider__item--current").prev(".main-slider__item").addClass("main-slider__item--active"),$(".main-slider__item--current").prev(".main-slider__item").addClass("active--left"),o.length>2&&(a.eq(0).removeClass("main-slider__item--active"),a.eq(0).removeClass("active--left"));for(var c=$(window).width()>575?50:25,d=0;d<t.length;d++){var m=t.eq(d),u=m.css("transform").split(",")[4],f=+u-c,h=m.css("transform").split(",")[3],p=+u>0?+h+.1:+h-.1,v=m.css("z-index"),b=+u>0?+v+1:+v-1;m.css({transform:"translateX(".concat(f,"px) scaleY(").concat(p.toFixed(1),")"),"z-index":b})}0===$(".main-slider__nav .timeline .item--active").next(".item").length&&$(".main-slider__nav .next").addClass("disabled")}setTimeout((function(){i=!1}),700)}},a=function(){if(i)console.log("clicking ing progress...");else{i=!0,$(".main-slider__nav .next").removeClass("disabled");var n=$(".main-slider__nav .timeline .item"),e=$(".main-slider__nav .timeline .item--active").prev(".item");if(e.length>0){var t=$(".main-slider__item");n.removeClass("item--active"),e.addClass("item--active");var r=$(".main-slider__item--current").prev(".main-slider__item");t.removeClass("main-slider__item--current"),r.addClass("main-slider__item--current");var a=$(".main-slider__item--active"),o=$(".main-slider__body .active--left"),s=$(".main-slider__body .active--right"),l=a.eq(0).prev(".main-slider__item");o.last().removeClass("active--left"),l.length>0&&(l.addClass("main-slider__item--active"),l.addClass("active--left")),$(".main-slider__item--current").next(".main-slider__item").addClass("main-slider__item--active"),$(".main-slider__item--current").next(".main-slider__item").addClass("active--right"),s.length>2&&(a.last().removeClass("main-slider__item--active"),a.last().removeClass("active--right"));for(var c=$(window).width()>575?50:25,d=0;d<t.length;d++){var m=t.eq(d),u=m.css("transform").split(",")[4],f=+u+c,h=m.css("transform").split(",")[3],p=+u<0?+h+.1:+h-.1,v=m.css("z-index"),b=+u<0?+v+1:+v-1;m.css({transform:"translateX(".concat(f,"px) scaleY(").concat(p.toFixed(1),")"),"z-index":b})}0===$(".main-slider__nav .timeline .item--active").prev(".item").length&&$(".main-slider__nav .prev").addClass("disabled")}setTimeout((function(){i=!1}),700)}},o=function(){var n=$(".main-block__box .item").eq(0).width();$(".main-block__box .item").css("height",n+"px"),$(".stocks").css("padding-top",n+"px")},s=function(){var n=$(".main-block__slider__nav .item"),e=$(".main-block__bg");n.removeClass("item--active"),e.removeClass("main-block__bg--active"),$(event.currentTarget).addClass("item--active"),e.eq($(event.currentTarget).index()).addClass("main-block__bg--active")},l=function(){$(event.currentTarget).toggleClass("header__humb--show"),$(event.currentTarget).hasClass("header__humb--show")?$(".header__modal-menu").fadeIn("fast"):$(".header__modal-menu").fadeOut("fast")};$(document).ready((function(){!function(){for(var n=$(".main-slider__item"),e=0;e<n.length;e++){var t=e*($(window).width()>575?50:25),i=n.length+1-e,r=1-.1*e;n.eq(e).css({transform:"translateX(".concat(t,"px) scaleY(").concat(r,")"),"z-index":i})}}(),o(),$(".main-slider__nav .next").on("click",r),$(".main-slider__nav .prev").on("click",a),$(".main-block__slider__nav .item").on("click",s),$(".header__humb").on("click",l)})),$(window).resize((function(){o()})),$("body").on("click",(function(n){$(".header__humb, .header__humb .item").is(n.target)||($(".header__humb").removeClass("header__humb--show"),$(".header__modal-menu").fadeOut("fast"))}))}]);