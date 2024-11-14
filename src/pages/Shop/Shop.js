// src/pages/Shop/Shop.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Shop = () => {
  return (
    <Container>
      <Box sx={{ marginTop: 5 }}>
        <Typography variant="h4">Shop Our Products</Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Browse through our wide variety of products.
        </Typography>
      </Box>
    </Container>
  );
};

export default Shop;
