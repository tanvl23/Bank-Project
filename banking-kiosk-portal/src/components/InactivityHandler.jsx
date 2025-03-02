import { useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const InactivityHandler = ({ timeout = 60000 }) => {
  const navigate = useNavigate();
  const timerRef = useRef(null);

  // Function to log inactivity to the backend
  const logInactivity = async () => {
    try {
      await fetch("http://localhost:5000/banking/log-inactivity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "User redirected due to inactivity",
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error("Failed to log inactivity:", error);
    }
  };

  // Reset the inactivity timer
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(async () => {
      console.log("Navigating to banner page...");
      await logInactivity(); // Log inactivity before navigating
      navigate("/"); // Redirect user to the banner
    }, timeout);
  }, [navigate, timeout]);

  useEffect(() => {
    const handleActivity = () => resetTimer();

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("click", handleActivity);

    resetTimer(); // Start the timer initially

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("click", handleActivity);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [resetTimer]);

  return null;
};

export default InactivityHandler;
