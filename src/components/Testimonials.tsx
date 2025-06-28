import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rosine SESSOU",
    role: "Cliente fidèle",
    avatar: "https://images.pexels.com/photos/4241328/pexels-photo-4241328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    comment:
      "Un service impeccable ! Mes robes de soirée sont toujours traitées avec le plus grand soin. Cica Noblesse est devenu mon pressing de confiance.",
  },
  {
    name: "Sagbo Djogbe",
    role: "Professionnel exigeant",
    avatar: "https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    comment:
      "La qualité du repassage est exceptionnelle. Mes chemises sont toujours parfaites, ce qui est essentiel pour mon travail. Je recommande vivement.",
  },
  {
    name: "Fatima Miwa",
    role: "Jeune maman",
    avatar: "https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    comment:
      "énantchè nou mi, Cica Noblesse Oyééééé !!!!!",
  },
];
const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-gray-600 text-lg">
            La confiance et la satisfaction de nos clients sont notre plus grande fierté.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-8">
                <Quote className="w-10 h-10 text-yellow-500 mb-4" />
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  {/* <img
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  /> */}
                  <div>
                    <p className="font-bold text-gray-800">
                      {testimonial.name}
                    </p>
                    <div className="flex items-center text-sm text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 