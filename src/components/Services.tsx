import { useState, useEffect } from 'react';
import { Droplets, Sparkles, Shield, Zap } from 'lucide-react';

const Services = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const serviceImages = [
    "/images/anton-savinov-3rpjs5qwD_U-unsplash.jpg",
    "/images/dan-lefebvre-APUvZYCjPJ0-unsplash.jpg",
    "/images/close-up-hands-washing-laundry.jpg",
    "/images/m0851---FH4Uo2PYA-unsplash.jpg",
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % serviceImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [serviceImages.length]);

  const services = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Lavage Simple",
      description: "Nettoyage en profondeur de vos vêtements du quotidien.",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Lavage à Sec",
      description: "Traitement délicat pour vos tissus les plus précieux.",
      image: "/images/lavage-a-sec.png"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Service Complet",
      description: "Lavage + Repassage pour un résultat impeccable.",
      image: "/images/service-complet.jpg"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Repassage",
      description: "Finition professionnelle pour une tenue parfaite.",
      image: "/images/repassage.jpg"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Traitement de Taches",
      description: "Élimination experte des taches les plus tenaces.",
      image: "/images/top-view-detergent-bottles-clothes.jpg"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Blanchissage",
      description: "Redonnez l'éclat d'origine à vos vêtements blancs.",
      image: "/images/blanchissage.png"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Service Express",
      description: "Vos vêtements prêts en moins de 24h chrono.",
      image: "/images/service-express.jpg"
    }
  ];
  
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Nos Services</span>
          </h2>
          <p className="text-xl text-gray-600">Une gamme complète pour tous vos besoins.</p>
        </div>

        {/* Service Image Carousel */}
        <div className="mb-16 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
          {serviceImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Service ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-3xl font-bold mb-2">Excellence & Qualité</h3>
            <p className="text-lg">Découvrez notre savoir-faire unique</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-8 left-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full shadow-lg">
                  {service.icon}
                </div>
                <h3 className="mt-8 text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
