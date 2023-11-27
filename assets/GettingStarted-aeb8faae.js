import{j as r}from"./jsx-runtime-ffb262ed.js";import{M as _,d}from"./index-f9dc22e7.js";import{j as i,a as n}from"./emotion-react-jsx-runtime.browser.esm-625b96f3.js";import{r as g}from"./index-76fb7be0.js";import"./Button-f0a7f82a.js";import{c as l}from"./emotion-styled-base.browser.esm-7182509f.js";import"./Switch-ca1c628a.js";import"./Select-b8410570.js";import{T as P,a as c,b as I,c as m}from"./TabPanel-0785cd0b.js";import{P as T}from"./ParticleProvider-9ff74a19.js";import{u as h}from"./index-a1cf9e47.js";import"./iframe-ff165438.js";import"../sb-preview/runtime.js";import"./extends-623938b0.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./index-13a69483.js";import"./index-356e4a49.js";import"./useThemeSizing-9bdd6769.js";import"./constants-e08cb710.js";import"./motion-88cdba5f.js";import"./floating-ui.react-14c844eb.js";const q=l("input",{target:"etrmwpe3"})("height:40px;width:300px;border-radius:3px;border:solid 2px ",e=>e.disabled?"#e4e3ea":e.error?"#a9150b":e.success?"#067d68":"#353637",";background-color:#fff;&:focus{border:solid 2px #1b116e;}"),v=l("div",{target:"etrmwpe2"})("font-size:14px;color:",e=>e.disabled?"#e4e3ea":"#080808",";padding-bottom:6px;"),C=l("div",{target:"etrmwpe1"})({name:"13iijbt",styles:"font-size:14px;color:#a9150b8;padding-top:4px"}),u=l("p",{target:"etrmwpe0"})("margin:0px;color:",e=>e.disabled?"#e4e3ea":e.error?"#a9150b":"#080808",";"),f=({id:e,disabled:t,label:o,message:s,error:a,success:x,onChange:b,placeholder:j,...S})=>i(g.Fragment,{children:[n(v,{children:n(u,{disabled:t,error:a,children:o})}),n(q,{id:e,type:"text",onChange:b,disabled:t,error:a,success:x,placeholder:j,...S}),n(C,{children:n(u,{error:a,children:s})})]});try{f.displayName="Input",f.__docgenInfo={description:"",displayName:"Input",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const p=e=>{const[t,o]=g.useState(0),{yarnStep:s,npmStep:a}=e;return n("div",{children:i(T,{children:[i(P,{children:[n(c,{label:"yarn",selectedTabIndex:t,index:0,onClick:o}),n(c,{label:"npm",selectedTabIndex:t,index:1,onClick:o})]}),i(I,{children:[n(m,{label:"yarn",selected:t===0,children:s}),n(m,{label:"npm",selected:t===1,children:a})]})]})})};try{p.displayName="InstallationSteps",p.__docgenInfo={description:"",displayName:"InstallationSteps",props:{yarnStep:{defaultValue:null,description:"",name:"yarnStep",required:!0,type:{name:"ReactNode"}},npmStep:{defaultValue:null,description:"",name:"npmStep",required:!0,type:{name:"any"}}}}}catch{}function y(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2"},h(),e.components);return r.jsxs(r.Fragment,{children:[r.jsx(_,{title:"Getting Started"}),`
`,r.jsx(t.h1,{id:"getting-started",children:"Getting started"}),`
`,r.jsx(t.p,{children:"Use Particle components based on the following steps"}),`
`,r.jsx(t.h2,{id:"1-install",children:"1. Install"}),`
`,r.jsx(t.p,{children:"To use Particle in your project, run one of the following commands in your terminal"}),`
`,r.jsx(p,{yarnStep:r.jsx(d,{dark:!0,code:`

yarn add @ynetic/particle @emotion/react @emotion/styled framer-motion`}),npmStep:r.jsx(d,{dark:!0,code:`

npm install @ynetic/particle @emotion/react @emotion/styled framer-motion`})}),`
`,r.jsx(t.h2,{id:"2-configure-your-project",children:"2. Configure your project"}),`
`,r.jsx(d,{dark:!0,language:"tsx",code:`

// 1. import ParticleProvider component
import { ParticleProvider } from '@ynetic/particle';

export function App() {
  // 2. Wrap ParticleProvider at the root of your app
  return (
    <ParticleProvider>
      <RestOfYourCode />
    </ParticleProvider>
  );
}`})]})}function Z(e={}){const{wrapper:t}=Object.assign({},h(),e.components);return t?r.jsx(t,Object.assign({},e,{children:r.jsx(y,e)})):y(e)}export{Z as default};
//# sourceMappingURL=GettingStarted-aeb8faae.js.map
