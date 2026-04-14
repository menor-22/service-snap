export const categories = [
  { id: 1, name: "Médico", icon: "Stethoscope" },
  { id: 2, name: "Dentista", icon: "SmilePlus" },
  { id: 3, name: "Estética", icon: "Sparkles" },
  { id: 4, name: "Psicólogo", icon: "Brain" },
  { id: 5, name: "Nutrição", icon: "Apple" },
  { id: 6, name: "Fisioterapia", icon: "Activity" },
];

export const professionals = [
  { id: 1, name: "Dra. Ana Silva", specialty: "Dermatologista", rating: 4.8, reviews: 120, location: "Centro, SP", image: "👩‍⚕️", categoryId: 1, price: 250 },
  { id: 2, name: "Dr. Carlos Lima", specialty: "Clínico Geral", rating: 4.9, reviews: 200, location: "Jardins, SP", image: "👨‍⚕️", categoryId: 1, price: 180 },
  { id: 3, name: "Dra. Maria Santos", specialty: "Ortodontista", rating: 4.7, reviews: 95, location: "Moema, SP", image: "👩‍⚕️", categoryId: 2, price: 300 },
  { id: 4, name: "Studio Bella", specialty: "Estética Facial", rating: 4.9, reviews: 310, location: "Pinheiros, SP", image: "💆‍♀️", categoryId: 3, price: 150 },
  { id: 5, name: "Dr. Pedro Oliveira", specialty: "Psicólogo Clínico", rating: 4.6, reviews: 88, location: "Vila Mariana, SP", image: "🧑‍⚕️", categoryId: 4, price: 200 },
  { id: 6, name: "Nutri Vida", specialty: "Nutrição Esportiva", rating: 4.8, reviews: 150, location: "Itaim, SP", image: "🥗", categoryId: 5, price: 220 },
];

export const services = [
  { id: 1, name: "Consulta Inicial", duration: "50 min", price: 250, professionalId: 1 },
  { id: 2, name: "Retorno", duration: "30 min", price: 150, professionalId: 1 },
  { id: 3, name: "Peeling Facial", duration: "60 min", price: 350, professionalId: 1 },
  { id: 4, name: "Consulta Geral", duration: "40 min", price: 180, professionalId: 2 },
  { id: 5, name: "Check-up Completo", duration: "90 min", price: 400, professionalId: 2 },
  { id: 6, name: "Limpeza Dental", duration: "45 min", price: 200, professionalId: 3 },
  { id: 7, name: "Aparelho Ortodôntico", duration: "60 min", price: 500, professionalId: 3 },
  { id: 8, name: "Limpeza de Pele", duration: "60 min", price: 150, professionalId: 4 },
  { id: 9, name: "Botox", duration: "30 min", price: 800, professionalId: 4 },
];

export const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
];

export const bookings = [
  { id: 1, professionalName: "Dra. Ana Silva", service: "Consulta Inicial", date: "2026-04-20", time: "10:00", status: "confirmed" as const, image: "👩‍⚕️" },
  { id: 2, professionalName: "Studio Bella", service: "Limpeza de Pele", date: "2026-04-25", time: "14:30", status: "pending" as const, image: "💆‍♀️" },
  { id: 3, professionalName: "Dr. Carlos Lima", service: "Consulta Geral", date: "2026-04-10", time: "09:00", status: "completed" as const, image: "👨‍⚕️" },
];

export const userProfile = {
  name: "João da Silva",
  email: "joao@email.com",
  phone: "(11) 99999-9999",
  avatar: "👤",
};
