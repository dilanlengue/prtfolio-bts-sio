import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Mail, FolderKanban, ShieldCheck, CalendarDays, Award, Github, Linkedin, ChevronDown } from 'lucide-react'

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
  { value: 9, suffix: '+', label: 'Projets', color: '#22d3ee', icon: FolderKanban },
  { value: 4, suffix: '', label: 'Certifications', color: '#22c55e', icon: ShieldCheck },
  { value: 3, suffix: '+', label: 'Ans d\'XP', color: '#f59e0b', icon: CalendarDays },
  { value: 2, suffix: '', label: 'Stages', color: '#a78bfa', icon: Award },
]

const TAGS = ['PORTFOLIO', 'SISR', 'RÉSEAUX', 'CYBERSÉCURITÉ']

export default function Presentation() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setLoaded(true), 200) }, [])

  return (
    <>
      {/* ── HERO — centered, Sagar style ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center"
        style={{ minHeight: 'calc(100vh - 80px)', paddingTop: '4rem', paddingBottom: '4rem' }}
      >
        <div
          className="w-full max-w-4xl mx-auto px-6"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.9s ease 0.2s',
          }}
        >
          {/* Top tags */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-6">
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

          {/* Welcome title */}
          <h1
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: 'clamp(2.6rem, 7vw, 4.8rem)',
              fontWeight: 900,
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
              marginBottom: '3rem',
              color: '#f1f5f9',
              textShadow: '0 0 60px rgba(34,211,238,0.15)',
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

          {/* Avatar — circular framed */}
          <div className="relative mx-auto mb-7" style={{ width: 'clamp(180px, 28vw, 240px)', aspectRatio: '1' }}>
            {/* Glow rings */}
            <div
              className="absolute"
              style={{
                inset: '-28px',
                borderRadius: '50%',
                background:
                  'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.18) 0%, rgba(34,211,238,0.12) 35%, transparent 68%)',
                filter: 'blur(2px)',
                animation: 'pulse-ring 4s ease-in-out infinite',
              }}
            />
            <div
              className="absolute"
              style={{
                inset: 0,
                borderRadius: '50%',
                border: '2px solid rgba(34,211,238,0.5)',
                boxShadow: '0 0 60px rgba(34,211,238,0.18), 0 0 120px rgba(99,102,241,0.08), inset 0 0 40px rgba(99,102,241,0.06)',
              }}
            />
            <div
              className="relative overflow-hidden"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '3px solid rgba(11,16,32,0.85)',
              }}
            >
              <picture>
                <source srcSet="/photo-dilan.webp" type="image/webp" />
                <img
                  src="/photo-dilan.png"
                  alt="Dilan Lengue — Administrateur Systèmes &amp; Réseaux"
                  className="w-full h-full"
                  style={{ objectFit: 'cover' }}
                  width="240"
                  height="240"
                  fetchpriority="high"
                  decoding="async"
                />
              </picture>
            </div>
            {/* Tag badge */}
            <span
              className="absolute"
              style={{
                bottom: '-4px',
                right: '-4px',
                background: 'rgba(11,16,32,0.95)',
                border: '1px solid rgba(34,211,238,0.5)',
                color: '#22d3ee',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10.5px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                padding: '5px 10px',
                borderRadius: '999px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
              }}
            >
              SISR
            </span>
          </div>

          {/* Big name */}
          <h2
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: 'clamp(2.4rem, 6.5vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              marginBottom: '1rem',
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
              fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
              fontWeight: 500,
              color: '#cbd5e1',
              maxWidth: '520px',
              margin: '0 auto 0.75rem',
              lineHeight: 1.5,
              fontStyle: 'italic',
            }}
          >
            Là où la rigueur rencontre l'infrastructure.
          </p>

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

      {/* ── SECTION 2 — Profile detail (ex-2-column reorganized) ── */}
      <section className="relative" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="w-full max-w-5xl mx-auto px-6 lg:px-10">
          <div
            className="rounded-2xl"
            style={{
              background: 'rgba(11,16,32,0.62)',
              border: '1px solid rgba(255,255,255,0.06)',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            }}
          >
            {/* HUD line + availability */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#00ff88' }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#00ff88' }} />
                </span>
                <span style={{ fontSize: '12px', color: '#00ff88', letterSpacing: '0.18em', fontWeight: 700 }}>
                  SYSTEM ONLINE
                </span>
                <span style={{ color: '#475569' }}>·</span>
                <span style={{ fontSize: '12px', color: '#64748b', letterSpacing: '0.12em' }}>
                  PORTFOLIO_v2.0
                </span>
              </div>

              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(0,255,136,0.08)',
                  border: '1px solid rgba(0,255,136,0.25)',
                }}
              >
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: '#34d399' }}>
                  Disponible — Alternance sept. 2026
                </span>
              </div>
            </div>

            {/* Title */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(1.05rem, 2.4vw, 1.3rem)',
                fontWeight: 700,
                color: '#22d3ee',
                marginBottom: '1rem',
                letterSpacing: '0.01em',
              }}
            >
              Alternant Admin. Systèmes &amp; Réseaux — Cybersécurité
            </p>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '17px',
                color: '#cbd5e1',
                lineHeight: 1.75,
                marginBottom: '2rem',
              }}
            >
              Étudiant en <span style={{ color: '#f1f5f9', fontWeight: 700 }}>BTS SIO option SISR</span>,
              bilingue anglais-français. Spécialisé en administration systèmes, réseaux et cybersécurité.
              Deux stages en support N1/N2, certifié <span style={{ color: '#22d3ee', fontWeight: 700 }}>ANSSI SecNumacadémie</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
              {stats.map(({ value, suffix, label, color, icon: Icon }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-xl transition-all duration-200 card-lift"
                  style={{ background: `${color}10`, border: `1px solid ${color}25` }}
                >
                  <Icon size={20} style={{ color, margin: '0 auto 6px' }} />
                  <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.55rem', fontWeight: 800, color, lineHeight: 1 }}>
                    <CountUp target={value} suffix={suffix} />
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#94a3b8', fontWeight: 600, marginTop: '4px' }}>{label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-5">
              <Link
                to="/projets"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                  fontFamily: "'Inter', sans-serif",
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(99,102,241,0.3)',
                }}
              >
                Voir mes projets <ArrowRight size={16} />
              </Link>
              <a
                href="/cv-dilan-lengue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#f1f5f9',
                  fontFamily: "'Inter', sans-serif",
                  textDecoration: 'none',
                }}
              >
                <Download size={16} /> Mon CV
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5"
                style={{
                  background: 'rgba(34,211,238,0.08)',
                  border: '1px solid rgba(34,211,238,0.25)',
                  color: '#22d3ee',
                  fontFamily: "'Inter', sans-serif",
                  textDecoration: 'none',
                }}
              >
                <Mail size={16} /> Me contacter
              </Link>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              <a
                href="https://github.com/dilan-lengue"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil GitHub de Dilan Lengue"
                className="flex items-center justify-center w-11 h-11 rounded-xl transition-all hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#cbd5e1',
                }}
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/dilan-lengue"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn de Dilan Lengue"
                className="flex items-center justify-center w-11 h-11 rounded-xl transition-all hover:-translate-y-0.5"
                style={{
                  background: 'rgba(10,102,194,0.08)',
                  border: '1px solid rgba(10,102,194,0.25)',
                  color: '#5fa8e8',
                }}
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tech strip */}
      <div
        className="py-5 text-center"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
          background: 'rgba(99,102,241,0.02)',
        }}
      >
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-4">
          {['Windows Server', 'Linux', 'Cisco', 'Active Directory', 'OpenVPN', 'Nagios', 'GLPI', 'Wireshark'].map(tech => (
            <span key={tech} style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: '#475569',
              letterSpacing: '0.5px',
              fontWeight: 500,
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
