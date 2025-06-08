
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Services', href: '#services' },
    { name: 'Tarifs', href: '#tarifs' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Nettoyage à sec',
    'Lavage aqueux',
    'Repassage professionnel',
    'Détachage expert',
    'Service express',
    'Retouches couture'
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span className="text-noble-yellow">Cica</span>{' '}
              <span className="text-sky-blue">Noblesse</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Le soin noble de vos vêtements depuis plus de 20 ans. 
              Excellence, qualité et respect de l'environnement.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-noble-yellow rounded-full flex items-center justify-center">
                <Heart size={16} className="text-white" />
              </div>
              <span className="text-sm text-gray-400">Made with care in Paris</span>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-noble-yellow transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Nos services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-sky-blue mt-1" />
                <div className="text-sm text-gray-400">
                  <div>123 Avenue de la République</div>
                  <div>75011 Paris, France</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-sky-blue" />
                <span className="text-sm text-gray-400">01 42 34 56 78</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-sky-blue" />
                <span className="text-sm text-gray-400">contact@cica-noblesse.fr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              © 2024 Cica Noblesse. Tous droits réservés.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-noble-yellow transition-colors duration-300">
                Mentions légales
              </a>
              <a href="#" className="hover:text-noble-yellow transition-colors duration-300">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-noble-yellow transition-colors duration-300">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
