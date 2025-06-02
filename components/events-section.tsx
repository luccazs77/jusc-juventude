import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export default function EventsSection() {
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

        {/* Carrossel horizontal */}
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="min-w-[300px] hover:shadow-lg transition-shadow flex-shrink-0">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge className="bg-red-100 text-red-700">
                    {i === 0
                      ? "Neste Sábado"
                      : i === 1
                      ? "Neste Domingo"
                      : "Ação Social"}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    {i === 0
                      ? "06 Jun"
                      : i === 1
                      ? "07 Jun"
                      : "05 Fev"}
                  </span>
                </div>
                <CardTitle className="text-xl">
                  {i === 0
                    ? "Encontro Sábado"
                    : i === 1
                    ? "Encontro Domingo"
                    : "Campanha do Agasalho"}
                </CardTitle>
                <CardDescription>
                  {i === 0
                    ? "Divulgação do Festejo SCJ na comunidade de Aparecida"
                    : i === 1
                    ? "Divulgação do Festejo SCJ na comunidade do Bonfim"
                    : "Divulgação do Festejo SCJ na comunidade do SCJ"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  {i === 0
                    ? "Sábado, 19h às 21h"
                    : i === 1
                    ? "Domingo, 07h às 09h"
                    : "Todo o mês de Fevereiro"}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="mr-2 h-4 w-4" />
                  {i === 0
                    ? "Comunidade de Aparecida"
                    : i === 1
                    ? "Comunidade do Bonfim"
                    : "Diversos pontos da cidade"}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
