import { Box, Typography } from "@mui/material";
import React from "react";
import PatientList from "../components/PatientList";

const Doctor = () => {
  return (
    <>
      <Box sx={{ m:4,width: "7rem", bgcolor: "primary.light", borderRadius: 5 }}>
        <Box
          sx={{color:"white",display:"inline-block",mr:1, p: 1, bgcolor: "primary.dark", borderRadius: 5 }}
        >
          9+
        </Box>
        <Typography variant="body1" sx={{display:"inline"}}>Patients</Typography>
        
      </Box>
      <PatientList />
    </>
  );
};

export default Doctor;
