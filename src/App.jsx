import { useState } from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from './Components/Navbar';
import SliderBar from './Components/SliderBar';
import ProductSection from './Components/ProductSection';
import Footer from './Components/Footer';
// import Header from './Components/Header';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <Navbar />
          <Box sx={{ width: "100vw", overflowX: "hidden", position: "relative" }}>
            <SliderBar />
          </Box>
          {/* <Header/> */}
        </Box>
        <Box mt={4}> {/* Add margin-top here */}
          <ProductSection />
        </Box>
        <Box>
          <Footer/>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;

