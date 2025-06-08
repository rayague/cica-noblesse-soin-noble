
import { Sparkles, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-noble-yellow-light to-sky-blue-light">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-pulse">
          <Sparkles size={60} className="text-noble-yellow" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <Star size={40} className="text-sky-blue" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-pulse delay-500">
          <Sparkles size={30} className="text-noble-yellow" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">
            <span className="text-noble-yellow">Cica</span>{' '}
            <span className="text-sky-blue">Noblesse</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-700 font-light max-w-2xl mx-auto">
            Le soin noble de vos vêtements
          </p>
          
          <p className="text-lg mb-12 text-gray-600 max-w-3xl mx-auto">
            Depuis plus de 20 ans, nous prenons soin de vos vêtements avec l'excellence et le raffinement qu'ils méritent. 
            Découvrez un service de pressing haut de gamme où chaque pièce est traitée avec la plus grande attention.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services"
              className="bg-noble-yellow text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Découvrir nos services
            </a>
            <a 
              href="#contact"
              className="bg-sky-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
