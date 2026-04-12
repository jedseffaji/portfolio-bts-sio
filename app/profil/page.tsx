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
            Photo à venir
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
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-white/75">{formation}</p>
    </div>
  );
}

export default function Page() {
  return (
    <Section title="Profil" subtitle="Présentation personnelle, parcours et objectifs professionnels.">
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
        <h2 className="text-xl font-semibold text-white">Qui suis-je ?</h2>
        <p className="mt-4 text-white/75">
          Je suis étudiant en BTS Services Informatiques aux Organisations (SIO),
          option SISR (Solutions d'Infrastructure, Systèmes et Réseaux). Je
          m'intéresse particulièrement aux infrastructures informatiques, aux
          réseaux et à la sécurité.
        </p>
        <p className="mt-3 text-white/75">
          À travers ma formation et mes stages, j'ai développé un goût pour le
          travail concret : configuration, installation, maintenance, dépannage
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
        <h2 className="text-xl font-semibold text-white">Parcours scolaire</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <SchoolCard
            title="Lycée Jean Vilar"
            formation="BTS SIO option SISR"
            imageSrc="/images/jean-vilar.jpg"
          />
          <SchoolCard
            title="Lycée Louis Blériot"
            formation="Bac Système Numérique"
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
        <h2 className="text-xl font-semibold text-white">Expériences professionnelles</h2>
        <p className="mt-4 text-white/75">
          J'ai réalisé plusieurs stages en entreprise, me permettant de découvrir
          différents environnements professionnels et techniques :
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-white/75">
          <li>
            <strong>BIOGROUP</strong> : laboratoire d'analyses médicales (rigueur,
            procédures, contrôle et tests)
          </li>
          <li>
            <strong>XPERTDIAG’IMMO</strong> : diagnostics immobiliers (support
            informatique, logiciels métiers, formation utilisateurs)
          </li>
          <li>
            <strong>UTB</strong> : interventions en datacenter et support IT
            (réseau, firewall, tickets, maintenance matérielle)
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
        <h2 className="text-xl font-semibold text-white">Qualités et savoir-être</h2>
        <p className="mt-4 text-white/75">
          Mes expériences m'ont permis de développer des qualités importantes
          pour les métiers de l'informatique :
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-white/75">
          <li>Rigueur et sens des responsabilités</li>
          <li>Autonomie et capacité d'adaptation</li>
          <li>Esprit d'équipe et communication</li>
          <li>Organisation et gestion des priorités</li>
          <li>Capacité à documenter et expliquer</li>
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
        <h2 className="text-xl font-semibold text-white">Objectif professionnel</h2>
        <p className="mt-4 text-white/75">
          Mon objectif est de poursuivre dans le domaine des systèmes et réseaux
          en tant que technicien systèmes et réseaux, puis d'évoluer vers des
          fonctions à plus forte responsabilité, notamment dans le domaine de la
          cybersécurité.
        </p>
        <p className="mt-3 text-white/75">
          Je souhaite continuer à apprendre à travers des projets concrets, des
          environnements réels et une veille technologique régulière.
        </p>
      </div>


      {/* MON CV */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold text-white">Mon CV</h2>
        <p className="mt-2 text-zinc-200">
          Prévisualisation du CV. Cliquez pour l’ouvrir en grand.
        </p>
        <a
          href="/cv/CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white/90 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl"
        >
          Ouvrir le CV (PDF)
        </a>
        <a
          href="/cv/CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="mt-4 block rounded-xl border border-white/10 bg-black/30 p-2 hover:bg-black/40 transition"
        >
          <iframe
            src="/cv/CV.pdf"
            title="Prévisualisation du CV"
            className="h-[540px] w-full rounded-xl border border-white/10 bg-black/20"
          />
        </a>
      </div>
    </Section>
  );
}
