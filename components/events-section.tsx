"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

export default function EventsSection() {
  const sliderRef = useRef(null);

  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 16 },
      },
    },
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (slider.current) {
      interval = setInterval(() => {
        slider.current?.next();
      },5000); // gira a cada 5 segundos
    }
    return () => clearInterval(interval);
  }, [slider]);

  const events = [
     {
      badge: "Sábado",
      badgeColor: "bg-blue-100 text-blue-700",
      date: "2025-10-25",
      title: "Encontro JUSC",
      description: "Encontro do JUSC com atividades e dinâmicas.",
      time: "Sábado, 19h",
      location: "Sagrado Coração de Jesus",
    },

    {
      badge: "Domingo",
      badgeColor: "bg-blue-100 text-blue-700",
      date: "2025-10-26",
      title: "DNJ 2025 - Dia Nacional da Juventude",
      description: "Dia Nacional da Juventude (Peregrinos de Esperança).",
      time: "Domingo, 15h",
      location: "Santuário de Nazaré - Cohatrac I",
    },

     {
      badge: "Domingo",
      badgeColor: "bg-blue-100 text-blue-700",
      date: "2025-10-26",
      title: "Missa Comunidade Sagrado Coração de Jesus",
      description: "Missa na Comunidade Sagrado Coração de Jesus.",
      time: "Domingo, 19h30",
      location: "Sagrado Coração de Jesus",
    },
     
  ];

  // Filtra eventos que ainda não passaram
  const now = new Date();
  const upcomingEvents = events.filter((event) => {
    const eventDate = new Date(event.date + "T23:59:59");
    return eventDate >= now;
  });

  return (
    <section
      id="eventos"
      className="py-16 px-4 bg-white/50 transition-all duration-500"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Próximos Eventos
          </h2>
          <p className="text-lg text-gray-600">
            Não perca nossos próximos encontros e atividades especiais!
          </p>
        </div>

        <div ref={sliderInstanceRef} className="keen-slider">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="keen-slider__slide">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge className={event.badgeColor}>{event.badge}</Badge>
                    <span className="text-sm text-gray-500">
                      {new Date(event.date + "T12:00:00").toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                      })}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="mr-2 h-4 w-4" />
                    {event.location}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
