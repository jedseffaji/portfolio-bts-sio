import Section from "../../components/Section";

type Bloc = {
  titre: string;
  intro: string;
  items: string[];
  exemples: string[];
};

const blocs: Bloc[] = [
  {
    titre: "Systèmes",
    intro: "Mise en place et administration de services Windows/Linux.",
    items: [
      "Windows Server 2022 : installation et configuration",
      "Active Directory (AD DS) : utilisateurs, groupes, droits",
      "Services réseau : DNS, DHCP",
      "Stratégies de groupe (GPO) : principes et usages",
      "Linux : configuration réseau, gestion des utilisateurs, services de base",
    ],
    exemples: [
      "Création/gestion de comptes et droits (approche moindre privilège)",
      "Mise en place de services (DNS/DHCP) dans un environnement de test",
      "Dépannage de base : réseau, accès, services",
    ],
  },
  {
    titre: "Réseau",
    intro: "Conception et mise en œuvre d’une infrastructure réseau simple.",
    items: [
      "Plan d’adressage IP (subnetting, passerelle, cohérence)",
      "VLAN : segmentation et logique réseau",
      "Routage statique : interconnexion de sous-réseaux",
      "Passerelles et services (DHCP, DNS) dans un réseau",
    ],
    exemples: [
      "Configuration de VLAN et vérification de la connectivité",
      "Mise en place de routage statique entre sous-réseaux",
      "Tests réseau : ping, traceroute, ipconfig/ifconfig, etc.",
    ],
  },
  {
    titre: "Sécurité",
    intro: "Bonnes pratiques + configuration de sécurité réseau (niveau SISR).",
    items: [
      "Pare-feu : règles de filtrage et contrôle des flux",
      "Proxy / filtrage web avec pfSense",
      "Surveillance du trafic : observation et analyse simple",
      "Bonnes pratiques : mises à jour, mots de passe, durcissement",
    ],
    exemples: [
      "Configuration de firewall (stage UTB : règles et vérifications)",
      "Filtrage web avec pfSense (proxy)",
      "Application du principe du moindre privilège et documentation",
    ],
  },
  {
    titre: "Virtualisation & outils",
    intro: "Travail en environnement virtualisé + outillage de base d’un technicien SISR.",
    items: [
      "VMware : création et gestion de machines virtuelles",
      "Mise en réseau de plusieurs VM (client, serveur, pare-feu)",
      "Ticketing : traitement d’incidents et suivi",
      "Documentation : procédures, comptes rendus, structuration",
      "Outils : VS Code, commandes réseau Windows/Linux",
    ],
    exemples: [
      "Environnement de lab : client/serveur/pfSense en VM",
      "Traitement de tickets (stage UTB) : diagnostic → action → vérification → clôture",
      "Rédaction de procédures (déploiement, manip, etc.)",
    ],
  },
];

const softSkills = [
  "Esprit d’équipe",
  "Autonomie",
  "Polyvalence",
  "Communication",
  "Gestion de projet (organisation, priorisation)",
  "Rigueur (tests, validation, traçabilité)",
];

export default function Page() {
  return (
    <Section
      title="Compétences (SISR)"
      subtitle="Synthèse des compétences techniques et méthodes de travail (formation + stages)."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {blocs.map((b) => (
          <div
            key={b.titre}
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
            <h2 className="text-lg font-semibold">{b.titre}</h2>
            <p className="mt-2 text-white/75">{b.intro}</p>

            <h3 className="mt-4 text-sm font-semibold text-white/85">Compétences</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-white/75">
              {b.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>

            <h3 className="mt-4 text-sm font-semibold text-white/85">Exemples concrets</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-white/75">
              {b.exemples.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="
          mt-10
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
        <h2 className="text-lg font-semibold">Savoir-être</h2>
        <p className="mt-2 text-white/75">
          Qualités mobilisées en formation et en stage, importantes en environnement informatique.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {softSkills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
