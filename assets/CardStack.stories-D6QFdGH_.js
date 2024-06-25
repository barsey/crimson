import{a as e,j as a}from"./emotion-react-jsx-runtime.browser.esm-KjBcCTgX.js";import{C as p}from"./CardStack-BcsVu5vx.js";import{a as s,A as b}from"./AccordionItem-BkpTbctu.js";import{B as n}from"./Box-BvxFQC2G.js";import{C as o}from"./Chip-Cz2eT3g3.js";import{r as D}from"./index-BwDkhjyp.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import"./emotion-styled-base.browser.esm-CI5WbkaJ.js";import"./index-C_eOKtFu.js";import"./Icon-DpkAdYOh.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./motion-D72GihrG.js";import"./index-Dy8yH8dp.js";import"./clsx-B-dksMZM.js";import"./HelperText-CleT8tCk.js";import"./emotion-react.browser.esm-D0pB3cbc.js";import"./constants-IjE9pQe9.js";import"./types-FAVVMtnh.js";import"./Loader-DJ21a2P2.js";const H={title:"Design System/CardStack",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};function m({activeIndex:r=0,indexes:t,onClick:i}){return a(b,{children:[e(s,{title:"E11.51",subTitle:"Type 2 diabetes mellitus with diabetic peripheral angiopathy without gangrene",active:t[0]===r,onToggle:()=>i&&i(t[0]),defaultExpanded:t[0]===r,titleFooter:"Reconfirmation",leadingExpandSection:e(o,{variant:"success",size:"small",children:"Accepted"}),children:a(n,{display:"flex",alignItems:"center",flexWrap:"wrap",gap:4,children:[e(o,{size:"small",children:"Accept"}),e(o,{size:"small",children:"Accept & Document in Progress Note"}),e(o,{size:"small",children:"Reject"})]})}),e(s,{title:"E11.65",subTitle:"Type 2 diabetes mellitus with hyperglycemia",titleFooter:"Reconfirmation",active:t[1]===r,onToggle:()=>i&&i(t[1]),defaultExpanded:t[1]===r,children:e(n,{padding:12,children:"This is the content of the second section"})}),e(s,{title:"E11.59",subTitle:"Type 2 diabetes mellitus with other circulatory complications",titleFooter:"Clinical Inference",active:t[2]===r,onToggle:()=>i&&i(t[2]),defaultExpanded:t[2]===r,children:"This is the content of section 3."})]})}function I(r){const[t,i]=D.useState(0);return a(n,{display:"flex",flexDirection:"column",gap:8,minWidth:600,children:[e(p,{totalItems:3,...r,title:"Diabetes",onToggle:l=>!l&&![0,1,2].includes(t)&&i(0),initialCollapsed:!1,active:[0,1,2].includes(t),children:e(m,{indexes:[0,1,2],activeIndex:t,onClick:l=>i(l)})}),e(p,{totalItems:3,...r,title:"Major Depressive Disorder",onToggle:l=>!l&&![3,4,5].includes(t)&&i(3),active:[3,4,5].includes(t),children:e(m,{indexes:[3,4,5],activeIndex:t,onClick:l=>i(l)})}),a(b,{children:[e(s,{title:"I42.0",subTitle:"Dilated cardiomyopathy",active:t===6,onToggle:()=>i(6),titleFooter:"Clinical Inference",children:a(n,{display:"flex",alignItems:"center",flexWrap:"wrap",gap:4,children:[e(o,{size:"small",children:"Accept"}),e(o,{size:"small",children:"Accept & Document in Progress Note"}),e(o,{size:"small",children:"Reject"})]})}),e(s,{title:"I10",subTitle:"Essential (primary) hypertension",titleFooter:"Clinical Inference",active:t===7,onToggle:()=>i(7),children:e(n,{padding:12,children:"This is the content of the second section"})})]})]})}const c={args:{title:"Diabetes",totalItems:3,children:e(m,{indexes:[0,1,2]})}},d={args:{title:"Diabetes",totalItems:3},render:I};var h,u,g;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Diabetes',
    totalItems: 3,
    children: <AccordionChild indexes={[0, 1, 2]} />
  }
}`,...(g=(u=c.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,T,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Diabetes',
    totalItems: 3
  },
  render: MultipleRender
}`,...(y=(T=d.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const J=["Default","MultipleItems"];export{c as Default,d as MultipleItems,J as __namedExportsOrder,H as default};