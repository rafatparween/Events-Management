import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";

// const products = [
//   {
//     category: "Best Seller Birthday Decorations",
//     items: [
//       { image: "/productone.jpg", title: "Lighings" },
//       { image: "/producttwo.jpg", title: "House Warming" },
//       { image: "/sunflower.jpg", title: "Naming Ceremony" },
//       { image: "/producthappy.jpg", title: "Birthdays Planning" },
//     ],
//   },
//   {
//     category: "Welcome your Baby",
//     items: [
//       { image: "/producthaldi.jpg", title: "Half Saree" },
//       { image: "/productbirthday.jpg", title: "Corporate Events" },
//       { image: "/kattudhoti.jpg", title: "Dhoti Panche Kattu" },
//       { image: "/furniture.jpg", title: "Furniture" },
//     ],
//   },
//   {
//     category: "Welcome your Baby",
//     items: [
//       { image: "/franchise.jpg", title: "PAN India Franchise" },
//       { image: "/evening.jpg", title: "Canopy Furniture" },
//       { image: "/christian.jpg", title: "Event of Christians" },
//       { image: "/chiller.jpg", title: "Open Weddings" },
//     ],
//   },
// ];

const products = [
  {
    category: "Best Seller Birthday Decorations",
    items: [
      { image: "/wsix.jpeg", title: "Lighings" },
      { image: "/wtwo.jpeg", title: "Birthday" },
      { image: "/wseven.jpeg", title: "Naming Ceremony" },
      { image: "/weight.jpeg", title: "Birthdays Planning" },
    ],
  },
  {
    category: "Welcome to Birthday Party",
    items: [
      { image: "/weleven.jpeg", title: "Birthday Party" },
      { image: "/wthree.jpeg", title: "Cheers to 70 years" },
      { image: "/wfour.jpeg", title: "Cedar" },
      { image: "/wnine.jpeg", title: "Amyra's Birthday" },
    ],
  },
  {
    category: "Welcome to Birthday Party",
    items: [
      { image: "/wfiveteen.jpeg", title: "Birthday" },
      { image: "/wfourteen.jpeg", title: "Cheers to 50 years" },
      { image: "/wone.jpeg", title: "Birthday" },
      { image: "/wseventeen.jpeg", title: "Birthday Decoration" },
    ],
  },
  // {
  //   category: "Welcome to Birthday Party",
  //   items: [
  //     { image: "/wtherteen.jpeg", title: "Birthday" },
  //     { image: "/wfive.jpeg", title: "Cheers to 50 years" },
  //     { image: "/wone.jpeg", title: "Birthday" },
  //     { image: "/wseventeen.jpeg", title: "Birthday Decoration" },
  //   ],
  // },
];

const ProductSection = () => {
  return (
    <Box sx={{ maxWidth: "1200px", margin: "auto", padding: 2 }}>
      {products.map((section, index) => (
        <Box key={index} sx={{ marginBottom: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1.2rem", color: "#333" }}>
              {section.category}
            </Typography>
            <Button variant="text" sx={{ color: "#E5097F", fontWeight: "bold", fontSize: "1rem" }}>
              View All
            </Button>
          </Box>
          <Grid container spacing={2}>
            {section.items.map((item, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card
                  sx={{
                    width: 281, 
                    height: 330, 
                    borderRadius: 2,
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
                    height="275" 
                    width="100%"  
                    image={item.image}
                    alt={item.title}
                    sx={{ objectFit: "cover" }}  
                  />
                  <CardContent sx={{ padding: 2 }}>
                    <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "1rem", color: "#333" }}>
                      {item.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default ProductSection;
