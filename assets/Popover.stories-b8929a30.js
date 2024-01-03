import{j as r,a as e}from"./emotion-styled-base.browser.esm-0d53d476.js";import{P as p,a as h,b as v,c as f,d as C,e as P}from"./Popover-0d5a3ce4.js";import{r as y}from"./index-76fb7be0.js";import{B as T}from"./Button-01e1c5b3.js";import"./jsx-runtime-ffb262ed.js";import"./extends-15b115a7.js";import"./floating-ui.react-78df0bc4.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./useThemeSizing-f9cee3d0.js";import"./emotion-react.browser.esm-e47b0ff0.js";import"./constants-e08cb710.js";import"./motion-88cdba5f.js";const w={title:"Design System/Popover",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};function x(s){const[a,o]=y.useState(!1);return r("div",{children:[e("h1",{children:"Popover Example"}),r(p,{...s,open:a,onOpenChange:o,children:[e(h,{onClick:()=>o(i=>!i),children:"My Trigger"}),r(v,{children:[e(f,{children:"My popover heading"}),e(C,{children:"My popover description"}),e(P,{children:"Close"})]})]})]})}function b(s){const[a,o]=y.useState(!1);return r("div",{children:[e("h1",{children:"Popover Example"}),r(p,{...s,open:a,onOpenChange:o,children:[e(h,{onClick:()=>o(i=>!i),asChild:!0,children:e(T,{variant:"outlined",disableElevation:!0,children:"Custom Trigger"})}),r(v,{children:[e(f,{children:"My popover heading"}),e(C,{children:"My popover description"}),e(P,{children:"Close"})]})]})]})}const t={args:{placement:"bottom-start"},render:x},n={args:{placement:"bottom-start"},render:b};var c,d,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    // fullWidth: false,
    placement: 'bottom-start'
  },
  render: Render
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,g,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    // fullWidth: false,
    placement: 'bottom-start'
  },
  render: CustomTriggerRender
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const z=["Default","CustomTrigger"];export{n as CustomTrigger,t as Default,z as __namedExportsOrder,w as default};
//# sourceMappingURL=Popover.stories-b8929a30.js.map