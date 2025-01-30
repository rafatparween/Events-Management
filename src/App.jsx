import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Login/Login';
import Home from './Components/Home/Home';
import Signup from './Signup/Signup';
import Contact from './Contact/Contact';
import About from './About/About';
import Events from './Events/Events';
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
      <Router>
        <ThemeProvider theme={theme}>
          <Box>
            <Navbar />
          </Box>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Events' element={<Events/>}/>
          </Routes>
          <Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;

