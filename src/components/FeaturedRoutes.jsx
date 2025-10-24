const FeaturedRoutes = () => {
  const routes = [
    {
      id: 1,
      name: 'Ruta de la Montaña',
      duration: '3 horas',
      difficulty: 'Intermedio',
      distance: '45 km',
      description: 'Una aventura emocionante a través de paisajes montañosos'
    },
    {
      id: 2,
      name: 'Ruta Costera',
      duration: '2 horas',
      difficulty: 'Fácil',
      distance: '30 km',
      description: 'Disfruta de las vistas al mar en esta ruta relajante'
    },
    {
      id: 3,
      name: 'Ruta del Bosque',
      duration: '4 horas',
      difficulty: 'Avanzado',
      distance: '60 km',
      description: 'Explora senderos naturales y paisajes boscosos'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Rutas Destacadas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre las mejores rutas recomendadas por nuestra comunidad de aventureros
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {routes.map((route) => (
            <div key={route.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {route.name}
              </h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Duración:</span>
                  <span className="font-medium">{route.duration}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Distancia:</span>
                  <span className="font-medium">{route.distance}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Dificultad:</span>
                  <span className={`font-medium ${
                    route.difficulty === 'Fácil' ? 'text-green-600' :
                    route.difficulty === 'Intermedio' ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {route.difficulty}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{route.description}</p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Ver Ruta
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoutes;
