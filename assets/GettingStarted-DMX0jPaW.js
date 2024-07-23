import{c as o}from"./emotion-react-jsx-runtime.browser.esm-B1TMS0DI.js";import{useMDXComponents as s}from"./index-DlpNa54Y.js";import{ae as m,af as r}from"./index-CUGDen1w.js";import{I as i}from"./InstallationSteps-Bl6LAsJK.js";import"./AccordionItem-CCUEEixD.js";import"./ActionMenuItem-DV_4_Lsv.js";import{A as n}from"./Alert-BWNwk_95.js";import"./Autocomplete-SgGtIisF.js";import"./Avatar-75kak8G-.js";import"./Badge-Bn7KK9Pr.js";import"./Box-BzSzghsi.js";import"./Button-Brk48cb4.js";import"./ButtonGroup-C22QqDgm.js";import"./Calendar-DzyWOR4M.js";import"./CardStack-DK1uVTgz.js";import"./Checkbox-DXKXbqH3.js";import"./Chip-DnjWEsrN.js";import"./DataGrid-C-UMgwTK.js";import"./DateInput-DkN2l98o.js";import"./Drawer-9K-VpsNr.js";import"./FileUpload-fg0uWg4G.js";import"./Grid-DGRdWpuy.js";import"./IconButton-CzSHqdhr.js";import"./Icon-Bht7JVrg.js";import"./ListItem-DOfIr4Po.js";import"./Loader-BsOWz7yD.js";import"./Modal-CWmS6_Wh.js";import"./ConfirmationModal-CUY02qYs.js";import"./MultiSelect-Dno5NbYk.js";import"./Paper-D3EMB1fG.js";import"./Popover-BdzVSrhl.js";import"./Radio-CESHvHH_.js";import"./RadioGroup-zEWOHZ8w.js";import"./RangeSlider-XekIIxoR.js";import"./SegmentedControlButton-MzOxZeNL.js";import"./Select-BX1Ha6hR.js";import"./Skeleton-BtFdF8NU.js";import"./index-BwDkhjyp.js";import"./useSnackbar-BwxwqTze.js";import"./Switch-Dc1xjfAn.js";import"./TableBody-NM26uE4H.js";import"./TabPanel-DuzfAezv.js";import"./Tag-CfXYS0VE.js";import"./TextArea-DuEVw_mp.js";import"./TextInput-B1Fj8e-n.js";import"./Tooltip-DpUn_wRn.js";import"./Typography-Dt8omQSu.js";import{P as a}from"./ParticleProvider-BdXz6jgo.js";import"./extends-CF3RwP-h.js";import"./iframe-DI6ZMvYk.js";import"../sb-preview/runtime.js";import"./index-DxjWwZXO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./emotion-styled-base.browser.esm-Dp_FgEmo.js";import"./index-BBMM-L_h.js";import"./clsx-B-dksMZM.js";import"./HelperText-jNN1mvHL.js";import"./motion-r4PA4Vsg.js";import"./floating-ui.react-C1nSsq-1.js";import"./ButtonGroupContext-DHhik5nJ.js";import"./constants-IjE9pQe9.js";import"./types-FAVVMtnh.js";import"./BaseSelect-BNrCIJ0J.js";import"./RequiredIndicator-YENVr-Jc.js";import"./emotion-react.browser.esm-C1IUp0_c.js";import"./useParticleTheme-A-3DvM6b.js";import"./index-KOD9nKFQ.js";import"./ModalFooter-BKOTTQkI.js";import"./index-D3ylJrlI.js";import"./ModalDescription-BxeRl20l.js";import"./StyledInput-DHY_kHAE.js";function p(e){const t={h1:"h1",h2:"h2",h3:"h3",p:"p",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Getting Started"}),`
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
}`})]})]})}function Mo(e={}){const{wrapper:t}={...s(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(p,{...e})}):p(e)}export{Mo as default};
