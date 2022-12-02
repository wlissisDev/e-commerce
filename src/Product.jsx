import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { Announcement } from './components/Announcement'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { NewsLetter } from './components/NewsLetter'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
     
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 1px;

`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;

`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`


const Amount = styled.span`
    width: 30px;height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`


const Button = styled.button`
    padding: 15px;
    color: white;
    border: none;
    background-color: teal;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 2px;

    transition: all 0.4s ease;
    &:hover{
        background-color: #0ba7a7;
    }
`


export const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://decathlonpro.vteximg.com.br/arquivos/ids/2874041-1000-1000/jaqueta-de-penas-masculina-de-trekking-trek500-preta-p1.jpg?v=637655765589430000" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Jaqueta Térmica</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quaerat maxime eligendi quod sed vel, exercitationem a velit at
                        voluptates doloribus hic sapiente quidem nihil officia cupiditate
                        ipsum incidunt magnam nobis.
                    </Desc>
                    <Price>R$ 80</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Cores</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Tamanho</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>P</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>G</FilterSizeOption>
                                <FilterSizeOption>GG</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <Remove/>
                                <Amount>1</Amount>
                                <Add/>
                            </AmountContainer>
                            <Button>ADD TO CART</Button>
                        </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}
