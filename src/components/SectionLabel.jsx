/* ─── Section divider with label (── TITLE ──) — réutilisable partout ─── */
export default function SectionLabel({ label, color = '#22d3ee', mt = 'my-16' }) {
  return (
    <div className={`flex items-center gap-4 ${mt}`}>
      <div
        className="flex-1"
        style={{
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${color}66)`,
        }}
      />
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '12px',
          fontWeight: 700,
          color,
          letterSpacing: '0.22em',
          whiteSpace: 'nowrap',
          textShadow: `0 0 16px ${color}66`,
        }}
      >
        ── {label} ──
      </span>
      <div
        className="flex-1"
        style={{
          height: '1px',
          background: `linear-gradient(90deg, ${color}66, transparent)`,
        }}
      />
    </div>
  )
}
