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
import { Snackbar } from "@mui/material";

const Home = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snack, setSnack] = useState({ open: false, message: "" });

  const handleLoginClick = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleSnackClose = () => {
    setSnack(false);
  };

  const handleLogin = () => {
    const userEl = document.getElementById("user-id");
    const passwdEl = document.getElementById("passwd-id");
    if (!loginHelper.login(userEl.value, passwdEl.value))
      setSnack({ open: true, message: "Failed to login!" });
    else setSnack({open:true,message:"Logged in successfully!"});
  };

  return (
    <>
      <Banner />
      <Box sx={{ backgroundColor: "Blue" }}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ py: 2, display: "flex", justifyContent: "center" }}
        >
          <Button variant="contained" onClick={handleLoginClick}>
            Patient
          </Button>
          <Button variant="contained" onClick={handleLoginClick}>
            Doctor
          </Button>
        </Stack>
      </Box>

      <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogTitle>HealthX Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Use your registered User ID and Password
          </DialogContentText>
          <TextField
            autoFocus
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
    </>
  );
};

export default Home;
