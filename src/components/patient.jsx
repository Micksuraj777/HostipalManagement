import { Link } from "react-router-dom";
import Doc from "../assets/images/doct.jpg"

const Patient = () => {
  const navItems = [
    { path: "/appointment", label: "Take Appointment" },
    { path: "/doctor-information", label: "Doctor info" },
    { path: "/room-info", label: "Room" },
    { path: "/medi-info", label: "Medicine" },
    { path: "/", label: "Logout" },
  ];

  return (
    <main className="w-full max-w-screen-2xl mx-auto flex">
      <div className="w-3/5 ">
        <img src={Doc} alt="doc" className="w-full h-screen animate-fade-right animate-once animate-duration-[2000ms]" />
      </div>
      <div className="flex flex-col items-center justify-center w-2/5 animate-fade-left animate-once animate-duration-[2000ms]">
        <h1 className="text-[#9083D5] text-4xl font-medium pt-14 text-center animate-fade-up animate-once animate-duration-[2000ms]">
          Welcome to our Hospital 
        </h1>
      <ul className="flex flex-col gap-5 font-semibold pt-[10%] mx-auto max-w-screen-md justify-items-center h-full animate-fade-down animate-once animate-duration-[2000ms]">
        {navItems.map((item) => (
          <li
            key={item.path}
            className="py-2 px-40 cursor-pointer bg-[#9083D5] w-full h-fit rounded-md text-white text-center hover:animate-shake hover:animate-once"
          >
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
      </div>
    </main>
  );
};

export default Patient;

