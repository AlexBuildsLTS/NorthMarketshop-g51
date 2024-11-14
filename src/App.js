import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard';
import AuthModal from './components/AuthModal/AuthModal';
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
      primary: {
        main: '#0A1929', // Dark blue color for primary
      },
      background: {
        default: darkMode ? '#0A1929' : '#ffffff', // Dark or white based on mode
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
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
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <AuthModal open={Boolean(authMode)} handleClose={handleCloseModal} mode={authMode} />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;