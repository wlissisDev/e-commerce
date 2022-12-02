import styled from 'styled-components'
import { Home } from './Home'
import { ProductList } from './ProductList'
import { Product } from './Product'
import { Register } from './Register'
import { Login } from './Login'
import { Cart } from './Cart'

import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<ProductList />} />
          <Route path='/product' element={<Product />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>

      {/* <Home/> */}
      {/* <ProductList/> */}
      {/* <Product/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart/> */}
    </div>
  )
}

export default App
