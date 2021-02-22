import React from 'react'
import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media(max-width: 578px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`
export const Background = styled.div`
  flex: 1;
  background: url("/background.jpg") no-repeat;
  background-size: cover;
  z-index: -1;

  div {
    height: 100%;
    background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
    transform: rotate(-180deg);

    @media(max-width: 578px) {
      height: 100%;
      flex: none;
      background: linear-gradient(180deg, #130525 0%,  #130525 40%, rgba(105, 57, 153, 0) 100%);
    }
  }

  @media(max-width: 1024px) {
    background-position-x: -400px
  }

  @media(max-width: 768px) {
    background-position-x: -350px
  }

  @media(max-width: 578px) {
    background-size: 100%;
    background-position-x: -100%;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  background: #e5e5e5;
  padding: 100px;
  font-family: 'Montserrat', sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 768px) {
    max-width: 456px;
  }

  @media(max-width: 578px) {
    max-width: 311px;
    height: 357px;
    padding: 0 20px;
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    border-radius: 8px;
    background: #faf5ff;
  }

  header {
    max-width: 240px;

    @media(max-width: 578px) {
      max-width: 100%;
      text-align: center;
    }

    h1 {
      font-size: 40px;
      color: #383e71;

      @media(max-width: 578px) {
        font-size: 24px;
        width: 150px;
        margin: 0 auto;
      }

      & + h3 {
        margin-top: 16px;
        font-size: 16px;
        color: #989fdb;

        @media(max-width: 578px) {
          font-size: 12px;
        }
      }
    }
  }

  form {
    margin-top: 26px;
    width: 256px;

    @media(max-width: 578px) {
      margin-top: 20px;
    }

    label {
      font-size: 0.8em;
      text-transform: uppercase;
      color: #383e71;
      display: block;

      & + div {
        margin-top: 16px;
      }
    }


    button {
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
    }
  }

  footer {
    margin-top: 32px;
    width: 256px;
    text-align: center;
    font-size: 14px;
    color: #989fdb;
    line-height: 20px;

    @media(max-width: 578px) {
      position: fixed;
      bottom: -100px;
      color: #fff;
    }

    p {
      a {
        text-decoration: underline;
        color:#9D25B0;

        @media(max-width: 578px) {
          color: #fff;
        }
      }
    }
  }
`
const styles: React.FC = () => <></>

export default styles
