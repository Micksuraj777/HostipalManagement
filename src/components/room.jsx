import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from "./Button";
import { RoomAvailabilityTable } from "./tables";

export default function Room() {
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch room data from the backend
    axios.get('http://localhost:8000/room/') // Adjust the URL as per your API path
      .then(response => {
        setRoomData(response.data);  // Assuming the API returns an array of room data
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the room data!", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;  // Show a loading state while data is being fetched
  }

  return (
    <div className='w-full max-w-screen-xl mx-auto h-screen'>
      <h1 className="text-[#9083D5] text-xl font-semibold pt-6">
        Room-info
      </h1>
      <RoomAvailabilityTable data={roomData} /> {/* Pass fetched data to the table */}
      <div className="w-full justify-center flex pt-8">
        <Button href="/" bgColor="#9083D5" className="text-white px-16 w-fit">
          Back
        </Button>
      </div>
    </div>
  );
}
