import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Products from '../Products'
import Product from '../Product'
import Cart from '../cart/Cart'

 const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='' element={<Products />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    </div>
  )
}
export default Routing
