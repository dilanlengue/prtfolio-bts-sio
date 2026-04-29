import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative">
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="py-8">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col items-center gap-3">
            <p style={{ color: '#cbd5e1', fontFamily: "'Inter', sans-serif", fontSize: '15px' }}>
              Fait avec <span style={{ color: '#f87171' }}>{'❤'}</span> et beaucoup de <span style={{ color: '#f97316' }}>{'☕'}</span> par{' '}
              <span style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontWeight: 700, color: '#22d3ee', fontSize: '13px' }}>
                D. Lengue
              </span>
            </p>
            <p style={{ color: '#64748b', fontFamily: "'Inter', sans-serif", fontSize: '13px' }}>
              {'©'} {new Date().getFullYear()} {'·'} Portfolio BTS SIO SISR {'·'} React + Vite
            </p>
          </div>

          {/* Retour en haut */}
          <button
            aria-label="Retour en haut de la page"
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
            style={{
              background: 'rgba(15,20,40,0.85)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#94a3b8',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#e2e8f0'
              e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'
              e.currentTarget.style.background = 'rgba(15,20,40,0.95)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#94a3b8'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.background = 'rgba(15,20,40,0.85)'
            }}
          >
            Retour en haut <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
