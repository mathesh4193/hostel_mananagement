import React, { useRef, useEffect } from 'react';
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
import { useLocation } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const featuresRef = useRef(null);
  const heroRef = useRef(null);
  const location = useLocation();

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFeatureClick = (feature) => {
    const isLoggedIn = localStorage.getItem('token');
    
    // Only about page is accessible without login
    if (!isLoggedIn && feature !== 'about') {
      navigate('/login', { state: { from: feature } }); // Pass intended destination
      return;
    }

    // Navigation map
    const navigationPaths = {
      about: '/about',
      leave: '/student-dashboard/leave',
      complaint: '/student-dashboard/complaints',
      mess: '/student-dashboard/mess',
      room: '/student-dashboard/room',
      security: '/student-dashboard/security',
      dashboard: '/student-dashboard',
      outpass: '/student-dashboard/outpass'
    };

    // Navigate to the appropriate path
    if (navigationPaths[feature]) {
      navigate(navigationPaths[feature]);
    }
  };

  // In your Home component, add this useEffect
  useEffect(() => {
    if (location.state?.scrollToFeatures) {
      const featuresSection = document.querySelector('.features-section');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  // In your Home component, add this useEffect
  useEffect(() => {
    if (location.state?.scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <Container className="home-container">
      <Box className="hero-section" ref={heroRef}>
        <Typography variant="h2">
          VCET Hostel 
        </Typography>
        <Typography variant="h5">
          Managing Student Accommodation with Excellence
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          onClick={() => scrollToSection(featuresRef)}
          style={{ marginRight: '10px' }}
        >
          Explore Features
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          onClick={() => navigate('/login')}
        >
          Get Started
        </Button>
      </Box>

      <Box className="features-section" ref={featuresRef}>
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
};

export default Home;