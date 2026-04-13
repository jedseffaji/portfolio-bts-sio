import Section from "../../components/Section";
import Link from "next/link";

type MissionCategory = {
  titre: string;
  sousTitre: string;
  description: string;
  tags: string[];
  href: string;
  resume: string;
};

const categories: MissionCategory[] = [
  {
    titre: "GSB",
    sousTitre: "Projet de 2e année - BTS SIO (SISR)",
    description:
      "Missions d'infrastructure systèmes et réseaux autour de la segmentation, de la sécurité et du déploiement de services.",
    tags: ["Missions", "2e année", "Sécurité", "Réseau"],
    href: "/comptes-rendus/gsb",
    resume:
      "Contexte du laboratoire, architecture réseau, missions techniques et documents PDF associés pour chaque étape du projet.",
  },
  {
    titre: "Soccer",
    sousTitre: "Projet de 1re année - BTS SIO (SISR)",
    description:
      "Missions de déploiement et d'administration pour construire une infrastructure Windows et réseau cohérente.",
    tags: ["Missions", "1re année", "AD", "Infrastructure"],
    href: "/comptes-rendus/soccer78",
    resume:
      "Contexte du projet, missions réalisées, organisation du système d'information et compétences mobilisées en environnement PME.",
  },
  {
    titre: "Missions indépendantes",
    sousTitre: "Travaux techniques réalisés hors des projets principaux",
    description:
      "Espace dédié à des missions techniques ponctuelles menées en autonomie, en dehors des projets GSB et Soccer.",
    tags: ["Autonomie", "Technique", "Évolution"],
    href: "/comptes-rendus/missions-independantes",
    resume:
      "Structure prête à accueillir de nouvelles missions avec des cartes claires, des objectifs techniques et des résultats documentés.",
  },
];

export default function Page() {
  return (
    <Section
      title="Missions"
      subtitle="Présentation des principales catégories de missions techniques réalisées pendant le BTS SIO SISR."
    >
      <div className="grid gap-4">
        {categories.map((category) => (
          <Link
            key={category.titre}
            href={category.href}
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
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-white">
                  {category.titre}
                </h2>
                <p className="mt-1 text-white/70">{category.sousTitre}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-4 text-white/75 leading-relaxed">{category.description}</p>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              {category.resume}
            </p>
            <span className="mt-5 inline-flex items-center text-sm text-white/70">
              Voir les missions {"->"}
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
