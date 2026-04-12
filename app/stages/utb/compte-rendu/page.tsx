import Link from "next/link";
import Section from "../../../../components/Section";

const PDF_HREF = "/Comptes%20rendus/utb.pdf";

export default function Page() {
  return (
    <Section
      title="Compte rendu UTB"
      subtitle="Prévisualisation du compte rendu de stage UTB."
    >
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/stages"
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white/90 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl"
        >
          Retour aux stages
        </Link>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="text-lg font-semibold text-white">Compte rendu (PDF)</h2>
        <a
          href={PDF_HREF}
          target="_blank"
          rel="noreferrer"
          className="mt-4 block cursor-pointer rounded-xl border border-white/10 bg-black/30 p-2 transition hover:bg-black/40 hover:scale-[1.01]"
        >
          <iframe
            src={PDF_HREF}
            title="Prévisualisation compte rendu UTB"
            className="h-[540px] w-full rounded-xl border border-white/10 bg-black/20"
          />
        </a>
      </div>
    </Section>
  );
}
