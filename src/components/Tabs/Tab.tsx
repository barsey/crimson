import { motion } from 'framer-motion';

type TabProps = {
  label?: string;
  selectedTabIndex: number;
  index: number;
  onClick: (index: number) => void;
};

export function Tab(props: TabProps) {
  const { selectedTabIndex, index, label, onClick } = props;
  const isSelected = index === selectedTabIndex;

  return (
    <li className={isSelected ? 'selected' : ''} onClick={() => onClick(index)}>
      {`${label}`}
      {isSelected ? (
        <motion.div className='underline' layoutId='underline' />
      ) : null}
    </li>
  );
}
