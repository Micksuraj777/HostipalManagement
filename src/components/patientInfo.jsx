import { Button } from "./Button";
import { Tables } from "./tables";

const sampleData = [
  { slNo: 1, amount: "John", dateTime: '2024-10-22 10:00:00', status: 'Admitted' },
  { slNo: 2, amount: "Parthiv", dateTime: '2024-10-21 12:00:00', status: 'Discharge' },
  { slNo: 3, amount: "Joy", dateTime: '2024-10-20 14:00:00', status: 'Admitted' },
  { slNo: 4, amount: "Joyal", dateTime: '2024-10-20 14:00:00', status: 'Admitted' },
  { slNo: 5, amount: "James", dateTime: '2024-10-20 14:00:00', status: 'Discharge' },
];

export default function PatientInfo() {
  return (
    <div className='w-full max-w-screen-xl mx-auto h-screen'>
    <h1 className="text-[#9083D5] text-xl font-semibold pt-6">
      Patient-info
    </h1>
    <Tables data={sampleData}/>
    <div className="w-full justify-center flex pt-8">
    <Button href="/" bgColor="#9083D5" className="text-white px-16 w-fit">Back</Button>
    </div>
  </div>
  )
}
