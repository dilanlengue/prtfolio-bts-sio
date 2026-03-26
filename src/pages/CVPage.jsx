import { useState } from 'react'
import { Download, ExternalLink, GraduationCap, Briefcase, Award, Code2, Globe, ChevronDown, ChevronUp, Shield, Server, Wifi, Terminal, Monitor, Activity } from 'lucide-react'

const sections = [
  {
    id: 'formation',
    icon: GraduationCap,
    title: 'Formation',
    color: '#22d3ee',
    items: [
      {
        period: '2024 — 2026',
        title: 'BTS SIO — Option SISR',
        org: 'Institut F2I, Vincennes',
        details: [
          'Services Informatiques aux Organisations',
          'Option Solutions d\'Infrastructure, Systèmes et Réseaux',
          'Formation initiale avec 2 stages en entreprise',
        ],
      },
      {
        period: '2024',
        title: 'HND — Software Engineering',
        org: 'IUG Douala, Cameroun',
        details: ['Higher National Diploma en Ingénierie logicielle'],
      },
      {
        period: '2022 — 2024',
        title: 'Licence Informatique',
        org: 'Université de Douala, Cameroun',
        details: ['Parcours Informatique général — Programmation, Systèmes, Réseaux'],
      },
      {
        period: '2021 — 2022',
        title: 'Baccalauréat Scientifique — Série C',
        org: 'Collège La Perfection, Douala',
        details: ['Mathématiques et Sciences'],
      },
    ],
  },
  {
    id: 'experience',
    icon: Briefcase,
    title: 'Expérience Professionnelle',
    color: '#fbbf24',
    items: [
      {
        period: 'Janv — Fév 2026',
        title: 'Technicien Support & Maintenance',
        org: 'B&A Conseil, Coignières (78)',
        details: [
          'Diagnostic et résolution d\'incidents matériels et logiciels',
          'Déploiement de postes Windows et assistance on-site',
          'Configuration de smartphones et MDM (Miradore)',
          'Enregistrement des appareils en gestion de flotte mobile',
        ],
      },
      {
        period: 'Mai — Juil 2025',
        title: 'Technicien Support Informatique',
        org: 'Les Réparateurs Mac & PC, Montreuil (93)',
        details: [
          'Réinstallation et configuration des systèmes d\'exploitation',
          'Diagnostic et réparation de matériels Mac & PC',
          'Configuration de réseaux locaux, maintenance préventive',
        ],
      },
      {
        period: '2022 — 2023',
        title: 'Technicien Informatique',
        org: 'Douala IT-Tech Solution & Innovation, Cameroun',
        details: [
          'Installation et configuration de 250 postes au Lycée de Nyall',
          'Câblage réseau, création de l\'infrastructure locale',
          'Paramétrage des sessions et gestion des droits',
        ],
      },
      {
        period: '2021 — 2022',
        title: 'Stagiaire Technicien IT',
        org: 'Hi-Tech Vision, Cameroun',
        details: [
          'Assistance technique et support utilisateurs',
          'Maintenance matérielle des équipements informatiques',
        ],
      },
    ],
  },
  {
    id: 'competences',
    icon: Code2,
    title: 'Compétences Techniques',
    color: '#818cf8',
    skills: [
      { icon: Server, label: 'Systèmes', tags: ['Windows Server', 'Active Directory', 'GPO', 'DNS/DHCP', 'Linux Debian'] },
      { icon: Wifi, label: 'Réseaux', tags: ['Cisco IOS', 'VLAN 802.1Q', 'TCP/IP', 'Wireshark', 'pfSense'] },
      { icon: Shield, label: 'Cybersécurité', tags: ['OpenVPN', 'Nessus', 'iptables', 'OWASP', 'SSL/TLS'] },
      { icon: Activity, label: 'Supervision', tags: ['Nagios', 'GLPI', 'SNMP/NRPE', 'Zabbix'] },
      { icon: Monitor, label: 'Virtualisation', tags: ['VirtualBox', 'VMware ESXi', 'Proxmox', 'Hyper-V'] },
      { icon: Terminal, label: 'OS & Scripting', tags: ['Bash', 'PowerShell', 'Linux', 'Windows 10/11'] },
    ],
  },
  {
    id: 'certifications',
    icon: Award,
    title: 'Certifications',
    color: '#22c55e',
    items: [
      {
        period: 'Janv 2026',
        title: 'SecNumacadémie ANSSI',
        org: 'Agence Nationale de la Sécurité des Systèmes d\'Information',
        details: ['4 modules validés — Cybersécurité, Authentification, Chiffrement, Sécurité réseau'],
      },
      {
        period: '2026',
        title: 'BTS SIO SISR (en cours)',
        org: 'Diplôme d\'État — Niveau 5',
        details: ['Services Informatiques aux Organisations — Option SISR'],
      },
    ],
  },
  {
    id: 'langues',
    icon: Globe,
    title: 'Langues',
    color: '#f472b6',
    langues: [
      { flag: '🇬🇧', lang: 'Anglais', level: 'Langue maternelle', pct: 100 },
      { flag: '🇫🇷', lang: 'Français', level: 'C1 — Avancé', pct: 90 },
      { flag: '🇧🇷', lang: 'Portugais', level: 'Débutant', pct: 20 },
    ],
  },
]

