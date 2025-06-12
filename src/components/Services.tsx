import { Shirt, Droplets, Sparkles, Clock, Shield, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: 'Nettoyage à sec',
      description: 'Traitement délicat de vos vêtements les plus précieux avec des solvants écologiques de haute qualité.',
      features: ['Tissus délicats', 'Costumes et robes', 'Cuir et daim']
    },
    {
      icon: Droplets,
      title: 'Lavage aqueux',
      description: 'Lavage traditionnel avec des détergents premium pour un résultat impeccable et un respect total des fibres.',
      features: ['Linge de maison', 'Vêtements du quotidien', 'Articles de sport']
    },
    {
      icon: Sparkles,
      title: 'Repassage professionnel',
      description: 'Repassage minutieux avec des techniques professionnelles pour un rendu parfait et une finition soignée.',
      features: ['Plis marqués', 'Finition sur mesure', 'Emballage soigné']
    },
    {
      icon: Clock,
      title: 'Service express',
      description: 'Pour vos urgences, nous proposons un service rapide sans compromis sur la qualité.',
      features: ['24h chrono', 'Disponible 6j/7', 'Tarif préférentiel']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <img src="/images/shirts-4696379_1920.jpg" alt="Services illustration" className="mx-auto mb-6 w-20 h-20 rounded-xl shadow-lg" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            <span className="text-noble-blue">Nos</span> <span className="text-noble-yellow">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de prestations pour prendre soin de tous vos vêtements avec l'excellence que vous méritez.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-sky-blue-light w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon size={32} className="text-noble-blue" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-noble-blue">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-noble-blue rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
