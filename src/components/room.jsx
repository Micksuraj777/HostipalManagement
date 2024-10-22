import { Button } from "./Button";
import { RoomAvailabilityTable } from "./tables";

const roomData = [
  { roomNo: 101, patientName: "John Doe", roomType: "Private", status: "Occupied" },
  { roomNo: 102, patientName: null, roomType: "General", status: "Available" },
  { roomNo: 103, patientName: "Sarah Lee", roomType: "ICU", status: "Occupied" },
  { roomNo: 104, patientName: null, roomType: "Private", status: "Under Maintenance" },
];

export default function Room() {
  return (
    <div className='w-full max-w-screen-xl mx-auto h-screen'>
    <h1 className="text-[#9083D5] text-xl font-semibold pt-6">
      Room-info
    </h1>
    <RoomAvailabilityTable data={roomData} />
    <div className="w-full justify-center flex pt-8">
    <Button href="/" bgColor="#9083D5" className="text-white px-16 w-fit">Back</Button>
    </div>
  </div>
  )
}

