import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../Redux/productActions/ProductActions'

const Cart = () => {
    // we have a hook to access the redux store state
    // useSelector
    const dispatch = useDispatch()
    const cartData = useSelector((state) => state.productsData.cartData)
    const totalPrice = cartData.reduce((prevsValue, currentValue) => {
        return prevsValue + currentValue.price
    }, 0)
    return (
        <>
            <h2>Cart Data</h2>
            <div className='products_total'>
                <p>Total Price:{totalPrice}</p>
                {cartData && cartData.length > 0 ? (
                    cartData.map((product) => (
                        <div className='row border p-2 mt-2'>
                            <div className='col-md-4' >
                                <img src={product.image} style={{maxHeight:'200px'}} className='img-fluid' alt={product.title} />
                            </div>
                            <div className='col-md-6'>
                                <h2>Title:{product.title}</h2>
                                <p>{product.description}</p>
                            </div>
                            <div className='col-md-2'>
                                <h4>Price: ${product.price}</h4>
                                <button className='btn btn-danger'
                                onClick={()=> {
                                    dispatch(removeFromCart(product.id))
                                }}
                                >Remove</button>
                            </div>
                        </div>
                    ))

                ) : <p>Please Add Some Products</p>}
            </div>
        </>
    )
}

export default Cart