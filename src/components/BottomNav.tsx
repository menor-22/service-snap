import { useNavigate } from "react-router-dom";
import { Home, Search, CalendarCheck, User } from "lucide-react";

const tabs = [
  { id: "home", icon: Home, label: "Início", path: "/home" },
  { id: "explore", icon: Search, label: "Explorar", path: "/explore" },
  { id: "bookings", icon: CalendarCheck, label: "Reservas", path: "/bookings" },
  { id: "profile", icon: User, label: "Perfil", path: "/profile" },
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
            className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-colors ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <tab.icon className={`w-5 h-5 ${isActive ? "stroke-[2.5]" : ""}`} />
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
