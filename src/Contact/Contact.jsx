import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", 
      }}
    >
      {/* Main Content Section */}
      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          flex: 1, 
          padding: "4rem 2rem",
        }}
      >
        {/* Header Section */}
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
            Event Management System
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
            {/* Welcome to our Event Management System! We provide seamless event
            planning and management tools, designed to help you plan, organize, and
            execute events effortlessly. Whether you're hosting corporate meetings,
            conferences, or community gatherings, our platform offers everything you
            need to make your event a success. */}
          </Typography>
        </Box>

        {/* Upcoming Events Section */}
        <Box sx={{ marginBottom: "5rem" }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              color: "#e5097f",
              fontWeight: "bold",
              marginBottom: "3rem",
            }}
          >
            Upcoming Events
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                title: "Annual Conference 2025",
                date: "March 25, 2025",
                description:
                  "Join us for a full-day conference featuring top speakers, workshops, and networking opportunities.",
              },
              {
                title: "Community Meetup",
                date: "April 10, 2025",
                description:
                  "A casual meetup for community members to share ideas, collaborate, and enjoy great conversations.",
              },
              {
                title: "Product Launch Gala",
                date: "May 15, 2025",
                description:
                  "Celebrate the launch of our latest product with an exciting evening of entertainment, food, and more.",
              },
            ].map((event, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    padding: "2rem",
                    textAlign: "center",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#e5097f",
                        fontWeight: "bold",
                        marginBottom: "1rem",
                      }}
                    >
                      {event.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#555",
                        marginBottom: "1rem",
                        fontWeight: "light",
                      }}
                    >
                      {event.date}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#777",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {event.description}
                    </Typography>
                    <Button
                      component={Link}
                      to="/events"
                      variant="contained"
                      sx={{
                        backgroundColor: "#e5097f",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#c1086d",
                        },
                      }}
                    >
                      View Event
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Features Section */}
        <Box sx={{ marginBottom: "5rem" }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              color: "#e5097f",
              fontWeight: "bold",
              marginBottom: "3rem",
            }}
          >
            Why Choose Our Event Management System?
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                title: "Easy Event Creation",
                description:
                  "Create events effortlessly with customizable templates and powerful tools.",
              },
              {
                title: "Real-time Updates",
                description:
                  "Keep your attendees informed with real-time notifications and event updates.",
              },
              {
                title: "Seamless Registration",
                description:
                  "Allow attendees to register quickly and securely with our intuitive registration system.",
              },
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    padding: "2.5rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    textAlign: "center",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#e5097f",
                      fontWeight: "bold",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#777",
                      fontSize: "1rem",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
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
            Have any questions or need assistance with event planning? Feel free to contact us, and we'll be happy to help!
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
          marginTop: "auto", 
        }}
      >
        <Typography variant="body1">&copy; 2025 Event Management System</Typography>
      </Box>
    </Box>
  );
};

export default Contact;

