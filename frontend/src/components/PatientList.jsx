import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Db from "../utils/mongo";
import { useNavigate } from "react-router-dom";

const PatientList = () => {
  const [patients, setPatients] = useState([{ name: "no-name" }]);
const navigate = useNavigate()
  useEffect(() => {
    Db.getAllPatients().then((res) => setPatients(res));
  }, []);

const handleInfoClick = (id)=>{
navigate(`/patient/${id}`)
}
  return (
    <Container
      sx={{
        my: 1,
        border: 1,
        borderRadius: 2,
        padding: "0 !important",
        borderColor: "darkgray",
        boxShadow: 4,
        overflow: "hidden",
      }}
      maxWidth="md"
    >
      <TableContainer>
        <Table sx={{ minWidth: 500 }}>
          <TableHead sx={{ bgcolor: "primary.dark" }}>
            <TableRow>
              <TableCell colSpan={2}>
                <Typography sx={{color:"primary.contrastText"}} variant="h6">Your Patients</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient) => {
              return (
                <TableRow key={patient.name} onClick={()=>{handleInfoClick(patient.id)}}>
                  <TableCell sx={{ py: 1, px: 1 }}>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <AccountCircleIcon
                        sx={{ width: "2rem", height: "2rem", mx: 1 }}
                      />
                      <Typography variant="body1">{patient.name}</Typography>
                    </span>
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="outlined" sx={{ mr: 1 }}>
                      Prescription
                    </Button>
                    <Button variant="contained" sx={{ mr: 1 }}>
                      View Report
                    </Button>
                    <Button variant="outlined">Patient Info</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PatientList;
