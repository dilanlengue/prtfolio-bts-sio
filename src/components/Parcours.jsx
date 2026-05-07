import { useState } from 'react'
import { GraduationCap, Briefcase, MapPin, ChevronDown, ChevronUp } from 'lucide-react'

const stages = [
  {
    date: 'Janv — Fév 2026',
    title: 'Technicien Support & Maintenance',
    org: 'B&A Conseil',
    place: 'Île-de-France',
    pills: ['Support N1/N2', 'Windows 10/11', 'Maintenance'],
    items: [
      'Diagnostic et résolution d\'incidents matériels et logiciels',
      'Maintenance préventive et corrective des postes',
      'Déploiement de postes Windows et assistance on-site',
    ],
  },
  {
    date: 'Mai — Juil 2025',
    title: 'Technicien Support Informatique',
    org: 'Les Réparateurs Mac & PC',
    place: 'Montreuil',
    pills: ['Support N1/N2', 'Réseaux', 'Réparation'],
    items: [
      'Réinstallation et configuration des systèmes d\'exploitation',
      'Diagnostic et réparation de matériels informatiques',
      'Gestion et configuration de réseaux locaux',
    ],
  },
]

const formations = [
  {
    date: '2025 — 2026',
    title: 'BTS SIO Option SISR — 2ème année',
    org: 'Institut F2I',
    place: 'Vincennes',
    current: true,
    pills: ['Active Directory', 'Cisco', 'OpenVPN', 'Nagios'],
  },
  {
    date: '2024 — 2025',
    title: 'BTS SIO Option SISR — 1ère année',
    org: 'Institut F2I',
    place: 'Vincennes',
    pills: ['Réseaux', 'Linux', 'Virtualisation'],
  },
  {
    date: '2024',
    title: 'HND — Software Engineering',
    org: 'IUG Douala',
    place: 'Cameroun',
    pills: ['Dev logiciel', 'Systèmes d\'information'],
  },
  {
    date: '2022 — 2023',
    title: 'Licence Informatique',
    org: 'Université de Douala',
    place: 'Cameroun',
    pills: ['Informatique', 'Programmation', 'Systèmes'],
  },
  {
    date: '2021 — 2022',
    title: 'Baccalauréat Scientifique — Série C',
    org: 'Collège La Perfection',
    place: 'Douala, Cameroun',
    pills: ['Mathématiques', 'Sciences'],
  },
]

