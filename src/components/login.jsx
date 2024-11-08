import { useState, useEffect, useRef } from "react";
import User from "../assets/icons/user.png";
import Password from "../assets/icons/password.png";
import Doc from "../assets/images/doctor.avif";
import Alert from "../assets/images/alert.png";
import AlertSound from "../assets/sounds/alerts.wav";
import { Button } from "./Button";
import Input from "./input";
import { useNavigate } from "react-router-dom";
import Loader from "./loader";

export default function LoginIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockTimer, setLockTimer] = useState(0);
  const [shake, setShake] = useState(false);
  const [showAlertImage, setShowAlertImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loader

  const navigate = useNavigate();
  const alertAudioRef = useRef(null);

  useEffect(() => {
    let timer;
    if (isLocked) {
      setLockTimer(120);
      timer = setInterval(() => {
        setLockTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsLocked(false);
            setAttempts(0);
            setError("You can try again");
            setShowAlertImage(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isLocked]);

  const handleLogin = async (e) => {
    e.preventDefault();

    setShake(true);
    setTimeout(() => setShake(false), 500);

    if (!username || !password) {
      setError("Please enter both username and password.");
      setShowAlertImage(true);
      alertAudioRef.current.play();
      return;
    }

    if (isLocked) {
      setError(`Account is locked. Please wait ${lockTimer} seconds before trying again.`);
      return;
    }

    if (attempts >= 5) {
      setIsLocked(true);
      setError("Too many login attempts. Account locked for 2 minutes.");
      setShowAlertImage(true);
      alertAudioRef.current.play();
      return;
    }

    setIsLoading(true); // Show loader when login attempt starts

    // Simulate a network delay (or remove if using a real API)
    setTimeout(async () => {
      const encodedPassword = btoa(password);

      if (username === "admin" && password === "1234") {
        setError("");
        setAttempts(0);
        localStorage.setItem("authToken", "sampleToken1234");
        setShowAlertImage(false);
        navigate("/dashboard");
      } else if (username === "patient1" && password === "12345") {
        setError("");
        setAttempts(0);
        localStorage.setItem("authToken", "sampleToken5678");
        setShowAlertImage(false);
        navigate("/patient");
      } else {
        setError("Invalid username or password");
        setAttempts((prev) => prev + 1);
        setShowAlertImage(true);
        alertAudioRef.current.play();
      }

      setIsLoading(false); // Hide loader after login attempt completes
    }, 2000); // 2-second delay for demo purposes
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto h-[90vh]">
      <div className="flex justify-center items-center h-full">
        {isLoading ? (
          <Loader message="Checking data ..."/>
        ) : (
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            {/* Username input */}
            <div className={`flex gap-3 ${shake ? 'animate-shake animate-ease-linear animate-normal' : ''}`}>
              <img src={User} alt="setting" className="w-8 h-9" />
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`border ${error ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
              />
            </div>

            {/* Password input */}
            <div className={`flex gap-3 ${shake ? 'animate-shake animate-ease-linear animate-normal' : ''}`}>
              <img src={Password} alt="setting" className="w-8 h-8" />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`border ${error ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
              />
            </div>

            {/* Error Message */}
            {error && <div className="text-red-500">{error}</div>}
            {isLocked && <div className="text-red-500">Locked. Try again in {lockTimer} seconds.</div>}

            {/* Login button */}
            <Button type="submit" bgColor="#9083D5" className="text-white" disabled={isLocked}>
              Login
            </Button>
          </form>
        )}

        {/* Image section with Alert image on invalid credentials */}
        <div>
          <img
            src={showAlertImage ? Alert : Doc}
            alt={showAlertImage ? "alert" : "doctor"}
            className={`object-cover w-[200px] ${showAlertImage ? 'animate-shake animate-infinite animate-ease-in animate-alternate' : 'animate-bounce animate-infinite animate-ease-linear animate-normal'}`}
          />
        </div>
      </div>

      {/* Hidden audio element for alert sound */}
      <audio ref={alertAudioRef} src={AlertSound} />
    </div>
  );
}
