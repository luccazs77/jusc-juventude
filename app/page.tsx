"use client"

import React from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ActivitiesSection from "@/components/activities-section"
import EventsSection from "@/components/events-section"
import GallerySection from "@/components/gallery-section"
import Footer from "@/components/footer"
import JoinModal from "@/components/join-modal"

export default function JUSCWebsite() {
  const [showJoinModal, setShowJoinModal] = React.useState(false)
  const [formData, setFormData] = React.useState({
    nome: "",
    email: "",
    telefone: "",
    idade: "",
  })
  const [formSubmitted, setFormSubmitted] = React.useState(false)

  const handleOpenModal = () => {
    setShowJoinModal(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Dados enviados:", formData)
    setFormSubmitted(true)

    // Reset após 3 segundos
    setTimeout(() => {
      setFormSubmitted(false)
      setShowJoinModal(false)
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        idade: "",
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-red-100">
      <Header />
      <HeroSection onJoinClick={handleOpenModal} />
      <AboutSection />
      <ActivitiesSection />
      <EventsSection />
      <GallerySection />
      <Footer />
      <JoinModal
        open={showJoinModal}
        onOpenChange={setShowJoinModal}
        formData={formData}
        formSubmitted={formSubmitted}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <GlobalStyles />
    </div>
  )
}

function GlobalStyles() {
  return (
    <style jsx global>{`
      @keyframes shine {
        from {
          left: -100%;
        }
        to {
          left: 100%;
        }
      }
      
      .group-hover\\:animate-shine {
        animation: shine 1s forwards;
      }
      
      @keyframes highlight {
        0%, 100% {
          background-color: transparent;
        }
        50% {
          background-color: rgba(239, 68, 68, 0.1);
        }
      }
      
      .highlight-section {
        animation: highlight 2s ease;
      }
    `}</style>
  )
}
