import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { DefaultParticleProps, ParticleColor } from '../types';
import { ELEVATION_STYLE } from '../../core/constants';

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
  color?: ParticleColor;
}>`
  background: ${({ isOn, theme, color }) =>
    isOn
      ? color
        ? theme.colors[color]
        : `linear-gradient(250deg, ${theme.colors.primary}, ${theme.colors.secondary})`
      : '#949a9d'};
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

type Props = DefaultParticleProps & {
  label?: string;
  checked?: boolean;
  onToggle?: () => void;
};

function Switch({ label, size, color, checked = false, onToggle }: Props) {
  const height = size ? SwitchSizeMap[size] : DefaultSize;

  return (
    <Container>
      <MotionSwitchContainer
        isOn={checked}
        height={height}
        color={color}
        whileHover={ELEVATION_STYLE}
      >
        <SwitchElement isOn={checked} onClick={onToggle}>
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

export { Switch };
