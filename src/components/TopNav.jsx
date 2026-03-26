import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Terminal, Download, ChevronRight } from 'lucide-react'

const navLinks = [
  { path: '/',              label: 'Présentation' },
  { path: '/a-propos',      label: 'À propos' },
  { path: '/competences',   label: 'Compétences' },
  { path: '/cv',            label: 'CV' },
  { path: '/entreprise',    label: 'Entreprise' },
  { path: '/projets',       label: 'Projets' },
  { path: '/bts',           label: 'BTS SIO' },
  { path: '/veille',        label: 'Veille' },
  { path: '/contact',       label: 'Contact' },
]

export default function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hoveredPath, setHoveredPath] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          height: '80px',
          background: scrolled ? 'rgba(8,12,26,0.95)' : 'rgba(8,12,26,0.8)',
          borderBottom: `1px solid ${scrolled ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.06)'}`,
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.4), 0 0 1px rgba(99,102,241,0.15)' : 'none',
        }}
      >
        <div
          className="h-full flex items-center justify-between mx-auto px-6 lg:px-10"
          style={{ maxWidth: '1500px' }}
        >
          {/* Logo / Name */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0" style={{ textDecoration: 'none' }}>
            <div className="relative p-2.5 rounded-xl transition-all duration-300"
              style={{
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.25)',
              }}
            >
              <Terminal size={20} style={{ color: '#818cf8' }} />
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  border: '1px solid rgba(99,102,241,0.5)',
                  boxShadow: '0 0 20px rgba(99,102,241,0.2)',
                }}
              />
            </div>
            <div className="flex flex-col">
              <span
                style={{
                  fontFamily: "'Orbitron', system-ui, sans-serif",
                  fontSize: '17px',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  color: '#fff',
                }}
              >
                DILAN{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #818cf8, #22d3ee)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  LENGUE
                </span>
              </span>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '10px',
                color: '#64748b',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>
                BTS SIO · SISR
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-2">
            {navLinks.map(({ path, label }) => {
              const isActive = location.pathname === path
              const isHovered = hoveredPath === path
              return (
                <Link
                  key={path}
                  to={path}
                  className="relative px-5 py-2.5 rounded-xl transition-all duration-300"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '15px',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#fff' : isHovered ? '#e2e8f0' : '#8494ab',
                    textDecoration: 'none',
                    background: isActive
                      ? 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(34,211,238,0.08))'
                      : isHovered
                        ? 'rgba(255,255,255,0.05)'
                        : 'transparent',
                    border: isActive ? '1px solid rgba(99,102,241,0.25)' : '1px solid transparent',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={() => setHoveredPath(path)}
                  onMouseLeave={() => setHoveredPath(null)}
                >
                  {label}
                  {/* Active indicator */}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '30px',
                        height: '3px',
                        background: 'linear-gradient(90deg, #6366f1, #22d3ee)',
                        borderRadius: '3px',
                        boxShadow: '0 0 12px rgba(99,102,241,0.5)',
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right side: status + CV */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Disponibilité badge */}
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl"
              style={{
                background: 'rgba(0,255,136,0.06)',
                border: '1px solid rgba(0,255,136,0.2)',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#00ff88' }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#00ff88' }} />
              </span>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                fontWeight: 600,
                color: '#00ff88',
                letterSpacing: '0.03em',
              }}>
                Disponible
              </span>
            </div>

            {/* CV button */}
            <a
              href="/cv-dilan-lengue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-white transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                boxShadow: '0 4px 16px rgba(99,102,241,0.3)',
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(99,102,241,0.5)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(99,102,241,0.3)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <Download size={15} />
              CV
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="xl:hidden flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200"
            style={{
              color: '#7a8ba8',
              background: mobileOpen ? 'rgba(255,255,255,0.08)' : 'transparent',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[3px] transition-all duration-150"
          style={{
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #6366f1, #22d3ee, #00ff88)',
            boxShadow: scrollProgress > 0 ? '0 0 12px rgba(34,211,238,0.4)' : 'none',
          }}
        />
      </nav>

      {/* Mobile fullscreen menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col"
          style={{
            background: 'rgba(8,12,26,0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          {/* Mobile header */}
          <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl" style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
                <Terminal size={18} style={{ color: '#818cf8' }} />
              </div>
              <span
                style={{
                  fontFamily: "'Orbitron', system-ui, sans-serif",
                  fontSize: '16px',
                  fontWeight: 800,
                  color: '#fff',
                }}
              >
                DILAN{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #818cf8, #22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>LENGUE</span>
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-12 h-12 rounded-xl"
              style={{ color: '#7a8ba8', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile nav links */}
          <nav className="flex flex-col gap-2 px-6 mt-6 flex-1 overflow-y-auto">
            {navLinks.map(({ path, label }, i) => {
              const isActive = location.pathname === path
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-6 py-5 rounded-2xl transition-all duration-200"
                  style={{
                    background: isActive ? 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(34,211,238,0.06))' : 'rgba(255,255,255,0.02)',
                    borderTop: isActive ? '1px solid rgba(99,102,241,0.2)' : '1px solid rgba(255,255,255,0.04)',
                    borderRight: isActive ? '1px solid rgba(99,102,241,0.2)' : '1px solid rgba(255,255,255,0.04)',
                    borderBottom: isActive ? '1px solid rgba(99,102,241,0.2)' : '1px solid rgba(255,255,255,0.04)',
                    borderLeft: isActive ? '4px solid #6366f1' : '4px solid transparent',
                    color: isActive ? '#fff' : '#8494ab',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '18px',
                    fontWeight: isActive ? 700 : 500,
                    textDecoration: 'none',
                    letterSpacing: '0.01em',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '12px',
                      color: isActive ? '#6366f1' : '#334155',
                      fontWeight: 600,
                    }}>
                      0{i + 1}
                    </span>
                    {label}
                  </div>
                  <ChevronRight size={18} style={{ color: isActive ? '#6366f1' : '#334155', opacity: 0.7 }} />
                </Link>
              )
            })}
          </nav>

          {/* Mobile bottom area */}
          <div className="px-6 pb-10 pt-6 space-y-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {/* Disponibilité */}
            <div className="flex items-center justify-center gap-3 py-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#00ff88' }} />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: '#00ff88' }} />
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600, color: '#00ff88' }}>
                Disponible — Alternance sept. 2026
              </span>
            </div>

            {/* CV button */}
            <a
              href="/cv-dilan-lengue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 px-5 rounded-2xl text-white"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                fontWeight: 700,
                boxShadow: '0 6px 24px rgba(99,102,241,0.35)',
                letterSpacing: '0.02em',
              }}
            >
              <Download size={18} /> Télécharger mon CV
            </a>
          </div>
        </div>
      )}
    </>
  )
}
