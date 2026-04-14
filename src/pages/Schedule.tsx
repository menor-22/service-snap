import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { professionals, services, timeSlots } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Schedule = () => {
  const { profId, serviceId } = useParams();
  const navigate = useNavigate();
  const prof = professionals.find((p) => p.id === Number(profId));
  const service = services.find((s) => s.id === Number(serviceId));
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  if (!prof || !service) return null;

  // Generate next 14 days
  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  });

  const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const handleConfirm = () => {
    setConfirmed(true);
    toast({ title: "Agendamento confirmado! ✅", description: `${service.name} com ${prof.name}` });
    setTimeout(() => navigate("/bookings"), 2000);
  };

  if (confirmed) {
    return (
      <div className="mobile-container bg-background flex flex-col items-center justify-center gap-4">
        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
          <Check className="w-10 h-10 text-primary-foreground" />
        </div>
        <h1 className="text-xl font-bold text-card-foreground">Agendamento Confirmado!</h1>
        <p className="text-muted-foreground text-center px-8">
          {service.name} com {prof.name}
        </p>
      </div>
    );
  }

  return (
    <div className="mobile-container bg-muted pb-6">
      <div className="px-6 pt-12">
        <button onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft className="w-6 h-6 text-card-foreground" />
        </button>
        <h1 className="text-xl font-bold text-card-foreground mb-1">Agendar Horário</h1>
        <p className="text-muted-foreground text-sm mb-6">{service.name} • {prof.name}</p>

        {/* Date selection */}
        <h2 className="text-sm font-semibold text-card-foreground mb-3">Selecione a data</h2>
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {days.map((day, i) => (
            <button
              key={i}
              onClick={() => setSelectedDate(i)}
              className={`flex flex-col items-center min-w-[56px] py-3 px-2 rounded-2xl transition-colors ${
                selectedDate === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-card-foreground"
              }`}
            >
              <span className="text-xs font-medium opacity-70">{dayNames[day.getDay()]}</span>
              <span className="text-lg font-bold">{day.getDate()}</span>
              <span className="text-xs opacity-70">
                {day.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "")}
              </span>
            </button>
          ))}
        </div>

        {/* Time selection */}
        {selectedDate !== null && (
          <>
            <h2 className="text-sm font-semibold text-card-foreground mb-3 mt-4">Selecione o horário</h2>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-3 rounded-xl text-sm font-medium transition-colors ${
                    selectedTime === time
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-card-foreground"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Summary & Confirm */}
        {selectedDate !== null && selectedTime && (
          <div className="mt-6 bg-background rounded-2xl p-4 shadow-sm">
            <h3 className="font-semibold text-card-foreground mb-2">Resumo</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>📋 {service.name}</p>
              <p>👤 {prof.name}</p>
              <p>📅 {days[selectedDate].toLocaleDateString("pt-BR")}</p>
              <p>🕐 {selectedTime}</p>
              <p className="text-primary font-bold text-base mt-2">R${service.price}</p>
            </div>
            <Button onClick={handleConfirm} className="w-full mt-4 rounded-xl h-12">
              Confirmar Agendamento
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
