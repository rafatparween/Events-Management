import { useState } from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue
    },
    secondary: {
      main: '#dc004e', // Pink
    },
  },
});

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
      <Box p={2}>
        <Typography variant="h4" color="primary">
          Welcome to React with Vite and MUI!
        </Typography>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="outlined" color="secondary" style={{ marginLeft: '10px' }}>
          Secondary Button
        </Button>
      </Box>
    </ThemeProvider>
    </>
  )
}

export default App
