import{a as n,j as u}from"./emotion-react-jsx-runtime.browser.esm-KjBcCTgX.js";import{B as c}from"./HeaderCloseButton-BwObO3PA.js";import{M as m,a as p,b as f,c as y}from"./ModalFooter-qMf2qio5.js";function o(i){const{open:l,onOpenChange:e,children:t,title:r,onAction:d,size:s,id:a="confirmation-modal"}=i;return n(c,{open:l,onOpenChange:e,children:u(y,{id:`${a}-content`,size:s??"extraSmall",children:[n(m,{id:`${a}-heading`,children:r}),n(p,{id:`${a}-description`,children:t}),n(f,{id:`${a}-footer`,cancelLabel:"No",actionLabel:"Yes",onAction:d,onCancel:()=>e==null?void 0:e(!1)})]})})}try{o.displayName="ConfirmationModal",o.__docgenInfo={description:"",displayName:"ConfirmationModal",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},onAction:{defaultValue:null,description:"",name:"onAction",required:!1,type:{name:"(() => void)"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}export{o as C};