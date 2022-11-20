import { Box, Chip, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import PatientList from "../components/PatientList";

const Doctor = () => {
  const [availability, setAvailability] = useState({
    days: [false, true, true, false, true, true, false],
    sessions: [true, true],
  });

  const handleDayClick = (day) => {
    const prevValue = availability.days;
    prevValue[day] = !prevValue[day];
    setAvailability((prev) => ({ ...prev, days: prevValue }));
  };

  const handleSessionClick = (session) => {
    const prevValue = availability.sessions;
    prevValue[session] = !prevValue[session];
    setAvailability((prev) => ({ ...prev, sessions: prevValue }));
  };

  return (
    <>
      <Box
        sx={{
          m: 4,
          width: "8.5rem",
          bgcolor: "primary.light",
          fontWeight: 500,
          boxShadow: 2,
          borderRadius: 1,
        }}
      >
        <Box
          sx={{
            color: "white",
            display: "inline-block",
            mr: 1,
            p: 1,
            fontSize: "1.2rem",
            bgcolor: "primary.dark",
            borderRadius: 1,
          }}
        >
          9+
        </Box>
        <Typography variant="h6" sx={{ display: "inline" }}>
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
            sx={{ px: 2, py: 1, bgcolor: "primary.dark",color:"primary.contrastText" }}
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
              onClick={() => handleDayClick(0)}
            />
            <Chip
              label="Monday"
              sx={{ mx: 1, fontWeight: 500 }}
              variant={`${availability.days[1] ? "filled" : "outlined"}`}
              color="primary"
              onClick={() => handleDayClick(1)}
            />
            <Chip
              label="Tuesday"
              sx={{ mx: 1, fontWeight: 500 }}
              variant={`${availability.days[2] ? "filled" : "outlined"}`}
              color="primary"
              onClick={() => handleDayClick(2)}
            />
            <Chip
              label="Wednesday"
              sx={{ mx: 1, fontWeight: 500 }}
              variant={`${availability.days[3] ? "filled" : "outlined"}`}
              color="primary"
              onClick={() => handleDayClick(3)}
            />
            <Chip
              label="Thursday"
              sx={{ mx: 1, fontWeight: 500 }}
              variant={`${availability.days[4] ? "filled" : "outlined"}`}
              color="primary"
              onClick={() => handleDayClick(4)}
            />
            <Chip
              label="Friday"
              sx={{ mx: 1, fontWeight: 500 }}
              variant={`${availability.days[5] ? "filled" : "outlined"}`}
              color="primary"
              onClick={() => handleDayClick(5)}
            />
            <Chip
              label="Saturday"
              sx={{ mx: 1, fontWeight: 500 }}
              variant={`${availability.days[6] ? "filled" : "outlined"}`}
              color="primary"
              onClick={() => handleDayClick(6)}
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
              sx={{ mx: 1, fontWeight: 500 }}
              variant={`${availability.sessions[0] ? "filled" : "outlined"}`}
              color="primary"
              onClick={() => handleSessionClick(0)}
            />
            <Chip
              label="Afternoon"
              sx={{ mx: 1, fontWeight: 500 }}
              variant={`${availability.sessions[1] ? "filled" : "outlined"}`}
              color="primary"
              onClick={() => handleSessionClick(1)}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Doctor;
