import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "./Button";
import { Tables } from "./tables";
import Loader from "./Loader";
import Search from "../assets/icons/search.png";

export default function PatientInfo() {
  const [patientData, setPatientData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch patient data from the Django API
  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/patient/");
        setPatientData(response.data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchPatientData();
  }, []);

  // Convert searchTerm to lowercase for case-insensitive matching
  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  // Filter data based on search term in multiple fields
  const filteredData = patientData.filter((patient) => {
    return (
      patient.name?.toLowerCase().includes(lowerCaseSearchTerm) ||
      patient.phone_no?.toLowerCase().includes(lowerCaseSearchTerm) ||
      patient.address?.toLowerCase().includes(lowerCaseSearchTerm) ||
      patient.blood_group?.toLowerCase().includes(lowerCaseSearchTerm) ||
      patient.gender?.toLowerCase().includes(lowerCaseSearchTerm) ||
      patient.room?.toLowerCase().includes(lowerCaseSearchTerm) ||
      patient.status?.toLowerCase().includes(lowerCaseSearchTerm) ||
      patient.refer_doc?.toLowerCase().includes(lowerCaseSearchTerm) ||
      patient.date_of_join?.toLowerCase().includes(lowerCaseSearchTerm) ||
      patient.date_of_birth?.toLowerCase().includes(lowerCaseSearchTerm) ||
      patient.age?.toString().includes(lowerCaseSearchTerm)
    );
  });

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-full max-w-screen-xl mx-auto h-screen">
      <div className="pt-6 flex justify-between items-center">
        <h1 className="text-[#9083D5] text-xl font-semibold">Patient Info</h1>
        <div className="relative">
          <input
            type="text"
            className="border-2 rounded-full py-1 pl-8 pr-2 outline-[#9083D5]"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img src={Search} alt="search" className="w-5 h-5 absolute top-2 left-2" />
        </div>
      </div>
      <Tables data={filteredData} />
      <div className="w-full justify-center flex py-8">
        <Button href="/" bgColor="#9083D5" className="text-white px-20 w-fit">
          Back
        </Button>
      </div>
    </div>
  );
}
