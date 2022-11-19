import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import PatientDataCollect from "./Pages/Patient";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="patientdata" element={<PatientDataCollect/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
