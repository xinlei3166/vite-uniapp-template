var e=Object.defineProperty,t=(t,l,a)=>(((t,l,a)=>{l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a})(t,"symbol"!=typeof l?l+"":l,a),a);import{c as l,g as a,r as o,o as s,a as i,d as n,b as u,w as c,e as r,f as d,h as v,i as f,j as p,u as m,n as h,k as g,l as b,m as _,F as y,p as x,q as w,s as C,t as T,v as $,S,x as k,y as z,z as I,A as P,B as j,C as V,D as B}from"./index-69fcfcc5.js";import{g as E,c as K,m as M,a as H,t as X,C as Y,b as A,U as D,i as R,N as G,p as N,d as O,P as q,T as F,e as U,f as L,h as Q,j as W}from"./icon.0e247b7e.js";import{u as J}from"./useProvide.f8736687.js";import{_ as Z}from"./plugin-vueexport-helper.1b428a4d.js";import{u as ee}from"./useInject.99f6ed8f.js";/* empty css              */function te(e){let t=null;e||(e=a()),t=l().in(e);return{query:t,getSelectorNodeInfo:e=>new Promise(((l,a)=>{t?t.select(e).boundingClientRect((t=>{t?l(t):a(new Error(`未找到对应节点: ${e}`))})).exec():a(new Error("未找到对应的SelectorQuery实例"))})),getSelectorNodeInfos:e=>new Promise(((l,a)=>{t?t.selectAll(e).boundingClientRect((t=>{const o=t;o&&o.length>0?l(o):a(new Error(`未找到对应节点: ${e}`))})).exec():a(new Error("未找到对应的SelectorQuery实例"))}))}}function le(e,t){const{getSelectorNodeInfo:l}=te(t);return l(`#${e}`)}const ae=window;const oe=void 0!==ae?ae.requestAnimationFrame||ae.webkitRequestAnimationFrame||function(e){ae.setTimeout(e,1e3/60)}:function(e){setTimeout(e,1e3/60)},se=10;function ie(){const e=o(0),t=o(0),l=o(0),a=o(0),s=o(0),i=o(0),n=o(0),u=o(0),c=o(""),r=()=>{s.value=0,i.value=0,n.value=0,u.value=0,c.value=""};return{move:o=>{const r=o.touches[0];var d,v;s.value=r.clientX-e.value,i.value=r.clientY-t.value,l.value=r.clientX,a.value=r.clientY,n.value=Math.abs(s.value),u.value=Math.abs(i.value),c.value||(c.value=(d=n.value,v=u.value,d>v&&d>se?"horizontal":v>d&&v>se?"vertical":""))},start:l=>{r(),e.value=l.touches[0].clientX,t.value=l.touches[0].clientY},reset:r,startX:e,startY:t,moveX:l,moveY:a,deltaX:s,deltaY:i,offsetX:n,offsetY:u,direction:c,isVertical:()=>"vertical"===c.value,isHorizontal:()=>"horizontal"===c.value}}function ne(e,t,l,a){const n=o(),u=`tabsContentRef-${E()}`,c=o({width:0,height:0});s((()=>{setTimeout((()=>{(async()=>{var e,t;if(l){const e=await a(u,l);c.value.width=e.width||0,c.value.height=e.height||0}else c.value.width=(null==(e=n.value)?void 0:e.clientWidth)||0,c.value.height=(null==(t=n.value)?void 0:t.clientHeight)||0})()}),100)}));const r=i({offset:0,moving:!1}),d=ie();let v="";return{touchMethods:{onTouchStart(t){e.swipeable&&d.start(t)},onTouchMove(l){e.swipeable&&(d.move(l),r.moving=!0,((l,a)=>{var o;let s=l;switch("horizontal"===e.direction?(v=l>0?"right":"left",s=Math.abs(s)/c.value.width*100):(v=a>0?"bottom":"top",s=a,s=Math.abs(s)/(null==(o=c.value)?void 0:o.height)*100),s>85&&(s=85),v){case"left":case"top":t.isEnd()&&(s=0,r.moving=!1);break;case"right":case"bottom":s=-s,t.isBegin()&&(s=0,r.moving=!1)}r.offset=s})(d.deltaX.value,d.deltaY.value),"horizontal"===e.direction&&d.isHorizontal()&&(l.preventDefault(),l.stopPropagation()),"vertical"===e.direction&&d.isVertical()&&(l.preventDefault(),l.stopPropagation()))},onTouchEnd(){if(r.moving)switch(r.moving=!1,v){case"left":case"top":r.offset>35&&t.next();break;case"right":case"bottom":r.offset<-35&&t.prev()}}},touchState:r,tabsContentRef:n,tabsContentID:u}}const ue=Symbol("tabs"),ce={...K,modelValue:M(0),customColor:String,direction:H("horizontal"),size:H("normal"),type:H("line"),titleScroll:Boolean,ellipsis:X,swipeable:Boolean,autoHeight:Boolean,background:String,animatedTime:M(300),titleGutter:M(0),align:H("center")},re={[Y]:e=>e instanceof Object,[A]:e=>e instanceof Object,[D]:e=>R(e)};class de{constructor(){t(this,"title",""),t(this,"titleSlot"),t(this,"paneKey",""),t(this,"disabled",!1)}}const ve=`${q}-tabs`,fe=n({name:ve,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),pe=Z(n({...fe,props:ce,emits:re,setup(e,{emit:t}){const l=e,i=a(),{getSelectorNodeInfo:n,getSelectorNodeInfos:z}=te(i),I=E(),P=o(null),{internalChildren:j}=J(ue,`${q}-tabs`)({activeKey:u((()=>l.modelValue||0)),autoHeight:u((()=>l.autoHeight)),animatedTime:u((()=>l.animatedTime))}),V=o([]);function B(e){e.forEach(((e,t)=>{var l,a,o,s,i,n,u,c,r;let d=e.type;if(d=d.name||d,"nut-tab-pane"===d){const d=new de;if((null==(l=e.props)?void 0:l.title)||(null==(a=e.props)?void 0:a["pane-key"])||(null==(o=e.props)?void 0:o.paneKey)){const l=F(null==(s=e.props)?void 0:s["pane-key"]),a="number"===l||"string"===l?String(null==(i=e.props)?void 0:i["pane-key"]):null,o=F(null==(n=e.props)?void 0:n.paneKey),v="number"===o||"string"===o?String(null==(u=e.props)?void 0:u.paneKey):null;d.title=null==(c=e.props)?void 0:c.title,d.paneKey=a||v||String(t),d.disabled=null==(r=e.props)?void 0:r.disabled}V.value.push(d)}else{if(" "===e.children)return;B(e.children)}}))}const K=o(l.modelValue||0);function M(e){const t=V.value.findIndex((t=>t.paneKey===String(e)));K.value=t}const H=u((()=>l.titleScroll&&"horizontal"===l.direction)),X=u((()=>l.titleScroll&&"vertical"===l.direction)),R=o([]),U=o(0),L=o(0),Q=o(!1),W=o(),Z=o([]),ee=o(!1);function ae(){l.titleScroll&&oe((()=>{Promise.all([n(`#nut-tabs__titles_${I}`),z(`#nut-tabs__titles_${I} .nut-tabs__titles-item`)]).then((([e,t])=>{var a,o,s,i;if(W.value=e,Z.value=t,W.value)if("vertical"===l.direction){t.reduce(((e,t)=>e+t.height),0)>(null==(a=W.value)?void 0:a.height)?ee.value=!0:ee.value=!1}else{t.reduce(((e,t)=>e+t.width),0)>(null==(o=W.value)?void 0:o.width)?ee.value=!0:ee.value=!1}const n=Z.value[K.value];let u=0;if("vertical"===l.direction){u=t.slice(0,K.value).reduce(((e,t)=>e+t.height),0)-((null==(s=W.value)?void 0:s.height)-n.height)/2}else{u=t.slice(0,K.value).reduce(((e,t)=>e+t.width),0)-((null==(i=W.value)?void 0:i.width)-(null==n?void 0:n.width))/2}k((()=>{Q.value=!0})),function(e,t){let l=0;const a="horizontal"===t?U.value:L.value,o=1;function s(){"horizontal"===t?U.value+=(e-a)/o:L.value+=(e-a)/o,++l<o&&oe(s)}s()}(u,l.direction)}))}))}function se(e=j.map((e=>e.vnode))){V.value=[],(e=null==e?void 0:e.filter((e=>"string"!=typeof e.children)))&&e.length&&B(e),M(l.modelValue),setTimeout((()=>{ae()}),500)}c((()=>j.map((e=>e.props))),(e=>{se(j)}),{deep:!0,immediate:!0}),c((()=>l.modelValue),(e=>{M(e),ae()})),s(se),r(se);const ie={isBegin:()=>0===K.value,isEnd:()=>K.value===V.value.length-1,next:()=>{K.value+=1;const e=V.value[K.value].disabled;ie.isEnd()&&e?ie.prev():e&&K.value<V.value.length-1?ie.next():ie.updateValue(V.value[K.value])},prev:()=>{K.value-=1;const e=V.value[K.value].disabled;ie.isBegin()&&e?ie.next():e&&K.value>0?ie.prev():ie.updateValue(V.value[K.value])},updateValue:e=>{t(D,e.paneKey),t(A,e)},tabChange:(e,l)=>{t(Y,e),e.disabled||K.value===l||(K.value=l,ie.updateValue(e))},setTabItemRef:(e,t)=>{R.value[t]=e}},{tabChange:ce}=ie,{touchState:re,touchMethods:fe,tabsContentID:pe,tabsContentRef:me}=ne(l,ie,i,le),he=u((()=>{let e=100*K.value;re.moving&&(e+=re.offset);let t={transform:"horizontal"===l.direction?`translate3d(-${e}%, 0, 0)`:`translate3d( 0,-${e}%, 0)`,transitionDuration:re.moving?void 0:`${l.animatedTime}ms`};return 0===l.animatedTime&&(t={}),t})),ge=u((()=>({background:l.background}))),be=u((()=>({color:"smile"===l.type?l.customColor:"",background:"line"===l.type?l.customColor:""}))),_e=u((()=>{if(!l.titleGutter)return{};const e=N(l.titleGutter);return"vertical"===l.direction?{paddingTop:e,paddingBottom:e}:{paddingLeft:e,paddingRight:e}})),ye=u((()=>O(l,ve,{[l.direction]:!0})));return(e,t)=>{const l=$,a=S;return d(),v(l,{ref_key:"container",ref:P,style:g(e.customStyle),class:h(m(ye))},{default:f((()=>[p(a,{id:`nut-tabs__titles_${m(I)}`,"scroll-x":m(H),"scroll-y":m(X),"scroll-with-animation":Q.value,"scroll-left":U.value,"scroll-top":L.value,"enable-flex":!0,class:h(["nut-tabs__titles",{[e.type]:e.type,scrollable:e.titleScroll,[e.size]:e.size}]),style:g(m(ge))},{default:f((()=>[p(l,{class:h(["nut-tabs__list",{"nut-tabs__titles-left":"left"===e.align}])},{default:f((()=>[e.$slots.titles?b(e.$slots,"titles",{key:0},void 0,!0):(d(),_(y,{key:1},[(d(!0),_(y,null,x(V.value,((t,a)=>(d(),v(l,{key:t.paneKey,class:h(["nut-tabs__titles-item uni",{"nut-tabs-active":t.paneKey===String(e.modelValue),disabled:t.disabled,"nut-tabs__titles-item-left":"left"===e.align}]),style:g(m(_e)),onClick:e=>m(ce)(t,a)},{default:f((()=>["line"===e.type?(d(),v(l,{key:0,class:"nut-tabs__titles-item__line",style:g(m(be))},null,8,["style"])):w("v-if",!0),"smile"===e.type?(d(),v(l,{key:1,class:"nut-tabs__titles-item__smile",style:g(m(be))},{default:f((()=>[p(G,{name:"joy-smile","custom-color":e.customColor},null,8,["custom-color"])])),_:1},8,["style"])):w("v-if",!0),p(l,{class:h(["nut-tabs__titles-item__text",{ellipsis:e.ellipsis}])},{default:f((()=>[C(T(t.title),1)])),_:2},1032,["class"])])),_:2},1032,["style","class","onClick"])))),128)),ee.value&&e.titleScroll?(d(),v(l,{key:0,class:"nut-tabs__titles-placeholder"})):w("v-if",!0)],64))])),_:3},8,["class"])])),_:3},8,["id","scroll-x","scroll-y","scroll-with-animation","scroll-left","scroll-top","class","style"]),p(l,{id:m(pe),ref_key:"tabsContentRef",ref:me,class:"nut-tabs__content",style:g(m(he)),onTouchstart:m(fe).onTouchStart,onTouchmove:m(fe).onTouchMove,onTouchend:m(fe).onTouchEnd,onTouchcancel:m(fe).onTouchEnd},{default:f((()=>[b(e.$slots,"default",{},void 0,!0)])),_:3},8,["id","style","onTouchstart","onTouchmove","onTouchend","onTouchcancel"])])),_:3},8,["style","class"])}}}),[["__scopeId","data-v-de8d38db"]]),me={...K,title:M(""),paneKey:M(""),disabled:Boolean},he={[Y]:()=>!0},ge=`${q}-tab-pane`,be=n({name:ge,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),_e=Z(n({...be,props:me,emits:he,setup(e){const t=e,{parent:l}=ee(ue),a=u((()=>{const e={display:0===(null==l?void 0:l.animatedTime.value)&&t.paneKey!==l.activeKey.value?"none":void 0};return U(t,e)})),o=u((()=>O(t,ge,{inactive:String(t.paneKey)!==(null==l?void 0:l.activeKey.value)&&(null==l?void 0:l.autoHeight.value)})));return(e,t)=>{const l=$;return d(),v(l,{style:g(m(a)),class:h(m(o))},{default:f((()=>[b(e.$slots,"default",{},void 0,!0)])),_:3},8,["style","class"])}}}),[["__scopeId","data-v-24aeb438"]]),ye={...K,width:M(""),height:M(""),direction:H("horizontal"),paginationVisible:Boolean,paginationColor:H("#fff"),loop:X,duration:M(500),autoPlay:M(0),isAutoPlay:X,initPage:M(0),touchable:X,isPreventDefault:X,isStopPropagation:X,list:{type:Array,default:()=>[]},paginationUnselectedColor:H("#ddd")},xe={[A]:e=>L(e)},we=Symbol("swiper"),Ce=`${q}-swiper`,Te=n({name:Ce,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),$e=Z(n({...Te,props:ye,emits:xe,setup(e,{expose:t,emit:l}){const o=e,s=a(),n=`container-${E()}`,r=i({active:0,num:0,rect:null,width:0,height:0,moving:!1,offset:0,touchTime:0,autoplayTimer:null,childrenVNode:[],style:{}}),C=ie(),T=u((()=>({[Ce]:!0}))),S=u((()=>"vertical"===o.direction)),P=u((()=>({[`${Ce}-inner`]:!0,[`${Ce}-vertical`]:S.value}))),j=u((()=>({[`${Ce}-pagination`]:!0,[`${Ce}-pagination-vertical`]:S.value}))),V=u((()=>S.value?C.deltaY.value:C.deltaX.value)),B=u((()=>C.direction.value===o.direction)),K=u((()=>D.length)),M=u((()=>r[S.value?"height":"width"])),H=u((()=>K.value*M.value)),X=u((()=>{if(r.rect){return(S.value?r.rect.height:r.rect.width)-M.value*K.value}return 0})),Y=u((()=>(r.active+K.value)%K.value));function A(){let e=0;e=r.offset,r.style={transitionDuration:`${r.moving?0:o.duration}ms`,transform:`translate${S.value?"Y":"X"}(${e}px)`,[S.value?"height":"width"]:M.value*K.value+"px",[S.value?"width":"height"]:`${S.value?r.width:r.height}px`}}const{internalChildren:D}=J(we,"nut-form-swiper")({props:o,size:M});function R(e,t=0){let l=e*M.value;o.loop||(l=Math.min(l,-X.value));let a=t-l;return o.loop||(a=Q(a,X.value,0)),a}function G({pace:e=0,offset:t=0,isEmit:a=!1}){if(K.value<=1)return;const{active:s}=r,i=function(e){const{active:t}=r;return e?o.loop?Q(t+e,-1,K.value):Q(t+e,0,K.value-1):t}(e),n=R(i,t);if(o.loop){if(D[0]&&n!==X.value){const e=n<X.value;D[0].exposed.setOffset(e?H.value:0)}if(D[K.value-1]&&0!==n){const e=n>0;D[K.value-1].exposed.setOffset(e?-H.value:0)}}r.active=i,r.offset=n,a&&s!==r.active&&l("change",Y.value),A()}function N(){r.moving=!0,r.active<=-1&&G({pace:K.value}),r.active>=K.value&&G({pace:-K.value})}function O(){r.autoplayTimer&&clearTimeout(r.autoplayTimer)}function q(e){N(),C.reset(),oe((()=>{oe((()=>{r.moving=!1,G({pace:e,isEmit:!0})}))}))}function F(){q(1)}function U(){+o.autoPlay<=0||K.value<=1||(O(),r.autoplayTimer=setTimeout((()=>{F(),U()}),Number(o.autoPlay)))}async function L(e=+o.initPage){O(),r.rect=await le(n,s),r.rect&&(e=Math.min(K.value-1,e),r.width=o.width?+o.width:r.rect.width,r.height=o.height?+o.height:r.rect.height,r.active=e,r.offset=R(r.active),r.moving=!0,A(),U())}function W(e){o.isStopPropagation&&e.stopPropagation(),o.touchable&&(C.start(e),r.touchTime=Date.now(),O(),N())}function Z(e){o.touchable&&r.moving&&(C.move(e),B.value&&G({offset:V.value}))}function ee(e){if(!o.touchable||!r.moving)return;const t=V.value/(Date.now()-r.touchTime);if((Math.abs(t)>.3||Math.abs(V.value)>+(M.value/2).toFixed(2))&&B.value){let e=0;const t=S.value?C.offsetY.value:C.offsetX.value;e=o.loop?t>0?V.value>0?-1:1:0:-Math[V.value>0?"ceil":"floor"](V.value/M.value),G({pace:e,isEmit:!0})}else V.value&&G({pace:0});r.moving=!1,A(),U()}return t({prev:function(){q(-1)},next:F,to:function(e){N(),C.reset(),oe((()=>{let t;r.moving=!1,t=o.loop&&K.value===e?0===r.active?0:e:e%K.value,G({pace:t-r.active,isEmit:!0})}))}}),z((()=>{O()})),I((()=>{O()})),c((()=>o.initPage),(e=>{k((()=>{L(+e)}))})),c((()=>o.height),(e=>{k((()=>{L(+e)}))})),c((()=>D.length),(()=>{k((()=>{L()}))})),c((()=>o.autoPlay),(e=>{+e>0?U():O()})),(e,t)=>{const l=$;return d(),v(l,{id:n,class:h([m(T),e.customClass]),"catch-move":e.isPreventDefault,style:g([e.customStyle]),onTouchstart:W,onTouchmove:Z,onTouchend:ee,onTouchcancel:ee},{default:f((()=>[p(l,{class:h(m(P)),style:g(r.style)},{default:f((()=>[b(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"]),b(e.$slots,"page",{},void 0,!0),e.paginationVisible&&!e.$slots.page?(d(),v(l,{key:0,class:h(m(j))},{default:f((()=>[(d(!0),_(y,null,x(m(D).length,((t,l)=>(d(),_("i",{key:l,class:h(["pagination",{active:m(Y)===l}]),style:g({backgroundColor:m(Y)===l?e.paginationColor:e.paginationUnselectedColor})},null,6)))),128))])),_:1},8,["class"])):w("v-if",!0)])),_:3},8,["class","catch-move","style","onTouchstart","onTouchmove","onTouchend","onTouchcancel"])}}}),[["__scopeId","data-v-73551413"]]),Se={...K},ke=`${q}-swiper-item`,ze=n({name:ke,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),Ie=Z(n({...ze,props:Se,setup(e,{expose:t}){const l=e,{parent:a}=ee(we),o=i({offset:0}),s=u((()=>O(l,ke))),n=u((()=>{const e={},t=null==a?void 0:a.props.direction;return(null==a?void 0:a.size.value)&&(e["horizontal"===t?"width":"height"]=`${null==a?void 0:a.size.value}px`),o.offset&&(e.transform=`translate${"horizontal"===t?"X":"Y"}(${o.offset}px)`),U(l,e)}));return t({setOffset:function(e){o.offset=e}}),(e,t)=>{const l=$;return d(),v(l,{class:h(m(s)),style:g(m(n))},{default:f((()=>[b(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-b00f5365"]]),Pe=Z(n({__name:"Menu",setup(e){const t=e=>{P({url:e})};return(e,l)=>{const a=G,o=$,s=j;return d(),_(y,null,[w(" card flex flex-wrap card-menu-item flex-col items-center icon-wrap order1 text order3 order2 order4 order5 "),p(o,{class:"card flex flex-wrap"},{default:f((()=>[p(o,{class:"card-menu-item flex flex-col items-center",onClick:l[0]||(l[0]=e=>t("/pages/components/store/index"))},{default:f((()=>[p(o,{class:"icon-wrap order1"},{default:f((()=>[p(a,{"custom-class":"icon",size:"21","custom-color":"#fff",name:"edit"})])),_:1}),p(s,{class:"text"},{default:f((()=>[C("Store")])),_:1})])),_:1}),p(o,{class:"card-menu-item flex flex-col items-center",onClick:l[1]||(l[1]=e=>t("/pages/components/provide/index"))},{default:f((()=>[p(o,{class:"icon-wrap order3"},{default:f((()=>[p(a,{"custom-class":"icon",size:"21","custom-color":"#fff",name:"star-n"})])),_:1}),p(s,{class:"text"},{default:f((()=>[C("Provide")])),_:1})])),_:1}),p(o,{class:"card-menu-item flex flex-col items-center",onClick:l[2]||(l[2]=e=>t("/pages/components/bus/index"))},{default:f((()=>[p(o,{class:"icon-wrap order2"},{default:f((()=>[p(a,{"custom-class":"icon",size:"21","custom-color":"#fff",name:"success"})])),_:1}),p(s,{class:"text"},{default:f((()=>[C("Bus")])),_:1})])),_:1}),p(o,{class:"card-menu-item flex flex-col items-center",onClick:l[3]||(l[3]=e=>t("/pages/components/table/index"))},{default:f((()=>[p(o,{class:"icon-wrap order4"},{default:f((()=>[p(a,{"custom-class":"icon",size:"21","custom-color":"#fff",name:"date"})])),_:1}),p(s,{class:"text"},{default:f((()=>[C("Table")])),_:1})])),_:1}),p(o,{class:"card-menu-item flex flex-col items-center",onClick:l[4]||(l[4]=e=>t("/pages/components/sortable/index"))},{default:f((()=>[p(o,{class:"icon-wrap order5"},{default:f((()=>[p(a,{"custom-class":"icon",size:"21","custom-color":"#fff",name:"category"})])),_:1}),p(s,{class:"text"},{default:f((()=>[C("Sortable")])),_:1})])),_:1})])),_:1})],2112)}}}),[["__scopeId","data-v-576be4f2"]]),je={...K,customColor:String,textColor:String,type:H("default"),plain:Boolean,round:Boolean,mark:Boolean,closeable:Boolean,closeIconSize:M(11),disabled:Boolean},Ve={[Y]:e=>e instanceof Object,[W]:e=>e instanceof Object},Be=`${q}-tag`,Ee=n({name:Be,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),Ke=Z(n({...Ee,props:je,emits:Ve,setup(e,{emit:t}){const l=e,a=u((()=>O(l,Be,{[`${Be}--${l.type}`]:l.type,[`${Be}--plain`]:l.plain,[`${Be}--round`]:l.round,[`${Be}--mark`]:l.mark,[`${Be}--disabled`]:l.disabled}))),o=u((()=>{const e={};return l.textColor&&(e.color=l.textColor),l.customColor&&(e.borderColor=l.customColor,l.plain?l.textColor||(e.color=l.customColor):e.background=l.customColor),U(l,e)}));function s(e){l.disabled||t(Y,e)}function i(e){l.disabled||t(W,e)}return(e,t)=>{const n=$;return d(),v(n,{class:h(m(a)),style:g(m(o)),onClick:s},{default:f((()=>[b(e.$slots,"default",{},void 0,!0),l.closeable?(d(),v(G,{key:0,name:"close","custom-class":"nut-tag--close",size:l.closeIconSize,onClick:V(i,["stop"])},null,8,["size","onClick"])):w("v-if",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-e3b1712f"]]),Me=Z(n({__name:"List",props:{data:{type:Array,default:()=>[]},tab:{type:String,default:""}},setup:e=>(t,l)=>{const a=B,o=$,s=Ke,i=j;return d(),_(y,null,[w(" list flex flex-col list-item list-item-left list-item-img list-item-right justify-between list-item-title list-item-desc list-item-tag plain round list-item-price list-item-space "),p(o,{class:"list flex flex-col"},{default:f((()=>[(d(!0),_(y,null,x(e.data,((t,l)=>(d(),v(o,{key:l,class:"list-item flex"},{default:f((()=>[p(o,{class:"list-item-left"},{default:f((()=>[p(a,{class:"list-item-img",src:"/vite-uniapp-template/static/img/ipad.jpeg"})])),_:1}),p(o,{class:"list-item-right flex flex-col justify-between"},{default:f((()=>[p(o,{class:"list-item-title"},{default:f((()=>[C("这是一个"+T(e.tab)+"的标题",1)])),_:1}),p(o,{class:"list-item-desc"},{default:f((()=>[C("这是一段描述")])),_:1}),p(o,null,{default:f((()=>[p(s,{"custom-color":"#969799",class:"list-item-tag plain round",plain:"",round:""},{default:f((()=>[C("标签")])),_:1}),p(s,{"custom-color":"#969799",class:"list-item-tag plain round",plain:"",round:""},{default:f((()=>[C("标签")])),_:1}),p(s,{"custom-color":"#969799",class:"list-item-tag plain round",plain:"",round:""},{default:f((()=>[C("标签")])),_:1})])),_:1}),p(o,null,{default:f((()=>[p(i,{class:"list-item-price"},{default:f((()=>[C("0.3万/月")])),_:1}),p(i,{class:"list-item-space"},{default:f((()=>[C("面积150平")])),_:1})])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1})],2112)}}),[["__scopeId","data-v-f1352cbc"]]),He=Z(n({__name:"index",setup(e){const t=o(0);return(e,l)=>{const a=Ie,o=$e,s=_e,i=pe;return d(),_(y,null,[w("  "),p(o,{"custom-class":"my-swiper","init-page":1,"pagination-visible":!0,"pagination-color":"#426543","auto-play":"3000"},{default:f((()=>[p(a,null,{default:f((()=>[C("明心见性")])),_:1}),p(a,null,{default:f((()=>[C("学习思考")])),_:1}),p(a,null,{default:f((()=>[C("坚持不懈")])),_:1}),p(a,null,{default:f((()=>[C("收放自如")])),_:1})])),_:1}),p(Pe),p(i,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),"custom-class":"tabs"},{default:f((()=>[p(s,{"custom-class":"tab-pane",title:"热门推荐"},{default:f((()=>[p(Me,{tab:"热门推荐",data:Array.from({length:10})},null,8,["data"])])),_:1}),p(s,{"custom-class":"tab-pane",title:"时尚流行"},{default:f((()=>[p(Me,{tab:"时尚流行",data:Array.from({length:10})},null,8,["data"])])),_:1}),p(s,{"custom-class":"tab-pane",title:"经典怀旧"},{default:f((()=>[p(Me,{tab:"经典怀旧",data:Array.from({length:10})},null,8,["data"])])),_:1}),p(s,{"custom-class":"tab-pane",title:"其他类型"},{default:f((()=>[p(Me,{tab:"其他类型",data:Array.from({length:10})},null,8,["data"])])),_:1})])),_:1},8,["modelValue"])],64)}}}),[["__scopeId","data-v-0738dc5c"]]);export{He as default};
