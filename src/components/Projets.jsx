import { useState } from 'react'
import { Code2, BookOpen, FileText, ExternalLink, ChevronDown, ArrowLeft, Server, Wifi, Shield, Activity, Search, HardDrive, Terminal, ShoppingCart } from 'lucide-react'

const projets = [
  {
    id: 1,
    title: 'Infrastructure Active Directory',
    icon: Server,
    date: '2025–2026',
    color: '#818cf8',
    description: 'Installation et configuration d\'un domaine Windows Server complet avec gestion centralisée des utilisateurs, GPO, DNS et DHCP.',
    backDesc: 'Projet infrastructure BTS SIO SISR. Déploiement d\'un domaine Active Directory complet avec contrôleur de domaine, DNS intégré, DHCP et stratégies de groupe.',
    technologies: ['Windows Server', 'AD DS', 'GPO', 'DNS'],
    docs: [
      { label: 'Documentation', url: null },
    ],
  },
  {
    id: 2,
    title: 'Infrastructure Réseau Cisco',
    icon: Wifi,
    date: '2025–2026',
    color: '#22d3ee',
    description: 'Configuration de VLAN sur switch Cisco pour segmenter le réseau et sécuriser les flux inter-services.',
    backDesc: 'Segmentation réseau par VLAN avec routage inter-VLAN (Router-on-a-Stick). Configuration des liens Trunk 802.1Q entre switch et routeur Cisco.',
    technologies: ['Cisco IOS', 'VLAN', '802.1Q', 'TCP/IP'],
    docs: [
      { label: 'Documentation', url: null },
    ],
  },
  {
    id: 3,
    title: 'VPN Sécurisé (OpenVPN)',
    icon: Shield,
    date: '2025',
    color: '#a78bfa',
    description: 'Déploiement d\'un serveur OpenVPN pour connecter des collaborateurs en télétravail via un tunnel chiffré SSL/TLS.',
    backDesc: 'Mise en place d\'un accès distant sécurisé via OpenVPN sur Linux Debian. Gestion PKI complète avec génération de certificats CA, serveur et clients.',
    technologies: ['OpenVPN', 'Linux', 'SSL/TLS', 'PKI'],
    docs: [
      { label: 'Documentation', url: null },
    ],
  },
  {
    id: 4,
    title: 'Supervision Réseau (Nagios)',
    icon: Activity,
    date: '2025',
    color: '#34d399',
    description: 'Installation et configuration de Nagios pour surveiller en temps réel les serveurs et services réseau.',
    backDesc: 'Supervision de l\'infrastructure avec Nagios Core. Configuration des hôtes, services, plugins NRPE et alertes automatiques par email.',
    technologies: ['Nagios', 'Linux', 'SNMP', 'NRPE'],
    docs: [
      { label: 'Documentation', url: null },
    ],
  },
  {
    id: 5,
    title: 'Audit Sécurité (Nessus)',
    icon: Search,
    date: '2025',
    color: '#f87171',
    description: 'Analyse complète des vulnérabilités de l\'infrastructure réseau avec Nessus et rapports CVE.',
    backDesc: 'Scan complet du réseau interne avec Nessus. Génération de rapports de vulnérabilités CVE, classification des risques et recommandations.',
    technologies: ['Nessus', 'CVE', 'Audit', 'Linux'],
    docs: [
      { label: 'Documentation', url: null },
    ],
  },
  {
    id: 6,
    title: 'Gestion de Parc (GLPI)',
    icon: HardDrive,
    date: '2025',
    color: '#fbbf24',
    description: 'Déploiement de GLPI pour l\'inventaire automatisé du parc IT et le ticketing support.',
    backDesc: 'Gestion de parc informatique avec GLPI et FusionInventory. Système de ticketing ITIL, inventaire automatique et gestion du support utilisateur.',
    technologies: ['GLPI', 'Fusion', 'LAMP', 'ITIL'],
    docs: [
      { label: 'Documentation', url: null },
    ],
  },
  {
    id: 7,
    title: 'Serveur Linux Multi-Services',
    icon: Terminal,
    date: '2025',
    color: '#fb923c',
    description: 'Déploiement d\'un serveur Linux hébergeant SSH, FTP et Apache, sécurisé avec iptables.',
    backDesc: 'Installation Debian Server avec services SSH, FTP (vsftpd) et Apache2. Sécurisation par pare-feu iptables et authentification par clé.',
    technologies: ['Debian', 'SSH', 'Apache', 'iptables'],
    docs: [
      { label: 'Documentation', url: null },
    ],
  },
  {
    id: 8,
    title: 'Marketplace Web',
    icon: ShoppingCart,
    date: '2024',
    color: '#f472b6',
    description: 'Développement d\'une marketplace web complète avec authentification et base de données MySQL.',
    backDesc: 'Application web e-commerce avec architecture MVC en PHP. Frontend responsive, base MySQL, système d\'authentification et gestion de compte.',
    technologies: ['PHP', 'MySQL', 'HTML/CSS', 'MVC'],
    docs: [
      { label: 'Documentation', url: null },
    ],
  },
]

