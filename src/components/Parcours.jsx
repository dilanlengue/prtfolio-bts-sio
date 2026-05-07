import { useState } from 'react'
import { GraduationCap, Briefcase, MapPin, ChevronDown, ChevronUp, Target, Shield, Building2, Smartphone, Wrench } from 'lucide-react'

const entreprises = [
  {
    date: 'Janvier — Février 2026',
    title: 'Technicien Support',
    org: 'B&A Conseil',
    place: 'Île-de-France',
    color: '#fbbf24',
    icon: Smartphone,
    description: 'B&A Conseil est une entreprise spécialisée dans le conseil et les services informatiques, accompagnant ses clients dans la gestion et l\'optimisation de leurs systèmes d\'information. Elle se distingue par une approche humaine et pédagogique du support.',
    missions: [
      'Administration du parc mobile Android via la solution MDM Miradore Online',
      'Implémentation de politiques de sécurité (passcode, restrictions, COBO, tracking, mises à jour)',
      'Déploiement automatisé d\'applications professionnelles via Managed Google Play',
      'Gestion des incidents MDM : actions de première analyse de dysfonctionnement, comptes Google managés, blocages',
      'Support aux utilisateurs pour l\'activation du compte manager et la configuration initiale',
      'Documentation et mise à jour des inventaires matériels (Excel, numéro de série, profils MDM)',
    ],
  },
  {
    date: 'Mai — Juillet 2025',
    title: 'Technicien Support Informatique',
    org: 'Les Réparateurs Mac & PC',
    place: 'Montreuil',
    color: '#22d3ee',
    icon: Wrench,
    description: 'Les Réparateurs Mac & PC est un atelier de réparation informatique spécialisé dans le diagnostic et la maintenance de matériel Apple et PC. L\'entreprise propose un service de proximité pour les particuliers et les professionnels.',
    missions: [
      'Réinstallation et configuration des systèmes d\'exploitation (Windows, macOS)',
      'Diagnostic et réparation de matériels informatiques (cartes mères, disques, RAM)',
      'Gestion et configuration de réseaux locaux (Wi-Fi, Ethernet, routeurs)',
      'Sauvegarde et restauration de données clients',
      'Assistance technique et conseil auprès des utilisateurs',
    ],
  },
]

const formations = [
  {
    date: '2025 — 2026',
    title: 'BTS SIO Option SISR — 2ème année',
    org: 'Institut F2I',
    place: 'Vincennes',
    current: true,
    pills: ['Active Directory', 'Cisco', 'OpenVPN', 'Nagios'],
  },
  {
    date: '2024 — 2025',
    title: 'BTS SIO Option SISR — 1ère année',
    org: 'Institut F2I',
    place: 'Vincennes',
    pills: ['Réseaux', 'Linux', 'Virtualisation'],
  },
  {
    date: '2024',
    title: 'HND — Software Engineering',
    org: 'IUG Douala',
    place: 'Cameroun',
    pills: ['Dev logiciel', 'Systèmes d\'information'],
  },
  {
    date: '2022 — 2023',
    title: 'Licence Informatique',
    org: 'Université de Douala',
    place: 'Cameroun',
    pills: ['Informatique', 'Programmation', 'Systèmes'],
  },
  {
    date: '2021 — 2022',
    title: 'Baccalauréat Scientifique — Série C',
    org: 'Collège La Perfection',
    place: 'Douala, Cameroun',
    pills: ['Mathématiques', 'Sciences'],
  },
]

