import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo1 from '../../MSSlogo.jpg'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GoogleSignInButton from '../googleSignInButton';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = [
    { label: 'Shop', to: '/Store' },
    { label: 'Create Listing', to: '/createListing' },
    { label: 'Profile', to: '/profile' },
    { label: 'Report View', to: '/reportView' },
    { label: 'Messaging', to: '/message'}
  ];

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: '#333', color: '#fff', width: '100%' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mountain State Swap
          </Typography>
          <div>
            {navLinks.map((link) => (
              <Button key={link.label} color="inherit" component={Link} to={link.to}>
                {link.label}
              </Button>
              
            ))}
            <GoogleSignInButton />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.label} button component={Link} to={link.to} onClick={toggleDrawer(false)}>
              <ListItemText primary={link.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default NavBar;
