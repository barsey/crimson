import{a as m}from"./emotion-react-jsx-runtime.browser.esm-B1TMS0DI.js";import{C as s}from"./Checkbox-DXKXbqH3.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CF3RwP-h.js";import"./emotion-styled-base.browser.esm-Dp_FgEmo.js";import"./Typography-Dt8omQSu.js";import"./constants-IjE9pQe9.js";import"./types-FAVVMtnh.js";import"./motion-r4PA4Vsg.js";const{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,O={title:"Design System/Checkbox",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};function d(n){const[{isChecked:r},c]=p();return m(s,{...n,onChange:()=>{c({isChecked:!r})},checked:r,name:"some-id"})}const e={args:{label:"Checkbox Label here...",checked:!1},render:d};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label here...',
    checked: false
  },
  render: Render
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const D=["Default"];export{e as Default,D as __namedExportsOrder,O as default};
