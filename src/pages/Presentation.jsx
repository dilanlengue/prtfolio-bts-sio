import { useState, useEffect, useMemo } from 'react'
import { ChevronDown } from 'lucide-react'

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const duration = 1800
    const start = Date.now()
    const step = () => {
      const progress = Math.min((Date.now() - start) / duration, 1)
      setCount(Math.floor((1 - Math.pow(1 - progress, 4)) * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    step()
  }, [target])
  return <span>{count}{suffix}</span>
}

const TAG_COLORS = [
  { tag: 'BTS SIO', color: '#818cf8', bg: 'rgba(129,140,248,0.12)', border: 'rgba(129,140,248,0.3)' },
  { tag: 'OPTION SISR', color: '#22d3ee', bg: 'rgba(34,211,238,0.12)', border: 'rgba(34,211,238,0.3)' },
  { tag: 'SESSION 2026', color: '#00ff88', bg: 'rgba(0,255,136,0.1)', border: 'rgba(0,255,136,0.25)' },
]

function ProjectIllustration() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <rect x="8" y="16" width="64" height="48" rx="6" stroke="#22d3ee" strokeWidth="2" opacity="0.3" />
      <rect x="8" y="16" width="64" height="12" rx="6" fill="rgba(34,211,238,0.1)" stroke="#22d3ee" strokeWidth="1.5" opacity="0.5" />
      <circle cx="16" cy="22" r="2" fill="#f87171" />
      <circle cx="23" cy="22" r="2" fill="#fbbf24" />
      <circle cx="30" cy="22" r="2" fill="#34d399" />
      <rect x="16" y="36" width="20" height="18" rx="3" fill="rgba(34,211,238,0.15)" stroke="#22d3ee" strokeWidth="1" />
      <rect x="44" y="36" width="20" height="8" rx="3" fill="rgba(34,211,238,0.1)" stroke="#22d3ee" strokeWidth="1" />
      <rect x="44" y="48" width="20" height="6" rx="2" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" strokeWidth="1" />
      <path d="M20 42 L26 48 L32 40" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CertificationIllustration() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <rect x="16" y="10" width="48" height="42" rx="4" stroke="#22c55e" strokeWidth="1.5" opacity="0.3" />
      <rect x="16" y="10" width="48" height="42" rx="4" fill="rgba(34,197,94,0.05)" />
      <circle cx="40" cy="28" r="10" stroke="#22c55e" strokeWidth="2" fill="rgba(34,197,94,0.1)" />
      <path d="M35 28 L38.5 31.5 L45 25" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="26" y="42" width="28" height="3" rx="1.5" fill="rgba(34,197,94,0.2)" />
      <path d="M34 56 L40 68 L46 56" stroke="#22c55e" strokeWidth="1.5" opacity="0.4" />
      <path d="M34 56 L28 64" stroke="#22c55e" strokeWidth="1.5" opacity="0.3" />
      <path d="M46 56 L52 64" stroke="#22c55e" strokeWidth="1.5" opacity="0.3" />
      <circle cx="40" cy="68" r="3" fill="rgba(34,197,94,0.3)" stroke="#22c55e" strokeWidth="1" />
    </svg>
  )
}

function ExperienceIllustration() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="28" stroke="#f59e0b" strokeWidth="2" opacity="0.2" />
      <circle cx="40" cy="40" r="28" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 6" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" from="0 40 40" to="360 40 40" dur="20s" repeatCount="indefinite"/>
      </circle>
      <circle cx="40" cy="40" r="22" stroke="#f59e0b" strokeWidth="1.5" opacity="0.15" />
      <line x1="40" y1="22" x2="40" y2="40" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="40" x2="52" y2="44" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <circle cx="40" cy="40" r="3" fill="#f59e0b" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => (
        <circle key={deg} cx={40 + 26 * Math.cos(deg * Math.PI / 180)} cy={40 + 26 * Math.sin(deg * Math.PI / 180)} r={deg % 90 === 0 ? 2 : 1} fill="#f59e0b" opacity={deg % 90 === 0 ? 0.6 : 0.25} />
      ))}
    </svg>
  )
}

