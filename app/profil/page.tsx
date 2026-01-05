"use client";

import { useState } from "react";
import Section from "../../components/Section";

type SchoolCardProps = {
  title: string;
  formation: string;
  imageSrc: string;
};

function SchoolCard({ title, formation, imageSrc }: SchoolCardProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-white/5">
        {hasError ? (
          <div className="flex h-40 items-center justify-center text-sm text-white/60">
            Photo a venir
          </div>
        ) : (
          <img
            src={imageSrc}
            alt={title}
            className="h-40 w-full object-cover"
            onError={() => setHasError(true)}
          />
        )}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-white/75">{formation}</p>
    </div>
  );
}

export default function Page() {
  return (
    <Section title="Profil" subtitle="Presentation personnelle, parcours et objectifs professionnels.">
      {/* PROFIL */}
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
        <h2 className="text-xl font-semibold">Qui suis-je ?</h2>
        <p className="mt-4 text-white/75">
          Je suis etudiant en BTS Services Informatiques aux Organisations (SIO),
          option SISR (Solutions d'Infrastructure, Systemes et Reseaux). Je
          m'interesse particulierement aux infrastructures informatiques, aux
          reseaux et a la securite.
        </p>
        <p className="mt-3 text-white/75">
          A travers ma formation et mes stages, j'ai developpe un gout pour le
          travail concret : configuration, installation, maintenance, depannage
          et documentation de solutions informatiques.
        </p>
      </div>

      {/* PARCOURS */}
      <div
        className="
          mt-8
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
        <h2 className="text-xl font-semibold">Parcours scolaire</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <SchoolCard
            title="Lycee Jean Vilar"
            formation="BTS SIO option SISR"
            imageSrc="/images/jean-vilar.jpg"
          />
          <SchoolCard
            title="Lycee Louis Bleriot"
            formation="Bac Systeme Numerique"
            imageSrc="/images/louis-bleriot.jpg"
          />
        </div>
      </div>

      {/* EXPERIENCE */}
      <div
        className="
          mt-8
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
        <h2 className="text-xl font-semibold">Experiences professionnelles</h2>
        <p className="mt-4 text-white/75">
          J'ai realise plusieurs stages en entreprise, me permettant de decouvrir
          differents environnements professionnels et techniques :
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-white/75">
          <li>
            <strong>BIOGROUP</strong> : laboratoire d'analyses medicales (rigueur,
            procedures, controle et tests)
          </li>
          <li>
            <strong>XPERTDIAG'IMMO</strong> : diagnostics immobiliers (support
            informatique, logiciels metiers, formation utilisateurs)
          </li>
          <li>
            <strong>UTB</strong> : interventions en datacenter et support IT
            (reseau, firewall, tickets, maintenance materielle)
          </li>
        </ul>
      </div>

      {/* QUALITES */}
      <div
        className="
          mt-8
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
        <h2 className="text-xl font-semibold">Qualites et savoir-etre</h2>
        <p className="mt-4 text-white/75">
          Mes experiences m'ont permis de developper des qualites importantes
          pour les metiers de l'informatique :
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-white/75">
          <li>Rigueur et sens des responsabilites</li>
          <li>Autonomie et capacite d'adaptation</li>
          <li>Esprit d'equipe et communication</li>
          <li>Organisation et gestion des priorites</li>
          <li>Capacite a documenter et expliquer</li>
        </ul>
      </div>

      {/* OBJECTIF */}
      <div
        className="
          mt-8
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
        <h2 className="text-xl font-semibold">Objectif professionnel</h2>
        <p className="mt-4 text-white/75">
          Mon objectif est de poursuivre dans le domaine des systemes et reseaux
          en tant que technicien systemes et reseaux, puis d'evoluer vers des
          fonctions a plus forte responsabilite, notamment dans le domaine de la
          cybersecurite.
        </p>
        <p className="mt-3 text-white/75">
          Je souhaite continuer a apprendre a travers des projets concrets, des
          environnements reels et une veille technologique reguliere.
        </p>
      </div>


      {/* CV */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr] lg:items-center">
          <div>
            <h2 className="text-xl font-semibold">CV</h2>
            <p className="mt-3 text-white/75">Disponible au format PDF.</p>
            <a
              href="/portfolio-pdf/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white/90 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl"
            >
              Ouvrir mon CV (PDF)
            </a>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-white/80">CV - PDF</span>
              <span className="rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-xs text-white/70">
                PDF
              </span>
            </div>
            <div className="mt-4 flex h-24 items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/5 text-xs uppercase tracking-[0.2em] text-white/50">
              Apercu
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
