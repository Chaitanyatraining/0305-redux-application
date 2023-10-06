import { ACTION_TYPE } from "../Types/ActionTypes";

// setProducts
// fetchProducts

export const addToCart = (product) => {
    return {
        type: ACTION_TYPE.ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (id) => {
    return {
        type: ACTION_TYPE.REMOVE_FROM_CART,
        payload: id
    }
}

// synchronous action creators 
// Asynchronous action creators

export const fetchProducts = async() => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()

    return {type: ACTION_TYPE.FETCH_PRODUCTS, payload: data }
}