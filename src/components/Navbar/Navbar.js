import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeToggle from '@mui/icons-material/NightsStay';

const Navbar = ({ onSignIn, onSignUp, toggleTheme, darkMode }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          North Market
        </Typography>
        <Button color="inherit" onClick={onSignIn}>Sign In</Button>
        <Button color="inherit" onClick={onSignUp}>Sign Up</Button>
        <IconButton color="inherit" onClick={toggleTheme}>
          <DarkModeToggle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
