import{d as e,b as r,w as s,f as t,h as l,i as o,j as a,l as i,n,k as u,C as d,a as c,H as p,E as m,s as f,t as v,q as y,u as h,v as _}from"./index-CcNqTXc_.js";import{a as b,N as g}from"./cell.x6qLy1NV.js";import{f as A,a as P,F as j}from"./form.DgMEBq-C.js";import{d as w,r as E,s as q,u as x,P as $,c as k,l as I,a as S,v as C,m as M,t as O,p as H}from"./icon.ClHjHGyE.js";import{u as W}from"./useProvide.CsNGzjfm.js";import{_ as G}from"./plugin-vueexport-helper.BCo6x5W8.js";import{u as L}from"./useInject.JvCMSTjf.js";const T=`${$}-form`,V=e({name:T,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),F=G(e({...V,props:A,emits:P,setup(e,{expose:m,emit:f}){const v=e,y=f;m({reset:function(){A()},submit:function(){return k(),!1},validate:k});const h=r((()=>c({}))),{internalChildren:_}=W(j,"nut-form-item")({props:v,formErrorTip:h}),g=r((()=>w(v,T)));function A(){Object.keys(h.value).forEach((e=>{h.value[e]=""}))}function P(e){let r=[];return e.forEach((e=>{var s,t,l,o;let a=e.type;a=a.name||a,"nut-form-item"===a||(null==a?void 0:a.toString().endsWith("form-item"))?r.push({prop:null==(s=e.props)?void 0:s.prop,rules:(null==(t=e.props)?void 0:t.rules)||[]}):Array.isArray(e.children)&&(null==(l=e.children)?void 0:l.length)?r=r.concat(P(e.children)):E(e.children)&&Object.keys(e.children)?(null==(o=e.children)?void 0:o.default)&&(e.children=e.children.default(),r=r.concat(P(e.children))):Array.isArray(e)&&(r=r.concat(P(e)))})),r}function $(e){e.message&&y("validate",e),h.value[e.prop]=e.message}function k(e=""){return new Promise(((r,s)=>{try{const s=P(null==_?void 0:_.map((e=>e.vnode))).map((r=>e&&e!==r.prop?Promise.resolve(!0):async function(e){const{rules:r,prop:s}=e,t=e=>new Promise(((r,s)=>{try{$(e),r(e)}catch(t){s(t)}})),l=q(v.modelValue,s||"");$({prop:s,message:""});const o=v.rules||{},a=[...(null==o?void 0:o[s])||[],...r];for(;a.length;){const e=a.shift(),{validator:r,...o}=e,{required:n,regex:u,message:d}=o,c={prop:s,message:d};if(n)if(Array.isArray(l)){if(!l.length)return t(c)}else if(!l&&0!==l)return t(c);if(u&&!u.test(String(l)))return t(c);if(r){const e=r(l,o);if(x(e))try{if(!1===await e)return t(c)}catch(i){return t({prop:s,message:i})}else if(!e)return t(c)}}return Promise.resolve(!0)}(r)));Promise.all(s).then((e=>{const s={valid:!0,errors:[]};(e=e.filter((e=>!0!==e))).length&&(s.valid=!1,s.errors=e),r(s)}))}catch(t){s(t)}}))}return s((()=>v.modelValue),(()=>{A()}),{immediate:!0}),(e,r)=>{const s=p;return t(),l(s,{class:n(g.value),style:u(e.customStyle),action:"#",onSubmit:d((()=>!1),["prevent"])},{default:o((()=>[a(b,null,{default:o((()=>[i(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-dea67cbb"]]),N={...k,required:I,prop:S(""),label:S(""),rules:C([]),labelWidth:M(""),labelAlign:S("left"),bodyAlign:S("left"),errorMessageAlign:S("left"),showErrorLine:O,showErrorMessage:O,labelPosition:S(void 0),starPosition:S(void 0)},z=`${$}-form-item`,B=e({name:z,inheritAttrs:!1,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),D=G(e({...B,props:N,setup(e){var s;const d=e,c=m(),p=L(j),b=r((()=>{var e,r;if(!1===d.required)return!1;const s=null==(r=null==(e=p.parent)?void 0:e.props)?void 0:r.rules;let t=!1;for(const l in s)Object.prototype.hasOwnProperty.call(s,l)&&l===d.prop&&Array.isArray(s[l])&&(t=s[l].some((e=>e.required)));return d.required||d.rules.some((e=>e.required))||t})),A=r((()=>{var e;const r=null==(e=p.parent)?void 0:e.props.labelPosition;return`nut-form-item__${d.labelPosition?d.labelPosition:r}`})),P=r((()=>{var e;const r=null==(e=p.parent)?void 0:e.props.starPosition;return`nut-form-item__star-${d.starPosition?d.starPosition:r}`})),E=r((()=>w(d,z))),q=r((()=>({width:H(d.labelWidth),textAlign:d.labelAlign}))),x=r((()=>({textAlign:d.bodyAlign}))),$=(null==(s=p.parent)?void 0:s.formErrorTip)||{},k=r((()=>({textAlign:d.errorMessageAlign})));return(e,r)=>{const s=_;return t(),l(g,{"custom-class":[{error:h($)[e.prop],line:e.showErrorLine},E.value,A.value],"custom-style":e.customStyle},{default:o((()=>{return[e.label||(r="label",c[r])?(t(),l(s,{key:0,class:n(["nut-cell__title nut-form-item__label",{required:b.value,[P.value]:P.value}]),style:u(q.value)},{default:o((()=>[i(e.$slots,"label",{},(()=>[f(v(e.label),1)]),!0)])),_:3},8,["style","class"])):y("",!0),a(s,{class:"nut-cell__value nut-form-item__body"},{default:o((()=>[a(s,{class:"nut-form-item__body__slots",style:u(x.value)},{default:o((()=>[i(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"]),h($)[e.prop]&&e.showErrorMessage?(t(),l(s,{key:0,class:"nut-form-item__body__tips",style:u(k.value)},{default:o((()=>[f(v(h($)[e.prop]),1)])),_:1},8,["style"])):y("",!0)])),_:3})];var r})),_:3},8,["custom-class","custom-style"])}}}),[["__scopeId","data-v-e2219ad2"]]);export{D as _,F as a};
