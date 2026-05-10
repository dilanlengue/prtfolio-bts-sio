import { Server, Shield, Activity, Network, Download, Mail, ExternalLink, Sparkles } from 'lucide-react'

const categories = [
  {
    title: 'Support & Mise à disposition des services informatiques',
    icon: Server,
    color: '#818cf8',
    tools: [
      { name: 'Windows Server', desc: 'Administration et gestion de serveurs Windows Server 2022/2025', color: '#0078D4', logo: '/logos/windows.png', url: 'https://www.microsoft.com/fr-fr/windows-server' },
      { name: 'Windows 10/11', desc: 'Déploiement, configuration et maintenance des postes clients', color: '#0078D4', logo: '/logos/windows.png', url: 'https://www.microsoft.com/fr-fr/windows' },
      { name: 'Linux Debian', desc: 'Installation et administration de serveurs Linux Debian 12', color: '#A81D33', logo: '/logos/debian.png', url: 'https://www.debian.org/' },
      { name: 'GLPI', desc: 'Gestion de parc informatique et ticketing helpdesk', color: '#A78BFA', logo: '/logos/glpi.svg', url: 'https://glpi-project.org/' },
      { name: 'Active Directory', desc: 'Gestion des utilisateurs, groupes et droits d\'accès centralisée', color: '#0078D4', logo: '/logos/activedirectory.svg', url: 'https://learn.microsoft.com/fr-fr/windows-server/identity/ad-ds/' },
      { name: 'GPO', desc: 'Configuration et déploiement de stratégies de groupe', color: '#2563EB', logo: '/logos/gpo.svg', url: 'https://learn.microsoft.com/fr-fr/windows-server/identity/ad-ds/' },
    ],
  },
  {
    title: 'Administration des systèmes et des réseaux',
    icon: Network,
    color: '#22d3ee',
    tools: [
      { name: 'Proxmox', desc: 'Création et gestion de machines virtuelles', color: '#E57000', logo: '/logos/proxmox.png', url: 'https://www.proxmox.com/' },
      { name: 'VirtualBox', desc: 'Création et gestion de machines virtuelles', color: '#183A61', logo: '/logos/virtualbox.png', url: 'https://www.virtualbox.org/' },
      { name: 'Cisco IOS', desc: 'Configuration de routeurs et switches Cisco', color: '#049FD9', logo: '/logos/cisco.svg', url: 'https://www.cisco.com/' },
      { name: 'DNS / DHCP', desc: 'Configuration et gestion des services réseau', color: '#0891B2', logo: '/logos/dns.svg', url: 'https://learn.microsoft.com/fr-fr/windows-server/networking/dns/dns-top' },
      { name: 'pfSense', desc: 'Configuration de pare-feu et routage réseau', color: '#e2e8f0', logo: '/logos/pfsense.svg', url: 'https://www.pfsense.org/' },
      { name: 'VMware', desc: 'Création et gestion de machines virtuelles', color: '#607078', logo: '/logos/vmware.png', url: 'https://www.vmware.com/' },
    ],
  },
  {
    title: 'Cybersécurité des services informatiques',
    icon: Shield,
    color: '#fb7185',
    tools: [
      { name: 'Wireshark', desc: 'Analyse du trafic réseau et détection d\'anomalies', color: '#4FC3F7', logo: '/logos/wireshark.svg', url: 'https://www.wireshark.org/' },
      { name: 'Kali Linux', desc: 'Application des bonnes pratiques de cybersécurité et tests de pénétration', color: '#557C94', logo: '/logos/kalilinux.png', url: 'https://www.kali.org/' },
      { name: 'Nessus', desc: 'Audit de vulnérabilités et sécurisation des infrastructures', color: '#22D3EE', logo: '/logos/nessus.svg', url: 'https://www.tenable.com/products/nessus' },
      { name: 'OpenVPN', desc: 'Mise en place de tunnels VPN et sécurisation des échanges', color: '#EA7E20', logo: '/logos/openvpn.png', url: 'https://openvpn.net/' },
      { name: 'Pare-feu', desc: 'Vérification et configuration des règles de pare-feu (iptables)', color: '#EF4444', logo: '/logos/firewall.svg', url: 'https://netfilter.org/' },
    ],
  },
  {
    title: 'Supervision et haute disponibilité',
    icon: Activity,
    color: '#34d399',
    tools: [
      { name: 'Nagios', desc: 'Supervision et maintenance des infrastructures informatiques', color: '#4ADE80', logo: '/logos/nagios.svg', url: 'https://www.nagios.org/' },
      { name: 'SNMP', desc: 'Protocole de supervision des équipements réseau', color: '#10B981', logo: '/logos/snmp.svg', url: 'https://fr.wikipedia.org/wiki/Simple_Network_Management_Protocol' },
      { name: 'NRPE', desc: 'Exécution de plugins Nagios à distance', color: '#34D399', logo: '/logos/nrpe.svg', url: 'https://github.com/NagiosEnterprises/nrpe' },
    ],
  },
]

