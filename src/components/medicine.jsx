import { Button } from "./Button";
import { MedicineTable} from "./tables";

const medicineData = [
    { slNo: 1, medicineName: "Paracetamol", dosage: "500mg", manufacturer: "ABC Pharma", price: "$5", status: "In Stock" },
    { slNo: 2, medicineName: "Ibuprofen", dosage: "400mg", manufacturer: "XYZ Pharma", price: "$10", status: "Out of Stock" },
    { slNo: 3, medicineName: "Amoxicillin", dosage: "250mg", manufacturer: "HealthCorp", price: "$12", status: "In Stock" },
    { slNo: 4, medicineName: "Cetirizine", dosage: "10mg", manufacturer: "Medico", price: "$8", status: "In Stock" },
    { slNo: 5, medicineName: "Lisinopril", dosage: "10mg", manufacturer: "PharmaX", price: "$15", status: "In Stock" },
    { slNo: 6, medicineName: "Metformin", dosage: "500mg", manufacturer: "GenoPharma", price: "$7", status: "In Stock" },
    { slNo: 7, medicineName: "Simvastatin", dosage: "20mg", manufacturer: "WellPharma", price: "$20", status: "Out of Stock" },
    { slNo: 8, medicineName: "Amlodipine", dosage: "5mg", manufacturer: "CardioPharma", price: "$6", status: "In Stock" },
    { slNo: 9, medicineName: "Omeprazole", dosage: "20mg", manufacturer: "StomachCare", price: "$9", status: "In Stock" },
    { slNo: 10, medicineName: "Furosemide", dosage: "40mg", manufacturer: "FluidMed", price: "$11", status: "Out of Stock" },
  ];
  

export default function Medicine() {
  return (
    <div className='w-full max-w-screen-xl mx-auto h-screen'>
    <h1 className="text-[#9083D5] text-xl font-semibold pt-6">
      Medicine-info
    </h1>
    <MedicineTable data={medicineData} />
    <div className="w-full justify-center flex py-8">
    <Button href="/" bgColor="#9083D5" className="text-white px-16 w-fit">Back</Button>
    </div>
  </div>
  )
}
