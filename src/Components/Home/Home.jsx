import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material'; // Don't forget to import Box!
import SliderBar from '../SliderBar';
import ProductSection from '../ProductSection';

// Create a theme using MUI's createTheme
const theme = createTheme({
    // Customize your theme here (optional)
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#9c27b0',
        },
    },
});

const Home = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box>
                    <Box sx={{ width: "100vw", overflowX: "hidden", position: "relative" }}>
                        <SliderBar/>
                    </Box>
                </Box>
                <Box mt={4}>
                    <ProductSection/>
                </Box>
                <Box>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default Home;
