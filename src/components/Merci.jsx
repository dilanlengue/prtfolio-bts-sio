import { Sparkles } from 'lucide-react'

export default function Merci() {
  return (
    <div className="relative" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">

          {/* Title — gradient like Sagar */}
          <h2
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #f472b6, #a78bfa, #22d3ee, #34d399)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.3,
              marginBottom: '1.5rem',
            }}
          >
            Merci d'&ecirc;tre arriv&eacute; jusqu'ici !{' '}
            <span style={{ WebkitTextFillColor: 'unset', background: 'none', fontSize: '0.9em' }}>
              {'\uD83C\uDF89'}
            </span>
          </h2>

          {/* Subtitle — like Sagar */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: '#94a3b8',
              maxWidth: '580px',
              lineHeight: 1.7,
              marginBottom: '0.5rem',
            }}
          >
            Vous avez explor&eacute; mon univers, d&eacute;couvert mes projets et mes comp&eacute;tences.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: '#94a3b8',
              maxWidth: '580px',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}
          >
            J'esp&egrave;re que ce voyage vous a plu autant que j'ai pris plaisir &agrave; le cr&eacute;er.
          </p>

          {/* Decorative line with sparkle — like Sagar */}
          <div className="flex items-center gap-4">
            <div
              style={{
                width: '80px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #a78bfa, #22d3ee)',
                borderRadius: '2px',
              }}
            />
            <Sparkles size={20} style={{ color: '#fbbf24' }} />
            <div
              style={{
                width: '80px',
                height: '2px',
                background: 'linear-gradient(90deg, #22d3ee, #34d399, transparent)',
                borderRadius: '2px',
              }}
            />
          </div>

        </div>
      </div>
    </div>
  )
}
