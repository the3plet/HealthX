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
import { useParams } from "react-router-dom";

const PatientProfile = () => {
  const params = useParams();
  const [patient, setPatient] = useState({});

  useEffect(() => {
    db.getPatient(params.id).then((res) => {
      const info = { ...res };
      switch (info.smoking) {
        case 0:
          info.smoking = `Maintain This lifestyle`;
          break;
        case 1:
          info.smoking = `Follow healthy practices quit smoking`;
          break;
        case 2:
          info.smoking = `Risk of cardiac arrest`;
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
          info.alcohol = "Quit drinking, Risk of liver damage";
          break;
        default:
          info.smoking = `Not Assigned`;
      }
      switch (info.junkFood) {
        case 0:
          info.alcohol = `Maintain This lifestyle`;
          break;
        case 1:
          info.junkFood = "High cholestrol and cardiac problems";
          break;
        case 2:
          info.junkFood = `High risk of obesity`;
          break;
        default:
          info.junkFood = `Not Assigned`;
      }
      info.bmi = info.weight / (info.height * info.height);
      setPatient(info);
    });
  }, [setPatient,params.id]);

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
        <Typography textAlign="center">Age: {patient.age}</Typography>
        <Typography textAlign="center">Gender: {patient.gender}</Typography>
      </span>
      <Box pt="10px" textAlign="center">
        Genereated Report
        <Link textAlign="center" href="#" color="inherit">
          <br></br>View
        </Link>
      </Box>
      <Container>
        <List>
          <ListItem>
            <span style={{ display: "flex", alignItems: "center" }}>
              <AccountCircleIcon
                sx={{ width: "2rem", height: "2rem", mr: 1 }}
              />
              Smoking: {patient.smoking}
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
              <Typography variant="subtitle1">BMI: {patient.bmi}</Typography>
            </span>
          </ListItem>
          <ListItem>
            <span style={{ display: "flex", alignItems: "center" }}>
              <AccountCircleIcon
                sx={{ width: "2rem", height: "2rem", mr: 1 }}
              />
              <Typography variant="subtitle1">
                Junk Food Consumpton: {patient.junkFood}
              </Typography>
            </span>
          </ListItem>
          <ListItem>
            <span style={{ display: "flex", alignItems: "center" }}>
              <AccountCircleIcon
                sx={{ width: "2rem", height: "2rem", mr: 1 }}
              />
              <Typography variant="subtitle1">
                {" Recommended diet plan: <upcoming feature>"}
              </Typography>
            </span>
          </ListItem>
        </List>
        <BasicCard />
      </Container>
    </Container>
  );
};
export default PatientProfile;
