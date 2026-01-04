import Link from "next/link";
import Section from "../../../components/Section";

export default function Page() {
  return (
    <Section
      title="Soccer78"
      subtitle="Projet de 1re annee - mise en place d'une infrastructure complete et structuree."
    >
      <Link
        href="/comptes-rendus"
        className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
      >
        {"<- Retour aux comptes rendus"}
      </Link>

      <div className="mt-6 grid gap-8">
        <section>
          <h2 className="text-xl font-semibold">Contexte</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Soccer78 est une entreprise fictive utilisee en cours pour simuler la
            mise en place d'un SI complet. Le but est de partir d'un reseau simple,
            puis de construire une infrastructure stable et documentee, comme dans
            une vraie PME. L'accent est mis sur les bases : services Windows,
            organisation des comptes, segmentation et services reseau.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Objectifs</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Installer un Windows Server et definir les roles clefs.</li>
            <li>Mettre en place un Active Directory propre et lisible.</li>
            <li>Deployer DNS et DHCP avec tests de bon fonctionnement.</li>
            <li>Segmenter le reseau avec des VLAN et un plan d'adressage.</li>
            <li>Configurer un switch Aruba et des bornes Wi-Fi.</li>
            <li>Documenter et valider chaque etape.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Mise en place</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Installation de Windows Server, ajout des roles AD DS, DNS et DHCP.
            Creation de l'arborescence Active Directory avec des OU par service
            (Direction, Comptabilite, Technique, Support). Creation de groupes
            globaux, attribution des droits sur les partages, et application de
            GPO basiques (verrouillage ecran, mappage de lecteurs, politique de mot
            de passe).
          </p>
          <p className="mt-3 text-white/75 leading-relaxed">
            Mise en place d'un plan IP clair. Le DHCP distribue par VLAN, avec
            options passerelle et DNS. Le DNS interne gere les enregistrements
            pour les serveurs et les postes.
          </p>
          <div className="mt-4 grid gap-2">
            <p className="text-sm font-semibold text-white/80">Commandes utilisees</p>
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
          <h2 className="text-xl font-semibold">Reseau, VLAN et Wi-Fi</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            La segmentation est realisee avec des VLAN pour isoler les services
            (Admin, Employes, Invites, Serveurs). Sur le switch Aruba, creation
            des VLAN, definition des ports access et trunks, et etiquetage
            coherent pour la lisibilite. Les bornes Wi-Fi diffusent un SSID
            interne securise (WPA2/WPA3) et un SSID invite isole sur un VLAN
            specifique.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Ports access pour les postes utilisateurs.</li>
            <li>Port trunk vers le routeur/pfSense pour l'inter-VLAN.</li>
            <li>VLAN Wi-Fi avec regles de separation basiques.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Routage</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Le routage est mis en place de facon simple pour relier les VLAN et
            garantir l'acces aux services internes. Les routes statiques sont
            verifiees et les tests confirment la communication inter-reseaux.
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
          <h2 className="text-xl font-semibold">Linux serveur</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Un serveur Linux est integre pour pratiquer les bases systeme et
            reseau. Configuration IP statique, verification des interfaces,
            consultation des logs et tests de connectivite. Cela permet de
            renforcer la polyvalence et la capacite de diagnostic.
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
          <h2 className="text-xl font-semibold">Securite</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Les mesures de base sont appliquees : MDP forts, GPO pour verrouillage,
            droits minimes sur les partages et separation des reseaux. pfSense est
            utilise pour filtrer les flux entre VLAN, avec des regles simples
            (autoriser le DNS/DHCP, bloquer l'acces direct entre services).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Methode de travail</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            La methode repose sur un cycle simple : preparation, configuration,
            tests, correction, puis documentation. Chaque etape est validee avant
            de passer a la suivante pour eviter les erreurs en cascade. Les
            captures d'ecran et les tableaux de configuration sont conserves.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Tests et validation</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Chaque service est teste apres configuration : attribution d'adresse
            via DHCP, resolution DNS interne, acces aux partages, et ping entre
            VLAN. Les tests sont notes dans une fiche de validation et ajustes si
            besoin.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Test de bail DHCP et passerelle.</li>
            <li>Test de resolution DNS avec nslookup.</li>
            <li>Test de droits sur dossiers partages.</li>
            <li>Tracert pour verifier le chemin reseau.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Resultats</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            L'infrastructure est stable, documentee et exploitable. Les comptes
            sont propres, les services reseau fonctionnent et la segmentation
            limite les risques. Le projet valide les bases necessaires pour
            administrer un SI de PME.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Competences mobilisees</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Installation et administration Windows Server.</li>
            <li>Gestion AD (OU, groupes, droits, GPO).</li>
            <li>DNS/DHCP, tests et diagnostic.</li>
            <li>VLAN, switch Aruba, notions de trunk.</li>
            <li>Wi-Fi securise et segmentation.</li>
            <li>Methodologie et documentation.</li>
          </ul>
        </section>
      </div>
    </Section>
  );
}
