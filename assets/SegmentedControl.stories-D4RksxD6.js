import{j as a,a as e}from"./emotion-react-jsx-runtime.browser.esm-KjBcCTgX.js";import{S as i,a as r}from"./SegmentedControlButton-B1XpAn_f.js";import{I as o}from"./Icon-DpkAdYOh.js";import{n as N,o as _,p as h,q as C,r as b,s as q}from"./index-C_eOKtFu.js";import{B as z}from"./Box-DNae3zpJ.js";import{I as G}from"./IconButton-BGN3DQNe.js";import{r as K}from"./index-BwDkhjyp.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import"./emotion-styled-base.browser.esm-CI5WbkaJ.js";import"./constants-IjE9pQe9.js";import"./types-FAVVMtnh.js";import"./motion-D72GihrG.js";import"./index-Dy8yH8dp.js";import"./Tooltip-ClFYL6uL.js";import"./floating-ui.react-BF3UZOJf.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";import"./emotion-react.browser.esm-D0pB3cbc.js";const Se={title:"Design System/SegmentedControl",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};function H(t){const n=c=>{console.log("Selected:",c)};return a(i,{...t,children:[e(r,{onClick:()=>n("React"),children:"React"}),e(r,{onClick:()=>n("Angular"),children:"Angular"}),e(r,{onClick:()=>n("Vue"),children:"Vue"}),e(r,{onClick:()=>n("Preact"),children:"Preact"}),e(r,{onClick:()=>n("Svelte"),children:"Svelte"})]})}function L(t){const n=c=>{console.log("Selected:",c)};return a(i,{...t,children:[e(r,{leadingIcon:e(o,{icon:N}),onClick:()=>n("React"),children:"React"}),e(r,{leadingIcon:e(o,{icon:_}),onClick:()=>n("Angular"),disabled:!0,children:"Angular"}),e(r,{leadingIcon:e(o,{icon:h}),onClick:()=>n("Vue"),children:"Vue"}),e(r,{leadingIcon:e(o,{icon:C}),onClick:()=>n("Preact"),children:"Vue"})]})}function Q(t){const n=c=>{console.log("Selected:",c)};return a(i,{...t,children:[e(r,{onClick:()=>n("React"),children:e(o,{icon:N})}),e(r,{onClick:()=>n("Angular"),children:e(o,{icon:_})}),e(r,{onClick:()=>n("Vue"),children:e(o,{icon:h})})]})}function J(t){return a(i,{...t,children:[e(r,{tooltipMessage:"Backward",children:e(o,{icon:C})}),e(r,{tooltipMessage:"Pause",children:e(o,{icon:b})}),e(r,{tooltipMessage:"Forward",children:e(o,{icon:h})})]})}function U(t){return a(z,{display:"flex",gap:8,children:[e(G,{children:e(o,{icon:q})}),e(J,{...t})]})}function X(t){const[n,c]=K.useState(-1);return a(z,{display:"flex",gap:8,children:[e(G,{children:e(o,{icon:q})}),a(i,{...t,color:n===0?"primary":n===1?"success":void 0,children:[e(r,{tooltipMessage:"Backward",onClick:()=>c(0),children:e(o,{icon:C})}),e(r,{tooltipMessage:"Pause",onClick:()=>c(1),children:e(o,{icon:b})}),e(r,{tooltipMessage:"Forward",onClick:()=>c(2),children:e(o,{icon:h})})]})]})}const s={args:{initialSelectedIndex:1},render:H},l={args:{},render:L},d={args:{},render:Q},p={args:{},render:J},m={args:{initialSelectedIndex:-1},render:H},g={args:{initialSelectedIndex:-1},render:U},u={args:{initialSelectedIndex:-1},render:X};var S,I,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    initialSelectedIndex: 1
  },
  render: DefaultRender
}`,...(f=(I=s.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var x,k,R;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  render: TextAndIconRender
}`,...(R=(k=l.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var W,y,T;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {},
  render: OnlyIconRender
}`,...(T=(y=d.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var A,O,B;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {},
  render: IconWithTooltipRender
}`,...(B=(O=p.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var P,w,D;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    initialSelectedIndex: -1
  },
  render: DefaultRender
}`,...(D=(w=m.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var M,V,j;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    initialSelectedIndex: -1
  },
  render: WithOtherControlsRender
}`,...(j=(V=g.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var v,F,E;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    initialSelectedIndex: -1
  },
  render: ChangingColorWithSelectionRender
}`,...(E=(F=u.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};const Ie=["Default","TextAndIcon","OnlyIcon","IconWithTooltip","NoneSelected","WithOtherControls","ChangingColorWithSelection"];export{u as ChangingColorWithSelection,s as Default,p as IconWithTooltip,m as NoneSelected,d as OnlyIcon,l as TextAndIcon,g as WithOtherControls,Ie as __namedExportsOrder,Se as default};
