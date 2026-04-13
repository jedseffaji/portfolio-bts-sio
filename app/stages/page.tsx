import Link from "next/link";
import CompanyLogo from "../../components/CompanyLogo";
import Section from "../../components/Section";

type Document = { label: string; href: string };
type Stage = {
  titre: string;
  entreprise: string;
  logoSrc: string;
  logoInitials: string;
  id: string;
  ville: string;
  dates: string;
  descriptionEntreprise: string;
  missions: string[];
  technos: string[];
  documents: Document[];
  procedures?: Document[];
};

const PDF_BASE = "/portfolio-pdf";

const compteRenduRoutes: Record<string, string> = {
  biogroup: "/stages/biogroup/compte-rendu",
  "xpertdiag-immo": "/stages/xpertdiagimmo/compte-rendu",
  utb: "/stages/utb/compte-rendu",
};

const stages: Stage[] = [
  {
    titre: "Stage — BIOGROUP",
    entreprise: "BIOGROUP",
    logoSrc: "/logos/biogroup.png",
    logoInitials: "BG",
    id: "biogroup",
    ville: "Levallois-Perret",
    dates: "Octobre – décembre 2023",
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
      { label: "Document de mission (PDF)", href: `${PDF_BASE}/biogroup-compte-rendu.pdf` },
    ],
  },
  {
    titre: "Stage — XPERTDIAG’IMMO",
    entreprise: "XPERTDIAG’IMMO",
    logoSrc: "/logos/xpertdiag.png",
    logoInitials: "XD",
    id: "xpertdiag-immo",
    ville: "Nantes",
    dates: "Juin – août 2023",
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
      { label: "Document de mission (PDF)", href: `${PDF_BASE}/xpertdiag-compte-rendu.pdf` },
    ],
  },
  {
    titre: "Stage — UTB",
    entreprise: "UTB",
    logoSrc: "/logos/utb.png",
    logoInitials: "UTB",
    id: "utb",
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
      { label: "Document de mission (PDF)", href: `${PDF_BASE}/utb-compte-rendu.pdf` },
    ],
  },
  {
    titre: "Stage - Elior Group",
    entreprise: "Elior Group",
    logoSrc: "/logos/Elior.png",
    logoInitials: "EL",
    id: "elior",
    ville: "Nantes",
    dates: "2024",
    descriptionEntreprise:
      "Elior Group est un acteur majeur de la restauration collective et des services associés. L'entreprise gère de nombreux sites et s'appuie sur une infrastructure informatique importante pour assurer la continuité des activités, le support utilisateur et le fonctionnement des outils métiers.",
    missions: [
      "Préparation et configuration de postes utilisateurs",
      "Masterisation SES sur des machines Dell",
      "Gestion des différences matérielles entre modèles de postes",
      "Correction de problèmes de drivers lors de déploiements",
      "Utilisation d'un assistant d'installation interne Elior",
      "Copie de fichiers nécessaires dans des répertoires système spécifiques",
      "Amélioration de raccourcis RDP pour l'accès à certaines applications Elior",
      "Support technique aux utilisateurs",
      "Travail en environnement Active Directory",
      "Observation et diagnostic de postes hors domaine",
      "Prise en compte d'outils et contraintes : LAPS, BitLocker, GlobalProtect",
    ],
    technos: [
      "Masterisation",
      "Standardisation de déploiement",
      "Support informatique",
      "Active Directory",
      "Accès RDP",
      "Windows en entreprise",
      "Gestion de parc",
      "Procédures internes",
    ],
    documents: [],
    procedures: [
      { label: "Installation / configuration GPU (3080)", href: "/procedures-Elior/3080.pdf" },
      { label: "Gestion des mots de passe (KeePass)", href: "/procedures-Elior/keepass.pdf" },
      { label: "Masterisation SES", href: "/procedures-Elior/SES.pdf" },
      { label: "Sécurité YubiKey", href: "/procedures-Elior/Yubikey.pdf" },
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
        {stages.map((s) => {
          const isElior = s.entreprise === "Elior Group";

          return (
            <article
              key={s.titre}
              id={s.id}
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
                    <h2 className="text-xl font-semibold text-white">{s.titre}</h2>
                    <p className="mt-1 text-white/70">
                      {s.entreprise} — {s.ville}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <p className="text-sm text-white/60">{s.dates}</p>
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
                  {isElior ? (
                    <p className="text-sm text-white/60">
                      Procédures disponibles sur la page dédiée.
                    </p>
                  ) : (
                    <p className="text-sm text-white/60">
                      Mission disponible sur la page dédiée.
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                {isElior ? (
                  <Link
                    href="/stages/elior/procedures"
                    className="
                    inline-flex
                    items-center
                    justify-center
                    text-center
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    px-8
                    py-4
                    text-lg
                    font-semibold
                    text-white
                    hover:bg-white/10
                    transition
                  "
                  >
                    Procédures
                  </Link>
                ) : (
                  <Link
                    href={compteRenduRoutes[s.id]}
                    className="
                    inline-flex
                    items-center
                    justify-center
                    text-center
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    px-8
                    py-4
                    text-lg
                    font-semibold
                    text-white
                    hover:bg-white/10
                    transition
                  "
                  >
                    Mission
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
