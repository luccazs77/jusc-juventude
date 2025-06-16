"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-40">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/jusc-logo-sem-fundo.png"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain scale-125"
          />
        </div>

        {/* Menu Desktop */}
        <nav className={`hidden md:flex space-x-10`}>
          <a href="#inicio" className="text-gray-700 hover:text-red-600">
            Início
          </a>
          <a href="#sobre" className="text-gray-700 hover:text-red-600">
            Sobre
          </a>
          <a href="#atividades" className="text-gray-700 hover:text-red-600">
            Atividades
          </a>
          <a href="#eventos" className="text-gray-700 hover:text-red-600">
            Eventos
          </a>
        </nav>

        {/* Botão Hamburguer Mobile */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
         <div className="md:hidden mt-4 flex flex-col items-center space-y-4 transition-all duration-300 animate-slide-down">
          <a
            href="#inicio"
            onClick={() => setIsOpen(false)}
            className="text-2xl text-gray-700 hover:text-red-600"
          >
            Início
          </a>
          <a
            href="#sobre"
            onClick={() => setIsOpen(false)}
            className="text-2xl text-gray-700 hover:text-red-600"
          >
            Sobre
          </a>
          <a
            href="#atividades"
            onClick={() => setIsOpen(false)}
            className="text-2xl text-gray-700 hover:text-red-600"
          >
            Atividades
          </a>
          <a
            href="#eventos"
            onClick={() => setIsOpen(false)}
            className="text-2xl text-gray-700 hover:text-red-600"
          >
            Eventos
          </a>
        </div>
      )}
    </header>
  );
}
