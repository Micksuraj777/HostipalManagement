import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "./Button";
import { Tables2 } from "./tables";
import Loader from './Loader';
import Search from "../assets/icons/search.png";

export default function DoctorInfo() {
  const [doctorData, setDoctorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/doctor/');
        setDoctorData(response.data);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        // Set a timer of 2000ms before updating the loading state
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchDoctorData();
  }, []);

  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  const filteredData = doctorData.filter((doctor) => {
    return (
      doctor.name?.toLowerCase().includes(lowerCaseSearchTerm) ||
      doctor.phone_no?.toLowerCase().includes(lowerCaseSearchTerm) ||
      doctor.status?.toLowerCase().includes(lowerCaseSearchTerm) ||
      doctor.department?.toLowerCase().includes(lowerCaseSearchTerm) 
    );
  });

  if (loading) return <Loader />; // Use the Loader component
  if (error) return <div>{error}</div>;

  return (
    <div className="w-full max-w-screen-xl mx-auto h-screen">
      <div className="pt-20 flex justify-between items-center">
        <h1 className="text-[#9083D5] text-xl font-semibold">Doctor Info</h1>
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
      <Tables2 data={filteredData} />
      <div className="w-full justify-center flex py-8">
        <Button href="/" bgColor="#9083D5" className="text-white px-20 w-fit">
          Back
        </Button>
      </div>
    </div>
  );
}
