import { useState, useEffect } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight, MapPin, Heart, Mail, Phone, Sparkles, Star, Rocket } from 'lucide-react'

function ContactIcon({ name }) {
  switch (name) {
    case 'mail': return <Mail size={18} />
    case 'phone': return <Phone size={18} />
    case 'linkedin': return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
    case 'github': return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    )
    case 'whatsapp': return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    )
    default: return null
  }
}

const contactMethods = [
  { icon: 'mail', label: 'Email', value: 'lenguedilan@gmail.com', href: 'mailto:lenguedilan@gmail.com', color: '#06b6d4' },
  { icon: 'phone', label: 'Téléphone', value: '+33 7 44 20 38 70', href: 'tel:+33744203870', color: '#10b981' },
  { icon: 'whatsapp', label: 'WhatsApp', value: '+33 7 44 20 38 70', href: 'https://wa.me/33744203870', color: '#25D366', external: true },
  { icon: 'linkedin', label: 'LinkedIn', value: 'Dilan Lengue', href: 'https://www.linkedin.com/in/dilan-lengue-600827353', color: '#0A66C2', external: true },
  { icon: 'github', label: 'GitHub', value: 'dilan-lengue', href: 'https://github.com/dilan-lengue', color: '#a78bfa', external: true },
]

function ContactItem({ item, isLast }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-3 py-3 transition-all duration-200"
      style={{
        textDecoration: 'none',
        borderBottom: !isLast ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        width: '40px', height: '40px', borderRadius: '12px',
        background: hovered ? `${item.color}25` : `${item.color}12`,
        border: `1px solid ${hovered ? `${item.color}50` : `${item.color}25`}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: item.color,
        transition: 'all 0.2s',
        flexShrink: 0,
      }}>
        <ContactIcon name={item.icon} />
      </div>
      <div className="flex-1 min-w-0">
        <p style={{ fontSize: '10px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1px' }}>
          {item.label}
        </p>
        <p className="truncate" style={{ fontSize: '13px', fontWeight: 600, color: '#e2e8f0' }}>
          {item.value}
        </p>
      </div>
      {item.external && <ArrowUpRight size={12} style={{ color: '#475569', flexShrink: 0 }} />}
    </a>
  )
}

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
      if ([404, 405].includes(res.status) || (res.status === 503 && data.fallback === 'mailto')) {
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

  const focusInput = e => {
    e.currentTarget.style.borderColor = '#6366f1'
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.08)'
  }
  const blurInput = e => {
    e.currentTarget.style.borderColor = '#e2e8f0'
    e.currentTarget.style.boxShadow = 'none'
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true"
        value={form.company} onChange={update('company')}
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
            onFocus={focusInput} onBlur={blurInput}
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
            onFocus={focusInput} onBlur={blurInput}
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
          onFocus={focusInput} onBlur={blurInput}
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
          onFocus={focusInput} onBlur={blurInput}
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <button
          type="submit"
          disabled={status.state === 'loading'}
          className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl transition-all duration-200"
          style={{
            background: status.state === 'loading' ? '#a5b4fc' : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
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

function FloatingParticle({ delay, left, size, duration, color }) {
  return (
    <div style={{
      position: 'absolute',
      left, bottom: '-10px',
      width: `${size}px`, height: `${size}px`,
      borderRadius: '50%',
      background: color,
      opacity: 0,
      animation: `floatUp ${duration}s ease-in-out ${delay}s infinite`,
      pointerEvents: 'none',
    }} />
  )
}

function MagicFooter() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  const particles = [
    { delay: 0, left: '10%', size: 4, duration: 4, color: 'rgba(139,92,246,0.6)' },
    { delay: 0.8, left: '25%', size: 3, duration: 3.5, color: 'rgba(6,182,212,0.5)' },
    { delay: 1.5, left: '45%', size: 5, duration: 4.5, color: 'rgba(99,102,241,0.4)' },
    { delay: 0.3, left: '65%', size: 3, duration: 3.8, color: 'rgba(16,185,129,0.5)' },
    { delay: 2, left: '80%', size: 4, duration: 4.2, color: 'rgba(139,92,246,0.5)' },
    { delay: 1.2, left: '92%', size: 3, duration: 3.6, color: 'rgba(6,182,212,0.6)' },
    { delay: 0.6, left: '5%', size: 3, duration: 5, color: 'rgba(16,185,129,0.4)' },
    { delay: 1.8, left: '55%', size: 4, duration: 3.2, color: 'rgba(99,102,241,0.5)' },
  ]

  return (
    <div
      className="relative rounded-2xl overflow-hidden text-center mt-8"
      onMouseMove={handleMouseMove}
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 30%, #0f172a 60%, #1a1a2e 100%)',
        boxShadow: '0 8px 40px rgba(99,102,241,0.15), 0 0 80px rgba(139,92,246,0.05)',
        border: '1px solid rgba(139,92,246,0.15)',
        transition: 'all 0.5s ease',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      {/* Animated gradient border top */}
      <div style={{
        height: '3px',
        background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4, #10b981, #8b5cf6, #6366f1)',
        backgroundSize: '200% 100%',
        animation: 'shimmerBorder 3s linear infinite',
      }} />

      {/* Mouse-follow spotlight */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(139,92,246,0.06), transparent 40%)`,
        pointerEvents: 'none',
        transition: 'background 0.3s ease',
      }} />

      {/* Ambient glow orbs */}
      <div style={{
        position: 'absolute', top: '-60px', left: '-60px',
        width: '200px', height: '200px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
        animation: 'pulseGlow 4s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-40px', right: '-40px',
        width: '180px', height: '180px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)',
        animation: 'pulseGlow 4s ease-in-out 2s infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 60%)',
        animation: 'pulseGlow 5s ease-in-out 1s infinite',
        pointerEvents: 'none',
      }} />

      {/* Floating particles */}
      {particles.map((p, i) => <FloatingParticle key={i} {...p} />)}

      {/* Star decorations */}
      <Star size={10} style={{
        position: 'absolute', top: '15%', left: '8%',
        color: 'rgba(139,92,246,0.3)',
        animation: 'twinkle 2s ease-in-out infinite',
      }} />
      <Star size={8} style={{
        position: 'absolute', top: '25%', right: '12%',
        color: 'rgba(6,182,212,0.25)',
        animation: 'twinkle 2.5s ease-in-out 0.5s infinite',
      }} />
      <Star size={6} style={{
        position: 'absolute', bottom: '20%', left: '15%',
        color: 'rgba(16,185,129,0.3)',
        animation: 'twinkle 3s ease-in-out 1s infinite',
      }} />
      <Sparkles size={12} style={{
        position: 'absolute', top: '20%', right: '20%',
        color: 'rgba(139,92,246,0.2)',
        animation: 'twinkle 2.8s ease-in-out 0.3s infinite',
      }} />
      <Sparkles size={10} style={{
        position: 'absolute', bottom: '25%', right: '8%',
        color: 'rgba(99,102,241,0.2)',
        animation: 'twinkle 3.2s ease-in-out 1.5s infinite',
      }} />

      {/* Content */}
      <div className="relative" style={{ padding: '3.5rem 2.5rem 3rem' }}>
        {/* Sparkle icon */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: '56px', height: '56px', borderRadius: '16px',
          background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(99,102,241,0.1))',
          border: '1px solid rgba(139,92,246,0.25)',
          marginBottom: '1.5rem',
          animation: 'gentleFloat 3s ease-in-out infinite',
        }}>
          <Sparkles size={24} style={{ color: '#a78bfa' }} />
        </div>

        {/* Main heading with animated gradient */}
        <h3 style={{
          fontFamily: "'Orbitron', system-ui, sans-serif",
          fontSize: 'clamp(1.4rem, 4vw, 2rem)',
          fontWeight: 900,
          letterSpacing: '-0.01em',
          lineHeight: 1.2,
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 25%, #a78bfa 40%, #67e8f9 60%, #6ee7b7 80%, #ffffff 100%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'shimmerText 4s ease-in-out infinite',
        }}>
          Merci d'avoir visité mon portfolio
        </h3>

        {/* Decorative divider */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '8px', marginBottom: '1.2rem',
        }}>
          <div style={{
            width: '40px', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5))',
          }} />
          <div style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
            animation: 'pulseGlow 2s ease-in-out infinite',
          }} />
          <div style={{
            width: '40px', height: '1px',
            background: 'linear-gradient(90deg, rgba(6,182,212,0.5), transparent)',
          }} />
        </div>

        {/* Description */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '15px', color: '#a5b4fc',
          lineHeight: 1.9, maxWidth: '540px',
          margin: '0 auto 1.8rem',
          fontWeight: 400,
        }}>
          Passionné par l'administration systèmes & réseaux et la cybersécurité,
          je suis à la recherche d'une <span style={{ color: '#c4b5fd', fontWeight: 600 }}>alternance pour septembre 2026</span>.
          Si mon profil vous intéresse, n'hésitez pas à me contacter.
        </p>

        {/* CTA mini-row */}
        <div className="flex items-center justify-center gap-3 flex-wrap" style={{ marginBottom: '2rem' }}>
          <a href="#accueil" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '8px 20px', borderRadius: '99px',
            background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))',
            border: '1px solid rgba(99,102,241,0.25)',
            color: '#a5b4fc', fontSize: '13px', fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.2))'
              e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))'
              e.currentTarget.style.borderColor = 'rgba(99,102,241,0.25)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <Rocket size={13} /> Retour en haut
          </a>
        </div>

        {/* Signature line */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '6px', flexWrap: 'wrap',
        }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px', color: '#64748b', fontWeight: 500,
          }}>
            Conçu avec
          </span>
          <Heart size={13} style={{
            color: '#ef4444', fill: '#ef4444',
            animation: 'heartbeat 1.5s ease-in-out infinite',
          }} />
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px', color: '#64748b', fontWeight: 500,
          }}>
            par
          </span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13px', fontWeight: 700,
            background: 'linear-gradient(135deg, #a78bfa, #67e8f9)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Dilan Lengue
          </span>
        </div>
      </div>

      {/* Animated gradient border bottom */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(90deg, #10b981, #06b6d4, #8b5cf6, #6366f1, #06b6d4, #10b981)',
        backgroundSize: '200% 100%',
        animation: 'shimmerBorder 3s linear infinite reverse',
      }} />

      {/* Keyframes */}
      <style>{`
        @keyframes shimmerBorder {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes shimmerText {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes floatUp {
          0% { opacity: 0; transform: translateY(0); }
          20% { opacity: 1; }
          80% { opacity: 0.5; }
          100% { opacity: 0; transform: translateY(-200px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.25); }
          30% { transform: scale(1); }
          45% { transform: scale(1.15); }
          60% { transform: scale(1); }
        }
      `}</style>
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative dots-bg" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
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

        {/* Main card — split layout */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: '#ffffff',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* Left — dark panel */}
            <div className="lg:col-span-2 relative overflow-hidden" style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)',
              padding: '2.5rem',
            }}>
              {/* Decorative */}
              <div style={{
                position: 'absolute', top: '-40px', right: '-40px',
                width: '150px', height: '150px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
              }} />
              <div style={{
                position: 'absolute', bottom: '-30px', left: '-30px',
                width: '100px', height: '100px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
              }} />

              <div className="relative">
                <h3 style={{
                  fontFamily: "'Orbitron', system-ui, sans-serif",
                  fontSize: '1.1rem', fontWeight: 800, color: '#ffffff',
                  marginBottom: '0.5rem',
                }}>
                  Parlons ensemble
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13px', color: '#94a3b8', lineHeight: 1.7,
                  marginBottom: '2rem',
                }}>
                  Disponible pour des opportunités de stage et d'alternance en administration systèmes & réseaux.
                </p>

                {/* Contact methods */}
                <div style={{ marginBottom: '2rem' }}>
                  {contactMethods.map((item, i) => (
                    <ContactItem key={i} item={item} isLast={i === contactMethods.length - 1} />
                  ))}
                </div>

                {/* Location */}
                <div className="flex items-center gap-2" style={{
                  padding: '10px 14px', borderRadius: '10px',
                  background: 'rgba(139,92,246,0.06)',
                  border: '1px solid rgba(139,92,246,0.15)',
                }}>
                  <MapPin size={14} style={{ color: '#8b5cf6', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#94a3b8' }}>
                    Paris, Île-de-France, France
                  </span>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3" style={{ padding: '2.5rem' }}>
              <div className="flex items-center gap-3" style={{ marginBottom: '0.3rem' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))',
                  border: '1px solid rgba(99,102,241,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Send size={18} style={{ color: '#6366f1' }} />
                </div>
                <h3 style={{
                  fontFamily: "'Orbitron', system-ui, sans-serif",
                  fontSize: '1rem', fontWeight: 800, color: '#1e293b',
                }}>
                  Envoyer un message
                </h3>
              </div>
              <p style={{
                fontSize: '13px', color: '#94a3b8', marginBottom: '1.5rem',
                paddingLeft: '52px',
              }}>
                Réponse sous 24-48h ouvrées
              </p>

              <ContactForm />
            </div>

          </div>
        </div>

        {/* Footer message — Magical */}
        <MagicFooter />

      </div>
    </section>
  )
}
