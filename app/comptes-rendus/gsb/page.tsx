import Link from "next/link";
import Section from "../../../components/Section";

export default function Page() {
  return (
    <Section
      title="Projet GSB — Infrastructure systèmes et réseaux"
      subtitle="Projet de 2e année axé sur la conception, la sécurisation et le déploiement d’une infrastructure complète."
    >
      <Link
        href="/comptes-rendus"
        className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
      >
        {"<- Retour aux comptes rendus"}
      </Link>

      <div className="mt-6 grid gap-8">
        <section className="mb-10 rounded-xl border border-white/10 bg-zinc-900 p-6">
          <h2 className="mb-4 text-3xl font-bold text-white">Contexte du projet GSB</h2>
          <div className="space-y-4">
            <p className="text-zinc-200 leading-relaxed">
              Le laboratoire Galaxy Swiss Bourdin (GSB) est une entreprise issue d’une
              fusion de plusieurs groupes pharmaceutiques, ce qui a entraîné une infrastructure
              informatique hétérogène et peu sécurisée.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-zinc-200">
              <li>Absence de centralisation des données utilisateurs</li>
              <li>Utilisation de messageries non professionnelles</li>
              <li>Manque de cloisonnement réseau</li>
              <li>Risques de coupure de service</li>
              <li>Difficulté de supervision et de gestion du parc</li>
            </ul>
            <p className="text-zinc-200 leading-relaxed">
              L’objectif des missions est donc de concevoir, sécuriser et déployer une
              infrastructure réseau complète, intégrant des services métiers accessibles
              en interne et depuis l’extérieur.
            </p>
            <a
              href="/Comptes%20rendus/missions%20gsb/contexte%20gsb.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-4 block rounded-xl border border-white/10 bg-black/20 p-2 transition hover:bg-black/40"
            >
              <iframe
                src="/Comptes%20rendus/missions%20gsb/contexte%20gsb.pdf"
                title="Contexte du projet GSB"
                className="h-[520px] w-full rounded-xl border border-white/10 bg-black/20"
              />
            </a>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Architecture réseau</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
            <li>LAN : postes utilisateurs et serveurs internes</li>
            <li>DMZ : serveurs exposés (web, mail, Nextcloud)</li>
            <li>WAN : accès Internet</li>
            <li>WIFI : postes nomades isolés dans un VLAN dédié</li>
          </ul>
          <p className="mt-3 text-white/75 leading-relaxed">
            Le routage et la sécurité sont assurés par un pare-feu pfSense virtualisé,
            permettant le filtrage des flux, le NAT, le port forwarding et la segmentation
            réseau.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Missions</h2>
          <div className="mt-5 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/30 p-5">
              <h3 className="text-lg font-semibold text-white">
                Mission 1 — Active Directory et segmentation réseau
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-white/75">
                <li>Déploiement d’un domaine Active Directory sous Windows Server 2022</li>
                <li>Segmentation du réseau via VLAN</li>
                <li>Configuration des switches en 802.1Q</li>
                <li>Routage inter-VLAN via pfSense</li>
                <li>Mise en place de règles firewall pour contrôler les flux</li>
              </ul>
              <a
                href="/Comptes%20rendus/missions%20gsb/Mission1.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 block rounded-xl border border-white/10 bg-black/20 p-2 transition hover:bg-black/40"
              >
                <iframe
                  src="/Comptes%20rendus/missions%20gsb/Mission1.pdf"
                  title="Mission 1 GSB"
                  className="h-[420px] w-full rounded-xl border border-white/10 bg-black/20"
                />
              </a>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-5">
              <h3 className="text-lg font-semibold text-white">
                Mission 2 — WiFi, NAT et déploiement applicatif
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-white/75">
                <li>Intégration d’une borne WiFi dans un VLAN dédié</li>
                <li>Isolation des postes nomades</li>
                <li>Mise en place du NAT et du port forwarding sur pfSense</li>
                <li>Publication de services en DMZ</li>
                <li>Déploiement d’une application métier sur serveur Linux</li>
                <li>Stockage configuré en RAID1</li>
              </ul>
              <a
                href="/Comptes%20rendus/missions%20gsb/Mission2.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 block rounded-xl border border-white/10 bg-black/20 p-2 transition hover:bg-black/40"
              >
                <iframe
                  src="/Comptes%20rendus/missions%20gsb/Mission2.pdf"
                  title="Mission 2 GSB"
                  className="h-[420px] w-full rounded-xl border border-white/10 bg-black/20"
                />
              </a>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-5">
              <h3 className="text-lg font-semibold text-white">
                Mission 3 — Gestion de parc et services réseau
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-white/75">
                <li>Déploiement d’un serveur GLPI</li>
                <li>Remontée automatique d’informations via des agents</li>
                <li>Mise en place d’un cloud interne Nextcloud</li>
                <li>Authentification Active Directory</li>
                <li>Accès LAN et WAN</li>
                <li>Stockage via LVM</li>
              </ul>
              <a
                href="/Comptes%20rendus/missions%20gsb/GSB%20Mission3.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 block rounded-xl border border-white/10 bg-black/20 p-2 transition hover:bg-black/40"
              >
                <iframe
                  src="/Comptes%20rendus/missions%20gsb/GSB%20Mission3.pdf"
                  title="Mission 3 GSB"
                  className="h-[420px] w-full rounded-xl border border-white/10 bg-black/20"
                />
              </a>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-5">
              <h3 className="text-lg font-semibold text-white">
                Mission 4 — Messagerie et haute disponibilité
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-white/75">
                <li>Mise en place d’une infrastructure mail (Postfix, Dovecot, Rainloop)</li>
                <li>Accès interne et externe via NAT</li>
                <li>Déploiement d’un second serveur Windows Server</li>
                <li>Réplication Active Directory</li>
                <li>Continuité de service</li>
              </ul>
              <a
                href="/Comptes%20rendus/missions%20gsb/GSB%20Mission4.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 block rounded-xl border border-white/10 bg-black/20 p-2 transition hover:bg-black/40"
              >
                <iframe
                  src="/Comptes%20rendus/missions%20gsb/GSB%20Mission4.pdf"
                  title="Mission 4 GSB"
                  className="h-[420px] w-full rounded-xl border border-white/10 bg-black/20"
                />
              </a>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Supervision</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
            <li>Zabbix pour le monitoring des serveurs et services</li>
            <li>Wireshark pour l’analyse du trafic</li>
            <li>Détection des anomalies et surveillance des performances</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Automatisation</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
            <li>Scripts PowerShell pour la création et la suppression de comptes</li>
            <li>Gestion des OU</li>
            <li>Journalisation des actions dans des fichiers logs</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Compétences développées</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "pfSense",
              "VLAN",
              "Active Directory",
              "Sécurité réseau",
              "Supervision",
              "Automatisation",
              "Haute disponibilité",
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
            Ces missions permettent de concevoir une infrastructure complète, sécurisée et
            segmentée, intégrant des services accessibles depuis l’extérieur tout en
            maîtrisant les flux réseau. Elles représentent une mise en situation
            professionnelle réaliste couvrant l’ensemble des compétences attendues en
            administration systèmes et réseaux.
          </p>
        </section>
      </div>
    </Section>
  );
}
