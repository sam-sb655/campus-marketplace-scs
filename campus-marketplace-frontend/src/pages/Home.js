import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Avatar, Typography, Button, Paper } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShowChartIcon from '@mui/icons-material/ShowChart'; // Graph Icon for Vendor
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; // Dollar Sign Icon for Customer
import DescriptionIcon from '@mui/icons-material/Description'; // Document Icon for Admin
import { motion } from 'framer-motion'; // Importing framer-motion
import Header from '../components/Header';
import Footer from '../components/Footer';

const cardVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'url(https://coolbackgrounds.io/images/backgrounds/white/white-canyon-6c5d2a4c.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          borderRadius: 4,
        }}
      >
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold', 
            color: '#1a1a1a', 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Adding shadow effect to the heading
          }}
        >
          Welcome to Campus Marketplace
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#666666', 
            maxWidth: 600, 
            mb: 4 
          }}
        >
          Sign in as a Vendor, Customer, or Admin to explore and enjoy seamless buying and selling within our campus community.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 5,
            mt: 3,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {/* Vendor Sign-in Option */}
          <motion.div variants={cardVariants} initial="initial" animate="animate" exit="exit">
            <Paper
              elevation={5}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 3,
                borderRadius: 4,
                backgroundColor: 'rgba(240, 240, 240, 0.8)',
                width: 180,
                height: 240,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Avatar sx={{ width: 70, height: 70, bgcolor: '#0d1117', mb: 2 }}>
                <ShowChartIcon fontSize="large" style={{ color: '#ffffff' }} />
              </Avatar>
              <Typography variant="h6" sx={{ color: '#0d1117', mb: 2 }}>Vendor</Typography>
              <Button variant="contained" sx={{ bgcolor: '#1976d2', '&:hover': { bgcolor: '#0d47a1' } }} onClick={() => navigate('/vendor-login')}>
                Sign In
              </Button>
            </Paper>
          </motion.div>

          {/* Customer Sign-in Option */}
          <motion.div variants={cardVariants} initial="initial" animate="animate" exit="exit">
            <Paper
              elevation={5}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 3,
                borderRadius: 4,
                backgroundColor: 'rgba(240, 240, 240, 0.8)',
                width: 180,
                height: 240,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Avatar sx={{ width: 70, height: 70, bgcolor: '#0d1117', mb: 2 }}>
                <AttachMoneyIcon fontSize="large" style={{ color: '#ffffff' }} />
              </Avatar>
              <Typography variant="h6" sx={{ color: '#0d1117', mb: 2 }}>Customer</Typography>
              
              <Button
                variant="contained"
                sx={{ bgcolor: '#1976d2', '&:hover': { bgcolor: '#0d47a1' } }}
                onClick={() => navigate('/customer-signup')}
              >
                Sign In
              </Button>
            </Paper>
          </motion.div>

          {/* Admin Sign-in Option */}
          <motion.div variants={cardVariants} initial="initial" animate="animate" exit="exit">
            <Paper
              elevation={5}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 3,
                borderRadius: 4,
                backgroundColor: 'rgba(240, 240, 240, 0.8)',
                width: 180,
                height: 240,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Avatar sx={{ width: 70, height: 70, bgcolor: '#0d1117', mb: 2 }}>
                <DescriptionIcon fontSize="large" style={{ color: '#ffffff' }} />
              </Avatar>
              <Typography variant="h6" sx={{ color: '#0d1117', mb: 2 }}>Admin</Typography>
              <Button
                variant="contained"
                sx={{ bgcolor: '#1976d2', '&:hover': { bgcolor: '#0d47a1' } }}
                onClick={() => navigate('/admin-signin')}
              >
                Sign In
              </Button>
            </Paper>
          </motion.div>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default Home;
