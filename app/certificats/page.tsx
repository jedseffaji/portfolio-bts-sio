import Section from "../../components/Section";

type Certificate = {
  title: string;
  description: string;
  href: string | null;
  type: "pdf" | "image" | null;
};

const certificates: Certificate[] = [
  {
    title: "Certificat 1",
    description:
      "Certificat obtenu dans le cadre du MOOC de la CNIL. Cet emplacement est prêt à afficher le document dès qu'il sera ajouté dans le dossier public.",
    href: null,
    type: null,
  },
  {
    title: "Certificat 2",
    description:
      "Certificat obtenu dans le cadre du MOOC de la CNIL. Cette carte conserve la structure prévue pour une prévisualisation propre du document.",
    href: null,
    type: null,
  },
  {
    title: "Certificat 3",
    description:
      "Certificat obtenu dans le cadre du MOOC de la CNIL. Le bloc peut accueillir un PDF ou une image sans modifier le design de la page.",
    href: null,
    type: null,
  },
  {
    title: "Certificat 4",
    description:
      "Certificat obtenu dans le cadre du MOOC de la CNIL. L'ouverture en grand pourra être activée automatiquement dès qu'un fichier sera présent.",
    href: null,
    type: null,
  },
  {
    title: "Certificat 5",
    description:
      "Certificat obtenu dans le cadre du MOOC de la CNIL. L'emplacement reste volontairement simple, lisible et cohérent avec le reste du portfolio.",
    href: null,
    type: null,
  },
];

export default function Page() {
  return (
    <Section
      title="Certificats"
      subtitle="Cette page regroupe les certificats obtenus dans le cadre du MOOC de la CNIL."
    >
      <div className="grid gap-6">
        {certificates.map((certificate) => (
          <section
            key={certificate.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-xl font-semibold text-white">{certificate.title}</h2>
            <p className="mt-3 text-white/75 leading-relaxed">
              {certificate.description}
            </p>

            {certificate.href ? (
              <div className="mt-5">
                <div className="mb-4 flex justify-end">
                  <a
                    href={certificate.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
                  >
                    Voir le certificat en grand
                  </a>
                </div>

                <a
                  href={certificate.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl border border-white/10 bg-black/20 p-2 transition hover:bg-black/40"
                >
                  {certificate.type === "pdf" ? (
                    <iframe
                      src={certificate.href}
                      title={certificate.title}
                      className="h-[520px] w-full rounded-xl border border-white/10 bg-black/20"
                    />
                  ) : (
                    <img
                      src={certificate.href}
                      alt={certificate.title}
                      className="h-auto w-full rounded-xl border border-white/10 object-cover"
                    />
                  )}
                </a>
              </div>
            ) : (
              <div className="mt-5 rounded-xl border border-dashed border-white/10 bg-black/20 p-5">
                <p className="text-sm text-white/60">
                  Aucun fichier de certificat CNIL n'a été détecté dans le dossier public.
                </p>
              </div>
            )}
          </section>
        ))}
      </div>
    </Section>
  );
}
