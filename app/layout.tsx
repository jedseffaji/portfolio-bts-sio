import "./globals.css";
import Background from "../components/Background";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Portfolio — BTS SIO (SISR)",
  description: "Portfolio BTS SIO option SISR : stages, comptes rendus, compétences, veille.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-black text-white">
        <Background />

        <Navbar />
        {children}

        <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-white/40">
          Portfolio réalisé avec Next.js • Hébergé sur Vercel
        </footer>
      </body>
    </html>
  );
}
