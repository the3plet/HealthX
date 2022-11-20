import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from '@mui/system';
import { useNavigate } from "react-router-dom";




const Header = () => {
  const navigate = useNavigate()

  const handleLogoClick = ()=>{
    navigate('/')
  }
  return (
    <AppBar position="static" sx={{bgcolor:"primary.main"}}>
      <Container maxWidth="lg">
      <Toolbar >
          <Typography
            variant="h4"
            color="inherit"
            component="div"
            sx={{flexGrow:1}}
            onClick={handleLogoClick}
          >
            HealthX
          </Typography>
      </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
