import styled from 'styled-components';

export const Container = styled.p`
  font-size: 12px;
  color: #ff377f;

  & + label {
    margin-top: 16px;
  }

  & + button {
    margin-top: 8px;
    bottom: 0px;
  }
`

export default { Container }
