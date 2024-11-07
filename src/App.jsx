import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/home.jsx";
import LoginIn from "./components/login.jsx";
import PatientInfo from "./components/patientInfo.jsx";
import DoctorInfo from "./components/doctorInfo.jsx";
import AddPatient from "./components/addPatient.jsx";
import UpdatePatient from "./components/updatePatient.jsx";
import Room from "./components/room.jsx";
import Medicine from "./components/medicine.jsx";

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
