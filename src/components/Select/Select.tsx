import React, { useEffect, useRef, useState, useId } from 'react';
import styled from '@emotion/styled';
import { CloseIcon } from '../Icons/CloseIcon';
import { UpDownIcon } from '../Icons/UpDownIcon';
import { DefaultParticleProps, ParticleColor } from '../types';

const SelectContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  min-width: 200px;
  width: 100%;
`;

const SelectControl = styled.div<{ color?: ParticleColor }>`
  align-items: center;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 38px;
  position: relative;
  transition: all 100ms ease 0s;
  background-color: rgb(255, 255, 255);
  border-color: rgb(204, 204, 204);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  outline: 0px !important;
  &:focus,
  &.menu-visible {
    border-color: ${({ theme, color }) =>
      color ? theme.colors[color] : theme.colors.primary};
    // box-shadow: rgb(38, 132, 255) 0px 0px 0px 1px;
  }
`;

const SelectValueContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  padding: 2px 8px;
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
  padding: 6px;
  box-sizing: border-box;

  display: inline-block;
  fill: currentcolor;
  line-height: 1;
  stroke: currentcolor;
  stroke-width: 0;

  svg {
    &:hover {
      fill: rgb(102, 102, 102);
      stroke: rgb(102, 102, 102);
    }
  }
`;

const SelectInput = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;

const SelectMenu = styled.div`
  position: absolute;
  transform: translateY(100px);
  width: 100%;

  border-radius: 5px;
  overflow: auto;
  max-height: 150px;
  background-color: #fff;

  box-shadow:
    0 0 0 1px hsla(0, 0%, 0%, 0.1),
    0 4px 11px hsla(0, 0%, 0%, 0.1);

  .select-menu-item {
    padding: 5px;
    cursor: pointer;
    &:hover {
      background-color: #9fc3f870;
    }

    &.selected {
      background-color: #0d6efd;
      color: #fff;
    }
  }
`;

const SelectInputTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const SelectInputTagItem = styled.div`
  background-color: rgb(230, 230, 230);
  padding: 2px 4px;
  border-radius: 2px;
  display: flex;
  align-items: center;

  svg {
    fill: rgb(102, 102, 102);
    stroke: rgb(102, 102, 102);
  }
`;

const TagLabel = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  color: rgb(51, 51, 51);
  font-size: 85%;
  box-sizing: border-box;
  height: 18px;
  display: flex;
  align-items: center;
  padding: 2px 2px;

  &.single {
    height: 24px;
    padding: 4px 2px;
    font-size: 100%;
  }
`;

const SelectCloseContainer = styled.span`
  display: flex;
  align-items: center;

  &.multiple {
    height: 14px;
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
`;

type SelectKeyValue = { [key: string]: string };

type SelectProps = DefaultParticleProps & {
  placeholder?: string;
  options: SelectKeyValue[];
  valueKey: string;
  labelKey: string;
  onChange?: Function;
  value?: SelectKeyValue;
  multiple?: boolean;
  searchable?: boolean;
  label?: string;
};

const Select: React.FC<SelectProps> = (props) => {
  const {
    placeholder,
    options,
    valueKey,
    labelKey,
    multiple,
    searchable,
    onChange,
    value,
    label,
  } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState<SelectKeyValue[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const controlId = useId();

  useEffect(() => {
    const handler = (event: any) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener('click', handler);

    return () => {
      window.removeEventListener('click', handler);
    };
  }, []);

  useEffect(() => {
    if (value) {
      setSelectedValue([value]);
    }
  }, [value]);

  useEffect(() => {
    setSearchValue('');
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  const handleInputClick = (event: React.MouseEvent<HTMLElement>) => {
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (!selectedValue || selectedValue.length === 0) {
      return <TagLabel className='single'>{placeholder}</TagLabel>;
    }

    if (multiple) {
      return (
        <SelectInputTags>
          {selectedValue.map((option) => (
            <SelectInputTagItem key={option[valueKey]}>
              <TagLabel>{option[labelKey]}</TagLabel>
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

    return <TagLabel className='single'>{selectedValue[0][labelKey]}</TagLabel>;
  };

  const onChangeHandler = (newValue: SelectKeyValue[]) => {
    onChange &&
      onChange(
        multiple ? newValue : newValue.length === 1 ? newValue[0] : null,
      );
  };

  const onItemSelect = (option: SelectKeyValue) => {
    let newValue;
    if (multiple) {
      if (
        selectedValue.findIndex((o) => o[valueKey] === option[valueKey]) >= 0
      ) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectedValue, option];
      }
    } else {
      newValue = [option];
    }

    setSelectedValue(newValue);
    onChangeHandler(newValue);
  };

  const isSelected = (option: SelectKeyValue) => {
    if (multiple) {
      return (
        selectedValue.filter((o) => o[valueKey] === option[valueKey]).length > 0
      );
    }

    if (selectedValue.length === 0) {
      return false;
    }

    return selectedValue[0][valueKey] === option[valueKey];
  };

  const removeOption = (option: SelectKeyValue) => {
    return selectedValue.filter((o) => o[valueKey] !== option[valueKey]);
  };

  const onTagRemove = (
    event: React.MouseEvent<HTMLElement>,
    option: SelectKeyValue,
  ) => {
    event.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
    onChangeHandler(newValue);
  };

  const onClearSelected = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setSelectedValue([]);
    onChangeHandler([]);
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const getOptions = () => {
    if (!searchValue) {
      return options;
    }
    return options.filter(
      (option) =>
        option[labelKey].toLowerCase().indexOf(searchValue.toLowerCase()) >= 0,
    );
  };

  return (
    <SelectContainer>
      {label && <label>{label}</label>}
      <SelectControl
        tabIndex={-1}
        ref={inputRef}
        onClick={handleInputClick}
        className={`${showMenu && 'menu-visible'}`}
        role='button'
      >
        <SelectValueContainer>
          <SelectInput>
            <SelectInputContent>{getDisplay()}</SelectInputContent>
          </SelectInput>
        </SelectValueContainer>
        {showMenu && (
          <SelectMenu>
            {searchable && (
              <SearchBox>
                <input
                  onChange={onSearch}
                  value={searchValue}
                  ref={searchRef}
                />
              </SearchBox>
            )}
            {getOptions().map((option: SelectKeyValue) => (
              <div
                onClick={() => onItemSelect(option)}
                key={option[valueKey]}
                className={`select-menu-item ${
                  isSelected(option) && 'selected'
                }`}
              >
                {option[labelKey]}
              </div>
            ))}
          </SelectMenu>
        )}
        <SelectIndicators>
          <SelectIndicator>
            {!multiple && selectedValue.length > 0 && (
              <SelectCloseContainer
                onClick={onClearSelected}
                role='button'
                aria-hidden='true'
              >
                <CloseIcon />
              </SelectCloseContainer>
            )}
          </SelectIndicator>
          <IconSeparator />
          <SelectIndicator>
            <UpDownIcon />
          </SelectIndicator>
        </SelectIndicators>
      </SelectControl>
    </SelectContainer>
  );
};

export { Select };
