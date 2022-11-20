import { Container, Typography } from '@mui/material'
import React from 'react'
import CardMedia from "@mui/material/CardMedia";

const Banner = () => {
  return (
    <Container maxWidth="false" sx={{ bgcolor: "#cfe8fc", height: "40vh" }}>
      <Typography>A Healthy life is Within Reach</Typography>
      <CardMedia
        component="img"
        height="194"
        image="frontend\public\banner.png"
        alt="Paella dish"
      />
    </Container>
  );
}

export default Banner