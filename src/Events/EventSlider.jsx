import React, { useState, useEffect } from 'react';
import { Grid, CardMedia } from '@mui/material';

const images = [
    'img1.jpg',
    'img.jpg',
    'img3.jpeg'
];

function EventSlider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <Grid container sx={{ width: '100%', height: '600px', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={12}>
                <CardMedia
                    component="img"
                    image={images[currentImageIndex]}
                    alt="Event image"
                    sx={{ width: '100%', height: '600px', objectFit: 'cover' }} // Set fixed height and preserve aspect ratio
                />
            </Grid>
        </Grid>
    );
}

export default EventSlider;
