import { Link } from "react-router-dom";

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
    <main className="w-full max-w-screen-2xl mx-auto overflow-hidden">
      <div className="flex items-center justify-center animate-scroll">
        <h1 className="text-[#9083D5] text-5xl font-semibold pt-14 whitespace-nowrap">
          Welcome to Our Hospital Management System
        </h1>
      </div>
      <ul className="grid grid-cols-3 gap-5 font-semibold pt-[10%] mx-auto max-w-screen-md justify-items-center h-full">
        {navItems.map((item) => (
          <li key={item.path} className="p-2 cursor-pointer bg-[#9083D5] w-full rounded-md text-white border-2 border-black text-center">
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
