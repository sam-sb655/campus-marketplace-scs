import React, { useState } from 'react';
import { addProduct } from '../api';

const AddProduct = () => {
    const [productData, setProductData] = useState({
        name: '',
        price: '',
        description: '',
        seller: '',
        quantity: '', // Added quantity
        image: null, // Added image file
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        // Check if the input type is file
        if (type === 'file') {
            setProductData({
                ...productData,
                [name]: e.target.files[0] // Store the uploaded file
            });
        } else {
            setProductData({
                ...productData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a FormData object to handle file uploads
        const formData = new FormData();
        for (const key in productData) {
            formData.append(key, productData[key]);
        }

        try {
            const data = await addProduct(formData);
            console.log('Product added successfully:', data);
        } catch (error) {
            console.error('Add product error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={productData.name}
                onChange={handleChange}
                placeholder="Product Name"
                required // Added required validation
            />
            <input
                type="number"
                name="price"
                value={productData.price}
                onChange={handleChange}
                placeholder="Price"
                required // Added required validation
            />
            <textarea
                name="description"
                value={productData.description}
                onChange={handleChange}
                placeholder="Description"
                required // Added required validation
            />
            <input
                type="text"
                name="seller"
                value={productData.seller}
                onChange={handleChange}
                placeholder="Seller Name"
                required // Added required validation
            />
            <input
                type="number"
                name="quantity" // Added quantity input
                value={productData.quantity}
                onChange={handleChange}
                placeholder="Quantity"
                required // Added required validation
            />
            <input
                type="file" // Added file input for product image
                name="image"
                onChange={handleChange}
                required // Added required validation
            />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
