"use client"

import React from "react"
import { Camera } from "lucide-react"

export default function CarouselGallery() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true)

  const slides = [
    {
      id: 1,
      title: "Retiro de Verão 2024",
      description: "Momentos de reflexão e diversão",
      gradient: "from-red-400 via-red-500 to-red-600",
    },
    {
      id: 2,
      title: "Campanha do Agasalho",
      description: "Solidariedade em ação",
      gradient: "from-red-300 via-red-400 to-red-500",
    },
    {
      id: 3,
      title: "Festival de Talentos",
      description: "Descobrindo nossos dons",
      gradient: "from-red-500 via-red-600 to-red-700",
    },
    {
      id: 4,
      title: "Visita ao Orfanato",
      description: "Levando alegria e carinho",
      gradient: "from-red-400 via-red-500 to-pink-500",
    },
    {
      id: 5,
      title: "Acampamento de Liderança",
      description: "Formando novos líderes",
      gradient: "from-red-600 via-red-700 to-red-800",
    },
    {
      id: 6,
      title: "Dia da Amizade",
      description: "Celebrando nossa união",
      gradient: "from-pink-400 via-red-500 to-red-600",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentSlide])

  return (
    <div
      className="relative max-w-6xl mx-auto"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Main Carousel Container */}
      <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        {/* Slides */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                index === currentSlide
                  ? "translate-x-0 opacity-100 scale-100"
                  : index < currentSlide
                    ? "-translate-x-full opacity-0 scale-95"
                    : "translate-x-full opacity-0 scale-95"
              }`}
            >
              <div className={`w-full h-full bg-gradient-to-br ${slide.gradient} relative overflow-hidden`}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute top-32 right-20 w-24 h-24 bg-white rounded-full animate-bounce delay-300"></div>
                  <div className="absolute bottom-20 left-32 w-20 h-20 bg-white rounded-full animate-ping delay-700"></div>
                  <div className="absolute bottom-32 right-10 w-28 h-28 bg-white rounded-full animate-pulse delay-1000"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-8">
                  <div className="mb-6 transform hover:scale-110 transition-transform duration-300">
                    <Camera className="h-16 w-16 md:h-24 md:w-24 mx-auto mb-4 animate-bounce" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold mb-4 animate-fade-in-up">{slide.title}</h3>
                  <p className="text-lg md:text-xl opacity-90 animate-fade-in-up delay-300">{slide.description}</p>

                  {/* Floating Elements */}
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping delay-500"></div>
                  <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white rounded-full animate-pulse delay-1000"></div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group"
        >
          <svg
            className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group"
        >
          <svg
            className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentSlide ? "bg-white scale-125 shadow-lg" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="absolute top-4 right-4">
          <div className={`w-3 h-3 rounded-full ${isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-gray-400"}`}></div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-4">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`relative h-20 md:h-24 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 ${
              index === currentSlide ? "ring-4 ring-red-500 scale-105 shadow-lg" : "hover:ring-2 hover:ring-red-300"
            }`}
          >
            <div className={`w-full h-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center`}>
              <Camera className="h-6 w-6 text-white" />
            </div>
            <div className="absolute inset-0 bg-black/20"></div>
            {index === currentSlide && <div className="absolute inset-0 bg-white/20 animate-pulse"></div>}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-6 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}
