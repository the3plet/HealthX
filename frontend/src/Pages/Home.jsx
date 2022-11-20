import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Banner from "../components/Banner";
import loginHelper from "../utils/loginHelper";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Snackbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import patientIllu from "../images/patient_illu.png";
import doctorIllu from "../images/doctor_illu.png";


const Home = () => {
  const [dialog, setDialog] = useState({ open: false, type: "patient" });
  const [snack, setSnack] = useState({ open: false, message: "" });

  const navigate = useNavigate();

  const handlePatientLogin = () => {
    setDialog({ open: true, type: "patient" });
  };

  const handleDoctorLogin = () => {
    setDialog({ open: true, type: "doctor" });
  };

  const handleClose = () => {
    setDialog(false);
  };

  const handleSnackClose = () => {
    setSnack(false);
  };

  const handleLogin = () => {
    const userEl = document.getElementById("user-id");
    const passwdEl = document.getElementById("passwd-id");
    if (dialog.type === "patient") {
      if (loginHelper.loginPatient(userEl.value, passwdEl.value)) {
        setSnack({ open: true, message: "Logged in successfully!" });
        navigate("/patientdata");
      } else setSnack({ open: true, message: "Failed to login!" });
    } else if (dialog.type === "doctor") {
      if (loginHelper.loginDoctor(userEl.value, passwdEl.value)) {
        setSnack({ open: true, message: "Logged in successfully!" });
        navigate("/doctor");
      } else setSnack({ open: true, message: "Failed to login!" });
    }

    setDialog(false);
  };

  return (
    <Container fluid disableGutters maxWidth="false">
      <Banner />
      <Box sx={{ px: 2,py:4 }}>
        <Stack
          direction="row"
          spacing={4}
          sx={{ py: 2, display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{ maxWidth: 300, border: 2, borderColor: "secondary.main" }}
          >
            <CardMedia component="img" src={patientIllu} sx={{width:"10rem",ml:1}} height={250} />
            <CardContent>
              <Typography variant="body1" sx={{ my: 1, mb: 2 }}>
                Get time to time updates and medication
              </Typography>
              <Button variant="contained" color="secondary" onClick={handlePatientLogin}>
                Login as Patient
              </Button>
            </CardContent>
          </Card>
          <Card
            sx={{ maxWidth: 300, border: 2, borderColor: "secondary.main" }}
          >
            <CardMedia component="img" src={doctorIllu} sx={{width:"10rem",mx:"auto"}} height={250} />
            <CardContent>
              <Typography variant="body1" sx={{ my: 1, mb: 2 }}>
                Manage Payments and Track Patient Records{" "}
              </Typography>
              <Button variant="contained" color="secondary" onClick={handleDoctorLogin}>
                Login as Doctor
              </Button>
            </CardContent>
          </Card>
        </Stack>
      </Box>

      <Dialog open={dialog.open} onClose={handleClose}>
        <DialogTitle>HealthX Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Use your registered User ID and Password
          </DialogContentText>
          <TextField
            id="user-id"
            margin="dense"
            label="User ID"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="passwd-id"
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleLogin}>Login</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        severity="info"
        open={snack.open}
        autoHideDuration={3000}
        onClose={handleSnackClose}
        message={snack.message}
      />
    </Container>
  );
};

export default Home;
