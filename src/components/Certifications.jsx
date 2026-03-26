import { useState } from 'react'
import { ChevronDown, ExternalLink, CheckCircle2, Shield, GraduationCap, Wifi, Lock, Server, BookOpen } from 'lucide-react'

const obtenues = [
  {
    title: 'SecNumacadémie — ANSSI',
    icon: Shield,
    org: 'Agence Nationale de la Sécurité des SI',
    date: 'Janvier 2026',
    modules: '4 modules validés — 88% à 94%',
    detail: 'Panorama SSI · Authentification · Internet · Poste de travail',
    color: '#22d3ee',
    url: '/attestation-secnumacademie.pdf',
  },
  {
    title: 'EBIOS Risk Manager',
    icon: Shield,
    org: 'ANSSI / Méthode nationale',
    date: '2026',
    modules: 'Gestion des risques cybersécurité',
    detail: 'Analyse de risques · Scénarios de menaces · Mesures de sécurité · Cartographie',
    color: '#f87171',
    url: null,
  },
  {
    title: 'Product & Systems Engineering',
    icon: GraduationCap,
    org: 'Udemy',
    date: '2025',
    modules: 'Certification en ligne',
    detail: 'Ingénierie produit · Conception systèmes · Méthodologies',
    color: '#a78bfa',
    url: null,
  },
  {
    title: 'Entrepreneurship',
    icon: GraduationCap,
    org: 'Coursera',
    date: '2025',
    modules: 'Certification en ligne',
    detail: 'Création d\'entreprise · Business model · Stratégie digitale',
    color: '#34d399',
    url: null,
  },
]

const enCours = [
  {
    title: 'BTS SIO — Option SISR',
    icon: GraduationCap,
    org: 'Institut F2I, Vincennes',
    date: 'Juin 2026',
    modules: 'Diplôme d\'État Niveau 5 (Bac+2)',
    detail: 'Systèmes · Réseaux · Cybersécurité · Supervision',
    color: '#818cf8',
    url: null,
  },
  {
    title: 'CompTIA Network+',
    icon: Wifi,
    org: 'CompTIA',
    date: 'En préparation',
    modules: 'Certification réseaux internationale',
    detail: 'Protocoles · Infrastructure · Sécurité réseau · Dépannage',
    color: '#f87171',
    url: null,
  },
  {
    title: 'CompTIA Security+',
    icon: Lock,
    org: 'CompTIA',
    date: 'En préparation',
    modules: 'Certification cybersécurité internationale',
    detail: 'Menaces · Cryptographie · Gestion des risques · IAM',
    color: '#fbbf24',
    url: null,
  },
  {
    title: 'Cisco CCNA — Introduction aux réseaux',
    icon: Server,
    org: 'Cisco Networking Academy',
    date: 'En cours',
    modules: 'Certification réseaux Cisco',
    detail: 'IOS · Routage · Commutation · Adressage IP',
    color: '#34d399',
    url: null,
  },
  {
    title: 'ITIL Foundation v4',
    icon: BookOpen,
    org: 'Axelos',
    date: 'En préparation',
    modules: 'Gestion des services informatiques',
    detail: 'ITSM · Change Management · Service Design · SLA',
    color: '#a78bfa',
    url: null,
  },
]

function CertCard({ cert, obtained }) {
  return (
    <div
      className="rounded-2xl p-7 transition-all duration-200"
      style={{
        background: 'rgba(10,15,30,0.9)',
        border: `1px solid ${cert.color}25`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${cert.color}50`
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.3), 0 0 20px ${cert.color}12`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = `${cert.color}25`
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Top bar */}
      <div style={{ height: '2px', background: cert.color, borderRadius: '999px', marginBottom: '1.25rem', opacity: 0.7 }} />

      <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center gap-3">
          {cert.icon && (
            <div
              className="flex items-center justify-center rounded-xl flex-shrink-0"
              style={{ width: '40px', height: '40px', background: `${cert.color}12`, border: `1px solid ${cert.color}30` }}
            >
              <cert.icon size={20} style={{ color: cert.color }} />
            </div>
          )}
          <h3
            className="font-bold"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: '#f1f5f9', letterSpacing: '-0.03em', lineHeight: 1.2 }}
          >
            {cert.title}
          </h3>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {obtained ? (
            <span
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold"
              style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)', color: '#34d399' }}
            >
              <CheckCircle2 size={13} /> Validée
            </span>
          ) : (
            <span
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold"
              style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.25)', color: '#fbbf24' }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#fbbf24' }} />
              En cours
            </span>
          )}
        </div>
      </div>

      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: cert.color, fontWeight: 600, marginBottom: '0.5rem' }}>
        {cert.org} · {cert.date}
      </p>

      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#94a3b8', marginBottom: '0.75rem', fontWeight: 600 }}>
        {cert.modules}
      </p>

      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#64748b', lineHeight: 1.65 }}>
        {cert.detail}
      </p>

      {cert.url && (
        <a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 text-sm font-bold transition-colors"
          style={{ color: '#818cf8' }}
          onMouseEnter={e => e.currentTarget.style.color = '#a5b4fc'}
          onMouseLeave={e => e.currentTarget.style.color = '#818cf8'}
        >
          <ExternalLink size={13} /> Voir l'attestation ↗
        </a>
      )}
    </div>
  )
}

