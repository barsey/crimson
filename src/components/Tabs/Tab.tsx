import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useId } from 'react';

const Container = styled.li`
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.base};
  font-size: ${({ theme }) => theme.font.size[100]};
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  list-style: none;
  padding: 0;
  margin: 0 !important;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  color: ${({ theme }) => theme.colors.grey[900]};
  background: ${({ theme }) => theme.colors.neutral[0]};
  padding: 0.5rem 1rem;
  position: relative;

  cursor: pointer;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 0;
  position: relative;
  user-select: none;

  &:hover {
    background: #eee;
  }

  button {
    width: 20px;
    height: 20px;
    border: 0;
    background: #fff;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    stroke: #000;
    margin-left: 10px;
    cursor: pointer;
    flex-shrink: 0;
  }

  .underline {
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 0.1875rem;
    align-self: stretch;
    border-radius: 0.125rem 0.125rem 0rem 0rem;
  }
`;

export type TabProps = {
  label?: string;
  selectedTabIndex: number;
  index: number;
  onClick: (index: number) => void;
  id?: string;
};

export function Tab(props: TabProps) {
  const { selectedTabIndex, index, label, onClick, id } = props;
  const isSelected = index === selectedTabIndex;

  const uniqueId = useId();
  const tabId = id || uniqueId;

  return (
    <Container
      className={isSelected ? 'selected' : ''}
      onClick={() => onClick(index)}
      id={`tab-${tabId}`}
      data-testid={`tab-${tabId}`}
    >
      {`${label}`}
      {isSelected ? (
        <motion.div className='underline' layoutId={`underline-${id}`} />
      ) : null}
    </Container>
  );
}
