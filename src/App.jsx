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
import Patient from "./components/patient";
import AddPatient2 from "./components/addPatient2";
import Room2 from "./components/room2";
import DoctorInfo2 from "./components/doctorInfo2";
import Medicine2 from "./components/medicine2";
import DoctorForm from "./components/updateDoctor";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/doctor-info" element={<DoctorInfo />} />
        <Route path="/doctor-information" element={<DoctorInfo2 />} />
        <Route path="/patient-info" element={<PatientInfo />} />
        <Route path="/update-patient" element={<UpdatePatient />} />
        <Route path="/update-doctor" element={<DoctorForm />} />
        <Route path="/room" element={<Room />} />
        <Route path="/room-info" element={<Room2 />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/medi-info" element={<Medicine2 />} />
        <Route path="/" element={<LoginIn/>} />
        <Route path="/patient" element={<Patient/>} />
        <Route path="/appointment" element={<AddPatient2/>} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
