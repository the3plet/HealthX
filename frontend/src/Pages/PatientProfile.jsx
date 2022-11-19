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
} from "@mui/material";
import { blue } from "@mui/material/colors";
import CurrentDate from "../components/Date";
import BasicCard from "../components/Card";

const PatientProfile = () => {
  return (
    <Container fluid>
      <Container fluid>
        <Typography variant="h5" sx={{ fontWeight: 500, mt: 1, p: 1,pb:0 }}>
          Health OverView Report
        </Typography>
        <Typography variant="body1" sx={{ px: 2 }}>
          <CurrentDate />
        </Typography>
      </Container>
      <Container>
        <BasicCard/>
      </Container>
    </Container>
  );
};
export default PatientProfile;
