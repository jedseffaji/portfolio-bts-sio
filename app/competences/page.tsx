import Section from "../../components/Section";

type SkillBlock = {
  title: string;
  summary: string;
  items: string[];
};

const technicalBlocks: SkillBlock[] = [
  {
    title: "Systèmes",
    summary: "Administration de serveurs, services Windows/Linux et annuaires.",
    items: [
      "Windows Server 2022 : déploiement et administration",
      "Linux Debian : configuration et maintenance",
      "Active Directory : gestion des comptes et des groupes",
      "Organisation des OU et délégations de droits",
      "Réplication de services et continuité",
      "Administration de serveurs et services essentiels",
    ],
  },
  {
    title: "Réseau",
    summary: "Conception d’architectures segmentées et routage sécurisé.",
    items: [
      "VLAN et segmentation réseau",
      "Routage inter-VLAN et configuration 802.1Q",
      "NAT et port forwarding",
      "DNS / DHCP et services d’infrastructure",
      "Architecture LAN / DMZ / WAN / WIFI",
      "Isolation des flux et contrôle des accès",
    ],
  },
  {
    title: "Sécurité",
    summary: "Mise en œuvre de politiques de filtrage et durcissement.",
    items: [
      "pfSense : pare-feu, filtrage des flux",
      "Règles firewall et restriction d’accès par IP",
      "Journalisation des connexions et traçabilité",
      "HTTPS et sécurisation des services exposés",
      "Isolation du WIFI et segmentation des accès",
    ],
  },
  {
    title: "Virtualisation et outils",
    summary: "Environnements virtualisés et outils métiers.",
    items: [
      "pfSense virtualisé",
      "VMware et Proxmox",
      "GLPI (gestion de parc)",
      "Nextcloud (cloud interne)",
      "Apache, MariaDB, Rainloop",
      "Postfix et Dovecot",
    ],
  },
  {
    title: "Automatisation",
    summary: "Scripts et tâches répétitives sécurisées.",
    items: [
      "Scripts PowerShell",
      "Création automatisée de comptes",
      "Suppression automatisée de comptes",
      "Gestion automatisée des OU",
      "Traçabilité via fichiers logs",
    ],
  },
  {
    title: "Supervision",
    summary: "Monitoring, analyse de trafic et détection d’anomalies.",
    items: [
      "Zabbix : monitoring des serveurs et services",
      "Wireshark : analyse du trafic réseau",
      "Surveillance des performances",
      "Détection d’anomalies et alerting",
      "Analyse des flux réseau",
    ],
  },
  {
    title: "Savoir-être",
    summary: "Qualités professionnelles mobilisées en environnement SISR.",
    items: [
      "Rigueur",
      "Autonomie",
      "Esprit d’analyse",
      "Travail en équipe",
      "Capacité d’adaptation",
      "Sens de l’organisation",
      "Résolution de problèmes",
    ],
  },
];

export default function Page() {
  return (
    <Section
      title="Compétences"
      subtitle="Compétences développées à travers les stages et les projets techniques réalisés pendant le BTS SIO SISR."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {technicalBlocks.map((block) => (
          <div
            key={block.title}
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
            <h2 className="text-lg font-semibold text-white">{block.title}</h2>
            <p className="mt-2 text-white/70">{block.summary}</p>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <ul className="list-disc space-y-1 pl-5 text-white/80">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </Section>
  );
}
