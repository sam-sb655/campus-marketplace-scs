import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Checkbox, FormControlLabel, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API calls

function VendorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      // Make API call to log in
      const response = await axios.post('http://localhost:5000/api/vendors/login', {
        email,
        password,
      });

      // Assuming response contains user details on successful login
      const { id, businessName } = response.data;

      // Store token and vendor info in local storage or context as needed
      localStorage.setItem('vendorId', id);
      localStorage.setItem('vendorBusinessName', businessName);

      // Redirect to the vendor dashboard or another page after successful login
      navigate('/vendor/dashboard');
    } catch (error) {
      console.error('Error during login:', error);
      alert(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        padding: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>Vendor Login</Typography>
      <Box component="form" onSubmit={handleLogin} sx={{ width: '100%', maxWidth: 400 }}>
        <TextField
          fullWidth
          label="Business Name"
          variant="outlined"
          margin="normal"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Registered Email ID"
          variant="outlined"
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="normal"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
          />
          <Link href="#" underline="hover">
            Forgot Password?
          </Link>
        </Box>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mb: 2, bgcolor: 'linear-gradient(90deg, #ff8a8a, #ff4f4f)' }}
          type="submit"
        >
          Login
        </Button>
      </Box>
      <Typography variant="body2" color="textSecondary">
          Don’t have an account?{' '}
          <Link to="/vendor-register" style={{ textDecoration: 'underline', color: '#0000FF' }}>
            Register
          </Link>
        </Typography>
    </Box>
  );
}

export default VendorLogin;
