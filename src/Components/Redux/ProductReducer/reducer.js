import { productReducer } from "./ProductReducer";
import {combineReducers } from 'redux'

export const reducer = combineReducers({
    productsData: productReducer,
})