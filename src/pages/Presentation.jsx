import { useState, useEffect } from 'react'
import { ShieldCheck, CalendarDays, Award, Github, Linkedin, FolderKanban, Mail, MapPin, GraduationCap } from 'lucide-react'

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

export default function Presentation() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setLoaded(true), 200) }, [])

  return (
    <>
      {/* ── HERO — Photo + Identité ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center"
        style={{ minHeight: 'calc(100vh - 80px)', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <div
          className="w-full max-w-4xl mx-auto px-6"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease 0.2s',
          }}
        >
          {/* Photo de profil — grande et propre */}
          <div className="relative mx-auto mb-10" style={{ width: 'clamp(280px, 40vw, 400px)', aspectRatio: '1' }}>
            <div
              className="absolute"
              style={{
                inset: '-20px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #6366f1, #22d3ee, #00ff88, #6366f1)',
                opacity: 0.2,
                filter: 'blur(20px)',
                animation: 'spin 8s linear infinite',
              }}
            />
            <div
              className="absolute"
              style={{
                inset: '-4px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #6366f1, #22d3ee, #00ff88, #6366f1)',
                opacity: 0.6,
              }}
            />
            <div
              className="relative overflow-hidden"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '4px solid #0b1020',
              }}
            >
              <img
                src="/photo-dilan.png"
                alt="Dilan Lengue"
                className="w-full h-full"
                style={{ objectFit: 'cover' }}
                width="400"
                height="400"
                fetchpriority="high"
                decoding="async"
              />
            </div>
          </div>

          {/* Nom */}
          <h1
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: 'clamp(2.4rem, 7vw, 4.2rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #f1f5f9, #cbd5e1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Dilan Lengue
          </h1>

          {/* Titre pro */}
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              fontWeight: 600,
              color: '#22d3ee',
              marginBottom: '1.5rem',
            }}
          >
            Étudiant BTS SIO option SISR — 2ème année
          </h2>

          {/* Infos clés */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-8">
            <span className="flex items-center gap-2" style={{ color: '#94a3b8', fontSize: '15px' }}>
              <GraduationCap size={18} style={{ color: '#a78bfa' }} />
              Formation initiale
            </span>
            <span className="flex items-center gap-2" style={{ color: '#94a3b8', fontSize: '15px' }}>
              <MapPin size={18} style={{ color: '#22c55e' }} />
              Île-de-France
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full" style={{
              background: 'rgba(0,255,136,0.08)',
              border: '1px solid rgba(0,255,136,0.25)',
            }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#34d399' }}>
                Disponible — Alternance sept. 2026
              </span>
            </span>
          </div>

          {/* Description pour l'oral */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px',
              color: '#cbd5e1',
              lineHeight: 1.8,
              maxWidth: '650px',
              margin: '0 auto 2.5rem',
            }}
          >
            Passionné par l'administration systèmes et réseaux, je me spécialise en
            cybersécurité et infrastructure réseau. Ce portfolio présente l'ensemble
            de mon parcours, mes projets et compétences développés durant mon BTS SIO SISR.
          </p>

          {/* Liens réseaux — sans Instagram */}
          <div className="flex items-center justify-center gap-4">
            {[
              { href: 'https://www.linkedin.com/in/dilan-lengue', icon: <Linkedin size={22} />, label: 'LinkedIn', color: '#0A66C2' },
              { href: 'https://github.com/dilan-lengue', icon: <Github size={22} />, label: 'GitHub', color: '#e6ecf8' },
              { href: 'mailto:lenguedilan@gmail.com', icon: <Mail size={22} />, label: 'Email', color: '#22d3ee' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(11,16,32,0.8)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  color: link.color,
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = link.color
                  e.currentTarget.style.boxShadow = `0 10px 30px rgba(0,0,0,0.3), 0 0 15px ${link.color}20`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(99,102,241,0.2)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {link.icon}
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: '#f1f5f9' }}>
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — Qui suis-je (card) ── */}
      <section className="relative" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
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
              Mon profil
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', color: '#cbd5e1', lineHeight: 1.8 }}>
                Étudiant en <strong style={{ color: '#f1f5f9' }}>BTS SIO option SISR</strong> en formation initiale (2ème année),
                je suis spécialisé dans l'administration des systèmes, les réseaux d'entreprise et la cybersécurité.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', color: '#cbd5e1', lineHeight: 1.8 }}>
                Bilingue français-anglais, j'ai réalisé deux stages en support informatique N1/N2
                où j'ai pu mettre en pratique mes compétences techniques sur le terrain.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', color: '#cbd5e1', lineHeight: 1.8 }}>
                Certifié <span style={{ color: '#22d3ee', fontWeight: 700 }}>ANSSI SecNumacadémie</span>,
                je recherche une alternance à partir de septembre 2026 pour approfondir mes compétences
                en administration systèmes et réseaux.
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
