import{j as o,a as e}from"./emotion-react-jsx-runtime.browser.esm-KjBcCTgX.js";import{T as b,a as n,b as T,c as r}from"./TabPanel-viwbCkvQ.js";import{r as m}from"./index-BwDkhjyp.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import"./emotion-styled-base.browser.esm-CI5WbkaJ.js";import"./motion-D72GihrG.js";import"./index-Dy8yH8dp.js";import"./_commonjsHelpers-BosuxZz1.js";const D={title:"Design System/Tabs",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};function f({children:s}){return e("div",{style:{marginBottom:20,width:"100%"},children:s})}function p(s){const[a,t]=m.useState(0);return o(f,{children:[o(b,{...s,children:[e(n,{label:"Drafts",selectedTabIndex:a,index:0,onClick:t}),e(n,{label:"In Progress",selectedTabIndex:a,index:1,onClick:t}),e(n,{label:"Ready for Review",selectedTabIndex:a,index:2,onClick:t}),e(n,{label:"On Hold",selectedTabIndex:a,index:3,onClick:t}),e(n,{label:"Complete",selectedTabIndex:a,index:4,onClick:t})]}),o(T,{children:[e(r,{label:"Tab3",selected:a===2,children:"Content for Tab3"}),e(r,{label:"Tab1",selected:a===0,children:"Content for Tab1"}),e(r,{label:"Tab2",selected:a===1,children:"Content for Tab2"}),e(r,{label:"Tab4",selected:a===3,children:"Content for Tab4"}),e(r,{label:"Tab5",selected:a===4,children:"Content for Tab5"})]})]})}const l={args:{fullWidth:!1},render:p};var d,c,i;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    fullWidth: false
  },
  render: Render
}`,...(i=(c=l.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const R=["Default"];export{l as Default,R as __namedExportsOrder,D as default};