export default function Competences() {
  return (
    <section id="competences" className="py-32 md:py-40 relative dots-bg">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="animate-fade-up text-center mb-24">
          <h2 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: 'clamp(2rem, 5vw, 2.8rem)',
            fontWeight: 900,
            letterSpacing: '0.04em',
            background: 'linear-gradient(135deg, #818cf8, #22d3ee, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1.2rem',
          }}>
            Comp{'é'}tences
          </h2>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
            fontSize: '17px',
            fontWeight: 400,
            color: '#94a3b8',
            lineHeight: 1.7,
            maxWidth: '620px',
            margin: '0 auto',
          }}>
            Domaines de ma{'î'}trise, outils et savoir-faire acquis durant ma formation BTS SIO.
          </p>

        </div>

        {/* Catégories */}
        {categories.map((cat, catIdx) => {
          const CatIcon = cat.icon
          return (
            <div key={catIdx} className="animate-fade-up" style={{ marginBottom: catIdx < categories.length - 1 ? '4.5rem' : '3rem' }}>

              {/* Titre catégorie */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center rounded-xl flex-shrink-0" style={{
                  width: '44px', height: '44px',
                  background: `${cat.color}12`,
                  border: `1px solid ${cat.color}30`,
                  boxShadow: `0 0 20px ${cat.color}08`,
                }}>
                  <CatIcon size={22} style={{ color: cat.color }} />
                </div>
                <h3 style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontSize: '20px', fontWeight: 800,
                  color: '#f1f5f9', letterSpacing: '-0.01em', flex: 'none',
                }}>
                  {cat.title}
                </h3>
                <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${cat.color}30, transparent)`, marginLeft: '0.5rem' }} />
              </div>

              {/* Grille de cartes outils */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-grid">
                {cat.tools.map((tool, i) => (
                  <a
                    key={i}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-holo group flex items-start gap-5 rounded-2xl transition-all duration-300"
                    style={{
                      padding: '1.5rem 1.6rem',
                      background: 'rgba(11,16,32,0.65)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = `${tool.color}50`
                      e.currentTarget.style.background = `linear-gradient(145deg, rgba(11,16,32,0.95), ${tool.color}08)`
                      e.currentTarget.style.transform = 'translateY(-5px)'
                      e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.35), 0 0 30px ${tool.color}15`
                      const logo = e.currentTarget.querySelector('.logo-box')
                      if (logo) logo.style.boxShadow = `0 0 28px ${tool.color}35, 0 0 56px ${tool.color}15`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                      e.currentTarget.style.background = 'rgba(11,16,32,0.65)'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                      const logo = e.currentTarget.querySelector('.logo-box')
                      if (logo) logo.style.boxShadow = `0 0 20px ${tool.color}15, 0 0 40px ${tool.color}08`
                    }}
                  >
                    {/* Logo */}
                    <div className="logo-box flex-shrink-0 flex items-center justify-center rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-110" style={{
                      width: '58px', height: '58px',
                      background: `linear-gradient(135deg, ${tool.color}18, ${tool.color}08)`,
                      border: `1.5px solid ${tool.color}30`,
                      padding: '10px',
                      boxShadow: `0 0 20px ${tool.color}15, 0 0 40px ${tool.color}08`,
                    }}>
                      <img src={tool.logo} alt={tool.name} style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(1.3) drop-shadow(0 0 6px rgba(255,255,255,0.2))' }} />
                    </div>

                    {/* Texte + lien */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p style={{
                          fontFamily: "'Inter', sans-serif", fontSize: '16px',
                          fontWeight: 700, color: tool.color, lineHeight: 1.3,
                        }}>
                          {tool.name}
                        </p>
                        <ExternalLink size={13} style={{ color: tool.color, opacity: 0.5, flexShrink: 0 }} className="group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p style={{
                        fontFamily: "'Inter', sans-serif", fontSize: '13.5px',
                        fontWeight: 400, color: '#94a3b8', lineHeight: 1.6,
                      }}>
                        {tool.desc}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )
        })}

        {/* ═══ CTA Buttons — Magiques ═══ */}
        <div className="animate-fade-up" style={{ marginTop: '5rem' }}>
          {/* Séparateur */}
          <div className="flex items-center gap-4 mb-12">
            <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, #6366f1, transparent)' }} />
            <Sparkles size={18} style={{ color: '#818cf8', opacity: 0.5 }} />
            <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, transparent, #22d3ee)' }} />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {/* Bouton CV — gradient animé */}
            <a
              href="/cv-dilan-lengue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow group relative flex items-center justify-center gap-3 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                padding: '20px 40px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)',
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                fontWeight: 700,
                color: 'white',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                boxShadow: '0 8px 32px rgba(99,102,241,0.4), 0 0 0 1px rgba(139,92,246,0.3)',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(99,102,241,0.5), 0 0 60px rgba(139,92,246,0.2), 0 0 0 1px rgba(139,92,246,0.5)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(99,102,241,0.4), 0 0 0 1px rgba(139,92,246,0.3)'
              }}
            >
              {/* Shine effect */}
              <div style={{
                position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                transition: 'left 0.6s ease',
                pointerEvents: 'none',
              }} className="group-hover:!left-[100%]" />
              <Download size={20} />
              T{'é'}l{'é'}charger mon CV
            </a>

            {/* Bouton Contact — glass border glow */}
            <a
              href="/contact"
              className="btn-glow group relative flex items-center justify-center gap-3 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                padding: '20px 40px',
                background: 'rgba(11,16,32,0.8)',
                border: '1px solid rgba(34,211,238,0.25)',
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                fontWeight: 700,
                color: '#e2e8f0',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(34,211,238,0.5)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.4), 0 0 40px rgba(34,211,238,0.1), inset 0 1px 0 rgba(255,255,255,0.08)'
                e.currentTarget.style.color = '#ffffff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(34,211,238,0.25)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
                e.currentTarget.style.color = '#e2e8f0'
              }}
            >
              <Mail size={20} />
              Me contacter
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
