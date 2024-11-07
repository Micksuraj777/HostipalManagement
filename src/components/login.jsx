import { useState } from "react";
import User from "../assets/icons/user.png";
import Password from "../assets/icons/password.png";
import Doc from "../assets/images/doctor.avif";
import { Button } from "./Button";
import Input from "./input";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

export default function LoginIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [captchaToken, setCaptchaToken] = useState(""); // Store reCAPTCHA token

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setError("Please complete the CAPTCHA verification.");
      return;
    }

    try {
      // Send token, username, and password to the backend for verification
      const response = await fetch("/api/verify-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, token: captchaToken }),
      });

      const result = await response.json();
      if (result.success) {
        navigate("/"); // Redirect on successful login
      } else {
        setError(result.message || "Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again.");
    }
  };

  // Get reCAPTCHA token and store it
  const handleCaptchaChange = (value) => {
    setCaptchaToken(value);
  };

  return (
    <div className='w-full max-w-screen-2xl mx-auto h-[90vh]'>
      <div className='flex justify-center items-center h-full'>
        <form onSubmit={handleLogin} className='flex flex-col gap-5'>
          <div className='flex gap-3'>
            <img src={User} alt='setting' className='w-8 h-9' />
            <Input 
              type='text' 
              placeholder='Username' 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className='flex gap-3'>
            <img src={Password} alt='setting' className='w-8 h-8' />
            <Input 
              type='password' 
              placeholder='Password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <div className="text-red-500">{error}</div>}

          <ReCAPTCHA
            sitekey="6LePBngqAAAAABVf5503OiRl6Kh-o7tvgwXBU6ZK" // Replace with your site key
            onChange={handleCaptchaChange}
          />

          <Button type="submit" bgColor="#9083D5" className="text-white">
            Login
          </Button>
        </form>

        <div>
          <img src={Doc} alt='doctor' className='object-cover w-[200px] animate-bounce animate-infinite animate-ease-linear animate-normal' />
        </div>
      </div>
    </div>
  );
}
