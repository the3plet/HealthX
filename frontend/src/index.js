import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Patient from "./Pages/Patient";
import Doctor from "./Pages/Doctor";
import PatientDataCollect from "./Pages/Patient";
import PatientProfile from "./Pages/PatientProfile"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="patientdata" element={<Patient/>}/>
          <Route path="doctor" element={<Doctor/>}/>
          <Route path="patientdata" element={<PatientDataCollect/>}/>
          <Route path="patient" element={<PatientProfile/>}/>
        </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
