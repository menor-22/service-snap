import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarCheck, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="mobile-container flex flex-col bg-background">
      <div className="flex-1 flex flex-col items-center justify-center px-8 gap-8">
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
            <CalendarCheck className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-card-foreground">AgendaFácil</h1>
          <p className="text-muted-foreground text-sm text-center">Entre para gerenciar seus agendamentos</p>
        </div>

        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input placeholder="E-mail" type="email" className="pl-11 h-12 rounded-xl" defaultValue="joao@email.com" />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Senha"
              type={showPassword ? "text" : "password"}
              className="pl-11 pr-11 h-12 rounded-xl"
              defaultValue="123456"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2">
              {showPassword ? <EyeOff className="w-5 h-5 text-muted-foreground" /> : <Eye className="w-5 h-5 text-muted-foreground" />}
            </button>
          </div>
          <p className="text-xs text-primary text-right cursor-pointer">Esqueceu a senha?</p>
          <Button type="submit" className="h-12 rounded-xl text-base font-semibold">
            Entrar
          </Button>
        </form>

        <p className="text-sm text-muted-foreground">
          Não tem conta?{" "}
          <span className="text-primary font-semibold cursor-pointer">Cadastre-se</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
