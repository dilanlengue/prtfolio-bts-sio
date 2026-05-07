import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative">
      <div
        style={{
          borderTop: '1px solid rgba(99,102,241,0.12)',
          background: 'linear-gradient(180deg, transparent, rgba(11,16,32,0.4))',
        }}
      >
        <div className="py-10">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col items-center gap-4">
            {/* Logo / Nom */}
            <p
              style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: '14px',
                fontWeight: 800,
                letterSpacing: '0.12em',
                background: 'linear-gradient(135deg, #818cf8, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              DILAN LENGUE
            </p>

            {/* Séparateur */}
            <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, #6366f1, #22d3ee)', borderRadius: '2px', opacity: 0.5 }} />

            {/* Description */}
            <p style={{
              color: '#64748b',
              fontFamily: "'Inter', sans-serif",
              fontSize: '13.5px',
              textAlign: 'center',
              lineHeight: 1.6,
            }}>
              Portfolio BTS SIO option SISR — Institut F2I
            </p>

            {/* Copyright */}
            <p style={{
              color: '#334155',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              letterSpacing: '0.08em',
            }}>
              {'©'} {new Date().getFullYear()} — Tous droits réservés
            </p>
          </div>

          {/* Retour en haut */}
          <button
            aria-label="Retour en haut de la page"
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
            style={{
              background: 'rgba(15,20,40,0.9)',
              border: '1px solid rgba(99,102,241,0.2)',
              color: '#94a3b8',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#e2e8f0'
              e.currentTarget.style.borderColor = 'rgba(34,211,238,0.4)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(34,211,238,0.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#94a3b8'
              e.currentTarget.style.borderColor = 'rgba(99,102,241,0.2)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'
            }}
          >
            Retour en haut <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
