import React, { useRef, useCallback } from 'react'
import Head from 'next/head'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import Input from '../components/Input'
import Button from '../components/Button'

import { Container, Content, Background } from './styles'


const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
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
          <Form ref={formRef} onSubmit={()=> {}}>
            <label>E-mail</label>
            <Input placeholder="user.name@mail.com" name='mail' />
            <label>Senha</label>
            <Input type="password" placeholder='⦁⦁⦁⦁⦁⦁' name='password' />
            <Button>Entrar</Button>
          </Form>
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
