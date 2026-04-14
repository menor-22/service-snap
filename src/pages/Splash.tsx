import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo4 from "@/assets/logo4.png";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/login"), 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="mobile-container flex flex-col items-center justify-center bg-primary">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <img src={logo4} alt="Agendei" className="h-14 brightness-0 invert" />
        <p className="text-primary-foreground/70 text-sm">Seus agendamentos em um só lugar</p>
      </div>
    </div>
  );
};

export default Splash;
