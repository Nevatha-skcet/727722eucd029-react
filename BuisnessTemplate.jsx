import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const drawerWidth = 240;


const BusinessTemplate = () => {
    
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box>
      <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={toggleDrawer}
            sx={{ marginRight: 10 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Business Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Home', 'About', 'Contact'].map((text, index) => (
              <ListItem button key={index} onClick={toggleDrawer}>
                <ListItemIcon>
                  {text === 'Home' && <HomeIcon />}
                  {index === 1 && <InfoIcon />}
                  {index === 2 && <ContactMailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}

      <Box sx={{ p: 3, width: `calc(100% - ${drawerOpen ? drawerWidth : 0 }px)` }}
      >
        <Toolbar />
        <Typography paragraph>
          Welcome to the business dashboard. Here you can find all the important information at a glance.
        </Typography>
        {/* More content goes here */}
      </Box>
    </Box>
  );
};

export default BusinessTemplate;
