import React from "react";
import { Box, Grid, Card, CardMedia } from "@mui/material";

const products = [
  {
    category: "Best Seller Birthday Decorations",
    items: [
      { image: "/one.webp" },
      { image: "/two.webp" },
      { image: "/three.webp" },
      { image: "/four.webp" },
    ],
  },
  {
    category: "Welcome your Baby",
    items: [
      { image: "/five.webp" },
      { image: "/six.webp" },
      { image: "/seven.webp" },
      { image: "/eight.webp" },
    ],
  },
];

const SomeContent = () => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "auto",
        padding: 3,
        marginTop: { xs: "-769px", sm: "-400px", lg: "-326px" }, // Responsive marginTop
      }}
    >
      {products.map((section, index) => (
        <Box key={index} sx={{ marginBottom: 5 }}>
          <Grid container spacing={3}>
            {section.items.map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 4,
                    overflow: "hidden",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    boxShadow: 3,
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt="Event image"
                    sx={{
                      objectFit: "cover",
                    }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default SomeContent;
