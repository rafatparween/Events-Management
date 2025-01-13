import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <Box
      component="nav"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#e5097f",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        boxSizing: "border-box",
      }}
    >
      {/* Navbar Brand */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          component="a"
          href="/"
          sx={{
            fontSize: "1.5rem",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Events Management
        </Typography>
        <IconButton
          onClick={toggleMenu}
          sx={{
            display: { xs: "block", sm: "none" },
            color: "white",
            fontSize: "1.5rem",
            marginLeft: "1rem",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Navbar Menu */}
      <Box
        sx={{
          display: { xs: menuOpen ? "flex" : "none", sm: "flex" },
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "center" },
          position: { xs: "absolute", sm: "static" },
          top: { xs: "60px", sm: "auto" },
          left: { xs: 0, sm: "auto" },
          backgroundColor: { xs: "black", sm: "transparent" },
          width: { xs: "100%", sm: "auto" },
          zIndex: 999,
        }}
      >
        {["Home", "About", "Events", "Gallery", "Contact", "Signup", "Login"].map(
          (item, index) => (
            <Typography
              key={index}
              component="a"
              href={`/${item.toLowerCase()}`}
              sx={{
                margin: { xs: "0.5rem 0", sm: "0 1rem" },
                color: "white",
                textDecoration: "none",
                fontSize: { xs: "18px", sm: "20px" },
                "&:hover": { color: "#ff69b4" },
              }}
            >
              {item}
            </Typography>
          )
        )}
      </Box>
    </Box>
    </>
  );
};

export default Navbar;
