// src/components/AuthModal/AuthModal.js
import React from 'react';
import { Dialog, DialogContent, DialogTitle, Button, TextField, Box } from '@mui/material';

const AuthModal = ({ open, handleClose, mode }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{mode === 'signin' ? 'Sign In' : 'Sign Up'}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Email" type="email" fullWidth />
          <TextField label="Password" type="password" fullWidth />
          {mode === 'signup' && (
            <TextField label="Confirm Password" type="password" fullWidth />
          )}
          <Button variant="contained" color="primary" onClick={handleClose}>
            {mode === 'signin' ? 'Sign In' : 'Sign Up'}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
