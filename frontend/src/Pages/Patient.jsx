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
import React, {  useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import db from "../utils/mongo";
const Patient = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: 21,
    email: "",
    phone: "",
    gender: "female",
    place: "",
    height:0,
    weight:0,
    smoking: 0,
    alcohol: 0,
    junkFood: 0,
    activity: 0,
  });

  const handleNameChange = (e) => {
    setFormData((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleAgeChange = (e) => {
    setFormData((prev) => ({ ...prev, age: e.target.value }));
  };

  const handleEmailChange = (e) => {
    setFormData((prev) => ({ ...prev, email: e.target.value }));
  };

  const handlePhoneChange = (e) => {
    setFormData((prev) => ({ ...prev, phone: e.target.value }));
  };

  const handleGenderChange = (e) => {
    setFormData((prev) => ({ ...prev, gender: e.target.value }));
  };

  const handlePlaceChange = (e) => {
    setFormData((prev) => ({ ...prev, place: e.target.value }));
  };

  const handleSmokingChange = (e) => {
    setFormData((prev) => ({ ...prev, smoking: e.target.value }));
  };
  const handleAlcoholChange = (e) => {
    setFormData((prev) => ({ ...prev, alcohol: e.target.value }));
  };

  const handleJunkFoodChange = (e) => {
    setFormData((prev) => ({ ...prev, junkFood: e.target.value }));
  };

  const handleActivityChange = (e) => {
    setFormData((prev) => ({ ...prev, activity: e.target.value }));
  };

  const handleWeightChange = (e) => {
    setFormData((prev) => ({ ...prev, weight: e.target.value }));
  };

  const handleHeightChange = (e) => {
    setFormData((prev) => ({ ...prev, height: e.target.value }));
  };

  const onFormSubmit = () => {
    db.newPatient(formData).then();
    setFormData({
      name: "",
      age: 0,
      email: "",
      phone: "",
      height:0,
      weight:0,
      gender: "female",
      place: "",
      smoking: 0,
      alcohol: 0,
      junkFood: 0,
      activity: 0,
    });
  };


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
                type="text"
                color="primary"
                sx={{ my: 2, flexGrow: 0.4 }}
                value={formData.name}
                onChange={handleNameChange}
              />
              <TextField
                label="Age"
                variant="standard"
                type="number"
                color="primary"
                sx={{ my: 2, flexGrow: 0.4 }}
                value={formData.age}
                onChange={handleAgeChange}
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
              <FormControl variant="standard" sx={{ my: 2, flexGrow: 0.4 }}>
                <FormLabel>Gender:</FormLabel>
                <RadioGroup
                  row
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
                  value={formData.gender}
                  onChange={handleGenderChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                label="Place"
                variant="standard"
                type="text"
                sx={{ my: 2, flexGrow: 0.4 }}
                value={formData.place}
                onChange={handlePlaceChange}
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
                type="email"
                color="primary"
                sx={{ my: 2, flexGrow: 0.4 }}
                value={formData.email}
                onChange={handleEmailChange}
              />
              <TextField
                label="Phone"
                variant="standard"
                type="text"
                color="primary"
                sx={{ my: 2, flexGrow: 0.4 }}
                value={formData.phone}
                onChange={handlePhoneChange}
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
                label="Height (in cm)"
                variant="standard"
                type="number"
                color="primary"
                sx={{ my: 2, flexGrow: 0.4 }}
                value={formData.height}
                onChange={handleHeightChange}
              />
              <TextField
                label="Weight (in Kg)"
                variant="standard"
                type="number"
                color="primary"
                sx={{ my: 2, flexGrow: 0.4 }}
                value={formData.weight}
                onChange={handleWeightChange}
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
                <InputLabel id="smoke-label-id">Do you smoke?</InputLabel>
                <Select
                  labelId="smoke-label-id"
                  label="Do you smoke?"
                  value={formData.smoking}
                  onChange={handleSmokingChange}
                >
                  <MenuItem value={0}>I don't Smoke</MenuItem>
                  <MenuItem value={1}>Rarely</MenuItem>
                  <MenuItem value={2}>Frequently (6-7 times a week)</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                variant="standard"
                fullWidth
                sx={{ my: 2, flexGrow: 0.4 }}
              >
                <InputLabel id="alcohol-label-id">
                  Do you consume alcohol?
                </InputLabel>
                <Select
                  labelId="alcohol-label-id"
                  label="Do you consume alcohol?"
                  value={formData.alcohol}
                  onChange={handleAlcoholChange}
                >
                  <MenuItem value={0}>I don't Drink</MenuItem>
                  <MenuItem value={1}>Rarely</MenuItem>
                  <MenuItem value={2}>Frequently</MenuItem>
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
                <InputLabel id="junk-label-id">
                  Do you eat Junk Food?
                </InputLabel>
                <Select
                  labelId="junk-label-id"
                  label="Do you eat Junk Food?"
                  value={formData.junkFood}
                  onChange={handleJunkFoodChange}
                >
                  <MenuItem value={0}>Slightly/No</MenuItem>
                  <MenuItem value={1}>Moderately</MenuItem>
                  <MenuItem value={2}>Heavily</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                variant="standard"
                fullWidth
                sx={{ my: 2, flexGrow: 0.4 }}
              >
                <InputLabel id="phy-activity-id">
                  Do you engage in Physical Activities?
                </InputLabel>
                <Select
                  labelId="dphy-activity-id"
                  label="Do you engage in Physical Activities?"
                  value={formData.activity}
                  onChange={handleActivityChange}
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={1}>Rarely</MenuItem>
                  <MenuItem value={2}>Daily</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Container sx={{ width: "100%", display: "flex" }}>
              <Button
                variant="contained"
                sx={{ mx: "auto" }}
                onClick={onFormSubmit}
              >
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
