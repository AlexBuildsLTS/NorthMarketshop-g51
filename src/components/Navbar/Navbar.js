import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = ({ onSignIn, onSignUp, toggleTheme, darkMode }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/shop" color="inherit">Shop</Button>
          <Box sx={{ flexGrow: 1 }} />
          <Switch checked={darkMode} onChange={toggleTheme} color="default" />
          <Button onClick={onSignIn} color="inherit">Sign In</Button>
          <Button onClick={onSignUp} color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
