import{j as l,a as e,F as j}from"./emotion-react-jsx-runtime.browser.esm-625b96f3.js";import{T as P,a as m,b as k,c as u}from"./TabPanel-0785cd0b.js";import{r as I}from"./index-76fb7be0.js";import"./jsx-runtime-ffb262ed.js";import"./extends-623938b0.js";import"./emotion-styled-base.browser.esm-7182509f.js";import"./useThemeSizing-9bdd6769.js";import"./motion-88cdba5f.js";import"./_commonjsHelpers-de833af9.js";const H={title:"Design System/Tabs",component:P,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};function B({children:r}){return e("div",{style:{marginBottom:20,width:"100%"},children:r})}function a(r){const[s,i]=I.useState(0);return l(B,{children:[l(P,{...r,children:[e(m,{label:"Apple",selectedTabIndex:s,index:0,onClick:i}),e(m,{label:"Banana",selectedTabIndex:s,index:1,onClick:i}),e(m,{label:"Orange",selectedTabIndex:s,index:2,onClick:i})]}),l(k,{children:[e(u,{label:"Tab3",selected:s===2,children:"Content for Tab3"}),e(u,{label:"Tab1",selected:s===0,children:"Content for Tab1"}),e(u,{label:"Tab2",selected:s===1,children:"Content for Tab2"})]})]})}function E(r){return l(j,{children:[e("h2",{children:"Small Tabs"}),e(a,{...r,size:"small"}),e("h2",{children:"Medium/Default Tabs"}),e(a,{...r,size:"medium"}),e("h2",{children:"Large Tabs"}),e(a,{...r,size:"large"})]})}const n={args:{fullWidth:!1},render:a},o={args:{color:"primary"},render:a},t={args:{color:"secondary"},render:a},c={args:{color:"success"},render:E},d={args:{fullWidth:!0},render:a};var p,b,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    fullWidth: false
  },
  render: Render
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var T,h,f;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    color: 'primary'
  },
  render: Render
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,y,x;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    color: 'secondary'
  },
  render: Render
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var z,C,R;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    color: 'success'
  },
  render: RenderSizes
}`,...(R=(C=c.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var W,D,F;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  render: Render
}`,...(F=(D=d.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const J=["Default","Primary","Secondary","Sizes","FullWidth"];export{n as Default,d as FullWidth,o as Primary,t as Secondary,c as Sizes,J as __namedExportsOrder,H as default};
//# sourceMappingURL=Tabs.stories-31a17ebe.js.map
