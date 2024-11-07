import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from "./Button";
import { RoomAvailabilityTable } from "./tables";
import Loader from './Loader';

export default function Room() {
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchroomData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/room/');
        setRoomData(response.data);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        // Set a timer of 2000ms before updating the loading state
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchroomData();
  }, []);

  if (loading) return <Loader />; // Use the Loader component
  if (error) return <div>{error}</div>;

  return (
    <div className='w-full max-w-screen-xl mx-auto h-screen'>
      <h1 className="text-[#9083D5] text-xl font-semibold pt-20">
        Room-info
      </h1>
      <RoomAvailabilityTable data={roomData} /> {/* Pass fetched data to the table */}
      <div className="w-full justify-center flex py-8">
        <Button href="/" bgColor="#9083D5" className="text-white px-16 w-fit">
          Back
        </Button>
      </div>
    </div>
  );
}
