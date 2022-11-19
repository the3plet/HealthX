import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Stack } from '@mui/system';


const Home = () => {
  return (
    <>
      <Container maxWidth="false" sx={{ bgcolor: "#cfe8fc", height: "40vh" }}>
        Data
      </Container>
      <Box sx={{ backgroundColor: "Blue" }}>
        <Stack direction="row" spacing={2} sx={{py:2, display:"flex", justifyContent:"center"}}>
          <Button variant="contained">Item 1</Button>
          <Button variant="contained">Item 2</Button>
        </Stack>
      </Box>
    </>
  );
}

export default Home