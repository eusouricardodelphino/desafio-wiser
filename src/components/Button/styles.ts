import styled from 'styled-components'

export const Container = styled.button`
      margin-top: 24px;
      width: 100%;
      color: #fff;
      padding: 15px;
      border: none;
      background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
      box-shadow: 0px 10px 25px #CF99DB;
      border-radius: 8px;
      font-size: 16px;

      @media(max-width: 578px) {
        position: absolute;
        left: 50%;
        transform:translate(-50%, 0);
        width: 168px;
        height: 48px;
        box-shadow: none;
      }
`

export default { Container }
