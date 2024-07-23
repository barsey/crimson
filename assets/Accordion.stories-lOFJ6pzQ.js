import{j as n,a as e}from"./emotion-react-jsx-runtime.browser.esm-B1TMS0DI.js";import{A as r,a as i}from"./AccordionItem-CCUEEixD.js";import{I as d}from"./Icon-Bht7JVrg.js";import{f as J,a as U,b as X,c as Y}from"./index-ZK6mf6hW.js";import{f as Z,a as $}from"./index-BBMM-L_h.js";import{B as s}from"./Box-BzSzghsi.js";import{R as m}from"./Radio-CESHvHH_.js";import"./RadioGroup-zEWOHZ8w.js";import{r as K}from"./index-BwDkhjyp.js";import{C}from"./Checkbox-DXKXbqH3.js";import{C as l}from"./Chip-DnjWEsrN.js";import"./extends-CF3RwP-h.js";import"./emotion-styled-base.browser.esm-Dp_FgEmo.js";import"./clsx-B-dksMZM.js";import"./HelperText-jNN1mvHL.js";import"./motion-r4PA4Vsg.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-react.browser.esm-C1IUp0_c.js";import"./types-FAVVMtnh.js";import"./useParticleTheme-A-3DvM6b.js";import"./Typography-Dt8omQSu.js";import"./constants-IjE9pQe9.js";import"./RequiredIndicator-YENVr-Jc.js";import"./Loader-BsOWz7yD.js";const ke={title:"Design System/Accordion",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};function ee(t){return n(r,{...t,children:[e(i,{title:"Section 1",children:"This is the content of Section 1."}),e(i,{title:"Section 2",children:"This is the content of Section 2."}),e(i,{title:"Section 3",children:"This is the content of section 3."})]})}function ie(t){return n(r,{...t,children:[e(i,{title:"Section 1",expandSection:e(d,{icon:J}),children:"This is the content of Section 1 with a custom icon."}),e(i,{title:"Section 2",children:"This is the content of Section 2."}),e(i,{title:"Section 3",expandSection:e(d,{icon:U}),children:"This is the content of section 3 with a custom icon."})]})}function te(t){return n(s,{display:"flex",flexDirection:"column",gap:12,children:[e(s,{as:"p",children:"This acoordion has spacing between the accordion items"}),n(r,{spacing:4,...t,children:[e(i,{titleComponent:e(d,{icon:X}),title:"Apple Section",expandSection:e(d,{icon:J}),children:"This is the content of Apple Section with a title icon and custom expand icon."}),e(i,{titleComponent:e(d,{icon:Z}),title:"Magnet Section",children:"This is the content of Magnet Section."}),e(i,{title:"Car Section",titleComponent:e(d,{icon:$}),children:"This is the content of Car Section."}),e(i,{reverse:!0,title:"Building Section",titleComponent:e(d,{icon:Y}),children:"This is the content of Building Section with reverse position of title text and icons."})]})]})}function oe(t){const[a,x]=K.useState("reject-cardio"),c=o=>{x(o)};return n(s,{display:"flex",flexDirection:"column",gap:12,children:[e(s,{as:"p",children:"This acoordion has spacing between the accordion items and the title is a radio component"}),n(r,{spacing:4,...t,children:[e(i,{titleComponent:e(m,{option:{label:"Reject Option 1",value:"reject-cardio"},selectedValue:a,onClick:o=>c(o.value),stopPropagation:!0}),children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti sequi, quis numquam, corrupti debitis laboriosam quasi magnam mollitia, sint commodi cupiditate ipsa corporis? Omnis eligendi accusamus obcaecati voluptate vitae."}),e(i,{titleComponent:e(m,{option:{label:"Reject Option 2",value:"dialated"},selectedValue:a,onClick:o=>c(o.value),stopPropagation:!0}),children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, mollitia soluta quidem dignissimos rem doloribus animi alias eius. Numquam dignissimos inventore fuga, distinctio voluptates ex aliquam modi? Dicta, dolorum incidunt!"}),e(i,{titleComponent:e(m,{option:{label:"Reject Option 3",value:"obstructive"},selectedValue:a,onClick:o=>c(o.value),stopPropagation:!0}),children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore porro, necessitatibus alias asperiores, recusandae debitis ut fugiat similique rerum a id optio cumque, quos illum? Earum odio voluptas reiciendis explicabo."}),e(i,{titleComponent:e(m,{option:{label:"Reject Option 4",value:"unspecified"},selectedValue:a,onClick:o=>c(o.value),stopPropagation:!0}),children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure molestiae corporis suscipit placeat repudiandae recusandae pariatur minima, unde voluptate dignissimos tenetur est soluta fugit? Veritatis vitae quos accusamus libero enim."})]})]})}function ne(t){const[a,x]=K.useState({}),c=(o,Q)=>{x({...a,[o]:Q})};return n(s,{display:"flex",flexDirection:"column",gap:12,children:[e(s,{as:"p",children:"This acoordion has spacing between the accordion items and the title is a checkbox component"}),n(r,{spacing:4,...t,children:[e(i,{titleComponent:e(C,{label:"AAA	— This could be some text",name:"hypertension",onChange:o=>c("hypertension",o),checked:a.hypertension}),children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti sequi, quis numquam, corrupti debitis laboriosam quasi magnam mollitia, sint commodi cupiditate ipsa corporis? Omnis eligendi accusamus obcaecati voluptate vitae."}),e(i,{titleComponent:e(C,{label:"None, reject all options",name:"rejactall",onChange:o=>c("rejactall",o),checked:a.rejactall}),children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, mollitia soluta quidem dignissimos rem doloribus animi alias eius. Numquam dignissimos inventore fuga, distinctio voluptates ex aliquam modi? Dicta, dolorum incidunt!"})]})]})}function re(t){return n(r,{...t,children:[e(i,{title:"Section 1",leadingExpandSection:e(l,{variant:"success",size:"small",children:"Accepted"}),children:"This is the content of Section 1."}),e(i,{title:"Section 2",children:"This is the content of Section 2."}),e(i,{title:"Section 3",children:"This is the content of section 3."})]})}function ae(t){return n(r,{...t,children:[e(i,{title:"Section 1",disableToggle:!0,children:"This is the content of Section 1 which is disabled."}),e(i,{title:"Section 2",disableToggle:!0,hideVerticalBorder:!0,children:"This is the content of Section 2 which is disabled with hideVerticalBorder"}),e(i,{title:"Section 3",children:"This is the content of Section 3."}),e(i,{title:"Section 4",children:"This is the content of section 4."})]})}function se(t){return n(r,{...t,children:[e(i,{title:"Title 1",subTitle:"Subtitle1 text goes here which can be a long text as well",titleFooter:"Footer",leadingExpandSection:e(l,{variant:"warning",size:"small",children:"Draft"}),errorText:"Last update failed. Please try again.",children:n(s,{display:"flex",alignItems:"center",flexWrap:"wrap",gap:4,children:[e(l,{size:"small",children:"Option 1"}),e(l,{size:"small",children:"Option 2"}),e(l,{size:"small",children:"Option 3"})]})}),e(i,{title:"Title 2",subTitle:"Subtitle2 text goes here which can be a long text as well",titleFooter:"Footer",leadingExpandSection:e(l,{variant:"error",size:"small",children:"Failed"}),children:e(s,{padding:12,children:"This is the content of the second section"})}),e(i,{title:"Title 3",subTitle:"Subtitle3 text goes here which can be a long text as well",titleFooter:"Footer",leadingExpandSection:e(l,{variant:"error",size:"small",children:"Failed"}),children:"This is the content of section 3."})]})}const p={args:{},render:ee},u={args:{},render:te},h={args:{},render:ie},g={args:{},render:oe},f={args:{},render:ne},S={args:{},render:re},T={args:{},render:ae},b={args:{},render:se};var v,D,E;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
  render: DefaultRender
}`,...(E=(D=p.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var w,q,y;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {},
  render: CustomTitleIcon
}`,...(y=(q=u.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};var R,j,A;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {},
  render: CustomExpandIcon
}`,...(A=(j=h.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var I,W,k;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {},
  render: CustomTitlesRadioDisplay
}`,...(k=(W=g.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var L,O,F;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {},
  render: CustomTitlesCheckboxDisplay
}`,...(F=(O=f.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var z,B,P;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {},
  render: LeadingExpandSection
}`,...(P=(B=S.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var V,M,N;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {},
  render: WithDisabledToggleRender
}`,...(N=(M=T.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var _,G,H;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {},
  render: WithErrorAccordion
}`,...(H=(G=b.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const Le=["Default","IconWithTitle","ExpandIcon","RadioTitles","CheckboxTitles","WithLeadingExpandSection","WithDisabledToggle","WithError"];export{f as CheckboxTitles,p as Default,h as ExpandIcon,u as IconWithTitle,g as RadioTitles,T as WithDisabledToggle,b as WithError,S as WithLeadingExpandSection,Le as __namedExportsOrder,ke as default};