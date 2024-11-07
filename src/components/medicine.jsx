import { Button } from "./Button";
import Loader from "./Loader";
import { MedicineTable} from "./tables";
import axios from "axios";
import { useState, useEffect } from "react";
import Search from "../assets/icons/search.png";


export default function Medicine() {
  const [medicineData, setMedicineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchmedicineData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/medicine/');
        setMedicineData(response.data);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        // Set a timer of 2000ms before updating the loading state
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchmedicineData();
  }, []);

  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  const filteredData = medicineData.filter((medicine) => {
    return (
      medicine.name?.toLowerCase().includes(lowerCaseSearchTerm) ||
      medicine.status?.toLowerCase().includes(lowerCaseSearchTerm) ||
      medicine.dosage?.toLowerCase().includes(lowerCaseSearchTerm) ||
      medicine.manufacturer?.toLowerCase().includes(lowerCaseSearchTerm) ||
      medicine.price?.toString().includes(lowerCaseSearchTerm)
    );
  });

  if (loading) return <Loader />; // Use the Loader component
  if (error) return <div>{error}</div>;
  return (
    <div className='w-full max-w-screen-xl mx-auto h-screen'>
    <div className="flex justify-between items-center pt-20">
        <h1 className="text-[#9083D5] text-xl font-semibold">Medicine Info</h1>
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
    <MedicineTable data={filteredData} />
    <div className="w-full justify-center flex py-8">
    <Button href="/" bgColor="#9083D5" className="text-white px-20 w-fit">Back</Button>
    </div>
  </div>
  )
}
