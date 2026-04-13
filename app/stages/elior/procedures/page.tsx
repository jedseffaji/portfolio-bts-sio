import Link from "next/link";
import Section from "../../../../components/Section";

const procedures = [
  {
    title: "Installation / configuration GPU (3080)",
    href: "/procedures-Elior/3080.pdf",
  },
  {
    title: "Gestion des mots de passe (KeePass)",
    href: "/procedures-Elior/keepass.pdf",
  },
  {
    title: "Masterisation SES",
    href: "/procedures-Elior/SES.pdf",
  },
  {
    title: "Sécurité YubiKey",
    href: "/procedures-Elior/Yubikey.pdf",
  },
];

export default function Page() {
  return (
    <Section
      title="Procédures Elior"
      subtitle="Prévisualisations des documents utilisés pendant le stage Elior."
    >
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/stages"
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white/90 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl"
        >
          Retour aux stages
        </Link>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {procedures.map((doc) => (
          <div
            key={doc.href}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-lg font-semibold text-white">{doc.title}</h2>
            <div className="mt-4 flex justify-end">
              <a
                href={doc.href}
                target="_blank"
                rel="noreferrer"
                className="mb-2 inline-flex items-center rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
              >
                Voir le document en grand
              </a>
            </div>
            <a
              href={doc.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block cursor-pointer rounded-xl border border-white/10 bg-black/30 p-2 transition hover:bg-black/40 hover:scale-[1.01]"
            >
              <iframe
                src={doc.href}
                title={`Prévisualisation ${doc.title}`}
                className="h-[520px] w-full rounded-xl border border-white/10 bg-black/20"
              />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
