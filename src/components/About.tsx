
import { Users, Heart, Leaf, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Nous aimons ce que nous faisons et cela se ressent dans chaque vêtement traité.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Plus de 20 ans d\'expérience au service de la qualité et du savoir-faire.'
    },
    {
      icon: Leaf,
      title: 'Écologie',
      description: 'Engagement environnemental avec des produits et méthodes respectueux de la planète.'
    },
    {
      icon: Users,
      title: 'Service client',
      description: 'Une équipe dédiée pour vous offrir une expérience personnalisée et exceptionnelle.'
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            À <span className="text-noble-yellow">propos</span> de nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            L'histoire d'une entreprise familiale passionnée par l'art du pressing et l'excellence du service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">Notre histoire</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Fondée en 2003 par la famille Cicala, <strong className="text-noble-yellow">Cica Noblesse</strong> 
                est née de la passion pour l'art du pressing et du respect des textiles les plus précieux.
              </p>
              <p>
                Aujourd'hui, nous sommes fiers d'être reconnus comme l'une des meilleures enseignes de pressing 
                de la région, alliant tradition artisanale et technologies modernes pour offrir à nos clients 
                un service d'exception.
              </p>
              <p>
                Notre équipe de professionnels expérimentés traite chaque vêtement avec le soin et l'attention 
                qu'il mérite, dans le respect de l'environnement et de votre satisfaction.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-noble-yellow mb-2">20+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sky-blue mb-2">5000+</div>
                <div className="text-sm text-gray-600">Clients satisfaits</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-noble-yellow mb-2">100k+</div>
                <div className="text-sm text-gray-600">Vêtements traités</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-noble-yellow-light to-sky-blue-light rounded-2xl p-8 animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1527576539890-dfa815648363?w=500&h=600&fit=crop&crop=center" 
              alt="Intérieur moderne du pressing Cica Noblesse"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Nos valeurs */}
        <div className="animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Nos valeurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-noble-yellow-light to-sky-blue-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-gray-700" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
