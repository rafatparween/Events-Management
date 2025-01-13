
import React from "react";
import { Box, TextField, Button, Grid, Typography } from "@mui/material";

function SliderBar() {
  return (
    <>
    <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Typography variant="body1">Valentine's Day</Typography>
          <Typography variant="body1">Baby</Typography>
          <Typography variant="body1">Kids' Birthday</Typography>
          <Typography variant="body1">Wedding</Typography>
          <Typography variant="body1">Parties</Typography>
        </Box>
      </Box>
    <Box
      sx={{
        position: "relative", 
        top: 0,
        left: 0,
        width: "100vw", 
        height: "769px",
        backgroundImage:
          "url('https://cdn.prod.website-files.com/61c4debfe6329744f06c60e1/6772ef33a69d88d03be6af22_valentines-day_hero-background-p-2000.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0, 
        padding: 0, 
      }}
    >
      {/* Search Input */}
      <TextField
        placeholder="Search designs, themes or categories"
        variant="outlined"
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          width: "40%",
          mb: 4,
        }}
      />

      {/* Headline */}
      <Typography
        variant="h3"
        sx={{
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
          mb: 3,
        }}
      >
        For <em>every</em> kind of love language
      </Typography>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 4,
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{
            backgroundColor: "black",
            padding: "10px 20px",
          }}
        >
          Valentine's Day Invitations
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            backgroundColor: "black",
            padding: "10px 20px",
          }}
        >
          Galentine's Day Invitations
        </Button>
      </Box>

      {/* Images Section */}
      <Grid container spacing={2} sx={{ width: "80%", justifyContent: "center" }}>
        {/* Left Image */}
        <Grid item xs={12} sm={4}>
          <Box
            component="img"
            src="/wedding.jpg"
            sx={{ width: "100%", borderRadius: 2 }}
          />
        </Grid>
        {/* Center Image */}
        <Grid item xs={12} sm={4}>
          <Box
            component="img"
            src="/Bannerbirthdaytwo.jpg"
            sx={{ width: "100%", borderRadius: 2 }}
          />
        </Grid>
        {/* Right Image */}
        <Grid item xs={12} sm={4}>
          <Box
            component="img"
            src="/Bannerbirthdaythree.jpg"
            sx={{ width: "100%", borderRadius: 2 }}
          />
        </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default SliderBar;



