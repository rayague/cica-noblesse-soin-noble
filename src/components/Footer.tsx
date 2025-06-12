import { Heart, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Services', href: '#services' },
    { name: 'Tarifs', href: '#tarifs' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Nettoyage à sec',
    'Lavage aqueux',
    'Repassage professionnel',
    'Service express'
  ];

  return (
    <footer className="relative bg-gray-900 text-white py-16">
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span className="text-noble-blue">Cica</span>{' '}
              <span className="text-noble-yellow">Noblesse Pressing</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Le soin noble de vos vêtements depuis plusieurs années. 
              Excellence, qualité et respect de l'environnement.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-noble-yellow transition-colors duration-300"
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
                <li key={index} className="text-gray-300 text-sm">
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
                <div className="text-sm text-gray-300">
                  <div>Bureau situé à côté du dépôt de ciment Zogbo (annexe Godomey)</div>
                  <div>0272 BP 81</div>
                  <div>Zogbo - Rép. Bénin</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-sky-blue" />
                <span className="text-sm text-gray-300">(+229) 97 89 36 99</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-sky-blue" />
                <span className="text-sm text-gray-300">contact@cica-noblesse.fr</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <div className="mb-4 md:mb-0">
              © {new Date().getFullYear()} Cica Noblesse Pressing. Réalisé par{' '}
              <a 
                href="https://portfolio-cnkp.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-noble-yellow hover:text-yellow-500 transition-colors duration-300"
              >
                Ray Ague
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
