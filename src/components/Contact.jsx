import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight, MapPin, Heart } from 'lucide-react'

const contactCards = [
  {
    label: 'Email',
    value: 'lenguedilan@gmail.com',
    href: 'mailto:lenguedilan@gmail.com',
    color: '#06b6d4',
    svg: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: 'Téléphone',
    value: '+33 7 44 20 38 70',
    href: 'tel:+33744203870',
    color: '#10b981',
    svg: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Dilan Lengue',
    href: 'https://www.linkedin.com/in/dilan-lengue',
    color: '#0A66C2',
    external: true,
    svg: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'dilan-lengue',
    href: 'https://github.com/dilan-lengue',
    color: '#8b5cf6',
    external: true,
    svg: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
]

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', company: '' })
  const [status, setStatus] = useState({ state: 'idle', error: null })

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const buildMailto = () =>
    `mailto:lenguedilan@gmail.com?subject=${encodeURIComponent(`[Portfolio] ${form.subject || 'Contact'}`)}&body=${encodeURIComponent(
      `De : ${form.name} <${form.email}>\n\n${form.message}`,
    )}`

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status.state === 'loading') return
    setStatus({ state: 'loading', error: null })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus({ state: 'success', error: null })
        setForm({ name: '', email: '', subject: '', message: '', company: '' })
        return
      }
      const data = await res.json().catch(() => ({}))
      if (res.status === 503 && data.fallback === 'mailto') {
        window.location.href = buildMailto()
        setStatus({ state: 'idle', error: null })
        return
      }
      setStatus({ state: 'error', error: data.error || `Erreur ${res.status}` })
    } catch {
      window.location.href = buildMailto()
      setStatus({ state: 'idle', error: null })
    }
  }

  const inputStyle = {
    width: '100%',
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
    padding: '12px 14px',
    color: '#1e293b',
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    transition: 'all 0.2s',
    outline: 'none',
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem 2.5rem 2.5rem' }}>
      {/* Honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.company}
        onChange={update('company')}
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="cf-name" style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
            Nom
          </label>
          <input
            id="cf-name" type="text" required maxLength={100}
            value={form.name} onChange={update('name')}
            placeholder="Jean Dupont" style={inputStyle}
            onFocus={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.08)' }}
            onBlur={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none' }}
          />
        </div>
        <div>
          <label htmlFor="cf-email" style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
            Email
          </label>
          <input
            id="cf-email" type="email" required maxLength={200}
            value={form.email} onChange={update('email')}
            placeholder="contact@entreprise.fr" style={inputStyle}
            onFocus={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.08)' }}
            onBlur={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none' }}
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="cf-subject" style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
          Sujet
        </label>
        <input
          id="cf-subject" type="text" required maxLength={150}
          value={form.subject} onChange={update('subject')}
          placeholder="Opportunité d'alternance — Septembre 2026" style={inputStyle}
          onFocus={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.08)' }}
          onBlur={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none' }}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="cf-message" style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
          Message
        </label>
        <textarea
          id="cf-message" required maxLength={4000} rows={5}
          value={form.message} onChange={update('message')}
          placeholder="Bonjour Dilan, nous avons une opportunité…"
          style={{ ...inputStyle, resize: 'vertical', minHeight: '120px', lineHeight: 1.7 }}
          onFocus={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.08)' }}
          onBlur={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none' }}
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <button
          type="submit"
          disabled={status.state === 'loading'}
          className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl transition-all duration-200"
          style={{
            background: status.state === 'loading' ? '#a5b4fc' : '#6366f1',
            color: '#fff',
            border: 'none',
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            fontWeight: 700,
            cursor: status.state === 'loading' ? 'wait' : 'pointer',
            minWidth: '180px',
          }}
          onMouseEnter={e => { if (status.state !== 'loading') e.currentTarget.style.opacity = '0.9' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
        >
          {status.state === 'loading' ? (
            <><Loader2 size={16} className="animate-spin" /> Envoi…</>
          ) : (
            <><Send size={16} /> Envoyer le message</>
          )}
        </button>

        {status.state === 'success' && (
          <div className="flex items-center gap-2" style={{ color: '#10b981', fontSize: '14px', fontWeight: 600 }}>
            <CheckCircle2 size={16} /> Message envoyé !
          </div>
        )}
        {status.state === 'error' && (
          <div className="flex items-center gap-2" style={{ color: '#ef4444', fontSize: '13px' }}>
            <AlertCircle size={16} /> {status.error || "Erreur — utilisez l'email direct."}
          </div>
        )}
      </div>
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="text-center animate-fade-up" style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '1.2rem' }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px', fontWeight: 700,
              letterSpacing: '0.2em', color: '#8b5cf6',
              textTransform: 'uppercase',
              padding: '6px 18px',
              background: 'rgba(139,92,246,0.08)',
              border: '1px solid rgba(139,92,246,0.2)',
              borderRadius: '99px',
            }}>
              Disponible — Alternance sept. 2026
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #8b5cf6 40%, #06b6d4 70%, #10b981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Me Contacter
          </h2>
          <div style={{
            width: '80px', height: '3px', margin: '0 auto 1.2rem',
            background: 'linear-gradient(90deg, #8b5cf6, #06b6d4, #10b981)',
            borderRadius: '99px',
          }} />
          <p className="mx-auto" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px', fontWeight: 500, color: '#94a3b8',
            lineHeight: 1.7, maxWidth: '500px',
          }}>
            Une question, un projet ou une opportunité d'alternance ? N'hésitez pas à me contacter via le canal de votre choix.
          </p>
        </div>

        {/* ── Contact cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: '2.5rem' }}>
          {contactCards.map((c, i) => {
            const Tag = c.href ? 'a' : 'div'
            const linkProps = c.href ? {
              href: c.href,
              target: c.external ? '_blank' : undefined,
              rel: c.external ? 'noopener noreferrer' : undefined,
            } : {}
            return (
              <Tag
                key={i}
                {...linkProps}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  textDecoration: 'none',
                  cursor: c.href ? 'pointer' : 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${c.color}50`
                  e.currentTarget.style.background = `${c.color}08`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e2e8f0'
                  e.currentTarget.style.background = '#f8fafc'
                }}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: `${c.color}12`, border: `1px solid ${c.color}25`,
                    color: c.color,
                  }}
                >
                  {c.svg}
                </div>
                <div className="flex-1 min-w-0">
                  <p style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>
                    {c.label}
                  </p>
                  <p className="truncate" style={{ fontSize: '14px', color: '#1e293b', fontWeight: 600 }}>
                    {c.value}
                  </p>
                </div>
                {c.external && <ArrowUpRight size={14} style={{ color: '#94a3b8', flexShrink: 0 }} />}
              </Tag>
            )
          })}
        </div>

        {/* ── Formulaire (white card with gradient banner) ── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: '#ffffff',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}
        >
          {/* Bannière gradient */}
          <div style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #3730a3 100%)',
            padding: '2rem 2.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: '-30px', right: '-30px',
              width: '120px', height: '120px', borderRadius: '50%',
              background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.2)',
            }} />
            <div style={{
              position: 'absolute', bottom: '-20px', left: '-20px',
              width: '80px', height: '80px', borderRadius: '50%',
              background: 'rgba(139,92,246,0.1)',
            }} />
            <div className="relative flex items-center gap-4">
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: 'rgba(99,102,241,0.2)', border: '2px solid rgba(99,102,241,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Send size={24} style={{ color: '#a5b4fc' }} />
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Orbitron', system-ui, sans-serif",
                  fontSize: '1.3rem', fontWeight: 800, color: '#ffffff',
                  marginBottom: '4px',
                }}>
                  Envoyer un message
                </h3>
                <p style={{ fontSize: '13px', fontWeight: 500, color: '#a5b4fc' }}>
                  Réponse sous 24-48h ouvrées
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>

        {/* ── Localisation ── */}
        <div className="flex items-center justify-center gap-2 mt-6 mb-12" style={{
          fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#64748b',
        }}>
          <MapPin size={14} style={{ color: '#8b5cf6' }} />
          Île-de-France, France
        </div>

        {/* ── Message de fin ── */}
        <div
          className="rounded-2xl overflow-hidden text-center"
          style={{
            background: '#ffffff',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}
        >
          <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4, #10b981)' }} />
          <div style={{ padding: '3rem 2.5rem' }}>
            <p style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
              fontWeight: 800,
              color: '#1e293b',
              marginBottom: '0.8rem',
            }}>
              Merci d'avoir visité mon portfolio
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '15px', color: '#64748b',
              lineHeight: 1.8, maxWidth: '520px',
              margin: '0 auto 1.2rem',
            }}>
              Passionné par l'administration systèmes & réseaux et la cybersécurité,
              je suis à la recherche d'une alternance pour septembre 2026.
              Si mon profil vous intéresse, n'hésitez pas à me contacter.
            </p>
            <div className="flex items-center justify-center gap-1.5" style={{
              fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#94a3b8',
            }}>
              Conçu avec <Heart size={13} style={{ color: '#ef4444', fill: '#ef4444' }} /> par Dilan Lengue
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
