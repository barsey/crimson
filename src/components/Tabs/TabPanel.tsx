import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

const Content = styled(motion.div)`
  padding: 2px 8px;
`;

type TabPanel = {
  selected: boolean;
  label: string;
};

export function TabPanel(props: PropsWithChildren<TabPanel>) {
  const { children, selected, label } = props;
  return (
    <AnimatePresence mode='wait'>
      <Content
        key={selected ? label : 'empty'}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {selected ? children : null}
      </Content>
    </AnimatePresence>
  );
}
