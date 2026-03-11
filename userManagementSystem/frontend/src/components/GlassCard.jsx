export default function GlassCard({ children }) {
  return (
    <div
      className="relative rounded-[22px] border border-white/[0.08] overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(24px)",
        boxShadow: "0 28px 72px rgba(0,0,0,0.4)"
      }}
    >
      <div className="p-9">{children}</div>
    </div>
  );
}