import { useState } from 'react'
import { X, FileText, Lock } from 'lucide-react'

const projets = [
  {
    id: 1,
    title: 'Infrastructure Réseau VLAN',
    subtitle: 'Cisco Packet Tracer',
    logo: '/logos/cisco.svg',
    color: '#049FD9',
    image: '/projects/vlan.webp',
    badge: 'E5',
    badgeColor: '#a855f3',
    description: 'Segmentation VLAN et routage inter-VLAN via Router-on-a-Stick avec liens trunk 802.1Q.',
    fullDesc: "Segmentation d'un réseau d'entreprise par VLAN sur switch Cisco avec routage inter-VLAN (Router-on-a-Stick) et liens trunk 802.1Q pour isoler les flux services.",
    technologies: ['Cisco IOS', 'VLAN', '802.1Q', 'TCP/IP', 'Trunk'],
    docPdf: null,
  },
  {
    id: 2,
    title: 'Active Directory',
    subtitle: 'Windows Server 2022',
    logo: '/logos/activedirectory.svg',
    color: '#00BEF2',
    image: '/projects/ad.webp',
    badge: 'E5',
    badgeColor: '#a855f3',
    description: "Déploiement d'un contrôleur de domaine AD DS & DNS intégré en environnement Windows Server.",
    fullDesc: "Déploiement complet d'un domaine Windows Server avec contrôleur de domaine, DNS intégré, DHCP et stratégies de groupe (GPO) pour la gestion centralisée des utilisateurs et postes.",
    technologies: ['Windows Server', 'AD DS', 'DNS', 'DHCP'],
    docPdf: null,
  },
  {
    id: 3,
    title: 'Serveur DHCP',
    subtitle: 'Windows Server',
    logo: '/logos/windows.svg',
    color: '#0078D4',
    image: '/projects/ad.webp',
    badge: 'E5',
    badgeColor: '#a855f3',
    description: "Configuration du rôle DHCP — étendues, réservations et options de serveur.",
    fullDesc: "Mise en place du service DHCP sur Windows Server : création d'étendues, options de serveur, réservations d'adresses IP, baux et exclusions pour l'attribution automatique des adresses réseau.",
    technologies: ['Windows Server', 'DHCP', 'TCP/IP', 'DNS'],
    docPdf: null,
  },
  {
    id: 4,
    title: 'GLPI & FusionInventory',
    subtitle: 'Gestion de parc ITSM',
    logo: '/logos/glpi.svg',
    color: '#8B5CF6',
    image: '/projects/glpi.webp',
    badge: 'E4',
    badgeColor: '#22d3ee',
    description: "Déploiement GLPI + FusionInventory : gestion de parc, ticketing et inventaire automatique.",
    fullDesc: "Déploiement d'une solution ITSM avec GLPI + FusionInventory : inventaire automatique du parc, ticketing ITIL et gestion du support utilisateur.",
    technologies: ['GLPI', 'FusionInventory', 'LAMP', 'ITIL'],
    docPdf: null,
  },
  {
    id: 5,
    title: 'Authentification Sécurisée',
    subtitle: 'PHP & MySQL',
    logo: null,
    color: '#10b981',
    image: '/projects/marketplace.webp',
    badge: 'E4',
    badgeColor: '#22d3ee',
    description: "Formulaires d'authentification sécurisés avec sessions PHP et protection SQL.",
    fullDesc: "Développement de formulaires d'authentification avec gestion des sessions, hachage des mots de passe, validation côté serveur et protection contre les injections SQL.",
    technologies: ['PHP', 'MySQL', 'HTML/CSS', 'Sessions'],
    docPdf: null,
  },
  {
    id: 6,
    title: 'GPO — Stratégies de groupe',
    subtitle: 'Active Directory',
    logo: '/logos/gpo.svg',
    color: '#3B82F6',
    image: '/projects/ad.webp',
    badge: 'E5',
    badgeColor: '#a855f3',
    description: "Configuration de GPO pour sécuriser et administrer les postes du domaine AD.",
    fullDesc: "Création et déploiement de GPO dans Active Directory : restriction des accès, déploiement de logiciels, configuration du pare-feu Windows, politique de mots de passe et audit de sécurité.",
    technologies: ['GPO', 'Active Directory', 'Windows Server', 'Sécurité'],
    docPdf: null,
  },
]

