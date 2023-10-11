import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const Container = styled.div`
  background: linear-gradient(250deg, #7b2ff7, #f107a3);
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 48px;
  height: 24px;
  border-radius: 12px;
`;

const SwitchElement = styled.div<{ isOn: boolean }>`
  width: 48px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: ${({ isOn }) => (isOn ? 'flex-end' : 'flex-start')};
  border-radius: 10px;
  padding: 2px;
  cursor: pointer;
`;

const HandleElement = styled(motion.div)`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 10px;
`;

export function Switch() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <Container>
      <SwitchElement isOn={isOn} onClick={toggleSwitch}>
        <HandleElement layout transition={spring} />
      </SwitchElement>
    </Container>
  );
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};
