(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[15],{539:function(t,n,e){(function(n){var e=9007199254740991,r="[object Arguments]",c="[object Map]",o="[object Promise]",a="[object Set]",u="[object WeakMap]",i="[object DataView]",l=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,s="\\ud800-\\udfff",p="\\u0300-\\u036f\\ufe20-\\ufe23",j="\\u20d0-\\u20f0",b="\\ufe0e\\ufe0f",h="[".concat(s,"]"),m="[".concat(p).concat(j,"]"),d="\\ud83c[\\udffb-\\udfff]",g="(?:".concat(m,"|").concat(d,")"),y="[^".concat(s,"]"),v="(?:\\ud83c[\\udde6-\\uddff]){2}",O="[\\ud800-\\udbff][\\udc00-\\udfff]",x="\\u200d",S="".concat(g,"?"),w="[".concat(b,"]?"),k=w+S+"(?:".concat(x,"(?:").concat([y,v,O].join("|"),")").concat(w).concat(S,")*"),A="(?:".concat(["".concat(y+m,"?"),m,v,O,h].join("|"),")"),C=RegExp("".concat(d,"(?=").concat(d,")|").concat(A).concat(k),"g"),E=RegExp("[".concat(x).concat(s).concat(p).concat(j).concat(b,"]")),$="object"===typeof n&&n&&n.Object===Object&&n||Function("return this")();function _(t,n){return function(t,n){for(var e=-1,r=t?t.length:0,c=Array(r);++e<r;)c[e]=n(t[e],e,t);return c}(n,(function(n){return t[n]}))}function F(t){var n=-1,e=Array(t.size);return t.forEach((function(t,r){e[++n]=[r,t]})),e}function P(t){var n=-1,e=Array(t.size);return t.forEach((function(t){e[++n]=t})),e}function B(t){return function(t){return E.test(t)}(t)?function(t){return t.match(C)||[]}(t):function(t){return t.split("")}(t)}var R,W,I=Function.prototype,M=Object.prototype,T=$["__core-js_shared__"],z=function(){var t=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||"");return t?"Symbol(src)_1.".concat(t):""}(),N=I.toString,V=M.hasOwnProperty,D=M.toString,G=RegExp("^".concat(N.call(V).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"),"$")),J=$.Symbol,L=J?J.iterator:void 0,q=M.propertyIsEnumerable,H=(R=Object.keys,W=Object,function(t){return R(W(t))}),K=ut($,"DataView"),Q=ut($,"Map"),U=ut($,"Promise"),X=ut($,"Set"),Y=ut($,"WeakMap"),Z=ft(K),tt=ft(Q),nt=ft(U),et=ft(X),rt=ft(Y);function ct(t,n){var e=st(t)||function(t){return function(t){return ht(t)&&pt(t)}(t)&&V.call(t,"callee")&&(!q.call(t,"callee")||D.call(t)===r)}(t)?function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}(t.length,String):[],c=e.length,o=!!c;for(var a in t)!n&&!V.call(t,a)||o&&("length"===a||lt(a,c))||e.push(a);return e}function ot(t){return!(!bt(t)||function(t){return!!z&&z in t}(t))&&(jt(t)||function(t){var n=!1;if(null!==t&&"function"!==typeof t.toString)try{n=!!"".concat(t)}catch(e){}return n}(t)?G:l).test(ft(t))}function at(t){if(!function(t){var n=t&&t.constructor,e="function"===typeof n&&n.prototype||M;return t===e}(t))return H(t);var n=[];for(var e in Object(t))V.call(t,e)&&"constructor"!==e&&n.push(e);return n}function ut(t,n){var e=function(t,n){return null==t?void 0:t[n]}(t,n);return ot(e)?e:void 0}var it=function(t){return D.call(t)};function lt(t,n){return!!(n=null==n?e:n)&&("number"===typeof t||f.test(t))&&t>-1&&t%1===0&&t<n}function ft(t){if(null!==t){try{return N.call(t)}catch(n){}try{return"".concat(t)}catch(n){}}return""}(K&&it(new K(new ArrayBuffer(1)))!==i||Q&&it(new Q)!==c||U&&it(U.resolve())!==o||X&&it(new X)!==a||Y&&it(new Y)!==u)&&(it=function(t){var n=D.call(t),e="[object Object]"===n?t.constructor:void 0,r=e?ft(e):void 0;if(r)switch(r){case Z:return i;case tt:return c;case nt:return o;case et:return a;case rt:return u;default:return}return n});var st=Array.isArray;function pt(t){return null!=t&&function(t){return"number"===typeof t&&t>-1&&t%1===0&&t<=e}(t.length)&&!jt(t)}function jt(t){var n=bt(t)?D.call(t):"";return"[object Function]"===n||"[object GeneratorFunction]"===n}function bt(t){var n=typeof t;return!!t&&("object"===n||"function"===n)}function ht(t){return!!t&&"object"===typeof t}function mt(t){return t?_(t,function(t){return pt(t)?ct(t):at(t)}(t)):[]}t.exports=function(t){if(!t)return[];if(pt(t))return function(t){return"string"===typeof t||!st(t)&&ht(t)&&"[object String]"===D.call(t)}(t)?B(t):function(t,n){var e=-1,r=t.length;for(n||(n=Array(r));++e<r;)n[e]=t[e];return n}(t);if(L&&t[L])return function(t){for(var n,e=[];!(n=t.next()).done;)e.push(n.value);return e}(t[L]());var n=it(t);return(n===c?F:n===a?P:mt)(t)}}).call(this,e(45))},680:function(t,n,e){"use strict";e.r(n);var r=e(83),c=e(94),o=e(1),a=(e(537),e(582)),u=e(650),i=e(586),l=e(618),f=e(370),s=e(615),p=e(671),j=e(25),b=e(540),h=e.n(b),m=e(125),d=e.n(m),g=e(539),y=e.n(g);var v=function(t){return y()(t).length},O=e(5),x=function(t){return!(t.unified.length>5)};n.default=Object(j.a)((function(t){return{"@global":{".emoji-mart-category-label":t.typography.body1,".emoji-mart-bar":{display:"none !important"},".emoji-mart-search input":Object(c.a)(Object(c.a)({},t.typography.body1),t.border),".emoji-mart-search":{marginTop:"".concat(t.spacing(1),"px !important"),paddingRight:"".concat(t.spacing(1),"px !important"),paddingLeft:"".concat(t.spacing(1),"px !important"),paddingBottom:"".concat(t.spacing(1),"px !important")},".emoji-mart-search-icon":{top:"5px !important",right:"14px !important",fontSize:20},".emoji-mart-scroll":{height:240},".emoji-mart":Object(c.a)({},t.border)},floatButtonWrapper:{position:"absolute",bottom:12,right:12},floatButtonSVG:{color:t.palette.primary.light},relative:{position:"relative"}}}),{withTheme:!0})((function(t){var n=t.theme,e=t.classes,c=t.rightContent,j=t.placeholder,b=t.maxCharacters,m=t.emojiSet,g=t.inputClassName,y=t.onChange,S=Object(o.useState)(!1),w=Object(r.a)(S,2),k=w[0],A=w[1],C=Object(o.useState)(""),E=Object(r.a)(C,2),$=E[0],_=E[1],F=Object(o.useState)(0),P=Object(r.a)(F,2),B=P[0],R=P[1],W=Object(o.useCallback)((function(t){var n,e=$+t.native;b&&(n=v(e))>b||(y&&y(e,n),_(e),R(n))}),[$,_,R,b,y]),I=Object(o.useCallback)((function(t){var n,e=t.target.value;b&&(n=v(e))>b||(y&&y(e,n),_(e),R(n))}),[b,y,_,R]),M=Object(o.useCallback)((function(){A(!k)}),[k,A]);return Object(O.jsxs)(o.Fragment,{children:[Object(O.jsxs)(u.a,{spacing:0,container:!0,children:[Object(O.jsxs)(u.a,{item:!0,xs:c?8:12,sm:c?9:12,lg:c?10:12,className:e.relative,children:[Object(O.jsx)(i.a,{fullWidth:!0,multiline:!0,variant:"outlined",rows:6,onInput:I,value:$,placeholder:j,InputProps:{classes:{notchedOutline:g||null}}}),Object(O.jsx)("div",{className:e.floatButtonWrapper,children:Object(O.jsx)(l.a,{onClick:M,children:k?Object(O.jsx)(d.a,{color:"primary"}):Object(O.jsx)(h.a,{color:"primary"})})})]}),c&&Object(O.jsx)(u.a,{item:!0,xs:4,sm:3,lg:2,children:c})]}),b&&Object(O.jsx)(f.a,{error:B>=b,children:"".concat(B,"/").concat(b," characters")}),Object(O.jsx)(s.a,{in:k,children:Object(O.jsx)(p.a,{mt:1,children:Object(O.jsx)(a.a,{set:m,color:n.palette.primary.main,style:{width:"100%"},onSelect:W,emojisToShowFilter:x})})})]})}))}}]);
//# sourceMappingURL=15.f594f5b3.chunk.js.map