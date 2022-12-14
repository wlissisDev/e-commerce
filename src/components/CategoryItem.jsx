import React from 'react'
import styled from 'styled-components';
import {mobile} from '../responsive'
import{useNavigate}from 'react-router-dom'
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;


const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
    ${mobile({height:"30vh"})}

`;
const Info = styled.div`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;
const Title = styled.h1`
    color:width;
    margin-bottom: 20px;

`;
const Button = styled.button`
    border:none;
    padding: 10px;
    cursor: pointer;
    background-color: white;
    color: gray;

`;

export const CategoryItem = ({ item }) => {

    const navigate = useNavigate()
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button onClick={()=>navigate("/list")}>VER AGORA</Button>
            </Info>
        </Container>
    )
}
