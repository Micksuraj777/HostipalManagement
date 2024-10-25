import { useState } from "react";
import axios from "axios";
import { Button } from "./Button";
import Input from "./input";

export default function AddPatient() {
  const [formData, setFormData] = useState({
    name: "",
    phone_no: "",
    address: "",
    blood_group: "",
    gender: "",
    room: "",
    status: "Admitted", // Default status value
    refer_doc: "",
    date_of_birth: "",
    age: "",
  });

  const [error, setError] = useState(""); // For handling errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form validation function
  const validateForm = () => {
    if (!formData.name) return "Name is required.";
    if (!formData.phone_no || !/^\d{10}$/.test(formData.phone_no)) return "A valid 10-digit phone number is required.";
    if (!formData.address) return "Address is required.";
    if (!formData.blood_group) return "Blood group is required.";
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
      const response = await axios.post("http://localhost:8000/patient/", formData);
      console.log("Patient added successfully:", response.data);
      alert("Registration done successfully!"); // Show success popup
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  return (
    <section className="w-full max-w-screen-2xl mx-auto h-[90vh] px-14 pt-28">
      <form onSubmit={handleSubmit}>
        {/* Show error message */}
        {error && <div className="text-red-500 mb-4">{error}</div>}

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
              type="text"
              name="blood_group"
              value={formData.blood_group}
              onChange={handleChange}
              placeholder="Blood group"
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

          {/* Right section of the form */}
          <div className="flex flex-col gap-3 w-1/2">
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
              type="text"
              name="refer_doc"
              value={formData.refer_doc}
              onChange={handleChange}
              placeholder="Doctor Referred"
            />
            <Input
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              placeholder="Date of Birth"
            />
            <Input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
            />
          </div>
        </div>

        <div className="flex justify-center w-full py-8">
          <Button type="submit" bgColor="#9083D5" className="text-white px-10">
            Add Patient
          </Button>
        </div>
      </form>
    </section>
  );
}
