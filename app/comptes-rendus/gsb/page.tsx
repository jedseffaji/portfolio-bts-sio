import Link from "next/link";
import Section from "../../../components/Section";

export default function Page() {
  return (
    <Section
      title="GSB"
      subtitle="Projet de 2e année - réseau, sécurité, segmentation et durcissement."
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
            GSB est une entreprise fictive qui sert de cadre à un projet plus
            avancé. L'objectif est de renforcer la sécurité et la segmentation
            réseau, en mettant l'accent sur le routage, le filtrage, le NAT et
            l'interconnexion entre zones. Le projet se place dans une logique
            2e année, avec plus de rigueur et de validation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Objectifs</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Segmenter le réseau avec plusieurs zones fonctionnelles.</li>
            <li>Configurer pfSense comme pare-feu central.</li>
            <li>Mettre en place NAT et règles de filtrage.</li>
            <li>Gérer les services AD, DNS/DHCP de manière contrôlée.</li>
            <li>Documenter et tester les flux inter-VLAN.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Mise en place</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Windows Server est installé pour les services AD, DNS et DHCP, mais
            la logique est ici de limiter l'exposition. Les OU sont construites
            par service, les groupes sont nommés clairement, et les GPO sont
            appliquées avec prudence pour limiter les droits. Les partages sont
            testés par groupe afin de vérifier la cohérence des permissions.
          </p>
          <p className="mt-3 text-white/75 leading-relaxed">
            La segmentation est renforcée : VLAN serveurs, VLAN postes, VLAN
            admin, VLAN visiteurs. Le routage inter-VLAN est géré via pfSense,
            avec règles explicites. Le switch Aruba est configuré en trunk vers
            le pare-feu et en accès vers les postes.
          </p>
          <p className="mt-3 text-white/75 leading-relaxed">
            Les services DNS et DHCP sont testés par zone. Les scopes sont
            distincts, les options passerelle et DNS sont contrôlées, et la
            résolution interne est vérifiée avant d'ouvrir l'accès Internet.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Routage et interconnexion</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Le routage est traité comme un point clé. Des routes statiques sont
            configurées et vérifiées pour s'assurer que chaque VLAN atteint les
            serveurs autorisés et Internet. Les tests confirment que les flux
            inter-VLAN respectent les règles de sécurité définies.
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
          <h2 className="text-xl font-semibold text-white">Sécurité et pfSense</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            pfSense est positionné au cœur de l'infrastructure : filtrage
            entrant et sortant, NAT pour l'accès Internet, et règles par zone.
            Les flux sont autorisés uniquement si nécessaires (DNS, DHCP relay,
            HTTP/HTTPS). Un proxy peut être testé en option pour filtrer la
            navigation. Le but est de réduire la surface d'attaque.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Règles deny par défaut, puis ouvertures contrôlées.</li>
            <li>NAT sortant pour les postes utilisateurs.</li>
            <li>Isolation du VLAN invités.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Réseau, VLAN et Wi-Fi</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Les VLAN sont conçus pour séparer les flux sensibles. Les bornes
            Wi-Fi diffusent deux SSID : un interne sécurisé et un invité limité.
            Le SSID invité est forcé sur un VLAN dédié qui n'a accès qu'à Internet.
          </p>
          <div className="mt-4 grid gap-2">
            <p className="text-sm font-semibold text-white/80">Tests réseau</p>
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
          <h2 className="text-xl font-semibold text-white">Linux serveur</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Un serveur Linux est ajouté pour des services annexes ou de test
            (monitoring ou outils internes). Configuration réseau statique,
            vérification des logs et diagnostic simple. Cela permet d'avoir un
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
          <h2 className="text-xl font-semibold text-white">Tests et validation</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Les tests confirment la bonne isolation des VLAN, la résolution DNS,
            et l'accès contrôlé aux ressources. Les règles pfSense sont revues
            avec des tests de flux pour s'assurer qu'aucun accès non prévu n'est
            possible.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Vérif des droits AD avec Get-ADUser et groupes.</li>
            <li>Test DHCP par zone.</li>
            <li>Test d'accès entre VLAN avec ping/tracert.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Méthode de travail</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            La méthode est basée sur un plan de configuration par étapes :
            conception, mise en œuvre, tests croisés, correction et
            documentation. Les essais sont notés, les captures sont classées,
            et un rapport final valide les choix techniques.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Résultats</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Le réseau est segmenté et sécurisé. Les flux sont contrôlés via
            pfSense, les services essentiels sont disponibles et la configuration
            est documentée. Le projet montre une capacité à sécuriser une
            infrastructure d'entreprise.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Compétences mobilisées</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Conception réseau, segmentation et routage.</li>
            <li>Administration pfSense (règles, NAT, proxy).</li>
            <li>AD, DNS/DHCP avec approche sécurisée.</li>
            <li>Switch Aruba et trunks.</li>
            <li>Diagnostic réseau et validation.</li>
          </ul>
        </section>
      </div>
    </Section>
  );
}
