import{d as a,r as s,a as e,f as o,h as t,i as l,j as r,s as u,Q as n,R as c,T as d,L as i,N as m,U as p,A as f,v as _,B as j}from"./index-CcNqTXc_.js";import{_ as w,a as g}from"./index._N7VwjSS.js";import{_ as v}from"./index.DGpfKLCq.js";import{_ as b}from"./index.DdF3CO17.js";import{_ as x}from"./plugin-vueexport-helper.BCo6x5W8.js";import"./cell.x6qLy1NV.js";import"./icon.ClHjHGyE.js";import"./form.DgMEBq-C.js";import"./useInject.JvCMSTjf.js";import"./useProvide.CsNGzjfm.js";const h=x(a({__name:"index",setup(a){const x=s(),h=e({account:"admin",password:"123456"}),k=a=>{x.value.validate(a)},y=async()=>{x.value.validate().then((async({valid:a,errors:s})=>{if(!a)return;const e=await n({userAccount:h.account,password:c(h.password)});if(!e||0!==e.code)return;d(e.data.accessToken);const o=i();await o.setUserinfo(),await o.setUserinfo(),m({title:"登录成功"}),p({url:"/pages/home/index"})}))},V=()=>{f({url:"/pages/login/register"})};return(a,s)=>{const e=_,n=b,c=w,d=v,i=g,m=j;return o(),t(e,{class:"login"},{default:l((()=>[r(e,{class:"login-title"},{default:l((()=>[u("登录账号")])),_:1}),r(i,{ref_key:"formRef",ref:x,"model-value":h,"custom-class":"login-form nut-form-custom"},{default:l((()=>[r(c,{label:"账号",prop:"account",rules:[{required:!0,message:"请输入账号"}]},{default:l((()=>[r(n,{modelValue:h.account,"onUpdate:modelValue":s[0]||(s[0]=a=>h.account=a),"custom-class":"form-item-input",placeholder:"请输入账号",onBlur:s[1]||(s[1]=a=>k("account"))},null,8,["modelValue"])])),_:1}),r(c,{label:"密码",prop:"password",rules:[{required:!0,message:"请输入密码"}]},{default:l((()=>[r(n,{modelValue:h.password,"onUpdate:modelValue":s[2]||(s[2]=a=>h.password=a),"custom-class":"form-item-input",type:"password",placeholder:"请输入密码",onBlur:s[3]||(s[3]=a=>k("password"))},null,8,["modelValue"])])),_:1}),r(e,{class:"nut-form-btn-wrap"},{default:l((()=>[r(d,{"custom-class":"nut-form-btn",block:"",type:"primary",onClick:y,class:"block"},{default:l((()=>[u(" 登录 ")])),_:1})])),_:1})])),_:1},8,["model-value"]),r(e,{class:"tip-btn-wrap"},{default:l((()=>[r(m,null,{default:l((()=>[u(" 没有账号？ "),r(m,{class:"text-btn",onClick:V},{default:l((()=>[u("去注册")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-969867b5"]]);export{h as default};
