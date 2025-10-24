import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import VehicleSelector from '../components/VehicleSelector';
import FeaturedRoutes from '../components/FeaturedRoutes';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <VehicleSelector />
        <FeaturedRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
