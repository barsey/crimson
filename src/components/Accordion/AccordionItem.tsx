import {
  ForwardedRef,
  PropsWithChildren,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Icon } from '../Icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { AccordionContext } from './AccordionContext';
import { Box } from '../Box';
import { HelperText } from '../HelperText';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Header = styled.div`
  padding: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  &:hover {
    background: ${({ theme }) => theme.colors.grey[50]};
    border-radius: 6px;
  }

  cursor: pointer;
  user-select: none;

  &.reverse {
    flex-direction: row-reverse;
  }

  .accordion-icon {
    svg {
      color: ${({ theme }) => theme.colors.grey[900]};
    }
  }

  &.disableToggle {
    cursor: default;
    &:hover {
      background: inherit;
    }
  }
`;

const StyledContentContainer = styled.div`
  overflow: hidden;
`;

const ContentContainer = motion(StyledContentContainer);

const Content = styled.div`
  padding: 16px;
  padding-top: 2px;
`;

const AccordionItemContainer = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.grey[300]}`};
  &.active {
    border: ${({ theme }) => `1px solid ${theme.colors.grey[900]}`};
    box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.15);
  }
  border-radius: 6px;

  background: ${({ theme }) => theme.colors.neutral[0]};

  &[data-has-spacing='false'] {
    border-bottom-width: 0;
    &:last-child {
      border-bottom-width: 1px;
    }
  }

  &.hideVerticalBorder {
    border-left-width: 0;
    border-right-width: 0;
    border-radius: 0;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  align-items: flex-start;
  flex-direction: column;
  &.reverse {
    flex-direction: row-reverse;
  }

  .title {
    color: ${({ theme }) => theme.colors.grey[900]};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    .subTitle {
      font-weight: ${({ theme }) => theme.font.weight.regular};
    }
  }

  &.active {
    .subTitle {
      font-weight: ${({ theme }) => theme.font.weight.bold};
    }
  }
`;

const TitleFooter = styled.div`
  color: ${({ theme }) => theme.colors.grey[700]};
  font-size: ${({ theme }) => theme.font.size[50]};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

const ExpandSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;

const arrowVariants = {
  opened: { rotate: 180 },
  closed: { rotate: 0 },
};

export type AccordionItemProps = {
  title?: string;
  subTitle?: string;
  defaultExpanded?: boolean;
  className?: string;
  style?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  expandSection?: React.ReactNode;
  titleComponent?: React.ReactNode;
  reverse?: boolean;
  id?: string;
  active?: boolean;
  titleFooter?: string;
  onToggle?: () => void;
  leadingExpandSection?: React.ReactNode;
  trailingExpandSection?: React.ReactNode;
  disableToggle?: boolean;
  errorText?: string;
  hideVerticalBorder?: boolean;
};

const AccordionItem = forwardRef(function AccordionItem(
  props: PropsWithChildren<AccordionItemProps>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {
    title,
    children,
    defaultExpanded = false,
    expandSection,
    titleComponent,
    reverse,
    id = 'accordion-item',
    subTitle,
    active,
    titleFooter,
    onToggle,
    leadingExpandSection,
    trailingExpandSection,
    disableToggle,
    errorText,
    hideVerticalBorder,
    headerStyle,
    ...otherProps
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(defaultExpanded);
  }, [defaultExpanded]);

  const toggleOpen = () => {
    if (!disableToggle) {
      setIsOpen(!isOpen);
      onToggle && onToggle();
    }
  };

  const { spacing = null } = useContext(AccordionContext);

  return (
    <AccordionItemContainer
      ref={ref}
      data-has-spacing={!!spacing}
      id={`${id}-container`}
      data-testid={`${id}-container`}
      className={clsx({ active, hideVerticalBorder })}
      aria-disabled={disableToggle}
      {...otherProps}
    >
      <Header
        onClick={toggleOpen}
        role='button'
        className={clsx({ reverse, disableToggle })}
        id={`${id}-header`}
        data-testid={`${id}-header`}
        style={headerStyle}
      >
        <TitleContainer
          id={`${id}-header-title-container`}
          data-testid={`${id}-header-title-container`}
          className={clsx({ reverse, active })}
        >
          {errorText && (
            <Box
              display='flex'
              justifyContent='flex-start'
              alignItems='center'
              gap={4}
              id={`${id}-error-container`}
              data-testid={`${id}-error-container`}
            >
              <Icon
                id={`${id}-error-icon`}
                data-testid={`${id}-error-icon`}
                icon={faExclamationCircle}
                color='error'
              />
              <HelperText
                id={`${id}-error-text`}
                data-testid={`${id}-error-text`}
              >
                {errorText}
              </HelperText>
            </Box>
          )}
          <Box>
            {titleComponent ? (
              <span
                id={`${id}-header-title-component`}
                data-testid={`${id}-header-title-component`}
              >
                {titleComponent}
              </span>
            ) : (
              <>
                <span
                  id={`${id}-header-title`}
                  data-testid={`${id}-header-title`}
                  className='title'
                >
                  {title}
                  {subTitle && (
                    <span
                      id={`${id}-header-sub-title`}
                      data-testid={`${id}-header-sub-title`}
                      className='subTitle'
                    >
                      {`${title ? ' - ' : ''}${subTitle}`}
                    </span>
                  )}
                </span>
              </>
            )}
          </Box>
          {titleFooter && <TitleFooter>{titleFooter}</TitleFooter>}
        </TitleContainer>
        <ExpandSectionContainer>
          {leadingExpandSection && leadingExpandSection}
          {!disableToggle && (
            <motion.span
              variants={arrowVariants}
              initial={false}
              animate={isOpen ? 'opened' : 'closed'}
              className='accordion-icon'
              id={`${id}-header-icon-container`}
              data-testid={`${id}-header-icon-container`}
            >
              {expandSection ? (
                expandSection
              ) : (
                <Icon
                  id={`${id}-header-icon`}
                  data-testid={`${id}-header-icon`}
                  icon={faChevronDown}
                />
              )}
            </motion.span>
          )}

          {trailingExpandSection && trailingExpandSection}
        </ExpandSectionContainer>
      </Header>
      {!disableToggle && (
        <ContentContainer
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.2 }}
          id={`${id}-content-container`}
          data-testid={`${id}-content-container`}
        >
          <Content id={`${id}-content`} data-testid={`${id}-content`}>
            {children}
          </Content>
        </ContentContainer>
      )}
    </AccordionItemContainer>
  );
});

AccordionItem.displayName = 'AccordionItem';

export { AccordionItem };
