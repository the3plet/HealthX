import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
  Box,
  TextField,
  Button,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { borderRadius } from "@mui/system";

const patients = [
  { avatar: null, name: "Smoking Bool" },
  { avatar: null, name: "Alcohol Bool" },
  { avatar: null, name: "BMI" },
  { avatar: null, name: "Health Risk" },
  { avatar: null, name: "Diet" },
  { avatar: null, name: "Activity" },
];

export default function BasicCard() {
  return (
    <Container>
      <Card sx={{ minWidth: 275, backgroundColor: "#eeeeee", mt: "10px" }}>
        <CardContent>
          <TableContainer>
            <Table sx={{ minWidth: 500 }}>
              <TableHead>
                <TableRow>
                  <Typography variant="h6">Report</Typography>
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
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
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
          Suggestions
        </Typography>
        <TextField
            
          width="50"
          alignItems="+"
          variant="standard"
          id="outlined-basic"
          label="Text"
        />
        <Button  size="small" variant="contained"
        sx={{display:"flex", flexDirection:"column", m:1}}>Save</Button>
      </Box>
    </Container>
  );
}
