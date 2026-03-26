import { useState, useEffect } from 'react'
import { Home, User, Layers, Type, FolderOpen, UserCheck, Globe, FileText, Shield, Mail, X, Menu, Building2 } from 'lucide-react'

const navItems = [
  { icon: Home,        href: '#accueil',        label: 'Accueil',         id: 'accueil' },
  { icon: User,        href: '#dashboard',      label: '\u00c0 Propos',   id: 'dashboard' },
  { icon: Layers,      href: '#projets',        label: 'Projets',         id: 'projets' },
  { icon: Type,        href: '#parcours',       label: 'Parcours',        id: 'parcours' },
  { icon: Building2,   href: '#entreprise',     label: 'Entreprise',      id: 'entreprise' },
  { icon: FolderOpen,  href: '#bts',            label: 'BTS SIO',         id: 'bts' },
  { icon: UserCheck,   href: '#certifications', label: 'Certifications',  id: 'certifications' },
  { icon: Shield,      href: '#veille',         label: 'Veille',          id: 'veille' },
  { icon: Mail,        href: '#contact',        label: 'Contact',         id: 'contact' },
]

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('accueil')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const ids = navItems.map(n => n.id)
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(ids[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ── Desktop Left Sidebar — like Sagar ── */}
      <aside
        className="fixed top-0 left-0 bottom-0 z-50 hidden md:flex flex-col items-center justify-center"
        style={{
          width: '64px',
          background: 'rgba(6,9,22,0.88)',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          backdropFilter: 'blur(20px)',
          gap: '6px',
        }}
      >
        {navItems.map(({ icon: Icon, href, label, id }) => {
          const isActive = activeSection === id
          return (
            <a
              key={id}
              href={href}
              className="group relative flex items-center justify-center rounded-xl transition-all duration-200"
              style={{
                width: '46px',
                height: '46px',
                background: isActive ? 'rgba(99,102,241,0.18)' : 'transparent',
                border: isActive ? '1px solid rgba(99,102,241,0.4)' : '1px solid transparent',
                color: isActive ? '#818cf8' : '#475569',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.color = '#cbd5e1'
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = '#475569'
                }
              }}
            >
              <Icon size={20} strokeWidth={1.8} />
              {/* Tooltip */}
              <div
                className="absolute left-full ml-3 px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap"
                style={{
                  background: 'rgba(6,9,22,0.95)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#e2e8f0',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  fontWeight: 500,
                  backdropFilter: 'blur(8px)',
                }}
              >
                {label}
              </div>
            </a>
          )
        })}
      </aside>

      {/* ── Mobile Bottom Nav ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-2 py-2"
        style={{ background: 'rgba(6,9,22,0.97)', borderTop: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)' }}
      >
        {navItems.slice(0, 6).map(({ icon: Icon, href, id }) => (
          <a
            key={id}
            href={href}
            className="flex items-center justify-center w-10 h-10 rounded-xl transition-all"
            style={{
              background: activeSection === id ? 'rgba(99,102,241,0.2)' : 'transparent',
              color: activeSection === id ? '#818cf8' : '#475569',
            }}
          >
            <Icon size={18} />
          </a>
        ))}
        <button
          className="flex items-center justify-center w-10 h-10 rounded-xl"
          style={{ color: '#475569' }}
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={18} />
        </button>
      </div>

      {/* Mobile full menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[100] flex flex-col"
          style={{ background: 'rgba(6,9,22,0.98)', backdropFilter: 'blur(20px)' }}
        >
          <div className="flex items-center justify-between p-5">
            <span style={{ color: '#818cf8', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '1.2rem' }}>Navigation</span>
            <button onClick={() => setMobileOpen(false)} style={{ color: '#475569' }}>
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-5">
            {navItems.map(({ icon: Icon, href, label, id }) => (
              <a
                key={id}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-4 px-5 py-4 rounded-xl transition-all"
                style={{
                  background: activeSection === id ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.03)',
                  border: activeSection === id ? '1px solid rgba(99,102,241,0.35)' : '1px solid rgba(255,255,255,0.07)',
                  color: activeSection === id ? '#818cf8' : '#94a3b8',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '15px',
                  fontWeight: 500,
                }}
              >
                <Icon size={18} />
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
