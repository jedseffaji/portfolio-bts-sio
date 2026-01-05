import Link from "next/link";
import Section from "../../components/Section";

export default function MentionsLegalesPage() {
  return (
    <Section
      title={`Mentions l\u00e9gales`}
      subtitle={`Informations l\u00e9gales et conditions d'utilisation du site.`}
    >
      <div className="space-y-8 text-white/75">
        <div>
          <h2 className="text-lg font-semibold text-white">
            {"\u00c9diteur du site"}
          </h2>
          <p className="mt-2">
            {"Portfolio \u00e9tudiant r\u00e9alis\u00e9 dans le cadre du BTS SIO (option SISR),"}
            {" usage scolaire et de pr\u00e9sentation professionnelle."}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">{"\u00c9bergement"}</h2>
          <p className="mt-2">
            H{"\u00e9"}bergement web (ou Vercel si d{"\u00e9"}j{"\u00e0"} utilis{"\u00e9"}).
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">
            {"Propri\u00e9t\u00e9 intellectuelle"}
          </h2>
          <p className="mt-2">
            {"Les contenus (textes, images et documents) sont prot\u00e9g\u00e9s."}
            {" Toute r\u00e9utilisation est limit\u00e9e \u00e0 un usage non commercial avec citation"}
            {" de la source."}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">
            {"Donn\u00e9es personnelles"}
          </h2>
          <p className="mt-2">Aucune collecte de donn{"\u00e9"}es personnelles.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">
            {"Protection des donn\u00e9es personnelles (RGPD)"}
          </h2>
          <p className="mt-2">
            {"Ce site ne collecte aucune donn\u00e9e personnelle."}
            {" Il n'y a pas de formulaire, ni de compte utilisateur."}
            {" Aucun cookie de suivi ou publicitaire n'est utilis\u00e9."}
            {" Le site est conforme au RGPD dans la mesure o\u00f9 aucune donn\u00e9e"}
            {" personnelle n'est trait\u00e9e."}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">Cookies</h2>
          <p className="mt-2">Aucun cookie publicitaire.</p>
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex text-sm text-white/70 transition hover:text-white"
          >
            {"\u2190 Retour \u00e0 l'accueil"}
          </Link>
        </div>
      </div>
    </Section>
  );
}
