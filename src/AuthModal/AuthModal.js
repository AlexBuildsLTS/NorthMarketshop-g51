import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';

const AuthModal = ({ open, handleClose, mode }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{mode === 'signin' ? 'Sign In' : 'Sign Up'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
        />
        {mode === 'signup' && (
          <TextField
            margin="dense"
            label="Confirm Password"
            type="password"
            fullWidth
            variant="outlined"
          />
        )}
        <Button onClick={handleClose} color="primary" variant="contained">
          {mode === 'signin' ? 'Sign In' : 'Sign Up'}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
