const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-800">
            Aventura Moto IA
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-blue-600">
              Inicio
            </a>
            <a href="#vehicles" className="text-gray-600 hover:text-blue-600">
              Vehículos
            </a>
            <a href="#routes" className="text-gray-600 hover:text-blue-600">
              Rutas
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
