import{d as e,E as t,G as a,b as o,r as l,w as n,o as s,f as i,h as r,i as c,l as u,q as d,j as p,n as f,k as m,u as y,s as g,t as h,C as v,v as b,I as _,B as C,x as j}from"./index-69fcfcc5.js";import{u as k}from"./form.a76f4415.js";import{c as w,a as S,m as B,l as x,t as O,o as I,C as $,B as E,F as T,q as z,w as H,U as q,i as A,f as L,I as V,N as F,d as N,P}from"./icon.0e247b7e.js";import{_ as G}from"./plugin-vueexport-helper.1b428a4d.js";const K="H5"===function(){let e;return e="H5","H5"}(),M={...w,type:S("text"),modelValue:B(""),inputClass:{type:[String,Object,Array],default:""},inputStyle:{type:[String,Object,Array],default:""},placeholder:S(""),placeholderStyle:S(""),placeholderClass:S("input-placeholder"),inputAlign:S("left"),required:Boolean,disabled:x,readonly:Boolean,error:Boolean,maxLength:B(140),clearable:Boolean,clearSize:B("14"),border:O,formatTrigger:S("onChange"),formatter:{type:Function,default:null},showWordLimit:Boolean,autofocus:Boolean,confirmType:S("done"),adjustPosition:O,alwaysSystem:Boolean,showClearIcon:Boolean,inputMode:S("text"),cursorSpacing:I(0),alwaysEmbed:Boolean,confirmHold:Boolean,cursor:Number,selectionStart:I(-1),selectionEnd:I(-1),holdKeyboard:Boolean},W={[$]:e=>e instanceof Object,clickInput:e=>e instanceof Object,[E]:e=>e instanceof Object,[T]:e=>e instanceof Object,[z]:()=>!0,[H]:e=>e instanceof Object,[q]:(e,t)=>(A(e)||L(e))&&(t instanceof Object||void 0===t),[V]:(e,t)=>(A(e)||L(e))&&t instanceof Object};function U(e,t,a){const o=e.indexOf(t);return-1===o?e:"-"===t&&0!==o?e.slice(0,o):e.slice(0,o+1)+e.slice(o).replace(a,"")}function D(e,t=!0,a=!0){e=t?U(e,".",/\./g):e.split(".")[0];const o=t?/[^-0-9.]/g:/[^-0-9]/g;return(e=a?U(e,"-",/-/g):e.replace(/-/,"")).replace(o,"")}const J=`${P}-input`,Q=e({name:J,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),R=G(e({...Q,props:M,emits:W,setup(e,{emit:w}){const S=e,B=t();function x(e){return Boolean(B[e])}const O=k(a(S,"disabled"));function I(){return null==S.modelValue?"":String(S.modelValue)}const A=o((()=>I())),L=o((()=>N(S,J,{[`${J}--disabled`]:O.value,[`${J}--required`]:S.required,[`${J}--error`]:S.error,[`${J}--border`]:S.border}))),P=o((()=>[S.inputStyle,{textAlign:S.inputAlign}])),G=o((()=>null==S.maxLength?-1:Number(S.maxLength)));function M(e,t="onChange"){G.value>0&&e.length>G.value&&(e=e.slice(0,G.value)),"number"===S.type&&(e=D(e,!1,!1)),"digit"===S.type&&(e=D(e,!0,!0)),S.formatter&&t===S.formatTrigger&&(e=S.formatter(e)),w(q,e)}function W(e){M(e.detail.value),j((()=>{w(V,A.value,e)}))}function U(e){if(K){e.target.composing||W(e)}else W(e)}function Q(e){w($,e)}function R(e){O.value||w("clickInput",e)}const X=l(!1),Y=l(!1);function Z(e){O.value||S.readonly||(w(T,e),X.value=!0)}function ee(e){O.value||S.readonly||(w(E,e),setTimeout((()=>{X.value=!1}),200),Y.value?Y.value=!1:M(e.detail.value,"onBlur"))}function te(e){w(H,e)}function ae(e){O.value||(w(q,"",e),w(z),Y.value=!0)}function oe(e){if(K){e.target.composing=!0}}function le(e){if(K){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}}return n((()=>S.modelValue),(e=>{e!==A.value&&M(I())})),s((()=>{M(I(),S.formatTrigger)})),(e,t)=>{const a=b,o=_,l=C;return i(),r(a,{class:f(y(L)),style:m(S.customStyle),onClick:Q},{default:c((()=>[x("left")?(i(),r(a,{key:0,class:"nut-input__left"},{default:c((()=>[u(e.$slots,"left",{},void 0,!0)])),_:3})):d("v-if",!0),p(a,{class:"nut-input__value"},{default:c((()=>[p(o,{class:f(["nut-input__input",S.inputClass]),style:m(y(P)),value:y(A),type:S.type,placeholder:S.placeholder,"placeholder-style":S.placeholderStyle,"placeholder-class":S.placeholderClass,disabled:y(O),readonly:S.readonly,focus:S.autofocus,maxlength:y(G),"format-trigger":S.formatTrigger,"auto-blur":!!S.autofocus||void 0,"confirm-type":S.confirmType,"adjust-position":S.adjustPosition,"always-system":S.alwaysSystem,inputmode:S.inputMode,"cursor-spacing":S.cursorSpacing,"always-embed":S.alwaysEmbed,"confirm-hold":S.confirmHold,cursor:S.cursor,"selection-start":S.selectionStart,"selection-end":S.selectionEnd,"hold-keyboard":S.holdKeyboard,onInput:U,onFocus:Z,onBlur:ee,onClick:R,onChange:le,onCompositionstart:oe,onCompositionend:le,onConfirm:te},null,8,["class","style","value","type","placeholder","placeholder-style","placeholder-class","disabled","readonly","focus","maxlength","format-trigger","auto-blur","confirm-type","adjust-position","always-system","inputmode","cursor-spacing","always-embed","confirm-hold","cursor","selection-start","selection-end","hold-keyboard"]),S.readonly?(i(),r(a,{key:0,class:"nut-input__mask",onClick:R})):d("v-if",!0),S.showWordLimit&&y(G)>0?(i(),r(a,{key:1,class:"nut-input__word-limit"},{default:c((()=>[p(l,{class:"nut-input__word-num"},{default:c((()=>[g(h(y(A).length),1)])),_:1}),g("/"+h(y(G)),1)])),_:1})):d("v-if",!0)])),_:1}),S.clearable&&!S.readonly?(i(),r(a,{key:1,class:f(["nut-input__clear",{"nut-hidden":!((X.value||S.showClearIcon)&&y(A).length>0)}]),onClick:v(ae,["stop"])},{default:c((()=>[x("clear")?u(e.$slots,"clear",{key:0},void 0,!0):(i(),r(F,{key:1,name:"mask-close","custom-class":"nut-input__clear-icon",size:S.clearSize,width:S.clearSize,height:S.clearSize},null,8,["size","width","height"]))])),_:3},8,["class","onClick"])):d("v-if",!0),x("right")?(i(),r(a,{key:2,class:"nut-input__right"},{default:c((()=>[u(e.$slots,"right",{},void 0,!0)])),_:3})):d("v-if",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-64d4c66d"]]);export{R as _};
