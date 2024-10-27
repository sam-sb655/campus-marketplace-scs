import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 1, // Reduced vertical padding for a thinner footer
        mt: 2, // Adjust margin-top if necessary
        bgcolor: 'rgba(245, 245, 245, 0.8)', // Semi-transparent background color
        color: 'text.secondary',
        textAlign: 'center',
        boxShadow: 'none', // Remove any shadow if present
      }}
    >
      <Typography variant="body2" sx={{ fontSize: '0.8rem' }}> {/* Reduced font size */}
        © {new Date().getFullYear()} Campus Marketplace. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
