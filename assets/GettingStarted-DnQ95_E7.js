import{j as o}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{useMDXComponents as s}from"./index-DlpNa54Y.js";import{M as m,d as r}from"./index-DVEzKzWk.js";import{I as i}from"./InstallationSteps-DH6zhKyM.js";import"./AccordionItem-BkpTbctu.js";import"./ActionMenuItem-zE63PUMI.js";import{A as n}from"./Alert-Dse3GtKs.js";import"./Autocomplete-CmKom_6f.js";import"./Avatar-B-wEq1s6.js";import"./Badge-lO2QxUCY.js";import"./Box-BvxFQC2G.js";import"./Button-C2nAR6C_.js";import"./ButtonGroup-DfmI99us.js";import"./Calendar-Dg91xMT4.js";import"./CardStack-BcsVu5vx.js";import"./Checkbox-onQGnHEc.js";import"./Chip-Cz2eT3g3.js";import"./DataGrid-g-3AMk8r.js";import"./DateInput-Bybfems2.js";import"./Drawer-D0sU-D_O.js";import"./FileUpload-C6SM93GF.js";import"./Grid-CJ1BV-Og.js";import"./IconButton-BGN3DQNe.js";import"./Icon-DpkAdYOh.js";import"./ListItem-DyBdivSM.js";import"./Loader-DJ21a2P2.js";import"./Modal-rSlSRRII.js";import"./ConfirmationModal-BhDSd5ks.js";import"./MultiSelect-CG4kGmNS.js";import"./Paper-RRqDXLqv.js";import"./Popover-DjkQdOEe.js";import"./Radio-Cf_6wcyk.js";import"./RadioGroup-9QeEKxD0.js";import"./RangeSlider-BSwASKk5.js";import"./SegmentedControlButton-B1XpAn_f.js";import"./Select-HMGmQvZZ.js";import"./Skeleton-BvIrdfYn.js";import"./index-BwDkhjyp.js";import"./useSnackbar-BwxwqTze.js";import"./Switch-BEA9tef6.js";import"./TableBody-ClXTvMwp.js";import"./TabPanel-viwbCkvQ.js";import"./Tag-BJgkYyYj.js";import"./TextArea-DEm45fzC.js";import"./TextInput-stc9rykx.js";import"./Tooltip-ClFYL6uL.js";import"./Typography-BSa3mKzK.js";import{P as a}from"./ParticleProvider-CnlWE_5_.js";import"./iframe-BOhdcc20.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./emotion-react-jsx-runtime.browser.esm-KjBcCTgX.js";import"./emotion-styled-base.browser.esm-CI5WbkaJ.js";import"./index-C_eOKtFu.js";import"./clsx-B-dksMZM.js";import"./HelperText-CleT8tCk.js";import"./motion-D72GihrG.js";import"./floating-ui.react-BF3UZOJf.js";import"./ButtonGroupContext-DHhik5nJ.js";import"./constants-IjE9pQe9.js";import"./types-FAVVMtnh.js";import"./BaseSelect-BsHa1RO_.js";import"./RequiredIndicator-DxUWfeRE.js";import"./emotion-react.browser.esm-D0pB3cbc.js";import"./useParticleTheme-JPmG0cGx.js";import"./index-Dy8yH8dp.js";import"./HeaderCloseButton-BwObO3PA.js";import"./index-D3ylJrlI.js";import"./ModalFooter-qMf2qio5.js";import"./StyledInput-DMEwU9b-.js";function p(e){const t={h1:"h1",h2:"h2",h3:"h3",p:"p",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Getting Started"}),`
`,o.jsxs(a,{children:[o.jsx(t.h1,{id:"getting-started",children:"Getting started"}),o.jsx(t.p,{children:"Use Particle components based on the following steps"}),o.jsx(t.h2,{id:"1-install",children:"1. Install"}),o.jsx(t.p,{children:"To use Particle in your project, run one of the following commands in your terminal."}),o.jsx(n,{children:o.jsx(t.p,{children:`Note: To support IE browsers, we are using v1.2.36 of
@fortawesome/fontawesome-svg-core which is needed for Fontawesome 5.`})}),o.jsx(i,{yarnStep:o.jsx(r,{dark:!0,code:`

yarn add @ynetic/particle @emotion/react @emotion/styled framer-motion @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome`}),npmStep:o.jsx(r,{dark:!0,code:`

npm install @ynetic/particle @emotion/react @emotion/styled framer-motion @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome`})}),o.jsx(t.h2,{id:"2-fonts",children:"2. Fonts"}),o.jsx(t.p,{children:"Particle uses Roboto fonts. To use them, add it to your project via Fontsource, or with the Google Fonts CDN."}),o.jsx(i,{yarnStep:o.jsx(r,{dark:!0,code:`

yarn add @fontsource/roboto`}),npmStep:o.jsx(r,{dark:!0,code:`

npm install @fontsource/roboto`})}),o.jsx(t.h3,{id:"import-via-fontsource",children:"Import via Fontsource"}),o.jsx(t.p,{children:"Then Import it in your project at the root component of your app."}),o.jsx(n,{children:o.jsx(t.p,{children:`Note: Particle's default typography configuration relies only on the 400, 500,
and 700 font weights.`})}),o.jsx(r,{dark:!0,code:`
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';`}),o.jsx(t.h3,{id:"or-via-google-web-fonts",children:"Or via Google Web Fonts"}),o.jsx(t.p,{children:"To install Roboto through the Google Web Fonts CDN, add the following code inside your project's tag:"}),o.jsx(r,{dark:!0,code:`
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
/>
`}),o.jsx(t.h2,{id:"3-configure-your-project",children:"3. Configure your project"}),o.jsx(r,{dark:!0,language:"tsx",code:`

// 1. import ParticleProvider
import { ParticleProvider } from '@ynetic/particle';

export function App() {
  // 2. Wrap ParticleProvider at the root of your app
  return (
    <ParticleProvider>
      <RestOfYourCode />
    </ParticleProvider>
  );
}`}),o.jsx(t.h2,{id:"4-importing-and-using-a-component",children:"4. Importing and Using a Component"}),o.jsx(t.p,{children:"After installing the library and following the configuration steps, you can start using its components in your project. Here's how to import and use the Button component:"}),o.jsx(r,{dark:!0,language:"tsx",code:`

// 1. import Button component
import { Button } from '@ynetic/particle';

export function App() {
  // 2. Use the Button anywhere in the app
  return (
    <div className='App'>
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
    </div>
  );
}`})]})]})}function Ao(e={}){const{wrapper:t}={...s(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(p,{...e})}):p(e)}export{Ao as default};
