import { useNavigate, useSearchParams } from "react-router-dom";
import { Search, MapPin, Star } from "lucide-react";
import { professionals, categories } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import BottomNav from "@/components/BottomNav";
import { useState } from "react";

const Explore = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState<number | null>(categoryId ? Number(categoryId) : null);

  const filtered = activeCategory
    ? professionals.filter((p) => p.categoryId === activeCategory)
    : professionals;

  return (
    <div className="mobile-container bg-muted pb-20">
      <div className="px-6 pt-12">
        <h1 className="text-xl font-bold text-card-foreground mb-4">Explorar</h1>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input placeholder="Buscar profissionais..." className="pl-11 h-12 rounded-xl" />
        </div>

        {/* Filter chips with category images */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              !activeCategory ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground"
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat.id ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground"
              }`}
            >
              <img src={cat.image} alt={cat.name} className="w-5 h-5 object-contain" />
              {cat.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {filtered.map((prof) => (
            <button
              key={prof.id}
              onClick={() => navigate(`/establishment/${prof.id}`)}
              className="flex items-center gap-4 p-4 bg-background rounded-2xl shadow-sm text-left"
            >
              <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center text-3xl">
                {prof.image}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-card-foreground">{prof.name}</h3>
                <p className="text-sm text-muted-foreground">{prof.specialty}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium text-card-foreground">{prof.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-xs">{prof.location}</span>
                  </div>
                </div>
              </div>
              <span className="text-sm font-bold text-primary">R${prof.price}</span>
            </button>
          ))}
        </div>
      </div>

      <BottomNav active="explore" />
    </div>
  );
};

export default Explore;
