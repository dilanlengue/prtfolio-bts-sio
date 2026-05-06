import { useState } from 'react'
import { Code2, BookOpen, FileText, ExternalLink, ChevronDown, ArrowLeft, Server, Wifi, Shield, Activity, Search, HardDrive, Terminal, ShoppingCart, Download, Lock, DatabaseBackup } from 'lucide-react'

const projets = [
  {
    id: 1,
    title: 'Infrastructure Active Directory',
    icon: Server,
    date: '2025–2026',
    domain: 'Système',
    context: 'Scolaire',
    image: '/projects/ad.webp',
    image2: '/projects/ad-2.webp',
    color: '#818cf8',
    description: 'Déploiement complet d\'un domaine Windows Server avec contrôleur de domaine, DNS intégré, DHCP et stratégies de groupe (GPO) pour la gestion centralisée des utilisateurs et postes.',
    backDesc: 'Projet infrastructure BTS SIO SISR. Déploiement d\'un domaine Active Directory complet avec contrôleur de domaine, DNS intégré, DHCP et stratégies de groupe.',
    technologies: ['Windows Server', 'AD DS', 'GPO', 'DNS', 'DHCP'],
    docs: [
      { label: 'Documentation', url: null },
    ],
  },
  {
    id: 2,
    title: 'Infrastructure Réseau Cisco',
    icon: Wifi,
    date: '2025–2026',
    domain: 'Réseau',
    context: 'Scolaire',
    image: '/projects/vlan.webp',
    image2: '/projects/vlan-2.webp',
    color: '#22d3ee',
    description: 'Segmentation d\'un réseau d\'entreprise par VLAN sur switch Cisco avec routage inter-VLAN (Router-on-a-Stick) et liens trunk 802.1Q pour isoler les flux services.',
    backDesc: 'Segmentation réseau par VLAN avec routage inter-VLAN (Router-on-a-Stick). Configuration des liens Trunk 802.1Q entre switch et routeur Cisco.',
    technologies: ['Cisco IOS', 'VLAN', '802.1Q', 'TCP/IP', 'Trunk'],
    docs: [
      { label: 'Documentation', url: null },
    ],
  },
  {
    id: 3,
    title: 'VPN Sécurisé (OpenVPN)',
    icon: Shield,
    date: '2025',
    domain: 'Cybersécurité',
    context: 'Scolaire',
    image: '/projects/vpn.webp',
    image2: '/projects/vpn-2.webp',
    color: '#a78bfa',
    description: 'Déploiement d\'un serveur OpenVPN sur Linux Debian avec gestion PKI complète (CA, certificats serveur et clients) pour un accès distant chiffré SSL/TLS.',
    backDesc: 'Mise en place d\'un accès distant sécurisé via OpenVPN sur Linux Debian. Gestion PKI complète avec génération de certificats CA, serveur et clients.',
    technologies: ['OpenVPN', 'Linux', 'SSL/TLS', 'PKI', 'iptables'],
    docs: [
      { label: 'Documentation', url: null },
    ],
  },
  {
    id: 4,
    title: 'Supervision Réseau (Nagios)',
    icon: Activity,
    date: '2025',
    domain: 'Supervision',
    context: 'Scolaire',
    image: '/projects/nagios.webp',
    image2: '/projects/nagios-2.webp',
    color: '#34d399',
    description: 'Mise en place d\'une supervision proactive de l\'infrastructure avec Nagios Core : surveillance des hôtes, services et seuils, alertes par email via NRPE et SNMP.',
    backDesc: 'Supervision de l\'infrastructure avec Nagios Core. Configuration des hôtes, services, plugins NRPE et alertes automatiques par email.',
    technologies: ['Nagios', 'Linux', 'SNMP', 'NRPE', 'Plugins'],
    docs: [
      { label: 'Documentation', url: null },
    ],
  },
  {
    id: 5,
    title: 'Audit Sécurité (Nessus)',
    icon: Search,
    date: '2025',
    domain: 'Cybersécurité',
    context: 'Scolaire',
    image: '/projects/nessus.webp',
    image2: '/projects/nessus-2.webp',
    color: '#f87171',
    description: 'Audit de vulnérabilités d\'une infrastructure réseau avec Nessus : scan complet, classification CVSS des CVE détectées, rapport hiérarchisé et plan de remédiation.',
    backDesc: 'Scan complet du réseau interne avec Nessus. Génération de rapports de vulnérabilités CVE, classification des risques et recommandations.',
    technologies: ['Nessus', 'CVE', 'CVSS', 'Audit', 'Reporting'],
    docs: [
      { label: 'Documentation', url: null },
    ],
  },
  {
    id: 6,
    title: 'Gestion de Parc (GLPI)',
    icon: HardDrive,
    date: '2025',
    domain: 'Support / ITSM',
    context: 'Scolaire',
    image: '/projects/glpi.webp',
    image2: '/projects/glpi-2.webp',
    color: '#fbbf24',
    description: 'Déploiement d\'une solution ITSM avec GLPI + FusionInventory : inventaire automatique du parc, ticketing ITIL et gestion du support utilisateur.',
    backDesc: 'Gestion de parc informatique avec GLPI et FusionInventory. Système de ticketing ITIL, inventaire automatique et gestion du support utilisateur.',
    technologies: ['GLPI', 'FusionInventory', 'LAMP', 'ITIL'],
    docs: [
      { label: 'Documentation', url: null },
    ],
  },
  {
    id: 7,
    title: 'Serveur Linux Multi-Services',
    icon: Terminal,
    date: '2025',
    domain: 'Système',
    context: 'Scolaire',
    image: '/projects/linux.webp',
    image2: '/projects/linux-2.webp',
    color: '#fb923c',
    description: 'Installation d\'un serveur Debian hébergeant SSH, FTP (vsftpd) et Apache, sécurisé par pare-feu iptables et authentification par clé publique.',
    backDesc: 'Installation Debian Server avec services SSH, FTP (vsftpd) et Apache2. Sécurisation par pare-feu iptables et authentification par clé.',
    technologies: ['Debian', 'SSH', 'Apache', 'iptables', 'vsftpd'],
    docs: [
      { label: 'Documentation', url: null },
    ],
  },
  {
    id: 8,
    title: 'Sauvegarde &amp; PRA',
    icon: DatabaseBackup,
    date: '2025–2026',
    domain: 'Système',
    context: 'Scolaire',
    image: '/projects/backup.webp',
    image2: '/projects/backup-2.webp',
    color: '#06b6d4',
    description: 'Mise en place d\'une stratégie de sauvegarde 3-2-1 sur Linux (rsync + Borg) avec rotation automatique, chiffrement, vérification d\'intégrité et plan de reprise documenté.',
    backDesc: 'Politique de sauvegarde 3-2-1 (3 copies, 2 supports, 1 hors-site) avec rsync, Borg Backup et cron. Tests de restauration mensuels et plan de reprise d\'activité.',
    technologies: ['rsync', 'Borg Backup', 'cron', 'PRA', 'Linux'],
    docs: [
      { label: 'Documentation', url: null },
    ],
  },
  {
    id: 9,
    title: 'Marketplace Web',
    icon: ShoppingCart,
    date: '2024',
    domain: 'Développement',
    context: 'Personnel',
    image: '/projects/marketplace.webp',
    image2: '/projects/marketplace-2.webp',
    color: '#f472b6',
    description: 'Développement d\'une marketplace web en PHP / MySQL avec architecture MVC, authentification, gestion de compte et interface responsive HTML/CSS.',
    backDesc: 'Application web e-commerce avec architecture MVC en PHP. Frontend responsive, base MySQL, système d\'authentification et gestion de compte.',
    technologies: ['PHP', 'MySQL', 'HTML/CSS', 'MVC'],
    docs: [
      { label: 'Documentation', url: null },
    ],
  },
]

