import Link from "next/link";
import Section from "../../components/Section";

export default function Page() {
  return (
    <Section
      title="BTS SIO et choix SISR"
      subtitle="Présentation de la formation, des options et des raisons de mon orientation SISR."
    >
      <div className="mt-6 grid gap-6">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Présentation du BTS SIO</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Le BTS Services Informatiques aux Organisations (SIO) est une
            formation de deux ans qui prépare aux métiers de l'informatique en
            entreprise. Elle vise à donner une base solide en systèmes,
            réseaux, sécurité et développement, avec une approche très
            pratique. La formation s'appuie sur des projets, des mises en
            situation et des stages, ce qui permet de relier les cours aux
            réalités du terrain.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
            <li>Objectif : former des techniciens opérationnels.</li>
            <li>Projets concrets et travaux pratiques.</li>
            <li>Stages ou alternance pour valider les compétences.</li>
            <li>Métiers visés : support, réseau, systèmes, développement.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Les deux options du BTS SIO</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white">Option SLAM</h3>
              <p className="mt-2 text-white/75 leading-relaxed">
                SLAM (Solutions Logicielles et Applications Métiers) est orienté
                développement. L'option forme à la conception et à la
                programmation d'applications, à la gestion des bases de données
                et aux applications web.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
                <li>Programmation et frameworks.</li>
                <li>Bases de données et requêtes.</li>
                <li>Conception et maintenance d'applications.</li>
                <li>Métiers : développeur, analyste, intégrateur.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white">Option SISR</h3>
              <p className="mt-2 text-white/75 leading-relaxed">
                SISR (Solutions d'Infrastructure, Systèmes et Réseaux) est
                orienté systèmes et réseaux. L'option forme à l'installation,
                la configuration et la sécurisation des infrastructures
                informatiques.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
                <li>Serveurs Windows et Linux.</li>
                <li>Réseaux, routage, VLAN, Wi-Fi.</li>
                <li>Sécurité et bonnes pratiques.</li>
                <li>Métiers : technicien réseau, administrateur systèmes.</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-white/70 leading-relaxed">
            Les deux options sont complémentaires et offrent des débouchés
            différents. Le choix dépend surtout des affinités personnelles :
            développement applicatif pour SLAM, infrastructure et réseau pour
            SISR.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Pourquoi j'ai choisi SISR</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            J'ai choisi l'option SISR car je suis attiré par le concret : mettre
            en place des serveurs, configurer un réseau, sécuriser des flux et
            dépanner quand un service ne répond plus. J'aime comprendre comment
            l'infrastructure fonctionne de bout en bout, et surtout voir un
            système fonctionner grâce à mes réglages.
          </p>
          <p className="mt-3 text-white/75 leading-relaxed">
            Mes projets m'ont conforté dans ce choix : installation de Windows
            Server, Active Directory, DNS/DHCP, routage, VLAN, firewall et tests
            sous Linux. J'ai également appris à diagnostiquer avec des outils
            simples et à documenter les configurations.
          </p>
          <p className="mt-3 text-white/75 leading-relaxed">
            Mes stages vont dans le même sens : support utilisateur, procédures,
            interventions réseau et environnement datacenter. À terme, je vise
            un poste de technicien systèmes et réseaux, puis une évolution vers
            l'administration ou l'ingénierie infrastructure.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Compétences développées en SISR</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white">Systèmes</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
                <li>Installation et administration Windows/Linux.</li>
                <li>Services AD, DNS, DHCP.</li>
                <li>Gestion des comptes et des droits.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white">Réseau</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
                <li>VLAN, routage, Wi-Fi.</li>
                <li>Tests et diagnostic réseau.</li>
                <li>Configuration de switches et routeurs.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white">Sécurité</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
                <li>Règles pare-feu et filtrage.</li>
                <li>Segmentation et bonnes pratiques.</li>
                <li>Surveillance basique et durcissement.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white">Méthodologie</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
                <li>Diagnostic et tests progressifs.</li>
                <li>Documentation et rigueur.</li>
                <li>Communication et suivi d'incidents.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Conclusion</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Le BTS SIO offre une formation polyvalente et professionnalisante.
            Le choix de l'option SISR correspond à mon profil et à mon envie
            de travailler sur des infrastructures concrètes. Ce parcours alimente
            mon projet professionnel et me prépare à évoluer vers des rôles
            techniques dans les systèmes et les réseaux.
          </p>
        </section>
      </div>
    </Section>
  );
}
