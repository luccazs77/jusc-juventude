import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Camera } from "lucide-react"

export default function ActivitiesSection() {
  return (
    <section id="atividades" className="py-16 px-4 bg-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Nossas Atividades
          </h2>
          <p className="text-lg text-gray-600">
            Participamos de diversas atividades que fortalecem nossa comunidade
            e desenvolvem nossos talentos.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          <Card className="w-72 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-center">
                <Heart className="mr-2 h-5 w-5 text-red-500" />
                Atividades em Missão
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm text-center">
                Visitas nas famílias, picnic e outras...
              </p>
            </CardContent>
          </Card>

          <Card className="w-72 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-center">
                <Users className="mr-2 h-5 w-5 text-blue-500" />
                Encontros
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm text-center">
                Reuniões semanais com conversas sobre a Bíblia, formações,
                dinâmicas e confraternizações.
              </p>
            </CardContent>
          </Card>

          <Card className="w-72 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-center">
                <Camera className="mr-2 h-5 w-5 text-green-500" />
                Eventos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm text-center">
                Missas, espiritualidade, adoração, louvor, Encontrão da
                Juventude e outros eventos comunitários.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
