import Section from "../../components/Section";

export default function Page() {
  return (
    <Section
      title="Projet professionnel"
      subtitle="Objectif, motivation, et plan d’action pour progresser en SISR."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div
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
          <h2 className="text-lg font-semibold">Objectif</h2>
          <p className="mt-3 text-white/75">
            Je souhaite évoluer dans les métiers de l’infrastructure en tant que technicien
            systèmes & réseaux (puis administrateur junior), avec une orientation progressive
            vers la cybersécurité.
          </p>
          <p className="mt-3 text-white/75">
            J’aime le concret : configuration, dépannage, mise en place de solutions, et
            documentation. Mes stages m’ont aussi donné le goût du support et des environnements
            techniques (tickets, interventions, réseau/sécurité).
          </p>
        </div>

        <div
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
          <h2 className="text-lg font-semibold">Motivation</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-white/75">
            <li>Travailler sur des infrastructures réelles (réseau, serveurs, sécurité)</li>
            <li>Comprendre et sécuriser les flux (pare-feu, segmentation, bonnes pratiques)</li>
            <li>Gagner en autonomie sur l’administration Windows/Linux</li>
            <li>Être utile : résoudre des incidents et améliorer la qualité de service</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div
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
          <h2 className="text-lg font-semibold">Plan d’action (6–12 mois)</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-white/75">
            <li>Renforcer Linux : utilisateurs, services, réseau, logs</li>
            <li>Approfondir Windows Server : AD, GPO, DNS/DHCP, droits</li>
            <li>Réseau : VLAN, routage, diagnostic (troubleshooting)</li>
            <li>Sécurité : règles firewall, proxy, durcissement, MFA</li>
            <li>Documentation : procédures claires + preuves (PDF)</li>
          </ul>
        </div>

        <div
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
          <h2 className="text-lg font-semibold">Homelab (preuve de progression)</h2>
          <p className="mt-3 text-white/75">
            Mise en place d’un environnement de test en virtualisation pour reproduire
            une petite infrastructure et s’entraîner sur des cas réels.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-white/75">
            <li>VMware : un serveur + un client + un pare-feu</li>
            <li>AD DS / DNS / DHCP + tests utilisateurs</li>
            <li>pfSense : règles firewall + (option) proxy filtrage</li>
            <li>Scénarios d’incidents : résolution + compte rendu</li>
          </ul>
        </div>
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
        <h2 className="text-lg font-semibold">Poursuite / insertion</h2>
        <p className="mt-3 text-white/75">
          À court terme, je veux consolider mes compétences SISR via des projets concrets et
          de l’expérience terrain (stage/alternance). À moyen terme, je vise une évolution vers
          l’administration et la sécurité des systèmes et réseaux.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="flex flex-col items-center justify-center text-center rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold text-white/85">Cible poste</p>
            <p className="mt-1 text-white/75">Technicien Systèmes & Réseaux</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold text-white/85">Objectif</p>
            <p className="mt-1 text-white/75">Admin junior puis sécurité</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold text-white/85">Méthode</p>
            <p className="mt-1 text-white/75">Homelab + veille + preuves</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
