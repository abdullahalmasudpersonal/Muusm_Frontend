'use client';
import React from 'react';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import NotificationsIcon from "@mui/icons-material/Notifications";
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo/logo.png';

const logoStyle = {
  width: "70px",
  height: "auto",
  cursor: "pointer",
};

const Navber = () => {

  return (
    <AppBar position="static" sx={{
      // boxShadow: 0,
      // bgcolor: "transparent",
      // backgroundImage: "none",
      // mt: 2,
    }}>
      <Container maxWidth='lg'>
        <Toolbar>
          <Link href="/">
            <Image src={logo} style={logoStyle} alt="logo of Flat Share" />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navber;