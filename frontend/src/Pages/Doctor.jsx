import { Box, Chip, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import PatientList from "../components/PatientList";

const Doctor = () => {
  const [availability, setAvailability] = useState({
    days: [false, true, true, false, true, true, false],
    sessions: [false, true],
  });

  return (
    <>
      <Box
        sx={{ m: 4, width: "7rem", bgcolor: "primary.light", borderRadius: 5 }}
      >
        <Box
          sx={{
            color: "white",
            display: "inline-block",
            mr: 1,
            p: 1,
            bgcolor: "primary.dark",
            borderRadius: 5,
          }}
        >
          9+
        </Box>
        <Typography variant="body1" sx={{ display: "inline" }}>
          Patients
        </Typography>
      </Box>
      <PatientList />
      <Container maxWidth="lg">
        <Box
          sx={{
            mx: 1,
            my: 4,
            borderRadius: 2,
            border: 1,
            borderColor: "darkgray",
            boxShadow: 4,
            overflow: "hidden",
          }}
        >
          <Typography
            variant="h6"
            sx={{ px: 2, py: 1, bgcolor: "primary.light" }}
          >
            Your Availability for Patients
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              p: 1,
              mt: 1,
            }}
          >
            <Typography variant="body1">Days:</Typography>
            <Chip
              label="Sunday"
              sx={{ mx: 1, fontWeight: 500 }}
              variant={`${availability.days[0] ? "filled" : "outlined"}`}
              color="primary"
            />
            <Chip
              label="Monday"
              sx={{ mx: 1, fontWeight: 500 }}
              variant={`${availability.days[1] ? "filled" : "outlined"}`}
              color="primary"
            />
            <Chip
              label="Tuesday"
              sx={{ mx: 1, fontWeight: 500 }}
              variant={`${availability.days[2] ? "filled" : "outlined"}`}
              color="primary"
            />
            <Chip
              label="Wednesday"
              sx={{ mx: 1, fontWeight: 500 }}
              variant={`${availability.days[3] ? "filled" : "outlined"}`}
              color="primary"
            />
            <Chip
              label="Thursday"
              sx={{ mx: 1, fontWeight: 500 }}
              variant={`${availability.days[4] ? "filled" : "outlined"}`}
              color="primary"
            />
            <Chip
              label="Friday"
              sx={{ mx: 1, fontWeight: 500 }}
              variant={`${availability.days[5] ? "filled" : "outlined"}`}
              color="primary"
            />
            <Chip
              label="Saturday"
              sx={{ mx: 1, fontWeight: 500 }}
              variant={`${availability.days[6] ? "filled" : "outlined"}`}
              color="primary"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              p: 1,
              mb: 1,
            }}
          >
            <Typography variant="body1">Sessions:</Typography>
            <Chip
              label="Forenoon"
              sx={{ mx: 1, fontWeight: 500}}
              variant={`${availability.sessions[0] ? "filled" : "outlined"}`}
              color="primary"
            />
            <Chip
              label="Afternoon"
              sx={{ mx: 1, fontWeight: 500}}
              variant={`${availability.sessions[1] ? "filled" : "outlined"}`}
              color="primary"
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Doctor;
