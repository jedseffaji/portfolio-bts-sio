import Link from "next/link";

const linkClass =
  "rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white transition";

const comptesRendus = [
  { label: "Soccer78", href: "/comptes-rendus/soccer78" },
  { label: "GSB", href: "/comptes-rendus/gsb" },
  { label: "Projets personnels", href: "/comptes-rendus/projets-personnels" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight text-white/90 hover:text-white">
          Portfolio SISR
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="/profil" className={linkClass}>
            Profil
          </Link>
          <Link href="/bts-sio" className={linkClass}>
            BTS SIO
          </Link>
          <Link href="/stages" className={linkClass}>
            Stages
          </Link>

          <div className="group relative flex items-center">
            <Link href="/comptes-rendus" className={`${linkClass} inline-flex items-center gap-1`}>
              Comptes rendus
              <span className="text-xs text-white/50">v</span>
            </Link>
            <div className="absolute left-0 top-full z-50 pt-2 pointer-events-none group-hover:pointer-events-auto">
              <div
                className="
                  w-56
                  origin-top
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/90
                  p-2
                  opacity-0
                  shadow-2xl
                  backdrop-blur
                  transition
                  duration-300
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  translate-y-1
                "
              >
                {comptesRendus.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block w-full rounded-xl px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/projet-pro" className={linkClass}>
            Projet pro
          </Link>
          <Link href="/competences" className={linkClass}>
            Competences
          </Link>
          <Link href="/veille" className={linkClass}>
            Veille
          </Link>
        </div>
      </nav>
    </header>
  );
}
