import React, { InputHTMLAttributes , useRef, useEffect } from 'react'
import { MdClear } from 'react-icons/md'
import { useField } from '@unform/core'

import { Container } from './styles'
import Message from '../Message'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <>
      <Container isErrored={!!error}>
        <input
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />

        { error && <MdClear size={16} color='#FF377F'/> }
      </Container>
      { error && <Message title={error} />}
    </>
  )
}

export default Input
