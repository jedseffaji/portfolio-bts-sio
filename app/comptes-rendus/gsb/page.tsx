import Link from "next/link";
import Section from "../../../components/Section";

type Mission = {
  title: string;
  description: string;
  missionHref: string;
  procedureHref: string;
};

const missions: Mission[] = [
  {
    title: "Mission 1",
    description:
      "Déploiement d'un domaine Active Directory, segmentation du réseau, configuration des switches et mise en place des premières règles de filtrage.",
    missionHref: "/Comptes%20rendus/gsb/Mission1.pdf",
    procedureHref: "/Comptes%20rendus/gsb/proc%C3%A9dures%20gsb/mission%201.pdf",
  },
  {
    title: "Mission 2",
    description:
      "Intégration du Wi-Fi dans un VLAN dédié, isolation des postes nomades, mise en place du NAT et publication de services applicatifs.",
    missionHref: "/Comptes%20rendus/gsb/Mission2.pdf",
    procedureHref: "/Comptes%20rendus/gsb/proc%C3%A9dures%20gsb/mission%202.pdf",
  },
  {
    title: "Mission 3",
    description:
      "Gestion de parc, déploiement de services réseau complémentaires et mise en place d'outils de centralisation et d'administration.",
    missionHref: "/Comptes%20rendus/gsb/Mission3.pdf",
    procedureHref: "/Comptes%20rendus/gsb/proc%C3%A9dures%20gsb/mission%203.pdf",
  },
  {
    title: "Mission 4",
    description:
      "Messagerie, réplication Active Directory et continuité de service pour renforcer la disponibilité globale de l'infrastructure.",
    missionHref: "/Comptes%20rendus/gsb/Mission4.pdf",
    procedureHref: "/Comptes%20rendus/gsb/proc%C3%A9dures%20gsb/Mission%204.pdf",
  },
];

export default function Page() {
  return (
    <Section
      title="Projet GSB - Infrastructure systemes et reseaux"
      subtitle="Projet de 2e annee axe sur la conception, la securisation et le deploiement d'une infrastructure complete."
    >
      <Link
        href="/comptes-rendus"
        className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
      >
        {"<- Retour aux missions"}
      </Link>

      <div className="mt-6 grid gap-8">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-3xl font-bold text-white">Contexte du projet GSB</h2>
          <div className="space-y-4">
            <p className="text-zinc-200 leading-relaxed">
              Le laboratoire Galaxy Swiss Bourdin (GSB) est une entreprise issue d'une
              fusion de plusieurs groupes pharmaceutiques, ce qui a entraine une
              infrastructure informatique heterogene et peu securisee.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-zinc-200">
              <li>Absence de centralisation des donnees utilisateurs</li>
              <li>Utilisation de messageries non professionnelles</li>
              <li>Manque de cloisonnement reseau</li>
              <li>Risques de coupure de service</li>
              <li>Difficulte de supervision et de gestion du parc</li>
            </ul>
            <p className="text-zinc-200 leading-relaxed">
              L'objectif des missions est donc de concevoir, securiser et deployer une
              infrastructure reseau complete, integrant des services metiers accessibles
              en interne et depuis l'exterieur.
            </p>
            <div className="flex justify-end">
              <a
                href="/Comptes%20rendus/gsb/contexte%20gsb.pdf"
                target="_blank"
                rel="noreferrer"
                className="mb-2 inline-flex items-center rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
              >
                Voir le document en grand
              </a>
            </div>
            <a
              href="/Comptes%20rendus/gsb/contexte%20gsb.pdf"
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl border border-white/10 bg-black/20 p-2 transition hover:bg-black/40"
            >
              <iframe
                src="/Comptes%20rendus/gsb/contexte%20gsb.pdf"
                title="Contexte du projet GSB"
                className="h-[520px] w-full rounded-xl border border-white/10 bg-black/20"
              />
            </a>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Architecture reseau</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
            <li>LAN : postes utilisateurs et serveurs internes</li>
            <li>DMZ : serveurs exposes (web, mail, Nextcloud)</li>
            <li>WAN : acces Internet</li>
            <li>WIFI : postes nomades isoles dans un VLAN dedie</li>
          </ul>
          <p className="mt-3 text-white/75 leading-relaxed">
            Le routage et la securite sont assures par un pare-feu pfSense virtualise,
            permettant le filtrage des flux, le NAT, le port forwarding et la segmentation
            reseau.
          </p>
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

                <div className="mt-6 grid gap-6 xl:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h4 className="text-lg font-semibold text-white">Document de mission</h4>
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
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h4 className="text-lg font-semibold text-white">Procedure / compte rendu associe</h4>
                    <div className="mt-4 flex justify-end">
                      <a
                        href={mission.procedureHref}
                        target="_blank"
                        rel="noreferrer"
                        className="mb-2 inline-flex items-center rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
                      >
                        Voir le document en grand
                      </a>
                    </div>
                    <a
                      href={mission.procedureHref}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-xl border border-white/10 bg-black/20 p-2 transition hover:bg-black/40"
                    >
                      <iframe
                        src={mission.procedureHref}
                        title={`${mission.title} procedure associee`}
                        className="h-[420px] w-full rounded-xl border border-white/10 bg-black/20"
                      />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Supervision</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
            <li>Zabbix pour le monitoring des serveurs et services</li>
            <li>Wireshark pour l'analyse du trafic</li>
            <li>Detection des anomalies et surveillance des performances</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Automatisation</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
            <li>Scripts PowerShell pour la creation et la suppression de comptes</li>
            <li>Gestion des OU</li>
            <li>Journalisation des actions dans des fichiers logs</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Competences developpees</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "pfSense",
              "VLAN",
              "Active Directory",
              "Securite reseau",
              "Supervision",
              "Automatisation",
              "Haute disponibilite",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/85"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Conclusion</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Ces missions permettent de concevoir une infrastructure complete, securisee et
            segmentee, integrant des services accessibles depuis l'exterieur tout en
            maitrisant les flux reseau. Elles representent une mise en situation
            professionnelle realiste couvrant l'ensemble des competences attendues en
            administration systemes et reseaux.
          </p>
        </section>
      </div>
    </Section>
  );
}
