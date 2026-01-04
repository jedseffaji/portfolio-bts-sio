export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-[-20%] bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(124,58,237,0.16),transparent_50%),radial-gradient(circle_at_30%_80%,rgba(15,23,42,0.5),transparent_60%)] opacity-80 animate-bg-shift" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(30,64,175,0.08),rgba(15,23,42,0.6),rgba(88,28,135,0.12))] opacity-80 animate-bg-shift" />
      <div className="absolute inset-0 bg-noise opacity-15" />
    </div>
  );
}
