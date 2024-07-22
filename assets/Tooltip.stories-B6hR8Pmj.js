import{a as e}from"./emotion-react-jsx-runtime.browser.esm-KjBcCTgX.js";import{T as g}from"./Tooltip-ClFYL6uL.js";import{B as h}from"./Button-gWDE2Z4A.js";import{B as u}from"./Box-DNae3zpJ.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./floating-ui.react-BF3UZOJf.js";import"./index-B8XB3FuZ.js";import"./emotion-styled-base.browser.esm-CI5WbkaJ.js";import"./constants-IjE9pQe9.js";import"./types-FAVVMtnh.js";import"./ButtonGroupContext-DHhik5nJ.js";import"./Loader-BPJWVqZm.js";import"./emotion-react.browser.esm-D0pB3cbc.js";const j={title:"Design System/Tooltip",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},o={args:{caption:"Caption",message:"This is Button content of tooltip",children:e(h,{variant:"outlined",children:"Trigger Element"})}},t={args:{message:"This is span content of tooltip",children:e(u,{as:"span",padding:"4px 8px",border:"1px solid #ddd",htmlProps:{onClick:()=>console.log("clicked me")},children:"Trigger Span"})}},r={args:{message:"This is div content of tooltip",children:e("div",{style:{padding:"4px 8px",border:"1px solid #ddd"},children:"Trigger Div"})}};var i,n,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    caption: 'Caption',
    message: 'This is Button content of tooltip',
    children: <Button variant='outlined'>Trigger Element</Button>
  }
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,p,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    message: 'This is span content of tooltip',
    children: <Box as='span' padding='4px 8px' border='1px solid #ddd' htmlProps={{
      onClick: () => console.log('clicked me')
    }}>
        Trigger Span
      </Box>
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,m,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    message: 'This is div content of tooltip',
    children: <div style={{
      padding: '4px 8px',
      border: '1px solid #ddd'
    }}>
        Trigger Div
      </div>
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const O=["WithButton","WithSpan","WithDiv"];export{o as WithButton,r as WithDiv,t as WithSpan,O as __namedExportsOrder,j as default};
