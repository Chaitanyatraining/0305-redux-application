import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const [total, setTotal] = useState(0)
    // we have a hook to access the redux store state
    // useSelector
    const cartData = useSelector((state) => state.productsData.cartData)
    return (
        <>
            <h2>Cart Data</h2>
            <div className='products_total'>
                <p>Total Price:{total}</p>
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
                                <button className='btn btn-danger'>Remove</button>
                            </div>
                        </div>
                    ))

                ) : <p>Please Add Some Products</p>}
            </div>
        </>
    )
}

export default Cart