import{d as t,b as e,u as n,f as r,h as s,n as o,k as a,C as c,B as u}from"./index-9ea87e0d.js";import{_ as i}from"./_plugin-vue_export-helper.1b428a4d.js";function l(t){return Number.isNaN(Number(t))?String(t):`${t}px`}const f=Object.prototype.toString;function p(t,e){return f.call(t)===`[object ${e}]`}function d(t){return null!==t&&p(t,"Object")}function y(t){return p(t,"Number")}function m(t){return p(t,"Promise")||(d(t)||g(t))&&g(t.then)&&g(t.catch)}function b(t){return p(t,"String")}function g(t){return"function"==typeof t}function h(t){return t&&Array.isArray(t)}function j(t){if(null===t)return"null";const e=typeof t;if("undefined"===e||"string"===e)return e;switch(toString.call(t)){case"[object Array]":return"array";case"[object Date]":return"date";case"[object Boolean]":return"boolean";case"[object Number]":return"number";case"[object Function]":return"function";case"[object RegExp]":return"regexp";case"[object Object]":return void 0!==t.nodeType?3===t.nodeType?/\S/.test(t.nodeValue)?"textnode":"whitespace":"element":"object";default:return"unknow"}}function S(t,e){try{return e.split(".").reduce(((t,e)=>t[e]),t)}catch(n){return""}}const C=/\B([A-Z])/g,O=function(t){const e=Object.create(null);return n=>e[n]||(e[n]=t(n))}((t=>t.replace(C,"-$1").toLowerCase())),N=(t,e,n)=>Math.min(Math.max(t,e),n),{hasOwnProperty:k}=Object.prototype;function v(t,e){return Object.keys(e).forEach((n=>{!function(t,e,n){const r=e[n];(function(t){return void 0!==t})(r)&&(k.call(t,n)&&d(r)?t[n]=v(Object(t[n]),r):t[n]=r)}(t,e,n)})),t}const x=[Number,String],$={type:Boolean,default:!0},w={type:Boolean,default:void 0};function A(t=[]){return{type:Array,default:()=>t}}function _(t){return{type:Object,default:()=>t}}function B(t){return{type:Number,default:t}}function P(t){return{type:x,default:t}}function z(t){return{type:String,default:t}}const E={customClass:{type:[String,Object,Array],default:""},customStyle:{type:[String,Object,Array],default:""}},M=/;(?![^(]*\))/g,T=/:([^]+)/,F=/\/\*.*?\*\//g;function I(t){const e={};return t.replace(F,"").split(M).forEach((t=>{if(t){const n=t.split(T);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function V(t){if(h(t)){const n={};for(let r=0;r<t.length;r++){const s=t[r],o=b(s)?I(s):V(s);if(o)for(const t in o)(h(e=o[t])||b(e)?0===e.length:e instanceof Map||e instanceof Set?0===e.size:d(e)&&0===Object.keys(e).length)||(n[t]=o[t])}return n}var e;return b(t)||d(t)?t:void 0}function q(t){let e="";if(b(t))e=t;else if(h(t))for(let n=0;n<t.length;n++){const r=q(t[n]);r&&(e+=`${r} `)}else if(d(t))for(const n in t)t[n]&&(e+=`${n} `);return e.trim()}function D(t,e,n){return q([t.customClass,{[e]:!0},n])}function G(t,e){return function(t){let e="";if(!t||b(t))return e;for(const n in t){const r=t[n],s=n.startsWith("--")?n:O(n);(b(r)||"number"==typeof r)&&(e+=`${s}:${r};`)}return e}(V([t.customStyle,e]))}const H="nut",L="update:modelValue",R="change",U="click",W="close",Z="focus",J="blur",K="confirm",Q="search",X="clear",Y={...E,popClass:{type:String,default:""},width:P(""),height:P(""),name:z(""),size:P(""),classPrefix:{type:String,default:"nut-icon"},fontClassName:{type:String,default:"nutui-iconfont"},customColor:{type:String,default:""}},tt={[U]:t=>t instanceof Object},et="nut-icon",nt=t({name:et,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),rt=i(t({...nt,props:Y,emits:tt,setup(t,{emit:i}){const f=t;function p(t){i(U,t)}const d=e((()=>!!f.name&&f.name.includes("/"))),y=e((()=>{const t={};return d.value?t[`${et}__img`]=!0:(t[f.fontClassName]=!0,t[`${f.classPrefix}-${f.name}`]=!0,t[f.popClass]=!0),D(f,et,t)})),m=e((()=>{const t={color:f.customColor,fontSize:l(f.size),width:l(f.width),height:l(f.height)};return G(f,t)}));return(t,e)=>{const i=c,l=u;return n(d)?(r(),s(i,{key:0,class:o(n(y)),style:a(n(m)),src:t.name,onClick:p},null,8,["class","style","src"])):(r(),s(l,{key:1,class:o(n(y)),style:a(n(m)),onClick:p},null,8,["class","style"]))}}}),[["__scopeId","data-v-347bc43f"]]);export{J as B,U as C,Z as F,rt as N,H as P,Q as S,j as T,L as U,z as a,R as b,E as c,G as d,y as e,N as f,D as g,W as h,b as i,B as j,X as k,_ as l,P as m,d as n,S as o,l as p,m as q,w as r,A as s,$ as t,K as u,v,g as w};
