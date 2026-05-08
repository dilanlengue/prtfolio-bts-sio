import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight, Heart, Sparkles } from 'lucide-react'

const LinkedInLogo = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="#0A66C2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GitHubLogo = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="#ffffff">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const DiscordLogo = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="#5865F2">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
  </svg>
)

const PhoneLogo = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

const EmailLogo = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
  </svg>
)

const contactCards = [
  {
    Logo: EmailLogo,
    label: 'Email',
    value: 'lenguedilan@gmail.com',
    href: 'mailto:lenguedilan@gmail.com',
    color: '#06b6d4',
    bgColor: 'rgba(6,182,212,0.08)',
    borderColor: 'rgba(6,182,212,0.2)',
  },
  {
    Logo: PhoneLogo,
    label: 'Téléphone',
    value: '+33 7 44 20 38 70',
    href: 'tel:+33744203870',
    color: '#10b981',
    bgColor: 'rgba(16,185,129,0.08)',
    borderColor: 'rgba(16,185,129,0.2)',
  },
  {
    Logo: LinkedInLogo,
    label: 'LinkedIn',
    value: 'Dilan Lengue',
    href: 'https://www.linkedin.com/in/dilan-lengue',
    color: '#0A66C2',
    bgColor: 'rgba(10,102,194,0.08)',
    borderColor: 'rgba(10,102,194,0.2)',
    external: true,
  },
  {
    Logo: GitHubLogo,
    label: 'GitHub',
    value: 'dilan-lengue',
    href: 'https://github.com/dilan-lengue',
    color: '#8b5cf6',
    bgColor: 'rgba(139,92,246,0.08)',
    borderColor: 'rgba(139,92,246,0.2)',
    external: true,
  },
  {
    Logo: DiscordLogo,
    label: 'Discord',
    value: 'dilanlengue',
    href: 'https://discord.com',
    color: '#5865F2',
    bgColor: 'rgba(88,101,242,0.08)',
    borderColor: 'rgba(88,101,242,0.2)',
    external: true,
  },
]

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', company: '' })
  const [status, setStatus] = useState({ state: 'idle', error: null })
  const [focusedField, setFocusedField] = useState(null)

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

  const fieldStyle = (name) => ({
    width: '100%',
    background: focusedField === name ? '#ffffff' : '#f8fafc',
    border: `2px solid ${focusedField === name ? '#6366f1' : '#e2e8f0'}`,
    borderRadius: '12px',
    padding: '14px 16px',
    color: '#1e293b',
    fontFamily: "'Inter', sans-serif",
    fontSize: '15px',
    transition: 'all 0.25s ease',
    outline: 'none',
    boxShadow: focusedField === name ? '0 0 0 4px rgba(99,102,241,0.1)' : 'none',
  })

  const labelStyle = {
    display: 'block',
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    fontWeight: 600,
    color: '#374151',
    marginBottom: '8px',
  }

  return (
    <div className="bg-white rounded-3xl overflow-hidden" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid #e5e7eb' }}>
      <div className="h-2" style={{ background: 'linear-gradient(90deg, #6366f1, #06b6d4, #10b981)' }} />
      <form onSubmit={handleSubmit} className="p-8 sm:p-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
            <Send size={20} style={{ color: '#fff' }} />
          </div>
          <div>
            <h3 style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.2rem', fontWeight: 800, color: '#111827' }}>
              Envoyer un message
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#6b7280', marginTop: '2px' }}>
              Réponse garantie sous 24-48h
            </p>
          </div>
        </div>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label htmlFor="cf-name" style={labelStyle}>Nom complet</label>
            <input
              id="cf-name"
              type="text"
              required
              maxLength={100}
              value={form.name}
              onChange={update('name')}
              placeholder="Jean Dupont"
              style={fieldStyle('name')}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
            />
          </div>
          <div>
            <label htmlFor="cf-email" style={labelStyle}>Adresse email</label>
            <input
              id="cf-email"
              type="email"
              required
              maxLength={200}
              value={form.email}
              onChange={update('email')}
              placeholder="contact@entreprise.fr"
              style={fieldStyle('email')}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
            />
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="cf-subject" style={labelStyle}>Sujet</label>
          <input
            id="cf-subject"
            type="text"
            required
            maxLength={150}
            value={form.subject}
            onChange={update('subject')}
            placeholder="Opportunité d'alternance — Septembre 2026"
            style={fieldStyle('subject')}
            onFocus={() => setFocusedField('subject')}
            onBlur={() => setFocusedField(null)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="cf-message" style={labelStyle}>Votre message</label>
          <textarea
            id="cf-message"
            required
            maxLength={4000}
            rows={5}
            value={form.message}
            onChange={update('message')}
            placeholder="Bonjour Dilan, nous avons une opportunité…"
            style={{ ...fieldStyle('message'), resize: 'vertical', minHeight: '130px', lineHeight: 1.7 }}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <button
            type="submit"
            disabled={status.state === 'loading'}
            className="flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold transition-all duration-300"
            style={{
              background: status.state === 'loading' ? '#a5b4fc' : 'linear-gradient(135deg, #6366f1, #4f46e5)',
              color: '#fff',
              border: 'none',
              fontFamily: "'Inter', sans-serif",
              fontSize: '15px',
              letterSpacing: '0.02em',
              boxShadow: '0 6px 24px rgba(99,102,241,0.3)',
              cursor: status.state === 'loading' ? 'wait' : 'pointer',
              minWidth: '200px',
            }}
            onMouseEnter={e => {
              if (status.state !== 'loading') {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(99,102,241,0.45)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(99,102,241,0.3)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {status.state === 'loading' ? (
              <><Loader2 size={17} className="animate-spin" /> Envoi en cours…</>
            ) : (
              <><Send size={17} /> Envoyer le message</>
            )}
          </button>

          {status.state === 'success' && (
            <div className="flex items-center gap-2" style={{ color: '#10b981', fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600 }}>
              <CheckCircle2 size={18} /> Message envoyé avec succès !
            </div>
          )}
          {status.state === 'error' && (
            <div className="flex items-center gap-2" style={{ color: '#ef4444', fontFamily: "'Inter', sans-serif", fontSize: '14px' }}>
              <AlertCircle size={16} /> {status.error || "Erreur — utilisez l'email direct."}
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(99,102,241,0.08)',
              border: '1px solid rgba(99,102,241,0.2)',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#10b981' }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#10b981' }} />
            </span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', fontWeight: 600, color: '#6366f1', letterSpacing: '0.05em' }}>
              DISPONIBLE — ALTERNANCE SEPT. 2026
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#e6ecf8',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            Me contacter
          </h2>
          <p
            style={{
              color: '#94a3b8',
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px',
              fontWeight: 400,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Une question, un projet ou une opportunité d'alternance ?
            <br />N'hésitez pas à me contacter via le canal de votre choix.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {contactCards.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              className="group bg-white rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                textDecoration: 'none',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.08), 0 0 0 1px ${c.borderColor}`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'
              }}
            >
              <div className="p-6 flex items-center gap-4">
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-2xl flex-shrink-0"
                  style={{ background: c.bgColor, border: `1px solid ${c.borderColor}` }}
                >
                  <c.Logo />
                </div>
                <div className="flex-1 min-w-0">
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: '#6b7280', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {c.label}
                  </p>
                  <p className="truncate" style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: '#111827' }}>
                    {c.value}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="flex-shrink-0 transition-all duration-300"
                  style={{ color: '#9ca3af' }}
                />
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <div className="mb-16">
          <ContactForm />
        </div>

        {/* Closing message */}
        <div className="text-center">
          <div
            className="bg-white rounded-3xl overflow-hidden mx-auto"
            style={{ maxWidth: '800px', border: '1px solid #e5e7eb', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
          >
            <div className="h-2" style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4, #10b981)' }} />
            <div className="px-8 py-12 sm:px-12 sm:py-16">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div
                    className="flex items-center justify-center w-16 h-16 rounded-2xl"
                    style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))', border: '1px solid rgba(99,102,241,0.15)' }}
                  >
                    <Sparkles size={28} style={{ color: '#6366f1' }} />
                  </div>
                </div>
              </div>
              <h3
                style={{
                  fontFamily: "'Orbitron', system-ui, sans-serif",
                  fontSize: 'clamp(1.4rem, 3.5vw, 1.8rem)',
                  fontWeight: 800,
                  color: '#111827',
                  marginBottom: '1rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Merci d'avoir visité mon portfolio
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  color: '#6b7280',
                  lineHeight: 1.8,
                  maxWidth: '560px',
                  margin: '0 auto 1.5rem',
                }}
              >
                Passionné par l'administration systèmes & réseaux et la cybersécurité,
                je suis à la recherche d'une alternance pour septembre 2026.
                Si mon profil vous intéresse, n'hésitez pas à me contacter — je serais ravi d'échanger avec vous.
              </p>
              <div className="flex items-center justify-center gap-1.5" style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#9ca3af' }}>
                Conçu avec <Heart size={14} style={{ color: '#ef4444', fill: '#ef4444' }} /> par Dilan Lengue
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
