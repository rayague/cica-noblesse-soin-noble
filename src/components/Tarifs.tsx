import { Truck, Home, Bell, FileText, Gift, Scissors, Star, ArrowRight } from 'lucide-react';

const Tarifs = () => {
  const advantages = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Livraison à Domicile",
      description: "Service de livraison disponible dans toute la zone"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Collecte à Domicile",
      description: "Nous venons chercher vos vêtements chez vous"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Notifications Automatiques",
      description: "Soyez informé dès que vos vêtements sont prêts"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Factures Digitales",
      description: "Recevez vos factures physiquement ou en ligne"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Cartes de Fidélité",
      description: "Profitez de nos avantages clients fidèles"
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Retouches Offertes*",
      description: "Service de retouche gratuit selon l'ampleur des travaux"
    }
  ];
  
  return (
    <section id="tarifs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Pourquoi</span>{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">nous choisir ?</span>
          </h2>
          <p className="text-xl text-gray-600">Nos avantages exclusifs pour un service client inégalé</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 flex items-start space-x-4 hover:shadow-lg hover:bg-blue-50 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-600 to-yellow-500 text-white p-3 rounded-full">
                {advantage.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 text-gray-800">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
            Voir nos tarifs détaillés <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tarifs;
