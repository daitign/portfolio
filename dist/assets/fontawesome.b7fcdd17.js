import{d as Ka,c as P,w as gt,h as Rn}from"./vendor.21195b08.js";function mn(a,n){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),t.push.apply(t,e)}return t}function u(a){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?mn(Object(t),!0).forEach(function(e){z(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):mn(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}function Aa(a){return Aa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Aa(a)}function ht(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function vn(a,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function yt(a,n,t){return n&&vn(a.prototype,n),t&&vn(a,t),Object.defineProperty(a,"prototype",{writable:!1}),a}function z(a,n,t){return n in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}function qa(a,n){return wt(a)||At(a,n)||Dn(a,n)||Ct()}function ca(a){return xt(a)||kt(a)||Dn(a)||zt()}function xt(a){if(Array.isArray(a))return Va(a)}function wt(a){if(Array.isArray(a))return a}function kt(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function At(a,n){var t=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var e=[],r=!0,i=!1,o,s;try{for(t=t.call(a);!(r=(o=t.next()).done)&&(e.push(o.value),!(n&&e.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&t.return!=null&&t.return()}finally{if(i)throw s}}return e}}function Dn(a,n){if(!!a){if(typeof a=="string")return Va(a,n);var t=Object.prototype.toString.call(a).slice(8,-1);if(t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set")return Array.from(a);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Va(a,n)}}function Va(a,n){(n==null||n>a.length)&&(n=a.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=a[t];return e}function zt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ct(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var dn=function(){},Ja={},jn={},$n=null,Yn={mark:dn,measure:dn};try{typeof window<"u"&&(Ja=window),typeof document<"u"&&(jn=document),typeof MutationObserver<"u"&&($n=MutationObserver),typeof performance<"u"&&(Yn=performance)}catch{}var St=Ja.navigator||{},pn=St.userAgent,bn=pn===void 0?"":pn,$=Ja,x=jn,gn=$n,ma=Yn;$.document;var R=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",Un=~bn.indexOf("MSIE")||~bn.indexOf("Trident/"),va,da,pa,ba,ga,T="___FONT_AWESOME___",Fa=16,Bn="fa",Wn="svg-inline--fa",G="data-fa-i2svg",Ra="data-fa-pseudo-element",Mt="data-fa-pseudo-element-pending",Qa="data-prefix",an="data-icon",hn="fontawesome-i2svg",Ot="async",Lt=["HTML","HEAD","STYLE","SCRIPT"],Gn=function(){try{return!0}catch{return!1}}(),y="classic",w="sharp",nn=[y,w];function la(a){return new Proxy(a,{get:function(t,e){return e in t?t[e]:t[y]}})}var ra=la((va={},z(va,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),z(va,w,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),va)),ia=la((da={},z(da,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),z(da,w,{solid:"fass",regular:"fasr",light:"fasl"}),da)),oa=la((pa={},z(pa,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),z(pa,w,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),pa)),Nt=la((ba={},z(ba,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),z(ba,w,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ba)),Pt=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Xn="fa-layers-text",Et=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,It=la((ga={},z(ga,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),z(ga,w,{900:"fass",400:"fasr",300:"fasl"}),ga)),Zn=[1,2,3,4,5,6,7,8,9,10],Ht=Zn.concat([11,12,13,14,15,16,17,18,19,20]),_t=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],B={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},sa=new Set;Object.keys(ia[y]).map(sa.add.bind(sa));Object.keys(ia[w]).map(sa.add.bind(sa));var Tt=[].concat(nn,ca(sa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",B.GROUP,B.SWAP_OPACITY,B.PRIMARY,B.SECONDARY]).concat(Zn.map(function(a){return"".concat(a,"x")})).concat(Ht.map(function(a){return"w-".concat(a)})),na=$.FontAwesomeConfig||{};function Vt(a){var n=x.querySelector("script["+a+"]");if(n)return n.getAttribute(a)}function Ft(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(x&&typeof x.querySelector=="function"){var Rt=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Rt.forEach(function(a){var n=qa(a,2),t=n[0],e=n[1],r=Ft(Vt(t));r!=null&&(na[e]=r)})}var Kn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Bn,replacementClass:Wn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};na.familyPrefix&&(na.cssPrefix=na.familyPrefix);var J=u(u({},Kn),na);J.autoReplaceSvg||(J.observeMutations=!1);var m={};Object.keys(Kn).forEach(function(a){Object.defineProperty(m,a,{enumerable:!0,set:function(t){J[a]=t,ta.forEach(function(e){return e(m)})},get:function(){return J[a]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(n){J.cssPrefix=n,ta.forEach(function(t){return t(m)})},get:function(){return J.cssPrefix}});$.FontAwesomeConfig=m;var ta=[];function Dt(a){return ta.push(a),function(){ta.splice(ta.indexOf(a),1)}}var j=Fa,_={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jt(a){if(!(!a||!R)){var n=x.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=a;for(var t=x.head.childNodes,e=null,r=t.length-1;r>-1;r--){var i=t[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return x.head.insertBefore(n,e),a}}var $t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fa(){for(var a=12,n="";a-- >0;)n+=$t[Math.random()*62|0];return n}function Q(a){for(var n=[],t=(a||[]).length>>>0;t--;)n[t]=a[t];return n}function tn(a){return a.classList?Q(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(n){return n})}function qn(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yt(a){return Object.keys(a||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(qn(a[t]),'" ')},"").trim()}function Oa(a){return Object.keys(a||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(a[t].trim(),";")},"")}function en(a){return a.size!==_.size||a.x!==_.x||a.y!==_.y||a.rotate!==_.rotate||a.flipX||a.flipY}function Ut(a){var n=a.transform,t=a.containerWidth,e=a.iconWidth,r={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:l}}function Bt(a){var n=a.transform,t=a.width,e=t===void 0?Fa:t,r=a.height,i=r===void 0?Fa:r,o=a.startCentered,s=o===void 0?!1:o,f="";return s&&Un?f+="translate(".concat(n.x/j-e/2,"em, ").concat(n.y/j-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/j,"em), calc(-50% + ").concat(n.y/j,"em)) "):f+="translate(".concat(n.x/j,"em, ").concat(n.y/j,"em) "),f+="scale(".concat(n.size/j*(n.flipX?-1:1),", ").concat(n.size/j*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var Wt=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Jn(){var a=Bn,n=Wn,t=m.cssPrefix,e=m.replacementClass,r=Wt;if(t!==a||e!==n){var i=new RegExp("\\.".concat(a,"\\-"),"g"),o=new RegExp("\\--".concat(a,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(e))}return r}var yn=!1;function Ia(){m.autoAddCss&&!yn&&(jt(Jn()),yn=!0)}var Gt={mixout:function(){return{dom:{css:Jn,insertCss:Ia}}},hooks:function(){return{beforeDOMElementCreation:function(){Ia()},beforeI2svg:function(){Ia()}}}},V=$||{};V[T]||(V[T]={});V[T].styles||(V[T].styles={});V[T].hooks||(V[T].hooks={});V[T].shims||(V[T].shims=[]);var I=V[T],Qn=[],Xt=function a(){x.removeEventListener("DOMContentLoaded",a),za=1,Qn.map(function(n){return n()})},za=!1;R&&(za=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),za||x.addEventListener("DOMContentLoaded",Xt));function Zt(a){!R||(za?setTimeout(a,0):Qn.push(a))}function ua(a){var n=a.tag,t=a.attributes,e=t===void 0?{}:t,r=a.children,i=r===void 0?[]:r;return typeof a=="string"?qn(a):"<".concat(n," ").concat(Yt(e),">").concat(i.map(ua).join(""),"</").concat(n,">")}function xn(a,n,t){if(a&&a[n]&&a[n][t])return{prefix:n,iconName:t,icon:a[n][t]}}var Kt=function(n,t){return function(e,r,i,o){return n.call(t,e,r,i,o)}},Ha=function(n,t,e,r){var i=Object.keys(n),o=i.length,s=r!==void 0?Kt(t,r):t,f,l,c;for(e===void 0?(f=1,c=n[i[0]]):(f=0,c=e);f<o;f++)l=i[f],c=s(c,n[l],l,n);return c};function qt(a){for(var n=[],t=0,e=a.length;t<e;){var r=a.charCodeAt(t++);if(r>=55296&&r<=56319&&t<e){var i=a.charCodeAt(t++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),t--)}else n.push(r)}return n}function Da(a){var n=qt(a);return n.length===1?n[0].toString(16):null}function Jt(a,n){var t=a.length,e=a.charCodeAt(n),r;return e>=55296&&e<=56319&&t>n+1&&(r=a.charCodeAt(n+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function wn(a){return Object.keys(a).reduce(function(n,t){var e=a[t],r=!!e.icon;return r?n[e.iconName]=e.icon:n[t]=e,n},{})}function ja(a,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=t.skipHooks,r=e===void 0?!1:e,i=wn(n);typeof I.hooks.addPack=="function"&&!r?I.hooks.addPack(a,wn(n)):I.styles[a]=u(u({},I.styles[a]||{}),i),a==="fas"&&ja("fa",n)}var ha,ya,xa,Z=I.styles,Qt=I.shims,ae=(ha={},z(ha,y,Object.values(oa[y])),z(ha,w,Object.values(oa[w])),ha),rn=null,at={},nt={},tt={},et={},rt={},ne=(ya={},z(ya,y,Object.keys(ra[y])),z(ya,w,Object.keys(ra[w])),ya);function te(a){return~Tt.indexOf(a)}function ee(a,n){var t=n.split("-"),e=t[0],r=t.slice(1).join("-");return e===a&&r!==""&&!te(r)?r:null}var it=function(){var n=function(i){return Ha(Z,function(o,s,f){return o[f]=Ha(s,i,{}),o},{})};at=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),nt=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),rt=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var t="far"in Z||m.autoFetchSvg,e=Ha(Qt,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});tt=e.names,et=e.unicodes,rn=La(m.styleDefault,{family:m.familyDefault})};Dt(function(a){rn=La(a.styleDefault,{family:m.familyDefault})});it();function on(a,n){return(at[a]||{})[n]}function re(a,n){return(nt[a]||{})[n]}function W(a,n){return(rt[a]||{})[n]}function ot(a){return tt[a]||{prefix:null,iconName:null}}function ie(a){var n=et[a],t=on("fas",a);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Y(){return rn}var sn=function(){return{prefix:null,iconName:null,rest:[]}};function La(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,e=t===void 0?y:t,r=ra[e][a],i=ia[e][a]||ia[e][r],o=a in I.styles?a:null;return i||o||null}var kn=(xa={},z(xa,y,Object.keys(oa[y])),z(xa,w,Object.keys(oa[w])),xa);function Na(a){var n,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.skipLookups,r=e===void 0?!1:e,i=(n={},z(n,y,"".concat(m.cssPrefix,"-").concat(y)),z(n,w,"".concat(m.cssPrefix,"-").concat(w)),n),o=null,s=y;(a.includes(i[y])||a.some(function(l){return kn[y].includes(l)}))&&(s=y),(a.includes(i[w])||a.some(function(l){return kn[w].includes(l)}))&&(s=w);var f=a.reduce(function(l,c){var v=ee(m.cssPrefix,c);if(Z[c]?(c=ae[s].includes(c)?Nt[s][c]:c,o=c,l.prefix=c):ne[s].indexOf(c)>-1?(o=c,l.prefix=La(c,{family:s})):v?l.iconName=v:c!==m.replacementClass&&c!==i[y]&&c!==i[w]&&l.rest.push(c),!r&&l.prefix&&l.iconName){var b=o==="fa"?ot(l.iconName):{},g=W(l.prefix,l.iconName);b.prefix&&(o=null),l.iconName=b.iconName||g||l.iconName,l.prefix=b.prefix||l.prefix,l.prefix==="far"&&!Z.far&&Z.fas&&!m.autoFetchSvg&&(l.prefix="fas")}return l},sn());return(a.includes("fa-brands")||a.includes("fab"))&&(f.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===w&&(Z.fass||m.autoFetchSvg)&&(f.prefix="fass",f.iconName=W(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=Y()||"fas"),f}var oe=function(){function a(){ht(this,a),this.definitions={}}return yt(a,[{key:"add",value:function(){for(var t=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){t.definitions[s]=u(u({},t.definitions[s]||{}),o[s]),ja(s,o[s]);var f=oa[y][s];f&&ja(f,o[s]),it()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,l=o.icon,c=l[2];t[s]||(t[s]={}),c.length>0&&c.forEach(function(v){typeof v=="string"&&(t[s][v]=l)}),t[s][f]=l}),t}}]),a}(),An=[],K={},q={},se=Object.keys(q);function fe(a,n){var t=n.mixoutsTo;return An=a,K={},Object.keys(q).forEach(function(e){se.indexOf(e)===-1&&delete q[e]}),An.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(t[o]=r[o]),Aa(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){t[o]||(t[o]={}),t[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){K[o]||(K[o]=[]),K[o].push(i[o])})}e.provides&&e.provides(q)}),t}function $a(a,n){for(var t=arguments.length,e=new Array(t>2?t-2:0),r=2;r<t;r++)e[r-2]=arguments[r];var i=K[a]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(e))}),n}function X(a){for(var n=arguments.length,t=new Array(n>1?n-1:0),e=1;e<n;e++)t[e-1]=arguments[e];var r=K[a]||[];r.forEach(function(i){i.apply(null,t)})}function F(){var a=arguments[0],n=Array.prototype.slice.call(arguments,1);return q[a]?q[a].apply(null,n):void 0}function Ya(a){a.prefix==="fa"&&(a.prefix="fas");var n=a.iconName,t=a.prefix||Y();if(!!n)return n=W(t,n)||n,xn(st.definitions,t,n)||xn(I.styles,t,n)}var st=new oe,ce=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,X("noAuto")},le={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(X("beforeI2svg",n),F("pseudoElements2svg",n),F("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Zt(function(){me({autoReplaceSvgRoot:t}),X("watch",n)})}},ue={icon:function(n){if(n===null)return null;if(Aa(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:W(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],e=La(n[0]);return{prefix:e,iconName:W(e,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(m.cssPrefix,"-"))>-1||n.match(Pt))){var r=Na(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||Y(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=Y();return{prefix:i,iconName:W(i,n)||n}}}},L={noAuto:ce,config:m,dom:le,parse:ue,library:st,findIconDefinition:Ya,toHtml:ua},me=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,e=t===void 0?x:t;(Object.keys(I.styles).length>0||m.autoFetchSvg)&&R&&m.autoReplaceSvg&&L.dom.i2svg({node:e})};function Pa(a,n){return Object.defineProperty(a,"abstract",{get:n}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return ua(e)})}}),Object.defineProperty(a,"node",{get:function(){if(!!R){var e=x.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function ve(a){var n=a.children,t=a.main,e=a.mask,r=a.attributes,i=a.styles,o=a.transform;if(en(o)&&t.found&&!e.found){var s=t.width,f=t.height,l={x:s/f/2,y:.5};r.style=Oa(u(u({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function de(a){var n=a.prefix,t=a.iconName,e=a.children,r=a.attributes,i=a.symbol,o=i===!0?"".concat(n,"-").concat(m.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:e}]}]}function fn(a){var n=a.icons,t=n.main,e=n.mask,r=a.prefix,i=a.iconName,o=a.transform,s=a.symbol,f=a.title,l=a.maskId,c=a.titleId,v=a.extra,b=a.watchable,g=b===void 0?!1:b,C=e.found?e:t,S=C.width,M=C.height,d=r==="fak",p=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(D){return v.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(v.classes).join(" "),h={children:[],attributes:u(u({},v.attributes),{},{"data-prefix":r,"data-icon":i,class:p,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(M)})},k=d&&!~v.classes.indexOf("fa-fw")?{width:"".concat(S/M*16*.0625,"em")}:{};g&&(h.attributes[G]=""),f&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||fa())},children:[f]}),delete h.attributes.title);var A=u(u({},h),{},{prefix:r,iconName:i,main:t,mask:e,maskId:l,transform:o,symbol:s,styles:u(u({},k),v.styles)}),H=e.found&&t.found?F("generateAbstractMask",A)||{children:[],attributes:{}}:F("generateAbstractIcon",A)||{children:[],attributes:{}},N=H.children,Ea=H.attributes;return A.children=N,A.attributes=Ea,s?de(A):ve(A)}function zn(a){var n=a.content,t=a.width,e=a.height,r=a.transform,i=a.title,o=a.extra,s=a.watchable,f=s===void 0?!1:s,l=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[G]="");var c=u({},o.styles);en(r)&&(c.transform=Bt({transform:r,startCentered:!0,width:t,height:e}),c["-webkit-transform"]=c.transform);var v=Oa(c);v.length>0&&(l.style=v);var b=[];return b.push({tag:"span",attributes:l,children:[n]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function pe(a){var n=a.content,t=a.title,e=a.extra,r=u(u(u({},e.attributes),t?{title:t}:{}),{},{class:e.classes.join(" ")}),i=Oa(e.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),t&&o.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),o}var _a=I.styles;function Ua(a){var n=a[0],t=a[1],e=a.slice(4),r=qa(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(B.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(B.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(B.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:t,icon:o}}var be={found:!1,width:512,height:512};function ge(a,n){!Gn&&!m.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(n,'" is missing.'))}function Ba(a,n){var t=n;return n==="fa"&&m.styleDefault!==null&&(n=Y()),new Promise(function(e,r){if(F("missingIconAbstract"),t==="fa"){var i=ot(a)||{};a=i.iconName||a,n=i.prefix||n}if(a&&n&&_a[n]&&_a[n][a]){var o=_a[n][a];return e(Ua(o))}ge(a,n),e(u(u({},be),{},{icon:m.showMissingIcons&&a?F("missingIconAbstract")||{}:{}}))})}var Cn=function(){},Wa=m.measurePerformance&&ma&&ma.mark&&ma.measure?ma:{mark:Cn,measure:Cn},aa='FA "6.4.2"',he=function(n){return Wa.mark("".concat(aa," ").concat(n," begins")),function(){return ft(n)}},ft=function(n){Wa.mark("".concat(aa," ").concat(n," ends")),Wa.measure("".concat(aa," ").concat(n),"".concat(aa," ").concat(n," begins"),"".concat(aa," ").concat(n," ends"))},cn={begin:he,end:ft},wa=function(){};function Sn(a){var n=a.getAttribute?a.getAttribute(G):null;return typeof n=="string"}function ye(a){var n=a.getAttribute?a.getAttribute(Qa):null,t=a.getAttribute?a.getAttribute(an):null;return n&&t}function xe(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(m.replacementClass)}function we(){if(m.autoReplaceSvg===!0)return ka.replace;var a=ka[m.autoReplaceSvg];return a||ka.replace}function ke(a){return x.createElementNS("http://www.w3.org/2000/svg",a)}function Ae(a){return x.createElement(a)}function ct(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,e=t===void 0?a.tag==="svg"?ke:Ae:t;if(typeof a=="string")return x.createTextNode(a);var r=e(a.tag);Object.keys(a.attributes||[]).forEach(function(o){r.setAttribute(o,a.attributes[o])});var i=a.children||[];return i.forEach(function(o){r.appendChild(ct(o,{ceFn:e}))}),r}function ze(a){var n=" ".concat(a.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var ka={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(r){t.parentNode.insertBefore(ct(r),t)}),t.getAttribute(G)===null&&m.keepOriginalSource){var e=x.createComment(ze(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(n){var t=n[0],e=n[1];if(~tn(t).indexOf(m.replacementClass))return ka.replace(n);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return ua(s)}).join(`
`);t.setAttribute(G,""),t.innerHTML=o}};function Mn(a){a()}function lt(a,n){var t=typeof n=="function"?n:wa;if(a.length===0)t();else{var e=Mn;m.mutateApproach===Ot&&(e=$.requestAnimationFrame||Mn),e(function(){var r=we(),i=cn.begin("mutate");a.map(r),i(),t()})}}var ln=!1;function ut(){ln=!0}function Ga(){ln=!1}var Ca=null;function On(a){if(!!gn&&!!m.observeMutations){var n=a.treeCallback,t=n===void 0?wa:n,e=a.nodeCallback,r=e===void 0?wa:e,i=a.pseudoElementsCallback,o=i===void 0?wa:i,s=a.observeMutationsRoot,f=s===void 0?x:s;Ca=new gn(function(l){if(!ln){var c=Y();Q(l).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!Sn(v.addedNodes[0])&&(m.searchPseudoElements&&o(v.target),t(v.target)),v.type==="attributes"&&v.target.parentNode&&m.searchPseudoElements&&o(v.target.parentNode),v.type==="attributes"&&Sn(v.target)&&~_t.indexOf(v.attributeName))if(v.attributeName==="class"&&ye(v.target)){var b=Na(tn(v.target)),g=b.prefix,C=b.iconName;v.target.setAttribute(Qa,g||c),C&&v.target.setAttribute(an,C)}else xe(v.target)&&r(v.target)})}}),R&&Ca.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ce(){!Ca||Ca.disconnect()}function Se(a){var n=a.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),t}function Me(a){var n=a.getAttribute("data-prefix"),t=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",r=Na(tn(a));return r.prefix||(r.prefix=Y()),n&&t&&(r.prefix=n,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=re(r.prefix,a.innerText)||on(r.prefix,Da(a.innerText))),!r.iconName&&m.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function Oe(a){var n=Q(a.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),t=a.getAttribute("title"),e=a.getAttribute("data-fa-title-id");return m.autoA11y&&(t?n["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(e||fa()):(n["aria-hidden"]="true",n.focusable="false")),n}function Le(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ln(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Me(a),e=t.iconName,r=t.prefix,i=t.rest,o=Oe(a),s=$a("parseNodeAttributes",{},a),f=n.styleParser?Se(a):[];return u({iconName:e,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:r,transform:_,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Ne=I.styles;function mt(a){var n=m.autoReplaceSvg==="nest"?Ln(a,{styleParser:!1}):Ln(a);return~n.extra.classes.indexOf(Xn)?F("generateLayersText",a,n):F("generateSvgReplacementMutation",a,n)}var U=new Set;nn.map(function(a){U.add("fa-".concat(a))});Object.keys(ra[y]).map(U.add.bind(U));Object.keys(ra[w]).map(U.add.bind(U));U=ca(U);function Nn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var t=x.documentElement.classList,e=function(v){return t.add("".concat(hn,"-").concat(v))},r=function(v){return t.remove("".concat(hn,"-").concat(v))},i=m.autoFetchSvg?U:nn.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Ne));i.includes("fa")||i.push("fa");var o=[".".concat(Xn,":not([").concat(G,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(G,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Q(a.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=cn.begin("onTree"),l=s.reduce(function(c,v){try{var b=mt(v);b&&c.push(b)}catch(g){Gn||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,v){Promise.all(l).then(function(b){lt(b,function(){e("active"),e("complete"),r("pending"),typeof n=="function"&&n(),f(),c()})}).catch(function(b){f(),v(b)})})}function Pe(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;mt(a).then(function(t){t&&lt([t],n)})}function Ee(a){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(n||{}).icon?n:Ya(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Ya(r||{})),a(e,u(u({},t),{},{mask:r}))}}var Ie=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.transform,r=e===void 0?_:e,i=t.symbol,o=i===void 0?!1:i,s=t.mask,f=s===void 0?null:s,l=t.maskId,c=l===void 0?null:l,v=t.title,b=v===void 0?null:v,g=t.titleId,C=g===void 0?null:g,S=t.classes,M=S===void 0?[]:S,d=t.attributes,p=d===void 0?{}:d,h=t.styles,k=h===void 0?{}:h;if(!!n){var A=n.prefix,H=n.iconName,N=n.icon;return Pa(u({type:"icon"},n),function(){return X("beforeDOMElementCreation",{iconDefinition:n,params:t}),m.autoA11y&&(b?p["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(C||fa()):(p["aria-hidden"]="true",p.focusable="false")),fn({icons:{main:Ua(N),mask:f?Ua(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:H,transform:u(u({},_),r),symbol:o,title:b,maskId:c,titleId:C,extra:{attributes:p,styles:k,classes:M}})})}},He={mixout:function(){return{icon:Ee(Ie)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Nn,t.nodeCallback=Pe,t}}},provides:function(n){n.i2svg=function(t){var e=t.node,r=e===void 0?x:e,i=t.callback,o=i===void 0?function(){}:i;return Nn(r,o)},n.generateSvgReplacementMutation=function(t,e){var r=e.iconName,i=e.title,o=e.titleId,s=e.prefix,f=e.transform,l=e.symbol,c=e.mask,v=e.maskId,b=e.extra;return new Promise(function(g,C){Promise.all([Ba(r,s),c.iconName?Ba(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var M=qa(S,2),d=M[0],p=M[1];g([t,fn({icons:{main:d,mask:p},prefix:s,iconName:r,transform:f,symbol:l,maskId:v,title:i,titleId:o,extra:b,watchable:!0})])}).catch(C)})},n.generateAbstractIcon=function(t){var e=t.children,r=t.attributes,i=t.main,o=t.transform,s=t.styles,f=Oa(s);f.length>0&&(r.style=f);var l;return en(o)&&(l=F("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(l||i.icon),{children:e,attributes:r}}}},_e={mixout:function(){return{layer:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return Pa({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:t,params:e});var o=[];return t(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(ca(i)).join(" ")},children:o}]})}}}},Te={mixout:function(){return{counter:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,o=e.classes,s=o===void 0?[]:o,f=e.attributes,l=f===void 0?{}:f,c=e.styles,v=c===void 0?{}:c;return Pa({type:"counter",content:t},function(){return X("beforeDOMElementCreation",{content:t,params:e}),pe({content:t.toString(),title:i,extra:{attributes:l,styles:v,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(ca(s))}})})}}}},Ve={mixout:function(){return{text:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?_:r,o=e.title,s=o===void 0?null:o,f=e.classes,l=f===void 0?[]:f,c=e.attributes,v=c===void 0?{}:c,b=e.styles,g=b===void 0?{}:b;return Pa({type:"text",content:t},function(){return X("beforeDOMElementCreation",{content:t,params:e}),zn({content:t,transform:u(u({},_),i),title:s,extra:{attributes:v,styles:g,classes:["".concat(m.cssPrefix,"-layers-text")].concat(ca(l))}})})}}},provides:function(n){n.generateLayersText=function(t,e){var r=e.title,i=e.transform,o=e.extra,s=null,f=null;if(Un){var l=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();s=c.width/l,f=c.height/l}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,zn({content:t.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Fe=new RegExp('"',"ug"),Pn=[1105920,1112319];function Re(a){var n=a.replace(Fe,""),t=Jt(n,0),e=t>=Pn[0]&&t<=Pn[1],r=n.length===2?n[0]===n[1]:!1;return{value:Da(r?n[0]:n),isSecondary:e||r}}function En(a,n){var t="".concat(Mt).concat(n.replace(":","-"));return new Promise(function(e,r){if(a.getAttribute(t)!==null)return e();var i=Q(a.children),o=i.filter(function(N){return N.getAttribute(Ra)===n})[0],s=$.getComputedStyle(a,n),f=s.getPropertyValue("font-family").match(Et),l=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return a.removeChild(o),e();if(f&&c!=="none"&&c!==""){var v=s.getPropertyValue("content"),b=~["Sharp"].indexOf(f[2])?w:y,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ia[b][f[2].toLowerCase()]:It[b][l],C=Re(v),S=C.value,M=C.isSecondary,d=f[0].startsWith("FontAwesome"),p=on(g,S),h=p;if(d){var k=ie(S);k.iconName&&k.prefix&&(p=k.iconName,g=k.prefix)}if(p&&!M&&(!o||o.getAttribute(Qa)!==g||o.getAttribute(an)!==h)){a.setAttribute(t,h),o&&a.removeChild(o);var A=Le(),H=A.extra;H.attributes[Ra]=n,Ba(p,g).then(function(N){var Ea=fn(u(u({},A),{},{icons:{main:N,mask:sn()},prefix:g,iconName:h,extra:H,watchable:!0})),D=x.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?a.insertBefore(D,a.firstChild):a.appendChild(D),D.outerHTML=Ea.map(function(bt){return ua(bt)}).join(`
`),a.removeAttribute(t),e()}).catch(r)}else e()}else e()})}function De(a){return Promise.all([En(a,"::before"),En(a,"::after")])}function je(a){return a.parentNode!==document.head&&!~Lt.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(Ra)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function In(a){if(!!R)return new Promise(function(n,t){var e=Q(a.querySelectorAll("*")).filter(je).map(De),r=cn.begin("searchPseudoElements");ut(),Promise.all(e).then(function(){r(),Ga(),n()}).catch(function(){r(),Ga(),t()})})}var $e={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=In,t}}},provides:function(n){n.pseudoElements2svg=function(t){var e=t.node,r=e===void 0?x:e;m.searchPseudoElements&&In(r)}}},Hn=!1,Ye={mixout:function(){return{dom:{unwatch:function(){ut(),Hn=!0}}}},hooks:function(){return{bootstrap:function(){On($a("mutationObserverCallbacks",{}))},noAuto:function(){Ce()},watch:function(t){var e=t.observeMutationsRoot;Hn?Ga():On($a("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},_n=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},t)},Ue={mixout:function(){return{parse:{transform:function(t){return _n(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-transform");return r&&(t.transform=_n(r)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var e=t.main,r=t.transform,i=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(f," ").concat(l," ").concat(c)},b={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:v,path:b};return{tag:"g",attributes:u({},g.outer),children:[{tag:"g",attributes:u({},g.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:u(u({},e.icon.attributes),g.path)}]}]}}}},Ta={x:0,y:0,width:"100%",height:"100%"};function Tn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||n)&&(a.attributes.fill="black"),a}function Be(a){return a.tag==="g"?a.children:[a]}var We={hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-mask"),i=r?Na(r.split(" ").map(function(o){return o.trim()})):sn();return i.prefix||(i.prefix=Y()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var e=t.children,r=t.attributes,i=t.main,o=t.mask,s=t.maskId,f=t.transform,l=i.width,c=i.icon,v=o.width,b=o.icon,g=Ut({transform:f,containerWidth:v,iconWidth:l}),C={tag:"rect",attributes:u(u({},Ta),{},{fill:"white"})},S=c.children?{children:c.children.map(Tn)}:{},M={tag:"g",attributes:u({},g.inner),children:[Tn(u({tag:c.tag,attributes:u(u({},c.attributes),g.path)},S))]},d={tag:"g",attributes:u({},g.outer),children:[M]},p="mask-".concat(s||fa()),h="clip-".concat(s||fa()),k={tag:"mask",attributes:u(u({},Ta),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,d]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:Be(b)},k]};return e.push(A,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")")},Ta)}),{children:e,attributes:r}}}},Ge={provides:function(n){var t=!1;$.matchMedia&&(t=$.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Xe={hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return t.symbol=i,t}}}},Ze=[Gt,He,_e,Te,Ve,$e,Ye,Ue,We,Ge,Xe];fe(Ze,{mixoutsTo:L});L.noAuto;var vt=L.config,mr=L.library;L.dom;var Sa=L.parse;L.findIconDefinition;L.toHtml;var Ke=L.icon;L.layer;var qe=L.text;L.counter;var vr={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},dr={prefix:"fas",iconName:"server",icon:[512,512,[],"f233","M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]},pr={prefix:"fas",iconName:"image",icon:[512,512,[],"f03e","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},br={prefix:"fas",iconName:"compass-drafting",icon:[512,512,["drafting-compass"],"f568","M352 96c0 14.3-3.1 27.9-8.8 40.2L396 227.4c-23.7 25.3-54.2 44.1-88.5 53.6L256 192h0 0l-68 117.5c21.5 6.8 44.3 10.5 68.1 10.5c70.7 0 133.8-32.7 174.9-84c11.1-13.8 31.2-16 45-5s16 31.2 5 45C428.1 341.8 347 384 256 384c-35.4 0-69.4-6.4-100.7-18.1L98.7 463.7C94 471.8 87 478.4 78.6 482.6L23.2 510.3c-5 2.5-10.9 2.2-15.6-.7S0 501.5 0 496V440.6c0-8.4 2.2-16.7 6.5-24.1l60-103.7C53.7 301.6 41.8 289.3 31.2 276c-11.1-13.8-8.8-33.9 5-45s33.9-8.8 45 5c5.7 7.1 11.8 13.8 18.2 20.1l69.4-119.9c-5.6-12.2-8.8-25.8-8.8-40.2c0-53 43-96 96-96s96 43 96 96zm21 297.9c32.6-12.8 62.5-30.8 88.9-52.9l43.7 75.5c4.2 7.3 6.5 15.6 6.5 24.1V496c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6 .7l-55.4-27.7c-8.4-4.2-15.4-10.8-20.1-18.9L373 393.9zM256 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},gr={prefix:"fas",iconName:"circle-arrow-down",icon:[512,512,["arrow-circle-down"],"f0ab","M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 393c-9.4 9.4-24.6 9.4-33.9 0L127 281z"]},hr={prefix:"fas",iconName:"palette",icon:[512,512,[127912],"f53f","M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},yr={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"]},xr={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},wr={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},kr={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Ar={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},zr={prefix:"fas",iconName:"file-pdf",icon:[512,512,[],"f1c1","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"]},Cr={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Sr={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},Mr={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Or={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},Lr={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Nr={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Pr={prefix:"fas",iconName:"envelope-open-text",icon:[512,512,[],"f658","M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},Er={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Ir={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},Hr={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"]},_r={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]},Tr={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Vr={prefix:"fas",iconName:"photo-film",icon:[640,512,["photo-video"],"f87c","M256 0H576c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64zM476 106.7C471.5 100 464 96 456 96s-15.5 4-20 10.7l-56 84L362.7 169c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h80 48H552c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144zM336 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM64 128h96V384v32c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V384H512v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64zm8 64c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16H88c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H72zm0 104c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16H88c8.8 0 16-7.2 16-16V312c0-8.8-7.2-16-16-16H72zm0 104c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16H88c8.8 0 16-7.2 16-16V416c0-8.8-7.2-16-16-16H72zm336 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V416c0-8.8-7.2-16-16-16H424c-8.8 0-16 7.2-16 16z"]},Fr={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},Rr={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},Dr={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"]},jr={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]},$r={prefix:"fas",iconName:"magnifying-glass-plus",icon:[512,512,["search-plus"],"f00e","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"]},Yr={prefix:"fas",iconName:"video",icon:[576,512,["video-camera"],"f03d","M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"]},Ur={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]},Br={prefix:"fab",iconName:"aws",icon:[640,512,[],"f375","M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"]},Wr={prefix:"fab",iconName:"microsoft",icon:[448,512,[],"f3ca","M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"]},Gr={prefix:"fab",iconName:"css3-alt",icon:[384,512,[],"f38b","M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"]},Xr={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},Zr={prefix:"fab",iconName:"laravel",icon:[512,512,[],"f3bd","M504.4,115.83a5.72,5.72,0,0,0-.28-.68,8.52,8.52,0,0,0-.53-1.25,6,6,0,0,0-.54-.71,9.36,9.36,0,0,0-.72-.94c-.23-.22-.52-.4-.77-.6a8.84,8.84,0,0,0-.9-.68L404.4,55.55a8,8,0,0,0-8,0L300.12,111h0a8.07,8.07,0,0,0-.88.69,7.68,7.68,0,0,0-.78.6,8.23,8.23,0,0,0-.72.93c-.17.24-.39.45-.54.71a9.7,9.7,0,0,0-.52,1.25c-.08.23-.21.44-.28.68a8.08,8.08,0,0,0-.28,2.08V223.18l-80.22,46.19V63.44a7.8,7.8,0,0,0-.28-2.09c-.06-.24-.2-.45-.28-.68a8.35,8.35,0,0,0-.52-1.24c-.14-.26-.37-.47-.54-.72a9.36,9.36,0,0,0-.72-.94,9.46,9.46,0,0,0-.78-.6,9.8,9.8,0,0,0-.88-.68h0L115.61,1.07a8,8,0,0,0-8,0L11.34,56.49h0a6.52,6.52,0,0,0-.88.69,7.81,7.81,0,0,0-.79.6,8.15,8.15,0,0,0-.71.93c-.18.25-.4.46-.55.72a7.88,7.88,0,0,0-.51,1.24,6.46,6.46,0,0,0-.29.67,8.18,8.18,0,0,0-.28,2.1v329.7a8,8,0,0,0,4,6.95l192.5,110.84a8.83,8.83,0,0,0,1.33.54c.21.08.41.2.63.26a7.92,7.92,0,0,0,4.1,0c.2-.05.37-.16.55-.22a8.6,8.6,0,0,0,1.4-.58L404.4,400.09a8,8,0,0,0,4-6.95V287.88l92.24-53.11a8,8,0,0,0,4-7V117.92A8.63,8.63,0,0,0,504.4,115.83ZM111.6,17.28h0l80.19,46.15-80.2,46.18L31.41,63.44Zm88.25,60V278.6l-46.53,26.79-33.69,19.4V123.5l46.53-26.79Zm0,412.78L23.37,388.5V77.32L57.06,96.7l46.52,26.8V338.68a6.94,6.94,0,0,0,.12.9,8,8,0,0,0,.16,1.18h0a5.92,5.92,0,0,0,.38.9,6.38,6.38,0,0,0,.42,1v0a8.54,8.54,0,0,0,.6.78,7.62,7.62,0,0,0,.66.84l0,0c.23.22.52.38.77.58a8.93,8.93,0,0,0,.86.66l0,0,0,0,92.19,52.18Zm8-106.17-80.06-45.32,84.09-48.41,92.26-53.11,80.13,46.13-58.8,33.56Zm184.52,4.57L215.88,490.11V397.8L346.6,323.2l45.77-26.15Zm0-119.13L358.68,250l-46.53-26.79V131.79l33.69,19.4L392.37,178Zm8-105.28-80.2-46.17,80.2-46.16,80.18,46.15Zm8,105.28V178L455,151.19l33.68-19.4v91.39h0Z"]},Kr={prefix:"fab",iconName:"react",icon:[512,512,[],"f41b","M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"]},qr={prefix:"fab",iconName:"bootstrap",icon:[576,512,[],"f836","M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"]},Jr={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Qr={prefix:"fab",iconName:"figma",icon:[384,512,[],"f799","M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z"]},ai={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},ni={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},ti={prefix:"fab",iconName:"html5",icon:[384,512,[],"f13b","M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"]},ei={prefix:"fab",iconName:"js",icon:[448,512,[],"f3b8","M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"]},ri={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},ii={prefix:"fab",iconName:"php",icon:[640,512,[],"f457","M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"]},oi={prefix:"fab",iconName:"telegram",icon:[496,512,[62462,"telegram-plane"],"f2c6","M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]};function Vn(a,n){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),t.push.apply(t,e)}return t}function E(a){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Vn(Object(t),!0).forEach(function(e){O(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):Vn(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}function Ma(a){return Ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ma(a)}function O(a,n,t){return n in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}function Je(a,n){if(a==null)return{};var t={},e=Object.keys(a),r,i;for(i=0;i<e.length;i++)r=e[i],!(n.indexOf(r)>=0)&&(t[r]=a[r]);return t}function Qe(a,n){if(a==null)return{};var t=Je(a,n),e,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(r=0;r<i.length;r++)e=i[r],!(n.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,e)||(t[e]=a[e]))}return t}function Xa(a){return ar(a)||nr(a)||tr(a)||er()}function ar(a){if(Array.isArray(a))return Za(a)}function nr(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function tr(a,n){if(!!a){if(typeof a=="string")return Za(a,n);var t=Object.prototype.toString.call(a).slice(8,-1);if(t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set")return Array.from(a);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Za(a,n)}}function Za(a,n){(n==null||n>a.length)&&(n=a.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=a[t];return e}function er(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var rr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dt={exports:{}};(function(a){(function(n){var t=function(d,p,h){if(!l(p)||v(p)||b(p)||g(p)||f(p))return p;var k,A=0,H=0;if(c(p))for(k=[],H=p.length;A<H;A++)k.push(t(d,p[A],h));else{k={};for(var N in p)Object.prototype.hasOwnProperty.call(p,N)&&(k[d(N,h)]=t(d,p[N],h))}return k},e=function(d,p){p=p||{};var h=p.separator||"_",k=p.split||/(?=[A-Z])/;return d.split(k).join(h)},r=function(d){return C(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(p,h){return h?h.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},i=function(d){var p=r(d);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(d,p){return e(d,p).toLowerCase()},s=Object.prototype.toString,f=function(d){return typeof d=="function"},l=function(d){return d===Object(d)},c=function(d){return s.call(d)=="[object Array]"},v=function(d){return s.call(d)=="[object Date]"},b=function(d){return s.call(d)=="[object RegExp]"},g=function(d){return s.call(d)=="[object Boolean]"},C=function(d){return d=d-0,d===d},S=function(d,p){var h=p&&"process"in p?p.process:p;return typeof h!="function"?d:function(k,A){return h(k,d,A)}},M={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(d,p){return t(S(r,p),d)},decamelizeKeys:function(d,p){return t(S(o,p),d,p)},pascalizeKeys:function(d,p){return t(S(i,p),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};a.exports?a.exports=M:n.humps=M})(rr)})(dt);var ir=dt.exports,or=["class","style"];function sr(a){return a.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,t){var e=t.indexOf(":"),r=ir.camelize(t.slice(0,e)),i=t.slice(e+1).trim();return n[r]=i,n},{})}function fr(a){return a.split(/\s+/).reduce(function(n,t){return n[t]=!0,n},{})}function un(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof a=="string")return a;var e=(a.children||[]).map(function(f){return un(f)}),r=Object.keys(a.attributes||{}).reduce(function(f,l){var c=a.attributes[l];switch(l){case"class":f.class=fr(c);break;case"style":f.style=sr(c);break;default:f.attrs[l]=c}return f},{attrs:{},class:{},style:{}});t.class;var i=t.style,o=i===void 0?{}:i,s=Qe(t,or);return Rn(a.tag,E(E(E({},n),{},{class:r.class,style:E(E({},r.style),o)},r.attrs),s),e)}var pt=!1;try{pt=!0}catch{}function cr(){if(!pt&&console&&typeof console.error=="function"){var a;(a=console).error.apply(a,arguments)}}function ea(a,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?O({},a,n):{}}function lr(a){var n,t=(n={"fa-spin":a.spin,"fa-pulse":a.pulse,"fa-fw":a.fixedWidth,"fa-border":a.border,"fa-li":a.listItem,"fa-inverse":a.inverse,"fa-flip":a.flip===!0,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both"},O(n,"fa-".concat(a.size),a.size!==null),O(n,"fa-rotate-".concat(a.rotation),a.rotation!==null),O(n,"fa-pull-".concat(a.pull),a.pull!==null),O(n,"fa-swap-opacity",a.swapOpacity),O(n,"fa-bounce",a.bounce),O(n,"fa-shake",a.shake),O(n,"fa-beat",a.beat),O(n,"fa-fade",a.fade),O(n,"fa-beat-fade",a.beatFade),O(n,"fa-flash",a.flash),O(n,"fa-spin-pulse",a.spinPulse),O(n,"fa-spin-reverse",a.spinReverse),n);return Object.keys(t).map(function(e){return t[e]?e:null}).filter(function(e){return e})}function Fn(a){if(a&&Ma(a)==="object"&&a.prefix&&a.iconName&&a.icon)return a;if(Sa.icon)return Sa.icon(a);if(a===null)return null;if(Ma(a)==="object"&&a.prefix&&a.iconName)return a;if(Array.isArray(a)&&a.length===2)return{prefix:a[0],iconName:a[1]};if(typeof a=="string")return{prefix:"fas",iconName:a}}var si=Ka({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(n){return[!0,!1,"horizontal","vertical","both"].indexOf(n)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(n){return["right","left"].indexOf(n)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(n){return[90,180,270].indexOf(Number.parseInt(n,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(n){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(n)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(n,t){var e=t.attrs,r=P(function(){return Fn(n.icon)}),i=P(function(){return ea("classes",lr(n))}),o=P(function(){return ea("transform",typeof n.transform=="string"?Sa.transform(n.transform):n.transform)}),s=P(function(){return ea("mask",Fn(n.mask))}),f=P(function(){return Ke(r.value,E(E(E(E({},i.value),o.value),s.value),{},{symbol:n.symbol,title:n.title}))});gt(f,function(c){if(!c)return cr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var l=P(function(){return f.value?un(f.value.abstract[0],{},e):null});return function(){return l.value}}});Ka({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(n,t){var e=t.slots,r=vt.familyPrefix,i=P(function(){return["".concat(r,"-layers")].concat(Xa(n.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return Rn("div",{class:i.value},e.default?e.default():[])}}});Ka({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(n){return["bottom-left","bottom-right","top-left","top-right"].indexOf(n)>-1}}},setup:function(n,t){var e=t.attrs,r=vt.familyPrefix,i=P(function(){return ea("classes",[].concat(Xa(n.counter?["".concat(r,"-layers-counter")]:[]),Xa(n.position?["".concat(r,"-layers-").concat(n.position)]:[])))}),o=P(function(){return ea("transform",typeof n.transform=="string"?Sa.transform(n.transform):n.transform)}),s=P(function(){var l=qe(n.value.toString(),E(E({},o.value),i.value)),c=l.abstract;return n.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),f=P(function(){return un(s.value,{},e)});return function(){return f.value}}});export{zr as A,pr as B,Mr as C,_r as D,$r as E,Yr as F,Er as G,ri as H,Jr as I,ai as J,oi as K,ni as L,Kr as M,ti as N,Gr as O,ei as P,Br as Q,qr as R,Qr as S,ii as T,Zr as U,Xr as V,Wr as W,si as X,Nr as a,Ir as b,kr as c,Ar as d,wr as e,jr as f,gr as g,yr as h,Dr as i,Ur as j,br as k,mr as l,Vr as m,hr as n,dr as o,xr as p,Lr as q,Pr as r,Hr as s,Rr as t,Sr as u,Or as v,Fr as w,vr as x,Tr as y,Cr as z};
