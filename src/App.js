import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import AuthModal from './components/AuthModal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [authMode, setAuthMode] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleOpenModal = (mode) => {
    setAuthMode(mode);
  };

  const handleCloseModal = () => {
    setAuthMode(null);
  };

  const handleToggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar onSignIn={() => handleOpenModal('signin')} onSignUp={() => handleOpenModal('signup')} toggleTheme={handleToggleTheme} darkMode={darkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <AuthModal open={Boolean(authMode)} handleClose={handleCloseModal} mode={authMode} />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
