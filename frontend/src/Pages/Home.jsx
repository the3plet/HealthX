import React, { useState } from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Stack } from '@mui/system';
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


const Home = () => {
  const [dialogOpen,setDialogOpen]=useState(false)
   const handleLoginClick = () => {
     setDialogOpen(true);
   };

   const handleClose = () => {
     setDialogOpen(false);
   };
  return (
    <>
      <Container maxWidth="false" sx={{ bgcolor: "#cfe8fc", height: "40vh" }}>
        Data
      </Container>
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
            Use your registered Email id and Password
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Login</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Home