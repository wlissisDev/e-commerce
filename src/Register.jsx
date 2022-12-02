import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255, 0.5),rgba(255,255,255, 0.5)), lightpink;

    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;

`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:20px 10px 0px;
    padding: 10px;
`
const Agreemente = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    font-size: 16px;
    margin: auto;
`

export const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CRIAR UMA CONTA</Title>
                <Form>
                    <Input placeholder='nome' />
                    <Input placeholder='sobrenome' />
                    <Input placeholder='usuário' />
                    <Input placeholder='email' />
                    <Input placeholder='senha' />
                    <Input placeholder='confirme senha' />
                    <Agreemente>Ao cria sua conta você concorda com a nossa <b>POLITICA DE PRIVACIDADE</b></Agreemente>
                    <Button>CRIAR</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}
