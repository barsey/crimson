import{j as r,a as e}from"./emotion-react-jsx-runtime.browser.esm-B1TMS0DI.js";import{b as p,P as h,a as v,c as f,d as C,e as P}from"./Popover-BdzVSrhl.js";import{r as y}from"./index-BwDkhjyp.js";import{B as T}from"./Button-Brk48cb4.js";import"./extends-CF3RwP-h.js";import"./emotion-styled-base.browser.esm-Dp_FgEmo.js";import"./floating-ui.react-C1nSsq-1.js";import"./index-DxjWwZXO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./constants-IjE9pQe9.js";import"./types-FAVVMtnh.js";import"./ButtonGroupContext-DHhik5nJ.js";import"./Loader-BsOWz7yD.js";import"./emotion-react.browser.esm-C1IUp0_c.js";const z={title:"Design System/Popover",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};function x(s){const[a,o]=y.useState(!1);return r("div",{children:[e("h1",{children:"Popover Example"}),r(p,{...s,open:a,onOpenChange:o,children:[e(h,{onClick:()=>o(i=>!i),children:"My Trigger"}),r(v,{children:[e(f,{children:"My popover heading"}),e(C,{children:"My popover description"}),e(P,{children:"Close"})]})]})]})}function b(s){const[a,o]=y.useState(!1);return r("div",{children:[e("h1",{children:"Popover Example"}),r(p,{...s,open:a,onOpenChange:o,children:[e(h,{onClick:()=>o(i=>!i),asChild:!0,children:e(T,{variant:"outlined",children:"Custom Trigger"})}),r(v,{children:[e(f,{children:"My popover heading"}),e(C,{children:"My popover description"}),e(P,{children:"Close"})]})]})]})}const t={args:{placement:"bottom-start"},render:x},n={args:{placement:"bottom-start"},render:b};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    // fullWidth: false,
    placement: 'bottom-start'
  },
  render: Render
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,g,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    // fullWidth: false,
    placement: 'bottom-start'
  },
  render: CustomTriggerRender
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const A=["Default","CustomTrigger"];export{n as CustomTrigger,t as Default,A as __namedExportsOrder,z as default};
