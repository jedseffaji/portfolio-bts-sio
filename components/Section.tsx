export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="text-3xl font-extrabold tracking-tight">{title}</h1>
      {subtitle ? <p className="mt-3 text-white/75">{subtitle}</p> : null}
      <div className="mt-8">{children}</div>
    </main>
  );
}
