import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Snackbar } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

function AdminSignIn() {
  const [authID, setAuthID] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const navigate = useNavigate(); // Create a navigate instance

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/admin/signin', { authID });

      if (response.status === 200) {
        // Use navigate for redirecting
        navigate('/admin/dashboard'); // Replace with the actual path
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      setSnackbarMessage(error.response?.data?.message || 'An error occurred');
      setOpenSnackbar(true);
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        color: '#333333',
      }}
    >
      <Header />

      <Box
        component="section"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
          px: 2,
          textAlign: 'center',
          pt: 4,
          pb: 8,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 4,
            borderRadius: 4,
            backgroundColor: 'rgba(240, 240, 240, 0.8)',
            width: 300,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a1a1a', mb: 3 }}>
            FOR AUTHORISED PERSONNEL ONLY
          </Typography>

          <TextField
            label="Admin Authentication ID"
            variant="outlined"
            fullWidth
            value={authID}
            onChange={(e) => setAuthID(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Button
            variant="contained"
            sx={{ bgcolor: '#1976d2', '&:hover': { bgcolor: '#0d47a1' } }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </Paper>
      </Box>

      <Footer />

      {/* Snackbar for displaying error messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </Box>
  );
}

export default AdminSignIn;
