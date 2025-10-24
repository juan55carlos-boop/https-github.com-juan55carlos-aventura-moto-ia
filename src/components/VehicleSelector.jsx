const VehicleSelector = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Motocicleta Adventure',
      type: 'Moto',
      image: '/images/adventure-bike.jpg',
      description: 'Perfecta para aventuras todoterreno'
    },
    {
      id: 2,
      name: 'Auto Compacto',
      type: 'Auto',
      image: '/images/compact-car.jpg',
      description: 'Ideal para recorridos urbanos'
    },
    {
      id: 3,
      name: 'SUV 4x4',
      type: 'SUV',
      image: '/images/suv.jpg',
      description: 'Para terrenos difíciles y familias'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Elige Tu Vehículo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Selecciona el tipo de vehículo que mejor se adapte a tu aventura
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">{vehicle.name}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-gray-600 mb-4">{vehicle.description}</p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Seleccionar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleSelector;
