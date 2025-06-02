import CarouselGallery from "@/components/carousel-gallery"

export default function GallerySection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Momentos Especiais</h2>
          <p className="text-lg text-gray-600">Confira alguns dos nossos melhores momentos juntos!</p>
        </div>

        <CarouselGallery />
      </div>
    </section>
  )
}
