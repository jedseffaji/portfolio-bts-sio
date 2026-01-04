import Link from "next/link";
import Section from "../../../components/Section";

export default function Page() {
  return (
    <Section
      title="GSB"
      subtitle="Projet de 2e annee - reseau, securite, segmentation et durcissement."
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
            GSB est une entreprise fictive qui sert de cadre a un projet plus
            avance. L'objectif est de renforcer la securite et la segmentation
            reseau, en mettant l'accent sur le routage, le filtrage, le NAT et
            l'interconnexion entre zones. Le projet se place dans une logique
            2e annee, avec plus de rigueur et de validation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Objectifs</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Segmenter le reseau avec plusieurs zones fonctionnelles.</li>
            <li>Configurer pfSense comme pare-feu central.</li>
            <li>Mettre en place NAT et regles de filtrage.</li>
            <li>Gerer les services AD, DNS/DHCP de maniere controlee.</li>
            <li>Documenter et tester les flux inter-VLAN.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Mise en place</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Windows Server est installe pour les services AD, DNS et DHCP, mais
            la logique est ici de limiter l'exposition. Les OU sont construites
            par service, les groupes sont nommes clairement, et les GPO sont
            appliquees avec prudence pour limiter les droits. Les partages sont
            testes par groupe afin de verifier la coherente des permissions.
          </p>
          <p className="mt-3 text-white/75 leading-relaxed">
            La segmentation est renforcee : VLAN serveurs, VLAN postes, VLAN
            admin, VLAN visiteurs. Le routage inter-VLAN est gere via pfSense,
            avec regles explicites. Le switch Aruba est configure en trunk vers
            le pare-feu et en access vers les postes.
          </p>
          <p className="mt-3 text-white/75 leading-relaxed">
            Les services DNS et DHCP sont testes par zone. Les scopes sont
            distincts, les options passerelle et DNS sont controlees, et la
            resolution interne est verifiee avant d'ouvrir l'acces Internet.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Routage et interconnexion</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Le routage est traite comme un point cle. Des routes statiques sont
            configurees et verifiees pour s'assurer que chaque VLAN atteint les
            serveurs autorises et Internet. Les tests confirment que les flux
            inter-VLAN respectent les regles de securite definies.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              route print
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              tracert 10.20.30.1
            </span>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Securite et pfSense</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            pfSense est positionne au coeur de l'infrastructure : filtrage
            entrant et sortant, NAT pour l'acces Internet, et regles par zone.
            Les flux sont autorises uniquement si necessaires (DNS, DHCP relay,
            HTTP/HTTPS). Un proxy peut etre teste en option pour filtrer la
            navigation. Le but est de reduire la surface d'attaque.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Regles deny par defaut, puis ouvertures controlees.</li>
            <li>NAT sortant pour les postes utilisateurs.</li>
            <li>Isolation du VLAN invites.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Reseau, VLAN et Wi-Fi</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Les VLAN sont concus pour separer les flux sensibles. Les bornes
            Wi-Fi diffusent deux SSID : un interne securise et un invite limite.
            Le SSID invite est force sur un VLAN dedie qui n'a acces qu'a Internet.
          </p>
          <div className="mt-4 grid gap-2">
            <p className="text-sm font-semibold text-white/80">Tests reseau</p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                ping serveur-ad
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                tracert 8.8.8.8
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                nslookup gsb.local
              </span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Linux serveur</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Un serveur Linux est ajoute pour des services annexes ou de test
            (monitoring ou outils internes). Configuration reseau statique,
            verification des logs et diagnostic simple. Cela permet d'avoir un
            environnement mixte et de pratiquer les bases Linux.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              ip a
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              systemctl status
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              journalctl -xe
            </span>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Tests et validation</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Les tests confirment la bonne isolation des VLAN, la resolution DNS,
            et l'acces controle aux ressources. Les regles pfSense sont revues
            avec des tests de flux pour s'assurer qu'aucun acces non prevu n'est
            possible.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Verif des droits AD avec Get-ADUser et groupes.</li>
            <li>Test DHCP par zone.</li>
            <li>Test d'acces entre VLAN avec ping/tracert.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Methode de travail</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            La methode est basee sur un plan de configuration par etapes :
            conception, mise en oeuvre, tests croises, correction et
            documentation. Les essais sont notes, les captures sont classees,
            et un rapport final valide les choix techniques.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Resultats</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Le reseau est segmente et securise. Les flux sont controles via
            pfSense, les services essentiels sont disponibles et la configuration
            est documentee. Le projet montre une capacite a securiser une
            infrastructure d'entreprise.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Competences mobilisees</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Conception reseau, segmentation et routage.</li>
            <li>Administration pfSense (regles, NAT, proxy).</li>
            <li>AD, DNS/DHCP avec approche securisee.</li>
            <li>Switch Aruba et trunks.</li>
            <li>Diagnostic reseau et validation.</li>
          </ul>
        </section>
      </div>
    </Section>
  );
}
