import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from './Button';
import { Tables } from './tables';

export default function PatientInfo() {
  const [patientData, setPatientData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch patient data from the Django API
  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/patient/');
        setPatientData(response.data);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='w-full max-w-screen-xl mx-auto h-screen'>
      <h1 className="text-[#9083D5] text-xl font-semibold pt-6">
        Patient Info
      </h1>
      <Tables data={patientData} />
      <div className="w-full justify-center flex pt-8">
        <Button href="/" bgColor="#9083D5" className="text-white px-16 w-fit">
          Back
        </Button>
      </div>
    </div>
  );
}
