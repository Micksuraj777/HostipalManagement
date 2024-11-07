import { useState } from "react";
import User from "../assets/icons/user.png";
import Password from "../assets/icons/password.png";
import Doc from "../assets/images/doctor.avif";
import { Button } from "./Button";
import Input from "./input";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

export default function LoginIn() {
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error handling

  const navigate = useNavigate(); // React Router navigate for redirection

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const validUsername = "admin";
    const validPassword = "123";

    // Check if the entered credentials are correct
    if (username === validUsername && password === validPassword) {
      // Redirect to homepage if credentials are correct
      navigate("/");
    } else {
      // Show error message if credentials are incorrect
      setError("Invalid username or password");
    }
  };

  return (
    <div className='w-full max-w-screen-2xl mx-auto h-[90vh]'>
      <div className='flex justify-center items-center h-full'>
        <form onSubmit={handleLogin} className='flex flex-col gap-5'>
          {/* Username input */}
          <div className='flex gap-3'>
            <img src={User} alt='setting' className='w-8 h-9' />
            <Input 
              type='text' 
              placeholder='Username' 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} // Update username
            />
          </div>

          {/* Password input */}
          <div className='flex gap-3'>
            <img src={Password} alt='setting' className='w-8 h-8' />
            <Input 
              type='password' 
              placeholder='Password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} // Update password
            />
          </div>

          {/* Error message */}
          {error && <div className="text-red-500">{error}</div>}

          {/* Login button */}
          <Button type="submit" bgColor="#9083D5" className="text-white">
            Login
          </Button>
        </form>

        {/* Image section */}
        <div>
          <img src={Doc} alt='doctor' className='object-cover w-[200px] animate-bounce animate-infinite animate-ease-linear animate-normal' />
        </div>
      </div>
    </div>
  );
}
