import React from 'react';
import { Box, Button, TextField } from '@mui/material';

const SignIn = () => {
  return (
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Email" type="email" required />
      <TextField label="Password" type="password" required />
      <Button variant="contained" type="submit">Sign In</Button>
    </Box>
  );
};

export default SignIn;
