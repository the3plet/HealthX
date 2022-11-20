import { Box,  Container, Stack, Typography } from "@mui/material";
import React from "react";
import doctorImage from "../images/doctor_image.png";

const Banner = () => {
  return (
    <Container
    maxWidth="false"
      fluid="true"
      disableGutters
      id="banner-bg"
      sx={{ width: "100vw !important", height: "max(30rem,40vh)" }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", height: "100%" }}>
        <Box sx={{ display: "inline-block", height: "100%" }}>
          <Stack
            direction={"column"}
            sx={{ justifyContent: "center", height: "100%" }}
          >
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              Wecome to HealthX
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 300 ,ml:1}}>
              A Healthy Life is Within Reach
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: "3rem",
            bottom: 0,
            width: "20rem",
          }}
        >
          <img
            alt="banner-img"
            src={doctorImage}
            style={{ objectfit: "contain",width: "20rem" }}
          />
        </Box>
      </Container>
    </Container>
  );
};

export default Banner;
