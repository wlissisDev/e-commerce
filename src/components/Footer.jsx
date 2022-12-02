
import React from 'react'
import styled from 'styled-components';
import { Facebook, Twitter, Instagram, Room, Phone, MailOutline } from '@mui/icons-material'
import {mobile} from '../responsive'

const Container = styled.div`
    display:flex;
    ${mobile({flexDirection:"column"})}

    
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width:40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Rigth = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor:"#ffe9e9"})}

`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`

export const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>E-Commerce</Logo>
                <Desc>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quo quas sunt fugiat ipsam quos in hic quaerat eum et quam conse
                    ctetur beatae voluptate ab ipsa, aliquid iste provident debitis
                    voluptas?
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3b5999"><Facebook /></SocialIcon>
                    <SocialIcon color="e4405f"><Instagram /></SocialIcon>
                    <SocialIcon color="55acee"><Twitter /></SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Use os Links</Title>
                <List>
                    <ListItem>Cart</ListItem>
                    <ListItem>Masculino</ListItem>
                    <ListItem>Feminino</ListItem>
                    <ListItem>Acessórios</ListItem>
                    <ListItem>Minha conta</ListItem>
                    <ListItem>Lista de Compras</ListItem>
                    <ListItem>Termos</ListItem>
                </List>
            </Center>
            <Rigth>
                <Title>Contato</Title>
                <ContactItem >
                    <Phone style={{ marginRight: "10px" }} /> +55 00 00000
                </ContactItem>
                <ContactItem >
                    <Room style={{ marginRight: "10px" }} /> 422 AV. Jão Silva
                </ContactItem>
                <ContactItem >
                    <MailOutline style={{ marginRight: "10px" }} />  contato@email·com
                </ContactItem>

            </Rigth>
        </Container>



    )
}
