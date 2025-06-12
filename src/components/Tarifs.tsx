import { Check } from 'lucide-react';

const Tarifs = () => {
  const tarifs = [
    {
      category: 'Vêtements homme',
      items: [
        { item: 'Chemise', price: '4,50€' },
        { item: 'Pantalon', price: '6,50€' },
        { item: 'Costume 2 pièces', price: '18,00€' },
        { item: 'Veste / Blazer', price: '9,50€' },
        { item: 'Cravate', price: '3,50€' },
        { item: 'Manteau', price: '15,00€' }
      ]
    },
    {
      category: 'Vêtements femme',
      items: [
        { item: 'Chemisier', price: '5,00€' },
        { item: 'Pantalon', price: '6,50€' },
        { item: 'Robe simple', price: '12,00€' },
        { item: 'Robe de soirée', price: '25,00€' },
        { item: 'Jupe', price: '5,50€' },
        { item: 'Manteau', price: '18,00€' }
      ]
    },
    {
      category: 'Services spéciaux',
      items: [
        { item: 'Détachage simple', price: '3,00€' },
        { item: 'Détachage complexe', price: '8,00€' },
        { item: 'Repassage seul (kg)', price: '12,00€' },
        { item: 'Service express (+50%)', price: 'Sur tarif' },
        { item: 'Retouche ourlet', price: '8,00€' },
        { item: 'Retouche complexe', price: 'Sur devis' }
      ]
    }
  ];

  const avantages = [
    'Collecte et livraison à domicile',
    'Garantie satisfaction client',
    'Produits écologiques certifiés',
    'Emballage soigné inclus',
    'Conseils d\'entretien personnalisés',
    'Programme de fidélité avantageux'
  ];

  return (
    <section id="tarifs" className="py-20 bg-gradient-to-b from-sky-blue-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            <span className="text-noble-blue">Nos</span> <span className="text-noble-yellow">Tarifs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des prix transparents et compétitifs pour des prestations de qualité exceptionnelle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {tarifs.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 border-b border-gray-200 pb-4">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700">{item.item}</span>
                    <span className="font-bold text-noble-yellow text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Avantages inclus */}
        <div className="bg-sky-blue-light rounded-2xl p-8 animate-fade-in">
          <div className="flex items-center justify-center mb-8 gap-4">
            <img src="/images/ironing-403074_1280.jpg" alt="Avantages" className="w-10 h-10" />
            <h3 className="text-2xl font-bold text-gray-800">
              Avantages inclus dans tous nos services
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {avantages.map((avantage, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="bg-white rounded-full p-1">
                  <Check size={16} className="text-sky-blue" />
                </div>
                <span className="text-gray-700">{avantage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tarifs;
