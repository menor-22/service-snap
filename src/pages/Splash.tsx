import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarCheck } from "lucide-react";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/login"), 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="mobile-container flex flex-col items-center justify-center bg-primary">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-primary-foreground/20 flex items-center justify-center">
          <CalendarCheck className="w-12 h-12 text-primary-foreground" />
        </div>
        <h1 className="text-3xl font-bold text-primary-foreground">AgendaFácil</h1>
        <p className="text-primary-foreground/70 text-sm">Seus agendamentos em um só lugar</p>
      </div>
    </div>
  );
};

export default Splash;
