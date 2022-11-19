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
} from "@mui/material";
import { dblClick } from "@testing-library/user-event/dist/click";
import React from "react";

const Patient = () => {
 
  return (
    <Container maxWidth="lg">
      <Container fluid>
        <Typography variant="h5" sx={{ fontWeight: 500, mt: 1, p: 1 }}>
          Patient Detail Quota
        </Typography>
        <Typography variant="body1" sx={{ px: 2 }}>
          We provide upto date suggestions and treatment plans,
        </Typography>
        <Typography variant="body1" sx={{ px: 2 }}>
          tell us about your health status to receive our perks.
        </Typography>
      </Container>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Card
          variant="outlined"
          sx={{
            m: 3,
            p: 1,
            pb: 2,
            flexGrow: 1,
            border: 1,
            borderRadius: "10px",
            borderColor: "darkgrey",
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              TELL US ABOUT YOU
            </Typography>
            <Stack
              gap={2}
              direction="row"
              sx={{
                width: "100%",
                display: "flex",
                mt: 2,
                justifyContent: "space-evenly",
              }}
            >
              <TextField
                label="Name"
                variant="standard"
                color="primary"
                sx={{ my: 2, flexGrow: 0.4 }}
              />
              <TextField
                label="Age"
                variant="standard"
                color="primary"
                sx={{ my: 2, flexGrow: 0.4 }}
              />
            </Stack>
            <Stack
              gap={2}
              direction="row"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <TextField
                label="Email"
                variant="standard"
                color="primary"
                sx={{ my: 2, flexGrow: 0.4 }}
              />
              <TextField
                label="Phone"
                variant="standard"
                color="primary"
                sx={{ my: 2, flexGrow: 0.4 }}
              />
            </Stack>
            <Stack
              gap={2}
              direction="row"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                mb: 2,
              }}
            >
              <TextField
                label="Sex"
                variant="standard"
                color="primary"
                sx={{ my: 2, flexGrow: 0.4 }}
              />
              <TextField
                label="Place"
                variant="standard"
                color="primary"
                sx={{ my: 2, flexGrow: 0.4 }}
              />
            </Stack>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              ADD MORE INFO
            </Typography>
            <Stack
              gap={2}
              direction="row"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                mb: 2,
              }}
            >
              <FormControl
                variant="standard"
                fullWidth
                sx={{ my: 2, flexGrow: 0.4 }}
              >
                <InputLabel>Do you smoke?</InputLabel>
                <Select label="Do you smoke?">
                  <MenuItem value={10}>No</MenuItem>
                  <MenuItem value={20}>Passively (1-3 times a week)</MenuItem>
                  <MenuItem value={30}>Actively (6-7 times a week)</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                variant="standard"
                fullWidth
                sx={{ my: 2, flexGrow: 0.4 }}
              >
                <InputLabel>Do you consume alcohol?</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Stack
              gap={2}
              direction="row"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                mb: 2,
              }}
            >
              <FormControl
                variant="standard"
                fullWidth
                sx={{ my: 2, flexGrow: 0.4 }}
              >
                <InputLabel>Do you smoke?</InputLabel>
                <Select label="Do you smoke?">
                  <MenuItem value={0}>Nope</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                variant="standard"
                fullWidth
                sx={{ my: 2, flexGrow: 0.4 }}
              >
                <InputLabel>Do you consume alcohol?</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Container sx={{ width: "100%", display: "flex" }}>
              <Button variant="contained" sx={{ mx: "auto" }}>
                Update
              </Button>
            </Container>
          </CardContent>
        </Card>
        <Box sx={{ mx: 3 }}>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Need help?
          </Typography>
          <Box
            sx={{ borderRadius: "15px", bgcolor: "primary.dark", px: 3, py: 1 }}
          >
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "lightgrey" }}
            >
              24x7
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ textAlign: "center", color: "lightgrey" }}
            >
              Assitance
            </Typography>
          </Box>
        </Box>

      </Box>
    </Container>
  );
};

export default Patient;
