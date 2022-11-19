import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import CurrentDate from "../components/Date";
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
        <Typography variant="body1" sx={{ px: 2 }}>
          <CurrentDate />
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
      <Box>
      Genereated Report 
        <Link textAlign="center" href="#" color="inherit">
            <br></br>View
        </Link>
      </Box>
      <Container>
        <BasicCard />
      </Container>
    </Container>
  );
};
export default PatientProfile;
