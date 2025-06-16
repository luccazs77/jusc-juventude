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
      }, 5000); // gira a cada 5 segundos
    }
    return () => clearInterval(interval);
  }, [slider]);

  const events = [
    {
      badge: "Sexta",
      badgeColor: "bg-blue-100 text-blue-700",
      date: "2025-06-20",
      title: "Missa de abertura do festejo do  Sagrado Coração de Jesus",
      description: "Festejo do Sagrado Coração de Jesus, PE: Antonio Elton",
      time: "Sexta, 19h",
      location: "Comunidade do Sagrado Coração de Jesus",
    },
     {
      badge: "Sabado",
      badgeColor: "bg-blue-100 text-blue-700",
      date: "2025-06-21",
      title: "2ª Noite do festejo do Sagrado Coração de Jesus",
      description: "Noite da Juventude, Convidados: COM-São Raimundo, DIAC: Márcio Franco",
      time: "Sexta, 19h",
      location: "Comunidade do Sagrado Coração de Jesus",
    },
    {
      badge: "Domingo",
      badgeColor: "bg-blue-100 text-blue-700",
      date: "2025-06-22",
      title: "3ª Noite do festejo do Sagrado Coração de Jesus",
      description: "Noite do Dízimo, Convidados: COM-São Vicente de Paulo, PE: Garcia",
      time: "Sexta, 19h",
      location: "Comunidade do Sagrado Coração de Jesus",
    },
    {
      badge: "Segunda",
      badgeColor: "bg-blue-100 text-blue-700",
      date: "2025-06-23",
      title: "4ª Noite do festejo do Sagrado Coração de Jesus",
      description: "Noite da Liturgia, Convidados: COM-N.S De Fátima, PE: Alberto",
      time: "Sexta, 19h",
      location: "Comunidade do Sagrado Coração de Jesus",
    },
     {
      badge: "Terça",
      badgeColor: "bg-blue-100 text-blue-700",
      date: "2025-06-24",
      title: "5ª Noite do festejo do Sagrado Coração de Jesus",
      description: "Noite da Catequese e Batismo, Convidados: COM-S.José do Bonfim, DIAC: Joelson Mineiro",
      time: "Sexta, 19h",
      location: "Comunidade do Sagrado Coração de Jesus",
    },
    {
      badge: "Quarta",
      badgeColor: "bg-blue-100 text-blue-700",
      date: "2025-06-25",
      title: "6ª Noite do festejo do Sagrado Coração de Jesus",
      description: "Noite da Pastoral Familiar, Convidados: COM-São Benedito, PE: Paulo",
      time: "Sexta, 19h",
      location: "Comunidade do Sagrado Coração de Jesus",
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
