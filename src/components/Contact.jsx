import { useState } from 'react'
import { ArrowUpRight, Mail, Linkedin, Github, Phone, Send, CheckCircle2, AlertCircle, Loader2, Rocket, Gamepad2, Compass, GraduationCap } from 'lucide-react'

const contacts = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'lenguedilan@gmail.com',
    href: 'mailto:lenguedilan@gmail.com',
    color: '#22d3ee',
    iconColor: '#22d3ee',
  },
  {
    Icon: Phone,
    label: 'Téléphone',
    value: '+33 7 44 20 38 70',
    href: 'tel:+33744203870',
    color: '#22d3ee',
    iconColor: '#34d399',
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    value: 'Dilan Lengue',
    href: 'https://www.linkedin.com/in/dilan-lengue',
    color: '#22d3ee',
    iconColor: '#0A66C2',
    external: true,
  },
  {
    Icon: Github,
    label: 'GitHub',
    value: 'dilan-lengue',
    href: 'https://github.com/dilan-lengue',
    color: '#22d3ee',
    iconColor: '#e2e8f0',
    external: true,
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
    } catch (err) {
      window.location.href = buildMailto()
      setStatus({ state: 'idle', error: null })
    }
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(11,16,32,0.6)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px',
    padding: '12px 14px',
    color: '#f1f5f9',
    fontFamily: "'Inter', sans-serif",
    fontSize: '15px',
    transition: 'all 0.2s',
    outline: 'none',
  }

  const labelStyle = {
    display: 'block',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '11px',
    fontWeight: 700,
    color: '#22d3ee',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '6px',
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl"
      style={{
        background: 'rgba(11,16,32,0.62)',
        border: '1px solid rgba(34,211,238,0.18)',
        padding: '28px',
        marginBottom: '32px',
      }}
    >
      <div className="flex items-center gap-2.5 mb-5">
        <div className="flex items-center justify-center rounded-lg" style={{ width: '36px', height: '36px', background: 'rgba(34,211,238,0.12)', border: '1px solid rgba(34,211,238,0.25)' }}>
          <Send size={17} style={{ color: '#22d3ee' }} />
        </div>
        <div>
          <h3 style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.15rem', fontWeight: 800, color: '#f1f5f9', letterSpacing: '-0.01em' }}>
            Envoyer un message
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#94a3b8', marginTop: '2px' }}>
            Réponse sous 24-48 h ouvrées
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="cf-name" style={labelStyle}>Nom</label>
          <input
            id="cf-name"
            type="text"
            required
            maxLength={100}
            value={form.name}
            onChange={update('name')}
            placeholder="Jean Dupont"
            style={inputStyle}
            onFocus={e => { e.currentTarget.style.borderColor = '#22d3ee'; e.currentTarget.style.background = 'rgba(11,16,32,0.85)' }}
            onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(11,16,32,0.6)' }}
          />
        </div>
        <div>
          <label htmlFor="cf-email" style={labelStyle}>Email</label>
          <input
            id="cf-email"
            type="email"
            required
            maxLength={200}
            value={form.email}
            onChange={update('email')}
            placeholder="contact@entreprise.fr"
            style={inputStyle}
            onFocus={e => { e.currentTarget.style.borderColor = '#22d3ee'; e.currentTarget.style.background = 'rgba(11,16,32,0.85)' }}
            onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(11,16,32,0.6)' }}
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="cf-subject" style={labelStyle}>Sujet</label>
        <input
          id="cf-subject"
          type="text"
          required
          maxLength={150}
          value={form.subject}
          onChange={update('subject')}
          placeholder="Opportunité d'alternance — Septembre 2026"
          style={inputStyle}
          onFocus={e => { e.currentTarget.style.borderColor = '#22d3ee'; e.currentTarget.style.background = 'rgba(11,16,32,0.85)' }}
          onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(11,16,32,0.6)' }}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="cf-message" style={labelStyle}>Message</label>
        <textarea
          id="cf-message"
          required
          maxLength={4000}
          rows={5}
          value={form.message}
          onChange={update('message')}
          placeholder="Bonjour Dilan, nous avons une opportunité…"
          style={{ ...inputStyle, resize: 'vertical', minHeight: '120px', lineHeight: 1.6 }}
          onFocus={e => { e.currentTarget.style.borderColor = '#22d3ee'; e.currentTarget.style.background = 'rgba(11,16,32,0.85)' }}
          onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(11,16,32,0.6)' }}
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <button
          type="submit"
          disabled={status.state === 'loading'}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all"
          style={{
            background: status.state === 'loading' ? 'rgba(99,102,241,0.4)' : 'linear-gradient(135deg, #6366f1, #22d3ee)',
            color: '#fff',
            border: 'none',
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            letterSpacing: '0.02em',
            boxShadow: '0 6px 20px rgba(99,102,241,0.28)',
            cursor: status.state === 'loading' ? 'wait' : 'pointer',
            minWidth: '180px',
          }}
        >
          {status.state === 'loading' ? (
            <><Loader2 size={16} className="animate-spin" /> Envoi…</>
          ) : (
            <><Send size={16} /> Envoyer le message</>
          )}
        </button>

        {status.state === 'success' && (
          <div className="flex items-center gap-2" style={{ color: '#34d399', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600 }}>
            <CheckCircle2 size={16} /> Message envoyé. Merci !
          </div>
        )}
        {status.state === 'error' && (
          <div className="flex items-center gap-2" style={{ color: '#f87171', fontFamily: "'Inter', sans-serif", fontSize: '13px' }}>
            <AlertCircle size={16} /> {status.error || 'Erreur — utilisez l\'email direct.'}
          </div>
        )}
      </div>
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="flex items-end justify-between mb-8">
          <div>
            <h2
              style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#e6ecf8',
                lineHeight: 1.15,
                marginBottom: '0.5rem',
              }}
            >
              Me contacter
            </h2>
            <p
              style={{
                color: '#94a3b8',
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                fontWeight: 400,
                maxWidth: '560px',
              }}
            >
              Une question, un projet ou une opportunité d'alternance ? N'hésitez pas à me contacter.
            </p>
          </div>
        </div>

        <ContactForm />

        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(15,20,40,0.55)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #6366f1, #22d3ee, #34d399)' }} />

          <div className="p-8 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {contacts.map((c, i) => {
                const Wrapper = c.href ? 'a' : 'div'
                const extraProps = c.href
                  ? { href: c.href, target: c.external ? '_blank' : undefined, rel: c.external ? 'noopener noreferrer' : undefined }
                  : {}
                return (
                  <Wrapper
                    key={i}
                    {...extraProps}
                    className="group flex items-center gap-4 p-6 rounded-xl transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.025)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      cursor: c.href ? 'pointer' : 'default',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.055)'
                      e.currentTarget.style.borderColor = `${c.iconColor}40`
                      e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.2), 0 0 12px ${c.iconColor}10`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.025)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div className="flex items-center justify-center rounded-lg flex-shrink-0" style={{ width: '40px', height: '40px', background: `${c.iconColor}12`, border: `1px solid ${c.iconColor}25` }}>
                      <c.Icon size={20} style={{ color: c.iconColor }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-xs uppercase tracking-wider mb-0.5"
                        style={{ color: '#64748b', fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: '0.1em' }}
                      >
                        {c.label}
                      </p>
                      <p
                        className="text-sm font-semibold truncate"
                        style={{ color: '#f1f5f9', fontFamily: "'Inter', sans-serif" }}
                      >
                        {c.value}
                      </p>
                    </div>
                    {c.external && <ArrowUpRight size={14} style={{ color: '#475569', flexShrink: 0 }} />}
                  </Wrapper>
                )
              })}
            </div>

            <div
              className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                color: '#94a3b8',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <span>Pour les demandes professionnelles, privilégiez{' '}
                <a href="mailto:lenguedilan@gmail.com" className="underline" style={{ color: '#818cf8' }}>l'email</a>
                {' '}ou{' '}
                <a href="https://www.linkedin.com/in/dilan-lengue" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#818cf8' }}>LinkedIn</a>
              </span>
            </div>
          </div>
        </div>

        <SecretZone />

      </div>
    </section>
  )
}

function SecretZone() {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className="mt-20 text-center">
      <h3
        style={{
          fontFamily: "'Orbitron', system-ui, sans-serif",
          fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: '#e6ecf8',
          marginBottom: '0.5rem',
        }}
      >
        Merci d'avoir exploré mon portfolio !
      </h3>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '15px',
          color: '#94a3b8',
          maxWidth: '600px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.7,
        }}
      >
        Vous avez découvert mon parcours, mes projets, mes compétences et ma veille technologique.
      </p>

      <div
        className="rounded-2xl overflow-hidden mx-auto"
        style={{
          maxWidth: '720px',
          background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(34,211,238,0.04))',
          border: '1px solid rgba(99,102,241,0.18)',
          padding: '40px 32px',
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            color: '#94a3b8',
            marginBottom: '20px',
          }}
        >
          Découvrez mes objectifs pour la suite…
        </p>

        <button
          type="button"
          onClick={() => setRevealed(v => !v)}
          className="inline-flex flex-col items-center gap-3 rounded-2xl transition-all hover:-translate-y-0.5"
          style={{
            background: 'rgba(11,16,32,0.85)',
            border: '1px solid rgba(167,139,250,0.35)',
            padding: '24px 36px',
            cursor: 'pointer',
            boxShadow: '0 8px 32px rgba(99,102,241,0.15)',
          }}
        >
          <Rocket size={36} style={{ color: '#a78bfa' }} className="animate-pulse" />
          <span
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: '17px',
              fontWeight: 800,
              color: '#e2e8f0',
              letterSpacing: '0.02em',
            }}
          >
            Mes objectifs
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: '#94a3b8',
            }}
          >
            {revealed ? 'Voir ci-dessous' : 'Cliquez pour découvrir'}
          </span>
        </button>

        {revealed && (
          <div
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3"
            style={{ animation: 'fade-up 0.4s ease' }}
          >
            {[
              { Icon: GraduationCap, label: 'Alternance sept. 2026', desc: 'Bac+3 cybersécurité' },
              { Icon: Compass, label: 'Certifications visées', desc: 'CCNA, ITIL, Sec+' },
              { Icon: Gamepad2, label: 'Projets personnels', desc: 'Labs & open-source' },
            ].map((it, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  padding: '18px 14px',
                }}
              >
                <it.Icon size={22} style={{ color: '#a78bfa' }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: '#e2e8f0' }}>
                  {it.label}
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#94a3b8', textAlign: 'center' }}>
                  {it.desc}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
