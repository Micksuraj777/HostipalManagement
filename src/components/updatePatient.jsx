import { useState } from "react";
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
    status: "Admitted", // Default status value
    refer_doc: "",
    disease_symptoms: "", // Added disease symptoms field
    date_of_birth: "", // Added date_of_birth field
    age: "",
  });

  const [patientId, setPatientId] = useState(""); // Store patient ID for update
  const [error, setError] = useState(""); // For validation error handling

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form validation function
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
    return ""; // No errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError); // Set validation error message
      return;
    }

    try {
      const response = await axios.patch(`http://localhost:8000/patient/${patientId}/`, formData);
      console.log("Patient updated successfully:", response.data);
      alert("Updation done successfully!"); // Show success popup
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  };

  return (
    <section className="w-full max-w-screen-2xl mx-auto h-[90vh] px-14 pt-28">
      <form onSubmit={handleSubmit}>
        {/* Show error message */}
        {error && <div className="text-red-500 mb-4">{error}</div>}

        {/* Field for entering patient ID to update */}
        <div className="mb-4">
          <Input
            type="text"
            name="patientId"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            placeholder="Enter Patient ID"
          />
        </div>

        <div className="flex gap-5">
          {/* Left section of the form */}
          <div className="flex flex-col gap-3 w-1/2">
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
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter the Address"
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

          {/* Right section of the form */}
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
              name="disease_symptoms"
              value={formData.disease_symptoms}
              onChange={handleChange}
              placeholder="Disease & Symptoms"
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
              options={[
                { value: "101", label: "101" },
                { value: "102", label: "102" },
                { value: "103", label: "103" },
                { value: "104", label: "104" },
              ]}
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
            {/* Input for date_of_birth */}
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
          </div>
        </div>

        <div className="flex justify-center w-full py-8">
          <Button type="submit" bgColor="#9083D5" className="text-white px-10">
            Update Patient
          </Button>
        </div>
      </form>
    </section>
  );
}
