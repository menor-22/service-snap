import { useNavigate } from "react-router-dom";
import homeIcon from "@/assets/home-icon.png";
import searchIcon from "@/assets/search-icon.png";
import calendarIcon from "@/assets/calendar-icon.png";
import pinIcon from "@/assets/pin.png";

const tabs = [
  { id: "home", icon: homeIcon, label: "Início", path: "/home" },
  { id: "explore", icon: searchIcon, label: "Explorar", path: "/explore" },
  { id: "bookings", icon: calendarIcon, label: "Reservas", path: "/bookings" },
  { id: "profile", icon: pinIcon, label: "Perfil", path: "/profile" },
];

const BottomNav = ({ active }: { active: string }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-background border-t px-2 py-2 flex justify-around z-50">
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => navigate(tab.path)}
            className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-all ${
              isActive ? "opacity-100" : "opacity-40"
            }`}
          >
            <img src={tab.icon} alt={tab.label} className="w-6 h-6 object-contain" />
            <span className={`text-xs font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
