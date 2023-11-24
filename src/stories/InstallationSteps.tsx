import React, { useState } from 'react';
import { Tabs, Tab, TabPanels, TabPanel } from '../components';
import ParticleProvider from '../core/ParticleProvider';

const InstallationSteps = (props: {
  yarnStep: React.ReactNode;
  npmStep: any;
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { yarnStep, npmStep } = props;
  return (
    <div>
      <ParticleProvider>
        <Tabs>
          <Tab
            label='yarn'
            selectedTabIndex={selectedTab}
            index={0}
            onClick={setSelectedTab}
          />
          <Tab
            label='npm'
            selectedTabIndex={selectedTab}
            index={1}
            onClick={setSelectedTab}
          />
        </Tabs>
        <TabPanels>
          <TabPanel label='yarn' selected={selectedTab === 0}>
            {yarnStep}
          </TabPanel>
          <TabPanel label='npm' selected={selectedTab === 1}>
            {npmStep}
          </TabPanel>
        </TabPanels>
      </ParticleProvider>
    </div>
  );
};
export default InstallationSteps;
