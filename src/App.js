import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home'; // We'll create this next
import { Container } from '@mui/material';

function App() {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  return (
    <Router>
      {/* Navbar with handlers for Sign In and Sign Up */}
      <Navbar 
        onSignIn={() => setSignInOpen(true)} 
        onSignUp={() => setSignUpOpen(true)} 
      />

      {/* Main Content */}
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add more routes as needed */}
        </Routes>
      </Container>

      {/* Sign In and Sign Up Dialogs */}
      <SignIn open={signInOpen} handleClose={() => setSignInOpen(false)} />
      <SignUp open={signUpOpen} handleClose={() => setSignUpOpen(false)} />
    </Router>
  );
}

export default App;
