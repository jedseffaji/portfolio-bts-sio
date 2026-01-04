import CompanyLogo from "../../components/CompanyLogo";
import Section from "../../components/Section";

type Document = { label: string; href: string };
type Stage = {
  titre: string;
  entreprise: string;
  logoSrc: string;
  logoInitials: string;
  ville: string;
  dates: string;
  descriptionEntreprise: string;
  missions: string[];
  technos: string[];
  documents: Document[];
};

const PDF_BASE = "/portfolio-pdf";

const stages: Stage[] = [
  {
    titre: "Stage — BIOGROUP",
    entreprise: "BIOGROUP",
    logoSrc: "/logos/biogroup.png",
    logoInitials: "BG",
    ville: "Levallois-Perret",
    dates: "Octobre à décembre 2023",
    descriptionEntreprise:
      "BIOGROUP est un groupe spécialisé dans les analyses médicales. Les laboratoires utilisent des automates et des outils informatiques pour assurer la fiabilité et la traçabilité des analyses biologiques.",
    missions: [
      "Consultation et suivi des automates d’analyses",
      "Vérification et contrôle de la cohérence des analyses",
      "Création de jeux de tests pour vérifier le fonctionnement des automates",
      "Tri et gestion des analyses via l’outil MPL",
      "Application stricte des procédures et traçabilité des actions",
    ],
    technos: ["Automates", "Outil MPL", "Tests", "Procédures"],
    documents: [
      { label: "Compte rendu de stage (PDF)", href: `${PDF_BASE}/biogroup-compte-rendu.pdf` },
    ],
  },
  {
    titre: "Stage — XPERTDIAG’IMMO",
    entreprise: "XPERTDIAG’IMMO",
    logoSrc: "/logos/xpertdiag.png",
    logoInitials: "XD",
    ville: "Nantes",
    dates: "Juin à août 2023",
    descriptionEntreprise:
      "XPERTDIAG’IMMO est une entreprise spécialisée dans les diagnostics immobiliers. Elle utilise des outils métiers pour la gestion des expertises et des données clients.",
    missions: [
      "Installation et déploiement de logiciels métiers",
      "Mises à jour et maintenance applicative",
      "Suivi et gestion de la base de données clients",
      "Importation et extraction de données d’expertises",
      "Formation des utilisateurs sur le logiciel métier Liciel",
    ],
    technos: ["Windows", "Logiciels métiers", "Liciel", "Gestion de données"],
    documents: [
      { label: "Compte rendu de stage (PDF)", href: `${PDF_BASE}/xpertdiag-compte-rendu.pdf` },
    ],
  },
  {
    titre: "Stage — UTB",
    entreprise: "UTB",
    logoSrc: "/logos/utb.png",
    logoInitials: "UTB",
    ville: "Romainville",
    dates: "Juin 2025 (6 semaines)",
    descriptionEntreprise:
      "UTB est une entreprise intervenant sur des infrastructures informatiques et réseaux, notamment en datacenter, avec des activités liées au réseau, à la sécurité et au support technique.",
    missions: [
      "Installation de routeurs en environnement datacenter",
      "Configuration de pare-feu (firewall)",
      "Traitement des tickets d’incidents",
      "Interventions de maintenance matérielle (écrans défectueux, postes)",
      "Support technique aux utilisateurs",
    ],
    technos: ["Routeurs", "Firewall", "Ticketing", "Datacenter", "Support IT"],
    documents: [
      { label: "Compte rendu de stage (PDF)", href: `${PDF_BASE}/utb-compte-rendu.pdf` },
    ],
  },
];

export default function Page() {
  return (
    <Section
      title="Stages"
      subtitle="Présentation des stages réalisés en entreprise : contexte, missions, outils et documents."
    >
      <div className="grid gap-4">
        {stages.map((s) => (
          <article
            key={s.titre}
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
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-3">
                <CompanyLogo
                  src={s.logoSrc}
                  alt={`Logo ${s.entreprise}`}
                  initials={s.logoInitials}
                  size="md"
                  className="shrink-0"
                />
                <div>
                  <h2 className="text-xl font-semibold">{s.titre}</h2>
                  <p className="mt-1 text-white/70">
                    {s.entreprise} — {s.ville}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 sm:items-end">
                <p className="text-sm text-white/60">{s.dates}</p>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-white/60">Compte rendu</span>
                  {s.documents[0]?.href ? (
                    <a
                      href={s.documents[0].href}
                      target="_blank"
                      className="
                        group
                        relative
                        h-16
                        w-16
                        rounded-xl
                        border
                        border-white/15
                        bg-white/5
                        text-xs
                        font-semibold
                        text-white/80
                        shadow-sm
                        transition
                        duration-300
                        hover:-translate-y-1
                        hover:scale-[1.03]
                        hover:border-white/30
                        hover:shadow-lg
                      "
                    >
                      <span className="absolute right-0 top-0 h-4 w-4 rounded-bl-lg border-l border-b border-white/20 bg-white/10" />
                      <span className="absolute inset-0 flex items-center justify-center">PDF</span>
                    </a>
                  ) : (
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                      PDF bientôt dispo
                    </span>
                  )}
                </div>
              </div>
            </div>

            <p className="mt-4 text-white/75">{s.descriptionEntreprise}</p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-white/85">Missions réalisées</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-white/75">
                  {s.missions.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white/85">Outils / technologies</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {s.technos.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="mt-5 text-sm font-semibold text-white/85">Documents</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {s.documents.map((d) => (
                    <a
                      key={d.href}
                      href={d.href}
                      target="_blank"
                      className="inline-flex items-center justify-center text-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85 hover:bg-white/10 transition"
                    >
                      {d.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
