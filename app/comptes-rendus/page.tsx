import Section from "../../components/Section";
import Link from "next/link";

type Projet = {
  titre: string;
  sousTitre: string;
  description: string;
  tags: string[];
  href: string;
  resume: string;
};

const projets: Projet[] = [
  {
    titre: "Soccer78",
    sousTitre: "Projet de 1re annee - BTS SIO (SISR)",
    description:
      "Mise en place d'une infrastructure complete : AD, DNS/DHCP, VLAN, Wi-Fi et documentation. Projet oriente deploiement et bonnes pratiques.",
    tags: ["Projet", "1re annee", "Infra", "AD"],
    href: "/comptes-rendus/soccer78",
    resume:
      "Installation d'un serveur Windows, structuration de l'Active Directory, services DNS/DHCP, segmentation VLAN et mise en service du Wi-Fi. Projet de fondations techniques et de methodologie.",
  },
  {
    titre: "GSB",
    sousTitre: "Projet de 2e annee - BTS SIO (SISR)",
    description:
      "Orientation reseau + securite : segmentation, pfSense, interconnexion, durcissement et tests. Approche plus avancee.",
    tags: ["Projet", "2e annee", "Securite", "Reseau"],
    href: "/comptes-rendus/gsb",
    resume:
      "Renforcement securite, regles pare-feu, NAT, routage inter-VLAN, supervision et validation. Projet centre sur la protection, les flux et la resilience.",
  },
  {
    titre: "Projets personnels",
    sousTitre: "Travaux realises en autonomie (hors cours)",
    description:
      "Espace d'experimentation et de progression : tests, mini-labs, documentation perso.",
    tags: ["Autonomie", "Curiosite", "Progression"],
    href: "/comptes-rendus/projets-personnels",
    resume:
      "Page d'attente pour detailler mes projets personnels : objectifs, resultats, outils et liens.",
  },
];

export default function Page() {
  return (
    <Section
      title="Comptes rendus"
      subtitle="Comptes rendus realises en cours : projets, missions et contextes."
    >
      <div className="grid gap-4">
        {projets.map((p) => (
          <Link
            key={p.titre}
            href={p.href}
            className="
              group
              rounded-3xl
              border border-white/10
              bg-white/5
              p-7
              transition
              duration-300
              hover:bg-white/10
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  {p.titre}
                </h2>
                <p className="mt-1 text-white/70">{p.sousTitre}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-4 text-white/75 leading-relaxed">{p.description}</p>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              {p.resume}
            </p>
            <span className="mt-5 inline-flex items-center text-sm text-white/70">
              Ouvrir {"->"}
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
