import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="accueil" className="relative min-h-screen flex flex-col overflow-hidden">

      <div
        className={`flex-1 flex flex-col items-center justify-center px-6 transition-all duration-1000 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >

        {/* Badge top — boxed like Sagar */}
        <div
          className="mb-10"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(-12px)',
            transition: 'all 0.8s ease 0.3s',
          }}
        >
          <div
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full"
            style={{
              border: '1px solid rgba(34,211,238,0.25)',
              background: 'rgba(34,211,238,0.04)',
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#e2e8f0',
            }}
          >
            PORTFOLIO {'\u2022'} SISR {'\u2022'} R{'\u00c9'}SEAUX {'\u2022'} CYBERS{'\u00c9'}CURIT{'\u00c9'}
          </div>
        </div>

        {/* Big title — Orbitron like Sagar */}
        <h1
          className="text-center"
          style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 800,
            letterSpacing: '0.02em',
            color: '#f1f5f9',
            lineHeight: 1.15,
            marginBottom: '3.5rem',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 1s ease 0.4s',
          }}
        >
          Bienvenue dans mon univers
        </h1>

        {/* Photo with gradient circle behind — like Sagar */}
        <div
          className="relative mb-12 flex-shrink-0"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'scale(1)' : 'scale(0.9)',
            transition: 'all 1s ease 0.6s',
          }}
        >
          {/* Big gradient circle behind photo — like Sagar's blue/purple planet */}
          <div
            className="absolute rounded-full"
            style={{
              inset: '-50px',
              background: 'radial-gradient(circle at 40% 40%, rgba(99,102,241,0.18) 0%, rgba(34,211,238,0.08) 40%, rgba(99,102,241,0.04) 70%, transparent 100%)',
              filter: 'blur(2px)',
            }}
          />
          {/* Subtle outer ring */}
          <div
            className="absolute rounded-full"
            style={{
              inset: '-6px',
              border: '2px solid rgba(34,211,238,0.2)',
            }}
          />
          {/* Avatar — large like Sagar */}
          <div
            className="relative rounded-full overflow-hidden"
            style={{
              width: 'clamp(240px, 28vw, 320px)',
              height: 'clamp(240px, 28vw, 320px)',
              border: '3px solid rgba(34,211,238,0.35)',
              boxShadow: '0 0 60px rgba(34,211,238,0.12), 0 0 120px rgba(99,102,241,0.08)',
            }}
          >
            <img
              src="/photo-dilan.png"
              alt="Dilan Lengue"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Name — cyan like Sagar */}
        <h2
          className="text-center"
          style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#22d3ee',
            marginBottom: '1.5rem',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(12px)',
            transition: 'all 1s ease 0.8s',
          }}
        >
          D. Lengue
        </h2>

        {/* Tagline — like Sagar */}
        <p
          className="text-center"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '17px',
            fontWeight: 400,
            color: 'rgba(203,213,225,0.95)',
            letterSpacing: '0.01em',
            marginBottom: '1.2rem',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(12px)',
            transition: 'all 1s ease 0.9s',
          }}
        >
          L{'\u00e0'} o{'\u00f9'} la rigueur rencontre l{'\u2019'}infrastructure.
        </p>

        {/* Roles — like Sagar */}
        <p
          className="text-center"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            fontWeight: 400,
            color: 'rgba(148,163,184,0.85)',
            letterSpacing: '0.5px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(12px)',
            transition: 'all 1s ease 1s',
          }}
        >
          Syst{'\u00e8'}mes {'\u00b7'} R{'\u00e9'}seaux {'\u00b7'} Cybers{'\u00e9'}curit{'\u00e9'}
        </p>

      </div>

      {/* Scroll indicator — like Sagar "Faites défiler pour découvrir" */}
      <div
        className={`flex flex-col items-center gap-3 pb-12 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1.2s', marginTop: 'auto', paddingTop: '2rem' }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            color: 'rgba(148,163,184,0.7)',
            letterSpacing: '0.04em',
          }}
        >
          Faites d{'\u00e9'}filer pour d{'\u00e9'}couvrir
        </span>
        <ChevronDown
          size={20}
          style={{
            color: 'rgba(148,163,184,0.6)',
            animation: 'float 2.5s ease-in-out infinite',
          }}
        />
      </div>

    </section>
  )
}
