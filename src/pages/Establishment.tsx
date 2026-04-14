import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";
import { professionals, services } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import fotoClinica from "@/assets/foto-clinica.jpg";
import pinIcon from "@/assets/pin.png";
import clockIcon from "@/assets/clock.png";

const Establishment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const prof = professionals.find((p) => p.id === Number(id));
  const profServices = services.filter((s) => s.professionalId === Number(id));

  if (!prof) return <div className="mobile-container flex items-center justify-center">Não encontrado</div>;

  return (
    <div className="mobile-container bg-muted pb-6">
      {/* Header with clinic photo */}
      <div className="relative">
        <img src={fotoClinica} alt="Estabelecimento" className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <button onClick={() => navigate(-1)} className="absolute top-12 left-4 w-9 h-9 rounded-full bg-background/80 flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-card-foreground" />
        </button>
      </div>

      <div className="px-6 -mt-10 relative z-10">
        <div className="bg-background rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-3xl">
              {prof.image}
            </div>
            <div className="flex-1">
              <h1 className="text-lg font-bold text-card-foreground">{prof.name}</h1>
              <p className="text-sm text-muted-foreground">{prof.specialty}</p>
              <div className="flex items-center gap-3 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-medium text-card-foreground">{prof.rating}</span>
                  <span className="text-xs text-muted-foreground">({prof.reviews})</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src={pinIcon} alt="" className="w-4 h-4 opacity-50" />
                  <span className="text-xs text-muted-foreground">{prof.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="px-6 mt-6">
        <h2 className="text-base font-semibold text-card-foreground mb-4">Serviços</h2>
        <div className="flex flex-col gap-3">
          {profServices.map((service) => (
            <div key={service.id} className="bg-background rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-card-foreground">{service.name}</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <img src={clockIcon} alt="" className="w-4 h-4 opacity-60" />
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>
                </div>
                <span className="text-lg font-bold text-primary">R${service.price}</span>
              </div>
              <Button
                onClick={() => navigate(`/schedule/${prof.id}/${service.id}`)}
                className="w-full mt-3 rounded-xl"
              >
                Agendar
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Establishment;
