import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import LoginIn from "./components/login";
import PatientInfo from "./components/patientInfo";
import DoctorInfo from "./components/doctorInfo";
import AddPatient from "./components/addPatient";
import UpdatePatient from "./components/updatePatient";
import Room from "./components/room";
import Medicine from "./components/medicine";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/doctor-info" element={<DoctorInfo />} />
        <Route path="/patient-info" element={<PatientInfo />} />
        <Route path="/update-patient" element={<UpdatePatient />} />
        <Route path="/room" element={<Room />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/login" element={<LoginIn/>} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
