"use client"
import { Button } from "@/components/ui/button"
import { Users, Calendar } from "lucide-react"
import Image from "next/image";

interface HeroSectionProps {
  onJoinClick: () => void
}

export default function HeroSection({ onJoinClick }: HeroSectionProps) {
  const scrollToEvents = () => {
    const eventosSection = document.getElementById("eventos")
    if (eventosSection) {
      eventosSection.scrollIntoView({ behavior: "smooth" })

      // Adiciona efeito de destaque na seção
      eventosSection.classList.add("highlight-section")
      setTimeout(() => {
        eventosSection.classList.remove("highlight-section")
      }, 2000)
    }
  }

  return (
    <section id="inicio" className="py-5 px-4 ">
  <div className="container mx-auto text-center">
    <div className="max-w-4xl mx-auto">
      <div className="-mb-6">
        <Image
          src="/logo-jusc-r.png"
          alt="Logo JUSC"
          width={550}
          height={550}
          className="mx-auto"
        />
      </div>

      <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
        Juventude Unida pelo Sagrado Coração
      </p>
      <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
        Um grupo vibrante de jovens comprometidos em fazer a diferença na nossa comunidade através de amizade,
        serviço e crescimento pessoal.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          variant="outline"
          className="text-lg px-8 py-3 border-red-300 text-red-600 hover:bg-red-50 group relative overflow-hidden"
          onClick={scrollToEvents}
        >
          <span className="absolute inset-0 w-0 bg-red-100 transform -skew-x-12 group-hover:animate-shine"></span>
          <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
          <span className="relative z-10">Próximos Eventos</span>
        </Button>
      </div>
    </div>
  </div>
</section>

  )
}
