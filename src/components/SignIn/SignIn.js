import React from 'react';
import { TextField, Button, Dialog, DialogContent, DialogTitle } from '@mui/material';

const SignIn = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Sign In</DialogTitle>
      <DialogContent>
        <TextField margin="dense" label="Email Address" type="email" fullWidth />
        <TextField margin="dense" label="Password" type="password" fullWidth />
        <Button onClick={handleClose} variant="contained" color="primary">
          Sign In
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SignIn;
