import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  List,
  ListItem,
} from "@mui/material";
import db from "../utils/mongo";
import BasicCard from "../components/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const PatientProfile = () => {
  const [patient, setPatient] = useState({});
  useEffect(() => {
    db.getPatient("6379a1040a496ff65da23da0").then((res) => {
      const info = { ...res };
      switch (info.smoking) {
        case 0:
          info.smoking = `Maintain This lifestyle`;
          break;
        case 1:
          info.smoking = `Follow healthy practices quit smoking`;
          break;
        case 2:
          info.smoking = `Risc of cardiac arrest`;
          break;
        default:
          info.smoking = `Not Assigned`;
      }
      switch (info.alcohol) {
        case 0:
          info.alcohol = `Maintain This lifestyle`;
          break;
        case 1:
          info.alcohol = `Increase in BP`;
          break;
        case 2:
          info.junkFood = `High risc of obesity`;
          break;
        default:
          info.junkFood = `Not Assigned`;
      }
      info.bmi = info.weight / (info.height * info.height);
      setPatient(info);
    });
  }, [setPatient]);

  console.log(patient);

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
      <Box>
        Genereated Report
        <Link textAlign="center" href="#" color="inherit">
          <br></br>View
        </Link>
      </Box>
      <Container>
        <BasicCard />
        <List>
          <ListItem>
            <span style={{ display: "flex", alignItems: "center" }}>
              <AccountCircleIcon
                sx={{ width: "2rem", height: "2rem", mr: 1 }}
              />

              {patient.smoking}
            </span>
          </ListItem>
          <ListItem>
            <span style={{ display: "flex", alignItems: "center" }}>
              <AccountCircleIcon
                sx={{ width: "2rem", height: "2rem", mr: 1 }}
              />
              <Typography variant="subtitle1">
                Alcohol: {patient.alcohol}
              </Typography>
            </span>
          </ListItem>
          <ListItem>
            <span style={{ display: "flex", alignItems: "center" }}>
              <AccountCircleIcon
                sx={{ width: "2rem", height: "2rem", mr: 1 }}
              />
              <Typography variant="subtitle1">
                BMI: {patient.bmi}
              </Typography>
            </span>
          </ListItem>
        </List>
      </Container>
    </Container>
  );
};
export default PatientProfile;
