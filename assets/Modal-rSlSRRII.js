import{a,j as q}from"./emotion-react-jsx-runtime.browser.esm-KjBcCTgX.js";import{M as V,a as g,b as h,c as M}from"./ModalFooter-qMf2qio5.js";import{B as _}from"./HeaderCloseButton-BwObO3PA.js";function i({open:n=!1,onOpenChange:d,title:t,titleFooter:o,children:r,onAction:s,size:u,cancelLabel:m,actionLabel:p,id:e="modal",actionSize:f="medium",onCancel:c,hideHeader:v=!1,hideFooter:y=!1,disableOutsidePressAndEscape:b=!1,loading:l=!1}){return a(_,{open:n,onOpenChange:d,disableOutsidePressAndEscape:b||l,children:q(M,{id:`${e}-content`,size:u,children:[!v&&a(V,{disabled:l,id:`${e}-heading`,footer:o,children:t}),a(g,{id:`${e}-description`,children:r}),!y&&a(h,{cancelLabel:m,actionLabel:p,onAction:s,onCancel:c,id:`${e}-footer`,size:f,loading:l})]})})}try{i.displayName="Modal",i.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},titleFooter:{defaultValue:null,description:"",name:"titleFooter",required:!1,type:{name:"ReactNode"}},open:{defaultValue:{value:"false"},description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},onAction:{defaultValue:null,description:"",name:"onAction",required:!1,type:{name:"(() => void)"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"(() => void)"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"extraSmall"'},{value:'"extraLarge"'}]}},cancelLabel:{defaultValue:null,description:"",name:"cancelLabel",required:!1,type:{name:"string"}},actionLabel:{defaultValue:null,description:"",name:"actionLabel",required:!1,type:{name:"string"}},id:{defaultValue:{value:"modal"},description:"",name:"id",required:!1,type:{name:"string"}},actionSize:{defaultValue:{value:"medium"},description:"",name:"actionSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},hideHeader:{defaultValue:{value:"false"},description:"",name:"hideHeader",required:!1,type:{name:"boolean"}},hideFooter:{defaultValue:{value:"false"},description:"",name:"hideFooter",required:!1,type:{name:"boolean"}},disableOutsidePressAndEscape:{defaultValue:{value:"false"},description:"",name:"disableOutsidePressAndEscape",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}export{i as M};