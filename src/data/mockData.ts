import catCabelo from "@/assets/cat-cabelo.png";
import catLavacar from "@/assets/cat-lavacar.png";
import catManicure from "@/assets/cat-manicure.png";
import catMedico from "@/assets/cat-medico.png";
import catNutricao from "@/assets/cat-nutricao.png";
import catPersonal from "@/assets/cat-personal.png";
import catPet from "@/assets/cat-pet.png";
import catPilates from "@/assets/cat-pilates.png";

export const categories = [
  { id: 1, name: "Médico", image: catMedico },
  { id: 2, name: "Cabelo", image: catCabelo },
  { id: 3, name: "Manicure", image: catManicure },
  { id: 4, name: "Nutrição", image: catNutricao },
  { id: 5, name: "Personal", image: catPersonal },
  { id: 6, name: "Pilates", image: catPilates },
  { id: 7, name: "Pet", image: catPet },
  { id: 8, name: "Lava Car", image: catLavacar },
];

export const professionals = [
  { id: 1, name: "Dra. Ana Silva", specialty: "Dermatologista", rating: 4.8, reviews: 120, location: "Centro, SP", image: "👩‍⚕️", categoryId: 1, price: 250 },
  { id: 2, name: "Dr. Carlos Lima", specialty: "Clínico Geral", rating: 4.9, reviews: 200, location: "Jardins, SP", image: "👨‍⚕️", categoryId: 1, price: 180 },
  { id: 3, name: "Studio Hair", specialty: "Corte e Coloração", rating: 4.7, reviews: 95, location: "Moema, SP", image: "💇‍♀️", categoryId: 2, price: 120 },
  { id: 4, name: "Nail Art Studio", specialty: "Manicure e Pedicure", rating: 4.9, reviews: 310, location: "Pinheiros, SP", image: "💅", categoryId: 3, price: 80 },
  { id: 5, name: "Nutri Vida", specialty: "Nutrição Esportiva", rating: 4.8, reviews: 150, location: "Itaim, SP", image: "🥗", categoryId: 4, price: 220 },
  { id: 6, name: "Fit Personal", specialty: "Personal Trainer", rating: 4.6, reviews: 88, location: "Vila Mariana, SP", image: "💪", categoryId: 5, price: 150 },
  { id: 7, name: "Studio Pilates", specialty: "Pilates Reformer", rating: 4.8, reviews: 175, location: "Moema, SP", image: "🧘‍♀️", categoryId: 6, price: 130 },
  { id: 8, name: "Pet Care", specialty: "Banho e Tosa", rating: 4.7, reviews: 200, location: "Brooklin, SP", image: "🐶", categoryId: 7, price: 90 },
];

export const services = [
  { id: 1, name: "Consulta Inicial", duration: "50 min", price: 250, professionalId: 1 },
  { id: 2, name: "Retorno", duration: "30 min", price: 150, professionalId: 1 },
  { id: 3, name: "Peeling Facial", duration: "60 min", price: 350, professionalId: 1 },
  { id: 4, name: "Consulta Geral", duration: "40 min", price: 180, professionalId: 2 },
  { id: 5, name: "Check-up Completo", duration: "90 min", price: 400, professionalId: 2 },
  { id: 6, name: "Corte Feminino", duration: "45 min", price: 120, professionalId: 3 },
  { id: 7, name: "Coloração", duration: "90 min", price: 250, professionalId: 3 },
  { id: 8, name: "Manicure Gel", duration: "60 min", price: 80, professionalId: 4 },
  { id: 9, name: "Pedicure Completa", duration: "45 min", price: 70, professionalId: 4 },
];

export const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
];

export const bookings = [
  { id: 1, professionalName: "Dra. Ana Silva", service: "Consulta Inicial", date: "2026-04-20", time: "10:00", status: "confirmed" as const, image: "👩‍⚕️" },
  { id: 2, professionalName: "Nail Art Studio", service: "Manicure Gel", date: "2026-04-25", time: "14:30", status: "pending" as const, image: "💅" },
  { id: 3, professionalName: "Dr. Carlos Lima", service: "Consulta Geral", date: "2026-04-10", time: "09:00", status: "completed" as const, image: "👨‍⚕️" },
];

export const userProfile = {
  name: "João da Silva",
  email: "joao@email.com",
  phone: "(11) 99999-9999",
  avatar: "👤",
};
