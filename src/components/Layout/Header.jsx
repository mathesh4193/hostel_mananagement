import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();
  const isLoggedIn = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <AppBar position="sticky" className="header">
      <Toolbar>
        <div className="logo-container" onClick={() => navigate('/')}>
          <img src="/Vcet_logo.jpg" alt="VCET Logo" className="logo" />
          <Typography variant="h6" className="title">
            VCET HOSTEL
          </Typography>
        </div>
        
        <Box className="nav-links">
          <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
          <Button color="inherit" onClick={() => navigate('/about')}>About</Button>
          <Button color="inherit" onClick={() => navigate('/complaints')}>Complaints</Button>
          <Button color="inherit" onClick={() => navigate('/attendance')}>Attendance</Button>
          
          {isLoggedIn ? (
            <>
              <Button color="inherit" onClick={() => navigate('/student-dashboard')}>Dashboard</Button>
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
          )}
          
          <IconButton
            color="inherit"
            onClick={toggleTheme}
            sx={{ ml: 2 }}
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;