function EntrepriseSection({ ent, index }) {
  const [activeTab, setActiveTab] = useState(0)
  const Icon = ent.icon

  return (
    <div className="animate-fade-up" style={{ marginBottom: '4rem' }}>
      {/* Tabs navigation */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setActiveTab(0)}
          style={{
            fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700,
            padding: '10px 22px', borderRadius: '12px', cursor: 'pointer',
            background: activeTab === 0 ? `${ent.color}15` : 'transparent',
            border: `1.5px solid ${activeTab === 0 ? `${ent.color}50` : 'rgba(255,255,255,0.08)'}`,
            color: activeTab === 0 ? ent.color : '#64748b',
            transition: 'all 0.2s',
          }}
        >
          {ent.org}
        </button>
      </div>

      {/* Layout : carte gauche + infos droite */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Carte entreprise — gauche */}
        <div className="lg:col-span-1">
          <div
            className="rounded-2xl overflow-hidden transition-all duration-300"
            style={{
              background: `linear-gradient(160deg, ${ent.color}12, rgba(11,16,32,0.9))`,
              border: `1.5px solid ${ent.color}25`,
              padding: '2rem',
              textAlign: 'center',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = `${ent.color}50`
              e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.35), 0 0 40px ${ent.color}10`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = `${ent.color}25`
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Logo icon */}
            <div className="flex items-center justify-center mx-auto" style={{
              width: '80px', height: '80px', borderRadius: '20px',
              background: `linear-gradient(135deg, ${ent.color}20, ${ent.color}08)`,
              border: `2px solid ${ent.color}35`,
              boxShadow: `0 0 30px ${ent.color}12`,
              marginBottom: '1.5rem',
            }}>
              <Icon size={36} style={{ color: ent.color }} />
            </div>

            {/* Nom entreprise */}
            <h4 style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: '18px', fontWeight: 800, color: '#f1f5f9',
              marginBottom: '0.6rem',
            }}>
              {ent.org}
            </h4>

            {/* Poste */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px', fontWeight: 600, color: ent.color,
              marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em',
            }}>
              {ent.title}
            </p>

            {/* Date + lieu */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px', fontWeight: 700, color: ent.color,
                padding: '5px 14px',
                background: `${ent.color}0a`, border: `1px solid ${ent.color}20`,
                borderRadius: '8px',
              }}>
                {ent.date}
              </span>
              <div className="flex items-center gap-1.5">
                <MapPin size={13} style={{ color: '#94a3b8' }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#94a3b8' }}>
                  {ent.place}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Infos — droite */}
        <div className="lg:col-span-2">

          {/* Description */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{
              fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 800,
              color: '#f1f5f9', marginBottom: '0.8rem',
              display: 'flex', alignItems: 'center', gap: '0.6rem',
            }}>
              <Building2 size={18} style={{ color: ent.color }} />
              Description de l'entreprise
            </h4>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 400,
              color: '#94a3b8', lineHeight: 1.9,
              paddingLeft: '1rem',
              borderLeft: `2px solid ${ent.color}30`,
            }}>
              {ent.description}
            </p>
          </div>

          {/* Missions */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 800,
              color: '#f1f5f9', marginBottom: '1rem',
              display: 'flex', alignItems: 'center', gap: '0.6rem',
            }}>
              <Briefcase size={18} style={{ color: ent.color }} />
              Mes missions
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {ent.missions.map((m, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl" style={{
                  padding: '0.9rem 1.2rem',
                  background: 'rgba(11,16,32,0.5)',
                  border: '1px solid rgba(255,255,255,0.04)',
                }}>
                  <div className="flex-shrink-0 flex items-center justify-center rounded-lg" style={{
                    width: '28px', height: '28px', marginTop: '1px',
                    background: `${ent.color}12`, border: `1px solid ${ent.color}25`,
                  }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 800, color: ent.color }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: "'Inter', sans-serif", fontSize: '14.5px',
                    color: '#cbd5e1', lineHeight: 1.7, fontWeight: 400,
                  }}>
                    {m}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FormationCard({ formation, index }) {
  const color = formation.current ? '#22d3ee' : '#818cf8'
  return (
    <div className="flex gap-5">
      {/* Numéro + ligne */}
      <div className="flex flex-col items-center" style={{ minWidth: '40px' }}>
        <div style={{
          width: '40px', height: '40px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: '12px',
          background: `${color}12`,
          border: `2px solid ${color}35`,
          fontFamily: "'Orbitron', system-ui, sans-serif",
          fontSize: '14px', fontWeight: 900, color,
          flexShrink: 0,
        }}>
          {String(index + 1).padStart(2, '0')}
        </div>
        <div style={{ flex: 1, width: '2px', background: `linear-gradient(180deg, ${color}35, transparent)`, marginTop: '8px' }} />
      </div>

      {/* Card */}
      <div
        className="relative rounded-2xl overflow-hidden transition-all duration-300 flex-1"
        style={{
          background: 'linear-gradient(145deg, rgba(11,16,32,0.85), rgba(15,20,40,0.7))',
          border: `1.5px solid ${color}15`,
          backdropFilter: 'blur(8px)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = `${color}40`
          e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.35), 0 0 30px ${color}08`
          e.currentTarget.style.transform = 'translateY(-4px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = `${color}15`
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        <div style={{ height: '2px', background: `linear-gradient(90deg, transparent, ${color}, transparent)`, opacity: 0.5 }} />
        <div style={{ padding: '1.8rem 2rem' }}>
          <div className="flex items-center justify-between" style={{ marginBottom: '1rem' }}>
            <div className="flex items-center gap-2.5">
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px', fontWeight: 700, color,
                letterSpacing: '0.1em', padding: '5px 14px',
                background: `${color}0a`, border: `1px solid ${color}20`,
                borderRadius: '8px',
              }}>
                {formation.date}
              </span>
              {formation.current && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{
                  background: 'rgba(0,255,136,0.06)',
                  border: '1px solid rgba(0,255,136,0.2)',
                }}>
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#34d399', fontFamily: "'Inter', sans-serif" }}>En cours</span>
                </span>
              )}
            </div>
            <div className="inline-flex items-center gap-2" style={{
              padding: '5px 14px',
              background: `${color}08`,
              border: `1px solid ${color}20`,
              borderRadius: '8px',
            }}>
              <MapPin size={14} style={{ color }} />
              <span style={{ color, fontSize: '13px', fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
                {formation.place}
              </span>
            </div>
          </div>

          <h4 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.15rem', fontWeight: 800, color: '#f1f5f9',
            marginBottom: '0.4rem', letterSpacing: '-0.02em', lineHeight: 1.3,
          }}>
            {formation.title}
          </h4>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px', fontWeight: 600, color,
            marginBottom: '1.2rem',
          }}>
            {formation.org}
          </p>

          <div className="flex flex-wrap gap-2.5">
            {formation.pills.map(p => (
              <span key={p} className="px-3.5 py-1.5 rounded-lg" style={{
                background: `${color}08`, border: `1px solid ${color}18`,
                color: `${color}cc`, fontFamily: "'Inter', sans-serif",
                fontSize: '12.5px', fontWeight: 600,
              }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Parcours() {
  return (
    <section id="parcours" className="relative" style={{ paddingTop: '8rem', paddingBottom: '12rem' }}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <div className="animate-fade-up" style={{ marginBottom: '1.5rem' }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '13px', fontWeight: 700,
              letterSpacing: '0.2em',
              color: '#818cf8',
              textTransform: 'uppercase',
              padding: '6px 18px',
              background: 'rgba(129,140,248,0.06)',
              border: '1px solid rgba(129,140,248,0.15)',
              borderRadius: '99px',
            }}>
              Parcours & Formation
            </span>
          </div>
          <h2
            className="animate-fade-up"
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #f1f5f9 0%, #818cf8 50%, #22d3ee 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 8s linear infinite',
            }}
          >
            Mon Parcours
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #6366f1, #22d3ee)', borderRadius: '99px', margin: '0 auto 1.8rem' }} />
          <p
            className="animate-fade-up mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px',
              fontWeight: 500,
              color: '#94a3b8',
              lineHeight: 1.8,
              maxWidth: '600px',
            }}
          >
            Formation initiale en BTS SIO SISR à l'Institut F2I, complétée par
            deux stages en support informatique N1/N2 en entreprise.
          </p>
        </div>

        {/* ── MES ENTREPRISES — style Merveille ── */}
        <div style={{ marginBottom: '5rem' }}>
          {/* Titre section */}
          <div className="flex items-center gap-4 mb-12">
            <div style={{ height: '2px', flex: 1, background: 'linear-gradient(90deg, #fbbf24, transparent)' }} />
            <div className="flex items-center gap-3" style={{
              padding: '12px 24px',
              background: 'linear-gradient(135deg, rgba(251,191,36,0.08), rgba(251,146,60,0.04))',
              border: '1px solid rgba(251,191,36,0.2)',
              borderRadius: '14px',
            }}>
              <Briefcase size={20} style={{ color: '#fbbf24' }} />
              <span style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: '15px', fontWeight: 800, color: '#fbbf24',
                textTransform: 'uppercase', letterSpacing: '0.15em',
              }}>
                Mes Entreprises
              </span>
            </div>
            <div style={{ height: '2px', flex: 1, background: 'linear-gradient(90deg, transparent, #fbbf24)' }} />
          </div>

          {entreprises.map((ent, i) => <EntrepriseSection key={ent.org} ent={ent} index={i} />)}
        </div>

        {/* ── FORMATION ── */}
        <div>
          {/* Titre section */}
          <div className="flex items-center gap-4 mb-12">
            <div style={{ height: '2px', flex: 1, background: 'linear-gradient(90deg, #22d3ee, transparent)' }} />
            <div className="flex items-center gap-3" style={{
              padding: '12px 24px',
              background: 'linear-gradient(135deg, rgba(34,211,238,0.08), rgba(99,102,241,0.04))',
              border: '1px solid rgba(34,211,238,0.2)',
              borderRadius: '14px',
            }}>
              <GraduationCap size={20} style={{ color: '#22d3ee' }} />
              <span style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: '15px', fontWeight: 800, color: '#22d3ee',
                textTransform: 'uppercase', letterSpacing: '0.15em',
              }}>
                Formation
              </span>
            </div>
            <div style={{ height: '2px', flex: 1, background: 'linear-gradient(90deg, transparent, #22d3ee)' }} />
          </div>

          <div>
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                marginBottom: '2.5rem',
                padding: '1.8rem 2.2rem',
                background: 'linear-gradient(135deg, rgba(34,211,238,0.12), rgba(99,102,241,0.06), rgba(11,16,32,0.9))',
                border: '2px solid rgba(34,211,238,0.25)',
                boxShadow: '0 8px 32px rgba(34,211,238,0.06), inset 0 1px 0 rgba(34,211,238,0.1)',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #22d3ee, #818cf8, #22d3ee)', opacity: 0.8 }} />
              <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '120px', background: 'radial-gradient(circle, rgba(34,211,238,0.08), transparent)', pointerEvents: 'none' }} />
              <div className="flex items-center gap-4">
                <div style={{
                  width: '56px', height: '56px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(99,102,241,0.15))',
                  border: '2px solid rgba(34,211,238,0.4)',
                  boxShadow: '0 0 30px rgba(34,211,238,0.1), 0 4px 12px rgba(0,0,0,0.2)',
                }}>
                  <GraduationCap size={26} style={{ color: '#22d3ee', filter: 'drop-shadow(0 0 6px rgba(34,211,238,0.4))' }} />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "'Orbitron', system-ui, sans-serif",
                    fontSize: '1.6rem',
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #22d3ee, #818cf8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                    marginBottom: '6px',
                    filter: 'drop-shadow(0 0 12px rgba(34,211,238,0.2))',
                  }}>
                    Formation
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14.5px', color: '#cbd5e1', fontWeight: 500, letterSpacing: '0.01em' }}>
                    Cursus académique
                  </p>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <span style={{
                    fontFamily: "'Orbitron', system-ui, sans-serif",
                    fontSize: '13px', fontWeight: 800,
                    letterSpacing: '0.08em', color: '#22d3ee',
                    padding: '6px 16px',
                    background: 'rgba(34,211,238,0.1)',
                    border: '1.5px solid rgba(34,211,238,0.3)',
                    borderRadius: '10px',
                    textShadow: '0 0 8px rgba(34,211,238,0.2)',
                  }}>
                    {formations.length} DIPLÔMES
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              {formations.map((f, i) => <FormationCard key={f.title} formation={f} index={i} />)}
            </div>

          </div>

        </div>

        {/* ── OBJECTIF — pleine largeur ── */}
        <div
          className="relative rounded-3xl overflow-hidden transition-all duration-300"
          style={{
            marginTop: '5rem',
            background: 'linear-gradient(145deg, rgba(0,255,136,0.03), rgba(11,16,32,0.9))',
            border: '2px solid rgba(0,255,136,0.15)',
            backdropFilter: 'blur(12px)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(0,255,136,0.4)'
            e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.4), 0 0 50px rgba(0,255,136,0.06)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(0,255,136,0.15)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent, #00ff88, #22d3ee, transparent)', opacity: 0.6 }} />
          <div style={{ padding: '3rem 3.5rem' }}>
            {/* Ligne titre */}
            <div className="flex items-center gap-4" style={{ marginBottom: '2rem' }}>
              <div style={{
                width: '56px', height: '56px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '16px',
                background: 'rgba(0,255,136,0.08)',
                border: '2px solid rgba(0,255,136,0.3)',
                boxShadow: '0 0 30px rgba(0,255,136,0.06)',
              }}>
                <Target size={26} style={{ color: '#00ff88' }} />
              </div>
              <div>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12px', fontWeight: 700,
                  letterSpacing: '0.2em', color: '#00ff88',
                  textTransform: 'uppercase',
                }}>
                  Mon Objectif
                </span>
                <h3 style={{
                  fontFamily: "'Orbitron', system-ui, sans-serif",
                  fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 900,
                  background: 'linear-gradient(135deg, #00ff88, #22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1.2,
                }}>
                  Devenir Expert en Cybersécurité
                </h3>
              </div>
            </div>

            {/* Roadmap en 3 étapes */}
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '2.5rem', marginBottom: '2.5rem' }}>
              {[
                {
                  step: '01',
                  title: 'Licence Professionnelle',
                  subtitle: 'Cybersécurité',
                  desc: 'Poursuivre en Licence Pro spécialisée en cybersécurité pour acquérir les fondamentaux de la sécurité des systèmes d\'information.',
                  status: 'Prochaine étape',
                  color: '#00ff88',
                },
                {
                  step: '02',
                  title: 'Master Cybersécurité',
                  subtitle: 'Sécurité & Réseaux',
                  desc: 'Intégrer un Master en cybersécurité pour approfondir l\'expertise en audit, sécurité offensive et défense des infrastructures.',
                  status: 'Objectif moyen terme',
                  color: '#22d3ee',
                },
                {
                  step: '03',
                  title: 'Expert Cybersécurité',
                  subtitle: '& Pen Tester',
                  desc: 'Devenir expert en sécurité informatique et pentesting : tests d\'intrusion, analyse de vulnérabilités et protection des SI.',
                  status: 'But final',
                  color: '#818cf8',
                },
              ].map(({ step, title, subtitle, desc, status, color }) => (
                <div
                  key={step}
                  className="relative rounded-2xl transition-all duration-300"
                  style={{
                    background: 'rgba(15,20,40,0.6)',
                    border: `1.5px solid ${color}18`,
                    padding: '2rem 1.8rem',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `${color}45`
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.3), 0 0 25px ${color}08`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = `${color}18`
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div className="flex items-center justify-between" style={{ marginBottom: '1.2rem' }}>
                    <span style={{
                      fontFamily: "'Orbitron', system-ui, sans-serif",
                      fontSize: '2rem', fontWeight: 900,
                      color: `${color}20`,
                    }}>
                      {step}
                    </span>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10.5px', fontWeight: 700,
                      letterSpacing: '0.1em',
                      color, padding: '4px 12px',
                      background: `${color}0a`,
                      border: `1px solid ${color}20`,
                      borderRadius: '99px',
                      textTransform: 'uppercase',
                    }}>
                      {status}
                    </span>
                  </div>
                  <h4 style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1.2rem', fontWeight: 800,
                    color: '#f1f5f9', lineHeight: 1.2,
                    marginBottom: '0.2rem',
                  }}>
                    {title}
                  </h4>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '14.5px', fontWeight: 600,
                    color, marginBottom: '1rem',
                  }}>
                    {subtitle}
                  </p>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '14.5px', fontWeight: 500,
                    color: '#94a3b8', lineHeight: 1.8,
                  }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {['Cybersécurité', 'Pen Testing', 'Sécurité Offensive', 'Audit & Conformité', 'Protection des SI'].map(tag => (
                <span key={tag} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl" style={{
                  background: 'rgba(0,255,136,0.05)',
                  border: '1px solid rgba(0,255,136,0.18)',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13.5px', fontWeight: 700,
                  color: '#00ff88',
                }}>
                  <Shield size={14} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── LANGUES ── */}
        <div className="animate-fade-up" style={{ marginTop: '8rem' }}>
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <div style={{ marginBottom: '1.2rem' }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '13px', fontWeight: 700,
                letterSpacing: '0.2em', color: '#818cf8',
                textTransform: 'uppercase',
                padding: '6px 18px',
                background: 'rgba(129,140,248,0.06)',
                border: '1px solid rgba(129,140,248,0.15)',
                borderRadius: '99px',
              }}>
                Communication
              </span>
            </div>
            <h3
              style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #818cf8 0%, #22d3ee 50%, #00ff88 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradient-shift 6s linear infinite',
                marginBottom: '1.2rem',
              }}
            >
              Mes Langues
            </h3>
            <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #818cf8, #22d3ee)', borderRadius: '99px', margin: '0 auto 1.5rem' }} />
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '17px',
              color: '#94a3b8',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.8,
            }}>
              Bilingue, je communique aussi bien en anglais qu'en français dans un contexte professionnel et technique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto" style={{ gap: '3rem' }}>
            {[
              {
                flagUrl: 'https://flagcdn.com/w160/gb.png',
                lang: 'Anglais',
                level: 'Bilingue',
                percent: 90,
                color: '#22d3ee',
                desc: 'Maîtrise complète à l\'oral et à l\'écrit. Communication fluide en contexte professionnel et technique.',
              },
              {
                flagUrl: 'https://flagcdn.com/w160/fr.png',
                lang: 'Français',
                level: 'Courant — C1',
                percent: 80,
                color: '#818cf8',
                desc: 'Niveau avancé, usage quotidien en formation et en milieu professionnel.',
              },
            ].map(({ flagUrl, lang, level, percent, color, desc }) => (
              <div
                key={lang}
                className="relative rounded-3xl overflow-hidden transition-all duration-500"
                style={{
                  background: 'linear-gradient(145deg, rgba(11,16,32,0.8), rgba(15,20,40,0.65))',
                  border: `1.5px solid ${color}20`,
                  padding: '3rem 2.5rem',
                  backdropFilter: 'blur(12px)',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.borderColor = `${color}50`
                  e.currentTarget.style.boxShadow = `0 24px 60px rgba(0,0,0,0.4), 0 0 40px ${color}10`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = `${color}20`
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '2px', background: `linear-gradient(90deg, transparent, ${color}, transparent)`, opacity: 0.5 }} />

                <div className="flex justify-center" style={{ marginBottom: '2rem' }}>
                  <div style={{
                    borderRadius: '50%',
                    overflow: 'hidden',
                    width: '90px',
                    height: '90px',
                    border: `3px solid ${color}40`,
                    boxShadow: `0 0 30px ${color}15, 0 8px 24px rgba(0,0,0,0.3)`,
                  }}>
                    <img src={flagUrl} alt={lang} width="90" height="90" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                </div>

                <h4 style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.4rem', fontWeight: 800, color: '#f1f5f9', textAlign: 'center', marginBottom: '0.5rem' }}>
                  {lang}
                </h4>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13.5px', fontWeight: 700, color, textAlign: 'center', letterSpacing: '0.1em', marginBottom: '1.5rem', textShadow: `0 0 10px ${color}30` }}>
                  {level}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#94a3b8', textAlign: 'center', lineHeight: 1.8, marginBottom: '2rem' }}>
                  {desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ flex: 1, height: '10px', background: 'rgba(255,255,255,0.06)', borderRadius: '99px', overflow: 'hidden' }}>
                    <div style={{ width: `${percent}%`, height: '100%', background: `linear-gradient(90deg, ${color}80, ${color})`, borderRadius: '99px', boxShadow: `0 0 14px ${color}40` }} />
                  </div>
                  <span style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '16px', fontWeight: 800, color, minWidth: '48px', textAlign: 'right' }}>
                    {percent}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
