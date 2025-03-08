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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
