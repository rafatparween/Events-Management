import React from 'react';
import { Container, Grid, Typography, Button, CardMedia } from '@mui/material';
import EventSlider from './EventSlider';
import SomeContent from './SomeContent';

function PrinterSupport() {
  return (
    <>
      <EventSlider />
      <Container>
        {/* Header Section */}
        <Grid container spacing={4} sx={{ mt: 4, color: 'black', marginTop: { xs: '-10px', sm: '10px' } }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ color: '#e5097f' }}>
              LEADING EVENT MANAGEMENT SERVICES IN DELHI
            </Typography>
            <Typography variant="body1" paragraph>
              Are you looking to host an event that will leave a lasting impression? Our event management services in Delhi are designed to make your special occasion truly unforgettable. From the initial planning stages to the final execution, we ensure every detail is meticulously handled.
            </Typography>
            <Typography variant="body1" paragraph>
              We offer a comprehensive range of event management services, including corporate events, product launches, conferences, weddings, private parties, and cultural festivals. Our dedicated team of professionals works closely with you to understand your vision and transform it into reality.
            </Typography>
            <Typography variant="body1" paragraph>
              Our extensive network of venues and vendors in Delhi ensures that we can provide the perfect setting and resources for any type of event. From elegant banquet halls to open-air gardens, we help you select the ideal location that matches your style and budget.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="video"
              controls
              image="https://cdn.pixabay.com/video/2018/04/26/15826-266811435_tiny.mp4"
              alt="Event video"
              sx={{ borderRadius: 2, width: '100%' }}
            />
          </Grid>
        </Grid>

        {/* Wedding Section */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6} container spacing={1}>
            <Grid item xs={6}>
              <CardMedia
                component="img"
                image="/eventone.webp" // Replace with actual image source
                alt="Event image 1"
                sx={{ borderRadius: 2, width: '100%' }}
              />
            </Grid>
            <Grid item xs={6}>
              <CardMedia
                component="img"
                image="/eventtwo.jpg" // Replace with actual image source
                alt="Event image 2"
                sx={{ borderRadius: 2, width: '100%' }}
              />
            </Grid>
            <Grid item xs={6}>
              <CardMedia
                component="img"
                image="eventthree.webp" // Replace with actual image source
                alt="Event image 3"
                sx={{ borderRadius: 2, width: '100%' }}
              />
            </Grid>
            <Grid item xs={6}>
              <CardMedia
                component="img"
                image="/eventfour.webp" // Replace with actual image source
                alt="Event image 4"
                sx={{ borderRadius: 2, width: '100%' }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} sx={{ color: 'black' }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#e5097f' }}>
              UNLOCK YOUR DREAM EVENT IN DELHI
            </Typography>
            <Typography variant="body1" paragraph>
              Discover unparalleled event management services in Delhi, where every occasion is transformed into a memorable experience. Whether you envision a grand corporate gathering, a lavish wedding, or an intimate personal celebration, our team brings your vision to life with precision and creativity.
            </Typography>
            <Typography variant="body1" paragraph>
              Our event management services in Delhi include comprehensive planning, venue selection, theme development, and flawless execution. We pride ourselves on delivering events that are not only seamless but also reflect the unique style and personality of each client.
            </Typography>
            <Typography variant="body1" paragraph>
              From the bustling streets of Connaught Place to the serene venues in South Delhi, we have the expertise to manage events in any setting. Our extensive network of vendors and deep knowledge of local customs ensure that every detail is handled with care and expertise.
            </Typography>
            <Button variant="contained" sx={{ mt: 2, mr: 2 }}>
              Talk to Expert
            </Button>
            <Button variant="outlined" sx={{ mt: 2 }}>
              WhatsApp us
            </Button>
          </Grid>
        </Grid>

        {/* Additional Content Section */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Why Choose Us for Event Management in Delhi?
            </Typography>
            <Typography variant="body1" paragraph>
              Our event management services in Delhi are tailored to meet the diverse needs of our clients. With a keen eye for detail and a passion for excellence, we ensure that every event is executed flawlessly, leaving a lasting impression on your guests.
            </Typography>
            <Typography variant="body1" paragraph>
              We understand that each event is unique, and our customized approach allows us to create bespoke experiences that cater to your specific requirements. From concept development to on-site coordination, we manage every aspect of your event to ensure its success.
            </Typography>
            <Typography variant="body1" paragraph>
              Our commitment to quality and customer satisfaction has earned us a reputation as one of the leading event management providers in Delhi. Whether you're planning a corporate event, a wedding, or a cultural celebration, our team is dedicated to making your event a resounding success.
            </Typography>
            <Typography variant="body1" paragraph>
              Let us help you create unforgettable moments in the vibrant city of Delhi. Contact us today to discuss how our event management expertise can bring your vision to life.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <SomeContent />
    </>
  );
}

export default PrinterSupport;
