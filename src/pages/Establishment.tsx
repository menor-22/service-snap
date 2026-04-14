import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Clock } from "lucide-react";
import { professionals, services } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const Establishment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const prof = professionals.find((p) => p.id === Number(id));
  const profServices = services.filter((s) => s.professionalId === Number(id));

  if (!prof) return <div className="mobile-container flex items-center justify-center">Não encontrado</div>;

  return (
    <div className="mobile-container bg-muted pb-6">
      {/* Header */}
      <div className="bg-primary px-6 pt-12 pb-10 rounded-b-3xl relative">
        <button onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft className="w-6 h-6 text-primary-foreground" />
        </button>
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-2xl bg-primary-foreground/20 flex items-center justify-center text-4xl">
            {prof.image}
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary-foreground">{prof.name}</h1>
            <p className="text-primary-foreground/70 text-sm">{prof.specialty}</p>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-primary-foreground text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">{prof.rating}</span>
                <span className="text-sm text-primary-foreground/60">({prof.reviews})</span>
              </div>
              <div className="flex items-center gap-1 text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{prof.location}</span>
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
                  <div className="flex items-center gap-1.5 mt-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-primary">R${service.price}</span>
                </div>
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
