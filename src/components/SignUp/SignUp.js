import React from 'react';
import { TextField, Button, Dialog, DialogContent, DialogTitle } from '@mui/material';

const SignUp = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Sign Up</DialogTitle>
      <DialogContent>
        <TextField margin="dense" label="Username" fullWidth />
        <TextField margin="dense" label="Email Address" type="email" fullWidth />
        <TextField margin="dense" label="Password" type="password" fullWidth />
        <Button onClick={handleClose} variant="contained" color="primary">
          Sign Up
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SignUp;
