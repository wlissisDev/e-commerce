import React from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@mui/icons-material'

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items:center;
justify-content: center;

`;

const Image = styled.img`
    height: 75%;
`;
const Circle = styled.div`

`;
const Info = styled.div`

`;
const Icon = styled.div`

`;
export const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}
