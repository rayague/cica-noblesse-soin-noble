import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const images = [
  '/images/retouche-cica2.jpg',
  '/images/retouche-cica1.png'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Tissu de haute qualité"
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-slate-800 opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 text-white leading-tight">
            Expérience, élégance et fidélité <br />
            15 ans d’expertise au service de votre linge.
            </h1>
            <p className="text-sm sm:text-md text-gray-200 mb-8">
            Nos clients nous font confiance depuis des décennies pour préserver la beauté et la longévité de leurs vêtements, grâce à un savoir-faire exigeant et un service attentionné.            </p>
            
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
