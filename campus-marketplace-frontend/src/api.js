// src/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your backend URL

// Create an Axios instance
const API = axios.create({
  baseURL: API_URL,
});

// Add token to headers for all requests if logged in
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// User-related functions

// Function to register a new user
export const registerUser = async (userData) => {
  console.log("User data being sent:", userData); // Debugging log
  try {
    const response = await API.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error during user registration:', error);
    throw error; // Rethrow the error for handling in the calling component
  }
};

// Function to log in an existing user and store token
export const loginUser = async (credentials) => {
  try {
    const response = await API.post('/auth/login', credentials);
    const { token, user } = response.data;
    // Store token and user details in localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    return { token, user };
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

// Function to log in admin
export const adminSignIn = async (authID) => {
  try {
    const response = await API.post('/admin/signin', { authID });
    return response.data;
  } catch (error) {
    console.error('Error during admin sign-in:', error);
    throw error;
  }
};

// Product-related functions

// Function to get all products
export const fetchProducts = async () => {
  try {
    const response = await API.get('/products'); // Ensure the route matches your server setup
    return response.data; // Return the array of products
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Function to create a new product
export const addProduct = async (productData) => {
  try {
    const response = await API.post('/products', productData); // Ensure the route matches your server setup
    return response.data; // Return the newly created product
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

// Function to update an existing product
export const updateProduct = async (productData) => {
  try {
    const response = await API.put(`/products/${productData._id}`, productData); // Update the product by ID
    return response.data; // Return the updated product
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

// Vendor-related functions

// Function to fetch all vendors
export const fetchVendors = async () => {
  try {
    const response = await API.get('/vendors/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching vendors:', error);
    throw error;
  }
};

// Function to register a new vendor
export const registerVendor = async (vendorData) => {
  console.log("Vendor data being sent:", vendorData);
  try {
    const response = await API.post('/vendors/register', vendorData);
    return response.data;
  } catch (error) {
    console.error('Error registering vendor:', error);
    throw error;
  }
};

// Function to fetch a single vendor by ID
export const fetchVendorById = async (vendorId) => {
  try {
    const response = await API.get(`/vendors/${vendorId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching vendor with ID ${vendorId}:`, error);
    throw error;
  }
};

// Function to delete (reject) vendor
export const deleteVendor = async (vendorId) => {
  try {
    const response = await API.delete(`/vendors/${vendorId}`);
    return response.data;
  } catch (error) {
    console.error('Error during vendor deletion:', error.response ? error.response.data : error.message);
    throw error;
  }
};