const guides = [
  { title: 'Dossier Technique — Active Directory', desc: 'Infrastructure AD DS, GPO, DNS — Windows Server 2025', url: null, color: '#818cf8' },
  { title: 'Dossier Technique — Réseau VLAN', desc: 'Segmentation inter-VLAN avec Cisco IOS — 802.1Q', url: null, color: '#22d3ee' },
  { title: 'Dossier Technique — VPN OpenVPN', desc: 'Accès distant sécurisé, PKI, certificats SSL/TLS', url: null, color: '#a78bfa' },
  { title: 'Dossier Technique — Supervision Nagios', desc: 'Monitoring infrastructure, alertes SNMP/NRPE', url: null, color: '#34d399' },
  { title: 'Rapport de Stage — B&A Conseil', desc: 'Technicien Support & Maintenance — Janv/Fév 2026', url: null, color: '#fbbf24' },
  { title: 'Rapport de Stage — Les Réparateurs Mac & PC', desc: 'Technicien Support Informatique — Mai/Juil 2025', url: null, color: '#fb923c' },
  { title: 'Attestation SecNumacadémie ANSSI', desc: '4 modules validés — Janvier 2026', url: '/attestation-secnumacademie.pdf', color: '#22d3ee' },
]

/* ─── Flip Card Component ─── */
function FlipCard({ item }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="w-full h-full" onClick={() => setFlipped(!flipped)}>
      <div
        className="relative cursor-pointer select-none"
        style={{ height: '21rem', perspective: '1200px' }}
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
            className="absolute inset-0 overflow-hidden backdrop-blur-xl"
            style={{
              backfaceVisibility: 'hidden',
              background: 'rgba(11,16,32,0.62)',
              border: `2px solid ${item.color}40`,
              borderRadius: '16px',
              padding: '20px',
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0"
              style={{ height: '2px', background: item.color, opacity: 0.5, borderRadius: '16px 16px 0 0' }}
            />

            <div className="flex flex-col h-full">
              {/* Icon + Date */}
              <div className="flex items-center justify-between mb-2">
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#c5d3e8',
                  }}
                >
                  {item.date}
                </span>
                {item.icon && (
                  <div
                    className="flex items-center justify-center rounded-lg"
                    style={{
                      width: '36px',
                      height: '36px',
                      background: `${item.color}12`,
                      border: `1px solid ${item.color}30`,
                      color: item.color,
                    }}
                  >
                    <item.icon size={18} />
                  </div>
                )}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Orbitron', system-ui, sans-serif",
                  fontSize: '20px',
                  fontWeight: 800,
                  color: item.color,
                  letterSpacing: '-0.025em',
                  lineHeight: 1.2,
                  marginBottom: '8px',
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#e6ecf8',
                  lineHeight: 1.6,
                  flex: 1,
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
                      background: `${item.color}20`,
                      border: `1px solid ${item.color}30`,
                      color: item.color,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '10px',
                      fontWeight: 600,
                      padding: '4px 8px',
                      borderRadius: '4px',
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
                  fontWeight: 400,
                  color: '#c5d3e8',
                  textAlign: 'center',
                }}
              >
                Cliquer pour voir les détails
              </p>
            </div>
          </div>

          {/* ── BACK ── */}
          <div
            className="absolute inset-0 overflow-hidden backdrop-blur-xl"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: 'rgba(11,16,32,0.62)',
              border: `2px solid ${item.color}`,
              borderRadius: '16px',
              padding: '20px',
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0"
              style={{ height: '2px', background: item.color, opacity: 0.8, borderRadius: '16px 16px 0 0' }}
            />

            <div className="flex flex-col h-full">
              {/* Title + date */}
              <div className="flex items-center justify-between mb-3">
                <h4
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '16px',
                    fontWeight: 700,
                    color: item.color,
                  }}
                >
                  {item.title}
                </h4>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '12px',
                    fontWeight: 400,
                    color: '#c5d3e8',
                  }}
                >
                  {item.date}
                </span>
              </div>

              {/* Back description */}
              <div
                className="flex-1 mb-3"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#e6ecf8',
                  lineHeight: 1.65,
                }}
              >
                {item.backDesc}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {item.technologies.map(tech => (
                  <span
                    key={tech}
                    style={{
                      background: `${item.color}20`,
                      border: `1px solid ${item.color}30`,
                      color: item.color,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '10px',
                      fontWeight: 600,
                      padding: '4px 8px',
                      borderRadius: '4px',
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
                      background: doc.url ? `${item.color}20` : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${doc.url ? `${item.color}4d` : 'rgba(255,255,255,0.08)'}`,
                      borderRadius: '8px',
                      padding: '8px 0',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '12px',
                      fontWeight: 600,
                      color: doc.url ? item.color : '#475569',
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

        {/* Header — exact Sagar style */}
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
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
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
            <div className="text-center mt-4 mb-4">
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
            <div className="flex items-center gap-4 mb-6">
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="flex items-center gap-4 mb-6">
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
              {guides.map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-6 py-4 transition-all"
                  style={{ borderBottom: i < guides.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(59,130,246,0.04)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div className="p-2.5 rounded-xl flex-shrink-0" style={{ background: doc.url ? 'rgba(59,130,246,0.12)' : 'rgba(255,255,255,0.04)', border: `1px solid ${doc.url ? 'rgba(59,130,246,0.25)' : 'rgba(255,255,255,0.08)'}` }}>
                    <FileText size={16} style={{ color: doc.url ? blueColor : '#475569' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold" style={{ color: doc.url ? '#e2e8f0' : '#94a3b8', fontFamily: "'Inter', sans-serif" }}>
                      {doc.title}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: '#475569' }}>{doc.desc}</p>
                  </div>
                  {doc.url ? (
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all hover:opacity-80"
                      style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)', color: blueColor }}
                    >
                      <ExternalLink size={12} /> Voir
                    </a>
                  ) : (
                    <span className="flex-shrink-0 px-4 py-2 rounded-xl text-xs" style={{ background: 'rgba(255,255,255,0.03)', color: '#475569' }}>
                      à venir
                    </span>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  )
}
