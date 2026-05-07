import { useState, useEffect } from 'react'
import { ShieldCheck, CalendarDays, Award, Github, Linkedin, FolderKanban, Mail, Phone, MapPin, GraduationCap, ChevronDown } from 'lucide-react'

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const duration = 1600
    const start = Date.now()
    const step = () => {
      const progress = Math.min((Date.now() - start) / duration, 1)
      setCount(Math.floor((1 - Math.pow(1 - progress, 3)) * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    step()
  }, [target])
  return <span>{count}{suffix}</span>
}

const stats = [
  { value: 9, suffix: '+', label: 'Projets réalisés', color: '#22d3ee', icon: FolderKanban },
  { value: 4, suffix: '', label: 'Certifications', color: '#22c55e', icon: ShieldCheck },
  { value: 3, suffix: '+', label: 'Ans d\'expérience', color: '#f59e0b', icon: CalendarDays },
  { value: 2, suffix: '', label: 'Stages effectués', color: '#a78bfa', icon: Award },
]

const TAGS = ['PORTFOLIO', 'SISR', 'RÉSEAUX', 'CYBERSÉCURITÉ']

export default function Presentation() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setLoaded(true), 200) }, [])

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center"
        style={{ minHeight: 'calc(100vh - 80px)', paddingTop: '4rem', paddingBottom: '4rem' }}
      >
        <div
          className="w-full max-w-5xl mx-auto px-6"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(18px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
          }}
        >
          {/* Tags en haut */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-8">
            {TAGS.map((tag, i) => (
              <span key={tag} className="flex items-center gap-2.5">
                {i > 0 && <span style={{ color: '#334155', fontSize: '12px' }}>•</span>}
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#64748b',
                    letterSpacing: '0.18em',
                  }}
                >
                  {tag}
                </span>
              </span>
            ))}
          </div>

          {/* Titre "Bienvenue dans mon univers" */}
          <h1
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: 'clamp(2.4rem, 6.5vw, 4.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
              marginBottom: '3.5rem',
              color: '#f1f5f9',
              textShadow: '0 0 80px rgba(34,211,238,0.12)',
            }}
          >
            Bienvenue dans{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #818cf8 0%, #22d3ee 50%, #00ff88 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              mon univers
            </span>
          </h1>

          {/* Photo de profil — très grande */}
          <div className="relative mx-auto mb-10" style={{ width: 'clamp(300px, 45vw, 440px)', aspectRatio: '1' }}>
            {/* Glow externe */}
            <div
              className="absolute"
              style={{
                inset: '-30px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #6366f1, #22d3ee, #00ff88, #a78bfa, #6366f1)',
                opacity: 0.15,
                filter: 'blur(30px)',
                animation: 'spin 10s linear infinite',
              }}
            />
            {/* Bordure gradient */}
            <div
              className="absolute"
              style={{
                inset: '-5px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #6366f1, #22d3ee, #00ff88, #a78bfa, #6366f1)',
                animation: 'spin 6s linear infinite',
              }}
            />
            {/* Mask interne */}
            <div
              className="absolute"
              style={{
                inset: '3px',
                borderRadius: '50%',
                background: '#080c1a',
              }}
            />
            {/* Photo */}
            <div
              className="relative overflow-hidden"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '5px solid #0b1020',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 30px rgba(99,102,241,0.05)',
              }}
            >
              <img
                src="/photo-dilan.png"
                alt="Dilan Lengue — Étudiant BTS SIO SISR"
                className="w-full h-full"
                style={{ objectFit: 'cover' }}
                width="440"
                height="440"
                fetchpriority="high"
                decoding="async"
              />
            </div>
            {/* Badge SISR */}
            <span
              className="absolute"
              style={{
                bottom: '8px',
                right: '8px',
                background: 'rgba(11,16,32,0.95)',
                border: '1px solid rgba(34,211,238,0.5)',
                color: '#22d3ee',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.14em',
                padding: '6px 14px',
                borderRadius: '999px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              }}
            >
              SISR
            </span>
          </div>

          {/* Nom */}
          <h2
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              marginBottom: '1.2rem',
              background: 'linear-gradient(135deg, #818cf8, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            DILAN LENGUE
          </h2>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)',
              fontWeight: 500,
              color: '#cbd5e1',
              maxWidth: '520px',
              margin: '0 auto 0.8rem',
              lineHeight: 1.5,
              fontStyle: 'italic',
            }}
          >
            Là où la rigueur rencontre l'infrastructure.
          </p>

          {/* Sys · Net · Sec */}
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '13px',
              fontWeight: 600,
              color: '#64748b',
              letterSpacing: '0.18em',
              marginBottom: '2.5rem',
            }}
          >
            Sys {'·'} Net {'·'} Sec
          </p>

          {/* Infos clés */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-8">
            <span className="flex items-center gap-2" style={{ color: '#94a3b8', fontSize: '15px', fontFamily: "'Inter', sans-serif" }}>
              <GraduationCap size={18} style={{ color: '#a78bfa' }} />
              BTS SIO SISR — 2ème année (initiale)
            </span>
            <span className="flex items-center gap-2" style={{ color: '#94a3b8', fontSize: '15px', fontFamily: "'Inter', sans-serif" }}>
              <MapPin size={18} style={{ color: '#22c55e' }} />
              Île-de-France
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full" style={{
              background: 'rgba(0,255,136,0.06)',
              border: '1px solid rgba(0,255,136,0.22)',
            }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
              <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#34d399', fontFamily: "'Inter', sans-serif" }}>
                Disponible — Alternance sept. 2026
              </span>
            </span>
          </div>

          {/* Liens contact */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {[
              { href: 'mailto:lenguedilan@gmail.com', icon: <Mail size={18} />, label: 'lenguedilan@gmail.com', color: '#22d3ee' },
              { href: 'tel:+33744203870', icon: <Phone size={18} />, label: '+33 7 44 20 38 70', color: '#34d399' },
              { href: 'https://www.linkedin.com/in/dilan-lengue', icon: <Linkedin size={18} />, label: 'LinkedIn', color: '#0A66C2' },
              { href: 'https://github.com/dilan-lengue', icon: <Github size={18} />, label: 'GitHub', color: '#e6ecf8' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(11,16,32,0.75)',
                  border: '1px solid rgba(99,102,241,0.15)',
                  color: link.color,
                  textDecoration: 'none',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${link.color}60`
                  e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.25), 0 0 12px ${link.color}15`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(99,102,241,0.15)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {link.icon}
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13.5px', fontWeight: 600, color: '#e2e8f0' }}>
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="flex flex-col items-center gap-2" style={{ animation: 'float 3s ease-in-out infinite' }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                color: '#64748b',
                letterSpacing: '0.05em',
              }}
            >
              Faites défiler pour découvrir
            </p>
            <ChevronDown size={18} style={{ color: '#64748b' }} />
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — Mon profil ── */}
      <section className="relative" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="w-full max-w-5xl mx-auto px-6 lg:px-10">
          <div
            className="rounded-3xl"
            style={{
              background: 'linear-gradient(145deg, rgba(11,16,32,0.8), rgba(15,20,40,0.65))',
              border: '1px solid rgba(99,102,241,0.15)',
              padding: 'clamp(2.5rem, 6vw, 4rem)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.4), 0 0 60px rgba(99,102,241,0.06)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* HUD line */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              <div className="flex items-center gap-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#00ff88' }} />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: '#00ff88' }} />
                </span>
                <span style={{ fontSize: '11px', color: '#00ff88', letterSpacing: '0.18em', fontWeight: 700 }}>
                  SYSTEM ONLINE
                </span>
                <span style={{ color: '#475569' }}>{'·'}</span>
                <span style={{ fontSize: '11px', color: '#64748b', letterSpacing: '0.12em' }}>
                  PORTFOLIO_v2.0
                </span>
              </div>
            </div>

            <h3
              style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #818cf8, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '2rem',
              }}
            >
              Étudiant Admin. Systèmes & Réseaux — Cybersécurité
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', color: '#cbd5e1', lineHeight: 1.85 }}>
                Étudiant en <strong style={{ color: '#f1f5f9' }}>BTS SIO option SISR</strong> en formation initiale (2ème année),
                bilingue anglais-français. Spécialisé en administration systèmes, réseaux et cybersécurité.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', color: '#cbd5e1', lineHeight: 1.85 }}>
                Deux stages en support informatique N1/N2 où j'ai mis en pratique mes compétences techniques
                sur le terrain. Certifié <span style={{ color: '#22d3ee', fontWeight: 700 }}>ANSSI SecNumacadémie</span>.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', color: '#cbd5e1', lineHeight: 1.85 }}>
                Ce portfolio présente l'ensemble de mon parcours, mes projets et compétences
                développés durant ma formation BTS SIO SISR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — Chiffres clés ── */}
      <section className="relative" style={{ paddingTop: '2rem', paddingBottom: '8rem' }}>
        <div className="w-full max-w-5xl mx-auto px-6 lg:px-10">

          <div className="flex items-center gap-4 mb-14">
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.4))' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              fontWeight: 700,
              color: '#22d3ee',
              letterSpacing: '0.25em',
            }}>
              EN CHIFFRES
            </span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(34,211,238,0.4), transparent)' }} />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, suffix, label, color, icon: Icon }) => (
              <div
                key={label}
                className="group relative rounded-2xl text-center transition-all duration-300"
                style={{
                  background: 'rgba(11,16,32,0.7)',
                  border: `1px solid ${color}20`,
                  padding: 'clamp(1.8rem, 3vw, 2.5rem) 1.5rem',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.borderColor = `${color}50`
                  e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.3), 0 0 30px ${color}15`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = `${color}20`
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '2px', background: `linear-gradient(90deg, transparent, ${color}, transparent)`, opacity: 0.5, borderRadius: '0 0 4px 4px' }} />
                <div
                  className="mx-auto flex items-center justify-center rounded-xl"
                  style={{
                    width: '56px',
                    height: '56px',
                    background: `${color}12`,
                    border: `1px solid ${color}30`,
                    marginBottom: '1.2rem',
                  }}
                >
                  <Icon size={26} style={{ color }} />
                </div>
                <p style={{
                  fontFamily: "'Orbitron', system-ui, sans-serif",
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  fontWeight: 900,
                  color,
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}>
                  <CountUp target={value} suffix={suffix} />
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13px',
                  color: '#94a3b8',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