export default function Certifications() {
  const [view, setView] = useState(null) // null | 'obtenues' | 'en-cours'

  // Sagar's exact colors
  const greenColor = '#10b981'   // emerald for Obtenues
  const amberColor = '#f59e0b'   // amber for En cours

  return (
    <section id="certifications" className="relative" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header — exact Sagar style */}
        <div className="text-center" style={{ marginBottom: '28px' }}>
          <h2
            className="animate-fade-up"
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: '#e6ecf8',
              textTransform: 'none',
            }}
          >
            Certifications
          </h2>
          <p
            className="animate-fade-up mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 400,
              color: '#c5d3e8',
              lineHeight: 1.75,
              maxWidth: '580px',
              marginTop: '0.6rem',
            }}
          >
            Cybersécurité & réseaux — gratuites et accessibles
          </p>
          <div
            style={{
              width: '128px',
              height: '2px',
              margin: '16px auto 0',
              background: 'linear-gradient(90deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.45) 24%, rgba(212,175,55,0.85) 50%, rgba(147,51,234,0.55) 76%, rgba(56,189,248,0) 100%)',
            }}
          />
        </div>

        {/* Deux grandes cartes de sélection — Sagar exact */}
        <div className="grid sm:grid-cols-2 gap-4 mb-4">

          {/* Obtenues — emerald green */}
          <button
            className="group animate-fade-up text-left relative overflow-hidden transition-all duration-300"
            style={{
              background: view === 'obtenues' ? `rgba(16,185,129,0.06)` : 'transparent',
              border: view === 'obtenues' ? `2px solid rgba(16,185,129,0.4)` : `1px solid rgba(16,185,129,0.19)`,
              borderRadius: '16px',
              padding: '32px 24px',
              cursor: 'pointer',
            }}
            onClick={() => setView(view === 'obtenues' ? null : 'obtenues')}
            onMouseEnter={e => {
              if (view !== 'obtenues') {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.25)'
                e.currentTarget.style.borderColor = 'rgba(16,185,129,0.35)'
              }
            }}
            onMouseLeave={e => {
              if (view !== 'obtenues') {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'rgba(16,185,129,0.19)'
              }
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0"
              style={{ height: '2px', opacity: 0.6, background: greenColor }}
            />

            <div className="flex items-center gap-4">
              {/* Emoji */}
              <span style={{ fontSize: '28px', lineHeight: 1, flexShrink: 0 }}>✅</span>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3
                  style={{
                    fontFamily: "'Orbitron', system-ui, sans-serif",
                    fontSize: '18px',
                    fontWeight: 800,
                    color: greenColor,
                    letterSpacing: '-0.025em',
                    lineHeight: 1.2,
                    marginBottom: '2px',
                  }}
                >
                  Obtenues
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    fontWeight: 400,
                    color: '#c5d3e8',
                  }}
                >
                  Certifications validées
                </p>
              </div>

              {/* Count badge */}
              <span
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '9999px',
                  background: 'rgba(16,185,129,0.08)',
                  border: '1px solid rgba(16,185,129,0.19)',
                  color: greenColor,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: 700,
                }}
              >
                {obtenues.length}
              </span>
            </div>
          </button>

          {/* En cours — amber */}
          <button
            className="group animate-fade-up text-left relative overflow-hidden transition-all duration-300"
            style={{
              background: view === 'en-cours' ? `rgba(245,158,11,0.06)` : 'transparent',
              border: view === 'en-cours' ? `2px solid rgba(245,158,11,0.4)` : `1px solid rgba(245,158,11,0.19)`,
              borderRadius: '16px',
              padding: '32px 24px',
              cursor: 'pointer',
            }}
            onClick={() => setView(view === 'en-cours' ? null : 'en-cours')}
            onMouseEnter={e => {
              if (view !== 'en-cours') {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.25)'
                e.currentTarget.style.borderColor = 'rgba(245,158,11,0.35)'
              }
            }}
            onMouseLeave={e => {
              if (view !== 'en-cours') {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'rgba(245,158,11,0.19)'
              }
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0"
              style={{ height: '2px', opacity: 0.6, background: amberColor }}
            />

            <div className="flex items-center gap-4">
              {/* Emoji */}
              <span style={{ fontSize: '28px', lineHeight: 1, flexShrink: 0 }}>🚀</span>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3
                  style={{
                    fontFamily: "'Orbitron', system-ui, sans-serif",
                    fontSize: '18px',
                    fontWeight: 800,
                    color: amberColor,
                    letterSpacing: '-0.025em',
                    lineHeight: 1.2,
                    marginBottom: '2px',
                  }}
                >
                  En cours
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    fontWeight: 400,
                    color: '#c5d3e8',
                  }}
                >
                  En préparation ou à passer
                </p>
              </div>

              {/* Count badge */}
              <span
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '9999px',
                  background: 'rgba(245,158,11,0.08)',
                  border: '1px solid rgba(245,158,11,0.19)',
                  color: amberColor,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: 700,
                }}
              >
                {enCours.length}
              </span>
            </div>
          </button>
        </div>

        {/* Hint — exact Sagar style */}
        {!view && (
          <div className="text-center mt-4 mb-4">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '11.5px',
                fontWeight: 400,
                color: '#c5d3e8',
              }}
            >
              Cliquer sur une carte pour voir les détails
            </p>
            <div className="flex flex-col items-center gap-1 mt-5">
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '11px',
                  fontWeight: 400,
                  color: 'rgba(148,163,184,0.7)',
                }}
              >
                Faites défiler pour découvrir
              </p>
              <ChevronDown size={16} style={{ color: 'rgba(148,163,184,0.7)' }} />
            </div>
          </div>
        )}

        {/* Grille Obtenues */}
        {view === 'obtenues' && (
          <div className="grid sm:grid-cols-1 gap-5 mt-2">
            {obtenues.map((cert, i) => (
              <CertCard key={i} cert={cert} obtained />
            ))}
          </div>
        )}

        {/* Grille En cours */}
        {view === 'en-cours' && (
          <div className="grid sm:grid-cols-2 gap-5 mt-2">
            {enCours.map((cert, i) => (
              <CertCard key={i} cert={cert} obtained={false} />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
