import React from 'react'
import styled from 'styled-components'
import { Navbar } from './components/Navbar'
import { Announcement } from './components/Announcement'
import { Products } from './components/Products'
import { NewsLetter } from './components/NewsLetter'
import { Footer } from './components/Footer'

import {mobile} from './responsive'

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({width:"0px 20px", display:"flex", flexDirection:"column"})}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight:"0px"})}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin:"10px 0px"})}
`
const Option = styled.option`
   
`


export const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Vestidos</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Produtos Filtrados:</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>Branco</Option>
                        <Option >Preto</Option>
                        <Option >Vermelho</Option>
                        <Option >Azul</Option>
                        <Option>Verde</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Tamanho</Option>
                        <Option>P</Option>
                        <Option >M</Option>
                        <Option >G</Option>
                        <Option >GG</Option>
                    </Select>
                </Filter>

                <Filter>
                    <FilterText>Classificar Produtos:</FilterText>
                    <Select>
                        <Option disabled selected>Pre??o</Option>
                        <Option>Pre??o (cres)</Option>
                        <Option >Pre??o (decr)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <NewsLetter />
            <Footer />
        </Container>
    )
}
