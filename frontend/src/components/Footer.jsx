import { Container, Link } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container maxWidth="false" disableGutters sx={{ position: "relative",bgcolor:"primary.dark", height: "min(10rem,15vh)" }}>
      <Container
     
        maxWidth="false"
        sx={{
          borderTop: "2px solid #474E68 ",
          position: "absolute",
          bottom:0,
          mx:"auto",
          mb:3,
          pt:5,
          textAlign: "center",
          color:"primary.contrastText"
        }}
      >
        Made With ❤ by{" "}
        <Link sx={{color:"inherit"}} href="https://github.com/shinjith-dev/HealthX">HealthX</Link>
      </Container>
    </Container>
  );
};

export default Footer;