const guides = [
  { title: 'Dossier Technique — Active Directory', desc: 'Infrastructure AD DS, GPO, DNS — Windows Server 2025', url: '/dossiers/e5-active-directory.pdf', status: 'in-progress', color: '#818cf8' },
  { title: 'Dossier Technique — Réseau VLAN', desc: 'Segmentation inter-VLAN avec Cisco IOS — 802.1Q', url: '/dossiers/e5-vlan-cisco.pdf', status: 'in-progress', color: '#22d3ee' },
  { title: 'Dossier Technique — VPN OpenVPN', desc: 'Accès distant sécurisé, PKI, certificats SSL/TLS', url: '/dossiers/e5-openvpn.pdf', status: 'planned', color: '#a78bfa' },
  { title: 'Dossier Technique — Supervision Nagios', desc: 'Monitoring infrastructure, alertes SNMP/NRPE', url: '/dossiers/e5-nagios.pdf', status: 'planned', color: '#34d399' },
  { title: 'Rapport de Stage — B&A Conseil', desc: 'Technicien Support & Maintenance — Janv/Fév 2026', url: '/dossiers/rapport-stage-bna.pdf', status: 'in-progress', color: '#fbbf24' },
  { title: 'Rapport de Stage — Les Réparateurs Mac & PC', desc: 'Technicien Support Informatique — Mai/Juil 2025', url: '/dossiers/rapport-stage-reparateurs.pdf', status: 'planned', color: '#fb923c' },
  { title: 'Attestation SecNumacadémie ANSSI', desc: '4 modules validés — Janvier 2026', url: '/attestation-secnumacademie.pdf', status: 'available', color: '#22d3ee' },
]

