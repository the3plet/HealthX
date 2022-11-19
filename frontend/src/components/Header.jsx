import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from '@mui/system';




const Header = () => {


  return (
    <AppBar position="static" >
      <Container maxWidth="lg">
      <Toolbar >
          <Typography
            variant="h4"
            color="inherit"
            component="div"
            sx={{flexGrow:1}}
          >
            HealthX
          </Typography>
      </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
