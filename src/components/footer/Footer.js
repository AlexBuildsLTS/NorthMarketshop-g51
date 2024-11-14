import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 3, backgroundColor: '#0A1929', color: '#fff', textAlign: 'center' }}>
      <Typography variant="body1">&copy; 2024 North Market Shop. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