/* ─── Flip Card Component ─── */
function FlipCard({ item }) {
  const [flipped, setFlipped] = useState(false)

  const ctxBg = item.context === 'Stage'
    ? 'rgba(34,197,94,0.14)'
    : item.context === 'Personnel'
      ? 'rgba(244,114,182,0.14)'
      : 'rgba(99,102,241,0.14)'
  const ctxColor = item.context === 'Stage'
    ? '#34d399'
    : item.context === 'Personnel'
      ? '#f472b6'
      : '#a5b4fc'

  return (
    <div className="w-full h-full" onClick={() => setFlipped(!flipped)}>
      <div
        className="relative cursor-pointer select-none"
        style={{ height: '28rem', perspective: '1200px' }}
      >
        <div
          className="relative w-full h-full transition-all duration-500"
          style={{
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'none',
          }}
        >
          {/* ── FRONT ── */}
          <div
            className="absolute inset-0 overflow-hidden backdrop-blur-xl flex flex-col"
            style={{
              backfaceVisibility: 'hidden',
              background: 'rgba(11,16,32,0.72)',
              border: `1px solid ${item.color}33`,
              borderRadius: '16px',
            }}
          >
            {/* Image banner */}
            <div
              className="relative overflow-hidden"
              style={{
                height: '140px',
                background: `linear-gradient(135deg, ${item.color}22, ${item.color}05)`,
                borderBottom: `1px solid ${item.color}33`,
              }}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={`Visuel projet ${item.title}`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              )}
              {/* Top gradient overlay for legibility */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 40%, rgba(11,16,32,0.55) 100%)`,
                }}
              />
              {/* Domain + Context badges (top-left & top-right) */}
              <div className="absolute top-3 left-3">
                <span
                  style={{
                    background: ctxBg,
                    color: ctxColor,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '4px 9px',
                    borderRadius: '6px',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                >
                  {item.context}
                </span>
              </div>
              <div className="absolute top-3 right-3 flex items-center gap-2">
                <span
                  style={{
                    background: 'rgba(11,16,32,0.7)',
                    color: '#e2e8f0',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    padding: '4px 9px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                >
                  {item.domain}
                </span>
              </div>
              {/* Icon — bottom-right */}
              {item.icon && (
                <div
                  className="absolute bottom-3 right-3 flex items-center justify-center rounded-lg"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: `${item.color}22`,
                    border: `1px solid ${item.color}55`,
                    color: item.color,
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                >
                  <item.icon size={20} />
                </div>
              )}
              {/* Date — bottom-left */}
              <div className="absolute bottom-3 left-3">
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#e2e8f0',
                    letterSpacing: '0.05em',
                    background: 'rgba(11,16,32,0.7)',
                    padding: '3px 8px',
                    borderRadius: '5px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                >
                  {item.date}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-6">
              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Orbitron', system-ui, sans-serif",
                  fontSize: '19px',
                  fontWeight: 800,
                  color: item.color,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.25,
                  marginBottom: '10px',
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14.5px',
                  fontWeight: 400,
                  color: '#e2e8f0',
                  lineHeight: 1.6,
                  flex: 1,
                  marginBottom: '12px',
                }}
              >
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {item.technologies.map(tech => (
                  <span
                    key={tech}
                    style={{
                      background: `${item.color}1a`,
                      border: `1px solid ${item.color}40`,
                      color: item.color,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '4px 9px',
                      borderRadius: '5px',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Click hint */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#94a3b8',
                  textAlign: 'center',
                  marginTop: 'auto',
                }}
              >
                Cliquer pour voir les détails {'→'}
              </p>
            </div>
          </div>

          {/* ── BACK ── */}
          <div
            className="absolute inset-0 overflow-hidden backdrop-blur-xl flex flex-col"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: 'rgba(11,16,32,0.72)',
              border: `1px solid ${item.color}66`,
              borderRadius: '16px',
            }}
          >
            {/* Image2 banner — different perspective */}
            <div
              className="relative overflow-hidden"
              style={{
                height: '110px',
                background: `linear-gradient(135deg, ${item.color}25, ${item.color}05)`,
                borderBottom: `1px solid ${item.color}40`,
              }}
            >
              {item.image2 && (
                <img
                  src={item.image2}
                  alt={`Vue détaillée — ${item.title}`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              )}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 30%, rgba(11,16,32,0.6) 100%)`,
                }}
              />
              <div className="absolute top-2.5 left-2.5">
                <span
                  style={{
                    background: 'rgba(11,16,32,0.7)',
                    color: item.color,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '3px 8px',
                    borderRadius: '5px',
                    border: `1px solid ${item.color}44`,
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                >
                  Vue détaillée
                </span>
              </div>
              <div className="absolute bottom-2.5 right-2.5">
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10.5px',
                    fontWeight: 700,
                    color: '#e2e8f0',
                    letterSpacing: '0.05em',
                    background: 'rgba(11,16,32,0.7)',
                    padding: '3px 7px',
                    borderRadius: '5px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                >
                  {item.date}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-6">
              {/* Title */}
              <h4
                style={{
                  fontFamily: "'Orbitron', system-ui, sans-serif",
                  fontSize: '17px',
                  fontWeight: 800,
                  color: item.color,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.25,
                  marginBottom: '10px',
                }}
              >
                {item.title}
              </h4>

              {/* Back description */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#e2e8f0',
                  lineHeight: 1.6,
                  flex: 1,
                  marginBottom: '12px',
                }}
              >
                {item.backDesc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {item.technologies.map(tech => (
                  <span
                    key={tech}
                    style={{
                      background: `${item.color}1a`,
                      border: `1px solid ${item.color}40`,
                      color: item.color,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '4px 9px',
                      borderRadius: '5px',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Doc links */}
              <div className="space-y-2">
                {item.docs.map((doc, i) => (
                  <a
                    key={i}
                    href={doc.url || '#'}
                    target={doc.url ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="block w-full text-center transition-all"
                    style={{
                      background: doc.url ? `${item.color}22` : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${doc.url ? `${item.color}55` : 'rgba(255,255,255,0.08)'}`,
                      borderRadius: '8px',
                      padding: '8px 0',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '12px',
                      fontWeight: 600,
                      color: doc.url ? item.color : '#64748b',
                    }}
                    onClick={e => { if (!doc.url) e.preventDefault(); e.stopPropagation() }}
                  >
                    {doc.url ? doc.label : `${doc.label} — à venir`}
                  </a>
                ))}
              </div>

              {/* Click hint */}
              <p
                className="mt-3"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '11px',
                  fontWeight: 400,
                  color: 'rgba(148,163,184,0.7)',
                  textAlign: 'center',
                }}
              >
                Cliquer pour retourner
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projets() {
  const [view, setView] = useState(null) // null | 'projets' | 'guides'

  const greenColor = '#10b981'
  const blueColor = '#3b82f6'

  return (
    <section id="projets" className="relative" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header — style propre */}
        <div className="text-center" style={{ marginBottom: '28px' }}>
          <h2
            className="animate-fade-up"
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: '#e6ecf8',
              textTransform: 'none',
            }}
          >
            Mes Projets
          </h2>
          <p
            className="animate-fade-up mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 400,
              color: '#c5d3e8',
              lineHeight: 1.75,
              maxWidth: '580px',
              marginTop: '0.6rem',
            }}
          >
            Projets professionnels, scolaires et personnels — fullstack, sécurité, infrastructure
          </p>
          <div
            style={{
              width: '128px',
              height: '2px',
              margin: '16px auto 0',
              background: 'linear-gradient(90deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.45) 24%, rgba(212,175,55,0.85) 50%, rgba(147,51,234,0.55) 76%, rgba(56,189,248,0) 100%)',
            }}
          />
        </div>

        {/* ─── Selection Cards ─── */}
        {!view && (
          <>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {/* Projets — emerald green */}
              <button
                className="group animate-fade-up relative overflow-hidden text-center transition-all duration-300"
                style={{
                  background: 'rgba(11,16,32,0.62)',
                  border: '2px solid rgba(16,185,129,0.31)',
                  borderRadius: '16px',
                  padding: '40px 24px 36px',
                  cursor: 'pointer',
                }}
                onClick={() => setView('projets')}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)'
                  e.currentTarget.style.borderColor = 'rgba(16,185,129,0.45)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'rgba(16,185,129,0.31)'
                }}
              >
                <div className="absolute top-0 left-0 right-0" style={{ height: '2px', opacity: 0.6, background: greenColor }} />
                <div
                  className="mx-auto mb-5 flex items-center justify-center"
                  style={{ width: '80px', height: '80px', borderRadius: '9999px', background: 'rgba(16,185,129,0.12)', border: '2px solid rgba(16,185,129,0.31)' }}
                >
                  <Code2 size={32} style={{ color: greenColor }} />
                </div>
                <h3 style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '24px', fontWeight: 800, color: greenColor, letterSpacing: '-0.025em', marginBottom: '8px' }}>
                  Projets
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 400, color: '#c5d3e8', lineHeight: 1.6, marginBottom: '16px' }}>
                  Applications web, sites professionnels, outils et projets personnels
                </p>
                <span className="inline-block" style={{ background: `linear-gradient(135deg, ${greenColor}, #059669)`, color: '#fff', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, padding: '6px 16px', borderRadius: '9999px' }}>
                  {projets.length} items
                </span>
              </button>

              {/* Guides — blue */}
              <button
                className="group animate-fade-up relative overflow-hidden text-center transition-all duration-300"
                style={{
                  background: 'rgba(11,16,32,0.62)',
                  border: '2px solid rgba(59,130,246,0.31)',
                  borderRadius: '16px',
                  padding: '40px 24px 36px',
                  cursor: 'pointer',
                }}
                onClick={() => setView('guides')}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)'
                  e.currentTarget.style.borderColor = 'rgba(59,130,246,0.45)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'rgba(59,130,246,0.31)'
                }}
              >
                <div className="absolute top-0 left-0 right-0" style={{ height: '2px', opacity: 0.6, background: blueColor }} />
                <div
                  className="mx-auto mb-5 flex items-center justify-center"
                  style={{ width: '80px', height: '80px', borderRadius: '9999px', background: 'rgba(59,130,246,0.12)', border: '2px solid rgba(59,130,246,0.31)' }}
                >
                  <BookOpen size={32} style={{ color: blueColor }} />
                </div>
                <h3 style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '24px', fontWeight: 800, color: blueColor, letterSpacing: '-0.025em', marginBottom: '8px' }}>
                  Guides & Installations
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 400, color: '#c5d3e8', lineHeight: 1.6, marginBottom: '16px' }}>
                  Tutoriels, rapports de sécurité, guides d'administration et virtualisation
                </p>
                <span className="inline-block" style={{ background: `linear-gradient(135deg, ${blueColor}, #2563eb)`, color: '#fff', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, padding: '6px 16px', borderRadius: '9999px' }}>
                  {guides.length} items
                </span>
              </button>
            </div>

            {/* Hint */}
            <div className="text-center mt-6 mb-8">
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11.5px', fontWeight: 400, color: '#c5d3e8' }}>
                {projets.length + guides.length} projets au total — cliquer sur une carte pour les détails
              </p>
              <div className="flex flex-col items-center gap-1 mt-5">
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 400, color: 'rgba(148,163,184,0.7)' }}>
                  Faites défiler pour découvrir
                </p>
                <ChevronDown size={16} style={{ color: 'rgba(148,163,184,0.7)' }} />
              </div>
            </div>
          </>
        )}

        {/* ─── Projets Grid View ─── */}
        {view === 'projets' && (
          <>
            {/* Back bar */}
            <div className="flex items-center gap-4 mb-8">
              <button
                className="flex items-center gap-2 transition-all"
                style={{
                  background: 'rgba(16,185,129,0.19)',
                  border: '1px solid rgba(16,185,129,0.31)',
                  borderRadius: '12px',
                  padding: '8px 16px',
                  color: '#fff',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
                onClick={() => setView(null)}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(16,185,129,0.3)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(16,185,129,0.19)'}
              >
                <ArrowLeft size={16} /> Retour
              </button>
              <h3 style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '20px', fontWeight: 700, color: greenColor }}>
                Projets
              </h3>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 400, color: '#c5d3e8' }}>
                {projets.length} items
              </span>
            </div>

            {/* 3-column grid with flip cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projets.map(projet => (
                <FlipCard key={projet.id} item={projet} />
              ))}
            </div>
          </>
        )}

        {/* ─── Guides Grid View ─── */}
        {view === 'guides' && (
          <>
            {/* Back bar */}
            <div className="flex items-center gap-4 mb-8">
              <button
                className="flex items-center gap-2 transition-all"
                style={{
                  background: 'rgba(59,130,246,0.19)',
                  border: '1px solid rgba(59,130,246,0.31)',
                  borderRadius: '12px',
                  padding: '8px 16px',
                  color: '#fff',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
                onClick={() => setView(null)}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(59,130,246,0.3)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(59,130,246,0.19)'}
              >
                <ArrowLeft size={16} /> Retour
              </button>
              <h3 style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '20px', fontWeight: 700, color: blueColor }}>
                Guides & Installations
              </h3>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 400, color: '#c5d3e8' }}>
                {guides.length} items
              </span>
            </div>

            {/* Guides list */}
            <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(11,16,32,0.62)', border: '1px solid rgba(59,130,246,0.15)' }}>
              {guides.map((doc, i) => {
                const isReady = doc.status === 'available'
                const statusLabel = isReady ? 'Disponible' : doc.status === 'in-progress' ? 'En cours' : 'Planifié'
                const statusColor = isReady ? '#22c55e' : doc.status === 'in-progress' ? '#fbbf24' : '#94a3b8'
                const statusBg = isReady ? 'rgba(34,197,94,0.12)' : doc.status === 'in-progress' ? 'rgba(251,191,36,0.12)' : 'rgba(148,163,184,0.1)'
                const statusBorder = isReady ? 'rgba(34,197,94,0.4)' : doc.status === 'in-progress' ? 'rgba(251,191,36,0.4)' : 'rgba(148,163,184,0.3)'
                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-6 py-4 transition-all"
                    style={{ borderBottom: i < guides.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(59,130,246,0.04)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <div className="p-2.5 rounded-xl flex-shrink-0" style={{ background: isReady ? `${doc.color}1f` : 'rgba(255,255,255,0.04)', border: `1px solid ${isReady ? `${doc.color}40` : 'rgba(255,255,255,0.08)'}` }}>
                      <FileText size={16} style={{ color: isReady ? doc.color : '#64748b' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold" style={{ color: '#f1f5f9', fontFamily: "'Inter', sans-serif", fontSize: '14px' }}>
                        {doc.title}
                      </p>
                      <p className="mt-0.5" style={{ color: '#94a3b8', fontSize: '12.5px', lineHeight: 1.4 }}>{doc.desc}</p>
                    </div>
                    <span
                      className="hidden md:flex items-center rounded-md flex-shrink-0"
                      style={{
                        background: statusBg,
                        border: `1px solid ${statusBorder}`,
                        color: statusColor,
                        padding: '4px 10px',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '10.5px',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {statusLabel}
                    </span>
                    {isReady ? (
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all hover:-translate-y-0.5"
                        style={{ background: `${doc.color}22`, border: `1px solid ${doc.color}55`, color: doc.color }}
                      >
                        <Download size={12} /> PDF
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 flex-shrink-0 px-4 py-2 rounded-xl text-xs" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: '#64748b' }}>
                        <Lock size={11} /> Bientôt
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          </>
        )}

      </div>
    </section>
  )
}
