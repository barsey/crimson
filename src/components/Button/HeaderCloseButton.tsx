import styled from '@emotion/styled';

const HeaderCloseButton = styled.button`
  appearance: none;
  background-color: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  text-align: left;
  text-decoration: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey[50]};
  }

  &:disabled {
    cursor: not-allowed;
    &:hover {
      background-color: transparent;
    }
  }
`;
export { HeaderCloseButton };
