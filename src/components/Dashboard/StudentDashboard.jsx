import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import axios from 'axios';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const [studentInfo, setStudentInfo] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/students/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setStudentInfo(response.data);
      } catch (error) {
        console.error('Error fetching student info:', error);
      }
    };

    if (userId) {
      fetchStudentInfo();
    }
  }, [userId]);

  if (!studentInfo) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Profile Section */}
        <Grid item xs={12}>
          <Paper className="profile-section">
            <div className="profile-header">
              <div className="profile-avatar">
                <PersonIcon sx={{ fontSize: 60 }} />
              </div>
              <Typography variant="h4">{studentInfo.name}</Typography>
            </div>
          </Paper>
        </Grid>

        {/* Academic Information */}
        <Grid item xs={12}>
          <Paper className="info-section">
            <Typography variant="h6" className="section-title">
              <SchoolIcon /> Academic Information
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Register No" secondary={studentInfo.registerNo} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Roll No" secondary={studentInfo.rollNo} />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StudentDashboard;