import React from 'react'
import styled from 'styled-components'
import {mobile} from './responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255, 0.5),rgba(255,255,255, 0.5)), lightpink;

    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
    ${mobile({width:"80%"})}

 

`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

`
const Input = styled.input`
    flex: 1;
    width: 70%;
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
    margin: 20px auto;
`

export const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>ENTRAR</Title>
                <Form>
                    <Input placeholder='usuário' />
                    <Input placeholder='senha' />
                   
                    <Button>CONFIRMAR</Button>
                    <Agreemente>Ainda não possue conta? <a href='/register'>CRIAR CONTA</a></Agreemente>
                </Form>
            </Wrapper>
        </Container>
    )
}
