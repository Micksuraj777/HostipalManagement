import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/about"; 
import Service from "./components/service"; 
import Appointment from "./components/appointment"; 
import Contact from "./components/contact"; 
import LoginIn from "./components/login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginIn/>} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
