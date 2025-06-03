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
    loop: true,
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
      }, 5000); // gira a cada 3 segundos
    }
    return () => clearInterval(interval);
  }, [slider]);

  const events = [
    {
      badge: "Neste Sábado",
      badgeColor: "bg-red-100 text-red-700",
      date: "06 Jun",
      title: "Encontro Sábado",
      description: "Divulgação do Festejo SCJ na comunidade de Aparecida",
      time: "Sábado, 19h às 21h",
      location: "Comunidade de Aparecida",
    },
    {
      badge: "Neste Domingo",
      badgeColor: "bg-red-100 text-red-600",
      date: "07 Jun",
      title: "Encontro Domingo",
      description: "Divulgação do Festejo SCJ na comunidade do Bonfim",
      time: "Domingo, 07h às 09h",
      location: "Comunidade do Bonfim",
    },
    {
      badge: "Neste Domingo",
      badgeColor: "bg-red-100 text-red-800",
      date: "07 Jun",
      title: "Encontro Domingo",
      description: "Divulgação do Festejo SCJ na comunidade do SCJ",
      time: "Domingo, 19h às 20h",
      location: "Comunidade do Sagrado Coração de Jesus",
    },
    {
      badge: "Sábado",
      badgeColor: "bg-blue-100 text-blue-700",
      date: "14 Jun",
      title: "Encontro Sábado",
      description: "Divulgação do Festejo SCJ no nosso bairro à tarde",
      time: "Sábado, 15h ás 18h",
      location: "Comunidade do Sagrado Coração de Jesus",
    },
    {
      badge: "Sábado",
      badgeColor: "bg-blue-100 text-blue-700",
      date: "14 Jun",
      title: "Encontro do JUSC",
      description: "Organizar a nossa participação na noite do festejo.",
      time: "Sábado, 19h às 21h",
      location: "Comunidade do Sagrado Coração de Jesus",
    },
    {
      badge: "Sexta",
      badgeColor: "bg-blue-100 text-blue-700",
      date: "20 Jun",
      title: "Missa Sagrado Coração de Jesus",
      description: "Festejo do Sagrado Coração de Jesus.",
      time: "Sexta, 19h às 21h",
      location: "Comunidade do Sagrado Coração de Jesus",
    },
  ];

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
          {events.map((event, index) => (
            <div key={index} className="keen-slider__slide">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge className={event.badgeColor}>{event.badge}</Badge>
                    <span className="text-sm text-gray-500">{event.date}</span>
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
