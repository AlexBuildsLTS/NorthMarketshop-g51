// src/pages/About/About.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Box sx={{ marginTop: 5 }}>
        <Typography variant="h4">About North Market</Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Learn more about our mission, values, and the team behind North Market.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
