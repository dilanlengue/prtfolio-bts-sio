import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Mail, FolderKanban, ShieldCheck, CalendarDays, Award } from 'lucide-react'

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
  { value: 8, suffix: '+', label: 'Projets', color: '#22d3ee', icon: FolderKanban },
  { value: 4, suffix: '', label: 'Certifications', color: '#22c55e', icon: ShieldCheck },
  { value: 3, suffix: '+', label: 'Ans d\'XP', color: '#f59e0b', icon: CalendarDays },
  { value: 2, suffix: '', label: 'Stages', color: '#a78bfa', icon: Award },
]

export default function Presentation() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setLoaded(true), 200) }, [])

  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 px-6 lg:px-16 py-16">

        {/* Photo - left side */}
        <div
          className="relative flex-shrink-0"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'scale(1)' : 'scale(0.9)',
            transition: 'all 1s ease 0.3s',
          }}
        >
          {/* Glow effect */}
          <div
            className="absolute"
            style={{
              inset: '-30px',
              borderRadius: '20px',
              background: 'radial-gradient(circle at 40% 40%, rgba(99,102,241,0.2) 0%, rgba(34,211,238,0.12) 40%, transparent 70%)',
              filter: 'blur(3px)',
              animation: 'pulse-ring 4s ease-in-out infinite',
            }}
          />
          {/* Photo - full image */}
          <div
            className="relative overflow-hidden"
            style={{
              width: 'clamp(320px, 40vw, 520px)',
              borderRadius: '16px',
              border: '2px solid rgba(34,211,238,0.3)',
              boxShadow: '0 0 60px rgba(34,211,238,0.15), 0 0 120px rgba(99,102,241,0.08)',
            }}
          >
            <img
              src="/photo-dilan.png"
              alt="Dilan Lengue — Administrateur Systèmes & Réseaux"
              className="w-full h-auto"
              style={{ display: 'block' }}
            />
          </div>
        </div>

        {/* Text - right side */}
        <div
          className="max-w-xl text-center lg:text-left"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease 0.5s',
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(0,255,136,0.06)',
              border: '1px solid rgba(0,255,136,0.2)',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#00ff88' }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#00ff88' }} />
            </span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: '#00ff88' }}>
              Disponible — Alternance sept. 2026
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
            fontWeight: 800,
            color: '#f1f5f9',
            lineHeight: 1.1,
            marginBottom: '0.5rem',
            textShadow: '0 0 30px rgba(34,211,238,0.1)',
          }}>
            Dilan{' '}
            <span style={{
              background: 'linear-gradient(135deg, #818cf8, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Lengue
            </span>
          </h1>

          {/* Title */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            fontWeight: 600,
            color: '#22d3ee',
            marginBottom: '1.5rem',
          }}>
            Alternant Admin. Systèmes & Réseaux — Cybersécurité
          </p>

          {/* Description */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            color: '#94a3b8',
            lineHeight: 1.85,
            marginBottom: '2rem',
          }}>
            Étudiant en <span style={{ color: '#e2e8f0', fontWeight: 600 }}>BTS SIO option SISR</span>,
            bilingue anglais-français. Spécialisé en administration systèmes, réseaux et cybersécurité.
            Deux stages en support N1/N2, certifié <span style={{ color: '#22d3ee', fontWeight: 600 }}>ANSSI SecNumacadémie</span>.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-3 mb-8">
            {stats.map(({ value, suffix, label, color, icon: Icon }) => (
              <div key={label} className="text-center p-3 rounded-xl transition-all duration-200 card-lift" style={{ background: `${color}08`, border: `1px solid ${color}20` }}>
                <Icon size={18} style={{ color, margin: '0 auto 4px' }} />
                <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.3rem', fontWeight: 800, color }}>
                  <CountUp target={value} suffix={suffix} />
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#64748b', fontWeight: 600 }}>{label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
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
              <Mail size={16} /> Contact
            </Link>
          </div>
        </div>
      </div>

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
    </section>
  )
}
