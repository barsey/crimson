import styled from '@emotion/styled';
import { ChangeEvent, forwardRef, useRef } from 'react';

import {
  faCloudUpload,
  faPaperclip,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../Icons';
import { HelperText } from '../HelperText';
import { Box } from '../Box';
import clsx from 'clsx';
const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const Container = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;

  input[type='file'] {
    display: none;
  }

  .helper-text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &.ready {
    padding: 16px;
    border: ${({ theme }) => `1px dashed ${theme.colors.grey[500]}`};
    background: ${({ theme }) => theme.colors.grey[50]};

    &:hover,
    &.active {
      border: ${({ theme }) => `1px dashed ${theme.colors.primary[300]}`};
      background: ${({ theme }) => theme.colors.primary[100]};
    }

    .clickable {
      &[aria-disabled='false'] {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }

    &.error {
      border: ${({ theme }) => `1px dashed ${theme.colors.error[500]}`};
      background: ${({ theme }) => theme.colors.error[50]};
    }
  }

  &.uploaded {
    height: 36px;
    align-items: center;
    padding: 0 8px;
    justify-content: center;

    border: 1px solid rgba(149, 147, 146, 0.25);
    background: ${({ theme }) => theme.colors.neutral[0]};

    .clear-container {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      svg {
        cursor: pointer;
      }
    }

    &[aria-disabled='true'] {
      svg {
        cursor: not-allowed;
      }
      background: ${({ theme }) => theme.colors.grey[50]};
    }
  }
`;

const Footer = styled(Box)`
  color: ${({ theme }) => theme.colors.grey[700]};
  font-size: 12px;
`;

export type FileUploadProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  disabled?: boolean;
  errorText?: string;
  accept?: string;
  value: File | null;
  label?: string;
  footerLabel?: string;
  className?: string;
  isActive?: boolean;
  multiple?: boolean;
  id?: string;
};
export const FileUpload = forwardRef<HTMLDivElement, FileUploadProps>(
  (props, ref) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const {
      onChange,
      disabled = false,
      errorText,
      accept = '*',
      value,
      onClear,
      label,
      footerLabel,
      className,
      isActive = false,
      multiple = false,
      id = 'file-upload',
    } = props;

    const handleButtonClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    const handleClearSelection = () => {
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Clear the input's value
      }

      onClear();
    };

    const error = !!errorText;
    const controlId = `file-upload-${id}`;
    const hasSelectedFile = value !== null;
    const containerClasses = clsx(
      {
        ready: !hasSelectedFile,
        uploaded: hasSelectedFile,
        error,
        active: isActive,
      },
      className,
    );

    return (
      <RootContainer>
        <Container
          ref={ref}
          className={containerClasses}
          id={`${id}-container`}
          data-testid={`${id}-container`}
          aria-disabled={disabled}
        >
          <Box display='flex' alignItems='flex-start' gap={10} width='100%'>
            <input
              data-testid='file-input'
              ref={fileInputRef}
              accept={accept}
              id={controlId}
              type='file'
              onChange={onChange}
              multiple={multiple}
            />
            <Icon icon={hasSelectedFile ? faPaperclip : faCloudUpload} />
            <div className='helper-text'>
              {hasSelectedFile
                ? value.name
                : label ?? 'Upload your file here...'}
            </div>
            {hasSelectedFile ? (
              <div
                className='clear-container'
                onClick={() => !disabled && handleClearSelection()}
                data-testid='clear-button'
                id='clear-button'
                aria-disabled={disabled}
              >
                <Icon icon={faTrash} />
              </div>
            ) : (
              <div
                id='clickable'
                data-testid='clickable'
                className='clickable'
                aria-disabled={disabled}
                onClick={() => !disabled && handleButtonClick()}
              >
                browse your computer
              </div>
            )}
          </Box>
          {footerLabel && !hasSelectedFile && (
            <Footer id='footer' data-testid='footer'>
              {footerLabel}
            </Footer>
          )}
        </Container>
        <HelperText>{errorText}</HelperText>
      </RootContainer>
    );
  },
);

FileUpload.displayName = 'FileUpload';
