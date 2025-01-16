import React from "react";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import Slider from "react-slick";

// Carousel settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Events = () => {
  return (
    <div style={{ padding: "20px" }}>
      {/* Big Content Slider with Images */}
      <div style={{ marginBottom: "40px" }}>
        <Slider {...settings}>
          {/* <div>
            <img
              src="https://via.placeholder.com/1200x400/0000FF/808080?text=Event+Image+1"
              alt="Event 1"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1200x400/FF5733/808080?text=Event+Image+2"
              alt="Event 2"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1200x400/008000/808080?text=Event+Image+3"
              alt="Event 3"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </div> */}
        </Slider>
      </div>

      {/* Event Title and Description */}
      <Typography variant="h3" gutterBottom align="center">
        Upcoming Tech Innovators Conference 2025
      </Typography>
      <Typography variant="body1" paragraph align="center">
        Join us for the most anticipated tech event of the year! The Tech Innovators Conference is a global gathering of industry leaders, entrepreneurs, and technology enthusiasts. Come experience the latest in innovation, technology trends, and future-forward discussions.
      </Typography>

      {/* Event Details */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Event Details</Typography>
              <Typography color="textSecondary">Date: March 12, 2025</Typography>
              <Typography color="textSecondary">Location: Silicon Valley Conference Center</Typography>
              <Typography variant="body2" paragraph>
                This conference will feature exciting keynote speakers, panel discussions, and hands-on workshops on topics like AI, Machine Learning, Blockchain, and more. It’s a must-attend event for anyone in tech.
              </Typography>
              <Typography variant="body2">
                Highlights:
                <ul>
                  <li>Keynote speakers from top tech companies</li>
                  <li>Workshops on AI and Machine Learning</li>
                  <li>Networking with industry leaders</li>
                </ul>
              </Typography>
            </CardContent>
            <Button variant="contained" color="primary" fullWidth>
              Register Now
            </Button>
          </Card>
        </Grid>
      </Grid>

      {/* Embedded Video for Event */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Watch Our Event Preview
        </Typography>
        <iframe
          width="80%"
          height="500"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your event video URL
          title="Event Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Call to Action */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Typography variant="h4">Want to Host an Event with Us?</Typography>
        <Typography variant="body1" paragraph>
          If you're planning an event and would like to partner with us, we'd love to help. Reach out to us today to start planning an event that will leave a lasting impact!
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Events;
