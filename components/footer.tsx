export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">J</span>
          </div>
          <span className="text-xl font-bold">JUSC</span>
        </div>
        <p className="text-gray-400 mb-4">Juventude Unida pelo Sagrado Coração</p>
        <p className="text-sm text-gray-500">© 2025 JUSC. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
