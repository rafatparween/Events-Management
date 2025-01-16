// import React, { useState } from 'react';
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Container,
//   Avatar,
//   Grid,
//   Link,
// } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');

//     if (!email || !password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (!/^\S+@\S+\.\S+$/.test(email)) {
//       setError('Invalid email format.');
//       return;
//     }

//     // Simulate login success and navigate
//     alert('Login successful!');
//     navigate('/'); // Redirect to the homepage
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign In
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
//           {error && (
//             <Typography color="error" sx={{ mb: 2 }}>
//               {error}
//             </Typography>
//           )}
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="/signup" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Login;


import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Login = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#e5097f", // Background color
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Optional shadow for a better look
          textAlign: "center",
          width: "100%",
          maxWidth: "400px", // Max width for the login box
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "1rem", color: "#e5097f" }}>
          Login
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: "1rem" }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#e5097f",
            color: "white",
            "&:hover": { backgroundColor: "#c1086d" },
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
