import { CalendarCheck } from "lucide-react";
import { bookings } from "@/data/mockData";
import BottomNav from "@/components/BottomNav";
import clockIcon from "@/assets/clock.png";
import calendarIcon from "@/assets/calendar-icon.png";

const statusColors = {
  confirmed: "bg-primary/10 text-accent-foreground",
  pending: "bg-yellow-100 text-yellow-700",
  completed: "bg-secondary text-muted-foreground",
};

const statusLabels = {
  confirmed: "Confirmado",
  pending: "Pendente",
  completed: "Concluído",
};

const Bookings = () => {
  return (
    <div className="mobile-container bg-muted pb-20">
      <div className="px-6 pt-12">
        <h1 className="text-xl font-bold text-card-foreground mb-6">Minhas Reservas</h1>

        <div className="flex flex-col gap-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-background rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center text-2xl">
                  {booking.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-card-foreground">{booking.professionalName}</h3>
                  <p className="text-sm text-muted-foreground">{booking.service}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[booking.status]}`}>
                  {statusLabels[booking.status]}
                </span>
              </div>
              <div className="flex items-center gap-4 mt-3 pt-3 border-t">
                <div className="flex items-center gap-1.5">
                  <img src={calendarIcon} alt="" className="w-4 h-4 opacity-60" />
                  <span className="text-sm text-muted-foreground">{new Date(booking.date).toLocaleDateString("pt-BR")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <img src={clockIcon} alt="" className="w-4 h-4 opacity-60" />
                  <span className="text-sm text-muted-foreground">{booking.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="bookings" />
    </div>
  );
};

export default Bookings;
