import{a as m}from"./emotion-react-jsx-runtime.browser.esm-625b96f3.js";import{c as p}from"./emotion-styled-base.browser.esm-7182509f.js";import{r as c}from"./index-76fb7be0.js";import{u as f}from"./useThemeSizing-9bdd6769.js";import{E as v}from"./constants-e08cb710.js";import{m as y}from"./motion-88cdba5f.js";const b=p(y.button,{target:"e1ilsu5f0"})("border:",({theme:e,color:a,variant:l})=>e.getButtonBorder(e,a,l),";line-height:1;cursor:",e=>e.disabled?"default":"pointer",";border-radius:3px;display:inline-block;color:",({theme:e,color:a,variant:l})=>e.getButtonColor(e,a,l),";background:",({theme:e,color:a,variant:l})=>e.getButtonBackground(e,a,l),";opacity:",e=>e.disabled?.5:1,";margin:8px 8px;&:active{border:solid 2px #1b116e;}"),t=c.forwardRef(({size:e,disabled:a,children:l,onClick:n,color:r,disableElevation:u,type:o="button",...i},s)=>{const d=f({size:e});return m(b,{ref:s,type:o,onClick:n,disabled:a,size:e,color:r,css:d,whileHover:!a&&!u?v:{},transition:{type:"spring",stiffness:400,damping:10},...i,children:l})});try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},disableElevation:{defaultValue:null,description:"",name:"disableElevation",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"contained"'},{value:'"outlined"'},{value:'"gradient"'}]}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"reset"'},{value:'"button"'}]}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"AriaRole"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}export{t as B};
//# sourceMappingURL=Button-10fee9cd.js.map
