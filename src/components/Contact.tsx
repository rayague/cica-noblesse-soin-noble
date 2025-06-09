import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Bureau situé à côté du dépôt de ciment Zogbo (annexe Godomey)', '0272 BP 81', 'Zogbo - Rép. Bénin'],
      color: 'text-noble-yellow'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['(+229) 97 89 36 99', '(+229) 99 10 70 93', '(+229) 96 44 67 50'],
      color: 'text-sky-blue'
    },
    {
      icon: Mail,
      title: 'Informations légales',
      details: ['RC 13-A-17728', 'IFU : 2201300990000'],
      color: 'text-noble-yellow'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun-Ven: 7h30 - 19h00', 'Sam: 8h00 - 17h00', 'Dim: Fermé'],
      color: 'text-sky-blue'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Nous <span className="text-noble-yellow">contacter</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une question ? Besoin d'un devis ? Notre équipe est à votre disposition pour vous accompagner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${info.color} mb-4`}>
                <info.icon size={32} />
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">{info.title}</h4>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-sm">{detail}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="tel:+22997893699"
            className="bg-noble-yellow text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block mr-4"
          >
            Appelez-nous
          </a>
          <a 
            href="mailto:contact@cica-noblesse.fr"
            className="border-2 border-noble-yellow text-noble-yellow px-8 py-3 rounded-full font-semibold hover:bg-noble-yellow hover:text-white transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Écrivez-nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
