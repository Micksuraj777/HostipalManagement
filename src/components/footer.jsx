import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/icons/logo.png";

export default function Footer() {
  const location = useLocation();
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Service" },
    { path: "/appointment", label: "Appointment" },
    { path: "/contact", label: "Contact Us" },
  ];
  const HourItems = [
    { path: "Monday", label: "9:00 - 18:00" },
    { path: "Tuesday", label: "9:00 - 18:00" },
    { path: "Wednesday", label: "9:00 - 18:00" },
    { path: "Thursday", label: "9:00 - 18:00" },
    { path: "Friday", label: "9:00 - 18:00" },
  ];
  const isActive = (path) => location.pathname === path;
  return (
    <footer className="max-w-screen-xl mx-auto">
      <div className="w-full h-1 bg-[#9E9E9E] rounded-full"></div>
      <section className="flex justify-between items-start py-5">
        <Link
          to="/"
          className="flex items-center gap-2 cursor-pointer drop-shadow-2xl"
        >
          <img src={Logo} alt="logo" className="w-12 h-12" />
          <h1 className="text-black text-2xl font-semibold">
            MediLab Hospital
          </h1>
        </Link>
        <div className="pt-1 flex justify-between items-center w-full">
          <div>
            <h2 className="font-semibold text-black text-2xl">Quick Links</h2>
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li
                  key={item.path}
                  className={` cursor-pointer ${
                    isActive(item.path) ? "underline text-[#9083D5]" : ""
                  } hover:underline`}
                >
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-black text-2xl">Hours</h2>
            <ul className="flex flex-col gap-1">
              {HourItems.map((item) => (
                <li
                  key={item.path}
                  className=" flex gap-10"
                >
                    <span>
                    {item.path}
                    </span>
                    <span>
                    {item.label}
                    </span> 
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-black text-2xl">Contact</h2>
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li
                  key={item.path}
                  className={` cursor-pointer ${
                    isActive(item.path) ? "underline text-[#9083D5]" : ""
                  } hover:underline`}
                >
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}
