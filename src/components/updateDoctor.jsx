import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "./Button";
import Input from "./input";

export default function DoctorForm() {
  const [formData, setFormData] = useState({
    doctor_id: "",
    name: "",
    department: "",
    phone_no: "",
    status: "Active",
  });
  const [isUpdating, setIsUpdating] = useState(false); // New state to track if updating
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "doctor_id" && value) fetchDoctorData(value); // Fetch doctor data when doctor_id changes
  };

  const fetchDoctorData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8000/doctor/${id}/`);
      setFormData(response.data);
      setIsUpdating(true); // Set to updating mode if doctor data exists
      setError("");
    } catch (err) {
      console.error("Error fetching doctor data:", err);
      setError("Doctor not found.");
      setFormData({
        doctor_id: id,
        name: "",
        department: "",
        phone_no: "",
        status: "Active",
      });
      setIsUpdating(false); // Reset updating mode
    }
  };

  const validateForm = () => {
    if (!formData.doctor_id) return "Doctor ID is required.";
    if (!formData.name) return "Name is required.";
    if (!formData.department) return "Department is required.";
    if (!formData.phone_no || !/^\d{10}$/.test(formData.phone_no)) return "A valid 10-digit phone number is required.";
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
      if (isUpdating) {
        // Use PUT request to update doctor if already exists
        const response = await axios.put(`http://localhost:8000/doctor/${formData.doctor_id}/`, formData);
        console.log("Doctor updated successfully:", response.data);
        alert("Doctor updated successfully!");
      } else {
        // Handle creating a new doctor if necessary (can be removed if only updating is needed)
        const response = await axios.post(`http://localhost:8000/doctor/`, formData);
        console.log("Doctor created successfully:", response.data);
        alert("Doctor created successfully!");
      }

      // Reset form
      setFormData({
        doctor_id: "",
        name: "",
        department: "",
        phone_no: "",
        status: "Active",
      });
      setIsUpdating(false); // Reset updating mode
      setError("");
    } catch (error) {
      console.error("Error updating doctor:", error);
      setError("Error updating doctor. Please try again.");
    }
  };

  return (
    <section className="w-full max-w-screen-2xl mx-auto h-[90vh] px-14 pt-28 flex flex-col justify-center">
      <form onSubmit={handleSubmit}>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="flex gap-5">
          <div className="flex flex-col gap-3 w-1/2 animate-fade-right animate-once ">
            <Input
              type="text"
              name="doctor_id"
              value={formData.doctor_id}
              onChange={handleChange}
              placeholder="Enter Doctor ID"
            />
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Doctor's Name"
            />
            <Input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter Department"
            />
          </div>

          <div className="flex flex-col gap-3 w-1/2 animate-fade-left animate-once ">
            <Input
              type="tel"
              name="phone_no"
              value={formData.phone_no}
              onChange={handleChange}
              placeholder="Enter Phone Number"
            />
            <Input
              name="status"
              value={formData.status}
              onChange={handleChange}
              variant="select"
              options={[
                { value: "Active", label: "Active" },
                { value: "On Leave", label: "On Leave" },
              ]}
            />
          </div>
        </div>

        <div className="flex justify-center w-full py-8 gap-10">
          <Button type="submit" bgColor="#9083D5" className="text-white px-10">
            {isUpdating ? "Update Doctor" : "Save Doctor"}
          </Button>
          <Button href="/dashboard" bgColor="#9083D5" className="text-white px-20 w-fit">
            Back
          </Button>
        </div>
      </form>
    </section>
  );
}