function StageIllustration() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <rect x="20" y="24" width="40" height="36" rx="4" stroke="#a78bfa" strokeWidth="1.5" opacity="0.3" fill="rgba(167,139,250,0.05)" />
      <rect x="28" y="16" width="24" height="12" rx="3" stroke="#a78bfa" strokeWidth="1.5" fill="rgba(167,139,250,0.08)" />
      <rect x="36" y="12" width="8" height="6" rx="2" stroke="#a78bfa" strokeWidth="1.5" opacity="0.4" />
      <circle cx="40" cy="40" r="8" stroke="#a78bfa" strokeWidth="1.5" fill="rgba(167,139,250,0.1)" />
      <path d="M37 40 L39.5 42.5 L44 38" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="26" y1="52" x2="38" y2="52" stroke="#a78bfa" strokeWidth="1.5" opacity="0.2" strokeLinecap="round" />
      <line x1="42" y1="52" x2="54" y2="52" stroke="#a78bfa" strokeWidth="1.5" opacity="0.2" strokeLinecap="round" />
    </svg>
  )
}

const stats = [
  { value: 7, label: 'Projets', color: '#22d3ee', Illustration: ProjectIllustration },
  { value: 2, label: 'Certifications', color: '#22c55e', Illustration: CertificationIllustration },
  { value: 2, label: 'Ans d\'expérience', color: '#f59e0b', Illustration: ExperienceIllustration },
  { value: 2, label: 'Stages effectués', color: '#a78bfa', Illustration: StageIllustration },
]

