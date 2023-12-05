import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => (
    <Drawer variant="permanent" anchor="left" sx={{ '& .MuiDrawer-paper': { marginTop: '64px' } }}>
        <List>
            <ListItem>
                <ListItemText primary="Home" />
            </ListItem>
        </List>
    </Drawer>
);

export default Sidebar;