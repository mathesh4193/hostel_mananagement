import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import SecurityIcon from '@mui/icons-material/Security';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleFeatureClick = (feature) => {
    const isLoggedIn = localStorage.getItem('token');
    if (!isLoggedIn && feature !== 'about') {  // Allow about page without login
      navigate('/login');
      return;
    }

    switch (feature) {
      case 'about':
        navigate('/about');
        break;
      case 'leave':
        navigate('/student-dashboard/leave');
        break;
      case 'complaint':
        navigate('/student-dashboard/complaints');
        break;
      case 'mess':
        navigate('/student-dashboard/mess');
        break;
      case 'room':
        navigate('/student-dashboard/room');
        break;
      case 'security':
        navigate('/student-dashboard/security');
        break;
      case 'dashboard':
        navigate('/student-dashboard');
        break;
      case 'outpass':
        navigate('/student-dashboard/outpass');
        break;
      default:
        break;
    }
  };

  return (
    <Container className="home-container">
      <Box className="hero-section">
        <Typography variant="h2">
          VCET Hostel Connect
        </Typography>
        <Typography variant="h5">
          Managing Student Accommodation with Excellence
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          onClick={() => navigate('/login')}
        >
          Get Started
        </Button>
      </Box>

      <Box className="features-section">
        <Typography variant="h3">Our Features</Typography>
        <div className="features-grid">
          <div className="feature-card" onClick={() => handleFeatureClick('about')}>
            <AssignmentIcon className="feature-icon" />
            <Typography variant="h6">About Us</Typography>
            <Typography>Learn more about our hostel</Typography>
          </div>

          <div className="feature-card" onClick={() => handleFeatureClick('leave')}>
            <AssignmentIcon className="feature-icon" />
            <Typography variant="h6">Leave Management</Typography>
            <Typography>Easy leave application process</Typography>
          </div>

          <div className="feature-card" onClick={() => handleFeatureClick('complaint')}>
            <ReportProblemIcon className="feature-icon" />
            <Typography variant="h6">Complaints</Typography>
            <Typography>Submit and track complaints</Typography>
          </div>
          
          <div className="feature-card" onClick={() => handleFeatureClick('mess')}>
            <RestaurantMenuIcon className="feature-icon" />
            <Typography variant="h6">Mess Menu</Typography>
            <Typography>View daily menu</Typography>
          </div>

          <div className="feature-card" onClick={() => handleFeatureClick('room')}>
            <MeetingRoomIcon className="feature-icon" />
            <Typography variant="h6">Room Allocation</Typography>
            <Typography>Room details and requests</Typography>
          </div>

          <div className="feature-card" onClick={() => handleFeatureClick('security')}>
            <SecurityIcon className="feature-icon" />
            <Typography variant="h6">Security</Typography>
            <Typography>Campus security information</Typography>
          </div>

          <div className="feature-card" onClick={() => handleFeatureClick('dashboard')}>
            <DashboardIcon className="feature-icon" />
            <Typography variant="h6">Dashboard</Typography>
            <Typography>Access your dashboard</Typography>
          </div>

          <div className="feature-card" onClick={() => handleFeatureClick('outpass')}>
            <ExitToAppIcon className="feature-icon" />
            <Typography variant="h6">Out Pass</Typography>
            <Typography>Request out pass</Typography>
          </div>
        </div>
      </Box>
    </Container>
  );
}

export default Home;