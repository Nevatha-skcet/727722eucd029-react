import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Card, CardContent, Button, Box } from '@mui/material';
import { Home as HomeIcon, Info as InfoIcon } from '@mui/icons-material';

const drawerWidth = 240;

const BusinessTemplate = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Business Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {['Home', 'Info'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <HomeIcon /> : <InfoIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Typography paragraph>
                    Welcome to the Business Dashboard
                </Typography>
                <Card sx={{ maxWidth: 345, mb: 2 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Card Title
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This is an example card. You can put any content here.
                        </Typography>
                    </CardContent>
                    <Button size="small">Learn More</Button>
                </Card>
                {/* Additional cards or content can go here */}
            </Box>
        </Box>
    );
};

export default BusinessTemplate;
