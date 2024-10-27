import React, { useState } from 'react';
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';


function CustomerAccount() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');


  // Open dropdown menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  // Close dropdown menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  // Logout functionality
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/customer-signup');
    handleMenuClose();
  };


  return (
    <>
      {/* Customer Header */}
      <AppBar position="static" sx={{ backgroundColor: '#152238' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFD700', mr: 0.5 }}>
              Campus
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'inherit' }}>
              Marketplace
            </Typography>
          </Box>


          <Button color="inherit" sx={{ fontSize: '1.1rem', mx: 1 }}>Orders</Button>


          <IconButton color="inherit" aria-label="cart" sx={{ mx: 1 }}>
            <ShoppingCartIcon sx={{ fontSize: '1.8rem' }} />
          </IconButton>


          <IconButton color="inherit" aria-label="user" sx={{ mx: 1 }} onClick={handleMenuOpen}>
            <PersonIcon sx={{ fontSize: '1.8rem' }} />
          </IconButton>


          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: '#152238',
                color: 'white',
                mt: 1,
                border: '2px solid #FFD700',
                borderRadius: '8px',
              },
            }}
          >
            <MenuItem onClick={handleLogout} sx={{ color: 'white' }}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>


      {/* Main Content with Background Image */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: 'calc(100vh - 64px)',
          bgcolor: '#f9f9f9',
          mt: 0, // Set margin-top to 0 to remove the gap
          px: 2,
          pt: 8,
          backgroundImage: 'url(https://img.freepik.com/free-vector/realistic-white-golden-geometric-background_79603-2032.jpg?t=st=1730037740~exp=1730041340~hmac=35cd3082e500a738fb32ff64085c9e351e35db56edf4f2f813198fd5fb12c59b&w=996)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Welcome Message with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              fontWeight: 'bold',
              fontSize: '2.2rem',
              color: '#152238',
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)',
            }}
          >
            Welcome to our Campus Marketplace
          </Typography>
        </motion.div>


        {/* Search Box with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TextField
            variant="outlined"
            placeholder="Let's start exploring"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              width: '100%',
              maxWidth: 500,
              mb: 4,
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              },
              '& input::placeholder': {
                color: 'gray',
                opacity: 1,
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: 'gray' }} />
                </InputAdornment>
              ),
            }}
          />
        </motion.div>
      </Box>
    </>
  );
}


export default CustomerAccount;