function CVSection({ section, isOpen, onToggle }) {
  const Icon = section.icon

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: 'rgba(10,15,30,0.85)',
        border: `1px solid ${isOpen ? `${section.color}40` : 'rgba(255,255,255,0.06)'}`,
        boxShadow: isOpen ? `0 0 24px ${section.color}10` : 'none',
      }}
    >
      {/* Section header — always visible */}
      <button
        className="w-full flex items-center justify-between p-6 transition-all duration-200"
        onClick={onToggle}
        style={{ cursor: 'pointer' }}
        onMouseEnter={e => {
          if (!isOpen) e.currentTarget.parentElement.style.borderColor = `${section.color}30`
        }}
        onMouseLeave={e => {
          if (!isOpen) e.currentTarget.parentElement.style.borderColor = 'rgba(255,255,255,0.06)'
        }}
      >
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `${section.color}12`,
              border: `1px solid ${section.color}30`,
            }}
          >
            <Icon size={22} style={{ color: section.color }} />
          </div>
          <div className="text-left">
            <h3 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.15rem',
              fontWeight: 800,
              color: '#f1f5f9',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}>
              {section.title}
            </h3>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              color: '#64748b',
              marginTop: '2px',
            }}>
              {section.items?.length || section.skills?.length || section.langues?.length} éléments
            </p>
          </div>
        </div>
        <div
          className="flex items-center justify-center w-8 h-8 rounded-lg transition-all"
          style={{
            background: isOpen ? `${section.color}15` : 'rgba(255,255,255,0.04)',
            color: isOpen ? section.color : '#475569',
          }}
        >
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      {/* Section content */}
      {isOpen && (
        <div className="px-6 pb-6">
          <div style={{ height: '1px', background: `${section.color}20`, marginBottom: '1.5rem' }} />

          {/* Timeline items (formation, experience, certifications) */}
          {section.items && (
            <div className="space-y-5">
              {section.items.map((item, i) => (
                <div key={i} className="flex gap-4">
                  {/* Timeline dot + line */}
                  <div className="flex flex-col items-center flex-shrink-0 pt-1">
                    <div className="w-3 h-3 rounded-full" style={{
                      background: section.color,
                      boxShadow: `0 0 8px ${section.color}50`,
                    }} />
                    {i < section.items.length - 1 && (
                      <div className="w-px flex-1 mt-1" style={{ background: `${section.color}20`, minHeight: '24px' }} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '11px',
                      fontWeight: 600,
                      color: section.color,
                      letterSpacing: '0.05em',
                    }}>
                      {item.period}
                    </span>
                    <h4 style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#f1f5f9',
                      marginTop: '4px',
                      lineHeight: 1.3,
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#64748b',
                      marginTop: '2px',
                    }}>
                      {item.org}
                    </p>
                    {item.details && (
                      <div className="mt-2 space-y-1">
                        {item.details.map((d, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <span style={{ color: section.color, fontSize: '6px', flexShrink: 0, marginTop: '7px' }}>●</span>
                            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>
                              {d}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills grid */}
          {section.skills && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {section.skills.map((skill) => {
                const SkillIcon = skill.icon
                return (
                  <div key={skill.label} className="p-4 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <SkillIcon size={16} style={{ color: section.color }} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: '#e2e8f0' }}>
                        {skill.label}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-md" style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '11px',
                          fontWeight: 500,
                          background: `${section.color}10`,
                          border: `1px solid ${section.color}25`,
                          color: section.color,
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Langues */}
          {section.langues && (
            <div className="space-y-4">
              {section.langues.map(({ flag, lang, level, pct }) => (
                <div key={lang}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span style={{ fontSize: '1.4rem' }}>{flag}</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: '#e2e8f0' }}>
                        {lang}
                      </span>
                    </div>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: section.color }}>
                      {level}
                    </span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <div className="h-full rounded-full transition-all duration-1000" style={{
                      width: `${pct}%`,
                      background: `linear-gradient(90deg, ${section.color}, ${section.color}80)`,
                      boxShadow: `0 0 8px ${section.color}40`,
                    }} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function CVPage() {
  const [openSections, setOpenSections] = useState(new Set(['formation']))

  const toggleSection = (id) => {
    setOpenSections(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <section className="relative" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h2
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: '#e6ecf8',
              marginBottom: '8px',
            }}
          >
            Mon CV
          </h2>
          <div
            style={{
              width: '128px',
              height: '2px',
              margin: '16px auto',
              background: 'linear-gradient(90deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.45) 24%, rgba(212,175,55,0.85) 50%, rgba(147,51,234,0.55) 76%, rgba(56,189,248,0) 100%)',
            }}
          />
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#94a3b8', maxWidth: '500px', margin: '0 auto' }}>
            <span style={{ color: '#22d3ee', fontWeight: 600 }}>LENGUE TCHOUBIA Dilan Cabrel</span> — Alternant Admin. Systèmes & Réseaux
          </p>
        </div>

        {/* Download & View buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <a
            href="/cv-dilan-lengue.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              fontFamily: "'Inter', sans-serif",
              boxShadow: '0 8px 24px rgba(99,102,241,0.35)',
            }}
          >
            <Download size={18} /> Télécharger le PDF
          </a>
          <a
            href="/cv-dilan-lengue.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#f1f5f9',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <ExternalLink size={16} /> Voir le PDF complet
          </a>
        </div>

        {/* Expandable CV sections */}
        <div className="space-y-4">
          {sections.map(section => (
            <CVSection
              key={section.id}
              section={section}
              isOpen={openSections.has(section.id)}
              onToggle={() => toggleSection(section.id)}
            />
          ))}
        </div>

        {/* Open all / Close all */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            style={{
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.25)',
              color: '#818cf8',
              fontFamily: "'Inter', sans-serif",
            }}
            onClick={() => setOpenSections(new Set(sections.map(s => s.id)))}
          >
            Tout ouvrir
          </button>
          <button
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#94a3b8',
              fontFamily: "'Inter', sans-serif",
            }}
            onClick={() => setOpenSections(new Set())}
          >
            Tout fermer
          </button>
        </div>
      </div>
    </section>
  )
}
