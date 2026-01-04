import Link from "next/link";
import Section from "../../../components/Section";

export default function Page() {
  return (
    <Section
      title="Projet personnel - Homelab SISR"
      subtitle="Petit environnement de test realise en autonomie pour consolider les bases reseau, systeme et securite."
    >
      <Link
        href="/comptes-rendus"
        className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
      >
        {"<- Retour aux comptes rendus"}
      </Link>

      <div className="mt-6 grid gap-8">
        <section>
          <h2 className="text-xl font-semibold">Contexte du projet</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Ce projet personnel a ete realise en autonomie, dans un environnement
            de test a la maison. L'objectif etait de mettre en pratique les
            competences SISR vues en cours, sans contrainte d'entreprise, mais
            avec une logique realiste. J'ai donc monte une petite infrastructure
            fonctionnelle, simple a maintenir, mais suffisamment complete pour
            travailler l'administration Windows, le reseau et la securite.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Architecture mise en place</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            L'architecture repose sur quatre machines principales :
            un serveur Windows Server, un serveur Linux, un routeur/pare-feu
            type pfSense, et un poste client Windows. Le reseau est segmente
            en deux sous-reseaux pour separer les services et le poste client.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Windows Server : AD DS, DNS, DHCP et gestion des utilisateurs.</li>
            <li>Linux : services de base, tests reseau et supervision simple.</li>
            <li>pfSense : routage, filtrage et NAT pour l'acces Internet.</li>
            <li>Poste client : integrer au domaine et tester les services.</li>
          </ul>
          <p className="mt-3 text-white/75 leading-relaxed">
            Schema logique (description) : le pfSense relie le LAN interne a la
            connexion Internet. Sur le LAN, le Windows Server fournit les
            services AD/DNS/DHCP. Le serveur Linux et le poste client sont sur
            le meme segment et utilisent le DNS interne. Le trafic sortant passe
            par le pfSense avec des regles simples.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Mise en oeuvre technique</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Le Windows Server a ete installe en premier. J'ai ajoute les roles
            AD DS, DNS et DHCP. L'Active Directory a ete structure avec des OU
            simples (Admin, Utilisateurs, Poste) et des groupes pour gerer les
            droits. Les GPO de base ont ete appliquees (verrouillage, MDP,
            mappage de lecteur). Le DHCP distribue les adresses avec passerelle
            et DNS interne.
          </p>
          <p className="mt-3 text-white/75 leading-relaxed">
            Le serveur Linux a ete configure avec une IP statique et des services
            de base (SSH, outils reseau, journalisation). Il sert de point de
            test pour la connectivite, le diagnostic et l'observation des flux.
          </p>
          <p className="mt-3 text-white/75 leading-relaxed">
            pfSense est utilise pour le routage et le filtrage. Les regles
            autorisent les flux essentiels (DNS, DHCP, HTTP/HTTPS) et bloquent
            le reste par defaut. Le NAT sortant permet l'acces Internet pour les
            machines du LAN. Le poste client est joint au domaine et teste
            l'acces aux services (ouverture de session, DNS, DHCP).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Commandes et outils utilises</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Les commandes suivantes ont ete utilisees pour valider les services
            et diagnostiquer les problemes :
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
            Cote Windows, j'ai utilise la console AD, le DNS Manager, le DHCP
            Manager, et l'observateur d'evenements pour verifier les services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Tests et validation</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            La connectivite a ete verifiee entre toutes les machines. Le poste
            client obtient une IP via DHCP, resolve les noms avec le DNS interne
            et rejoint le domaine. Les tests inter-machines valident les flux
            autorises et permettent d'ajuster les regles pfSense si besoin.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Test du bail DHCP et de la passerelle.</li>
            <li>Resolution DNS interne et externe.</li>
            <li>Ouverture de session domaine et acces aux partages.</li>
            <li>Diagnostic en cas d'erreur via ping/tracert/observateur.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Resultats et apports</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Le projet m'a permis de consolider les fondamentaux. J'ai gagne en
            autonomie, en rigueur et en capacite a diagnostiquer les problemes.
            La vision globale d'une infrastructure simple est plus claire :
            services, reseau, securite et documentation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Competences mobilisees</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Systemes : installation Windows Server et Linux.</li>
            <li>Reseau : DNS, DHCP, routage de base.</li>
            <li>Securite : regles pfSense, segmentation simple.</li>
            <li>Methodologie : tests, validation, documentation.</li>
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
