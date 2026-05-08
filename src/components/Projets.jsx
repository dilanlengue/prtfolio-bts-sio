import { useState } from 'react'
import { Server, Wifi, Shield, HardDrive, Lock, Settings, X } from 'lucide-react'

const projets = [
  {
    id: 1,
    title: 'Cisco — Infrastructure réseau segmentée',
    icon: Wifi,
    color: '#06b6d4',
    image: '/projects/vlan.webp',
    description: 'Segmentation VLAN, routage inter-VLAN (Router-on-a-Stick) via Cisco Packet Tracer.',
    fullDesc: 'Segmentation d\'un réseau d\'entreprise par VLAN sur switch Cisco avec routage inter-VLAN (Router-on-a-Stick) et liens trunk 802.1Q pour isoler les flux services.',
    technologies: ['Cisco IOS', 'VLAN', '802.1Q', 'TCP/IP', 'Trunk'],
  },
  {
    id: 2,
    title: 'Active Directory',
    icon: Server,
    color: '#818cf8',
    image: '/projects/ad.webp',
    description: 'Déploiement d\'un contrôleur de domaine AD DS & DNS intégré en environnement Windows Server.',
    fullDesc: 'Déploiement complet d\'un domaine Windows Server avec contrôleur de domaine, DNS intégré, DHCP et stratégies de groupe (GPO) pour la gestion centralisée des utilisateurs et postes.',
    technologies: ['Windows Server', 'AD DS', 'DNS', 'DHCP'],
  },
  {
    id: 3,
    title: 'Protocole DHCP — Windows Server',
    icon: Server,
    color: '#3b82f6',
    image: '/projects/ad.webp',
    description: 'Installation et configuration du rôle DHCP sur Windows Server, gestion des étendues et réservations.',
    fullDesc: 'Mise en place du service DHCP sur Windows Server : création d\'étendues, options de serveur, réservations d\'adresses IP, baux et exclusions pour l\'attribution automatique des adresses réseau.',
    technologies: ['Windows Server', 'DHCP', 'TCP/IP', 'DNS'],
  },
  {
    id: 4,
    title: 'Mise en place de GLPI',
    icon: HardDrive,
    color: '#fbbf24',
    image: '/projects/glpi.webp',
    description: 'Déploiement GLPI + FusionInventory : gestion de parc, ticketing et inventaire automatique.',
    fullDesc: 'Déploiement d\'une solution ITSM avec GLPI + FusionInventory : inventaire automatique du parc, ticketing ITIL et gestion du support utilisateur.',
    technologies: ['GLPI', 'FusionInventory', 'LAMP', 'ITIL'],
  },
  {
    id: 5,
    title: 'Formulaires d\'Authentification',
    icon: Lock,
    color: '#10b981',
    image: '/projects/marketplace.webp',
    description: 'Création de formulaires d\'authentification sécurisés (inscription & connexion) en PHP/MySQL.',
    fullDesc: 'Développement de formulaires d\'authentification avec gestion des sessions, hachage des mots de passe, validation côté serveur et protection contre les injections SQL.',
    technologies: ['PHP', 'MySQL', 'HTML/CSS', 'Sessions'],
  },
  {
    id: 6,
    title: 'GPO — Group Policy Object',
    icon: Settings,
    color: '#f472b6',
    image: '/projects/ad.webp',
    description: 'Configuration de stratégies de groupe pour sécuriser et administrer les postes du domaine AD.',
    fullDesc: 'Création et déploiement de GPO dans Active Directory : restriction des accès, déploiement de logiciels, configuration du pare-feu Windows, politique de mots de passe et audit de sécurité.',
    technologies: ['GPO', 'Active Directory', 'Windows Server', 'Sécurité'],
  },
]

function ProjetCard({ projet, onClick }) {
  return (
    <div
      className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        background: '#ffffff',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      }}
      onClick={() => onClick(projet)}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'
      }}
    >
      {/* Image */}
      <div style={{
        height: '160px', overflow: 'hidden', position: 'relative',
        background: `linear-gradient(135deg, ${projet.color}30, ${projet.color}10)`,
      }}>
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
          background: `linear-gradient(180deg, ${projet.color}20 0%, ${projet.color}60 100%)`,
        }} />
        <div style={{
          position: 'absolute', bottom: '12px', right: '12px',
          width: '36px', height: '36px', borderRadius: '10px',
          background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <projet.icon size={18} style={{ color: '#fff' }} />
        </div>
      </div>

      {/* Contenu */}
      <div style={{ padding: '1.2rem 1.4rem 1.4rem' }}>
        <h3 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '15px', fontWeight: 700, color: '#1e293b',
          lineHeight: 1.3, marginBottom: '0.5rem',
        }}>
          {projet.title}
        </h3>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '13px', color: '#64748b', lineHeight: 1.6,
        }}>
          {projet.description}
        </p>
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
        background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '2rem',
      }}
      onClick={onClose}
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: '#ffffff', maxWidth: '580px', width: '100%',
          boxShadow: '0 24px 48px rgba(0,0,0,0.15)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Image */}
        <div style={{
          height: '200px', overflow: 'hidden', position: 'relative',
          background: `linear-gradient(135deg, ${projet.color}30, ${projet.color}10)`,
        }}>
          {projet.image && (
            <img src={projet.image} alt={projet.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          )}
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(180deg, transparent 30%, ${projet.color}80 100%)`,
          }} />
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '12px', right: '12px',
              width: '32px', height: '32px', borderRadius: '50%',
              background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)',
              border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <X size={16} style={{ color: '#fff' }} />
          </button>
          <div style={{
            position: 'absolute', bottom: '16px', left: '20px',
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '12px',
              background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <projet.icon size={20} style={{ color: '#fff' }} />
            </div>
            <h3 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.2rem', fontWeight: 800, color: '#fff',
              textShadow: '0 1px 4px rgba(0,0,0,0.3)',
            }}>
              {projet.title}
            </h3>
          </div>
        </div>

        {/* Contenu */}
        <div style={{ padding: '1.5rem 1.8rem 2rem' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px', color: '#475569', lineHeight: 1.8,
            marginBottom: '1.2rem',
          }}>
            {projet.fullDesc}
          </p>

          <div className="flex flex-wrap gap-2">
            {projet.technologies.map(tech => (
              <span key={tech} style={{
                background: `${projet.color}15`,
                border: `1px solid ${projet.color}30`,
                color: projet.color,
                fontSize: '12px', fontWeight: 600,
                padding: '4px 12px', borderRadius: '8px',
              }}>
                {tech}
              </span>
            ))}
          </div>
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
        <div className="text-center animate-fade-up" style={{ marginBottom: '3.5rem' }}>
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
            lineHeight: 1.7, maxWidth: '520px',
          }}>
            Projets réalisés durant ma formation BTS SIO option SISR
          </p>
        </div>

        {/* Grille 3x2 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projets.map(projet => (
            <ProjetCard key={projet.id} projet={projet} onClick={setSelected} />
          ))}
        </div>

      </div>

      {/* Modal */}
      <ProjetModal projet={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
