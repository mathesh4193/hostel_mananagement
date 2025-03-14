import React, { useState } from 'react';
import './Complaints.css';
import { 
  Container, Typography, TextField, Button, Box, Paper, 
  Alert, Snackbar, FormControl, InputLabel, Select, MenuItem,
  IconButton
} from '@mui/material';
import { AttachFile, Send } from '@mui/icons-material';

const Complaints = () => {
  const [complaint, setComplaint] = useState({
    title: '',
    description: '',
    category: '',
    file: null
  });
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const validateForm = () => {
    const newErrors = {};
    if (!complaint.title.trim()) newErrors.title = 'Title is required';
    if (!complaint.description.trim()) newErrors.description = 'Description is required';
    if (!complaint.category) newErrors.category = 'Category is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      // API call would go here
      // const response = await axios.post('/api/complaints', complaint);
      
      setSnackbar({
        open: true,
        message: 'Complaint submitted successfully!',
        severity: 'success'
      });
      setComplaint({ title: '', description: '', category: '', file: null });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to submit complaint',
        severity: 'error'
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5000000) { // 5MB limit
      setComplaint({ ...complaint, file });
    } else {
      setSnackbar({
        open: true,
        message: 'File size should be less than 5MB',
        severity: 'error'
      });
    }
  };

  return (
    <Container className="complaints-container">
      <Typography variant="h4" className="complaint-title" gutterBottom>
        Submit a Complaint
      </Typography>
      
      <Paper elevation={3} className="complaint-form-paper" sx={{ p: 3, mt: 3 }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <FormControl fullWidth error={!!errors.category}>
            <InputLabel>Category</InputLabel>
            <Select
              value={complaint.category}
              label="Category"
              onChange={(e) => setComplaint({ ...complaint, category: e.target.value })}
            >
              <MenuItem value="maintenance">Maintenance</MenuItem>
              <MenuItem value="facilities">Facilities</MenuItem>
              <MenuItem value="food">Food</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Complaint Title"
            variant="outlined"
            required
            value={complaint.title}
            onChange={(e) => setComplaint({ ...complaint, title: e.target.value })}
            error={!!errors.title}
            helperText={errors.title}
          />
          
          <TextField
            label="Description"
            variant="outlined"
            required
            multiline
            rows={4}
            value={complaint.description}
            onChange={(e) => setComplaint({ ...complaint, description: e.target.value })}
            error={!!errors.description}
            helperText={errors.description}
          />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              component="label"
              variant="outlined"
              startIcon={<AttachFile />}
            >
              Attach File
              <input
                type="file"
                hidden
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
            </Button>
            {complaint.file && (
              <Typography variant="body2" color="text.secondary">
                {complaint.file.name}
              </Typography>
            )}
          </Box>
          
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            size="large"
            endIcon={<Send />}
            className="submit-button"
          >
            Submit Complaint
          </Button>
        </Box>
      </Paper>

      <Box className="contact-info">
        <Typography variant="h6">
          For urgent matters, please contact:
        </Typography>
        <Typography variant="body2">
          Email: hostel.support@vcet.ac.in
        </Typography>
        <Typography variant="body2">
          Phone: +91 1234567890
        </Typography>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Complaints;