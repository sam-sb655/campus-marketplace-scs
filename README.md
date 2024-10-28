# SCS-Campus-Marketplace
 Sleepless Coding Saga Campus Marketplace Samvidhi Samrakshakas

# Campus Marketplace

An e-commerce platform built specifically to address the unique needs of campus students, faculty, and aspiring entrepreneurs. Using MongoDB, Node.js, and React, this marketplace allows users to buy, sell, and manage products seamlessly.

## Table of Contents
- [Getting Started](#getting-started)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Features](#features)

## Getting Started
Follow these instructions to set up and run the Campus Marketplace project on your local system.

## Tech Stack
- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- MongoDB
- React.js

### Backend Setup

1. Clone this repository and open the terminal in the project's root directory.
2. Set up MongoDB:
   - Create a MongoDB database named **campus-marketplace**.
   - Inside the database, create the following collections:
     - vendors
     - users
     - products

3. In the root project directory, change to the campus-marketplace folder:
   cd campus-marketplace

4. Install backend dependencies:
   npm install bcrypt body-parser cors dotenv express jsonwebtoken mongoose react-router-dom


### Frontend Setup

1. In the root project directory, change to the campus-marketplace-frontend folder:
   
   cd campus-marketplace-frontend
   

2. Install frontend dependencies:
   npm install @emotion/react @emotion/styled @fortawesome/fontawesome-free @mui/icons-material @mui/material @testing-library/jest-dom @testing-library/react @testing-library/user-event axios cors framer-motion react react-dom react-router-dom react-scripts web-vitals

## Running the Application

1. Open the terminal in the campus-marketplace folder and start the backend server:
   
   node server.js
  

3. Open another terminal in the campus-marketplace-frontend folder and start the frontend:
   
   npm start
   

## Project Structure


campus-marketplace<br>
│   ├── server.js               # Entry point for the backend server<br> 
│   ├── models/                 # Mongoose models for MongoDB collections<br> 
│   └── routes/                 # Express routes<br> 
│<br>
└── campus-marketplace-frontend<br>
|    ├── src/                    # React app source files<br>
|    └── public/                 # Public assets<br>
