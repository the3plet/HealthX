import React from "react";
import {
  Box,

  Container,
  Typography,
  Link,
} from "@mui/material";

import BasicCard from "../components/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const patient = [
  { avatar: null, name: "Name" },
];

const PatientProfile = () => {
  return (
    <Container fluid>
      <Container fluid>
        <Typography variant="h5" sx={{ fontWeight: 500, mt: 1, p: 1, pb: 0 }}>
          Health OverView Report
        </Typography>
      </Container>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <AccountCircleIcon sx={{ width: "8rem", height: "8rem", mr: 1 }} />
        {patient.name}
      </span>
      <Typography textAlign="center">Patient Name</Typography>
      <Typography textAlign="center">Age:24</Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Link textAlign="center" href="#" color="inherit">
          <br></br>View Report
        </Link>
      </Box>
      <Container>
        <BasicCard />
      </Container>
    </Container>
  );
};
export default PatientProfile;
