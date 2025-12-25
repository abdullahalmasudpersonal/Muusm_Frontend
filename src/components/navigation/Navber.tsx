'use client';
import React from 'react';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import NotificationsIcon from "@mui/icons-material/Notifications";

const Navber = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  return (
    <AppBar position="fixed" sx={{
      boxShadow: 0,
      // bgcolor: "transparent",
      // backgroundImage: "none",
      mt: 2,
    }}>
      <Container maxWidth='lg'>
        mmm
      </Container>
    </AppBar>
  );
};

export default Navber;