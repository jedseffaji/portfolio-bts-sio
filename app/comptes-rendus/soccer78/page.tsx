import Link from "next/link";
import Section from "../../../components/Section";

export default function Page() {
  return (
    <Section
      title="Soccer78"
      subtitle="Projet de 1re année - mise en place d'une infrastructure complète et structurée."
    >
      <Link
        href="/comptes-rendus"
        className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
      >
        {"<- Retour aux comptes rendus"}
      </Link>

      <div className="mt-6 grid gap-8">
        <section>
          <h2 className="text-xl font-semibold text-white">Contexte</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Soccer78 est une entreprise fictive utilisée en cours pour simuler la
            mise en place d'un SI complet. Le but est de partir d'un réseau simple,
            puis de construire une infrastructure stable et documentée, comme dans
            une vraie PME. L'accent est mis sur les bases : services Windows,
            organisation des comptes, segmentation et services réseau.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Objectifs</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Installer un Windows Server et définir les rôles clés.</li>
            <li>Mettre en place un Active Directory propre et lisible.</li>
            <li>Déployer DNS et DHCP avec tests de bon fonctionnement.</li>
            <li>Segmenter le réseau avec des VLAN et un plan d'adressage.</li>
            <li>Configurer un switch Aruba et des bornes Wi-Fi.</li>
            <li>Documenter et valider chaque étape.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Mise en place</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Installation de Windows Server, ajout des rôles AD DS, DNS et DHCP.
            Création de l'arborescence Active Directory avec des OU par service
            (Direction, Comptabilité, Technique, Support). Création de groupes
            globaux, attribution des droits sur les partages, et application de
            GPO basiques (verrouillage écran, mappage de lecteurs, politique de mot
            de passe).
          </p>
          <p className="mt-3 text-white/75 leading-relaxed">
            Mise en place d'un plan IP clair. Le DHCP distribue par VLAN, avec
            options passerelle et DNS. Le DNS interne gère les enregistrements
            pour les serveurs et les postes.
          </p>
          <div className="mt-4 grid gap-2">
            <p className="text-sm font-semibold text-white/80">Commandes utilisées</p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                ipconfig /all
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                ping 8.8.8.8
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                nslookup soccer78.local
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                Get-ADUser -Filter *
              </span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Réseau, VLAN et Wi-Fi</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            La segmentation est réalisée avec des VLAN pour isoler les services
            (Admin, Employés, Invités, Serveurs). Sur le switch Aruba, création
            des VLAN, définition des ports accès et trunks, et étiquetage
            cohérent pour la lisibilité. Les bornes Wi-Fi diffusent un SSID
            interne sécurisé (WPA2/WPA3) et un SSID invité isolé sur un VLAN
            spécifique.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Ports accès pour les postes utilisateurs.</li>
            <li>Port trunk vers le routeur/pfSense pour l'inter-VLAN.</li>
            <li>VLAN Wi-Fi avec règles de séparation basiques.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Routage</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Le routage est mis en place de façon simple pour relier les VLAN et
            garantir l'accès aux services internes. Les routes statiques sont
            vérifiées et les tests confirment la communication inter-réseaux.
            L'objectif est de comprendre les flux et de valider les chemins.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              tracert 10.10.20.10
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              route print
            </span>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Linux serveur</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Un serveur Linux est intégré pour pratiquer les bases système et
            réseau. Configuration IP statique, vérification des interfaces,
            consultation des logs et tests de connectivité. Cela permet de
            renforcer la polyvalence et la capacité de diagnostic.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              ip a
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              ip r
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              tail -f /var/log/syslog
            </span>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Sécurité</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Les mesures de base sont appliquées : MDP forts, GPO pour verrouillage,
            droits minimes sur les partages et séparation des réseaux. pfSense est
            utilisé pour filtrer les flux entre VLAN, avec des règles simples
            (autoriser le DNS/DHCP, bloquer l'accès direct entre services).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Méthode de travail</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            La méthode repose sur un cycle simple : préparation, configuration,
            tests, correction, puis documentation. Chaque étape est validée avant
            de passer à la suivante pour éviter les erreurs en cascade. Les
            captures d'écran et les tableaux de configuration sont conservés.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Tests et validation</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Chaque service est testé après configuration : attribution d'adresse
            via DHCP, résolution DNS interne, accès aux partages, et ping entre
            VLAN. Les tests sont notés dans une fiche de validation et ajustés si
            besoin.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Test de bail DHCP et passerelle.</li>
            <li>Test de résolution DNS avec nslookup.</li>
            <li>Test de droits sur dossiers partages.</li>
            <li>Tracert pour vérifier le chemin réseau.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Résultats</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            L'infrastructure est stable, documentée et exploitable. Les comptes
            sont propres, les services réseau fonctionnent et la segmentation
            limite les risques. Le projet valide les bases nécessaires pour
            administrer un SI de PME.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Compétences mobilisées</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Installation et administration Windows Server.</li>
            <li>Gestion AD (OU, groupes, droits, GPO).</li>
            <li>DNS/DHCP, tests et diagnostic.</li>
            <li>VLAN, switch Aruba, notions de trunk.</li>
            <li>Wi-Fi sécurisé et segmentation.</li>
            <li>Méthodologie et documentation.</li>
          </ul>
        </section>
      </div>
    </Section>
  );
}
