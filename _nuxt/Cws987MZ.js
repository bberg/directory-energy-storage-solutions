import{_ as p,a as v}from"./DQe0svj7.js";import{d as w,x as C,I as r,c as a,J as o,w as f,h as N,e as i,i as B,n as h,t as s,f as t,F as V,M as j,g as F,N as T,C as $}from"./ZRTsPAPq.js";const z={key:1,class:"w-full h-36 rounded-t flex items-center justify-center bg-gray-200 dark:bg-gray-600"},D={key:2,class:"w-full h-36 flex justify-center items-center rounded-t font-bold text-2xl bg-gray-200 dark:bg-gray-600"},I={class:"p-6"},L={class:"m-0 text-lg font-semibold dark:text-gray-50"},A={class:"line-clamp-4 mt-2"},E={class:"p-0 mt-2 flex gap-2"},J={class:"inline-flex gap-2 items-center"},M=["src"],S={class:"font-semibold dark:text-gray-50"},U={class:"text-gray-600 dark:text-gray-300"},K=w({__name:"Card",props:["item"],setup(e){var c,l;const n=(l=(c=C().directory)==null?void 0:c.grid)==null?void 0:l.card;return(q,d)=>{var g,u,_;const y=p,x=T,b=v,m=$;return((g=r(n))==null?void 0:g.type)!=="bullet"?(a(),o(m,{key:0,to:e.item._path,class:h(["border col-span-1 border-gray-200 dark:border-gray-500 hover:border-primary-400 hover:border-solid dark:hover:border-primary-300 rounded relative group transition-all",((u=r(n))==null?void 0:u.type)==="shadow"?"shadow-sm":((_=r(n))==null?void 0:_.type)==="dashed"?"border-dashed":""])},{default:f(()=>[e.item.featured?(a(),o(y,{key:0,class:"ml-6"})):N("",!0),e.item.card_image?(a(),i("div",z,[B(x,{sizes:"400px",alt:`${e.item.title} banner`,class:h(["w-full max-h-36 object-scale-down",e.item.invert?"invert":""]),src:e.item.card_image??"/logo.png"},null,8,["alt","src","class"])])):(a(),i("div",D,s(e.item.title),1)),t("div",I,[t("h3",L,s(e.item.title),1),t("p",A,s(e.item.description),1),t("div",E,[(a(!0),i(V,null,j(e.item.tags,k=>(a(),o(b,{tag:k},null,8,["tag"]))),256))])])]),_:1},8,["to","class"])):(a(),o(m,{key:1,to:e.item._path},{default:f(()=>[t("div",J,[t("img",{class:"h-5 w-5",src:e.item.cover??"/logo.png"},null,8,M),t("span",S,s(e.item.title),1),d[0]||(d[0]=F(" - ")),t("span",U,s(e.item.description),1)])]),_:1},8,["to"]))}}});export{K as _};
