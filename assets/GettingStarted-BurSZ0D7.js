import{j as o}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{useMDXComponents as s}from"./index-DlpNa54Y.js";import{M as m,d as r}from"./index-B8MycITP.js";import{I as i}from"./InstallationSteps-CKaAri70.js";import"./AccordionItem-q4lFs2pc.js";import"./ActionMenuItem-Dqhcqn1M.js";import{A as n}from"./Alert-Dse3GtKs.js";import"./Autocomplete-BvPxvlYs.js";import"./Avatar-B-wEq1s6.js";import"./Badge-lO2QxUCY.js";import"./Box-DNae3zpJ.js";import"./Button-gWDE2Z4A.js";import"./ButtonGroup-DfmI99us.js";import"./Calendar-D6g79K6p.js";import"./CardStack-BCQtlxGk.js";import"./Checkbox-onQGnHEc.js";import"./Chip-CefxG_S-.js";import"./DataGrid-D277TDTA.js";import"./DateInput-DleJqgHV.js";import"./Drawer-vhe0dML4.js";import"./FileUpload-BHz72LEJ.js";import"./Grid-CJ1BV-Og.js";import"./IconButton-BGN3DQNe.js";import"./Icon-DpkAdYOh.js";import"./ListItem-DZ2tqYPs.js";import"./Loader-BPJWVqZm.js";import"./Modal-CRmMNaNH.js";import"./ConfirmationModal-B3QGxkAv.js";import"./MultiSelect-dQpWY2jf.js";import"./Paper-RRqDXLqv.js";import"./Popover-CobqtO_R.js";import"./Radio-Cu_IMSNY.js";import"./RadioGroup-DQtaeQJB.js";import"./RangeSlider-BSwASKk5.js";import"./SegmentedControlButton-B1XpAn_f.js";import"./Select-C70pfp-5.js";import"./Skeleton-BvIrdfYn.js";import"./index-BwDkhjyp.js";import"./useSnackbar-BwxwqTze.js";import"./Switch-BEA9tef6.js";import"./TableBody-ClXTvMwp.js";import"./TabPanel-viwbCkvQ.js";import"./Tag-BJgkYyYj.js";import"./TextArea-CRRwfN8p.js";import"./TextInput-F-EhJrK2.js";import"./Tooltip-ClFYL6uL.js";import"./Typography-BSa3mKzK.js";import{P as a}from"./ParticleProvider-BMNTZAFM.js";import"./iframe-C4wy_RaJ.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./emotion-react-jsx-runtime.browser.esm-KjBcCTgX.js";import"./emotion-styled-base.browser.esm-CI5WbkaJ.js";import"./index-C_eOKtFu.js";import"./clsx-B-dksMZM.js";import"./HelperText-CleT8tCk.js";import"./motion-D72GihrG.js";import"./floating-ui.react-BF3UZOJf.js";import"./ButtonGroupContext-DHhik5nJ.js";import"./constants-IjE9pQe9.js";import"./types-FAVVMtnh.js";import"./BaseSelect-4inZ-mS4.js";import"./RequiredIndicator-DxUWfeRE.js";import"./emotion-react.browser.esm-D0pB3cbc.js";import"./useParticleTheme-JPmG0cGx.js";import"./index-Dy8yH8dp.js";import"./ModalFooter-3BmHkN8c.js";import"./index-D3ylJrlI.js";import"./ModalDescription-Ch3wucuV.js";import"./StyledInput-tBOz57cT.js";function p(e){const t={h1:"h1",h2:"h2",h3:"h3",p:"p",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Getting Started"}),`
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
