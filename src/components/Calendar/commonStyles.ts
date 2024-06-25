import { css } from '@emotion/react';
const styles = {
  dayStyle: {
    width: 40,
    height: 40,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: '50%',
    display: 'flex',
    fontSize: 14,
    // backgroundColor: '#fff',
    border: 'none',
  },
};

export const dayStyles = css`
  width: 32px;
  height: 32px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 13px;
  border: none;
`;

export default styles;
