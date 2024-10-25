import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/icons/logo.png";
import { Button } from "./Button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center max-w-screen-xl mx-auto pt-5">
      <Link to="/" className="flex items-center gap-2 cursor-pointer drop-shadow-2xl">
        <img src={Logo} alt="logo" className="w-10 h-10" />
        <h1 className="text-black text-2xl font-semibold">Hospital Management</h1>
      </Link>
      {/* <div className="flex gap-3">
        <Button href="/login" bgColor="#9083D5" className="text-white">Login</Button>
      </div> */}
    </nav>
  );
}
