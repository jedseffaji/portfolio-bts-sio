import Link from "next/link";
import Section from "../../../components/Section";

export default function Page() {
  return (
    <Section
      title="Projet personnel - Homelab SISR"
      subtitle="Petit environnement de test réalisé en autonomie pour consolider les bases réseau, système et sécurité."
    >
      <Link
        href="/comptes-rendus"
        className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
      >
        {"<- Retour aux comptes rendus"}
      </Link>

      <div className="mt-6 grid gap-8">
        <section>
          <h2 className="text-xl font-semibold text-white">Contexte du projet</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Ce projet personnel a été réalisé en autonomie, dans un environnement
            de test à la maison. L'objectif était de mettre en pratique les
            compétences SISR vues en cours, sans contrainte d'entreprise, mais
            avec une logique réaliste. J'ai donc monté une petite infrastructure
            fonctionnelle, simple à maintenir, mais suffisamment complète pour
            travailler l'administration Windows, le réseau et la sécurité.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Architecture mise en place</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            L'architecture repose sur quatre machines principales :
            un serveur Windows Server, un serveur Linux, un routeur/pare-feu
            type pfSense, et un poste client Windows. Le réseau est segmenté
            en deux sous-réseaux pour séparer les services et le poste client.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Windows Server : AD DS, DNS, DHCP et gestion des utilisateurs.</li>
            <li>Linux : services de base, tests réseau et supervision simple.</li>
            <li>pfSense : routage, filtrage et NAT pour l'accès Internet.</li>
            <li>Poste client : intégré au domaine et tester les services.</li>
          </ul>
          <p className="mt-3 text-white/75 leading-relaxed">
            Schéma logique (description) : le pfSense relie le LAN interne à la
            connexion Internet. Sur le LAN, le Windows Server fournit les
            services AD/DNS/DHCP. Le serveur Linux et le poste client sont sur
            le même segment et utilisent le DNS interne. Le trafic sortant passe
            par le pfSense avec des règles simples.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Mise en œuvre technique</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Le Windows Server a été installé en premier. J'ai ajouté les rôles
            AD DS, DNS et DHCP. L'Active Directory a été structuré avec des OU
            simples (Admin, Utilisateurs, Poste) et des groupes pour gérer les
            droits. Les GPO de base ont été appliquées (verrouillage, MDP,
            mappage de lecteur). Le DHCP distribue les adresses avec passerelle
            et DNS interne.
          </p>
          <p className="mt-3 text-white/75 leading-relaxed">
            Le serveur Linux a été configuré avec une IP statique et des services
            de base (SSH, outils réseau, journalisation). Il sert de point de
            test pour la connectivité, le diagnostic et l'observation des flux.
          </p>
          <p className="mt-3 text-white/75 leading-relaxed">
            pfSense est utilisé pour le routage et le filtrage. Les règles
            autorisent les flux essentiels (DNS, DHCP, HTTP/HTTPS) et bloquent
            le reste par défaut. Le NAT sortant permet l'accès Internet pour les
            machines du LAN. Le poste client est joint au domaine et testé
            l'accès aux services (ouverture de session, DNS, DHCP).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Commandes et outils utilisés</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Les commandes suivantes ont été utilisées pour valider les services
            et diagnostiquer les problèmes :
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              ipconfig /all
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              ping 8.8.8.8
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              tracert 1.1.1.1
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              nslookup homelab.local
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              Get-ADUser -Filter *
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              ip a
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              ip r
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              systemctl status
            </span>
          </div>
          <p className="mt-3 text-white/75 leading-relaxed">
            Côté Windows, j'ai utilisé la console AD, le DNS Manager, le DHCP
            Manager, et l'observateur d'événements pour vérifier les services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Tests et validation</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            La connectivité a été vérifiée entre toutes les machines. Le poste
            client obtient une IP via DHCP, resolve les noms avec le DNS interne
            et rejoint le domaine. Les tests inter-machines valident les flux
            autorisés et permettent d'ajuster les règles pfSense si besoin.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Test du bail DHCP et de la passerelle.</li>
            <li>Résolution DNS interne et externe.</li>
            <li>Ouverture de session domaine et accès aux partages.</li>
            <li>Diagnostic en cas d'erreur via ping/tracert/observateur.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Résultats et apports</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Le projet m'a permis de consolider les fondamentaux. J'ai gagné en
            autonomie, en rigueur et en capacité à diagnostiquer les problèmes.
            La vision globale d'une infrastructure simple est plus claire :
            services, réseau, sécurité et documentation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Compétences mobilisées</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Systèmes : installation Windows Server et Linux.</li>
            <li>Réseau : DNS, DHCP, routage de base.</li>
            <li>Sécurité : règles pfSense, segmentation simple.</li>
            <li>Méthodologie : tests, validation, documentation.</li>
          </ul>
        </section>

        <div className="pt-2">
          <Link
            href="/comptes-rendus"
            className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
          >
            {"<- Retour aux comptes rendus"}
          </Link>
        </div>
      </div>
    </Section>
  );
}
