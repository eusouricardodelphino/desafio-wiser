import styled, { css } from 'styled-components'

interface ContainerProps {
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  border: 1px solid #383e71;
  padding: 12px 10px;
  border-radius: 5px;
  display: flex;

  input {
    flex: 1;
    border: none;
    font-size: 12px;
    background: transparent !important;
    color: #383e71;

    &::placeholder {
      color: #989fdb;
    }

    &:focus {
      box-shadow: none;
      outline: 0;
    }
  }

  & + label {
    margin-top: 20px;

    @media(max-width: 578px) {
      margin-top: 16px;
    }
  }


  ${(props) =>
    props.isErrored &&
    css`
      border-color: #FF377F;
    `}
`
export default { Container }

