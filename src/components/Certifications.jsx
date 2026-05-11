import { ExternalLink, Award, CheckCircle } from 'lucide-react'

const certifications = [
  {
    title: 'SecNumacadémie',
    org: 'ANSSI — Agence Nationale de la Sécurité des SI',
    date: 'Janvier 2026',
    logo: '/logos/anssi.svg',
    score: '88% — 94%',
    modules: '4 modules validés',
    details: ['Panorama de la SSI', 'Authentification', 'Sécurité sur Internet', 'Sécurité du poste de travail'],
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #0c1929 0%, #1e3a5f 40%, #1e40af 100%)',
    attestation: '/attestation-secnumacademie.pdf',
  },
  {
    title: 'Introduction to Cybersecurity',
    org: 'Cisco Networking Academy',
    date: '2026',
    logo: '/logos/cisco.svg',
    score: null,
    modules: 'Certification cybersécurité Cisco',
    details: ['Fondamentaux cybersécurité', 'Menaces & vulnérabilités', 'Protection des données', 'Sécurité des réseaux'],
    color: '#049FD9',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #0d2744 40%, #003748 100%)',
    attestation: '/certif-cisco-cybersecurity.pdf',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative dots-bg" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center animate-fade-up" style={{ marginBottom: '6rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px', fontWeight: 700,
              letterSpacing: '0.2em', color: '#06b6d4',
              textTransform: 'uppercase',
              padding: '6px 18px',
              background: 'rgba(6,182,212,0.08)',
              border: '1px solid rgba(6,182,212,0.2)',
              borderRadius: '99px',
            }}>
              Validées & certifiées
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #06b6d4 40%, #8b5cf6 70%, #f472b6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Mes Certifications
          </h2>
          <div style={{
            width: '80px', height: '3px', margin: '0 auto 1.2rem',
            background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #f472b6)',
            borderRadius: '99px',
          }} />
          <p className="mx-auto" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px', fontWeight: 500, color: '#94a3b8',
            lineHeight: 1.7, maxWidth: '480px',
          }}>
            Certifications obtenues en cybersécurité avec attestations téléchargeables
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="card-holo rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: 'rgba(11,16,32,0.75)',
                border: `1px solid ${cert.color}20`,
                boxShadow: `0 4px 24px rgba(0,0,0,0.3)`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = `${cert.color}50`
                e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.4), 0 0 30px ${cert.color}15`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = `${cert.color}20`
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)'
              }}
            >
              {/* Banner */}
              <div style={{
                background: cert.gradient,
                padding: '3.5rem 2.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Decorative circles */}
                <div style={{
                  position: 'absolute', top: '-30px', right: '-30px',
                  width: '120px', height: '120px', borderRadius: '50%',
                  background: `${cert.color}10`, border: `1px solid ${cert.color}15`,
                }} />
                <div style={{
                  position: 'absolute', bottom: '-20px', left: '-20px',
                  width: '80px', height: '80px', borderRadius: '50%',
                  background: `${cert.color}08`,
                }} />

                <div className="relative flex flex-col items-center text-center">
                  {/* Logo badge */}
                  <div style={{
                    width: '100px', height: '100px', borderRadius: '24px',
                    background: 'rgba(255,255,255,0.95)',
                    border: `2px solid ${cert.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.8rem',
                    overflow: 'hidden',
                    boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 20px ${cert.color}25`,
                  }}>
                    <img
                      src={cert.logo}
                      alt={cert.title}
                      style={{ width: '72px', height: '72px', objectFit: 'contain' }}
                    />
                  </div>

                  <h3 style={{
                    fontFamily: "'Orbitron', system-ui, sans-serif",
                    fontSize: '1.4rem', fontWeight: 800, color: '#ffffff',
                    marginBottom: '0.8rem',
                    letterSpacing: '0.02em',
                  }}>
                    {cert.title}
                  </h3>
                  <p style={{
                    fontSize: '15px', fontWeight: 600, color: cert.color,
                    maxWidth: '300px',
                    lineHeight: 1.5,
                  }}>
                    {cert.org}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '2.5rem 2.5rem 2.5rem' }}>
                {/* Date + status badges */}
                <div className="flex items-center justify-between flex-wrap gap-3" style={{ marginBottom: '2rem' }}>
                  <span style={{
                    fontSize: '14px', fontWeight: 700, color: cert.color,
                    background: `${cert.color}10`, border: `1px solid ${cert.color}25`,
                    padding: '6px 16px', borderRadius: '10px',
                  }}>
                    {cert.date}
                  </span>
                  <div className="flex items-center gap-2">
                    {cert.score && (
                      <span style={{
                        fontSize: '14px', fontWeight: 700, color: '#f59e0b',
                        background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
                        padding: '6px 16px', borderRadius: '10px',
                      }}>
                        <Award size={14} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '6px' }} />
                        {cert.score}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5" style={{
                      fontSize: '14px', fontWeight: 600, color: '#10b981',
                      background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)',
                      padding: '6px 16px', borderRadius: '10px',
                    }}>
                      <CheckCircle size={14} />
                      Validée
                    </span>
                  </div>
                </div>

                <p style={{
                  fontSize: '16px', fontWeight: 600, color: '#94a3b8',
                  marginBottom: '1.5rem',
                }}>
                  {cert.modules}
                </p>

                {/* Module details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '2rem' }}>
                  {cert.details.map((d, j) => (
                    <div key={j} className="flex items-center gap-4" style={{
                      padding: '12px 16px', borderRadius: '12px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <div style={{
                        width: '28px', height: '28px', borderRadius: '8px',
                        background: `${cert.color}12`,
                        border: `1px solid ${cert.color}20`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <span style={{ fontSize: '13px', fontWeight: 800, color: cert.color }}>
                          {j + 1}
                        </span>
                      </div>
                      <span style={{ fontSize: '15px', fontWeight: 500, color: '#cbd5e1' }}>{d}</span>
                    </div>
                  ))}
                </div>

                {/* Attestation button */}
                <a
                  href={cert.attestation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl transition-all duration-200"
                  style={{
                    background: cert.color, color: '#ffffff',
                    fontSize: '16px', fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: `0 4px 16px ${cert.color}30`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <ExternalLink size={18} />
                  Voir l'attestation
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
