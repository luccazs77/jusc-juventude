import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Star } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Sobre o JUSC</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos mais que um grupo - somos uma família unida por valores comuns e o desejo de impactar positivamente
            nossa comunidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-red-50 to-pink-50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-800">Nossa Missão</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
               Unir os jovens sem deixar apagar a chama do Espirito Santo nos seus corações,atraés de atividades que promova espiritual e comunitário.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-pink-50 to-red-50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-800">Nossa Comunidade</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                Um espaço acolhedor onde jovens encontram amizade, apoio e oportunidades de crescimento.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-red-50 to-red-100">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-700 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-800">Nossos Valores</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                Respeito, solidariedade, inclusão e compromisso com o bem-estar da nossa comunidade e meio ambiente.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
