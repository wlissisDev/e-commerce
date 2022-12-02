import React from 'react'
import { Add, Remove } from '@mui/icons-material'
import { Announcement } from './components/Announcement'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import styled from 'styled-components'
import {mobile} from './responsive'
import {useNavigate} from 'react-router-dom'

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding:"10px"})}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${({ type }) => type === "filled" && "none"};
    background-color: ${({ type }) => type === "filled" ? "black" : "transparent"};
    color: ${({ type }) => type === "filled" && "white"};
`
const TopTexts = styled.div`
    ${mobile({display:"none"})}
`
const TopText = styled.span`
    text-decoration:underline;
    cursor: pointer;
    margin: 0px 10px;

`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`

const Info = styled.div`
    flex:3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
    `

const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`


const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #${({ color }) => color};
`

const ProductSize = styled.span``

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin:"5px 15px"})}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom:"20px"})}
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Sumary = styled.div`
    flex: 1;
    border: 0.4px solid lightgray;
    border-radius:10px ;
    padding: 20px;
    height: 50vh;
`

const SumaryTitle = styled.h1`
    font-weight: 200;

`
const SumaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type==="total" && "600"};
    font-size: ${props => props.type==="total" && "24px"};
`
const SumaryItemText = styled.span`
    
`
const SumaryItemPrice = styled.span`
    
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    letter-spacing: 2px;
    border: none;
    cursor: pointer;

    &:hover{
        background-color: #131313;
    }
`

export const Cart = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>SEU CARRINHO</Title>
                <Top>
                    <TopButton onClick={()=>navigate("/")}>CONTINUAR NA LOJA</TopButton>
                    <TopTexts>
                        <TopText>Carrinho (2)</TopText>
                        <TopText>Lista de desejos (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CONFERIR AGORA</TopButton>
                </Top>

                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src='https://imgnike-a.akamaihd.net/1300x1300/012796ID.jpg' />
                                <Details>
                                    <ProductName><b>Produto:</b> TENIS NIKE</ProductName>
                                    <ProductId><b>ID:</b>8844564</ProductId>
                                    <ProductColor color="333" />
                                    <ProductSize><b>Tamanho:</b> 39</ProductSize>
                                </Details>
                            </ProductDetails>

                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add style={{ cursor: "pointer", border: '1px solid gray', borderRadius: "4px" }} />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove style={{ cursor: "pointer", border: '1px solid gray', borderRadius: "4px" }} />
                                </ProductAmountContainer>
                                <ProductPrice>R$ 150</ProductPrice>
                            </PriceDetails>
                        </Product>

                        <Hr />

                        <Product>
                            <ProductDetails>
                                <Image src='https://static.netshoes.com.br/produtos/bone-new-era-940-sn-new-york-yankees/06/F83-4153-006/F83-4153-006_zoom1.jpg?ts=1662350998' />
                                <Details>
                                    <ProductName><b>Produto:</b> BONÉ NEW ERA</ProductName>
                                    <ProductId><b>ID:</b>1155765</ProductId>
                                    <ProductColor color="333" />
                                    <ProductSize><b>Tamanho:</b> M</ProductSize>
                                </Details>
                            </ProductDetails>

                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add style={{ cursor: "pointer", border: '1px solid gray', borderRadius: "4px" }} />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove style={{ cursor: "pointer", border: '1px solid gray', borderRadius: "4px" }} />
                                </ProductAmountContainer>
                                <ProductPrice>R$ 60</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Sumary>
                        <SumaryTitle>Resumo</SumaryTitle>
                        <SumaryItem>
                            <SumaryItemText>Subtotal</SumaryItemText>
                            <SumaryItemPrice>R$ 210.00</SumaryItemPrice>
                        </SumaryItem>
                        <SumaryItem>
                            <SumaryItemText>Frete</SumaryItemText>
                            <SumaryItemPrice>R$ 30.00</SumaryItemPrice>
                        </SumaryItem>
                        <SumaryItem>
                            <SumaryItemText>Desconto Frete</SumaryItemText>
                            <SumaryItemPrice>R$ -30.00</SumaryItemPrice>
                        </SumaryItem>
                        <SumaryItem type="total">
                            <SumaryItemText >Total</SumaryItemText>
                            <SumaryItemPrice>R$ 210.00</SumaryItemPrice>
                        </SumaryItem>
                       <Button>CONFIRMAR COMPRA</Button>
                    </Sumary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}
