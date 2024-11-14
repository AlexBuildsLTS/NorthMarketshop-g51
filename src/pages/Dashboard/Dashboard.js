import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Dashboard Overview</Typography>
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        <Paper sx={{ p: 2, width: '300px' }}>
          <Typography variant="h6">Monthly Earnings</Typography>
          <Typography variant="h4">$3,200</Typography>
        </Paper>
        <Paper sx={{ p: 2, width: '300px' }}>
          <Typography variant="h6">Total Orders</Typography>
          <Typography variant="h4">256</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
