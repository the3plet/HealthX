import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";




const Header = () => {
  return (
    <AppBar position="static" >
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
    </AppBar>
  );
}

export default Header