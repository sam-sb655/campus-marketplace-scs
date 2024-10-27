import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Checkbox, FormControlLabel, IconButton, InputAdornment } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { loginUser } from '../api'; // Adjust path if necessary

function CustomerSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const { token, user } = await loginUser({ email, password });
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      console.log("Login successful:", user);
      navigate('/customer-account');
    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message);
      setError('Login failed. Please check your email and password.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: '#f9f9f9',
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Welcome Back!
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
        Sign in to continue
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: 360 }}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="outlined"
          sx={{ mb: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <TextField
          fullWidth
          label="Password"
          type={showPassword ? 'text' : 'password'} // Toggle text/password based on state
          variant="outlined"
          sx={{ mb: 2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={togglePasswordVisibility}
                  edge="end"
                  aria-label="toggle password visibility"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {error && (
          <Typography color="error" variant="body2" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

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

        <Typography variant="body2" color="textSecondary">
          Don’t have an account?{' '}
          <Link to="/customer-register" style={{ textDecoration: 'underline', color: '#0000FF' }}>
            Register
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default CustomerSignUp;
