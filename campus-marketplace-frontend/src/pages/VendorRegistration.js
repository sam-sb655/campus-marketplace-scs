// VendorRegistration.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, IconButton, InputAdornment, Paper, Snackbar } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function VendorRegistration() {
  const navigate = useNavigate(); // Initialize navigate
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [taxId, setTaxId] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [bio, setBio] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setSnackbarMessage("Passwords do not match.");
      setSnackbarOpen(true);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/vendors/register', {
        businessName,
        email,
        phoneNumber,
        password,
        taxId,
        licenseNumber,
        bio,
      });

      setSnackbarMessage(response.data.message);
      setSnackbarOpen(true);
      // Clear the fields after successful registration
      setBusinessName('');
      setEmail('');
      setPhoneNumber('');
      setPassword('');
      setConfirmPassword('');
      setTaxId('');
      setLicenseNumber('');
      setBio('');
      
      // Redirect to the success page after a short delay to display the message
      setTimeout(() => {
        navigate('/registration-success'); // Navigate to the success page
      }, 1000); // Delay for 1 second
    } catch (error) {
      console.error('Error during registration:', error);
      setSnackbarMessage(error.response?.data?.message || 'An error occurred during registration.');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        color: '#333333',
        p: 2,
      }}
    >
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4, width: '100%', maxWidth: 500 }}>
        <Typography variant="h4" gutterBottom>
          Vendor Registration
        </Typography>

        <TextField
          label="Business Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          required
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />

        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        <TextField
          label="Enter Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Confirm Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type={showConfirmPassword ? 'text' : 'password'}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Tax Identification Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={taxId}
          onChange={(e) => setTaxId(e.target.value)}
          required
        />

        <TextField
          label="License and Registration Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={licenseNumber}
          onChange={(e) => setLicenseNumber(e.target.value)}
          required
        />

        <TextField
          label="Bio"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={3}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />

        <Button
          variant="contained"
          sx={{ mt: 3, bgcolor: '#1976d2', '&:hover': { bgcolor: '#0d47a1' } }}
          fullWidth
          onClick={handleRegister}
        >
          Register
        </Button>
      </Paper>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </Box>
  );
}

export default VendorRegistration;
