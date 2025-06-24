import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { images } from '@/assets';

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
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Cica</span>{' '}
                <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">Noblesse</span>
              </h1>
              <p className="text-xs text-white">Pressing Premium</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {['Accueil', 'Services', 'Tarifs', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors duration-300 ${
                  scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-yellow-400'
                }`}
              >
                {item}
              </a>
            ))}
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
            {['Accueil', 'Services', 'Tarifs', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
