import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';


import {mobile} from '../responsive'

const Container = styled.div`
  height: 60px;
 ${mobile({height:"50px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({width:"50px"})}
`;


const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({fontSize:"12px"})}

`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 2,justifyContent:"center"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding:"10px 0px"})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize:"12px", marginLeft:"5px"})}
`;

export const Navbar = () => {
  
  const navigate = useNavigate()

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Pesquisar' />
            <SearchIcon style={{color:"gray", fontSize:16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            ECOMMERCE
          </Logo>
        </Center>

        <Right>
          <MenuItem onClick={()=>navigate("/register")}>REGISTRAR</MenuItem>
          <MenuItem onClick={()=>navigate("/login")}>ENTRAR</MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlinedIcon/>
            </Badge>
           
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}
