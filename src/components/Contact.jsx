import { ArrowUpRight, Mail, Linkedin, Github, MessageCircle, Phone, Clock } from 'lucide-react'

const contacts = [
  {
    prochainement: true,
    Icon: Clock,
  },
  {
    Icon: Mail,
    label: 'Email Pro',
    value: 'lenguedilan@gmail.com',
    href: 'mailto:lenguedilan@gmail.com',
    color: '#22d3ee',
    iconColor: '#22d3ee',
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
  {
    Icon: MessageCircle,
    label: 'Discord',
    value: 'dilan.lengue',
    href: null,
    color: '#22d3ee',
    iconColor: '#5865F2',
    sub: 'Pseudo Discord',
    disabled: true,
  },
  {
    Icon: Phone,
    label: 'Téléphone',
    value: 'Sur demande',
    href: null,
    disabled: true,
    color: '#22d3ee',
    iconColor: '#34d399',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section title — outside the card like Sagar */}
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
              Restons en contact
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
              Une question ? Un projet ? Une opportunité ? N'hésitez pas à me contacter par l'un de ces moyens :
            </p>
          </div>
          <span className="text-3xl hidden sm:block">🏴</span>
        </div>

        {/* Contact card — glass like Sagar */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(15,20,40,0.55)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Rainbow top bar */}
          <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #6366f1, #22d3ee, #34d399, #f59e0b, #f472b6)' }} />

          <div className="p-8 sm:p-10">
            {/* Contact grid — 3x2 like Sagar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              {contacts.map((c, i) => {
                if (c.prochainement) {
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-center p-5 rounded-xl"
                      style={{
                        background: 'rgba(255,255,255,0.015)',
                        border: '1px solid rgba(255,255,255,0.04)',
                      }}
                    >
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#334155', fontStyle: 'italic' }}>
                        *prochainement
                      </p>
                    </div>
                  )
                }
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
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.055)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.025)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                    }}
                  >
                    <div className="flex items-center justify-center rounded-lg flex-shrink-0" style={{ width: '36px', height: '36px', background: `${c.iconColor || '#22d3ee'}12`, border: `1px solid ${c.iconColor || '#22d3ee'}25` }}>
                      {c.Icon && <c.Icon size={18} style={{ color: c.iconColor || '#22d3ee' }} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-xs uppercase tracking-wider mb-0.5"
                        style={{ color: '#64748b', fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: '0.08em' }}
                      >
                        {c.label}
                      </p>
                      <p
                        className="text-sm font-semibold truncate"
                        style={{ color: c.href ? '#22d3ee' : '#cbd5e1', fontFamily: "'Inter', sans-serif" }}
                      >
                        {c.value}
                      </p>
                    </div>
                    {c.external && <ArrowUpRight size={14} style={{ color: '#475569', flexShrink: 0 }} />}
                  </Wrapper>
                )
              })}
            </div>

            {/* Tip bar — like Sagar */}
            <div
              className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                color: '#94a3b8',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <span>💡</span>
              <span>
                Tip : Pour les demandes professionnelles, privilégiez{' '}
                <a href="mailto:lenguedilan@gmail.com" className="underline" style={{ color: '#818cf8' }}>l'email pro</a>
                {' '}ou{' '}
                <a href="https://www.linkedin.com/in/dilan-lengue" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#818cf8' }}>LinkedIn</a>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
