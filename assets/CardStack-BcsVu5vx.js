import{a,j as o,F as H}from"./emotion-react-jsx-runtime.browser.esm-KjBcCTgX.js";import{c as i}from"./emotion-styled-base.browser.esm-CI5WbkaJ.js";import{r as g}from"./index-BwDkhjyp.js";import{d as A,n as N,v as M,w as B}from"./index-C_eOKtFu.js";import{B as _}from"./Box-BvxFQC2G.js";import{I as y}from"./Icon-DpkAdYOh.js";import{C as I}from"./Chip-Cz2eT3g3.js";import{m as b}from"./motion-D72GihrG.js";import{A as D}from"./index-Dy8yH8dp.js";const R=i("span",{target:"ee2j69o0"})("display:flex;padding:4px 8px;justify-content:center;align-items:center;gap:8px;border-radius:100px;background:",({theme:e})=>e.colors.grey[300],";color:",({theme:e})=>e.colors.grey[900],";font-size:",({theme:e})=>e.font.size[100],";font-weight:",({theme:e})=>e.font.weight.medium,";");function x({id:e,totalItems:p,completedItems:m,loading:d,loadingText:l,errorText:s}){return d?a(I,{id:`${e}-header-loading`,"data-testid":`${e}-header-loading`,loading:!0,size:"small",children:l||"Updating..."}):s?o(I,{id:`${e}-header-error`,"data-testid":`${e}-header-error`,variant:"error",size:"small",children:[a(y,{icon:A,color:"error"}),s]}):o(R,{id:`${e}-header-count`,"data-testid":`${e}-header-count`,children:[a(y,{icon:N,id:`${e}-header-count-check-icon`,"data-testid":`${e}-header-count-check-icon`}),o("span",{id:`${e}-header-count-text`,"data-testid":`${e}-header-count-text`,children:[m,"/",p]})]})}try{x.displayName="Status",x.__docgenInfo={description:"",displayName:"Status",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},totalItems:{defaultValue:null,description:"",name:"totalItems",required:!0,type:{name:"number"}},completedItems:{defaultValue:null,description:"",name:"completedItems",required:!1,type:{name:"number"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:null,description:"",name:"loadingText",required:!1,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}}}}}catch{}const u=50,h=3,k=8,G=i("div",{target:"e1m6uuhv5"})("border-radius:8px;width:100%;min-width:320px;background:transparent;&[aria-expanded='true']{background:",({theme:e})=>e.colors.grey[200],";}"),P=i("span",{target:"e1m6uuhv4"})("font-size:",({theme:e})=>e.font.size[300],";font-weight:700;"),F=i("div",{target:"e1m6uuhv3"})("position:relative;min-height:",({minHeight:e})=>e==="auto"?"auto":`${e}px`,";transition:height 0.3s ease;&[aria-expanded='true']{padding:4px;margin:4px;}"),U=i("div",{target:"e1m6uuhv2"})("display:flex;align-items:center;justify-content:flex-start;border:",({theme:e})=>`1px solid ${e.colors.grey[300]}`,";border-radius:4px;position:absolute;left:",({left:e})=>e,"px;height:6px;z-index:",({zindex:e})=>e,";top:",({top:e})=>e,"px;width:",({reducedWidth:e})=>`calc(100% - ${e}px)`,";background:",({theme:e})=>e.colors.neutral[0],";"),W=b(U),Z=i("div",{target:"e1m6uuhv1"})("display:flex;align-items:center;justify-content:flex-start;border:",({theme:e})=>`1px solid ${e.colors.grey[300]}`,";border-radius:4px;position:absolute;left:0;width:100%;background:",({theme:e})=>e.colors.neutral[0],";&[aria-expanded='true']{background:",({theme:e})=>e.colors.grey[200],";border-color:transparent;}&[aria-expanded='false']{&[data-active='true']{border-color:",({theme:e})=>e.colors.grey[600],";}}height:",u,"px;top:0;z-index:",({zindex:e})=>e,";cursor:pointer;"),J=b(Z),K=i("div",{target:"e1m6uuhv0"})("margin-top:",u,"px;"),L=b(K),$=g.forwardRef(function({title:p,children:m,initialCollapsed:d=!0,totalItems:l,completedItems:s=0,id:t="card-stack",onToggle:C,active:q,loading:V,loadingText:T,errorText:E},w){const[r,v]=g.useState(!0);g.useEffect(()=>{v(d)},[d]);const z=()=>{const f=!r;v(f),C&&C(f)},c=l-1,S=c*h+u+2,j=r?S:"auto";return a(G,{"aria-expanded":!r,ref:w,id:`${t}-container`,"data-testid":`${t}-container`,children:o(F,{id:`${t}-content`,"data-testid":`${t}-content`,minHeight:j,"aria-expanded":!r,children:[a(J,{"aria-expanded":!r,zindex:c,onClick:z,layout:!0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},id:`${t}-header-container`,"data-testid":`${t}-header-container`,"data-active":q,children:o(_,{padding:16,display:"flex",justifyContent:"space-between",alignItems:"center",flex:1,id:`${t}-header`,"data-testid":`${t}-header`,children:[o(_,{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:8,id:`${t}-header-left`,"data-testid":`${t}-header-left`,children:[a(P,{id:`${t}-header-title`,"data-testid":`${t}-header-title`,children:p}),a(x,{id:t,totalItems:l,completedItems:s,loading:V,loadingText:T,errorText:E})]}),a(y,{icon:r?M:B,id:`${t}-header-icon`,"data-testid":`${t}-header-icon`})]})}),a(D,{children:r?a(H,{children:Array.from({length:c}).map((f,n)=>a(W,{zindex:c-1-n,top:u-h+n*h,reducedWidth:(n+1)*k,left:(n+1)*(k/2),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},id:`${t}-empty-card-${n}`,"data-testid":`${t}-empty-card-${n}`},n))}):a(L,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},id:`${t}-content-card`,"data-testid":`${t}-content-card`,children:m})})]})})});$.displayName="CardStack";try{$.displayName="CardStack",$.__docgenInfo={description:"",displayName:"CardStack",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},initialCollapsed:{defaultValue:{value:"true"},description:"",name:"initialCollapsed",required:!1,type:{name:"boolean"}},totalItems:{defaultValue:null,description:"",name:"totalItems",required:!0,type:{name:"number"}},completedItems:{defaultValue:{value:"0"},description:"",name:"completedItems",required:!1,type:{name:"number"}},id:{defaultValue:{value:"card-stack"},description:"",name:"id",required:!1,type:{name:"string"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"((collapsed: boolean) => void)"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:null,description:"",name:"loadingText",required:!1,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}}}}}catch{}export{$ as C};