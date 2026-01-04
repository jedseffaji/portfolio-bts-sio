import Section from "../../components/Section";

export default function Page() {
  return (
    <Section
      title="Veille technologique"
      subtitle="Les implants neurologiques : fonctionnement, usages, avancées et enjeux."
    >
      {/* INTRODUCTION */}
      <div
        className="
          group
          rounded-2xl
          border border-white/10
          bg-white/5
          p-6
          transition
          duration-300
          hover:bg-white/10
          hover:-translate-y-1
          hover:shadow-2xl
        "
      >
        <h2 className="text-xl font-semibold">Introduction</h2>
        <p className="mt-4 text-white/75">
          Les implants neurologiques, aussi appelés implants cérébraux ou neuroprothèses,
          sont des dispositifs électroniques implantés dans le système nerveux, le plus
          souvent directement dans le cerveau. Leur objectif est d’enregistrer ou de
          stimuler l’activité neuronale afin de créer une interface entre le cerveau
          humain et une machine.
        </p>
        <p className="mt-3 text-white/75">
          Cette technologie, longtemps considérée comme de la science-fiction, est
          aujourd’hui une réalité dans le domaine médical et fait l’objet de nombreuses
          recherches dans les domaines technologique, scientifique et militaire.
        </p>
      </div>

      {/* FONCTIONNEMENT */}
      <div
        className="
          mt-8
          group
          rounded-2xl
          border border-white/10
          bg-white/5
          p-6
          transition
          duration-300
          hover:bg-white/10
          hover:-translate-y-1
          hover:shadow-2xl
        "
      >
        <h2 className="text-xl font-semibold">Fonctionnement des implants neurologiques</h2>
        <p className="mt-4 text-white/75">
          Un implant neurologique fonctionne grâce à un ensemble de micro-électrodes
          placées au contact des neurones. Ces électrodes permettent soit de capter
          l’activité électrique du cerveau, soit de stimuler certaines zones précises.
        </p>
        <p className="mt-3 text-white/75">
          Les signaux enregistrés sont transmis à un système informatique capable de les
          analyser et de les traduire en actions compréhensibles par une machine
          (déplacement d’un curseur, commande d’un fauteuil, génération de texte, etc.).
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-white/75">
          <li>Captation des signaux neuronaux</li>
          <li>Traitement informatique et décodage</li>
          <li>Transmission vers un dispositif externe</li>
          <li>Stimulation du cerveau si nécessaire</li>
        </ul>
      </div>

      {/* DOMAINES */}
      <div
        className="
          mt-8
          group
          rounded-2xl
          border border-white/10
          bg-white/5
          p-6
          transition
          duration-300
          hover:bg-white/10
          hover:-translate-y-1
          hover:shadow-2xl
        "
      >
        <h2 className="text-xl font-semibold">Domaines d’application</h2>

        <h3 className="mt-4 font-semibold">Santé et médecine</h3>
        <p className="mt-2 text-white/75">
          Les implants neurologiques sont principalement utilisés dans le domaine médical.
          Ils permettent de traiter certaines pathologies comme la maladie de Parkinson,
          l’épilepsie ou encore certaines formes de dépression sévère.
        </p>
        <p className="mt-2 text-white/75">
          Ils sont également utilisés pour restaurer des fonctions perdues, par exemple
          l’audition grâce aux implants cochléaires, la parole chez des patients paralysés
          ou encore la mobilité chez des personnes atteintes de lésions de la moelle
          épinière.
        </p>

        <h3 className="mt-6 font-semibold">Technologies et grand public</h3>
        <p className="mt-2 text-white/75">
          Certaines entreprises, comme Neuralink, travaillent sur des interfaces
          cerveau-machine permettant de contrôler des appareils informatiques par la
          pensée. L’objectif à long terme serait de faciliter la communication homme-machine
          sans clavier ni souris.
        </p>

        <h3 className="mt-6 font-semibold">Applications militaires</h3>
        <p className="mt-2 text-white/75">
          Le domaine militaire s’intéresse également aux implants neurologiques afin
          d’améliorer la communication, la réactivité et les capacités cognitives des
          soldats, notamment via des programmes de recherche financés par la DARPA.
        </p>
      </div>

      {/* AVANCÉES */}
      <div
        className="
          mt-8
          group
          rounded-2xl
          border border-white/10
          bg-white/5
          p-6
          transition
          duration-300
          hover:bg-white/10
          hover:-translate-y-1
          hover:shadow-2xl
        "
      >
        <h2 className="text-xl font-semibold">Avancées récentes</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
          <li>
            Des patients paralysés ont pu remarcher grâce à une interface reliant le cerveau
            et la moelle épinière.
          </li>
          <li>
            Des personnes privées de parole ont pu communiquer à nouveau grâce à des implants
            combinés à l’intelligence artificielle.
          </li>
          <li>
            Neuralink a réalisé ses premières implantations humaines fin 2023, marquant une
            étape importante dans le développement des implants cérébraux.
          </li>
        </ul>
      </div>

      {/* ENJEUX */}
      <div
        className="
          mt-8
          group
          rounded-2xl
          border border-white/10
          bg-white/5
          p-6
          transition
          duration-300
          hover:bg-white/10
          hover:-translate-y-1
          hover:shadow-2xl
        "
      >
        <h2 className="text-xl font-semibold">Enjeux éthiques et sécuritaires</h2>
        <p className="mt-4 text-white/75">
          Les implants neurologiques soulèvent des questions éthiques majeures, notamment en
          ce qui concerne la protection des données cérébrales et le respect de la vie
          privée.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-white/75">
          <li>Protection des données neuronales</li>
          <li>Risque de piratage des implants</li>
          <li>Consentement éclairé des patients</li>
          <li>Respect du libre arbitre</li>
          <li>Inégalités d’accès à la technologie</li>
        </ul>
      </div>

      {/* SYNTHÈSE */}
      <div
        className="
          mt-8
          group
          rounded-2xl
          border border-white/10
          bg-white/5
          p-6
          transition
          duration-300
          hover:bg-white/10
          hover:-translate-y-1
          hover:shadow-2xl
        "
      >
        <h2 className="text-xl font-semibold">Synthèse (niveau BTS SIO)</h2>
        <p className="mt-4 text-white/75">
          Les implants neurologiques sont une technologie innovante combinant informatique,
          électronique et neurosciences. Ils permettent de réparer certaines fonctions
          humaines mais nécessitent un encadrement strict en raison des enjeux éthiques et
          sécuritaires.
        </p>
      </div>

      {/* CONCLUSION */}
      <div
        className="
          mt-8
          group
          rounded-2xl
          border border-white/10
          bg-white/5
          p-6
          transition
          duration-300
          hover:bg-white/10
          hover:-translate-y-1
          hover:shadow-2xl
        "
      >
        <h2 className="text-xl font-semibold">Conclusion</h2>
        <p className="mt-4 text-white/75">
          Les implants neurologiques représentent une avancée majeure à la frontière entre
          l’humain et la machine. Leur développement pourrait transformer la médecine et les
          technologies de demain, à condition que leur usage reste encadré et responsable.
        </p>
      </div>

      {/* SOURCES */}
      <div
        className="
          mt-8
          group
          rounded-2xl
          border border-white/10
          bg-white/5
          p-6
          transition
          duration-300
          hover:bg-white/10
          hover:-translate-y-1
          hover:shadow-2xl
        "
      >
        <h2 className="text-xl font-semibold">Sources</h2>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-white/75">
          <li>Inserm – Neuroprothèses et implants cérébraux</li>
          <li>Wikipédia – Implant cérébral</li>
          <li>Numerama – Interfaces cerveau-machine</li>
          <li>UNESCO – Neurodroits et éthique</li>
          <li>Nature – Recherches sur les implants neuronaux</li>
          <li>EPFL / CHUV – Restauration de la marche</li>
          <li>Neuralink – Essais cliniques</li>
          <li>DARPA – Interfaces neuronales militaires</li>
        </ul>
      </div>
    </Section>
  );
}
