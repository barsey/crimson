import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const DefaultSize = 24;
const SwitchSizeMap = {
  small: DefaultSize - 4,
  medium: DefaultSize,
  large: DefaultSize + 4,
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MotionSwitchContainer = styled(motion.div)<{
  isOn: boolean;
  height: number;
}>`
  background: ${({ isOn }) =>
    isOn ? 'linear-gradient(250deg, #7b2ff7, #f107a3)' : '#949a9d'};
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: ${({ height }) => height * 2}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ height }) => height / 2}px;
  margin: 8px;
`;

const SwitchElement = styled.div<{ isOn: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${({ isOn }) => (isOn ? 'flex-end' : 'flex-start')};
  padding: 2px;
  cursor: pointer;
  align-items: center;
`;

const MotionHandleElement = styled(motion.div)<{ height: number }>`
  width: ${({ height }) => height - 4}px;
  height: ${({ height }) => height - 4}px;
  background-color: white;
  border-radius: ${({ height }) => (height - 4) / 2}px;
`;
type SwitchSize = 'small' | 'medium' | 'large';
type Props = {
  label?: string;
  size?: SwitchSize;
};

export function Switch({ label, size }: Props) {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  const height = size ? SwitchSizeMap[size] : DefaultSize;

  return (
    <Container>
      <MotionSwitchContainer
        isOn={isOn}
        height={height}
        whileHover={{
          scale: 1.1,
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        }}
      >
        <SwitchElement isOn={isOn} onClick={toggleSwitch}>
          <MotionHandleElement height={height} layout transition={spring} />
        </SwitchElement>
      </MotionSwitchContainer>
      {label && <span>{label}</span>}
    </Container>
  );
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};
