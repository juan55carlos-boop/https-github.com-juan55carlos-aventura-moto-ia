const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Descubre Tu Próxima Aventura
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Encuentra el vehículo perfecto y las mejores rutas para tu próximo viaje
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explorar Vehículos
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Ver Rutas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
