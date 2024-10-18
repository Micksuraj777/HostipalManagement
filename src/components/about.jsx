import Setting from "../assets/icons/settings.svg";
import { Button } from "./Button";
import Input from "./input";

export default function About() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto h-[90vh] px-14 pt-28">
      <div className="flex gap-5">
        <div className="flex flex-col gap-3 w-1/2">
          <Input type="text" placeholder="Enter the Name" />
          <Input type="text" placeholder="Enter the ID Proof" />
          <Input type="tel" placeholder="Enter the Phone no" />
          <Input type="email" placeholder="Enter the Email ID" />
          <Input
            type="text"
            variant="textarea"
            placeholder="Enter the Address"
          />
        </div>
        <div className="flex flex-col gap-3 w-1/2">
          <Input type="text" placeholder="Doctor Refered" />
          <Input
            type="text"
            variant="textarea"
            placeholder="Disease & Symptoms"
          />
          <Input type="text" placeholder="Blood group" />
          <Input
            variant="select"
            options={[
              { value: "Room 101", label: "Room 101" },
              { value: "Room 102", label: "Room 102" },
              { value: "Room 103", label: "Room 103" },
              { value: "Room 104", label: "Room 104" },
            ]}
          />
          <Input
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
      <div className="flex justify-center w-full pt-8">
      <Button href="/" bgColor="#9083D5" className="text-white px-10">Add Patient</Button>
      </div>
    </section>
  );
}
