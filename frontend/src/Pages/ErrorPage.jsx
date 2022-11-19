import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { textAlign } from "@mui/system";
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
          Page Not Found 404
        </Typography>
        <Link href="#">Return To Home Page</Link>
      </Container>
    </React.Fragment>
  );
}
