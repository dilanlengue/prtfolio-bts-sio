import { useState } from 'react'
import { Download, ExternalLink, Eye, GraduationCap, Briefcase, Award, Code2, Globe, ChevronDown, ChevronUp, Shield, Server, Wifi, Terminal, Monitor, Activity, FileText } from 'lucide-react'

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
          'Installation et configuration de 250 postes au Lycée de Nyalla',
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
      { icon: Shield, label: 'Cybersécurité', tags: ['OpenVPN', 'Nessus', 'Kali Linux', 'iptables', 'OWASP', 'SSL/TLS'] },
      { icon: Wifi, label: 'Réseaux', tags: ['Cisco IOS', 'VLAN 802.1Q', 'TCP/IP', 'Wireshark', 'pfSense'] },
      { icon: Server, label: 'Systèmes', tags: ['Windows Server', 'Active Directory', 'GPO', 'DNS/DHCP', 'Linux Debian'] },
      { icon: Activity, label: 'Supervision', tags: ['Wireshark', 'GLPI', 'Zabbix', 'SNMP'] },
      { icon: Monitor, label: 'Virtualisation', tags: ['Proxmox', 'VMware ESXi', 'VirtualBox', 'Hyper-V'] },
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
        details: ['4 modules validés — Panorama de la SSI, Authentification, Sécurité sur Internet, Sécurité du poste de travail'],
      },
      {
        period: '2026',
        title: 'Introduction to Cybersecurity',
        org: 'Cisco Networking Academy',
        details: ['Fondamentaux cybersécurité, Menaces & vulnérabilités, Protection des données, Sécurité des réseaux'],
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
      { flag: '🇫🇷', lang: 'Français', level: 'C2 — Courant', pct: 95 },
      { flag: '🇬🇧', lang: 'Anglais', level: 'Bilingue', pct: 90 },
    ],
  },
]

