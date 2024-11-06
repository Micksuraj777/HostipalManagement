import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "./Button";
import Input from "./input";

export default function UpdatePatient() {
  const [formData, setFormData] = useState({
    name: "",
    phone_no: "",
    address: "",
    blood_group: "",
    gender: "",
    room: "",
    status: "Admitted",
    refer_doc: "",
    date_of_birth: "",
    age: "",
  });
  const [patientId, setPatientId] = useState("");
  const [error, setError] = useState("");
  const [roomStatus, setRoomStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "room") fetchRoomStatus(value); // Fetch room status when room is selected
  };

  const fetchRoomStatus = async (roomNo) => {
    try {
      const response = await axios.get(`http://localhost:8000/room/${roomNo}/`);
      setRoomStatus(response.data.status);
    } catch (err) {
      console.error("Error fetching room status:", err);
      setRoomStatus(""); // Reset if room data is unavailable
    }
  };

  useEffect(() => {
    const fetchPatientData = async () => {
      if (patientId) {
        try {
          const response = await axios.get(`http://localhost:8000/patient/${patientId}/`);
          setFormData(response.data);
          setError("");
          fetchRoomStatus(response.data.room); // Get room status for loaded patient data
        } catch (err) {
          console.error("Error fetching patient data:", err);
          setError("Patient not found.");
          setFormData({
            name: "",
            phone_no: "",
            address: "",
            blood_group: "",
            gender: "",
            room: "",
            status: "Admitted",
            refer_doc: "",
            date_of_birth: "",
            age: "",
          });
        }
      }
    };
    fetchPatientData();
  }, [patientId]);

  const validateForm = () => {
    if (!patientId) return "Patient ID is required.";
    if (!formData.name) return "Name is required.";
    if (!formData.phone_no || !/^\d{10}$/.test(formData.phone_no)) return "A valid 10-digit phone number is required.";
    if (!formData.address) return "Address is required.";
    if (!formData.status) return "Status is required.";
    if (!formData.gender) return "Gender is required.";
    if (!formData.room) return "Room number is required.";
    if (!formData.date_of_birth) return "Date of birth is required.";
    if (!formData.age || isNaN(formData.age)) return "A valid age is required.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await axios.patch(`http://localhost:8000/patient/${patientId}/`, formData);
      console.log("Patient updated successfully:", response.data);
      alert("Updation done successfully!");

      setFormData({
        name: "",
        phone_no: "",
        address: "",
        blood_group: "",
        gender: "",
        room: "",
        status: "Admitted",
        refer_doc: "",
        date_of_birth: "",
        age: "",
      });
      setPatientId("");
      setError("");
      setRoomStatus("");
    } catch (error) {
      console.error("Error updating patient:", error);
      setError("Error updating patient. Please try again.");
    }
  };

  const roomTextColor = roomStatus === "Vacant" ? "text-green-500" : roomStatus === "Occupied" ? "text-red-500" : "text-black";

  return (
    <section className="w-full max-w-screen-2xl mx-auto h-[90vh] px-14 pt-28">
      <form onSubmit={handleSubmit}>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="flex gap-5">
          <div className="flex flex-col gap-3 w-1/2">
            <Input
              type="text"
              name="patientId"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              placeholder="Enter Patient ID"
            />
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter the Name"
            />
            <Input
              type="tel"
              name="phone_no"
              value={formData.phone_no}
              onChange={handleChange}
              placeholder="Enter the Phone no"
            />
            <Input
              type="text"
              name="address"
              variant="textarea"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter the Address"
              className="h-[106px]"
            />
            <Input
              name="status"
              value={formData.status}
              onChange={handleChange}
              variant="select"
              options={[
                { value: "Admitted", label: "Admitted" },
                { value: "Discharge", label: "Discharge" },
              ]}
            />
          </div>

          <div className="flex flex-col gap-3 w-1/2">
            <Input
              type="text"
              name="refer_doc"
              value={formData.refer_doc}
              onChange={handleChange}
              placeholder="Doctor Referred"
            />
            <Input
              type="text"
              name="blood_group"
              value={formData.blood_group}
              onChange={handleChange}
              placeholder="Blood group"
            />
            <Input
              name="room"
              value={formData.room}
              onChange={handleChange}
              variant="select"
              className={roomTextColor}
              options={[
                { value: "101", label: "101" },
                { value: "102", label: "102" },
                { value: "103", label: "103" },
                { value: "104", label: "104" },
                { value: "105", label: "105" },
                { value: "106", label: "106" },
                { value: "107", label: "107" },
                { value: "108", label: "108" },
                { value: "109", label: "109" },
                { value: "110", label: "110" },
              ]}
            />
            <Input
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              placeholder="Enter Date of Birth"
            />
            <Input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter Age"
            />
            <Input
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              variant="select"
              options={[
                { value: "", label: "Gender" },
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "not prefer to say", label: "Not prefer to say" },
              ]}
            />
          </div>
        </div>

        <div className="flex justify-center gap-5 w-full py-8">
          <Button type="submit" bgColor="#9083D5" className="text-white px-10">
            Update Patient
          </Button>
        </div>
      </form>
    </section>
  );
}
