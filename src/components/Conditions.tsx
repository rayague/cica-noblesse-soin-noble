const Conditions = () => {
  return (
    <section id="conditions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Conditions <span className="text-noble-yellow">Générales</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="font-bold mr-2">1.</span>
              <span>10 Frs par jour pour frais de magasinage seront perçus à partir du 10<sup>ème</sup> jour après dépôt.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">2.</span>
              <span>Après deux (02) mois, la maison n'est plus responsable des pertes ou avaries (<strong>60 jours</strong>).</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">3.</span>
              <div>
                <span>En cas de dommages causés aux effets, la responsabilité du pressing est limitée à :</span>
                <ul className="list-disc ml-8 mt-2 space-y-2">
                  <li>Huit (8) fois le prix du blanchissage pour tout effet non griffé.</li>
                  <li>Dix (10) fois pour les linges griffés.</li>
                  <li>Une (1) fois le prix du blanchissage pour les draps.</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">4.</span>
              <span>Les synthétiques, boucles, boutons, fermetures, broderies de fil sur Bazin ne sont pas pris en compte.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">5.</span>
              <span>Les effets dépourvus d'étiquetage d'entretien ne sont pas garantis.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Conditions; 