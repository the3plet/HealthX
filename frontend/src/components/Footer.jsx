import { Container } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container 
    sx={{position:"relative" ,height:"4rem"}}
    
    ><Container maxWidth="lg"
      sx={{
        borderTop: "2px solid #474E68 ",
        position: "absolute",
        bottom: 5,
      textAlign: "center",
      }}
    >
      Made with 💓 by{" "}
      <a href="https://github.com/shinjith-dev/HealthX">HealthX</a>
    </Container>
    </Container>
  );
};

export default Footer;
