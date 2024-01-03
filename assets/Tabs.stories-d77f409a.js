import{j as l,a as e,F as j}from"./emotion-styled-base.browser.esm-0d53d476.js";import{T as P,a as m,b as k,c as p}from"./TabPanel-cc902b5f.js";import{r as I}from"./index-76fb7be0.js";import"./jsx-runtime-ffb262ed.js";import"./extends-15b115a7.js";import"./useThemeSizing-f9cee3d0.js";import"./emotion-react.browser.esm-e47b0ff0.js";import"./motion-88cdba5f.js";import"./index-c5f219d7.js";import"./_commonjsHelpers-de833af9.js";const J={title:"Design System/Tabs",component:P,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};function B({children:r}){return e("div",{style:{marginBottom:20,width:"100%"},children:r})}function a(r){const[s,i]=I.useState(0);return l(B,{children:[l(P,{...r,children:[e(m,{label:"Apple",selectedTabIndex:s,index:0,onClick:i}),e(m,{label:"Banana",selectedTabIndex:s,index:1,onClick:i}),e(m,{label:"Orange",selectedTabIndex:s,index:2,onClick:i})]}),l(k,{children:[e(p,{label:"Tab3",selected:s===2,children:"Content for Tab3"}),e(p,{label:"Tab1",selected:s===0,children:"Content for Tab1"}),e(p,{label:"Tab2",selected:s===1,children:"Content for Tab2"})]})]})}function E(r){return l(j,{children:[e("h2",{children:"Small Tabs"}),e(a,{...r,size:"small"}),e("h2",{children:"Medium/Default Tabs"}),e(a,{...r,size:"medium"}),e("h2",{children:"Large Tabs"}),e(a,{...r,size:"large"})]})}const n={args:{fullWidth:!1},render:a},o={args:{color:"primary"},render:a},t={args:{color:"secondary"},render:a},c={args:{color:"success"},render:E},d={args:{fullWidth:!0},render:a};var u,b,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(F=(D=d.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const K=["Default","Primary","Secondary","Sizes","FullWidth"];export{n as Default,d as FullWidth,o as Primary,t as Secondary,c as Sizes,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Tabs.stories-d77f409a.js.map
