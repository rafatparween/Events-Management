import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        py: 4,
        px: 2,
        backgroundImage: "url('/path-to-your-background-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.9,
      }}
    >
      <Grid container spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Event Management
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
        Event Management is an ISO 9001:2015 Certified Event Management Company based in Kerala, India, specializing in organizing a wide range of events. Whether it's a corporate function, wedding, party, or a large-scale conference, we take care of every detail to ensure your event is flawless. Our experienced team offers end-to-end event solutions, including conceptualization, planning, execution, and post-event support.

We offer personalized services tailored to your specific needs and budget, ensuring that every moment is thoughtfully crafted. Our goal is to provide innovative and creative ideas, smooth logistics, and seamless coordination, making your event truly memorable and stress-free. From venue selection and décor to catering, entertainment, and more, Melodia Event Management is here to bring your vision to life.</Typography>
          <Box sx={{ mt: 2 }}>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Link href="#" color="inherit" underline="none" display="block">
            Home
          </Link>
          <Link href="#" color="inherit" underline="none" display="block">
            About
          </Link>
          <Link href="#" color="inherit" underline="none" display="block">
            Venues
          </Link>
          <Link href="#" color="inherit" underline="none" display="block">
            Gallery
          </Link>
          <Link href="#" color="inherit" underline="none" display="block">
            Contact
          </Link>
        </Grid>

        {/* Services */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Services
          </Typography>
          <Link href="#" color="inherit" underline="none" display="block">
            Corporate Events
          </Link>
          <Link href="#" color="inherit" underline="none" display="block">
            Wedding Planner
          </Link>
          <Link href="#" color="inherit" underline="none" display="block">
            Music & Entertainment
          </Link>
          <Link href="#" color="inherit" underline="none" display="block">
            Private Parties
          </Link>
          <Link href="#" color="inherit" underline="none" display="block">
            Destination Wedding
          </Link>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Contact Info
          </Typography>
          <Typography variant="body2" gutterBottom>
            Melodia Event Management, T V Center,
            <br />
            Kakkanad, Kochi, Kerala 682037
          </Typography>
          <Typography variant="body2" gutterBottom>
            Melodia Event Management, Flamon Complex,
            <br />
            Main Rd, Kuriachira, Thrissur, Kerala 680006
          </Typography>
          <Typography variant="body2" gutterBottom>
            Melodia Event Management, Door No:VP
            <br />
            22/152ABC, Vazhakkad Panchayath, Oorkadavu,
            <br />
            Po, Aakkod, Kozhikode, Kerala 673640
          </Typography>
          <Typography variant="body2" gutterBottom>
            +91-859-001-0011
          </Typography>
          <Typography variant="body2">
            melodiaeventmanagement@gmail.com
          </Typography>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        sx={{
          mt: 4,
          textAlign: "center",
          borderTop: "1px solid white",
          pt: 2,
        }}
      >
        © 2008–2025 ijstartprinter. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
