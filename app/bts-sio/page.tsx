import Link from "next/link";
import Section from "../../components/Section";

export default function Page() {
  return (
    <Section
      title="BTS SIO et choix SISR"
      subtitle="Presentation de la formation, des options et des raisons de mon orientation SISR."
    >
      <div className="flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
        >
          {"<- Retour a l'accueil"}
        </Link>
      </div>

      <div className="mt-6 grid gap-6">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Presentation du BTS SIO</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Le BTS Services Informatiques aux Organisations (SIO) est une
            formation de deux ans qui prepare aux metiers de l'informatique en
            entreprise. Elle vise a donner une base solide en systemes,
            reseaux, securite et developpement, avec une approche tres
            pratique. La formation s'appuie sur des projets, des mises en
            situation et des stages, ce qui permet de relier les cours aux
            realites du terrain.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
            <li>Objectif : former des techniciens operationnels.</li>
            <li>Projets concrets et travaux pratiques.</li>
            <li>Stages ou alternance pour valider les competences.</li>
            <li>Metiers vises : support, reseau, systemes, developpement.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Les deux options du BTS SIO</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Option SLAM</h3>
              <p className="mt-2 text-white/75 leading-relaxed">
                SLAM (Solutions Logicielles et Applications Metiers) est oriente
                developpement. L'option forme a la conception et a la
                programmation d'applications, a la gestion des bases de donnees
                et aux applications web.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
                <li>Programmation et frameworks.</li>
                <li>Bases de donnees et requetes.</li>
                <li>Conception et maintenance d'applications.</li>
                <li>Metiers : developpeur, analyste, integrateur.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Option SISR</h3>
              <p className="mt-2 text-white/75 leading-relaxed">
                SISR (Solutions d'Infrastructure, Systemes et Reseaux) est
                oriente systemes et reseaux. L'option forme a l'installation,
                la configuration et la securisation des infrastructures
                informatiques.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
                <li>Serveurs Windows et Linux.</li>
                <li>Reseaux, routage, VLAN, Wi-Fi.</li>
                <li>Securite et bonnes pratiques.</li>
                <li>Metiers : technicien reseau, administrateur systemes.</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-white/70 leading-relaxed">
            Les deux options sont complementaires et offrent des debouches
            differents. Le choix depend surtout des affinites personnelles :
            developpement applicatif pour SLAM, infrastructure et reseau pour
            SISR.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Pourquoi j'ai choisi SISR</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            J'ai choisi l'option SISR car je suis attire par le concret : mettre
            en place des serveurs, configurer un reseau, securiser des flux et
            depanner quand un service ne repond plus. J'aime comprendre comment
            l'infrastructure fonctionne de bout en bout, et surtout voir un
            systeme fonctionner grace a mes reglages.
          </p>
          <p className="mt-3 text-white/75 leading-relaxed">
            Mes projets m'ont conforte dans ce choix : installation de Windows
            Server, Active Directory, DNS/DHCP, routage, VLAN, firewall et tests
            sous Linux. J'ai egalement appris a diagnostiquer avec des outils
            simples et a documenter les configurations.
          </p>
          <p className="mt-3 text-white/75 leading-relaxed">
            Mes stages vont dans le meme sens : support utilisateur, procedures,
            interventions reseau et environnement datacenter. A terme, je vise
            un poste de technicien systemes et reseaux, puis une evolution vers
            l'administration ou l'ingenierie infrastructure.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Competences developpees en SISR</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Systemes</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
                <li>Installation et administration Windows/Linux.</li>
                <li>Services AD, DNS, DHCP.</li>
                <li>Gestion des comptes et des droits.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Reseau</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
                <li>VLAN, routage, Wi-Fi.</li>
                <li>Tests et diagnostic reseau.</li>
                <li>Configuration de switches et routeurs.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Securite</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
                <li>Regles pare-feu et filtrage.</li>
                <li>Segmentation et bonnes pratiques.</li>
                <li>Surveillance basique et durcissement.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Methodologie</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
                <li>Diagnostic et tests progressifs.</li>
                <li>Documentation et rigueur.</li>
                <li>Communication et suivi d'incidents.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Conclusion</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Le BTS SIO offre une formation polyvalente et professionnalisante.
            Le choix de l'option SISR correspond a mon profil et a mon envie
            de travailler sur des infrastructures concretes. Ce parcours alimente
            mon projet professionnel et me prepare a evoluer vers des roles
            techniques dans les systemes et les reseaux.
          </p>
        </section>
      </div>
    </Section>
  );
}
