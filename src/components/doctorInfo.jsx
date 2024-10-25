import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "./Button";
import { Tables2 } from "./tables";

export default function DoctorInfo() {
  const [doctorData, setDoctorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch doctor data from the API using Axios
    axios
      .get("http://localhost:8000/doctor/") // Replace with your actual API URL
      .then((response) => {
        setDoctorData(response.data); // Assuming the API returns an array of doctors
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto h-screen">
      <h1 className="text-[#9083D5] text-xl font-semibold pt-6">Doctor-info</h1>
      <Tables2 data={doctorData} />
      <div className="w-full justify-center flex pt-8">
        <Button href="/" bgColor="#9083D5" className="text-white px-16 w-fit">
          Back
        </Button>
      </div>
    </div>
  );
}
