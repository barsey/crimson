import{a as e,j as r,F as s}from"./emotion-react-jsx-runtime.browser.esm-KjBcCTgX.js";import{M as u}from"./Modal-rSlSRRII.js";import{B as f}from"./Button-C2nAR6C_.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ModalFooter-qMf2qio5.js";import"./emotion-styled-base.browser.esm-CI5WbkaJ.js";import"./HeaderCloseButton-BwObO3PA.js";import"./floating-ui.react-BF3UZOJf.js";import"./index-B8XB3FuZ.js";import"./constants-IjE9pQe9.js";import"./types-FAVVMtnh.js";import"./Icon-DpkAdYOh.js";import"./index-D3ylJrlI.js";import"./index-C_eOKtFu.js";import"./Box-BvxFQC2G.js";import"./emotion-react.browser.esm-D0pB3cbc.js";import"./ButtonGroupContext-DHhik5nJ.js";import"./Loader-DJ21a2P2.js";const{useArgs:h}=__STORYBOOK_MODULE_PREVIEW_API__,L={title:"Design System/Modals/Basic",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};function v(l){const[{open:m},c]=h(),t=g=>{c({open:g})},{children:p,...d}=l;return r(s,{children:[e(f,{onClick:()=>t(!0),children:"Open Modal"}),e(u,{open:m,...d,onOpenChange:t,onCancel:()=>t(!1),onAction:()=>{t(!1),console.log("Primary button clicked")},children:p??r(s,{children:[e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula odio at efficitur fringilla. Duis vel urna eu elit congue dapibus et sit amet justo. Quisque ac mi sed metus sagittis elementum. Sed sed urna vel elit cursus sodales ac non mauris."}),e("p",{children:"Vestibulum rhoncus sapien in sem cursus, id consectetur justo sodales. Aliquam erat volutpat. In hac habitasse platea dictumst. Integer gravida odio in volutpat facilisis. Quisque non semper augue. Duis vel libero nec eros facilisis fermentum."}),e("p",{children:"Curabitur vel cursus odio. Nullam imperdiet massa in purus commodo luctus. Etiam et massa et metus volutpat imperdiet. Integer in nunc eu dui feugiat hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."})]})})]})}const i={args:{title:"Story title",titleFooter:e("div",{children:"Title footer section here..."})},render:v};var o,a,n;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: 'Story title',
    titleFooter: <div>Title footer section here...</div>
  },
  render: DefaultRender
}`,...(n=(a=i.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Q=["Default"];export{i as Default,Q as __namedExportsOrder,L as default};