function CVSection({ section, isOpen, onToggle }) {
  const SectionIcon = section.icon

  return (
    <div
      className="card-holo rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: 'rgba(10,15,30,0.85)',
        border: `1px solid ${isOpen ? `${section.color}40` : 'rgba(255,255,255,0.06)'}`,
        boxShadow: isOpen ? `0 8px 32px ${section.color}08` : 'none',
      }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 sm:px-8 sm:py-6 transition-all duration-200"
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
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `${section.color}12`,
              border: `1px solid ${section.color}30`,
            }}
          >
            <SectionIcon size={20} style={{ color: section.color }} />
          </div>
          <div className="text-left">
            <h3 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              fontWeight: 800,
              color: '#f1f5f9',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
            }}>
              {section.title}
            </h3>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: '#475569',
              marginTop: '3px',
              letterSpacing: '0.04em',
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

      {isOpen && (
        <div className="px-6 pb-6 sm:px-8 sm:pb-8">
          <div style={{ height: '1px', background: `${section.color}20`, marginBottom: '2.2rem' }} />

          {section.items && (
            <div className="space-y-7">
              {section.items.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center flex-shrink-0 pt-1.5">
                    <div className="w-3 h-3 rounded-full" style={{
                      background: section.color,
                      boxShadow: `0 0 8px ${section.color}50`,
                    }} />
                    {i < section.items.length - 1 && (
                      <div className="w-px flex-1 mt-2" style={{ background: `${section.color}20`, minHeight: '28px' }} />
                    )}
                  </div>
                  <div className="flex-1 pb-1">
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '11px',
                      fontWeight: 600,
                      color: section.color,
                      letterSpacing: '0.06em',
                    }}>
                      {item.period}
                    </span>
                    <h4 style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#f1f5f9',
                      marginTop: '5px',
                      lineHeight: 1.35,
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#64748b',
                      marginTop: '3px',
                    }}>
                      {item.org}
                    </p>
                    {item.details && (
                      <div className="mt-3 space-y-1.5">
                        {item.details.map((d, j) => (
                          <div key={j} className="flex items-start gap-2.5">
                            <span style={{ color: section.color, fontSize: '5px', flexShrink: 0, marginTop: '8px' }}>●</span>
                            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13.5px', color: '#94a3b8', lineHeight: 1.65 }}>
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

          {section.skills && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {section.skills.map((skill) => {
                const SkillIcon = skill.icon
                return (
                  <div key={skill.label} className="p-4 sm:p-5 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <SkillIcon size={16} style={{ color: section.color }} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13.5px', fontWeight: 700, color: '#e2e8f0' }}>
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

          {section.langues && (
            <div className="space-y-5">
              {section.langues.map(({ flag, lang, level, pct }) => (
                <div key={lang}>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-3">
                      <span style={{ fontSize: '1.3rem' }}>{flag}</span>
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
  const [openSections, setOpenSections] = useState(new Set(['formation', 'experience']))
  const [showPreview, setShowPreview] = useState(false)

  const toggleSection = (id) => {
    setOpenSections(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <section className="relative dots-bg" style={{ paddingTop: '10rem', paddingBottom: '12rem' }}>
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ═══ HEADER ═══ */}
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <div style={{ marginBottom: '1.8rem' }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px', fontWeight: 700,
              letterSpacing: '0.2em', color: '#22d3ee',
              textTransform: 'uppercase',
              padding: '6px 18px',
              background: 'rgba(34,211,238,0.08)',
              border: '1px solid rgba(34,211,238,0.2)',
              borderRadius: '99px',
            }}>
              Curriculum Vitae
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #e6ecf8 0%, #818cf8 50%, #22d3ee 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Mon CV
          </h2>
          <div
            style={{
              width: '80px',
              height: '3px',
              margin: '0 auto 2rem',
              background: 'linear-gradient(90deg, #6366f1, #22d3ee)',
              borderRadius: '99px',
            }}
          />
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            color: '#94a3b8',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            <span style={{ color: '#f1f5f9', fontWeight: 600 }}>LENGUE TCHOUBIA Dilan Cabrel</span>
            <br />
            Alternant Cybersécurité & Administration Réseaux
          </p>
        </div>

        {/* ═══ BOUTONS D'ACTION ═══ */}
        <div
          className="rounded-2xl"
          style={{
            background: 'rgba(10,15,30,0.6)',
            border: '1px solid rgba(99,102,241,0.15)',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            marginBottom: '5rem',
          }}
        >
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/cv-dilan-lengue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                fontFamily: "'Inter', sans-serif",
                boxShadow: '0 8px 24px rgba(99,102,241,0.35)',
                letterSpacing: '0.02em',
              }}
            >
              <Download size={18} />
              Télécharger le PDF
            </a>

            <a
              href="/cv-dilan-lengue.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'rgba(34,211,238,0.08)',
                border: '1px solid rgba(34,211,238,0.25)',
                color: '#22d3ee',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '0.02em',
              }}
            >
              <ExternalLink size={16} />
              Ouvrir en plein écran
            </a>

            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: showPreview ? 'rgba(0,255,136,0.1)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${showPreview ? 'rgba(0,255,136,0.3)' : 'rgba(255,255,255,0.1)'}`,
                color: showPreview ? '#00ff88' : '#94a3b8',
                fontFamily: "'Inter', sans-serif",
                cursor: 'pointer',
                letterSpacing: '0.02em',
              }}
            >
              <Eye size={16} />
              {showPreview ? 'Masquer l\'aperçu' : 'Aperçu rapide'}
            </button>
          </div>
        </div>

        {/* ═══ APERCU IFRAME ═══ */}
        {showPreview && (
          <div
            className="rounded-2xl overflow-hidden animate-fade-up"
            style={{
              marginBottom: '5rem',
              border: '1px solid rgba(34,211,238,0.2)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.4), 0 0 30px rgba(34,211,238,0.05)',
            }}
          >
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{
                background: 'rgba(10,15,30,0.95)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="flex items-center gap-3">
                <FileText size={14} style={{ color: '#22d3ee' }} />
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  color: '#64748b',
                  letterSpacing: '0.08em',
                }}>
                  CV_LENGUE_DILAN.html
                </span>
              </div>
              <a
                href="/cv-dilan-lengue.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#22d3ee',
                  textDecoration: 'none',
                }}
              >
                Ouvrir <ExternalLink size={11} />
              </a>
            </div>
            <iframe
              src="/cv-dilan-lengue.html"
              title="Aperçu du CV"
              style={{
                width: '100%',
                height: '700px',
                border: 'none',
                background: '#ffffff',
              }}
            />
          </div>
        )}

        {/* ═══ SECTIONS DÉTAILLÉES ═══ */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="flex items-center gap-4 mb-8">
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3))' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              fontWeight: 700,
              color: '#818cf8',
              letterSpacing: '0.2em',
              padding: '5px 14px',
              background: 'rgba(99,102,241,0.06)',
              border: '1px solid rgba(99,102,241,0.15)',
              borderRadius: '8px',
            }}>
              DÉTAILS
            </span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(99,102,241,0.3), transparent)' }} />
          </div>
        </div>

        <div className="space-y-5">
          {sections.map(section => (
            <CVSection
              key={section.id}
              section={section}
              isOpen={openSections.has(section.id)}
              onToggle={() => toggleSection(section.id)}
            />
          ))}
        </div>

        {/* ═══ CONTROLES ═══ */}
        <div className="flex justify-center gap-4 mt-14">
          <button
            className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.25)',
              color: '#818cf8',
              fontFamily: "'Inter', sans-serif",
              cursor: 'pointer',
            }}
            onClick={() => setOpenSections(new Set(sections.map(s => s.id)))}
          >
            Tout ouvrir
          </button>
          <button
            className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#94a3b8',
              fontFamily: "'Inter', sans-serif",
              cursor: 'pointer',
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
