import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{ bgcolor: "#cfe8fc", height: "80vh", mt: 4 }}
      >
        <Typography
          variant="h1"
          gutterBottom
          sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}
        >
          Failed To Login
        </Typography>
        <Link href="#">Return To Home Page</Link>
      </Container>
    </React.Fragment>
  );
}
