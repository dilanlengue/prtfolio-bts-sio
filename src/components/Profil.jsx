import { Download, Linkedin, MapPin, GraduationCap, Briefcase, ArrowRight, Code2, Shield, Wifi, CheckCircle } from 'lucide-react'

const infos = [
  { icon: GraduationCap, label: 'Formation',    value: 'BTS SIO – Option SISR',   color: '#818cf8' },
  { icon: MapPin,         label: 'Localisation', value: 'Île-de-France, France',    color: '#22d3ee' },
  { icon: Briefcase,      label: 'Disponible',   value: 'Stage 2026',  color: '#34d399' },
]

const atouts = [
  {
    icon: Code2,
    color: '#22d3ee',
    title: 'Rigueur Technique',
    desc: 'Dossiers E4/E5 structurés, rapports de stage complets, documentation rigoureuse à chaque projet.',
  },
  {
    icon: Shield,
    color: '#a78bfa',
    title: 'Orientation Sécurité',
    desc: 'SecNumacadémie ANSSI validée — sécurité intégrée dès la conception de chaque infrastructure.',
  },
  {
    icon: Wifi,
    color: '#00ff88',
    title: 'Terrain & Stages',
    desc: '4 expériences professionnelles — 2 stages B&A Conseil, Les Réparateurs, Douala IT-Tech, Hi-Tech Vision.',
  },
]

const realisations = [
  'Déploiement Active Directory & GPO sur Windows Server 2025',
  'Configuration réseau Cisco VLAN 802.1Q inter-VLAN',
  'Mise en place OpenVPN avec PKI et certificats SSL',
  'Supervision Nagios Core — alertes SNMP/NRPE',
]

