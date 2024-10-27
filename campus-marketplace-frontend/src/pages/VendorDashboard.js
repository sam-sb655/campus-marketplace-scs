// src/pages/VendorDashboard.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { motion } from "framer-motion"; // Import motion from framer-motion
import "@fortawesome/fontawesome-free/css/all.min.css"; // Correct import for Font Awesome
import Header from "../components/Header"; // Import Header
import Footer from "../components/Footer"; // Import Footer

const VendorDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Define inline styles
  const styles = {
    vendorDashboard: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh", // Full height of the viewport
      justifyContent: "space-between", // Space between header and footer
      alignItems: "center", // Center content horizontally
      padding: "20px", // Add some padding
      position: "relative", // Position relative to contain the absolute image
      overflow: "hidden", // Hide overflow from the absolute image
    },
    backgroundImage: {
      position: "absolute", // Position it absolutely to cover the background
      top: 0, // Align to the top
      left: 0, // Align to the left
      width: "100%", // Full width
      height: "100%", // Full height
      objectFit: "cover", // Cover the area while maintaining aspect ratio
      zIndex: -1, // Place behind other elements
    },
    header: {
      width: "100%", // Full width for header
      textAlign: "center", // Center header text
      margin: "0", // Reset margin
    },
    dashboardButtons: {
      display: "flex",
      justifyContent: "center", // Center buttons horizontally
      alignItems: "center", // Center buttons vertically
      gap: "60px", // Increase gap for more spacing between buttons
      flexGrow: 1, // Allow buttons to take available space
    },
    buttonContainer: {
      textAlign: "center", // Center text under the buttons
    },
    button: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "none", // No background for buttons
      border: "none", // Remove border
      cursor: "pointer", // Change cursor to pointer
      outline: "none", // Remove outline
      padding: "0", // No padding
    },
    circle: {
      display: "flex",
      justifyContent: "center", // Center icon inside the circle
      alignItems: "center", // Center icon inside the circle
      width: "120px", // Set a fixed width
      height: "120px", // Set a fixed height
      borderRadius: "50%", // Make it circular
      backgroundColor: "#f0f0f0", // Background color for the circles
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
      marginBottom: "10px", // Space below the circle
    },
    icon: {
      fontSize: "60px", // Increase icon size
    },
    footer: {
      width: "100%", // Full width for footer
      backgroundColor: "#333", // Example background color
      color: "white",
      textAlign: "center",
      padding: "1rem",
    },
    heading: {
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add shadow to the heading
      marginBottom: "20px", // Space below the heading
    },
  };

  return (
    <div style={styles.vendorDashboard}>
      <Header style={styles.header} />
      {/* Background image */}
      <img 
        src="https://img.freepik.com/free-vector/paper-style-white-monochrome-background_23-2149001605.jpg?t=st=1730046429~exp=1730050029~hmac=c4047c5bff82141b3c662ee3f8c2fd01146e73ad61960cffe24682ff84be48ac&w=740" 
        alt="Vendor Dashboard Banner" 
        style={styles.backgroundImage} // Apply background styles
      />
      {/* Add motion effects to the heading */}
      <motion.h1 
        style={styles.heading} 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
      >
        Vendor Dashboard
      </motion.h1>
      <div style={styles.dashboardButtons}>
        {["/PastTrans", "/OnSale", "/OAS"].map((path, index) => (
          <motion.div 
            key={index} 
            style={styles.buttonContainer} 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.3, delay: index * 0.1 }} // Delay for staggered effect
          >
            <button
              style={styles.button}
              onClick={() => navigate(path)} // Navigate based on path
            >
              <div style={{ ...styles.circle, backgroundColor: index === 0 ? "#e1f5fe" : index === 1 ? "#ffe0b2" : "#ffccbc" }}>
                <i className={`fas ${index === 0 ? "fa-file-alt" : index === 1 ? "fa-dollar-sign" : "fa-question-circle"}`} style={styles.icon}></i> {/* Icon based on index */}
              </div>
              <p><strong>{index === 0 ? "Past Transactions" : index === 1 ? "On Sale" : "Out of Stock"}</strong></p>
            </button>
          </motion.div>
        ))}
      </div>
      <motion.div 
        style={styles.footer} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }} 
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default VendorDashboard;
    