import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/retouche-cica2.jpg" 
          alt="Tissu de haute qualité" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-800 opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-white leading-tight">
              L'art du soin textile
            </h1>
            <p className="text-md sm:text-lg text-gray-200 mb-8">
              Confiez-nous vos vêtements les plus précieux. Nous leur redonnons vie avec un savoir-faire inégalé et une passion pour la perfection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                Explorer nos services <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
