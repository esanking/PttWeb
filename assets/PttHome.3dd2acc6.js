import{o as s,c as o,a as t,t as n,_ as b,d as y,r as w,F as g,b as x,e as k,f as i,g as $,M as C,p as B,h as L,i as T,j,u as H,k as I}from"./index.5fe61727.js";const M={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},S={class:"modal-dialog"},N={class:"modal-content"},V=t("div",{class:"modal-header"},[t("h5",{class:"modal-title text-primary",id:"staticBackdropLabel"},"\u8A0A\u606F"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),P={class:"modal-body"},E={class:"p-2"},F=["innerHTML"],R=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close")],-1),q={__name:"Card",props:{data:Object},emits:["active"],setup(e){return(d,c)=>(s(),o("div",M,[t("div",S,[t("div",N,[V,t("div",P,[t("div",E,[t("p",null,"\u4F5C\u8005: "+n(e.data.author),1),t("p",null,"\u6A19\u984C: "+n(e.data.title),1),t("p",null,"\u6642\u9593: "+n(e.data.releaseTime),1)]),t("div",{class:"p-2",innerHTML:e.data.conent},null,8,F)]),R])])]))}};const D=y({components:{Card:q},setup(){const{proxy:e}=j();H();let d=i([]),c=i({}),p=i(null),_=i(1),r=i(!0);$(()=>{a(),p.value=new C(document.getElementById("staticBackdrop"),{keyboard:!1}),window.onscroll=h(a,3e3)});function h(l,u){var m=!0;return function(at){m&&setTimeout(()=>{window.scrollY+window.innerHeight>=document.body.offsetHeight-100&&(r.value=!0,_.value++,l.apply(this,arguments)),m=!0},u),m=!1}}async function a(){const l="https://protected-chamber-55237.herokuapp.com/ptt/getList";e.$http.get(l,{params:{page:_.value}}).then(u=>{d.value=d.value.concat(u.data.data)}).catch(u=>{r.value=!1})}function f(l){c.value=l,p.value.show()}return{text:d,article:f,data:c,loading:r}}}),v=e=>(B("data-v-07ff37b4"),e=e(),L(),e),G={class:"bg-indigo w-100",style:{height:"100vh"}},O={class:"w-100 bg-indigo"},Y={class:"header pt-4"},z=v(()=>t("h3",{class:"w-100 text-center text-purple"},"Stock PTT",-1)),A=["onClick"],J={key:0},K=["src","alt"],Q={key:0,class:"d-flex justify-content-center"},U=v(()=>t("div",{class:"spinner-border text-purple",role:"status"},[t("span",{class:"visually-hidden"})],-1)),W=[U],X={key:1,class:"d-flex justify-content-center"},Z=v(()=>t("h5",{class:"text-danger"},[I(" \u8F09\u5165\u5931\u6557 "),t("span",{class:"spinner-grow me-1",style:{width:".5rem",height:".5rem"},role:"status"}),t("span",{class:"spinner-grow me-1",style:{width:".5rem",height:".5rem"},role:"status"}),t("span",{class:"spinner-grow",style:{width:".5rem",height:".5rem"},role:"status"})],-1)),tt=[Z];function et(e,d,c,p,_,r){const h=w("Card");return s(),o(g,null,[t("div",G,[t("div",O,[t("div",Y,[z,(s(!0),o(g,null,x(e.text,a=>(s(),o("div",{key:a,class:"d-flex justify-content-center"},[t("div",{class:"bg-white w-75 d-flex justify-content-between mt-2",onClick:f=>e.article(a)},[t("div",null,[t("p",null,"\u4F5C\u8005: "+n(a.author),1),t("p",null,"\u6A19\u984C: "+n(a.title),1),t("p",null,"\u6642\u9593: "+n(a.releaseTime),1)]),a.imgList.length>0?(s(),o("div",J,[t("img",{src:a.imgList[0],alt:a.title},null,8,K)])):T("",!0)],8,A)]))),128))]),e.loading?(s(),o("div",Q,W)):(s(),o("div",X,tt))])]),k(h,{id:"staticBackdrop",data:e.data},null,8,["data"])],64)}var ot=b(D,[["render",et],["__scopeId","data-v-07ff37b4"]]);export{ot as default};
