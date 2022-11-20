import React from "react";
import { Typography, Container, Box, TextField, Button } from "@mui/material";

export default function BasicCard() {
  return (
    <Container>
      <Box
        sx={{
          m: 1,
          width: "100%",
          height: 150,
          backgroundColor: "#E7F6F2",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h6" sx={{ p: 1 }}>
          Prescription
        </Typography>
        <TextField
          fullWidth
          width="50"
          alignItems="+"
          variant="standard"
          id="outlined-basic"
          label="Text"
        />
        <Button
          variant="contained"
          sx={{ display: "flex", flexDirection: "column", m: 1 }}
        >
          Save
        </Button>
      </Box>
    </Container>
  );
}
