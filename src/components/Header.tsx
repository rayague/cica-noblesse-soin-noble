import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Home, Sparkles, Tag, Mail } from 'lucide-react';
import { images } from '@/assets';

const navLinks = [
  { name: 'Accueil', href: '#accueil', icon: <Home className="w-5 h-5 mr-2" /> },
  { name: 'Services', href: '#services', icon: <Sparkles className="w-5 h-5 mr-2" /> },
  { name: 'Tarifs', href: '#tarifs', icon: <Tag className="w-5 h-5 mr-2" /> },
  { name: 'Contact', href: '#contact', icon: <Mail className="w-5 h-5 mr-2" /> },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <img src="/images/cicawb.png" alt="Logo Cica Noblesse Pressing" className="w-12 h-12 rounded-full object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                <span className="bg-yellow-500 bg-clip-text text-transparent">Cica</span>{' '}
                <span className="bg-yellow-500 bg-clip-text text-transparent">Noblesse</span>
              </h1>
              <p
                className={`text-base drop-shadow-md bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}
              >
                Pressing de Qualité
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium flex items-center transition-colors duration-300 ${
                  scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-yellow-400'
                }`}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Cotonou+Bénin"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-4 py-2 rounded-full shadow hover:from-yellow-500 hover:to-yellow-600 hover:text-white transition-all duration-300"
            >
              <MapPin className="w-5 h-5" />
              Itinéraire
            </a>
          </div>

          <button
            className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg p-4">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-700 hover:text-blue-600 flex items-center"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Cotonou+Bénin"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-4 py-2 rounded-full shadow hover:from-yellow-500 hover:to-yellow-600 hover:text-white transition-all duration-300 justify-center"
            >
              <MapPin className="w-5 h-5" />
              Itinéraire
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
