import{d as e,b as r,w as s,f as t,h as o,i as l,j as a,l as i,n,u,k as c,C as d,a as p,H as m,E as f,s as v,t as y,q as h,v as _}from"./index-69fcfcc5.js";import{a as g,N as b}from"./cell.fa09dbe5.js";import{f as A,a as P,F as j}from"./form.a76f4415.js";import{d as w,r as E,s as q,u as x,P as $,c as k,l as I,a as S,v as C,m as M,t as O,p as H}from"./icon.0e247b7e.js";import{u as W}from"./useProvide.f8736687.js";import{_ as G}from"./plugin-vueexport-helper.1b428a4d.js";import{u as L}from"./useInject.99f6ed8f.js";const T=`${$}-form`,V=e({name:T,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),F=G(e({...V,props:A,emits:P,setup(e,{expose:f,emit:v}){const y=e;f({reset:function(){A()},submit:function(){return k(),!1},validate:k});const h=r((()=>p({}))),{internalChildren:_}=W(j,"nut-form-item")({props:y,formErrorTip:h}),b=r((()=>w(y,T)));function A(){Object.keys(h.value).forEach((e=>{h.value[e]=""}))}function P(e){let r=[];return e.forEach((e=>{var s,t,o,l;let a=e.type;a=a.name||a,"nut-form-item"===a||(null==a?void 0:a.toString().endsWith("form-item"))?r.push({prop:null==(s=e.props)?void 0:s.prop,rules:(null==(t=e.props)?void 0:t.rules)||[]}):Array.isArray(e.children)&&(null==(o=e.children)?void 0:o.length)?r=r.concat(P(e.children)):E(e.children)&&Object.keys(e.children)?(null==(l=e.children)?void 0:l.default)&&(e.children=e.children.default(),r=r.concat(P(e.children))):Array.isArray(e)&&(r=r.concat(P(e)))})),r}function $(e){e.message&&v("validate",e),h.value[e.prop]=e.message}function k(e=""){return new Promise(((r,s)=>{try{const s=P(null==_?void 0:_.map((e=>e.vnode))).map((r=>e&&e!==r.prop?Promise.resolve(!0):async function(e){const{rules:r,prop:s}=e,t=e=>new Promise(((r,s)=>{try{$(e),r(e)}catch(t){s(t)}})),o=q(y.modelValue,s||"");$({prop:s,message:""});const l=y.rules||{},a=[...(null==l?void 0:l[s])||[],...r];for(;a.length;){const e=a.shift(),{validator:r,...l}=e,{required:n,regex:u,message:c}=l,d={prop:s,message:c};if(n)if(Array.isArray(o)){if(!o.length)return t(d)}else if(!o&&0!==o)return t(d);if(u&&!u.test(String(o)))return t(d);if(r){const e=r(o,l);if(x(e))try{if(!1===await e)return t(d)}catch(i){return t({prop:s,message:i})}else if(!e)return t(d)}}return Promise.resolve(!0)}(r)));Promise.all(s).then((e=>{const s={valid:!0,errors:[]};(e=e.filter((e=>!0!==e))).length&&(s.valid=!1,s.errors=e),r(s)}))}catch(t){s(t)}}))}return s((()=>y.modelValue),(()=>{A()}),{immediate:!0}),(e,r)=>{const s=m;return t(),o(s,{class:n(u(b)),style:c(e.customStyle),action:"#",onSubmit:r[0]||(r[0]=d((()=>!1),["prevent"]))},{default:l((()=>[a(g,null,{default:l((()=>[i(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-4453221d"]]),N={...k,required:I,prop:S(""),label:S(""),rules:C([]),labelWidth:M(""),labelAlign:S("left"),bodyAlign:S("left"),errorMessageAlign:S("left"),showErrorLine:O,showErrorMessage:O,labelPosition:S(void 0),starPosition:S(void 0)},z=`${$}-form-item`,B=e({name:z,inheritAttrs:!1,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),D=G(e({...B,props:N,setup(e){var s;const d=e,p=f(),m=L(j),g=r((()=>{var e,r;if(!1===d.required)return!1;const s=null==(r=null==(e=m.parent)?void 0:e.props)?void 0:r.rules;let t=!1;for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&o===d.prop&&Array.isArray(s[o])&&(t=s[o].some((e=>e.required)));return d.required||d.rules.some((e=>e.required))||t})),A=r((()=>{var e;const r=null==(e=m.parent)?void 0:e.props.labelPosition;return`nut-form-item__${d.labelPosition?d.labelPosition:r}`})),P=r((()=>{var e;const r=null==(e=m.parent)?void 0:e.props.starPosition;return`nut-form-item__star-${d.starPosition?d.starPosition:r}`})),E=r((()=>w(d,z))),q=r((()=>({width:H(d.labelWidth),textAlign:d.labelAlign}))),x=r((()=>({textAlign:d.bodyAlign}))),$=(null==(s=m.parent)?void 0:s.formErrorTip)||{},k=r((()=>({textAlign:d.errorMessageAlign})));return(e,r)=>{const s=_;return t(),o(b,{"custom-class":[{error:u($)[e.prop],line:e.showErrorLine},u(E),u(A)],"custom-style":e.customStyle},{default:l((()=>{return[e.label||(r="label",p[r])?(t(),o(s,{key:0,class:n(["nut-cell__title nut-form-item__label",{required:u(g),[u(P)]:u(P)}]),style:c(u(q))},{default:l((()=>[i(e.$slots,"label",{},(()=>[v(y(e.label),1)]),!0)])),_:3},8,["style","class"])):h("v-if",!0),a(s,{class:"nut-cell__value nut-form-item__body"},{default:l((()=>[a(s,{class:"nut-form-item__body__slots",style:c(u(x))},{default:l((()=>[i(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"]),u($)[e.prop]&&e.showErrorMessage?(t(),o(s,{key:0,class:"nut-form-item__body__tips",style:c(u(k))},{default:l((()=>[v(y(u($)[e.prop]),1)])),_:1},8,["style"])):h("v-if",!0)])),_:3})];var r})),_:3},8,["custom-class","custom-style"])}}}),[["__scopeId","data-v-a93cf2fc"]]);export{D as _,F as a};
