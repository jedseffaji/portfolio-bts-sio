export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-[-20%] bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.18),transparent_55%),radial-gradient(circle_at_85%_35%,rgba(124,58,237,0.16),transparent_50%),radial-gradient(circle_at_30%_85%,rgba(10,10,15,0.7),transparent_60%)] opacity-80 animate-bg-shift" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.55),rgba(2,6,23,0.85),rgba(49,46,129,0.18))] opacity-90 animate-bg-shift" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px] opacity-60" />
      <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[120px]" />
      <div className="absolute right-[-15%] top-[10%] h-[360px] w-[360px] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-5%] h-[520px] w-[520px] rounded-full bg-fuchsia-500/10 blur-[140px]" />
      <div className="absolute inset-0 bg-noise opacity-10" />
    </div>
  );
}
