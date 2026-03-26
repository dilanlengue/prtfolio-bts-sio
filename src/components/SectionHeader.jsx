export default function SectionHeader({ title, description }) {
  return (
    <div className="text-center" style={{ marginBottom: '28px' }}>
      <h2 style={{
        fontFamily: "'Orbitron', system-ui, sans-serif",
        fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
        fontWeight: 800,
        letterSpacing: '-0.025em',
        lineHeight: 1.6,
        textTransform: 'none',
        color: '#e6ecf8',
        marginBottom: '0px',
      }}>
        {title}
      </h2>
      {description && (
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '15px',
          fontWeight: 500,
          color: '#c5d3e8',
          marginTop: '4px',
        }}>
          {description}
        </p>
      )}
      <div className="mx-auto" style={{
        width: '128px',
        height: '2px',
        background: 'linear-gradient(90deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.45) 24%, rgba(212,175,55,0.85) 50%, rgba(147,51,234,0.55) 76%, rgba(56,189,248,0) 100%)',
        marginTop: '16px',
      }} />
    </div>
  )
}
