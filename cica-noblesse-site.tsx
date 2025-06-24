import React, { useState, useEffect } from 'react';
import { ChevronRight, Phone, MapPin, Mail, Clock, Truck, Home, Sparkles, CheckCircle, Gift, Bell, FileText, Star, ArrowRight, Menu, X, Instagram, Facebook, Twitter, Droplets, Shield, Zap, Scissors, Heart, Users, Award, Smartphone } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceImages = [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800",
    "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800",
    "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=800"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % serviceImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Lavage Simple",
      description: "Nettoyage en profondeur de vos vêtements du quotidien",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Lavage à Sec",
      description: "Traitement délicat pour vos tissus les plus précieux",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Service Complet",
      description: "Lavage + Repassage pour un résultat impeccable",
      image: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=400"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Repassage",
      description: "Finition professionnelle pour une tenue parfaite",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Traitement de Taches",
      description: "Élimination experte des taches les plus tenaces",
      image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=400"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Blanchissage",
      description: "Redonnez l'éclat d'origine à vos vêtements blancs",
      image: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?w=400"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Service Express",
      description: "Vos vêtements prêts en 24h chrono",
      image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=400"
    }
  ];

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CN</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Cica</span>{' '}
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Noblesse</span>
                </h1>
                <p className="text-xs text-gray-600">Pressing Premium</p>
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
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-600 to-yellow-500 opacity-90"></div>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="text-white">Cica</span>{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Noblesse</span>{' '}
                <span className="text-white">Pressing</span>
              </h1>
              <p className="text-2xl text-white mb-4">Le soin noble de vos vêtements</p>
              <p className="text-lg text-gray-200">Excellence • Qualité • Service Premium</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#services" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Découvrir nos services <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Demander un devis gratuit
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Années d'expertise</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-sm">Clients satisfaits</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="text-3xl font-bold">24h</div>
                <div className="text-sm">Service express</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-4 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Section with Image Gallery */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Nos</span>{' '}
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Services Premium</span>
            </h2>
            <p className="text-xl text-gray-600">Une gamme complète pour tous vos besoins</p>
          </div>

          {/* Service Image Carousel */}
          <div className="mb-16 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            {serviceImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Service ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Excellence & Qualité</h3>
              <p className="text-lg">Découvrez notre savoir-faire unique</p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Special Notice */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-2xl p-8 text-white text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Sparkles className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Bientôt Disponible!</h3>
              <Sparkles className="w-8 h-8" />
            </div>
            <p className="text-lg">Service de lavage au kilo (Lavaumatique) - La solution économique pour vos grandes quantités</p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Pourquoi</span>{' '}
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Nous Choisir?</span>
            </h2>
            <p className="text-xl text-gray-600">Des avantages exclusifs pour une expérience premium</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-blue-600 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center text-white mb-6">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>

          {/* Retouches Special Offer */}
          <div className="mt-16 bg-gradient-to-r from-yellow-50 to-blue-50 rounded-2xl p-8 border-2 border-yellow-400">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Scissors className="w-8 h-8 text-yellow-600" />
              <h3 className="text-2xl font-bold text-gray-800">Offre Spéciale Retouches</h3>
              <Scissors className="w-8 h-8 text-yellow-600" />
            </div>
            <p className="text-center text-gray-700 max-w-2xl mx-auto">
              Profitez de notre service de retouche GRATUIT! Pour chaque commande, nous offrons les petites retouches. 
              Pour les travaux plus importants, bénéficiez de tarifs préférentiels. 
              Parce que votre satisfaction est notre priorité!
            </p>
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section id="tarifs" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Tarifs</span>{' '}
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Transparents</span>
            </h2>
            <p className="text-xl text-gray-600">Des prix justes pour un service d'excellence</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Homme */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
                <h3 className="text-2xl font-bold">Vêtements Homme</h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { item: 'Chemise', price: '4,50€' },
                  { item: 'Pantalon', price: '6,50€' },
                  { item: 'Costume 2 pièces', price: '18,00€' },
                  { item: 'Veste / Blazer', price: '9,50€' },
                  { item: 'Cravate', price: '3,50€' },
                  { item: 'Manteau', price: '15,00€' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">{item.item}</span>
                    <span className="font-bold text-blue-600 text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Femme */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 text-white">
                <h3 className="text-2xl font-bold">Vêtements Femme</h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { item: 'Chemisier', price: '5,00€' },
                  { item: 'Pantalon', price: '6,50€' },
                  { item: 'Robe simple', price: '12,00€' },
                  { item: 'Robe de soirée', price: '25,00€' },
                  { item: 'Jupe', price: '5,50€' },
                  { item: 'Manteau', price: '18,00€' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">{item.item}</span>
                    <span className="font-bold text-yellow-600 text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Spéciaux */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-yellow-600 p-6 text-white">
                <h3 className="text-2xl font-bold">Services Spéciaux</h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { item: 'Détachage simple', price: '3,00€' },
                  { item: 'Détachage complexe', price: '8,00€' },
                  { item: 'Repassage seul (kg)', price: '12,00€' },
                  { item: 'Service express (+50%)', price: 'Sur tarif' },
                  { item: 'Retouche ourlet', price: '8,00€' },
                  { item: 'Retouche complexe', price: 'Sur devis' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">{item.item}</span>
                    <span className="font-bold bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Carte de fidélité */}
          <div className="bg-gradient-to-r from-blue-600 to-yellow-500 rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Gift className="w-10 h-10" />
              <h3 className="text-3xl font-bold">Programme de Fidélité</h3>
              <Gift className="w-10 h-10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">-10%</div>
                <p>Après 5 visites</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">-20%</div>
                <p>Après 10 visites</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1 Service</div>
                <p>Gratuit après 15 visites</p>
              </div>
            </div>
            <p className="text-center mt-6 text-lg">Demandez votre carte de fidélité dès maintenant!</p>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Nous</span>{' '}
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Contacter</span>
            </h2>
            <p className="text-xl text-gray-600">Toujours à votre service</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Informations de Contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-600 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Adresse</h4>
                      <p className="text-gray-600">Bureau situé à côté du dépôt de ciment Zogbo</p>
                      <p className="text-gray-600">(annexe Godomey)</p>
                      <p className="text-gray-600">0272 BP 81, Zogbo - Rép. Bénin</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-600 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Téléphones</h4>
                      <p className="text-gray-600">(+229) 97 89 36 99</p>
                      <p className="text-gray-600">(+229) 99 10 70 93</p>
                      <p className="text-gray-600">(+229) 96 44 67 50</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-600 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Horaires d'ouverture</h4>
                      <p className="text-gray-600">Lundi - Vendredi: 7h30 - 19h00</p>
                      <p className="text-gray-600">Samedi: 8h00 - 17h00</p>
                      <p className="text-gray-600">Dimanche: Fermé</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-600 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Informations légales</h4>
                      <p className="text-gray-600">RC: 13-A-17728</p>
                      <p className="text-gray-600">IFU: 2201300990000</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="tel:+22997893699" className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Appelez-nous
                </a>
                <a href="#" className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0851!2d2.3522!3d6.3668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjInMDAuNSJOIDLCsDIxJzA3LjkiRQ!5e0!3m2!1sfr!2sbj!4v1635959623456!5m2!1sfr!2sbj"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Localisation Cica Noblesse Pressing"
              ></iframe>
            </div>
          </div>

          {/* Services Notification Banner */}
          <div className="mt-16 bg-gradient-to-r from-blue-100 to-yellow-100 rounded-2xl p-8 border-2 border-blue-300">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Smartphone className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Services Digitaux Disponibles</h3>
              <Bell className="w-8 h-8 text-yellow-600" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">Notifications automatiques quand vos vêtements sont prêts</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">Factures disponibles en format digital ou papier</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Ils nous font</span>{' '}
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Confiance</span>
            </h2>
            <p className="text-xl text-gray-600">La satisfaction de nos clients, notre plus grande fierté</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marie D.",
                rating: 5,
                comment: "Service impeccable! Mes vêtements sont toujours parfaitement entretenus. Je recommande vivement!",
                service: "Service Complet"
              },
              {
                name: "Jean-Paul K.",
                rating: 5,
                comment: "La livraison à domicile est un vrai plus. Qualité constante depuis des années.",
                service: "Lavage à Sec"
              },
              {
                name: "Sophia A.",
                rating: 5,
                comment: "Les retouches gratuites sont un excellent service. Personnel très professionnel!",
                service: "Service Express"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.service}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à découvrir l'excellence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Confiez-nous vos vêtements et découvrez pourquoi des milliers de clients nous font confiance depuis plus de 10 ans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+22997893699" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Appelez maintenant
            </a>
            <a href="#services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
              Voir nos services
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CN</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    <span className="text-blue-400">Cica</span> <span className="text-yellow-400">Noblesse</span>
                  </h3>
                  <p className="text-sm text-gray-400">Pressing Premium</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Le soin noble de vos vêtements depuis plus de 10 ans. 
                Excellence, qualité et respect de l'environnement.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Liens Rapides</h4>
              <ul className="space-y-2">
                {['Accueil', 'Services', 'Tarifs', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">(+229) 97 89 36 99</span>
                </div>
                <div className="flex items-start gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span className="text-sm">Zogbo, Godomey</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Lun-Sam: 7h30-19h00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>© 2024 Cica Noblesse Pressing. Tous droits réservés.</p>
              <p className="mt-4 md:mt-0">
                Réalisé avec <Heart className="w-4 h-4 inline text-red-500" /> par{' '}
                <a 
                  href="https://portfolio-cnkp.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                >
                  Ray Ague
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
          <div className="bg-white w-3/4 h-full shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">
                  <span className="text-blue-600">Cica</span> <span className="text-yellow-500">Noblesse</span>
                </h2>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="space-y-4">
                {['Accueil', 'Services', 'Tarifs', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;