import Link from "next/link";
import Section from "../../../components/Section";

type SoccerMission = {
  title: string;
  description: string;
  details: string[];
  tools: string[];
  missionHref?: string;
  reportHref?: string;
};

const missions: SoccerMission[] = [
  {
    title: "Mission 1",
    description:
      "Installation de Windows Server, deploiement des roles AD DS, DNS et DHCP, puis structuration initiale de l'annuaire et des services d'infrastructure.",
    details: [
      "Installation de Windows Server et definition des roles cles.",
      "Creation d'une arborescence Active Directory lisible par service.",
      "Deploiement de DNS et DHCP avec verification du bon fonctionnement.",
      "Application de GPO de base pour structurer l'environnement.",
    ],
    tools: ["ipconfig /all", "nslookup soccer78.local", "Get-ADUser -Filter *"],
  },
  {
    title: "Mission 2",
    description:
      "Organisation du reseau, segmentation par VLAN, configuration du switch et integration d'un Wi-Fi separe pour mieux controler les usages.",
    details: [
      "Creation d'un plan d'adressage coherent et distribution des postes par VLAN.",
      "Configuration des ports acces et trunk sur le switch.",
      "Mise en place d'un Wi-Fi interne securise et d'un Wi-Fi invite isole.",
      "Validation de la circulation des flux entre les differents segments.",
    ],
    tools: ["ping 8.8.8.8", "tracert 10.10.20.10", "route print"],
  },
  {
    title: "Mission 3",
    description:
      "Validation technique, securite de base et documentation afin de fiabiliser l'environnement et de conserver une methode de travail claire.",
    details: [
      "Verification des baux DHCP, de la resolution DNS et des acces aux partages.",
      "Application de regles simples de separation des flux et des acces.",
      "Utilisation d'un serveur Linux comme point de controle et de diagnostic.",
      "Documentation des etapes, des tests et des resultats obtenus.",
    ],
    tools: ["ip a", "ip r", "tail -f /var/log/syslog"],
  },
];

export default function Page() {
  return (
    <Section
      title="Soccer"
      subtitle="Projet de 1re annee axe sur le deploiement d'une infrastructure systemes et reseaux coherente, progressive et documentee."
    >
      <Link
        href="/comptes-rendus"
        className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
      >
        {"<- Retour aux missions"}
      </Link>

      <div className="mt-6 grid gap-8">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Contexte du projet Soccer</h2>
          <p className="mt-4 text-white/75 leading-relaxed">
            Soccer est un projet pedagogique utilise pour simuler la mise en place d'un
            systeme d'information dans un cadre proche d'une PME. L'objectif est de partir
            d'un environnement simple puis de construire une infrastructure stable,
            organisee et documentee en mobilisant des competences systemes, reseaux et
            methodes de travail.
          </p>
          <p className="mt-3 text-white/75 leading-relaxed">
            Le projet permet de travailler l'installation de services Windows, la
            structuration de l'Active Directory, la gestion du reseau, la segmentation des
            usages, la securite de base et la validation technique. Il constitue une
            premiere mission complete de deploiement et d'administration.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Objectifs</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
            <li>Installer un Windows Server et definir les roles cles.</li>
            <li>Mettre en place un Active Directory propre et lisible.</li>
            <li>Deployer DNS et DHCP avec tests de bon fonctionnement.</li>
            <li>Segmenter le reseau avec des VLAN et un plan d'adressage.</li>
            <li>Configurer un switch Aruba et des bornes Wi-Fi.</li>
            <li>Documenter et valider chaque etape.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Missions</h2>
          <div className="mt-6 grid gap-8">
            {missions.map((mission) => (
              <article
                key={mission.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-2xl font-semibold text-white">{mission.title}</h3>
                <p className="mt-3 text-white/75 leading-relaxed">{mission.description}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
                  {mission.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>

                <div className="mt-5">
                  <p className="text-sm font-semibold text-white/80">Outils et commandes</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {mission.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-6 xl:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h4 className="text-lg font-semibold text-white">Document de mission</h4>
                    {mission.missionHref ? (
                      <>
                        <div className="mt-4 flex justify-end">
                          <a
                            href={mission.missionHref}
                            target="_blank"
                            rel="noreferrer"
                            className="mb-2 inline-flex items-center rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
                          >
                            Voir le document en grand
                          </a>
                        </div>
                        <a
                          href={mission.missionHref}
                          target="_blank"
                          rel="noreferrer"
                          className="block rounded-xl border border-white/10 bg-black/20 p-2 transition hover:bg-black/40"
                        >
                          <iframe
                            src={mission.missionHref}
                            title={`${mission.title} document de mission`}
                            className="h-[420px] w-full rounded-xl border border-white/10 bg-black/20"
                          />
                        </a>
                      </>
                    ) : (
                      <p className="mt-4 text-white/60">
                        Aucun document de mission Soccer n'est actuellement present dans
                        /public/Comptes rendus/.
                      </p>
                    )}
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h4 className="text-lg font-semibold text-white">Procedure / compte rendu associe</h4>
                    {mission.reportHref ? (
                      <>
                        <div className="mt-4 flex justify-end">
                          <a
                            href={mission.reportHref}
                            target="_blank"
                            rel="noreferrer"
                            className="mb-2 inline-flex items-center rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
                          >
                            Voir le document en grand
                          </a>
                        </div>
                        <a
                          href={mission.reportHref}
                          target="_blank"
                          rel="noreferrer"
                          className="block rounded-xl border border-white/10 bg-black/20 p-2 transition hover:bg-black/40"
                        >
                          <iframe
                            src={mission.reportHref}
                            title={`${mission.title} compte rendu associe`}
                            className="h-[420px] w-full rounded-xl border border-white/10 bg-black/20"
                          />
                        </a>
                      </>
                    ) : (
                      <p className="mt-4 text-white/60">
                        Aucun compte rendu ou aucune procedure Soccer correspondant(e) n'a
                        ete trouve(e) dans /public/Comptes rendus/.
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Competences mobilisees</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
            <li>Installation et administration Windows Server.</li>
            <li>Gestion AD (OU, groupes, droits, GPO).</li>
            <li>DNS/DHCP, tests et diagnostic.</li>
            <li>VLAN, switch Aruba, notions de trunk.</li>
            <li>Wi-Fi securise et segmentation.</li>
            <li>Methodologie et documentation.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Resultats</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            L'infrastructure obtenue est stable, documentee et exploitable. Le projet
            valide les bases necessaires pour administrer un systeme d'information de PME
            en combinant organisation, tests, securite et coherence reseau.
          </p>
        </section>
      </div>
    </Section>
  );
}
