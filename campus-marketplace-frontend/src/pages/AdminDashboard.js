// AdminDashboard.js
import React, { useState } from 'react';
import { Box, Button, Typography, Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { motion } from 'framer-motion'; // Import framer-motion

function AdminDashboard() {
  const navigate = useNavigate();
  const [unviewedRequests, setUnviewedRequests] = useState(3);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'url(https://coolbackgrounds.io/images/backgrounds/white/white-trianglify-b79c7e1f.jpg)', // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Header />

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 3,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', color: '#333', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Admin Dashboard
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', gap: 6 }}>
          {/* Vendor Button */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 2, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', bgcolor: '#fff', p: 2 }}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="contained"
                sx={{
                  position: 'relative',
                  borderRadius: '50%',
                  width: 120,
                  height: 120,
                  bgcolor: '#ffffff', // Changed to white background
                  '&:hover': { bgcolor: '#f0f0f0' }, // Light gray on hover
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => navigate('/admin/vendors')}
              >
                <PersonIcon sx={{ fontSize: '80px', color: '#000' }} /> {/* Black icon */}
              </Button>
            </motion.div>
            <Typography variant="h6" sx={{ color: '#333', mt: 1 }}>Vendors</Typography>
          </Box>

          {/* New Requests Button */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 2, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', bgcolor: '#fff', p: 2 }}>
            <Badge
              badgeContent={unviewedRequests}
              color="error"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="contained"
                  sx={{
                    position: 'relative',
                    borderRadius: '50%',
                    width: 120,
                    height: 120,
                    bgcolor: '#ffffff', // Changed to white background
                    '&:hover': { bgcolor: '#f0f0f0' }, // Light gray on hover
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onClick={() => navigate('/vendors/requests')}
                >
                  <AssignmentIcon sx={{ fontSize: '80px', color: '#000' }} /> {/* Black icon */}
                </Button>
              </motion.div>
            </Badge>
            <Typography variant="h6" sx={{ color: '#333', mt: 1 }}>New Requests</Typography>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default AdminDashboard;
