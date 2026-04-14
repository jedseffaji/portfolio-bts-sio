import Section from "../../components/Section";

type Certificat = {
  titre: string;
  organisme: string;
  description: string;
  fichier: string;
};

const certificats: Certificat[] = [
  {
    titre: "Certificat 1",
    organisme: "CNIL",
    description: "Certification liée à la protection des données et au RGPD.",
    fichier: "/Comptes%20rendus/Certificats/Certificat1.pdf",
  },
  {
    titre: "Certificat 2",
    organisme: "CNIL",
    description:
      "Certification liée à la cybersécurité et aux bonnes pratiques numériques.",
    fichier: "/Comptes%20rendus/Certificats/Certificat2.pdf",
  },
  {
    titre: "Certificat 3",
    organisme: "CNIL",
    description:
      "Certification sur les enjeux juridiques et techniques de la donnée.",
    fichier: "/Comptes%20rendus/Certificats/Certificat3.pdf",
  },
  {
    titre: "Certificat 4",
    organisme: "CNIL",
    description:
      "Certification sur la gestion et la sécurisation des données personnelles.",
    fichier: "/Comptes%20rendus/Certificats/Certificat4.pdf",
  },
  {
    titre: "Certificat 5",
    organisme: "CNIL",
    description:
      "Certification sur les fondamentaux de la conformité et de la protection des données.",
    fichier: "/Comptes%20rendus/Certificats/Certificat5.pdf",
  },
];

export default function Page() {
  return (
    <Section
      title="Certificats"
      subtitle="Cette page regroupe les certificats obtenus dans le cadre du MOOC de la CNIL."
    >
      <div className="grid gap-6">
        {certificats.map((certificat) => (
          <section
            key={certificat.titre}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">{certificat.titre}</h2>
                <p className="text-sm text-zinc-400">{certificat.organisme}</p>
              </div>

              <a
                href={certificat.fichier}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
              >
                Ouvrir le PDF
              </a>
            </div>

            <p className="mt-4 text-white/75 leading-relaxed">
              {certificat.description}
            </p>

            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-2">
              <iframe
                src={certificat.fichier}
                title={certificat.titre}
                className="h-[520px] w-full rounded-xl border-0 bg-black/20"
              />
            </div>
          </section>
        ))}
      </div>
    </Section>
  );
}
