// src/pages/Home/Home.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Box sx={{ marginTop: 5 }}>
        <Typography variant="h4">Welcome to North Market</Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Discover our curated collection of high-quality products.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
