import Link from "next/link";
import CompanyLogo from "../components/CompanyLogo";

const companies = [
  { name: "BIOGROUP", src: "/logos/biogroup.png", initials: "BG" },
  { name: "XPERTDIAG’IMMO", src: "/logos/xpertdiag.png", initials: "XD" },
  { name: "UTB", src: "/logos/utb.png", initials: "UTB" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      {/* HERO */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
        <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
          BTS SIO • Option SISR
        </p>

        <p className="mt-6 text-5xl font-extrabold tracking-tight text-white/90 sm:text-6xl lg:text-7xl">
          PRENOM
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Portfolio — Systèmes & Réseaux
        </h1>

        <p className="mt-4 max-w-2xl text-white/75">
          Bienvenue sur mon portfolio. Vous y trouverez mes stages, mes comptes rendus,
          mes compétences SISR, mon projet professionnel et ma veille technologique.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/stages"
            className="
              inline-flex
              items-center
              justify-center
              text-center
              rounded-2xl
              border border-white/10
              bg-white/5
              px-5
              py-2
              text-sm
              text-white/90
              transition
              duration-300
              hover:bg-white/10
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            Voir mes stages
          </Link>
          <Link
            href="/competences"
            className="
              inline-flex
              items-center
              justify-center
              text-center
              rounded-2xl
              border border-white/10
              bg-white/5
              px-5
              py-2
              text-sm
              text-white/90
              transition
              duration-300
              hover:bg-white/10
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            Compétences SISR
          </Link>
          <Link
            href="/veille"
            className="
              inline-flex
              items-center
              justify-center
              text-center
              rounded-2xl
              border border-white/10
              bg-white/5
              px-5
              py-2
              text-sm
              text-white/90
              transition
              duration-300
              hover:bg-white/10
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            Veille technologique
          </Link>
        </div>
      </div>

      {/* ENTREPRISES */}
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-white/80">Entreprises</p>
          <div className="flex flex-wrap items-center gap-3">
            {companies.map((company) => (
              <CompanyLogo
                key={company.name}
                src={company.src}
                alt={`Logo ${company.name}`}
                initials={company.initials}
                size="sm"
                className="bg-white/5"
                imgClassName="grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* GRID CARDS */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Link
          href="/moi"
          className="
            group
            flex
            h-full
            flex-col
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
          <h2 className="text-lg font-semibold">Moi</h2>
          <p className="mt-2 text-white/75">
            Profil, parcours, qualités et objectifs.
          </p>
          <p className="mt-auto pt-4 text-sm text-white/60 group-hover:text-white/80 transition">
            Ouvrir →
          </p>
        </Link>

        <Link
          href="/stages"
          className="
            group
            flex
            h-full
            flex-col
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
          <h2 className="text-lg font-semibold">Stages</h2>
          <p className="mt-2 text-white/75">
            3 stages : contexte, missions, outils et documents.
          </p>
          <p className="mt-auto pt-4 text-sm text-white/60 group-hover:text-white/80 transition">
            Ouvrir →
          </p>
        </Link>

        <Link
          href="/comptes-rendus"
          className="
            group
            flex
            h-full
            flex-col
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
          <h2 className="text-lg font-semibold">Comptes rendus</h2>
          <p className="mt-2 text-white/75">
            Synthèse des missions réalisées et compétences mobilisées.
          </p>
          <p className="mt-auto pt-4 text-sm text-white/60 group-hover:text-white/80 transition">
            Ouvrir →
          </p>
        </Link>

        <Link
          href="/projet-pro"
          className="
            group
            flex
            h-full
            flex-col
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
          <h2 className="text-lg font-semibold">Projet professionnel</h2>
          <p className="mt-2 text-white/75">
            Objectif, plan d’action et progression.
          </p>
          <p className="mt-auto pt-4 text-sm text-white/60 group-hover:text-white/80 transition">
            Ouvrir →
          </p>
        </Link>

        <Link
          href="/competences"
          className="
            group
            flex
            h-full
            flex-col
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
          <h2 className="text-lg font-semibold">Compétences</h2>
          <p className="mt-2 text-white/75">
            Systèmes, réseau, sécurité, virtualisation.
          </p>
          <p className="mt-auto pt-4 text-sm text-white/60 group-hover:text-white/80 transition">
            Ouvrir →
          </p>
        </Link>

        <Link
          href="/veille"
          className="
            group
            flex
            h-full
            flex-col
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
          <h2 className="text-lg font-semibold">Veille technologique</h2>
          <p className="mt-2 text-white/75">
            Implants neurologiques : usages, avancées, enjeux.
          </p>
          <p className="mt-auto pt-4 text-sm text-white/60 group-hover:text-white/80 transition">
            Ouvrir →
          </p>
        </Link>
      </div>
    </main>
  );
}
