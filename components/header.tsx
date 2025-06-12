"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between h-16 relative">
          {/* Logo centralizada no mobile */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center justify-center">
            <Image
              src="/logo-jusc-r.png"
              alt="Logo"
              width={300}
              height={300}
              className="object-contain scale-125"
            />
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-10 ml-auto">
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

          {/* Botão hamburguer (mobile only) */}
          <button
            className="md:hidden absolute right-4 top-4"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Menu Mobile com animação */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center space-y-4 transition-all duration-300 animate-slide-down">
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
        )}
      </div>
    </header>
  );
}
