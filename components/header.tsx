import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 -ml-20">
            <div className="w-30 h-30 relative">
              <Image
                src="/logo-jusc-r.png"
                alt="Logo"
                width={300}
                height={300}
                className="object-contain scale-125"
              />
            </div>
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-gray-700 hover:text-red-600 transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-red-600 transition-colors">
              Sobre
            </a>
            <a href="#atividades" className="text-gray-700 hover:text-red-600 transition-colors">
              Atividades
            </a>
            <a href="#eventos" className="text-gray-700 hover:text-red-600 transition-colors">
              Eventos
            </a>
            
          </div>

          <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 ml-20">
            Entre em contato
          </Button>
        </nav>
      </div>
    </header>
  );
}
