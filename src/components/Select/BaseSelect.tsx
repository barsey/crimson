import React, { useEffect, useRef, useState, useId } from 'react';
import styled from '@emotion/styled';
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useListNavigation,
  useInteractions,
  FloatingFocusManager,
  offset,
  flip,
  size,
  autoUpdate,
  FloatingPortal,
} from '@floating-ui/react';
import { CloseIcon } from '../Icons/CloseIcon';
import { DownIcon } from '../Icons/DownIcon';
import { ParticleColor, ParticleSize } from '../types';
import InputContainer from './InputContainer';
import { BaseSelectProps, SelectKeyValue } from './types';
import { Typography } from '../Typography';
import { ParticleHeights, ZIndex } from '../constants';
import { HelperText } from '../HelperText';
import clsx from 'clsx';
import { RequiredIndicator } from '../Indicators';

const SelectContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  &[data-fullwidth='true'] {
    min-width: 200px;
    width: 100%;
  }

  text-align: left;
`;

const SelectControl = styled(InputContainer)<{
  color?: ParticleColor;
  inputsize?: ParticleSize;
  clearable?: boolean;
}>`
  align-items: center;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  transition: all 100ms ease 0s;
  font-size: 0.875rem;
  // padding: 2px;

  &.error {
    border-color: ${({ theme }) => theme.colors.error[500]};
  }
`;

const SelectValueContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  padding: 0 8px;
  box-sizing: border-box;
`;

const SelectIndicators = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-shrink: 0;
  box-sizing: border-box;
`;

const SelectIndicator = styled.div`
  display: flex;
  transition: color 150ms ease 0s;
  color: rgb(204, 204, 204);
  padding: 4px 8px;
  box-sizing: border-box;

  display: flex;
  // fill: currentcolor;
  line-height: 1;
  // stroke: currentcolor;
  stroke-width: 1;

  svg {
    &:hover {
      fill: rgb(102, 102, 102);
      stroke: rgb(102, 102, 102);
    }
  }
`;

const SelectInput = styled.div`
  // padding: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;

export const SelectMenu = styled.div<{ inputsize?: ParticleSize }>`
  font-size: ${({ theme }) => theme.font.size[100]};
  font-weight: ${({ theme }) => theme.font.weight.regular};

  border-radius: 8px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.neutral[0]};

  box-shadow:
    0 0 0 1px hsla(0, 0%, 0%, 0.1),
    0 4px 11px hsla(0, 0%, 0%, 0.1);
  z-index: ${ZIndex.Select};
  max-height: 360px !important;

  .select-menu-item {
    height: ${({ inputsize = 'medium' }) => ParticleHeights[inputsize]}px;
    padding: 2px 8px;
    outline: 0px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      // background-color: #9fc3f870;
      background-color: ${({ theme }) => theme.colors.grey[100]};
    }

    &.selected {
      // background-color: #0d6efd;
      background-color: ${({ theme }) => theme.colors.info[400]};
      color: #fff;
    }
  }
`;

const SelectInputTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const SelectInputTagItem = styled.div<{ inputsize?: ParticleSize }>`
  background: ${({ theme }) => theme.colors.grey[100]};
  padding: 2px 8px;
  border-radius: 2px;
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 4px;
  height: ${({ inputsize = 'medium' }) =>
    `${ParticleHeights[inputsize] - 8}px`};
  svg {
    fill: #3f4443;
    stroke: #3f4443;
    padding: 0px 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TagLabel = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.grey[900]};
  font-size: 14px;
  box-sizing: border-box;
  // height: 18px;
  display: flex;
  align-items: center;
  padding: 2px 2px;

  &.single {
    // height: 24px;
    padding: 0 2px;
    // font-size: 100%;
  }

  &.placeholder {
    color: ${({ theme }) => theme.colors.grey[600]};
  }
`;

const SelectCloseContainer = styled.span`
  display: flex;
  align-items: center;

  &.multiple {
    // height: 14px;
    width: 14px;
    &:hover {
      background-color: #ddd;
    }
  }
`;

const SearchBox = styled.div`
  padding: 5px;
  background-color: #eee;

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const IconSeparator = styled.span`
  align-self: stretch;
  width: 1px;
  background-color: rgb(204, 204, 204);
  margin-bottom: 8px;
  margin-top: 8px;
  box-sizing: border-box;
