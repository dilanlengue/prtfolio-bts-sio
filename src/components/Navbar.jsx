import { useState, useEffect } from 'react'
import { Menu, X, Terminal, Download } from 'lucide-react'

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#dashboard', label: 'Dashboard' },
  { href: '#profil', label: 'Profil' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#bts', label: 'BTS E4/E5' },
  { href: '#veille', label: 'Veille' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong py-2 shadow-lg shadow-black/20' : 'py-3 bg-transparent'
      }`}>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2.5 group">
            <div className="relative p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Terminal size={18} className="text-primary" />
              <div className="absolute inset-0 rounded-lg border border-primary/20 group-hover:border-primary/40 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-base leading-tight" style={{ fontFamily: "'Orbitron', system-ui, sans-serif", letterSpacing: '0.04em', fontSize: '14px' }}>DILAN <span style={{ background: 'linear-gradient(135deg, #818cf8, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>LENGUE</span></span>
              <span className="text-[9px] text-gray-500 font-mono tracking-widest uppercase">BTS SIO · SISR</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-white'
                    : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Right side: status + CV */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Disponibilité */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.2)' }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#00ff88' }} />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: '#00ff88' }} />
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600, color: '#00ff88', letterSpacing: '0.03em' }}>Disponible</span>
            </div>
            <a
              href="/cv-dilan-lengue.pdf"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold rounded-lg bg-primary hover:bg-primary-dark text-white transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <Download size={13} />
              CV
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden relative p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Scroll progress */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-accent to-cyber transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </nav>

      {/* Mobile overlay */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsOpen(false)} />
          <div className="fixed top-14 right-3 left-3 z-50 lg:hidden glass-strong rounded-2xl p-2 shadow-2xl shadow-black/50 border border-white/10">
            {/* Name in mobile menu */}
            <div className="flex items-center justify-center gap-2 py-2 mb-1">
              <span style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '13px', fontWeight: 700, color: '#e2e8f0', letterSpacing: '0.04em' }}>
                DILAN <span style={{ background: 'linear-gradient(135deg, #818cf8, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>LENGUE</span>
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: '#475569', fontWeight: 500 }}>· BTS SIO SISR</span>
            </div>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {activeSection === link.href.slice(1) && (
                  <span className="w-1 h-1 bg-primary rounded-full" />
                )}
                {link.label}
              </a>
            ))}
            <div className="border-t border-white/5 mt-2 pt-2">
              <a
                href="/cv-dilan-lengue.pdf"
                target="_blank"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-primary text-white"
              >
                <Download size={14} /> Télécharger CV
              </a>
            </div>
          </div>
        </>
      )}
    </>
  )
}