export default function Profil() {
  return (
    <section id="profil" className="py-16 md:py-24 relative">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center" style={{ marginBottom: '28px' }}>
          <h2 className="animate-fade-up" style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#e6ecf8' }}>
            Mon Profil
          </h2>
          <div className="mx-auto" style={{ width: '128px', height: '2px', background: 'linear-gradient(90deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.45) 24%, rgba(212,175,55,0.85) 50%, rgba(147,51,234,0.55) 76%, rgba(56,189,248,0) 100%)', marginTop: '16px' }} />
          <p className="animate-fade-up mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 500, color: '#c5d3e8', lineHeight: 1.75, maxWidth: '580px', marginTop: '16px' }}>
            Étudiant en BTS SIO SISR, passionné par l'administration systèmes, les réseaux et la cybersécurité
          </p>
        </div>

        {/* Layout principal */}
        <div className="grid md:grid-cols-[300px_1fr] gap-7">

          {/* ── Colonne gauche ── */}
          <div className="flex flex-col gap-5">

            {/* Carte identité */}
            <div
              className="animate-fade-up rounded-2xl p-8 flex flex-col items-center text-center"
              style={{ background: 'rgba(10,15,30,0.9)', border: '1px solid rgba(167,139,250,0.2)' }}
            >
              {/* Photo grande */}
              <div className="relative mb-5">
                <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 70%)', transform: 'scale(1.4)' }} />
                <div className="absolute rounded-full" style={{ inset: '-6px', border: '1.5px solid rgba(167,139,250,0.3)', animation: 'pulse-ring 3s ease-in-out infinite' }} />
                <div className="w-32 h-32 rounded-full overflow-hidden relative" style={{ border: '3px solid rgba(167,139,250,0.5)' }}>
                  <img src="/photo-dilan.png" alt="Dilan Lengue" className="w-full h-full object-cover object-center" />
                </div>
              </div>

              {/* Nom */}
              <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.15rem', fontWeight: 800, color: '#f1f5f9', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
                DILAN LENGUE
              </p>
              <p style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '12px', color: '#475569', marginBottom: '1rem', letterSpacing: '0.04em' }}>
                BTS SIO SISR · F2I Vincennes
              </p>

              {/* Disponible */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full mb-6 w-full justify-center" style={{ background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.2)' }}>
                <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ background: '#00ff88' }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#00ff88' }}>Disponible 2026</span>
              </div>

              {/* Infos */}
              <div className="w-full space-y-4">
                {infos.map(({ icon: Icon, label, value, color }) => (
                  <div key={label} className="flex items-center gap-3 text-left p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="p-2 rounded-lg flex-shrink-0" style={{ background: `${color}14`, border: `1px solid ${color}30` }}>
                      <Icon size={16} style={{ color }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '2px' }}>{label}</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#e2e8f0', fontWeight: 600 }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Boutons CTA */}
            <a
              href="/cv-dilan-lengue.pdf"
              target="_blank"
              className="flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-white transition-all hover:-translate-y-1"
              style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', fontFamily: "'Inter', sans-serif", fontSize: '15px', boxShadow: '0 8px 24px rgba(99,102,241,0.35)' }}
            >
              <Download size={18} /> Télécharger mon CV
            </a>
            <a
              href="https://www.linkedin.com/in/dilan-lengue"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold transition-all hover:-translate-y-1"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#e2e8f0' }}
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>

          {/* ── Colonne droite ── */}
          <div className="flex flex-col gap-6">

            {/* À propos */}
            <div
              className="animate-fade-up rounded-2xl p-8"
              style={{ background: 'rgba(10,15,30,0.9)', borderLeft: '3px solid #a78bfa', border: '1px solid rgba(167,139,250,0.15)', borderLeftWidth: '3px' }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '11px', color: '#a78bfa60' }}>//</span>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.18em' }}>À Propos</p>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#cbd5e1', lineHeight: 1.85, marginBottom: '1rem' }}>
                Je suis étudiant en deuxième année de BTS SIO option SISR à l'Institut F2I de Vincennes. Passionné par l'administration systèmes, les réseaux et la cybersécurité, je conçois et déploie des <strong style={{ color: '#a78bfa' }}>infrastructures informatiques sécurisées</strong>.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#cbd5e1', lineHeight: 1.85 }}>
                Je recherche une opportunité de stage en administration systèmes et réseaux.
              </p>
            </div>

            {/* Réalisations clés */}
            <div
              className="animate-fade-up rounded-2xl p-8"
              style={{ background: 'rgba(10,15,30,0.9)', border: '1px solid rgba(34,211,238,0.12)' }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '11px', color: '#22d3ee60' }}>//</span>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 700, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.18em' }}>Réalisations Clés</p>
              </div>
              <div className="space-y-3">
                {realisations.map((r, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={17} style={{ color: '#22d3ee', flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#94a3b8', lineHeight: 1.65 }}>{r}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 atouts */}
            <div className="grid sm:grid-cols-3 gap-5">
              {atouts.map((a, i) => (
                <div
                  key={i}
                  className="animate-fade-up rounded-2xl p-6"
                  style={{ background: 'rgba(10,15,30,0.9)', border: `1px solid ${a.color}18`, transitionDelay: `${i * 0.06}s`, transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${a.color}45`; e.currentTarget.style.transform = 'translateY(-4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = `${a.color}18`; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <div style={{ height: '2px', background: a.color, borderRadius: '999px', marginBottom: '1.25rem', opacity: 0.6 }} />
                  <div className="p-3 rounded-xl w-fit mb-4" style={{ background: `${a.color}12`, border: `1px solid ${a.color}28` }}>
                    <a.icon size={22} style={{ color: a.color }} />
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 800, color: a.color, marginBottom: '0.6rem', letterSpacing: '-0.02em' }}>{a.title}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>{a.desc}</p>
                </div>
              ))}
            </div>

            {/* Objectif */}
            <div
              className="animate-fade-up rounded-2xl p-7 flex flex-wrap items-center justify-between gap-4"
              style={{ background: 'linear-gradient(135deg, rgba(167,139,250,0.06), rgba(99,102,241,0.06))', border: '1px solid rgba(167,139,250,0.2)' }}
            >
              <div className="flex items-center gap-4">
                <span style={{ fontSize: '1.8rem' }}>🎯</span>
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', fontWeight: 800, color: '#a78bfa', marginBottom: '4px' }}>Objectif professionnel</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#64748b' }}>Administrateur Systèmes & Réseaux — poursuivre en MSc Cybersécurité</p>
                </div>
              </div>
              <a
                href="#projets"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all hover:-translate-y-0.5"
                style={{ background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.35)', color: '#a78bfa', fontFamily: "'Inter', sans-serif", fontSize: '15px' }}
              >
                Voir mes projets <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
