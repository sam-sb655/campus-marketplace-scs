// RegistrationSuccess.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function RegistrationSuccess() {
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
      <Typography variant="h4" gutterBottom>
        Registration Successful
      </Typography>
      <Typography variant="h6">
        We'll get back to you shortly.
      </Typography>
    </Box>
  );
}

export default RegistrationSuccess;
