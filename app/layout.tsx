import "./globals.css";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Portfolio — BTS SIO (SISR)",
  description: "Portfolio BTS SIO option SISR : stages, comptes rendus, compétences, veille.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="fr">
      <body className="min-h-screen bg-black text-white flex flex-col">
        <Background />

        <Navbar />
        <div className="mx-auto w-full max-w-5xl px-6 pt-4">
          <Link
            href="/"
            className="inline-flex text-sm text-white/70 transition hover:text-white"
          >
            {"\u2190 Retour \u00e0 l'accueil"}
          </Link>
        </div>
        <div className="flex-1">{children}</div>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <span>{"\u00a9"} {year} {"\u2014"} Portfolio BTS SIO (SISR)</span>
            <Link
              href="/mentions-legales"
              className="text-white/60 transition hover:text-white"
            >
              Mentions l{"\u00e9"}gales
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
