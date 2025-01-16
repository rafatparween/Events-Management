import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Full page height
      }}
    >
      {/* Main Content Section */}
      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          flex: 1, // Allows content area to take available space
          padding: "4rem 2rem",
        }}
      >
        {/* About Header Section */}
        <Box sx={{ textAlign: "center", marginBottom: "4rem" }}>
          <Typography
            variant="h3"
            sx={{
              color: "#e5097f",
              fontWeight: "bold",
              letterSpacing: "1px",
              marginBottom: "1rem",
            }}
          >
            {/* About Us */}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#333",
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "1.2rem",
              lineHeight: "1.8",
              marginBottom: "2rem",
            }}
          >
            {/* Welcome to our platform! We are dedicated to providing seamless and efficient solutions to make your events
            and projects a success. */}
          </Typography>
        </Box>

        {/* About Us Section (Text on Left, Image on Right) */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                padding: "2rem",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#e5097f",
                  fontWeight: "bold",
                  marginBottom: "2rem",
                }}
              >
                Who We Are
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#555",
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                }}
              >
                We are a dedicated team of professionals committed to providing event management solutions that are
                efficient and reliable. Over the years, we’ve refined our processes to ensure that every event we handle
                runs smoothly, from start to finish.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                overflow: "hidden", // Ensures the image stays within the box
              }}
            >
              <img
                src="https://eventsmanagementkerala.com/wp-content/uploads/2023/02/blog-2.27e5a04.webp"
                alt="About Us Image"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Optional image shadow
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Our Story Section (Text on Right, Image on Left) */}
        <Grid container spacing={4} alignItems="center" sx={{ marginTop: "5rem" }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
              }}
            >
              <img
                src="https://eventsmanagementkerala.com/wp-content/uploads/2022/09/120194784-3326284494132901-5082331046715279958-o_15_185637-162346919663970.webp"
                alt="Our Story Image"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                padding: "2rem",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#e5097f",
                  fontWeight: "bold",
                  marginBottom: "2rem",
                }}
              >
                Our Story
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#555",
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                }}
              >
                We started with a vision to revolutionize the event planning industry. Our founders came together with a
                common goal of simplifying the entire process, from conception to execution. The journey has not always
                been easy, but our passion for delivering exceptional events has driven us to grow and evolve.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Services Section */}
        <Box sx={{ marginTop: "5rem", marginBottom: "5rem", textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              color: "#e5097f",
              fontWeight: "bold",
              marginBottom: "3rem",
            }}
          >
            What We Offer
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {/* Service cards (keep this part as is) */}
          </Grid>
        </Box>

        {/* Contact Section */}
        <Box
          sx={{
            backgroundColor: "#e5097f",
            padding: "4rem 2rem",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "white",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            Get in Touch with Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              marginBottom: "2rem",
              fontSize: "1.1rem",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Have any questions or want to know more about our services? Feel free to contact us, and we’ll be happy to
            help! We're available 24/7, and our customer support team is ready to assist you with any inquiries you may
            have.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "#e5097f",
              "&:hover": { backgroundColor: "#f5a1d3" },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#333",
          color: "white",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <Typography variant="body2">&copy; 2025 Hewlett Hub Solutions. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default About;
