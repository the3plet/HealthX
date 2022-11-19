import React from 'react';
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import { color } from '@mui/system';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
    <Card sx={{ minWidth: 275, backgroundColor: "#eeeeee",mt:"10px" }}>
      <CardContent>
        <TableContainer>
          <Table sx={{ minWidth: 500 }}>
            <TableHead >
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
  );
}
