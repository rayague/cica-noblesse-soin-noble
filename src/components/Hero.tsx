import { Sparkles, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="accueil" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Image de fond avec flou */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/image1.jpg)',
          filter: 'blur(4px)',
          transform: 'scale(1.05)'
        }}
      />
      
      {/* Image de fond nette */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: 'url(/images/image4.jpg)',
          // clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
        }}
      />
      
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/10 to-yellow-700/60"></div>

      <div className="container mx-auto text-center px-4 relative z-10">
        <div className="animate-fade-in flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex-1">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-6 text-gray-800">
              <span className="text-noble-blue">Cica</span>{' '}
              <span className="text-noble-yellow"> Noblesse</span>{' '}
              <span className="text-noble-yellow"> Pressing</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-8 text-white font-light max-w-2xl mx-auto">
              Le soin noble de vos vêtements
            </p>
            <p className="text-base sm:text-lg mb-8 sm:mb-12 text-white max-w-3xl mx-auto">
              Depuis des années, nous traitons vos vêtements avec l'excellence et le raffinement qu'ils méritent dans notre pressing haut de gamme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#services"
                className="bg-noble-yellow text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                Découvrir nos services
              </a>
              <a 
                href="#contact"
                className="border-2 border-noble-yellow text-noble-yellow px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-noble-yellow hover:text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Nous contacter
              </a>
            </div>
          </div>
          <div className="flex-1 hidden md:block">
            <img src="/images/laundry-6179799_1920.jpg" alt="Pressing illustration" className="w-full max-w-xs mx-auto rounded-2xl shadow-xl" />
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
