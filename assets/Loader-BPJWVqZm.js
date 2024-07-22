import{a as o,j as f}from"./emotion-react-jsx-runtime.browser.esm-KjBcCTgX.js";import{c as m}from"./emotion-styled-base.browser.esm-CI5WbkaJ.js";import{r as c}from"./index-BwDkhjyp.js";import{k as p}from"./emotion-react.browser.esm-D0pB3cbc.js";import{P as n}from"./constants-IjE9pQe9.js";const y=n.small-6,g=n.small-4,$=n.medium-4,v=n.large-4,a={small:`${g}px`,medium:`${$}px`,large:`${v}px`,extraSmall:`${y}px`},x=p`
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(0.6);
    opacity: 0.5;
  }
`,b=p`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,s=m("span",{target:"efz3o9b2"})("width:",({size:e="medium"})=>`calc(${a[e]} / 3 - ${a[e]} / 15)`,";height:",({size:e="medium"})=>`calc(${a[e]} / 3 - ${a[e]} / 15)`,";border-radius:50%;background:",({theme:e,color:r="primary",disabled:i})=>i?e.colors.grey[600]:e.colors[r].main,";animation:",x," 0.8s infinite linear;&:nth-of-type(2){animation-delay:0.4s;}"),S=m("span",{target:"efz3o9b1"})("display:flex;justify-content:center;align-items:center;gap:",({size:e="medium"})=>`calc(${a[e]} / 10)`,";position:relative;width:",({size:e="medium"})=>a[e],";height:",({size:e="medium"})=>a[e],";"),h=m("span",{target:"efz3o9b0"})("display:inline-block;width:",({size:e="medium"})=>a[e],";height:",({size:e="medium"})=>a[e],";&::after{content:'';display:block;width:",({size:e="medium"})=>`calc(${a[e]} - 4px)`,";height:",({size:e="medium"})=>`calc(${a[e]} - 4px)`,";border-radius:10000px;border-width:",({size:e="medium"})=>`calc(${a[e]} / 8)`,";border-style:solid;border-color:",({theme:e,color:r="primary",disabled:i})=>i?`${e.colors.grey[600]} ${e.colors.grey[600]} ${e.colors.grey[600]} transparent`:`${e.colors[r].main} ${e.colors[r].main} ${e.colors[r].main} transparent`,";animation:",b," 1.2s linear infinite;}"),w=c.forwardRef(function(r,i){return o(h,{ref:i,...r})}),L=c.forwardRef(function({id:r,"data-testid":i,...t},l){return f(S,{ref:l,id:r,"data-testid":i,...t,children:[o(s,{...t}),o(s,{...t}),o(s,{...t})]})}),z={spinner:w,dots:L},d=c.forwardRef(({type:e="spinner",size:r="medium",id:i="loader",...t},l)=>{const u=z[e];return u?o(u,{ref:l,size:r,id:`${e}-${i}`,"data-testid":`${e}-${i}`,...t}):null});d.displayName="Loader";try{d.displayName="Loader",d.__docgenInfo={description:"",displayName:"Loader",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:{value:"loader"},description:"",name:"id",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"primary"'},{value:'"secondary"'}]}},type:{defaultValue:{value:"spinner"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"spinner"'},{value:'"dots"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"extraSmall"'}]}}}}}catch{}export{d as L};
