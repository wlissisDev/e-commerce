import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Wrapper =styled.div``
const Title =styled.h1``
const Form =styled.form``
const Input =styled.input``

export const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CRIAR UMA CONTA</Title>
            <Form>
                <Input placeholder='nome'/>
                <Input placeholder='sobrenome'/>
                <Input placeholder='usuário'/>
                <Input placeholder='email'/>
                <Input placeholder='senha'/>
                <Input placeholder='confirme senha'/>

            </Form>
        </Wrapper>
    </Container>
  )
}
