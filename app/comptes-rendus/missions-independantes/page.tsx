import Link from "next/link";
import Section from "../../../components/Section";

type DocumentItem = {
  title: string;
  href: string;
};

type MissionGroup = {
  title: string;
  description: string;
  documents: DocumentItem[];
};

const missionGroups: MissionGroup[] = [
  {
    title: "Haute disponibilité",
    description:
      "Mission centrée sur la continuité de service, la redondance des rôles critiques et la mise en place d'environnements plus résilients sous Windows et Linux.",
    documents: [
      {
        title: "Compte rendu windows HA",
        href: "/Comptes%20rendus/ind%C3%A9/proc%C3%A9dures%20ind%C3%A9/Compte%20rendu%20windows%20HA.pdf",
      },
      {
        title: "Atelier Haute Disponibilité AD",
        href: "/Comptes%20rendus/ind%C3%A9/Atelier%20Haute%20Disponibilit%C3%A9%20AD.pdf",
      },
      {
        title: "HA linux",
        href: "/Comptes%20rendus/ind%C3%A9/proc%C3%A9dures%20ind%C3%A9/HA%20linux.pdf",
      },
    ],
  },
  {
    title: "DHCP et relais DHCP",
    description:
      "Mission consacrée à la distribution d’adresses IP, au fonctionnement du client DHCP et à la mise en place d’un relais DHCP dans des environnements segmentés.",
    documents: [
      {
        title: "dhcp et linux client",
        href: "/Comptes%20rendus/ind%C3%A9/proc%C3%A9dures%20ind%C3%A9/dhcp%20et%20linux%20client.pdf",
      },
      {
        title: "dhcp et linux",
        href: "/Comptes%20rendus/ind%C3%A9/dhcp%20et%20linux.pdf",
      },
      {
        title: "relais DHCP",
        href: "/Comptes%20rendus/ind%C3%A9/proc%C3%A9dures%20ind%C3%A9/relais%20DHCP.pdf",
      },
      {
        title: "cours relai dhcp prof",
        href: "/Comptes%20rendus/ind%C3%A9/cours%20relai%20dhcp%20prof.pdf",
      },
    ],
  },
  {
    title: "LVM et RAID",
    description:
      "Mission technique autour du stockage, de la gestion de volumes logiques et de la tolérance aux pannes avec différents montages de disques.",
    documents: [
      {
        title: "LVM td",
        href: "/Comptes%20rendus/ind%C3%A9/proc%C3%A9dures%20ind%C3%A9/LVM%20td.pdf",
      },
      {
        title: "raid",
        href: "/Comptes%20rendus/ind%C3%A9/proc%C3%A9dures%20ind%C3%A9/raid.pdf",
      },
      {
        title: "cours LVM prof",
        href: "/Comptes%20rendus/ind%C3%A9/cours%20LVM%20prof.pdf",
      },
    ],
  },
  {
    title: "Analyse réseau",
    description:
      "Mission dédiée à l’observation et à l’analyse du trafic réseau pour comprendre les échanges, diagnostiquer les problèmes et interpréter les flux.",
    documents: [
      {
        title: "wireshark td",
        href: "/Comptes%20rendus/ind%C3%A9/proc%C3%A9dures%20ind%C3%A9/wireshark%20td.pdf",
      },
    ],
  },
  {
    title: "Consignes et ateliers",
    description:
      "Bloc rassemblant les supports de travail, fiches pratiques et consignes utilisées pour cadrer plusieurs missions indépendantes réalisées en cours.",
    documents: [
      {
        title: "Consigne atelier2",
        href: "/Comptes%20rendus/ind%C3%A9/Consigne%20atelier2.pdf",
      },
      {
        title: "Consigne atelier3",
        href: "/Comptes%20rendus/ind%C3%A9/Consigne%20atelier3.pdf",
      },
      {
        title: "Consigne atelier4",
        href: "/Comptes%20rendus/ind%C3%A9/Consigne%20atelier4.pdf",
      },
      {
        title: "Fiche pratique Atelier 1",
        href: "/Comptes%20rendus/ind%C3%A9/Fiche%20pratique%20Atelier%201.pdf",
      },
    ],
  },
  {
    title: "Automatisation",
    description:
      "Mission orientée automatisation des tâches d’administration, avec un support dédié à la création automatisée et au pilotage d’actions répétitives.",
    documents: [
      {
        title: "TUTORIEL-6-AUTOMATISER-LA-CREATION-DUN-DOSSIER-UTILISATEUR-AVEC-UNE-STRATEGIE-GPO",
        href: "/Comptes%20rendus/ind%C3%A9/TUTORIEL-6-AUTOMATISER-LA-CREATION-DUN-DOSSIER-UTILISATEUR-AVEC-UNE-STRATEGIE-GPO.pdf",
      },
    ],
  },
];

export default function Page() {
  return (
    <Section
      title="Missions indÃ©pendantes"
      subtitle="Missions techniques rÃ©alisÃ©es en dehors des projets principaux, dans une logique d'apprentissage, de test et de progression."
    >
      <Link
        href="/comptes-rendus"
        className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
      >
        {"<- Retour aux missions"}
      </Link>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold text-white">Introduction</h2>
        <p className="mt-3 text-white/75 leading-relaxed">
          Cette page regroupe les missions techniques rÃ©alisÃ©es individuellement en cours.
          Les documents sont organisÃ©s par thÃ¨me afin de distinguer clairement chaque
          mission, tout en conservant l'ensemble des PDF associÃ©s dans un mÃªme bloc.
        </p>
      </div>

      <div className="mt-6 grid gap-8">
        {missionGroups.map((group) => (
          <section
            key={group.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-2xl font-semibold text-white">{group.title}</h2>
            <p className="mt-3 text-white/75 leading-relaxed">{group.description}</p>

            <div className="mt-6 grid gap-6">
              {group.documents.map((doc) => (
                <article
                  key={doc.href}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-semibold text-white">{doc.title}</h3>
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
                    className="block rounded-xl border border-white/10 bg-black/20 p-2 transition hover:bg-black/40"
                  >
                    <iframe
                      src={doc.href}
                      title={doc.title}
                      className="h-[520px] w-full rounded-xl border border-white/10 bg-black/20"
                    />
                  </a>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Section>
  );
}
