import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "Téléphone",
      text: "+229 01 97 89 36 99",
      link: "tel:+22997893699"
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Email",
      text: "contact@cicanoblesse.com",
      link: "mailto:contact@cicanoblesse.com"
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Adresse",
      text: "Cotonou, Bénin",
      link: "#"
    }
  ];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      const text = `Contact Cica Noblesse\nNom: ${name}\nEmail: ${email}\nMessage: ${message}`;
      const url = `https://wa.me/22957083160?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
      setName('');
      setEmail('');
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

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center min-w-0 w-full overflow-hidden box-border">
          {/* Contact Info */}
          <div className="space-y-6 min-w-0 break-words box-border">
            {contactInfo.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 space-y-2 sm:space-y-0 bg-blue-50/50 rounded-xl p-4 sm:p-0 group transition-colors duration-300"
              >
                <div className="bg-blue-100 p-3 rounded-full group-hover:bg-yellow-100 transition-colors duration-300 mb-2 sm:mb-0">
                  {item.icon}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600 group-hover:text-yellow-600 transition-colors duration-300 break-all">{item.text}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form className="space-y-6 w-full max-w-md mx-auto min-w-0 box-border" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 box-border" placeholder="Votre nom complet" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 box-border" placeholder="Votre adresse email" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea id="message" rows={4} value={message} onChange={e => setMessage(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 box-border" placeholder="Votre message..."></textarea>
            </div>
            <button type="submit" disabled={!(name && email && message)} className={`w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${!(name && email && message) ? 'opacity-50 cursor-not-allowed' : ''}`}>
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
