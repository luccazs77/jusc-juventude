import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export default function EventsSection() {
  return (
    <section id="eventos" className="py-16 px-4 bg-white/50 transition-all duration-500">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Próximos Eventos</h2>
          <p className="text-lg text-gray-600">Não perca nossos próximos encontros e atividades especiais!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge className="bg-red-100 text-red-700">Neste Sábado</Badge>
                <span className="text-sm text-gray-500">06 Jun</span>
              </div>
              <CardTitle className="text-xl">Encontro Sábado</CardTitle>
              <CardDescription>Divulgação do Festejo SCJ na comunidade de Aparecida</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Calendar className="mr-2 h-4 w-4" />
                Sábado, 19h às 21h
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="mr-2 h-4 w-4" />
                Comunidade de Aparecida
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge className="bg-red-100 text-red-600">Neste Domingo</Badge>
                <span className="text-sm text-gray-500">07 Jun</span>
              </div>
              <CardTitle className="text-xl">Encontro Domingo</CardTitle>
              <CardDescription>Divulgação do Festejo SCJ na comunidade do Bonfim</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Calendar className="mr-2 h-4 w-4" />
               Domingo, 07h ás 09h
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="mr-2 h-4 w-4" />
                Comunidade do Bonfim
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge className="bg-red-100 text-red-800">Neste Domingo</Badge>
                <span className="text-sm text-gray-500">05 Fev</span>
              </div>
              <CardTitle className="text-xl">Encontro Domingo</CardTitle>
              <CardDescription>Divulgação do Festejo SCJ na comunidade do SCJ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Calendar className="mr-2 h-4 w-4" />
                Domingo, 19h ás 20h
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="mr-2 h-4 w-4" />
                Comunidade do Sagrado Coração de Jesus
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
