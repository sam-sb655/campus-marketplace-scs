// src/components/OnSale.js
import React, { useEffect, useState } from "react";
import { fetchProducts, addProduct, updateProduct } from "../api"; // Import the API functions

const OnSale = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    quantity: "",
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editableData, setEditableData] = useState(null);
  const [message, setMessage] = useState(""); // State for feedback messages

  // Fetch existing products when the component mounts
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productList = await fetchProducts();
        setProducts(productList);
      } catch (error) {
        console.error("Error loading products:", error);
        setMessage("Error loading products."); // Show error message
      }
    };

    loadProducts();
  }, []);

  // Handle form input change for adding new products
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission to add new product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = await addProduct(formData);
      setProducts([...products, newProduct]);
      setMessage("Product added successfully!"); // Success message
      setFormData({ name: "", price: "", description: "", image: "", quantity: "" });
    } catch (error) {
      console.error("Error uploading product:", error);
      setMessage("Error uploading product."); // Error message
    }
  };

  // Handle edit button click to show popup with editable fields
  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setEditableData({ ...product });
    setMessage(""); // Clear previous messages
  };

  // Handle popup field change
  const handlePopupChange = (e) => {
    setEditableData({
      ...editableData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle save changes to update product in the database
  const handleSaveChanges = async () => {
    if (!editableData) return; // Ensure editableData is set

    try {
      const updatedProduct = await updateProduct(editableData); // Ensure you send the updated data correctly
      setProducts(products.map((prod) => (prod._id === updatedProduct._id ? updatedProduct : prod)));
      setMessage("Product updated successfully!"); // Success message
      handleClosePopup(); // Close popup after saving changes
    } catch (error) {
      console.error("Error updating product:", error);
      setMessage("Error updating product."); // Error message
    }
  };

  // Handle close popup
  const handleClosePopup = () => {
    setSelectedProduct(null);
    setEditableData(null);
    setMessage(""); // Clear messages
  };

  return (
    <div>
      <h1>On Sale</h1>
      {message && <div style={{ color: "green", marginBottom: "16px" }}>{message}</div>} {/* Feedback message */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
        <button type="submit">Upload Product</button>
      </form>

      <h2>Uploaded Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              width: "200px",
              position: "relative",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "4px" }} />
            <p>Quantity: {product.quantity}</p>
            <button
              style={{
                position: "absolute",
                bottom: "8px",
                right: "8px",
                padding: "4px 8px",
                fontSize: "12px",
                cursor: "pointer",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
              }}
              onClick={() => handleEditClick(product)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* Editable Modal Popup */}
      {selectedProduct && editableData && ( // Ensure editableData is available
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "24px",
              borderRadius: "8px",
              maxWidth: "400px",
              width: "100%",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h2>Product Information</h2>
            <input
              type="text"
              name="name"
              value={editableData.name}
              onChange={handlePopupChange}
              style={{ width: "100%", marginBottom: "8px", padding: "8px" }}
            />
            <input
              type="number"
              name="price"
              value={editableData.price}
              onChange={handlePopupChange}
              style={{ width: "100%", marginBottom: "8px", padding: "8px" }}
            />
            <input
              type="text"
              name="description"
              value={editableData.description}
              onChange={handlePopupChange}
              style={{ width: "100%", marginBottom: "8px", padding: "8px" }}
            />
            <input
              type="text"
              name="image"
              value={editableData.image}
              onChange={handlePopupChange}
              style={{ width: "100%", marginBottom: "8px", padding: "8px" }}
            />
            <input
              type="number"
              name="quantity"
              value={editableData.quantity}
              onChange={handlePopupChange}
              style={{ width: "100%", marginBottom: "8px", padding: "8px" }}
            />
            <button
              style={{
                marginTop: "16px",
                padding: "8px 16px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginRight: "8px",
              }}
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
            <button
              style={{
                marginTop: "16px",
                padding: "8px 16px",
                backgroundColor: "#6c757d",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={handleClosePopup}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnSale;
