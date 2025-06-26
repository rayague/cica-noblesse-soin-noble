import { Truck, Home, Bell, FileText, Gift, Scissors, Star, ArrowRight } from 'lucide-react';

const Tarifs = () => {
  const advantages = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Livraison à Domicile",
      description: "Service de livraison disponible dans toute la zone."
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Collecte à Domicile",
      description: "Nous venons chercher vos vêtements chez vous."
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Notifications Automatiques",
      description: "Soyez informé dès que vos vêtements sont prêts."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Factures Digitales",
      description: "Recevez vos factures physiquement ou en ligne."
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Programme de fidélité",
      description: 
        "Réduction allant jusqu'à 15% et des remises spéciales cadeaux.",
      
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Retouches Offertes*",
      description: "Service de retouche gratuit selon l'ampleur des travaux."
    }
  ];
  
  return (
    <section id="tarifs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Pourquoi nous choisir ?</span>
          </h2>
          <p className="text-xl text-gray-600">Nos avantages exclusifs pour un service client inégalé.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className={`${advantage.title === 'Programme de fidélité' ? 'bg-yellow-50' : 'bg-gray-50'} rounded-xl p-6 flex items-start space-x-4 hover:shadow-lg hover:bg-blue-50 transition-all duration-300`}>
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                {advantage.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 text-gray-800">{advantage.title}</h3>
                {Array.isArray(advantage.description) ? (
                  <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                    {advantage.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#tarifs-detailles" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
            Voir nos tarifs détaillés <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div id="tarifs-detailles" className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Tarifs du Service Complet</span>
            </h3>
            <p className="text-lg text-gray-600 mt-2">Lavage et repassage inclus pour un soin impeccable.</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
            <div className="w-full lg:flex-1 bg-blue-50 rounded-2xl shadow-lg p-4 sm:p-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Vêtements homme</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-blue-100 text-blue-900">
                      <th className="px-4 py-3 text-left font-semibold text-base">Article</th>
                      <th className="px-4 py-3 text-right font-semibold text-base">Prix</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 divide-y divide-blue-100">
                    <tr className="hover:bg-blue-200/40 transition"><td className="px-4 py-2">Chemise</td><td className="px-4 py-2 text-right">600 FCFA</td></tr>
                    <tr className="hover:bg-blue-200/40 transition"><td className="px-4 py-2">Pantalon</td><td className="px-4 py-2 text-right">700 FCFA</td></tr>
                    <tr className="hover:bg-blue-200/40 transition"><td className="px-4 py-2">Costume 2 pièces</td><td className="px-4 py-2 text-right">2 500 FCFA</td></tr>
                    <tr className="hover:bg-blue-200/40 transition"><td className="px-4 py-2">Costume 3 pièces</td><td className="px-4 py-2 text-right">3 000 / 3 500 FCFA</td></tr>
                    <tr className="hover:bg-blue-200/40 transition"><td className="px-4 py-2">Veste / Blazer</td><td className="px-4 py-2 text-right">1 500 FCFA</td></tr>
                    <tr className="hover:bg-blue-200/40 transition"><td className="px-4 py-2">Complet (Lessi-Bazin-Pagne etc..)</td><td className="px-4 py-2 text-right">1 000 FCFA</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full lg:flex-1 bg-blue-50 rounded-2xl shadow-lg p-4 sm:p-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Vêtements femme</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-blue-100 text-blue-900">
                      <th className="px-4 py-3 text-left font-semibold text-base">Article</th>
                      <th className="px-4 py-3 text-right font-semibold text-base">Prix</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 divide-y divide-blue-100">
                    <tr className="hover:bg-blue-200/40 transition"><td className="px-4 py-2">Chemisier</td><td className="px-4 py-2 text-right">600 FCFA</td></tr>
                    <tr className="hover:bg-blue-200/40 transition"><td className="px-4 py-2">Pantalon (femme)</td><td className="px-4 py-2 text-right">700 FCFA</td></tr>
                    <tr className="hover:bg-blue-200/40 transition"><td className="px-4 py-2">Robe simple</td><td className="px-4 py-2 text-right">800 / 1 000 FCFA</td></tr>
                    <tr className="hover:bg-blue-200/40 transition"><td className="px-4 py-2">Robe de soirée</td><td className="px-4 py-2 text-right">1 500 / 2 000 / 3 000 FCFA</td></tr>
                    <tr className="hover:bg-blue-200/40 transition"><td className="px-4 py-2">Jupe</td><td className="px-4 py-2 text-right">500 / 700 FCFA</td></tr>
                    <tr className="hover:bg-blue-200/40 transition"><td className="px-4 py-2">Robe Bazin-Lessi-pagne-guipur +pierre</td><td className="px-4 py-2 text-right">1 500 FCFA</td></tr>
                    <tr className="hover:bg-blue-200/40 transition"><td className="px-4 py-2">Complet (Lessi-Bazin-Pagne)</td><td className="px-4 py-2 text-right">1 000 / 1 500 FCFA</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tarifs;
