import { useEffect, useRef, useState } from 'react'
import { Download, Mail, FolderKanban, ShieldCheck, CalendarDays, Award, Server, BarChart3, Lock, FileText, Globe, Shield, Target } from 'lucide-react'

/* ─── CountUp ─── */
function CountUp({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1600
        const start = Date.now()
        const step = () => {
          const elapsed = Date.now() - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * target))
          if (progress < 1) requestAnimationFrame(step)
        }
        step()
      }
    }, { threshold: 0.4 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

/* ─── Data ─── */
const statsData = [
  { value: 6,  suffix: '',  label: 'PROJETS RÉALISÉS',     desc: 'Infrastructure, sécurité & administration', color: '#22d3ee', icon: FolderKanban },
  { value: 2,  suffix: '',  label: 'CERTIFICATIONS',       desc: 'ANSSI SecNumacadémie + Cisco Cybersecurity',color: '#a78bfa', icon: Award },
  { value: 2,  suffix: '',  label: 'EN PRÉPARATION',       desc: 'CCNA & CompTIA Security+',                 color: '#22c55e', icon: ShieldCheck },
  { value: 2,  suffix: '',  label: 'ANNÉES D\'EXPÉRIENCE',  desc: 'Formation + stages en entreprise',         color: '#f59e0b', icon: CalendarDays },
]

const apports = [
  { color: '#22d3ee', icon: Server, title: 'Administration opérationnelle',  desc: 'Gestion de serveurs, postes et équipements réseau' },
  { color: '#22c55e', icon: BarChart3, title: 'Impact mesurable',               desc: '6 projets livrés · analyse réseau · 2 stages pro' },
  { color: '#a78bfa', icon: Lock, title: 'Sécurité by design',             desc: 'VPN, audit de vulnérabilités, pare-feu, conformité ANSSI' },
  { color: '#fbbf24', icon: FileText, title: 'Livraison documentée',           desc: 'Guides techniques, rapports de stage, documentation réseau' },
]

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative dots-bg" style={{ paddingTop: '12rem', paddingBottom: '6rem' }}>
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ══════ HERO — Photo + Infos côte à côte ══════ */}
        <div className="animate-fade-up mb-40" style={{ transitionDelay: '0.02s' }}>

          <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">

            {/* Colonne gauche — Photo + Nom */}
            <div className="flex flex-col items-center lg:items-center flex-shrink-0" style={{ minWidth: 'min(280px, 100%)' }}>
              <div style={{ width: '180px', height: '180px', borderRadius: '50%', padding: '4px', background: 'linear-gradient(135deg, #6366f1, #22d3ee, #a78bfa)', boxShadow: '0 0 50px rgba(99,102,241,0.25), 0 0 100px rgba(34,211,238,0.1)', marginBottom: '2rem' }}>
                <img src="/photo-dilan.png" alt="Dilan Lengue" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block', border: '3px solid rgba(8,12,26,1)' }} />
              </div>

              <h2 style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: 'clamp(2.6rem, 6vw, 3.6rem)',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #818cf8, #22d3ee, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '0.04em',
                lineHeight: 1.1,
                marginBottom: '1rem',
                textAlign: 'center',
                textShadow: '0 0 60px rgba(129,140,248,0.3)',
                filter: 'drop-shadow(0 0 20px rgba(34,211,238,0.15))',
              }}>
                DILAN LENGUE
              </h2>

              <div className="inline-flex items-center gap-2 rounded-full" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)', padding: '10px 22px', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 500, color: '#cbd5e1' }}>
                <span className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse" style={{ background: '#22c55e' }} />
                <span style={{ fontWeight: 600, color: '#e2e8f0' }}>Disponible</span>
              </div>
            </div>

            {/* Colonne droite — Infos clés */}
            <div className="flex-1 w-full">
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.8rem' }}>
                {'À'} propos de moi
              </p>
              <h3 style={{
                fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                fontWeight: 800,
                color: '#f1f5f9',
                lineHeight: 1.35,
                marginBottom: '2rem',
              }}>
                {'É'}tudiant en BTS SIO SISR,{' '}
                <span style={{ color: '#22d3ee' }}>passionn{'é'}</span> par{' '}
                <span style={{ color: '#a78bfa' }}>la cybers{'é'}curit{'é'}</span>{' '}
                et les infrastructures IT.
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
                {[
                  { icon: CalendarDays, label: `${new Date().getFullYear() - 2003} ans`, color: '#22d3ee' },
                  { icon: Globe, label: 'Bilingue FR / EN', color: '#34d399' },
                  { icon: Award, label: 'Institut F2I', color: '#a78bfa' },
                  { icon: Shield, label: 'BTS SIO option SISR', color: '#fb7185' },
                ].map((info, i) => {
                  const InfoIcon = info.icon
                  return (
                    <div key={i} className="flex items-center gap-3 rounded-xl" style={{ padding: '14px 18px', background: 'rgba(11,16,32,0.6)', border: `1px solid ${info.color}18` }}>
                      <InfoIcon size={20} style={{ color: info.color, flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600, color: '#e2e8f0' }}>{info.label}</span>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-wrap gap-2.5">
                {['Windows Server', 'Linux', 'Cisco', 'Wireshark', 'Active Directory'].map((s, i) => (
                  <span key={i} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12.5px', fontWeight: 500, color: '#94a3b8', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '8px 14px' }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════ PRÉSENTATION — Texte + Qualités ══════ */}
        <div className="animate-fade-up mb-40" style={{ transitionDelay: '0.08s', marginTop: '6rem' }}>

          <div className="flex items-center gap-6 mb-20">
            <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, #6366f1, rgba(99,102,241,0.05))', borderRadius: '2px' }} />
            <div className="flex items-center gap-4" style={{ padding: '14px 28px', background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(34,211,238,0.06))', border: '1px solid rgba(129,140,248,0.2)', borderRadius: '16px', backdropFilter: 'blur(12px)', boxShadow: '0 0 30px rgba(99,102,241,0.06)' }}>
              <div className="flex items-center justify-center rounded-xl" style={{ width: '42px', height: '42px', background: 'linear-gradient(135deg, rgba(129,140,248,0.15), rgba(34,211,238,0.1))', border: '1px solid rgba(129,140,248,0.3)', boxShadow: '0 0 20px rgba(129,140,248,0.08)' }}>
                <FileText size={19} style={{ color: '#818cf8' }} />
              </div>
              <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '14px', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                Ma pr{'é'}sentation
              </p>
            </div>
            <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, rgba(34,211,238,0.05), #22d3ee)', borderRadius: '2px' }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Texte — 3 colonnes */}
            <div className="lg:col-span-3" style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              <div className="rounded-xl" style={{ padding: '1.8rem 2rem', borderLeft: '3px solid #818cf8', background: 'linear-gradient(135deg, rgba(129,140,248,0.04), transparent)' }}>
                <p style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", fontSize: '17px', fontWeight: 400, color: '#cbd5e1', lineHeight: 2 }}>
                  Je m'appelle <strong style={{ color: '#818cf8', fontWeight: 700 }}>Dilan Lengue</strong>, j'ai <strong style={{ color: '#22d3ee', fontWeight: 700 }}>{new Date().getFullYear() - 2003} ans</strong> et je suis {'é'}tudiant en <strong style={{ color: '#818cf8', fontWeight: 700 }}>BTS SIO</strong> (Services Informatiques aux Organisations), option <strong style={{ color: '#a78bfa', fontWeight: 700 }}>SISR</strong> (Solutions d'Infrastructure, Syst{'è'}mes et R{'é'}seaux) {'à'} l'<strong style={{ color: '#f1f5f9', fontWeight: 600 }}>Institut F2I</strong>. <span style={{ color: '#34d399', fontWeight: 600 }}>Bilingue fran{'ç'}ais / anglais</span>, passionn{'é'} par les technologies de l'information, j'ai choisi cette sp{'é'}cialisation pour d{'é'}velopper mes comp{'é'}tences en administration r{'é'}seau, gestion de serveurs et s{'é'}curit{'é'} informatique.
                </p>
              </div>
              <div className="rounded-xl" style={{ padding: '1.8rem 2rem', borderLeft: '3px solid #22d3ee', background: 'linear-gradient(135deg, rgba(34,211,238,0.04), transparent)' }}>
                <p style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", fontSize: '17px', fontWeight: 400, color: '#cbd5e1', lineHeight: 2 }}>
                  Au cours de ma formation, j'ai eu l'opportunit{'é'} de mettre mes connaissances en pratique {'à'} travers <strong style={{ color: '#22d3ee', fontWeight: 600 }}>plusieurs projets techniques</strong> et <strong style={{ color: '#22d3ee', fontWeight: 600 }}>stages en entreprise</strong>. Rigoureux, curieux et motiv{'é'}, j'aime relever des d{'é'}fis techniques et trouver des <strong style={{ color: '#f1f5f9', fontWeight: 600 }}>solutions efficaces</strong> aux probl{'è'}mes rencontr{'é'}s.
                </p>
              </div>
              <div className="rounded-xl" style={{ padding: '1.8rem 2rem', borderLeft: '3px solid #a78bfa', background: 'linear-gradient(135deg, rgba(167,139,250,0.04), transparent)' }}>
                <p style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", fontSize: '17px', fontWeight: 400, color: '#cbd5e1', lineHeight: 2 }}>
                  {'À'} travers ce portfolio, je souhaite partager <strong style={{ color: '#a78bfa', fontWeight: 600 }}>mon parcours</strong>, <strong style={{ color: '#a78bfa', fontWeight: 600 }}>mes projets</strong> et les <strong style={{ color: '#f1f5f9', fontWeight: 600 }}>comp{'é'}tences</strong> que j'ai acquises dans le cadre de mon BTS.
                </p>
              </div>
            </div>

            {/* Qualités — 2 colonnes */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="rounded-2xl" style={{ padding: '2rem', background: 'rgba(11,16,32,0.6)', border: '1px solid rgba(34,211,238,0.12)' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center rounded-xl" style={{ width: '44px', height: '44px', background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.25)' }}>
                    <Target size={22} style={{ color: '#22d3ee' }} />
                  </div>
                  <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Mes qualit{'é'}s</p>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {['Rigoureux', 'Curieux', 'Motivé', 'Autonome', 'Esprit d\'équipe'].map((q, i) => (
                    <span key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: '#e2e8f0', background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.18)', borderRadius: '10px', padding: '8px 16px' }}>{q}</span>
                  ))}
                </div>
              </div>

              {/* Ce que j'apporte — compact */}
              <div className="rounded-2xl" style={{ padding: '2rem', background: 'linear-gradient(145deg, rgba(11,16,32,0.65), rgba(15,20,40,0.5))', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center rounded-xl" style={{ width: '44px', height: '44px', background: 'rgba(129,140,248,0.1)', border: '1px solid rgba(129,140,248,0.25)' }}>
                    <Server size={22} style={{ color: '#818cf8' }} />
                  </div>
                  <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Ce que j'apporte</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {apports.map((item, i) => {
                    const ItemIcon = item.icon
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex items-center justify-center rounded-lg flex-shrink-0" style={{ width: '32px', height: '32px', background: `${item.color}12`, border: `1px solid ${item.color}30` }}>
                          <ItemIcon size={16} style={{ color: item.color }} />
                        </div>
                        <div className="min-w-0">
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: item.color, lineHeight: 1.3, marginBottom: '2px' }}>{item.title}</p>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#94a3b8', lineHeight: 1.5 }}>{item.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Statistiques ── */}
        <div className="animate-fade-up mb-32" style={{ marginTop: '8rem' }}>
          <div className="flex items-center gap-4 mb-14">
            <div style={{ height: '3px', flex: 1, background: 'linear-gradient(90deg, #22d3ee, transparent)', borderRadius: '2px' }} />
            <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '15px', fontWeight: 700, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.25em' }}>
              Mes chiffres
            </p>
            <div style={{ height: '3px', flex: 1, background: 'linear-gradient(90deg, transparent, #22d3ee)', borderRadius: '2px' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-grid">
            {statsData.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.label}
                  className="card-holo flex flex-col items-center text-center rounded-2xl p-10 transition-all duration-300"
                  style={{ background: 'rgba(11,16,32,0.7)', border: `1px solid ${s.color}22` }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-6px)'
                    e.currentTarget.style.borderColor = `${s.color}55`
                    e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.35), 0 0 30px ${s.color}15`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = `${s.color}22`
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div className="flex items-center justify-center rounded-2xl mb-6" style={{ width: '64px', height: '64px', background: `${s.color}12`, border: `1px solid ${s.color}35` }}>
                    <Icon size={30} style={{ color: s.color }} />
                  </div>
                  <span style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: 'clamp(2.8rem, 5vw, 3.4rem)', fontWeight: 900, color: s.color, lineHeight: 1, marginBottom: '0.8rem' }}>
                    <CountUp target={s.value} suffix={s.suffix} />
                  </span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#f1f5f9', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                    {s.label}
                  </span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 400, color: '#94a3b8', lineHeight: 1.6 }}>
                    {s.desc}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Mes Réseaux ── */}
        <div className="flex items-center gap-4 mb-14" style={{ marginTop: '4rem' }}>
          <div style={{ height: '3px', flex: 1, background: 'linear-gradient(90deg, #818cf8, transparent)', borderRadius: '2px' }} />
          <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '15px', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.25em' }}>
            Mes R{'é'}seaux
          </p>
          <div style={{ height: '3px', flex: 1, background: 'linear-gradient(90deg, transparent, #818cf8)', borderRadius: '2px' }} />
        </div>

        <div className="animate-fade-up grid grid-cols-2 sm:grid-cols-4" style={{ gap: '1.5rem', marginTop: '2rem' }}>
          {[
            { label: 'LinkedIn', desc: 'Profil pro', href: 'https://www.linkedin.com/in/dilan-lengue-600827353', color: '#0A66C2', glow: 'rgba(10,102,194,0.4)', icon: (<svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>) },
            { label: 'GitHub', desc: 'Mes projets', href: 'https://github.com/dilan-lengue', color: '#c9d1d9', glow: 'rgba(201,209,217,0.3)', icon: (<svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>) },
            { label: 'Discord', desc: 'Communauté', href: '#contact', color: '#5865F2', glow: 'rgba(88,101,242,0.4)', icon: (<svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/></svg>) },
            { label: 'Email', desc: 'Me contacter', href: 'mailto:lenguedilan@gmail.com', color: '#22d3ee', glow: 'rgba(34,211,238,0.3)', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>) },
          ].map((net, i) => (
            <a key={i} href={net.href} target={net.href.startsWith('http') ? '_blank' : undefined} rel={net.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="card-holo group relative flex flex-col items-center gap-3 rounded-2xl transition-all duration-500"
              style={{
                textDecoration: 'none',
                padding: '2rem 1.5rem',
                background: 'linear-gradient(160deg, rgba(15,23,42,0.9), rgba(30,27,75,0.6))',
                border: `1.5px solid ${net.color}20`,
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${net.color}60`
                e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.4), 0 0 40px ${net.glow}, inset 0 1px 0 ${net.color}25`
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                e.currentTarget.querySelector('.net-glow').style.opacity = '1'
                e.currentTarget.querySelector('.net-icon').style.transform = 'scale(1.1) rotate(-3deg)'
                e.currentTarget.querySelector('.net-icon').style.boxShadow = `0 0 30px ${net.glow}, 0 0 60px ${net.glow}`
                e.currentTarget.querySelector('.net-ring').style.transform = 'scale(1.5)'
                e.currentTarget.querySelector('.net-ring').style.opacity = '0.15'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = `${net.color}20`
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.querySelector('.net-glow').style.opacity = '0'
                e.currentTarget.querySelector('.net-icon').style.transform = 'scale(1) rotate(0deg)'
                e.currentTarget.querySelector('.net-icon').style.boxShadow = `0 0 20px ${net.color}15`
                e.currentTarget.querySelector('.net-ring').style.transform = 'scale(1)'
                e.currentTarget.querySelector('.net-ring').style.opacity = '0'
              }}
            >
              {/* Background glow on hover */}
              <div className="net-glow" style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(circle at 50% 30%, ${net.color}12, transparent 70%)`,
                opacity: 0, transition: 'opacity 0.5s ease',
                pointerEvents: 'none',
              }} />

              {/* Expanding ring effect */}
              <div className="net-ring" style={{
                position: 'absolute', top: '35%', left: '50%',
                width: '80px', height: '80px',
                marginLeft: '-40px', marginTop: '-40px',
                borderRadius: '50%',
                border: `2px solid ${net.color}`,
                opacity: 0, transform: 'scale(1)',
                transition: 'all 0.6s ease',
                pointerEvents: 'none',
              }} />

              {/* Logo container */}
              <div className="net-icon relative" style={{
                width: '72px', height: '72px', borderRadius: '20px',
                background: `linear-gradient(145deg, ${net.color}18, ${net.color}08)`,
                border: `1.5px solid ${net.color}30`,
                boxShadow: `0 0 20px ${net.color}15`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: net.color,
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}>
                {net.icon}
              </div>

              {/* Label */}
              <div className="relative text-center">
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 800, color: '#f1f5f9', marginBottom: '2px' }}>{net.label}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 500, color: '#64748b' }}>{net.desc}</p>
              </div>

              {/* Bottom accent line */}
              <div style={{
                position: 'absolute', bottom: 0, left: '20%', right: '20%',
                height: '2px', borderRadius: '2px',
                background: `linear-gradient(90deg, transparent, ${net.color}50, transparent)`,
                opacity: 0.5,
              }} />
            </a>
          ))}
        </div>

        {/* ── Contact + CV ── */}
        <div className="animate-fade-up flex flex-wrap justify-center gap-5" style={{ marginTop: '4rem' }}>
          <a href="/contact" className="flex items-center gap-2 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600, color: '#0b1020', background: 'rgba(255,255,255,0.95)', padding: '16px 32px', textDecoration: 'none' }}>
            <Mail size={18} /> Me contacter
          </a>
          <a href="/cv-dilan-lengue.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600, color: '#e6ecf8', background: 'transparent', border: '1px solid rgba(34,211,238,0.25)', padding: '16px 32px', textDecoration: 'none' }}>
            <Download size={18} /> T{'é'}l{'é'}charger mon CV
          </a>
        </div>

      </div>
    </section>
  )
}
