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
    sousTitre: "Projet de 1re année - BTS SIO (SISR)",
    description:
      "Mise en place d'une infrastructure complète : AD, DNS/DHCP, VLAN, Wi-Fi et documentation. Projet orienté déploiement et bonnes pratiques.",
    tags: ["Projet", "1re année", "Infra", "AD"],
    href: "/comptes-rendus/soccer78",
    resume:
      "Installation d'un serveur Windows, structuration de l'Active Directory, services DNS/DHCP, segmentation VLAN et mise en service du Wi-Fi. Projet de fondations techniques et de méthodologie.",
  },
  {
    titre: "GSB",
    sousTitre: "Projet de 2e année - BTS SIO (SISR)",
    description:
      "Orientation réseau + sécurité : segmentation, pfSense, interconnexion, durcissement et tests. Approche plus avancée.",
    tags: ["Projet", "2e année", "Sécurité", "Réseau"],
    href: "/comptes-rendus/gsb",
    resume:
      "Renforcement sécurité, règles pare-feu, NAT, routage inter-VLAN, supervision et validation. Projet centré sur la protection, les flux et la résilience.",
  },
  {
    titre: "Projets personnels",
    sousTitre: "Travaux réalisés en autonomie (hors cours)",
    description:
      "Espace d'expérimentation et de progression : tests, mini-labs, documentation perso.",
    tags: ["Autonomie", "Curiosité", "Progression"],
    href: "/comptes-rendus/projets-personnels",
    resume:
      "Page d'attente pour détailler mes projets personnels : objectifs, résultats, outils et liens.",
  },
];

export default function Page() {
  return (
    <Section
      title="Comptes rendus"
      subtitle="Comptes rendus réalisés en cours : projets, missions et contextes."
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
                <h2 className="text-2xl font-extrabold tracking-tight text-white">
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
