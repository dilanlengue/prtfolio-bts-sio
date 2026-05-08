import { Shield, ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: 'SecNumacadémie',
    org: 'ANSSI — Agence Nationale de la Sécurité des SI',
    date: 'Janvier 2026',
    modules: '4 modules validés — 88% à 94%',
    details: ['Panorama de la SSI', 'Authentification', 'Sécurité sur Internet', 'Sécurité du poste de travail'],
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #0e2a3d 0%, #0c4a6e 40%, #155e75 100%)',
    attestation: '/attestation-secnumacademie.pdf',
  },
  {
    title: 'Introduction to Cybersecurity',
    org: 'Cisco Networking Academy',
    date: '2026',
    modules: 'Certification cybersécurité Cisco',
    details: ['Fondamentaux cybersécurité', 'Menaces & vulnérabilités', 'Protection des données', 'Sécurité des réseaux'],
    color: '#049FD9',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
    attestation: '/certif-cisco-cybersecurity.pdf',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center animate-fade-up" style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '1.2rem' }}>
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
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: '#ffffff',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)'
              }}
            >
              {/* Bannière visuelle */}
              <div style={{
                background: cert.gradient,
                padding: '2.5rem 2rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Déco cercles */}
                <div style={{
                  position: 'absolute', top: '-30px', right: '-30px',
                  width: '120px', height: '120px', borderRadius: '50%',
                  background: `${cert.color}15`, border: `1px solid ${cert.color}20`,
                }} />
                <div style={{
                  position: 'absolute', bottom: '-20px', left: '-20px',
                  width: '80px', height: '80px', borderRadius: '50%',
                  background: `${cert.color}10`,
                }} />

                <div className="relative flex flex-col items-center text-center">
                  <div style={{
                    width: '60px', height: '60px', borderRadius: '16px',
                    background: `${cert.color}20`, border: `2px solid ${cert.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1rem',
                  }}>
                    <Shield size={28} style={{ color: cert.color }} />
                  </div>
                  <h3 style={{
                    fontFamily: "'Orbitron', system-ui, sans-serif",
                    fontSize: '1.3rem', fontWeight: 800, color: '#ffffff',
                    marginBottom: '0.4rem',
                  }}>
                    {cert.title}
                  </h3>
                  <p style={{
                    fontSize: '13px', fontWeight: 600, color: cert.color,
                  }}>
                    {cert.org}
                  </p>
                </div>
              </div>

              {/* Contenu */}
              <div style={{ padding: '1.8rem 2rem 2rem' }}>
                {/* Date + modules */}
                <div className="flex items-center justify-between flex-wrap gap-2" style={{ marginBottom: '1.2rem' }}>
                  <span style={{
                    fontSize: '12px', fontWeight: 700, color: cert.color,
                    background: `${cert.color}10`, border: `1px solid ${cert.color}25`,
                    padding: '4px 12px', borderRadius: '8px',
                  }}>
                    {cert.date}
                  </span>
                  <span style={{
                    fontSize: '12px', fontWeight: 600, color: '#10b981',
                    background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)',
                    padding: '4px 12px', borderRadius: '8px',
                  }}>
                    Validée
                  </span>
                </div>

                <p style={{
                  fontSize: '14px', fontWeight: 600, color: '#475569',
                  marginBottom: '1rem',
                }}>
                  {cert.modules}
                </p>

                {/* Modules détails */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '1.5rem' }}>
                  {cert.details.map((d, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: cert.color, flexShrink: 0,
                      }} />
                      <span style={{ fontSize: '13px', color: '#64748b' }}>{d}</span>
                    </div>
                  ))}
                </div>

                {/* Bouton attestation */}
                <a
                  href={cert.attestation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl transition-all duration-200"
                  style={{
                    background: cert.color, color: '#ffffff',
                    fontSize: '14px', fontWeight: 700,
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <ExternalLink size={16} />
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
