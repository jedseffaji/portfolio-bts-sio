import { readdir } from "node:fs/promises";
import path from "node:path";

import Section from "../../components/Section";

async function getPdfHref() {
  const pdfDirectory = path.join(process.cwd(), "public", "e5");
  try {
    const files = await readdir(pdfDirectory, { withFileTypes: true });
    const pdfFile = files
      .filter((file) => file.isFile() && file.name.toLowerCase().endsWith(".pdf"))
      .map((file) => file.name)
      .sort((a, b) => a.localeCompare(b, "fr"))[0];

    return pdfFile ? `/e5/${encodeURIComponent(pdfFile)}` : null;
  } catch {
    return null;
  }
}

export default async function Page() {
  const pdfHref = await getPdfHref();

  return (
    <Section
      title="Épreuve E5"
      subtitle="Tableau de synthèse des réalisations professionnelles"
    >
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-200">
        <p className="leading-relaxed">
          Ce document correspond au tableau de synthèse présenté dans le cadre de
          l&apos;épreuve E5 du BTS SIO.
        </p>

        {pdfHref ? (
          <div className="mt-6">
            <div className="mb-4 flex justify-end">
              <a
                href={pdfHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
              >
                Voir le document en grand
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-2">
              <iframe
                src={pdfHref}
                title="Tableau de synthèse des réalisations professionnelles"
                className="min-h-[800px] w-full rounded-xl border-0 bg-black/20"
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
