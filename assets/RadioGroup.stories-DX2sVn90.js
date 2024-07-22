import{a as v}from"./emotion-react-jsx-runtime.browser.esm-KjBcCTgX.js";import{R as i}from"./RadioGroup-DQtaeQJB.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-styled-base.browser.esm-CI5WbkaJ.js";import"./Typography-BSa3mKzK.js";import"./constants-IjE9pQe9.js";import"./types-FAVVMtnh.js";import"./Radio-Cu_IMSNY.js";import"./useParticleTheme-JPmG0cGx.js";import"./Box-DNae3zpJ.js";import"./emotion-react.browser.esm-D0pB3cbc.js";import"./motion-D72GihrG.js";import"./RequiredIndicator-DxUWfeRE.js";import"./HelperText-CleT8tCk.js";const{useArgs:R}=__STORYBOOK_MODULE_PREVIEW_API__,Y={title:"Design System/RadioGroup",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},_=[{label:"Green",value:"green"},{label:"Blue",value:"blue"},{label:"Red",value:"red"},{label:"Yellow",value:"yellow"},{label:"Orange",value:"orange"},{label:"Pink",value:"pink"},{label:"Purple",value:"purple"},{label:"Grey",value:"grey"}],k=[{label:"Stable - continue treatment plan, manage risk factors, and monitor as needed.",value:"Stable - continue treatment plan, manage risk factors, and monitor as needed."},{label:"Improving - continue treatment plan, manage risk factors, and monitor as needed.",value:"Improving - continue treatment plan, manage risk factors, and monitor as needed."},{label:"Worsening - appropriate treatment plan in placed, continue to monitor, maintain current meds and risk factor control.",value:"Worsening - appropriate treatment plan in placed, continue to monitor, maintain current meds and risk factor control."}];function p(d){const[{value:c,id:m,label:u,options:g},b]=R();return v(i,{...d,id:m,label:u,options:g,value:c,onChange:f=>{b({value:f})}})}const e={args:{id:"default_radio",label:"Select anyone",options:_},render:p},a={args:{id:"default_radio",label:"Accept Reasons",options:k},render:p};var n,r,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: 'default_radio',
    label: 'Select anyone',
    options
  },
  render: Render
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var t,l,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    id: 'default_radio',
    label: 'Accept Reasons',
    options: AcceptReasons
  },
  render: Render
}`,...(s=(l=a.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const j=["Default","LargeContent"];export{e as Default,a as LargeContent,j as __namedExportsOrder,Y as default};
