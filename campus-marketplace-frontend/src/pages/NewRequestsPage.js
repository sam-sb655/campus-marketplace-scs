import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, AppBar, Toolbar, Container, Paper, Button, Collapse, CircularProgress, Snackbar } from '@mui/material';
import { fetchVendors, deleteVendor } from '../api'; // Import fetchVendors and deleteVendor from api.js
import CheckIcon from '@mui/icons-material/Check'; // Import CheckIcon for the approved button
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon for the rejected button


function NewRequestsPage() {
  const [vendors, setVendors] = useState([]);
  const [openVendorIndex, setOpenVendorIndex] = useState(null); // Track the index of the vendor whose details are open
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Snackbar open state
  const [snackbarMessage, setSnackbarMessage] = useState(''); // Snackbar message state


  useEffect(() => {
    const loadVendors = async () => {
      try {
        setLoading(true);
        const vendorData = await fetchVendors();
        console.log("Fetched vendor data:", vendorData); // Log the vendor data
        setVendors(vendorData);
      } catch (error) {
        console.error("Error fetching vendors:", error);
        setError("Failed to load vendor data. Please try again later.");
        setSnackbarMessage("Failed to load vendor data. Please try again later.");
        setSnackbarOpen(true);
      } finally {
        setLoading(false);
      }
    };

    loadVendors();
  }, []);


  const handleVendorClick = (index) => {
    setOpenVendorIndex(openVendorIndex === index ? null : index); // Toggle the dropdown
  };


  const handleSnackbarClose = () => {
    setSnackbarOpen(false); // Close the snackbar
  };


  const handleApproval = (vendorId) => {
    // Implement the logic for approving the vendor
    console.log(`Vendor ${vendorId} approved`);
  };


  const handleRejection = async (vendorId) => {
    
    console.log(`Attempting to delete vendor with ID: ${vendorId}`); // Log the vendor ID
  try {
    await deleteVendor(vendorId); // Call the deleteVendor function
    setVendors(vendors.filter(vendor => vendor._id !== vendorId)); // Update the state
    console.log(`Vendor ${vendorId} rejected`); // Log for debugging
  } catch (error) {
    console.error(`Failed to reject vendor ${vendorId}:`, error);
    setError("Failed to reject vendor. Please try again later.");
    setSnackbarOpen(true);
  }
  };


  return (
    <>
      {/* Header with Campus Marketplace title */}
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}>
            Campus Marketplace
          </Typography>
        </Toolbar>
      </AppBar>


      {/* Main Content */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          pt: 4,
          backgroundColor: '#f5f5f5',
        }}
      >
        {/* Page heading */}
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
          New Vendor Requests
        </Typography>


        {/* Vendor List */}
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ padding: 2 }}>
            {loading ? ( // Show loading indicator while fetching data
              <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                <CircularProgress />
              </Box>
            ) : (
              <List>
                {vendors.length > 0 ? (
                  vendors.map((vendor, index) => (
                    <div key={index}>
                      <ListItem sx={{ mb: 1, padding: 0 }}>
                        <Button
                          onClick={() => handleVendorClick(index)}
                          variant="outlined"
                          sx={{ flexGrow: 1, backgroundColor: '#e3f2fd', color: '#1976d2', borderRadius: 2 }}
                        >
                          {vendor.businessName}
                        </Button>
                      </ListItem>
                      <Collapse in={openVendorIndex === index}>
                        <Paper sx={{ padding: 2, mb: 1, backgroundColor: '#e3f2fd' }}>
                          <Typography variant="body1">
                            <strong>Phone:</strong> {vendor.phoneNumber}<br />
                            <strong>Email:</strong> {vendor.email}<br />
                            <strong>Tax ID:</strong> {vendor.taxId}<br />
                            <strong>License Number:</strong> {vendor.licenseNumber}<br />
                            <strong>Description:</strong> {vendor.bio}<br />
                          </Typography>


                          {/* Approval and Rejection Buttons Side by Side */}
                          <Box display="flex" justifyContent="flex-start" mt={2}>
                            <Button
                              variant="contained"
                              color="success"
                              onClick={() => handleApproval(vendor._id)} // Assuming vendor has a unique _id
                              startIcon={<CheckIcon />}
                              sx={{ marginRight: '4px' }} // Reduced right margin for closer proximity
                            >
                              Approve
                            </Button>
                            <Button
                              variant="contained"
                              color="error"
                              onClick={() => handleRejection(vendor._id)} // Assuming vendor has a unique _id
                              startIcon={<CloseIcon />}
                            >
                              Reject
                            </Button>
                          </Box>
                        </Paper>
                      </Collapse>
                    </div>
                  ))
                ) : (
                  <Typography variant="h6" sx={{ textAlign: 'center', color: '#757575' }}>
                    No vendors found
                  </Typography>
                )}
              </List>
            )}
          </Paper>
        </Container>
      </Box>


      {/* Snackbar for error messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </>
  );
}

export default NewRequestsPage;
