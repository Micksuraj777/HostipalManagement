import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/icons/logo.png";
import { Button } from "./Button";

export default function Navbar() {
  const location = useLocation();
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Service" },
    { path: "/appointment", label: "Appointment" },
    { path: "/contact", label: "Contact Us" },
  ];
  const isActive = (path) => location.pathname === path;
  return (
    <nav className="flex justify-between items-center max-w-screen-xl mx-auto pt-5">
      <Link to="/" className="flex items-center gap-2 cursor-pointer drop-shadow-2xl">
        <img src={Logo} alt="logo" className="w-10 h-10" />
        <h1 className="text-black text-2xl font-semibold">MediLab Hospital</h1>
      </Link>
      <ul className="flex gap-5 font-semibold">
        {navItems.map((item) => (
          <li
            key={item.path}
            className={`p-2 cursor-pointer ${
              isActive(item.path) ? "bg-[#C5DCFF] rounded-md" : ""
            } hover:underline`}
          >
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-3">
        <Button href="/signin" bgColor="#9E9E9E" className="text-white">Sign In</Button>
        <Button href="/register" bgColor="#9083D5" className="text-white">Register</Button>
      </div>
    </nav>
  );
}
