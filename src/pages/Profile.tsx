import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, Settings, HelpCircle, LogOut, ChevronRight } from "lucide-react";
import { userProfile } from "@/data/mockData";
import BottomNav from "@/components/BottomNav";

const menuItems = [
  { icon: User, label: "Editar Perfil" },
  { icon: Settings, label: "Configurações" },
  { icon: HelpCircle, label: "Ajuda e Suporte" },
];

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="mobile-container bg-muted pb-20">
      <div className="bg-primary px-6 pt-12 pb-8 rounded-b-3xl">
        <h1 className="text-xl font-bold text-primary-foreground mb-6">Meu Perfil</h1>
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center text-4xl">
            {userProfile.avatar}
          </div>
          <div>
            <h2 className="text-lg font-bold text-primary-foreground">{userProfile.name}</h2>
            <div className="flex items-center gap-1.5 text-primary-foreground/70 mt-1">
              <Mail className="w-4 h-4" />
              <span className="text-sm">{userProfile.email}</span>
            </div>
            <div className="flex items-center gap-1.5 text-primary-foreground/70 mt-0.5">
              <Phone className="w-4 h-4" />
              <span className="text-sm">{userProfile.phone}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 mt-6">
        <div className="bg-background rounded-2xl shadow-sm overflow-hidden">
          {menuItems.map((item, i) => (
            <button key={i} className="flex items-center gap-4 w-full p-4 text-left hover:bg-muted transition-colors">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <item.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="flex-1 font-medium text-card-foreground">{item.label}</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          ))}
        </div>

        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-4 w-full p-4 mt-4 bg-background rounded-2xl shadow-sm hover:bg-muted transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
            <LogOut className="w-5 h-5 text-destructive" />
          </div>
          <span className="flex-1 font-medium text-destructive text-left">Sair</span>
        </button>
      </div>

      <BottomNav active="profile" />
    </div>
  );
};

export default Profile;
