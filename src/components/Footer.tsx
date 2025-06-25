import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Cica</span>{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Noblesse</span>
            </h3>
            <p className="text-gray-300">Votre partenaire de confiance pour un soin premium de vos vêtements.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-gray-300 hover:text-yellow-400 transition-colors">Accueil</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#tarifs" className="text-gray-300 hover:text-yellow-400 transition-colors">Tarifs</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contact@cicanoblesse.com</li>
              <li>Téléphone: (+229) 01 97 89 36 99 / 01 96 44 67 50 / 01 99 10 70 93</li>
              <li>Adresse: Cotonou, Bénin</li>
              <li className="mt-2 font-semibold text-white">Horaires d'ouverture :</li>
              <li><span className="font-medium text-yellow-400">Lundi au Samedi</span> : 7heures 50 - 21heures</li>
              <li><span className="font-medium text-yellow-400">Dimanche</span> : 11heures - 19heures</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Cica Noblesse Pressing. Tous droits réservés.</p>
          <p className="mt-2">Réalisé par <a href="https://portfolio-cnkp.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 text-yellow-400 transition-colors">Ray Ague</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
