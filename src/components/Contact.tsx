import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "Téléphone",
      text: "+229 01 57 08 31 60",
      link: "tel:+2290157083160"
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Email",
      text: "contact@cicanoblesse.com",
      link: "mailto:contact@cicanoblesse.com",
      subtext: "Cliquez pour envoyer un e-mail"
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Adresse",
      text: "Cotonou, Bénin",
      link: "https://www.google.com/maps/search/?api=1&query=Cotonou+Bénin",
      subtext: "Cliquez pour voir sur la carte"
    }
  ];

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const quickMessages = [
    "Bonjour, j'aimerais avoir des informations sur vos tarifs.",
    "Bonjour, quand puis-je déposer mon linge ?",
    "Bonjour, proposez-vous un service de collecte à domicile ?",
    "Bonjour, j'ai une question sur le traitement d'un vêtement délicat.",
    "Bonjour, quels sont vos horaires d'ouverture ?",
    "Bonjour, mon linge est-il prêt à être récupéré ?",
    "Bonjour, j'ai une commande spéciale, comment procéder ?",
    "Bonjour, où êtes-vous situé exactement à Cotonou ?"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      const text = `Contact Cica Noblesse\nNom: ${name}\nMessage: ${message}`;
      const url = `https://wa.me/2290157083160?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
      setName('');
      setMessage('');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 w-full max-w-full box-border">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Contactez-nous !</span>
          </h2>
          <p className="text-xl text-gray-600">Nous sommes à votre disposition pour toute question.</p>
        </div>

        {/* Quick WhatsApp Messages */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#25D366" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19.83 14.37a8.5 8.5 0 1 1-5.46-5.46" /><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
              Message rapide sur WhatsApp
            </h3>
            <p className="text-gray-600 mt-2">Cliquez sur un message pour démarrer la conversation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickMessages.map((msg, index) => (
              <a
                key={index}
                href={`https://wa.me/2290157083160?text=${encodeURIComponent(msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-green-50 transition-all duration-300 flex items-center space-x-3 group"
              >
                <MessageSquare className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 group-hover:text-gray-900 text-sm">{msg}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center min-w-0 w-full overflow-hidden box-border">
          {/* Contact Info */}
          <div className="space-y-6 min-w-0 break-words box-border">
            {contactInfo.map((item, index) => (
              <a
                href={item.link}
                key={index}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 space-y-2 sm:space-y-0 bg-blue-50/50 rounded-xl p-4 sm:p-0 group transition-colors duration-300"
              >
                <div className="bg-blue-100 p-3 rounded-full group-hover:bg-yellow-100 transition-colors duration-300 mb-2 sm:mb-0">
                  {item.icon}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600 group-hover:text-yellow-600 transition-colors duration-300 break-all">{item.text}</p>
                  {item.subtext && (
                    <p className="text-xs text-blue-600 mt-1 font-medium">{item.subtext}</p>
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="min-w-0 break-words box-border">
            <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Ou écrivez votre message personnalisé</h3>
            <form className="space-y-6 w-full max-w-md mx-auto min-w-0 box-border" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 box-border" placeholder="Votre nom complet" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} value={message} onChange={e => setMessage(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 box-border" placeholder="Votre message..."></textarea>
              </div>
              <button type="submit" disabled={!(name && message)} className={`w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${!(name && message) ? 'opacity-50 cursor-not-allowed' : ''}`}>
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
