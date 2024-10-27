// src/services/products.js
import API from './api';

export const addProduct = (productData) => API.post('/products', productData);
export const getProducts = () => API.get('/products');
