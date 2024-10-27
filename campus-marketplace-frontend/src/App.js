import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Assuming you have a Home component
import CustomerSignUp from "./pages/CustomerSignUp"; // Assuming you have a CustomerSignUp component
import CustomerRegister from "./pages/CustomerRegister"; // Assuming you have a CustomerRegister component
import Register from "./services/Register"; // The Register component we discussed
import AddProduct from "./services/AddProduct"; // The AddProduct component we discussed
import { addProduct } from "./api";
import CustomerAccount from "./components/CustomerAccount";
import VendorLogin from "./pages/VendorLogin";
import VendorRegistration from "./pages/VendorRegistration";
import AdminSignin from "./pages/AdminSignin";
import AdminDashboard from "./pages/AdminDashboard";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import NewRequestsPage from './pages/NewRequestsPage';
import VendorDashboard from "./pages/VendorDashboard"; // Import VendorDashboard component
import OAS from "./pages/OAS";
import PastTrans from './pages/PastTrans';
import OnSale from "./pages/OnSale";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer-signup" element={<CustomerSignUp />} />
          <Route path="/customer-register" element={<CustomerRegister />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/customer-account" element={<CustomerAccount />} />
          <Route path="/vendor-login" element={<VendorLogin />} />
          <Route path="/vendor-register" element={<VendorRegistration />} />
          <Route path="/admin-signin" element={<AdminSignin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/registration-success" element={<RegistrationSuccess />} />
          <Route path="/vendors/requests" element={<NewRequestsPage />} />
          <Route path="/vendor/dashboard" element={<VendorDashboard />} />
          <Route path="/PastTrans" element={<PastTrans />} />
          <Route path="/OnSale" element={<OnSale />} />
          <Route path="/OAS" element={<OAS />} />
          
           {/* New route for Vendor Dashboard */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
