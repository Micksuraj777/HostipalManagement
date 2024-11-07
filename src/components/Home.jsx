import { Link } from "react-router-dom";
import Doc from "../assets/images/doc.jpeg"

const Home = () => {
  const navItems = [
    { path: "/add-patient", label: "Add New Patient" },
    { path: "/patient-info", label: "Patient info" },
    { path: "/doctor-info", label: "Doctor info" },
    { path: "/room", label: "Room" },
    { path: "/update-patient", label: "Update Patient Details" },
    { path: "/medicine", label: "Medicine" },
  ];

  return (
    <main className="w-full max-w-screen-2xl mx-auto flex">
      <div className="w-3/5 ">
        <img src={Doc} alt="doc" className="w-full h-screen animate-fade-right animate-once animate-duration-[2000ms]" />
      </div>
      <div className="flex flex-col items-center justify-center w-2/5 animate-fade-left animate-once animate-duration-[2000ms]">
        <h1 className="text-[#9083D5] text-5xl font-semibold pt-14 text-center animate-fade-up animate-once animate-duration-[2000ms]">
          Welcome to our Hospital Management System
        </h1>
      <ul className="flex flex-col gap-5 font-semibold pt-[10%] mx-auto max-w-screen-md justify-items-center h-full animate-fade-down animate-once animate-duration-[2000ms]">
        {navItems.map((item) => (
          <li
            key={item.path}
            className="py-2 px-40 cursor-pointer bg-[#9083D5] w-full h-fit rounded-md text-white border-2 border-black text-center hover:animate-shake hover:animate-once"
          >
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
      </div>
    </main>
  );
};

export default Home;
