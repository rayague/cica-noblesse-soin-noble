
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['123 Avenue de la République', '75011 Paris, France'],
      color: 'text-noble-yellow'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['01 42 34 56 78', '06 12 34 56 78 (Urgences)'],
      color: 'text-sky-blue'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@cica-noblesse.fr', 'service@cica-noblesse.fr'],
      color: 'text-noble-yellow'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun-Ven: 7h30 - 19h00', 'Sam: 8h00 - 17h00', 'Dim: Fermé'],
      color: 'text-sky-blue'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Nous <span className="text-sky-blue">contacter</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une question ? Besoin d'un devis ? Notre équipe est à votre disposition pour vous accompagner.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Informations de contact */}
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Informations pratiques</h3>
            
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`${info.color} mt-1`}>
                  <info.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Réseaux sociaux */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-lg text-gray-800 mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gradient-to-br from-noble-yellow-light to-sky-blue-light rounded-full flex items-center justify-center text-gray-700 hover:scale-110 transition-transform duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="animate-scale-in">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-noble-yellow focus:border-transparent transition-all duration-300"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-noble-yellow focus:border-transparent transition-all duration-300"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-noble-yellow focus:border-transparent transition-all duration-300"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-noble-yellow focus:border-transparent transition-all duration-300"
                    placeholder="01 23 45 67 89"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type de demande
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-noble-yellow focus:border-transparent transition-all duration-300">
                    <option>Information générale</option>
                    <option>Demande de devis</option>
                    <option>Service client</option>
                    <option>Réclamation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-noble-yellow focus:border-transparent transition-all duration-300"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-noble-yellow to-sky-blue text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
