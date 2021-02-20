import React from 'react'
import Head from 'next/head'

import { Container, Content, Background } from './styles'


const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Desafio Wiser</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet"></link>
      </Head>
      <Container>
        <Background>
          <div></div>
        </Background>
        <Content>
          <header>
            <h1>Olá, seja bem-vindo!</h1>
            <h3>Para acessar a plataforma, faça seu login.</h3>
          </header>
          <form>
            <label>E-mail</label>
            <div>
              <input type="text" placeholder="user.name@mail.com" />
            </div>
            <label>Senha</label>
            <div>
              <input type="password" placeholder="⦁⦁⦁⦁⦁⦁" />
            </div>
            <button>Entrar</button>
          </form>
          <footer>
            <p>Esqueceu sua senha?</p>
            <p>Clique <a>aqui</a></p>
          </footer>
        </Content>

      </Container>
    </>
  )
}

export default Home;
