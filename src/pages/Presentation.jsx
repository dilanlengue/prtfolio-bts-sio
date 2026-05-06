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
      {/* ── HERO — centered, style cyber ── */}
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
          <div className="relative mx-auto mb-7" style={{ width: 'clamp(240px, 35vw, 340px)', aspectRatio: '1' }}>
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
                  width="340"
                  height="340"
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

      {/* ── SECTION 2 — Profile intro card ── */}
      <section className="relative" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
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
            {/* HUD line + availability */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
              <div className="flex items-center gap-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#00ff88' }} />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: '#00ff88' }} />
                </span>
                <span style={{ fontSize: '12px', color: '#00ff88', letterSpacing: '0.18em', fontWeight: 700 }}>
                  SYSTEM ONLINE
                </span>
                <span style={{ color: '#475569' }}>{'·'}</span>
                <span style={{ fontSize: '12px', color: '#64748b', letterSpacing: '0.12em' }}>
                  PORTFOLIO_v2.0
                </span>
              </div>

              <div
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full"
                style={{
                  background: 'rgba(0,255,136,0.06)',
                  border: '1px solid rgba(0,255,136,0.2)',
                  boxShadow: '0 0 20px rgba(0,255,136,0.06)',
                }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: '#34d399' }}>
                  Disponible {'—'} Alternance sept. 2026
                </span>
              </div>
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #818cf8, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '2rem',
                letterSpacing: '-0.01em',
              }}
            >
              Alternant Admin. Syst{'è'}mes & R{'é'}seaux {'—'} Cybers{'é'}curit{'é'}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '18px',
                color: '#cbd5e1',
                lineHeight: 1.85,
                maxWidth: '700px',
              }}
            >
              {'É'}tudiant en <span style={{ color: '#f1f5f9', fontWeight: 700 }}>BTS SIO option SISR</span>,
              bilingue anglais-fran{'ç'}ais. Sp{'é'}cialis{'é'} en administration syst{'è'}mes, r{'é'}seaux et cybers{'é'}curit{'é'}.
              Deux stages en support N1/N2, certifi{'é'} <span style={{ color: '#22d3ee', fontWeight: 700 }}>ANSSI SecNumacad{'é'}mie</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — Stats cards (separate block) ── */}
      <section className="relative" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
        <div className="w-full max-w-5xl mx-auto px-6 lg:px-10">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-14">
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.4))' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              fontWeight: 700,
              color: '#22d3ee',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
            }}>
              EN CHIFFRES
            </span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(34,211,238,0.4), transparent)' }} />
          </div>

          {/* Stats grid */}
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
                {/* Glow top bar */}
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
                  letterSpacing: '-0.03em',
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

      {/* ── SECTION 4 — CTA buttons (separate block) ── */}
      <section className="relative" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
        <div className="w-full max-w-5xl mx-auto px-6 lg:px-10">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-14">
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.4))' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              fontWeight: 700,
              color: '#a78bfa',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
            }}>
              EXPLORER
            </span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(167,139,250,0.4), transparent)' }} />
          </div>

          {/* CTA cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            {/* Voir mes projets */}
            <Link
              to="/projets"
              className="group relative flex flex-col items-center gap-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(145deg, rgba(99,102,241,0.12), rgba(34,211,238,0.06))',
                border: '1px solid rgba(99,102,241,0.2)',
                padding: '2.5rem 2rem',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.45)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(99,102,241,0.15), 0 0 30px rgba(99,102,241,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl"
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                  boxShadow: '0 8px 24px rgba(99,102,241,0.3)',
                }}
              >
                <FolderKanban size={28} style={{ color: '#fff' }} />
              </div>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                fontWeight: 700,
                color: '#f1f5f9',
              }}>
                Voir mes projets
              </span>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                color: '#94a3b8',
                textAlign: 'center',
                lineHeight: 1.5,
              }}>
                9+ projets infrastructure & dev
              </span>
              <ArrowRight size={18} style={{ color: '#6366f1', marginTop: '0.5rem' }} />
            </Link>

            {/* Mon CV */}
            <a
              href="/cv-dilan-lengue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(11,16,32,0.7)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '2.5rem 2rem',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl"
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                <Download size={28} style={{ color: '#e2e8f0' }} />
              </div>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                fontWeight: 700,
                color: '#f1f5f9',
              }}>
                Mon CV
              </span>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                color: '#94a3b8',
                textAlign: 'center',
                lineHeight: 1.5,
              }}>
                T{'é'}l{'é'}charger en PDF
              </span>
              <ArrowRight size={18} style={{ color: '#94a3b8', marginTop: '0.5rem' }} />
            </a>

            {/* Me contacter */}
            <Link
              to="/contact"
              className="group relative flex flex-col items-center gap-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(145deg, rgba(34,211,238,0.08), rgba(0,255,136,0.04))',
                border: '1px solid rgba(34,211,238,0.2)',
                padding: '2.5rem 2rem',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(34,211,238,0.45)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(34,211,238,0.1), 0 0 30px rgba(34,211,238,0.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(34,211,238,0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl"
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'rgba(34,211,238,0.12)',
                  border: '1px solid rgba(34,211,238,0.3)',
                }}
              >
                <Mail size={28} style={{ color: '#22d3ee' }} />
              </div>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                fontWeight: 700,
                color: '#f1f5f9',
              }}>
                Me contacter
              </span>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                color: '#94a3b8',
                textAlign: 'center',
                lineHeight: 1.5,
              }}>
                Email, LinkedIn, Discord
              </span>
              <ArrowRight size={18} style={{ color: '#22d3ee', marginTop: '0.5rem' }} />
            </Link>
          </div>

          {/* Socials row */}
          <div className="flex justify-center gap-5" style={{ marginTop: '4rem' }}>
            <a
              href="https://github.com/dilan-lengue"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil GitHub de Dilan Lengue"
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#cbd5e1',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
                e.currentTarget.style.color = '#f1f5f9'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.color = '#cbd5e1'
              }}
            >
              <Github size={20} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600 }}>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dilan-lengue"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn de Dilan Lengue"
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'rgba(10,102,194,0.08)',
                border: '1px solid rgba(10,102,194,0.2)',
                color: '#5fa8e8',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(10,102,194,0.45)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(10,102,194,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(10,102,194,0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <Linkedin size={20} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600 }}>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Tech strip */}
      <div
        className="py-10 text-center"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: 'linear-gradient(180deg, rgba(99,102,241,0.03), rgba(34,211,238,0.02))',
        }}
      >
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px',
          fontWeight: 700,
          color: '#475569',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          TECHNOLOGIES
        </p>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-3 px-6">
          {['Windows Server', 'Linux', 'Cisco', 'Active Directory', 'OpenVPN', 'Nagios', 'GLPI', 'Wireshark'].map(tech => (
            <span
              key={tech}
              className="transition-all duration-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '12.5px',
                color: '#94a3b8',
                fontWeight: 500,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '8px',
                padding: '6px 14px',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
