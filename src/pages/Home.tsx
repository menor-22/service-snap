import { useNavigate } from "react-router-dom";
import { categories, professionals } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import BottomNav from "@/components/BottomNav";
import calendarIcon from "@/assets/calendar-icon.png";
import searchIcon from "@/assets/search-icon.png";
import pinIcon from "@/assets/pin.png";
import clockIcon from "@/assets/clock.png";

const Home = () => {
  const navigate = useNavigate();
  const featured = professionals.slice(0, 4);

  return (
    <div className="mobile-container bg-muted pb-20">
      {/* Header */}
      <div className="bg-primary px-6 pt-12 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-primary-foreground/70 text-sm">Olá, 👋</p>
            <h1 className="text-xl font-bold text-primary-foreground">João da Silva</h1>
          </div>
          <img src={calendarIcon} alt="Calendário" className="w-10 h-10" />
        </div>
        <div className="relative">
          <img src={searchIcon} alt="" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40" />
          <Input placeholder="Buscar serviços..." className="pl-11 h-12 rounded-xl bg-primary-foreground border-0" />
        </div>
      </div>

      <div className="px-6 mt-6">
        {/* Categories */}
        <h2 className="text-base font-semibold text-card-foreground mb-4">Categorias</h2>
        <div className="grid grid-cols-3 gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/explore?category=${cat.id}`)}
              className="flex flex-col items-center gap-2 p-4 bg-background rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <img src={cat.image} alt={cat.name} className="w-12 h-12 object-contain" />
              <span className="text-xs font-medium text-card-foreground">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Featured */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-card-foreground">Destaques</h2>
          <button onClick={() => navigate("/explore")} className="text-sm text-primary font-medium">Ver todos</button>
        </div>
        <div className="flex flex-col gap-3">
          {featured.map((prof) => (
            <button
              key={prof.id}
              onClick={() => navigate(`/establishment/${prof.id}`)}
              className="flex items-center gap-4 p-4 bg-background rounded-2xl shadow-sm text-left"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center text-2xl">
                {prof.image}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-card-foreground">{prof.name}</h3>
                <p className="text-xs text-muted-foreground">{prof.specialty}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-primary font-medium">⭐ {prof.rating}</span>
                  <div className="flex items-center gap-1">
                    <img src={pinIcon} alt="" className="w-3 h-3 opacity-50" />
                    <span className="text-xs text-muted-foreground">{prof.location}</span>
                  </div>
                </div>
              </div>
              <span className="text-sm font-bold text-primary">R${prof.price}</span>
            </button>
          ))}
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  );
};

export default Home;
