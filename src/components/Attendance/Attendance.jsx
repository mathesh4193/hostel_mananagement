import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Paper } from '@mui/material';
import './Attendance.css';

const Attendance = () => {
  const [location, setLocation] = useState(null);
  const [isInCampus, setIsInCampus] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // VCET coordinates
  const VCET_LOCATION = {
    latitude: 9.893885674852694,
    longitude: 78.1735131745074,
    radius: 100 // 100 meters for strict validation
  };

  // Haversine Formula to calculate distance
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // Earth's radius in meters
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in meters
  };

  useEffect(() => {
    console.log("Attendance component mounted");
    setLoading(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Got position:", position.coords);
          const currentLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };
          setLocation(currentLocation);

          const distance = calculateDistance(
            currentLocation.latitude,
            currentLocation.longitude,
            VCET_LOCATION.latitude,
            VCET_LOCATION.longitude
          );

          setIsInCampus(distance <= VCET_LOCATION.radius);
          setError(distance > VCET_LOCATION.radius ? 'You must be within VCET campus to mark attendance' : '');
          setLoading(false);
        },
        (err) => {
          console.error('Geolocation Error:', err.message);
          setError('Location access denied. Please enable GPS.');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, []);

  const handleMarkAttendance = () => {
    if (!isInCampus) {
      alert('❌ Attendance NOT marked. You must be within the VCET campus.');
      return;
    }
    alert('✅ Attendance marked successfully!');
  };

  return (
    <Container className="attendance-container" style={{ marginTop: '2rem', minHeight: '80vh' }}>
      <Typography variant="h4" className="attendance-title" style={{ marginBottom: '2rem', textAlign: 'center' }}>
        Mark Attendance
      </Typography>

      <Paper elevation={3} className="attendance-content" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
        {loading ? (
          <Typography variant="body1">Loading location data...</Typography>
        ) : (
          <>
            {error && (
              <Typography color="error" className="error-message" style={{ marginBottom: '1rem' }}>
                {error}
              </Typography>
            )}

            {location && (
              <Typography variant="body1" className="location-info" style={{ marginBottom: '1rem' }}>
                {isInCampus ? '✅ Location verified: Within VCET campus' : '❌ Not within VCET campus'}
                <br />
                <small>Your coordinates: {location.latitude.toFixed(6)}, {location.longitude.toFixed(6)}</small>
              </Typography>
            )}

            <Button
              variant="contained"
              color="primary"
              onClick={handleMarkAttendance}
              className="mark-button"
              disabled={!!error || !location}
              style={{ width: '100%', padding: '0.75rem', marginTop: '1rem' }}
            >
              Mark Attendance
            </Button>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Attendance;
