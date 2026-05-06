import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, CalendarDays, Award, Github, Linkedin, ChevronDown, FolderKanban, Mail } from 'lucide-react'

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

      {/* ── SECTION 4 — Réseaux sociaux ── */}
      <section className="relative" style={{ paddingTop: '4rem', paddingBottom: '10rem' }}>
        <div className="w-full max-w-4xl mx-auto px-6 lg:px-10">

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
              MES R{'É'}SEAUX
            </span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(167,139,250,0.4), transparent)' }} />
          </div>

          {/* Social cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/dilan-lengue',
                color: '#0A66C2',
                bg: 'rgba(10,102,194,0.1)',
                border: 'rgba(10,102,194,0.25)',
                icon: <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dilan-lengue',
                color: '#e6ecf8',
                bg: 'rgba(255,255,255,0.05)',
                border: 'rgba(255,255,255,0.12)',
                icon: <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
              },
              {
                label: 'Discord',
                href: 'https://discord.com',
                color: '#5865F2',
                bg: 'rgba(88,101,242,0.1)',
                border: 'rgba(88,101,242,0.25)',
                icon: <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/></svg>,
              },
              {
                label: 'Email',
                href: 'mailto:lenguedilan@gmail.com',
                color: '#22d3ee',
                bg: 'rgba(34,211,238,0.08)',
                border: 'rgba(34,211,238,0.2)',
                icon: <Mail size={28} />,
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com',
                color: '#E4405F',
                bg: 'rgba(228,64,95,0.1)',
                border: 'rgba(228,64,95,0.25)',
                icon: <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z"/></svg>,
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="group flex flex-col items-center gap-4 rounded-2xl transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: social.bg,
                  border: `1px solid ${social.border}`,
                  padding: '2rem 1.5rem',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = social.color
                  e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.25), 0 0 30px ${social.color}20`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = social.border
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  className="flex items-center justify-center rounded-xl transition-all duration-300"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: `${social.color}15`,
                    border: `1px solid ${social.color}30`,
                    color: social.color,
                  }}
                >
                  {social.icon}
                </div>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#f1f5f9',
                }}>
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
