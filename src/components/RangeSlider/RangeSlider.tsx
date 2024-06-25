import { forwardRef } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ParticleColor } from '../types';
import { Typography } from '../Typography';

const ThumbSize = 16;
const TrackHeight = 4;

const SliderContainer = styled.div`
  margin: 20px auto;
  width: 100%;
`;

const Slider = styled.input<{ percentage: number; color?: ParticleColor }>`
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 100%;
  background: transparent; /* Ensure the custom track background is visible */

  /* Removes default track styles in WebKit browsers */
  &::-webkit-slider-runnable-track {
    background: transparent;
    border-radius: 5px;
    height: ${TrackHeight}px;
  }

  &::-moz-range-track {
    background: transparent;
    border-radius: 5px;
    height: ${TrackHeight}px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -6px; /* Ensure the thumb is positioned correctly over the track */
    width: ${ThumbSize}px;
    height: ${ThumbSize}px;
    background: ${({ theme, color = 'primary' }) => theme.colors[color].main};
    border-radius: 50%;
    cursor: pointer;
    position: relative;
  }

  &::-moz-range-thumb {
    width: ${ThumbSize}px;
    height: ${ThumbSize}px;
    background: ${({ theme, color = 'primary' }) => theme.colors[color].main};
    border-radius: 50%;
    cursor: pointer;
  }

  &:focus {
    outline: none; /* Removes the outline for focused elements in some browsers */
  }

  background: ${({ theme, percentage, color = 'primary' }) =>
    `linear-gradient(90deg, ${theme.colors[color].main} ${percentage}%, #ddd ${percentage}%)`};
`;

export type RangeSliderProps = {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  testId?: string;
  step?: number;
  isDisabled?: boolean;
  color?: ParticleColor;
  label?: string;
};
export const RangeSlider = forwardRef<HTMLInputElement, RangeSliderProps>(
  (props, ref) => {
    const {
      min = 0,
      max,
      value = 0,
      onChange,
      step,
      testId = 'range-slider',
      isDisabled,
      color,
      label,
    } = props;

    return (
      <SliderContainer ref={ref}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {label && <Typography as='label'>{label}</Typography>}
          <Slider
            type='range'
            min={min}
            max={max}
            value={value}
            onChange={(event) => onChange(event.target.valueAsNumber)}
            step={step}
            data-testid={testId}
            disabled={isDisabled}
            percentage={(value / max) * 100}
            color={color}
          />
        </motion.div>
      </SliderContainer>
    );
  },
);

RangeSlider.displayName = 'RangeSlider';
