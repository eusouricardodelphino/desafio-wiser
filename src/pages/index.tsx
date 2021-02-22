import React, { useRef, useCallback, useState } from 'react'
import Head from 'next/head'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import { useAuth } from '../hooks/auth'

import getValidationErrors from '../utils/getValidationErrors'

import Input from '../components/Input'
import Button from '../components/Button'

import { Container, Content, Background } from './styles'
import { sign } from 'crypto'
import Message from '../components/Message'

interface UserData {
  email: string;
  password: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const [formError, setFormError] = useState("")

  const { signIn } = useAuth()

  const handleSubmit = useCallback(
    async (data: UserData) =>{
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('O e-mail é obrigatório.')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('A senha é obrigatória')
        })

        await schema.validate(data, {
          abortEarly: false
        })

        const response = await signIn({
          email: data.email,
          password: data.password
        })

        if (response === undefined) {
          setFormError("Credenciais inválidas, por favor verifique seus dados.")
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)
        }
      }

    }, [signIn]
  )

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
          <Form ref={formRef} onSubmit={handleSubmit}>
            <label>E-mail</label>
            <Input placeholder="user.name@mail.com" name='email' />
            <label>Senha</label>
            <Input type="password" placeholder='⦁⦁⦁⦁⦁⦁' name='password' />
            {formError && <Message title={formError} />}
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
