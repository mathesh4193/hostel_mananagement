import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home';
import SignIn from './components/Auth/SignIn';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import About from './components/About/About';
import WardenDashboard from './components/Dashboard/WardenDashboard.jsx';  
import './components/About/About.css';  
import Leave from './components/Leave/Leave';
import Complaints from './components/Complaints/Complaints';
import Mess from './components/Mess/Mess';
import Room from './components/Room/Room';
import Security from './components/Security/Security';
import Dashboard from './components/Dashboard/Dashboard';
import Outpass from './components/Outpass/Outpass';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/warden-dashboard" element={<WardenDashboard />} />
            <Route path="/student-dashboard/leave" element={<Leave />} />
            <Route path="/student-dashboard/complaints" element={<Complaints />} />
            <Route path="/student-dashboard/mess" element={<Mess />} />
            <Route path="/student-dashboard/room" element={<Room />} />
            <Route path="/student-dashboard/security" element={<Security />} />
            <Route path="/student-dashboard/outpass" element={<Outpass />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
