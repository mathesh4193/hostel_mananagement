import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <AppBar position="fixed" className="header">
      <Toolbar>
        <Box className="logo-container">
          <img src="/Vcet_logo.jpg" alt="VCET Logo" className="logo" />
          <Typography variant="h6" className="title">
            VCET Hostel Connect
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box className="nav-links">
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/login">Sign In</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
