import React, { useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [role, setRole] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);  // Add this state
  const navigate = useNavigate();

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    setUserId('');
    setPassword('');
    setError('');
  };

  const handleTogglePassword = () => {  // Add this function
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {  // Add this function
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        userId: userId,
        password: password,
        role: role.toLowerCase()
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', role.toLowerCase());
        localStorage.setItem('userId', userId);

        if (role === 'Student') {
          navigate('/student-dashboard');
        } else if (role === 'warden') {
          navigate('/warden-dashboard');
        }
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <p>Please select your role and enter your credentials</p>
      
      <div className="role-selection">
        <button 
          className={`role-button ${role === 'Student' ? 'selected' : ''}`}
          onClick={() => handleRoleSelection('Student')}
        >
          <div>Student</div>
          <small>Enter Roll Number & Password</small>
        </button>
        <button 
          className={`role-button ${role === 'warden' ? 'selected' : ''}`}
          onClick={() => handleRoleSelection('warden')}
        >
          <div>Warden</div>
          <small>Enter Warden ID & Password</small>
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {role && (
        <form onSubmit={handleSubmit}>
          <label>
            {role === 'warden' ? 'Warden ID' : 'Roll Number'}
            <input 
              type="text" 
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder={role === 'warden' ? 'Enter warden ID' : 'Enter roll number'}
              required
            />
          </label>
          <label>
            Password
            <div className="password-input-container">
              <input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <IconButton
                className="password-toggle"
                onClick={handleTogglePassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
          </label>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      )}

      <p><a href="#">Forgot Password?</a></p>
    </div>
  );
};

export default SignIn;