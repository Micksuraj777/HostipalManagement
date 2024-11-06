import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "./Button";
import Input from "./input";

export default function AddPatient() {
  const initialFormData = {
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
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(""); // For handling errors
  const [roomStatus, setRoomStatus] = useState(""); // For tracking room status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Update room status based on selected room
  useEffect(() => {
    const vacantRooms = ["103", "104"];
    const occupiedRooms = ["101", "102", "105", "106", "107", "108", "109", "110"];
    
    if (vacantRooms.includes(formData.room)) {
      setRoomStatus("Vacant");
    } else if (occupiedRooms.includes(formData.room)) {
      setRoomStatus("Occupied");
    } else {
      setRoomStatus(""); // Default if room is neither vacant nor occupied
    }
  }, [formData.room]);

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

      // Clear form data after successful submission
      setFormData(initialFormData);
      setError(""); // Clear any previous errors
    } catch (error) {
      console.error("Error adding patient:", error);
      setError("Error adding patient. Please try again.");
    }
  };

  // Dynamically set the text color for the room input
  const roomTextColor = roomStatus === "Vacant" ? "text-green-500" : roomStatus === "Occupied" ? "text-red-500" : "text-black";

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
              variant="textarea"
              className="h-[106px]"
            />
            <Input
              type="text"
              name="blood_group"
              value={formData.blood_group}
              onChange={handleChange}
              placeholder="Blood group"
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
                { value: "105", label: "105" },
                { value: "106", label: "106" },
                { value: "107", label: "107" },
                { value: "108", label: "108" },
                { value: "109", label: "109" },
                { value: "110", label: "110" },
              ]}
              className={roomTextColor} // Apply dynamic text color here
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

        <div className="flex justify-center w-full py-8">
          <Button type="submit" bgColor="#9083D5" className="text-white px-10">
            Add Patient
          </Button>
        </div>
      </form>
    </section>
  );
}
