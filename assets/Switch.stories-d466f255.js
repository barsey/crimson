import{j as F,a as c}from"./emotion-react-jsx-runtime.browser.esm-530eb8f6.js";import{c as f,m as U}from"./motion-a2a07e5d.js";import"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-623938b0.js";const h=24,G={small:h-4,medium:h,large:h+4},J=f("div",{target:"e18vlnke3"})({name:"1vcob1d",styles:"display:flex;justify-content:center;align-items:center"}),Q=f(U.div,{target:"e18vlnke2"})("background:",({isOn:e,theme:r,color:n})=>e?n?r.colors[n]:`linear-gradient(250deg, ${r.colors.primary}, ${r.colors.secondary})`:"#949a9d",";background-repeat:no-repeat;display:flex;justify-content:center;align-items:center;box-sizing:border-box;width:",({height:e})=>e*2,"px;height:",({height:e})=>e,"px;border-radius:",({height:e})=>e/2,"px;margin:8px;"),X=f("div",{target:"e18vlnke1"})("width:100%;height:100%;display:flex;justify-content:",({isOn:e})=>e?"flex-end":"flex-start",";padding:2px;cursor:pointer;align-items:center;"),Z=f(U.div,{target:"e18vlnke0"})("width:",({height:e})=>e-4,"px;height:",({height:e})=>e-4,"px;background-color:white;border-radius:",({height:e})=>(e-4)/2,"px;");function S({label:e,size:r,color:n,checked:s=!1,onToggle:Y}){const w=r?G[r]:h;return F(J,{children:[c(Q,{isOn:s,height:w,color:n,whileHover:{scale:1.1,boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"},children:c(X,{isOn:s,onClick:Y,children:c(Z,{height:w,layout:!0,transition:ee})})}),e&&c("span",{children:e})]})}const ee={type:"spring",stiffness:700,damping:30};try{S.displayName="Switch",S.__docgenInfo={description:"",displayName:"Switch",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"(() => void)"}}}}}catch{}const{useArgs:re}=__STORYBOOK_MODULE_PREVIEW_API__,le={title:"Design System/Switch",component:S,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};function a(e){const[{checked:r},n]=re();function s(){n({checked:!r})}return c(S,{...e,onToggle:s,checked:r})}const o={args:{label:"Switch",checked:!0},render:a},t={args:{color:"primary",label:"Switch",checked:!0},render:a},l={args:{label:"Switch",color:"secondary",checked:!0},render:a},i={args:{label:"Switch",color:"success",checked:!0},render:a},d={args:{label:"Switch",color:"error",checked:!0},render:a},u={args:{label:"Switch",color:"warning",checked:!0},render:a},p={args:{label:"Switch",color:"info",checked:!0},render:a},m={args:{size:"large",label:"Switch",checked:!0},render:a},g={args:{size:"small",label:"Switch",checked:!0},render:a};var y,b,k;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Switch',
    checked: true
  },
  render: Render
}`,...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var x,v,_;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    label: 'Switch',
    checked: true
  },
  render: Render
}`,...(_=(v=t.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var R,z,E;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Switch',
    color: 'secondary',
    checked: true
  },
  render: Render
}`,...(E=(z=l.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var O,j,V;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Switch',
    color: 'success',
    checked: true
  },
  render: Render
}`,...(V=(j=i.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var q,D,I;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Switch',
    color: 'error',
    checked: true
  },
  render: Render
}`,...(I=(D=d.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var T,C,M;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Switch',
    color: 'warning',
    checked: true
  },
  render: Render
}`,...(M=(C=u.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var P,A,L;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Switch',
    color: 'info',
    checked: true
  },
  render: Render
}`,...(L=(A=p.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var W,H,N;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Switch',
    checked: true
  },
  render: Render
}`,...(N=(H=m.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var $,B,K;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Switch',
    checked: true
  },
  render: Render
}`,...(K=(B=g.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};const ie=["Default","Primary","Secondary","Success","Error","Warning","Info","Large","Small"];export{o as Default,d as Error,p as Info,m as Large,t as Primary,l as Secondary,g as Small,i as Success,u as Warning,ie as __namedExportsOrder,le as default};
//# sourceMappingURL=Switch.stories-d466f255.js.map
