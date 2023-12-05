import React from 'react';
import Grid from '@mui/material/Grid';

const ResponsiveGrid = () => {
    const gridItemStyle = {
        padding: 20,
        background: 'skyblue',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150px', // Fixed height for visual consistency
        margin: '10px'
    };

    return (
        <Grid container spacing={2} style={{ padding: 20 }}>
            {[...Array(6)].map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <div style={gridItemStyle}>Item {index + 1}</div>
                </Grid>
            ))}
        </Grid>
    );
};

export default ResponsiveGrid;
