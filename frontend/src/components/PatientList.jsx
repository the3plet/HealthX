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
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const patients = [
  { avatar: null, name: "Rajesh" },
  { avatar: null, name: "Kiran" },
  { avatar: null, name: "Sebastian" },
];

const PatientList = () => {
  return (
    <Container fluid sx={{ my: 1, p: 1 }} maxWidth="md">
      <TableContainer>
        <Table sx={{ minWidth: 500 }}>
          <TableHead>
            <TableRow>
              <Typography variant="h6">Patient Tracker</Typography>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient) => {
              return (
                <TableRow key={patient.name}>
                  <TableCell sx={{ py: 1, px: 1 }}>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <AccountCircleIcon
                        sx={{ width: "2rem", height: "2rem", mr: 1 }}
                      />
                      {patient.name}
                    </span>
                  </TableCell>
                  <TableCell  align="right">
                    <Button variant="contained" sx={{mr:1}}>View Report</Button>
                    <Button variant="text">Patient Info</Button>
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
