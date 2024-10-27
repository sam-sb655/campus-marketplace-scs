import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#152238' }}> {/* Set the AppBar background color */}
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'white' }}>
          <span style={{ color: '#FFD700' }}>Campus</span> Marketplace {/* Change only Campus color */}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
