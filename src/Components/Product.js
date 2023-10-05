import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { addToCart } from './Redux/productActions/ProductActions'
import { useDispatch } from 'react-redux'

const Product = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const dispatch = useDispatch()
    const getProductData = async () => {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(data)
    }

    useEffect(() => {
        getProductData()
    }, [])

    //array.length
    //for object how to check the data is available or not

    return (
        <div>
            <h2>Product Detail Page</h2>
            {Object.keys(product).length ? (
                <div className='row border'>
                    <div className='col-md-6 p-3 mt-2'>
                        <img src={product.image} className='img-fluid' alt={product.title} />
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h2>{product.title}</h2>
                        <div className='mt-2'>
                            <span className='bg-primary text-white'>Price: ${product.price}</span>
                        </div>
                        <div className='mt-2'>
                            <span className='bg-secondary text-white'>Category : {product.category}</span>
                        </div>
                        <div className='mt-2'>
                            <p>{product.description}</p>
                        </div>
                        <button className='mt-2 btn btn-primary'
                        onClick={()=>{dispatch(addToCart(product))}}
                        >AddToCart</button>
                    </div>

                </div>
            ) : <p>loading...</p>}
        </div>
    )
}

export default Product