function StageCard({ stage }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="relative rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: 'linear-gradient(145deg, rgba(11,16,32,0.85), rgba(15,20,40,0.7))',
        border: '1.5px solid rgba(251,191,36,0.15)',
        backdropFilter: 'blur(8px)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(251,191,36,0.4)'
        e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.35), 0 0 30px rgba(251,191,36,0.08)'
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(251,191,36,0.15)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #fbbf24, transparent)', opacity: 0.6 }} />
      <div className="p-7">
        <div className="flex items-center justify-between mb-4">
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            fontWeight: 700,
            color: '#fbbf24',
            letterSpacing: '0.1em',
            padding: '4px 12px',
            background: 'rgba(251,191,36,0.08)',
            border: '1px solid rgba(251,191,36,0.2)',
            borderRadius: '6px',
          }}>
            {stage.date}
          </span>
          <div className="flex items-center gap-1.5" style={{ color: '#475569', fontSize: '13px', fontFamily: "'Inter', sans-serif" }}>
            <MapPin size={13} />
            {stage.place}
          </div>
        </div>

        <h4 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '1.2rem',
          fontWeight: 800,
          color: '#f1f5f9',
          marginBottom: '0.3rem',
          letterSpacing: '-0.02em',
        }}>
          {stage.title}
        </h4>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '15px',
          fontWeight: 600,
          color: '#fbbf24',
          marginBottom: '1rem',
        }}>
          {stage.org}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {stage.pills.map(p => (
            <span
              key={p}
              className="px-3 py-1 rounded-lg"
              style={{
                background: 'rgba(251,191,36,0.06)',
                border: '1px solid rgba(251,191,36,0.15)',
                color: '#d4a437',
                fontFamily: "'Inter', sans-serif",
                fontSize: '12.5px',
                fontWeight: 600,
              }}
            >
              {p}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 transition-all"
          style={{
            color: '#fbbf24',
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            fontWeight: 700,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          {open ? <><ChevronUp size={14} /> Masquer</> : <><ChevronDown size={14} /> Voir les missions</>}
        </button>

        {open && (
          <div className="mt-4 space-y-2 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {stage.items.map((it, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span style={{ color: '#fbbf24', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', fontWeight: 700, marginTop: '2px', flexShrink: 0 }}>&#9656;</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14.5px', color: '#94a3b8', lineHeight: 1.7 }}>{it}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function FormationCard({ formation }) {
  const color = formation.current ? '#22d3ee' : '#818cf8'
  return (
    <div
      className="relative rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: 'linear-gradient(145deg, rgba(11,16,32,0.85), rgba(15,20,40,0.7))',
        border: `1.5px solid ${color}15`,
        backdropFilter: 'blur(8px)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${color}40`
        e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.35), 0 0 30px ${color}08`
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = `${color}15`
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div style={{ height: '2px', background: `linear-gradient(90deg, transparent, ${color}, transparent)`, opacity: 0.6 }} />
      <div className="p-7">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              fontWeight: 700,
              color,
              letterSpacing: '0.1em',
              padding: '4px 12px',
              background: `${color}0a`,
              border: `1px solid ${color}20`,
              borderRadius: '6px',
            }}>
              {formation.date}
            </span>
            {formation.current && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full" style={{
                background: 'rgba(0,255,136,0.06)',
                border: '1px solid rgba(0,255,136,0.2)',
              }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#34d399', fontFamily: "'Inter', sans-serif" }}>En cours</span>
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5" style={{ color: '#475569', fontSize: '13px', fontFamily: "'Inter', sans-serif" }}>
            <MapPin size={13} />
            {formation.place}
          </div>
        </div>

        <h4 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '1.15rem',
          fontWeight: 800,
          color: '#f1f5f9',
          marginBottom: '0.3rem',
          letterSpacing: '-0.02em',
        }}>
          {formation.title}
        </h4>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '15px',
          fontWeight: 600,
          color,
          marginBottom: '1rem',
        }}>
          {formation.org}
        </p>

        <div className="flex flex-wrap gap-2">
          {formation.pills.map(p => (
            <span
              key={p}
              className="px-3 py-1 rounded-lg"
              style={{
                background: `${color}08`,
                border: `1px solid ${color}18`,
                color: `${color}cc`,
                fontFamily: "'Inter', sans-serif",
                fontSize: '12.5px',
                fontWeight: 600,
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Parcours() {
  return (
    <section id="parcours" className="relative" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="animate-fade-up"
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: 'clamp(2rem, 5vw, 2.8rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '1.2rem',
              background: 'linear-gradient(135deg, #f1f5f9 0%, #818cf8 50%, #22d3ee 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 8s linear infinite',
            }}
          >
            Mon Parcours
          </h2>
          <p
            className="animate-fade-up mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '17px',
              fontWeight: 500,
              color: '#94a3b8',
              lineHeight: 1.7,
              maxWidth: '560px',
            }}
          >
            Formation initiale en BTS SIO SISR à l'Institut F2I, complétée par
            deux stages en support informatique N1/N2 en entreprise.
          </p>
        </div>

        {/* ── STAGES ── */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div style={{
                width: '40px', height: '40px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '12px',
                background: 'rgba(251,191,36,0.08)',
                border: '1px solid rgba(251,191,36,0.2)',
              }}>
                <Briefcase size={20} style={{ color: '#fbbf24' }} />
              </div>
              <h3 style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                fontWeight: 800,
                color: '#fbbf24',
              }}>
                Stages
              </h3>
            </div>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(251,191,36,0.3), transparent)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stages.map(s => <StageCard key={s.org} stage={s} />)}
          </div>
        </div>

        {/* ── FORMATION ── */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div style={{
                width: '40px', height: '40px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '12px',
                background: 'rgba(34,211,238,0.08)',
                border: '1px solid rgba(34,211,238,0.2)',
              }}>
                <GraduationCap size={20} style={{ color: '#22d3ee' }} />
              </div>
              <h3 style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                fontWeight: 800,
                color: '#22d3ee',
              }}>
                Formation
              </h3>
            </div>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(34,211,238,0.3), transparent)' }} />
          </div>

          <div className="space-y-5">
            {formations.map(f => <FormationCard key={f.title} formation={f} />)}
          </div>
        </div>

        {/* ── LANGUES ── */}
        <div className="animate-fade-up" style={{ marginTop: '6rem' }}>
          <div className="text-center mb-14">
            <h3
              style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #818cf8 0%, #22d3ee 50%, #00ff88 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradient-shift 6s linear infinite',
                marginBottom: '1rem',
              }}
            >
              Mes Langues
            </h3>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              color: '#64748b',
              maxWidth: '450px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}>
              Bilingue, je communique aussi bien en anglais qu'en français dans un contexte professionnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                flagUrl: 'https://flagcdn.com/w160/gb.png',
                lang: 'Anglais',
                level: 'Bilingue',
                percent: 90,
                color: '#22d3ee',
                desc: 'Maîtrise complète à l\'oral et à l\'écrit. Communication fluide en contexte professionnel et technique.',
              },
              {
                flagUrl: 'https://flagcdn.com/w160/fr.png',
                lang: 'Français',
                level: 'Courant — C1',
                percent: 80,
                color: '#818cf8',
                desc: 'Niveau avancé, usage quotidien en formation et en milieu professionnel.',
              },
            ].map(({ flagUrl, lang, level, percent, color, desc }) => (
              <div
                key={lang}
                className="relative rounded-3xl overflow-hidden transition-all duration-500"
                style={{
                  background: 'linear-gradient(145deg, rgba(11,16,32,0.8), rgba(15,20,40,0.65))',
                  border: `1.5px solid ${color}20`,
                  padding: '2.5rem 2rem',
                  backdropFilter: 'blur(12px)',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                  e.currentTarget.style.borderColor = `${color}60`
                  e.currentTarget.style.boxShadow = `0 24px 60px rgba(0,0,0,0.4), 0 0 40px ${color}15`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.borderColor = `${color}20`
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '2px', background: `linear-gradient(90deg, transparent, ${color}, transparent)`, opacity: 0.5 }} />
                <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '200px', background: `radial-gradient(circle, ${color}08, transparent)`, pointerEvents: 'none' }} />

                <div className="flex justify-center mb-6">
                  <div style={{
                    borderRadius: '50%',
                    overflow: 'hidden',
                    width: '80px',
                    height: '80px',
                    border: `3px solid ${color}40`,
                    boxShadow: `0 0 30px ${color}15, 0 8px 24px rgba(0,0,0,0.3)`,
                  }}>
                    <img src={flagUrl} alt={lang} width="80" height="80" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                </div>

                <h4 style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.3rem', fontWeight: 800, color: '#f1f5f9', textAlign: 'center', marginBottom: '0.4rem' }}>
                  {lang}
                </h4>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', fontWeight: 700, color, textAlign: 'center', letterSpacing: '0.1em', marginBottom: '1.2rem', textShadow: `0 0 10px ${color}30` }}>
                  {level}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#94a3b8', textAlign: 'center', lineHeight: 1.7, marginBottom: '1.8rem' }}>
                  {desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ flex: 1, height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '99px', overflow: 'hidden' }}>
                    <div style={{ width: `${percent}%`, height: '100%', background: `linear-gradient(90deg, ${color}80, ${color})`, borderRadius: '99px', boxShadow: `0 0 14px ${color}40` }} />
                  </div>
                  <span style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '15px', fontWeight: 800, color, minWidth: '42px', textAlign: 'right' }}>
                    {percent}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
