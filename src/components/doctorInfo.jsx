import { Button } from "./Button";
import { Tables2 } from "./tables";

const doctorData = [
  { slNo: 1, name: "Dr. John Smith", specialty: "Cardiologist", contact: "123-456-7890", status: "Available" },
  { slNo: 2, name: "Dr. Sarah Lee", specialty: "Pediatrician", contact: "098-765-4321", status: "Unavailable" },
  { slNo: 3, name: "Dr. Robert Brown", specialty: "Dermatologist", contact: "555-123-4567", status: "Available" },
  { slNo: 4, name: "Dr. Emily Davis", specialty: "Orthopedist", contact: "444-555-6666", status: "Unavailable" },
];

export default function DoctorInfo() {
  return (
    <div className='w-full max-w-screen-xl mx-auto h-screen'>
    <h1 className="text-[#9083D5] text-xl font-semibold pt-6">
      Doctor-info
    </h1>
    <Tables2 data={doctorData}/>
    <div className="w-full justify-center flex pt-8">
    <Button href="/" bgColor="#9083D5" className="text-white px-16 w-fit">Back</Button>
    </div>
  </div>
  )
}