function ProjetCard({ projet, onClick }) {
  return (
    <div
      className="card-holo rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        background: 'rgba(11,16,32,0.75)',
        border: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={() => onClick(projet)}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.borderColor = `${projet.color}40`
        e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.4), 0 0 30px ${projet.color}15`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Image */}
      <div style={{ height: '170px', overflow: 'hidden', position: 'relative' }}>
        {projet.image && (
          <img
            src={projet.image}
            alt={projet.title}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
        )}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%)',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '3px', background: projet.color,
        }} />
        {projet.badge && (
          <span style={{
            position: 'absolute', top: '10px', right: '10px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px', fontWeight: 800,
            padding: '4px 10px', borderRadius: '6px',
            background: `${projet.badgeColor}25`,
            color: projet.badgeColor,
            backdropFilter: 'blur(8px)',
            zIndex: 3,
          }}>
            {projet.badge}
          </span>
        )}
      </div>

      {/* Logo badge */}
      <div style={{
        display: 'flex', justifyContent: 'center',
        marginTop: '-28px', position: 'relative', zIndex: 2,
      }}>
        <div style={{
          width: '56px', height: '56px', borderRadius: '16px',
          background: 'rgba(11,16,32,0.95)',
          boxShadow: `0 4px 16px rgba(0,0,0,0.3), 0 0 20px ${projet.color}10`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: `2px solid ${projet.color}30`,
          overflow: 'hidden',
        }}>
          {projet.logo ? (
            <img src={projet.logo} alt="" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
          ) : (
            <Lock size={24} style={{ color: projet.color }} />
          )}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '0.7rem 1.4rem 1.4rem', textAlign: 'center' }}>
        <h3 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '15px', fontWeight: 700, color: '#f1f5f9',
          lineHeight: 1.3, marginBottom: '3px',
        }}>
          {projet.title}
        </h3>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px', fontWeight: 600, color: projet.color,
          textTransform: 'uppercase', letterSpacing: '0.05em',
          marginBottom: '0.7rem',
        }}>
          {projet.subtitle}
        </p>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '13px', color: '#64748b', lineHeight: 1.6,
          marginBottom: '1rem',
        }}>
          {projet.description}
        </p>
        <div className="flex flex-wrap justify-center gap-1.5">
          {projet.technologies.slice(0, 4).map(tech => (
            <span key={tech} style={{
              background: `${projet.color}10`,
              color: projet.color,
              fontSize: '11px', fontWeight: 600,
              padding: '3px 10px', borderRadius: '6px',
              border: `1px solid ${projet.color}20`,
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjetModal({ projet, onClose }) {
  if (!projet) return null

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '2rem',
      }}
      onClick={onClose}
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(11,16,32,0.95)', maxWidth: '600px', width: '100%',
          boxShadow: '0 24px 48px rgba(0,0,0,0.5), 0 0 1px rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.08)',
          maxHeight: '90vh', overflowY: 'auto',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          background: `linear-gradient(135deg, #0f172a 0%, #1e293b 50%, ${projet.color}30 100%)`,
          padding: '2rem',
          position: 'relative',
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '16px', right: '16px',
              width: '36px', height: '36px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <X size={16} style={{ color: '#fff' }} />
          </button>
          <div className="flex items-center gap-4">
            <div style={{
              width: '56px', height: '56px', borderRadius: '16px',
              background: 'rgba(255,255,255,0.08)',
              border: `1px solid ${projet.color}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, overflow: 'hidden',
            }}>
              {projet.logo ? (
                <img src={projet.logo} alt="" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
              ) : (
                <Lock size={24} style={{ color: '#fff' }} />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 style={{
                  fontFamily: "'Orbitron', system-ui, sans-serif",
                  fontSize: '1.15rem', fontWeight: 800, color: '#fff',
                }}>
                  {projet.title}
                </h3>
              </div>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px', fontWeight: 600, color: projet.color,
              }}>
                {projet.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Screenshot */}
        {projet.image && (
          <div style={{ height: '200px', overflow: 'hidden' }}>
            <img src={projet.image} alt={projet.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}

        {/* Content */}
        <div style={{ padding: '1.5rem 2rem 2rem' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px', color: '#cbd5e1', lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}>
            {projet.fullDesc}
          </p>

          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px', fontWeight: 700, color: '#94a3b8',
            textTransform: 'uppercase', letterSpacing: '0.1em',
            marginBottom: '0.6rem',
          }}>
            Technologies
          </p>
          <div className="flex flex-wrap gap-2" style={{ marginBottom: '1.5rem' }}>
            {projet.technologies.map(tech => (
              <span key={tech} style={{
                background: `${projet.color}10`,
                border: `1px solid ${projet.color}25`,
                color: projet.color,
                fontSize: '12px', fontWeight: 600,
                padding: '5px 14px', borderRadius: '8px',
              }}>
                {tech}
              </span>
            ))}
          </div>

          {projet.docPdf && (
            <a
              href={projet.docPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl transition-all duration-200"
              style={{
                background: projet.color, color: '#ffffff',
                fontSize: '14px', fontWeight: 700,
                textDecoration: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <FileText size={16} />
              Voir la documentation
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projets() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projets" className="relative" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center animate-fade-up" style={{ marginBottom: '4.5rem' }}>
          <div style={{ marginBottom: '1.2rem' }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px', fontWeight: 700,
              letterSpacing: '0.2em', color: '#06b6d4',
              textTransform: 'uppercase',
              padding: '6px 18px',
              background: 'rgba(6,182,212,0.08)',
              border: '1px solid rgba(6,182,212,0.2)',
              borderRadius: '99px',
            }}>
              Réalisations
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #06b6d4 40%, #8b5cf6 70%, #f472b6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Mes Projets
          </h2>
          <div style={{
            width: '80px', height: '3px', margin: '0 auto 1.2rem',
            background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #f472b6)',
            borderRadius: '99px',
          }} />
          <p className="mx-auto" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px', fontWeight: 500, color: '#94a3b8',
            lineHeight: 1.7, maxWidth: '560px',
          }}>
            Projets BTS SIO option SISR
          </p>

        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 stagger-grid">
          {projets.map(projet => (
            <ProjetCard key={projet.id} projet={projet} onClick={setSelected} />
          ))}
        </div>

      </div>

      <ProjetModal projet={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
