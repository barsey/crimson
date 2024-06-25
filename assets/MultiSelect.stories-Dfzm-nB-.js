import{M as v}from"./MultiSelect-CG4kGmNS.js";import"./emotion-react-jsx-runtime.browser.esm-KjBcCTgX.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./BaseSelect-BsHa1RO_.js";import"./emotion-styled-base.browser.esm-CI5WbkaJ.js";import"./floating-ui.react-BF3UZOJf.js";import"./index-B8XB3FuZ.js";import"./constants-IjE9pQe9.js";import"./types-FAVVMtnh.js";import"./Typography-BSa3mKzK.js";import"./HelperText-CleT8tCk.js";import"./clsx-B-dksMZM.js";import"./RequiredIndicator-DxUWfeRE.js";const R={title:"Design System/MultiSelect",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},a=[{label:"Green",value:"green"},{label:"Blue",value:"blue"},{label:"Red",value:"red"},{label:"Yellow",value:"yellow"},{label:"Orange",value:"orange"},{label:"Pink",value:"pink"},{label:"Purple",value:"purple"},{label:"Grey",value:"grey"}],l={args:{placeholder:"Pick a value",options:a,onChange:e=>console.log(e),label:"Select some value..."}},o={args:{placeholder:"Pick a value",options:a.map(e=>e.label),onChange:e=>console.log(e),label:"Select some value..."}},r={args:{placeholder:"Select...",options:a,searchable:!0,onChange:e=>console.log(e),value:[a[2],a[4]]}},s={args:{placeholder:"Select...",options:a,searchable:!0,onChange:e=>console.log(e)}};var t,n,c;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    placeholder: 'Pick a value',
    options,
    onChange: items => console.log(items),
    label: 'Select some value...'
  }
}`,...(c=(n=l.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,i,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Pick a value',
    options: options.map(item => item.label),
    onChange: items => console.log(items),
    label: 'Select some value...'
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,g,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select...',
    options,
    searchable: true,
    onChange: items => console.log(items),
    value: [options[2], options[4]]
  }
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var S,h,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select...',
    options,
    searchable: true,
    onChange: items => console.log(items)
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const T=["Default","StringValues","PreSelectedValues","SearchableMultiSelect"];export{l as Default,r as PreSelectedValues,s as SearchableMultiSelect,o as StringValues,T as __namedExportsOrder,R as default};
