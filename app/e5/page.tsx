import Section from "../../components/Section";

const PDF_HREF: string | null = null;

export default function Page() {
  return (
    <Section
      title="Épreuve E5"
      subtitle="Tableau de synthèse des réalisations professionnelles"
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-white/75 leading-relaxed">
          Cette page présente le tableau de synthèse des réalisations professionnelles
          préparé dans le cadre de l&apos;épreuve E5 du BTS SIO.
        </p>

        {PDF_HREF ? (
          <div className="mt-6">
            <div className="mb-4 flex justify-end">
              <a
                href={PDF_HREF}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
              >
                Voir le document en grand
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-2">
              <iframe
                src={PDF_HREF}
                title="Tableau de synthèse E5"
                className="h-[800px] w-full rounded-xl border border-white/10 bg-black/20"
              />
            </div>
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-white/10 bg-black/20 p-6">
            <p className="text-white/60">
              Aucun PDF E5 n&apos;a été détecté dans le dossier `public/e5`.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
