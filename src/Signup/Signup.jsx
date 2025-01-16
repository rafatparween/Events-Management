import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Signup = () => {
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
          maxWidth: "400px", // Max width for the signup box
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "1rem", color: "#e5097f" }}>
          Sign Up
        </Typography>

        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
        />
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
        <TextField
          label="Confirm Password"
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
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;