function FloatingParticles() {
  const particles = useMemo(() => Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${((i * 37 + 13) % 100)}%`,
    top: `${((i * 53 + 7) % 100)}%`,
    size: (i % 4) + 2,
    delay: (i * 0.25) % 5,
    duration: (i % 4) + 4,
    color: ['#6366f1', '#22d3ee', '#00ff88', '#a78bfa', '#f59e0b'][i % 5],
  })), [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            opacity: 0.4,
            animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
        />
      ))}
    </div>
  )
}

export default function Presentation() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setLoaded(true), 100) }, [])

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: 'calc(100vh - 80px)', paddingTop: '4rem', paddingBottom: '4rem' }}
      >
        <FloatingParticles />
        <div
          className="absolute"
          style={{
            width: '600px', height: '600px',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
            animation: 'hero-glow-pulse 6s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        />

        <div className="relative w-full max-w-5xl mx-auto px-6" style={{ zIndex: 1 }}>

          {/* Tags en haut — colorés et visibles */}
          {loaded && (
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10 hero-reveal hero-reveal-d1">
              {TAG_COLORS.map(({ tag, color, bg, border }) => (
                <span
                  key={tag}
                  className="tag-glow"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color,
                    letterSpacing: '0.16em',
                    padding: '6px 16px',
                    borderRadius: '999px',
                    background: bg,
                    border: `1px solid ${border}`,
                    boxShadow: `0 0 12px ${color}10`,
                    textShadow: `0 0 10px ${color}30`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Titre principal */}
          {loaded && (
            <h1
              className="hero-reveal hero-reveal-d2"
              style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: 'clamp(1.6rem, 4.5vw, 2.8rem)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: '4rem',
                color: '#f1f5f9',
                textShadow: '0 0 80px rgba(34,211,238,0.15), 0 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              Administrateur{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #818cf8 0%, #22d3ee 40%, #00ff88 80%, #818cf8 100%)',
                  backgroundSize: '300% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'gradient-shift 5s linear infinite',
                }}
              >
                Systèmes & Réseaux
              </span>
            </h1>
          )}

          {/* Photo de profil */}
          {loaded && (
            <div className="hero-reveal-scale hero-reveal-d3 relative mx-auto mb-14" style={{ width: 'clamp(300px, 42vw, 420px)', aspectRatio: '1' }}>
              <div className="orbit-dot" style={{ '--orbit-radius': '230px', '--orbit-duration': '12s', background: '#22d3ee', boxShadow: '0 0 12px #22d3ee' }} />
              <div className="orbit-dot" style={{ '--orbit-radius': '230px', '--orbit-duration': '12s', background: '#6366f1', boxShadow: '0 0 12px #6366f1', animationDelay: '-4s' }} />
              <div className="orbit-dot" style={{ '--orbit-radius': '230px', '--orbit-duration': '12s', background: '#00ff88', boxShadow: '0 0 12px #00ff88', animationDelay: '-8s' }} />

              <div className="photo-container" style={{ width: '100%', height: '100%', borderRadius: '50%' }}>
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '5px solid #080c1a',
                    boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(99,102,241,0.1), inset 0 0 60px rgba(0,0,0,0.3)',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <div className="photo-scan-line" />
                  <img
                    src="/photo-dilan.png"
                    alt="Dilan Lengue — Étudiant BTS SIO SISR"
                    className="w-full h-full"
                    style={{ objectFit: 'cover', position: 'relative', zIndex: 1 }}
                    width="420"
                    height="420"
                    fetchpriority="high"
                    decoding="async"
                  />
                </div>
              </div>

              <span
                className="absolute shimmer-bar"
                style={{
                  bottom: '12px',
                  right: '12px',
                  background: 'rgba(8,12,26,0.95)',
                  border: '1px solid rgba(34,211,238,0.6)',
                  color: '#22d3ee',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  boxShadow: '0 4px 24px rgba(34,211,238,0.2), 0 0 8px rgba(34,211,238,0.15)',
                  zIndex: 20,
                }}
              >
                BTS SIO · SISR
              </span>
            </div>
          )}

          {/* Nom */}
          {loaded && (
            <h2
              className="hero-reveal hero-reveal-d4"
              style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: 'clamp(2rem, 5.5vw, 3.6rem)',
                fontWeight: 900,
                letterSpacing: '0.04em',
                lineHeight: 1,
                marginBottom: '2rem',
                background: 'linear-gradient(135deg, #e2e8f0 0%, #818cf8 30%, #22d3ee 60%, #00ff88 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradient-shift 6s linear infinite',
              }}
            >
              DILAN LENGUE
            </h2>
          )}

          {/* Sous-titre */}
          {loaded && (
            <div className="hero-reveal hero-reveal-d5 mb-6">
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
                  fontWeight: 500,
                  color: '#94a3b8',
                  lineHeight: 1.7,
                  maxWidth: '520px',
                  margin: '0 auto',
                }}
              >
                Active Directory · DHCP · VLAN · GPO · Wireshark · Support N1/N2
              </p>
            </div>
          )}

          {/* Centre de formation */}
          {loaded && (
            <p
              className="hero-reveal hero-reveal-d6"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '13px',
                fontWeight: 600,
                color: '#475569',
                letterSpacing: '0.15em',
                marginBottom: '3.5rem',
              }}
            >
              Centre de formation : IEF2I
            </p>
          )}

          {/* Scroll hint */}
          {loaded && (
            <div className="hero-reveal hero-reveal-d7 flex flex-col items-center gap-2" style={{ animation: 'float 3s ease-in-out infinite' }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  color: '#475569',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                Scroll pour explorer
              </p>
              <ChevronDown size={20} style={{ color: '#64748b', animation: 'float 2s ease-in-out infinite' }} />
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 2 — Qui suis-je ── */}
      <section className="relative" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="w-full max-w-5xl mx-auto px-6 lg:px-10">
          <div
            className="rounded-3xl shimmer-bar glass-refract card-holo"
            style={{
              background: 'linear-gradient(145deg, rgba(11,16,32,0.85), rgba(15,20,40,0.7))',
              border: '1px solid rgba(99,102,241,0.18)',
              padding: 'clamp(2.5rem, 6vw, 4rem)',
              boxShadow: '0 30px 100px rgba(0,0,0,0.5), 0 0 80px rgba(99,102,241,0.06)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              <div className="flex items-center gap-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span style={{ fontSize: '11px', color: '#818cf8', letterSpacing: '0.15em', fontWeight: 700 }}>
                  N° CANDIDAT : 02545812811
                </span>
              </div>
              <div
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full"
                style={{
                  background: 'rgba(0,255,136,0.05)',
                  border: '1px solid rgba(0,255,136,0.2)',
                  boxShadow: '0 0 20px rgba(0,255,136,0.05)',
                }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12.5px', fontWeight: 600, color: '#34d399' }}>
                  Disponible — Alternance sept. 2026
                </span>
              </div>
            </div>

            <h3
              style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #818cf8, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '2.5rem',
              }}
            >
              Qui suis-je ?
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', color: '#cbd5e1', lineHeight: 1.9 }}>
                {'É'}tudiant en <strong style={{ color: '#f1f5f9' }}>BTS SIO option SISR</strong> au centre de formation <strong style={{ color: '#f1f5f9' }}>IEF2I</strong>. J'ai r{'é'}alis{'é'} <strong style={{ color: '#22d3ee' }}>7 projets techniques</strong> en formation (Active Directory, DHCP, VLAN, GPO, Wireshark, GLPI) et <strong style={{ color: '#22d3ee' }}>2 stages en entreprise</strong>.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', color: '#cbd5e1', lineHeight: 1.9 }}>
                <strong style={{ color: '#f1f5f9' }}>Stage 1{'è'}re ann{'é'}e</strong> chez <span style={{ color: '#8b5cf6', fontWeight: 700 }}>Les R{'é'}parateurs Mac & PC</span> (Montreuil) — diagnostic de pannes, r{'é'}paration mat{'é'}rielle, support client.
                <br />
                <strong style={{ color: '#f1f5f9' }}>Stage 2{'è'}me ann{'é'}e</strong> chez <span style={{ color: '#06b6d4', fontWeight: 700 }}>B&A Conseil</span> (Coigni{'è'}res) — gestion de flotte mobile MDM Miradore, configuration de smartphones, support N1/N2.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', color: '#cbd5e1', lineHeight: 1.9 }}>
                Certifi{'é'} <span style={{ color: '#00ff88', fontWeight: 700 }}>ANSSI SecNumacad{'é'}mie</span> et <span style={{ color: '#00ff88', fontWeight: 700 }}>Cisco Introduction to Cybersecurity</span>. Mon objectif est de poursuivre en <strong style={{ color: '#f1f5f9' }}>licence pro cybers{'é'}curit{'é'}</strong> puis devenir <strong style={{ color: '#f1f5f9' }}>pentester</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — Chiffres clés avec illustrations ── */}
      <section className="relative" style={{ paddingTop: '4rem', paddingBottom: '10rem' }}>
        <div className="w-full max-w-5xl mx-auto px-6 lg:px-10">

          <div className="flex items-center gap-4 mb-16">
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.5))' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              fontWeight: 700,
              color: '#22d3ee',
              letterSpacing: '0.3em',
              padding: '6px 16px',
              background: 'rgba(34,211,238,0.06)',
              border: '1px solid rgba(34,211,238,0.15)',
              borderRadius: '8px',
            }}>
              EN CHIFFRES
            </span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(34,211,238,0.5), transparent)' }} />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 stagger-grid">
            {stats.map((stat) => {
              const { value, label, color } = stat
              const StatIllustration = stat.Illustration
              return (
              <div
                key={label}
                className="group relative rounded-2xl text-center transition-all duration-500 card-holo"
                style={{
                  background: 'rgba(11,16,32,0.75)',
                  border: `1.5px solid ${color}18`,
                  padding: 'clamp(2rem, 3.5vw, 2.8rem) 1.5rem',
                  cursor: 'default',
                  backdropFilter: 'blur(8px)',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)'
                  e.currentTarget.style.borderColor = `${color}70`
                  e.currentTarget.style.boxShadow = `0 30px 60px rgba(0,0,0,0.4), 0 0 50px ${color}20, inset 0 1px 0 ${color}20`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.borderColor = `${color}18`
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Glow bar top */}
                <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '2px', background: `linear-gradient(90deg, transparent, ${color}, transparent)`, opacity: 0.5, borderRadius: '0 0 4px 4px' }} />

                {/* Background glow */}
                <div style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120px',
                  height: '120px',
                  background: `radial-gradient(circle, ${color}08, transparent)`,
                  pointerEvents: 'none',
                }} />

                {/* Illustration SVG */}
                <div className="mx-auto flex items-center justify-center" style={{ marginBottom: '1.2rem', opacity: 0.9 }}>
                  <StatIllustration />
                </div>

                {/* Chiffre */}
                <p style={{
                  fontFamily: "'Orbitron', system-ui, sans-serif",
                  fontSize: 'clamp(2.4rem, 5vw, 3.4rem)',
                  fontWeight: 900,
                  color,
                  lineHeight: 1,
                  marginBottom: '0.6rem',
                  textShadow: `0 0 30px ${color}40`,
                }}>
                  <CountUp target={value} />
                </p>

                {/* Label */}
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: '#94a3b8',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}>
                  {label}
                </p>
              </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