`;

const SelectInputContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  outline: none;
`;

const TypeComparer = (option: SelectKeyValue, key: 'label' | 'value') =>
  typeof option === 'string' ? option : option[key];

const EqualityCheck = (option1: SelectKeyValue, option2: SelectKeyValue) =>
  TypeComparer(option1, 'value') === TypeComparer(option2, 'value');

const InEqualityCheck = (option1: SelectKeyValue, option2: SelectKeyValue) =>
  TypeComparer(option1, 'value') !== TypeComparer(option2, 'value');

const BaseSelect: React.FC<BaseSelectProps> = (props: BaseSelectProps) => {
  const {
    placeholder,
    options,
    multiple,
    searchable,
    onChange,
    value,
    label,
    clearable = true,
    fullWidth = true,
    size: SelectSize,
    id = 'base-select',
    errorText,
    required,
  } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const [selectedValue, setSelectedValue] = useState<SelectKeyValue[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const error = !!errorText;

  const { refs, floatingStyles, context } = useFloating({
    placement: 'bottom-start',
    open: showMenu,
    onOpenChange: (_open: boolean, _event, reason) => {
      if (reason === 'outside-press' || reason === 'escape-key') {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    },
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({ padding: 10 }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
        padding: 10,
      }),
    ],
  });

  const listRef = React.useRef<Array<HTMLElement | null>>([]);
  // const isTypingRef = React.useRef(false);
  const uniqueId = useId();
  const controlId = id || uniqueId;
  const click = useClick(context, { event: 'mousedown' });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'listbox' });
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,

    onNavigate: setActiveIndex,
    // This is a large list, allow looping.
    loop: true,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [dismiss, role, listNav, click],
  );

  useEffect(() => {
    if (value) {
      setSelectedValue(value);
    }
  }, [value]);

  useEffect(() => {
    setSearchValue('');
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  const getDisplay = () => {
    if (!selectedValue || selectedValue.length === 0) {
      return <TagLabel className='single placeholder'>{placeholder}</TagLabel>;
    }

    if (multiple) {
      return (
        <SelectInputTags>
          {selectedValue.map((option) => (
            <SelectInputTagItem
              key={TypeComparer(option, 'value')}
              inputsize={SelectSize}
            >
              <TagLabel>{TypeComparer(option, 'label')}</TagLabel>
              <SelectCloseContainer
                className='multiple'
                onClick={(e) => onTagRemove(e, option)}
              >
                <CloseIcon />
              </SelectCloseContainer>
            </SelectInputTagItem>
          ))}
        </SelectInputTags>
      );
    }

    return (
      <TagLabel className='single'>
        {TypeComparer(selectedValue[0], 'label')}
      </TagLabel>
    );
  };

  const onChangeHandler = (newValue: SelectKeyValue[]) => {
    onChange && onChange(newValue);
  };

  const onItemSelect = (option: SelectKeyValue) => {
    let newValue;

    if (multiple) {
      if (selectedValue.findIndex((o) => EqualityCheck(o, option)) >= 0) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectedValue, option];
      }
    } else {
      newValue = [option];
    }

    setSelectedValue(newValue);
    onChangeHandler(newValue);
    setShowMenu(false);
  };

  const isSelected = (option: SelectKeyValue) => {
    if (multiple) {
      return selectedValue.filter((o) => EqualityCheck(o, option)).length > 0;
    }

    if (selectedValue.length === 0) {
      return false;
    }

    return EqualityCheck(selectedValue[0], option);
  };

  const removeOption = (option: SelectKeyValue) => {
    return selectedValue.filter((o) => InEqualityCheck(o, option));
  };

  const onTagRemove = (
    event: React.MouseEvent<HTMLElement>,
    option: SelectKeyValue,
  ) => {
    event.preventDefault();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
    onChangeHandler(newValue);
  };

  const onClearSelected = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setSelectedValue([]);
    onChangeHandler([]);
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  const getOptions = () => {
    if (!searchValue) {
      return options;
    }
    return options.filter(
      (option) =>
        TypeComparer(option, 'label')
          .toLowerCase()
          .indexOf(searchValue.toLowerCase()) >= 0,
    );
  };

  return (
    <SelectContainer
      data-fullwidth={fullWidth}
      id={`${id}-container`}
      data-testid={`${id}-container`}
    >
      {label && (
        <Typography id={controlId} as='label'>
          {label} <RequiredIndicator required={required} />
        </Typography>
      )}
      <SelectControl
        className={clsx({ 'menu-visible': showMenu, error })}
        inputsize={SelectSize}
        ref={refs.setReference}
        id={`${id}-control`}
        data-testid={`${id}-control`}
        aria-labelledby={label && `select-${controlId}`}
        clearable={clearable}
        {...getReferenceProps()}
        role='button'
      >
        <SelectValueContainer
          id={`${id}-value-container`}
          data-testid={`${id}-value-container`}
        >
          <SelectInput id={`${id}-input`} data-testid={`${id}-input`}>
            <SelectInputContent
              tabIndex={0}
              ref={refs.setReference}
              aria-label={`select-input-content-${controlId}`}
              id={`${id}-input-content`}
              data-testid={`${id}-input-content`}
              {...getReferenceProps()}
            >
              {getDisplay()}
            </SelectInputContent>
          </SelectInput>
        </SelectValueContainer>
        {showMenu && (
          <FloatingPortal>
            <FloatingFocusManager context={context} modal={false}>
              <SelectMenu
                ref={refs.setFloating}
                inputsize={SelectSize}
                style={{
                  ...floatingStyles,
                  minWidth: 100,
                  outline: 0,
                }}
                id={`${id}-menu`}
                data-testid={`${id}-menu`}
                {...getFloatingProps()}
              >
                {searchable && (
                  <SearchBox
                    id={`${id}-menu-search-box`}
                    data-testid={`${id}-menu-search-box`}
                  >
                    <input
                      onChange={onSearch}
                      value={searchValue}
                      ref={searchRef}
                      id={`${id}-menu-search-box-input`}
                      data-testid={`${id}-menu-search-box-input`}
                    />
                  </SearchBox>
                )}
                {getOptions().map((option: SelectKeyValue, index: number) => (
                  <div
                    ref={(node) => {
                      listRef.current[index] = node;
                    }}
                    role='option'
                    tabIndex={index === activeIndex ? 0 : -1}
                    aria-selected={isSelected(option)}
                    key={TypeComparer(option, 'value') + index}
                    className={`select-menu-item ${
                      isSelected(option) && 'selected'
                    }`}
                    id={`${id}-menu-item-${index}`}
                    data-testid={`${id}-menu-item-${index}`}
                    {...getItemProps({
                      // Handle pointer select.
                      onClick: () => {
                        onItemSelect(option);
                      },

                      // Handle keyboard select.
                      onKeyDown(event) {
                        if (event.key === 'Enter') {
                          event.preventDefault();

                          onItemSelect(option);
                        }

                        if (event.key === ' ') {
                          event.preventDefault();

                          onItemSelect(option);
                        }
                      },
                    })}
                  >
                    {TypeComparer(option, 'label')}
                  </div>
                ))}
              </SelectMenu>
            </FloatingFocusManager>
          </FloatingPortal>
        )}
        <SelectIndicators
          id={`${id}-indicators`}
          data-testid={`${id}-indicators`}
        >
          {!multiple && selectedValue.length > 0 && clearable && (
            <>
              <SelectIndicator
                id={`${id}-indicator-clear-container`}
                data-testid={`${id}-indicator-clear-container`}
              >
                <SelectCloseContainer
                  onClick={onClearSelected}
                  role='button'
                  aria-hidden='true'
                  id={`${id}-indicator-clear`}
                  data-testid={`${id}-indicator-clear`}
                >
                  <CloseIcon
                    id={`${id}-indicator-clear-icon`}
                    data-testid={`${id}-indicator-clear-icon`}
                  />
                </SelectCloseContainer>
              </SelectIndicator>
              <IconSeparator />
            </>
          )}

          <SelectIndicator
            id={`${id}-indicator-down-container`}
            data-testid={`${id}-indicator-down-container`}
          >
            <DownIcon
              id={`${id}-indicator-down-icon`}
              data-testid={`${id}-indicator-down-icon`}
            />
          </SelectIndicator>
        </SelectIndicators>
      </SelectControl>
      <HelperText>{errorText}</HelperText>
    </SelectContainer>
  );
};

export { BaseSelect };
