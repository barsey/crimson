import{j as V,a as n,F as te}from"./emotion-react-jsx-runtime.browser.esm-B1TMS0DI.js";import{m as H,n as ae,p as j,q as O,c as ne,r as oe,t as le,e as ie,h as re,g as se,k as ue,v as de,i as ce,u as B,w as me,a as fe,F as pe,x as ve,o as ge,f as ye,s as be,d as he,y as xe}from"./floating-ui.react-C1nSsq-1.js";import{r as l}from"./index-BwDkhjyp.js";import{c as L}from"./emotion-styled-base.browser.esm-Dp_FgEmo.js";import{z as Ie,A as _e}from"./index-BBMM-L_h.js";import{I as T}from"./Icon-Bht7JVrg.js";import{B as A}from"./Box-BzSzghsi.js";import{B as Me}from"./ButtonGroupContext-DHhik5nJ.js";import{P as $e}from"./constants-IjE9pQe9.js";const C=l.createContext({getItemProps:()=>({}),activeIndex:null,setActiveIndex:()=>{},setHasFocusInside:()=>{},isOpen:!1}),_=L("button",{target:"e17bu31d0"})("outline:0;background-color:transparent;border:none;&:hover{cursor:pointer;}&.RootMenu,&.MenuItem{font-size:",({theme:e})=>e.font.size[100],";font-family:",({theme:e})=>e.font.family.base,";color:",({theme:e,color:t})=>t?e.colors[t].main:e.colors.neutral[1e3],";}&.RootMenu{height:",({itemSize:e="medium"})=>$e[e],"px;border-radius:4px;color:",({theme:e})=>e.colors.neutral[1e3],";background-color:",({theme:e})=>e.colors.neutral[0],";border:",({theme:e,color:t})=>`1px solid ${t?e.colors[t].main:e.colors.grey[400]}`,";display:flex;padding:",({theme:e,itemSize:t="medium"})=>`${e.verticalTextSpacing(t)}px`,";justify-content:center;align-items:center;box-shadow:",({theme:e})=>e.shadow.main,";position:relative;svg{fill:",({theme:e,color:t})=>t?e.colors[t].main:e.colors.neutral[1e3],";}&[data-open],&:hover{cursor:pointer;background-color:",({theme:e})=>e.colors.grey[50],";border-color:",({theme:e,color:t})=>t?e.colors[t][700]:e.colors.grey[700],";svg{fill:",({theme:e,color:t})=>t?e.colors[t][700]:e.colors.neutral[1e3],";}}&[aria-disabled='true']{background-color:",({theme:e})=>e.colors.grey[100],";border-color:",({theme:e})=>e.colors.grey[400],";color:",({theme:e})=>e.colors.grey[600],";cursor:not-allowed;svg{fill:",({theme:e})=>e.colors.grey[600],";}}&:focus{&::after{content:'';position:absolute;top:-5px;left:-5px;right:-5px;bottom:-5px;border:",({theme:e,color:t="primary"})=>`1px solid ${e.colors[t][300]}`,";border-radius:6px;z-index:1;pointer-events:none;}}}&.MenuItem{display:flex;justify-content:space-between;align-items:center;background:none;width:100%;border:none;border-radius:4px;text-align:left;line-height:1.8;min-width:110px;margin:0;outline:0;&:focus,&[data-nested][data-open]:not([data-focus-inside]),&[data-focus-inside][data-open]{background:",({theme:e})=>e.colors.grey[200],";}&[disabled]{color:",({theme:e})=>e.colors.grey[500],";cursor:default;}}");try{_.displayName="ActionItem",_.__docgenInfo={description:"",displayName:"ActionItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},itemSize:{defaultValue:null,description:"",name:"itemSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}const qe=L("div",{target:"erz75sz0"})("background:rgba(255, 255, 255, 0.8);backdrop-filter:blur(10px);padding:4px;outline:0;border-radius:4px;box-shadow:",({theme:e})=>e.shadow[200],";"),x=l.forwardRef(({children:e,label:t,renderContent:s,disabled:i,color:v,placement:u="bottom-start",itemSize:m,id:d="action-menu",...f},y)=>{const[r,M]=l.useState(!1),[D,w]=l.useState(!1),[$,q]=l.useState(null),z=l.useRef([]),R=l.useRef([]),F=l.useContext(C),c=H(),g=ae(),b=j(),S=O(),a=b!=null,{floatingStyles:G,refs:P,context:p}=ne({nodeId:g,open:r,onOpenChange:M,placement:a?"right-start":u,middleware:[ge({mainAxis:a?0:4,alignmentAxis:a?-4:0}),ye(),be()],whileElementsMounted:he}),U=oe(p,{enabled:a,delay:{open:75},handleClose:le({blockPointerEvents:!0})}),J=ie(p,{event:"mousedown",toggle:!a,ignoreMouse:a}),K=re(p,{role:"menu"}),Q=se(p,{bubbles:!0}),W=ue(p,{listRef:z,activeIndex:$,nested:a,onNavigate:q}),X=de(p,{listRef:R,onMatch:r?q:void 0,activeIndex:$}),{getReferenceProps:Y,getFloatingProps:Z,getItemProps:ee}=ce([U,J,K,Q,W,X]);l.useEffect(()=>{if(!c)return;function I(){M(!1)}function h(E){E.nodeId!==g&&E.parentId===b&&M(!1)}return c.events.on("click",I),c.events.on("menuopen",h),()=>{c.events.off("click",I),c.events.off("menuopen",h)}},[c,g,b]),l.useEffect(()=>{r&&c&&c.events.emit("menuopen",{parentId:b,nodeId:g})},[c,r,g,b]);const o=`${d}-${a?"menu-item":"root-menu"}`;return V(ve,{id:g,children:[V(_,{ref:B([P.setReference,S.ref,y]),tabIndex:a?F.activeIndex===S.index?0:-1:void 0,role:a?"menuitem":void 0,"data-open":r?"":void 0,"data-nested":a?"":void 0,"data-focus-inside":D?"":void 0,id:o,"data-testid":o,className:a?"MenuItem":s?"":"RootMenu",disabled:i,"aria-disabled":i,color:v,itemSize:m,...Y(F.getItemProps({...f,onFocus(I){var h;(h=f.onFocus)==null||h.call(f,I),w(!1),F.setHasFocusInside(!0)}})),children:[n(A,{display:"flex",alignItems:"center",gap:8,id:`${o}-content`,"data-testid":`${o}-content`,children:s||V(te,{children:[t&&n(A,{"data-testid":`${o}-content-label`,id:`${o}-content-label`,as:"span",children:t}),!a&&n(A,{"data-testid":`${o}-content-label-icon-container`,id:`${o}-content-label-icon-container`,as:"span",display:"inline-block",fontSize:10,children:n(T,{"data-testid":`${o}-content-label-icon`,id:`${o}-content-label-icon`,icon:Ie})})]})}),a&&n("span",{"aria-hidden":!0,style:{marginLeft:10,fontSize:12},"data-testid":`${o}-content-label-icon`,id:`${o}-content-label-icon`,children:n(T,{"data-testid":`${o}-content-icon`,id:`${o}-content-icon`,icon:_e})})]}),n(C.Provider,{value:{activeIndex:$,setActiveIndex:q,getItemProps:ee,setHasFocusInside:w,isOpen:r},children:n(me,{elementsRef:z,labelsRef:R,children:r&&n(fe,{children:n(pe,{context:p,modal:!1,initialFocus:a?-1:0,returnFocus:!a,children:n(qe,{ref:P.setFloating,style:G,id:`${d}-menu-container`,"data-testid":`${d}-menu-container`,...Z(),children:e})})})})})]})});x.displayName="ActionMenuComponent";try{x.displayName="ActionMenuComponent",x.__docgenInfo={description:"",displayName:"ActionMenuComponent",props:{id:{defaultValue:{value:"action-menu"},description:"",name:"id",required:!1,type:{name:"string"}},placement:{defaultValue:{value:"bottom-start"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},itemSize:{defaultValue:null,description:"",name:"itemSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},renderContent:{defaultValue:null,description:"",name:"renderContent",required:!1,type:{name:"ReactNode"}},nested:{defaultValue:null,description:"",name:"nested",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}const N=l.forwardRef(({placement:e="bottom-start",itemSize:t="medium",id:s="action-menu",...i},v)=>{const u=j(),{disabled:m,size:d,color:f}=l.useContext(Me);return u===null?n(xe,{children:n(x,{placement:e,itemSize:d||t,color:f,disabled:m,id:s,"data-testid":s,...i,ref:v})}):n(x,{id:`${s}-${u}`,"data-testid":`${s}-${u}`,...i,ref:v})});N.displayName="ActionMenu";try{N.displayName="ActionMenu",N.__docgenInfo={description:"",displayName:"ActionMenu",props:{id:{defaultValue:{value:"action-menu"},description:"",name:"id",required:!1,type:{name:"string"}},placement:{defaultValue:{value:"bottom-start"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},itemSize:{defaultValue:{value:"medium"},description:"",name:"itemSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},renderContent:{defaultValue:null,description:"",name:"renderContent",required:!1,type:{name:"ReactNode"}},nested:{defaultValue:null,description:"",name:"nested",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}const k=l.forwardRef(({label:e,disabled:t,id:s="action-menu-item",...i},v)=>{const u=l.useContext(C),m=O({label:t?null:e}),d=H(),f=m.index===u.activeIndex;return n(_,{...i,ref:B([m.ref,v]),type:"button",role:"menuitem",className:"MenuItem",tabIndex:f?0:-1,disabled:t,id:`${s}-${m.index}`,"data-testid":`${s}-${m.index}`,...u.getItemProps({onClick(y){var r;(r=i.onClick)==null||r.call(i,y),d==null||d.events.emit("click")},onFocus(y){var r;(r=i.onFocus)==null||r.call(i,y),u.setHasFocusInside(!0)}}),children:e})});k.displayName="ActionMenuItem";try{k.displayName="ActionMenuItem",k.__docgenInfo={description:"",displayName:"ActionMenuItem",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"primary"'},{value:'"secondary"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},id:{defaultValue:{value:"action-menu-item"},description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}export{N as A,k as a};