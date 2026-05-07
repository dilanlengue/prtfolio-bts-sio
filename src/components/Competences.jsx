import { Server, Shield, Activity, Network, Download, Mail } from 'lucide-react'

const categories = [
  {
    title: 'Support & Mise à disposition des services informatiques',
    icon: Server,
    color: '#818cf8',
    tools: [
      { name: 'Windows Server', desc: 'Administration et gestion de serveurs Windows Server 2022/2025', color: '#0078D4', logo: '/logos/windows.svg' },
      { name: 'Windows 10/11', desc: 'Déploiement, configuration et maintenance des postes clients', color: '#0078D4', logo: '/logos/windows.svg' },
      { name: 'Linux Debian', desc: 'Installation et administration de serveurs Linux Debian 12', color: '#A81D33', logo: '/logos/debian.svg' },
      { name: 'GLPI', desc: 'Gestion de parc informatique et ticketing helpdesk', color: '#5B2C87', logo: '/logos/glpi.svg' },
      { name: 'Active Directory', desc: 'Gestion des utilisateurs, groupes et droits d’accès centralisée', color: '#0078D4', logo: '/logos/activedirectory.svg' },
      { name: 'GPO', desc: 'Configuration et déploiement de stratégies de groupe', color: '#1a5276', logo: '/logos/gpo.svg' },
    ],
  },
  {
    title: 'Administration des systèmes et des réseaux',
    icon: Network,
    color: '#22d3ee',
    tools: [
      { name: 'Proxmox', desc: 'Création et gestion de machines virtuelles', color: '#E57000', logo: '/logos/proxmox.svg' },
      { name: 'VirtualBox', desc: 'Création et gestion de machines virtuelles', color: '#183A61', logo: '/logos/virtualbox.svg' },
      { name: 'Cisco IOS', desc: 'Configuration de routeurs et switches Cisco', color: '#049FD9', logo: '/logos/cisco.svg' },
      { name: 'DNS / DHCP', desc: 'Configuration et gestion des services réseau', color: '#0e7490', logo: '/logos/dns.svg' },
      { name: 'pfSense', desc: 'Configuration de pare-feu et routage réseau', color: '#212121', logo: '/logos/pfsense.svg' },
      { name: 'VMware', desc: 'Création et gestion de machines virtuelles', color: '#607078', logo: '/logos/vmware.svg' },
    ],
  },
  {
    title: 'Cybersécurité des services informatiques',
    icon: Shield,
    color: '#fb7185',
    tools: [
      { name: 'Wireshark', desc: 'Analyse du trafic réseau et détection d’anomalies', color: '#1679A7', logo: '/logos/wireshark.svg' },
      { name: 'Kali Linux', desc: 'Application des bonnes pratiques de cybersécurité et tests de pénétration', color: '#557C94', logo: '/logos/kalilinux.svg' },
      { name: 'Nessus', desc: 'Audit de vulnérabilités et sécurisation des infrastructures', color: '#00C1D4', logo: '/logos/nessus.svg' },
      { name: 'OpenVPN', desc: 'Mise en place de tunnels VPN et sécurisation des échanges', color: '#EA7E20', logo: '/logos/openvpn.svg' },
      { name: 'Pare-feu', desc: 'Vérification et configuration des règles de pare-feu', color: '#ef4444', logo: '/logos/firewall.svg' },
    ],
  },
  {
    title: 'Supervision et haute disponibilité',
    icon: Activity,
    color: '#34d399',
    tools: [
      { name: 'Nagios', desc: 'Supervision et maintenance des infrastructures informatiques', color: '#34d399', logo: '/logos/nagios.svg' },
      { name: 'SNMP', desc: 'Protocole de supervision des équipements réseau', color: '#059669', logo: '/logos/snmp.svg' },
      { name: 'NRPE', desc: 'Exécution de plugins Nagios à distance', color: '#10b981', logo: '/logos/nrpe.svg' },
    ],
  },
]

export default function Competences() {
  return (
    <section id="competences" className="py-32 md:py-40 relative">
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

              {/* Titre catégorie avec icône + ligne */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center rounded-xl flex-shrink-0" style={{
                  width: '44px',
                  height: '44px',
                  background: `${cat.color}12`,
                  border: `1px solid ${cat.color}30`,
                  boxShadow: `0 0 20px ${cat.color}08`,
                }}>
                  <CatIcon size={22} style={{ color: cat.color }} />
                </div>
                <h3 style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontSize: '20px',
                  fontWeight: 800,
                  color: '#f1f5f9',
                  letterSpacing: '-0.01em',
                  flex: 'none',
                }}>
                  {cat.title}
                </h3>
                <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${cat.color}30, transparent)`, marginLeft: '0.5rem' }} />
              </div>

              {/* Grille de cartes outils */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.tools.map((tool, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-5 rounded-2xl transition-all duration-300"
                    style={{
                      padding: '1.5rem 1.6rem',
                      background: 'rgba(11,16,32,0.65)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = `${tool.color}40`
                      e.currentTarget.style.background = 'rgba(11,16,32,0.9)'
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.3), 0 0 24px ${tool.color}0a`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                      e.currentTarget.style.background = 'rgba(11,16,32,0.65)'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    {/* Logo image */}
                    <div className="flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden" style={{
                      width: '52px',
                      height: '52px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      padding: '8px',
                    }}>
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </div>

                    {/* Texte */}
                    <div className="flex-1 min-w-0">
                      <p style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '16px',
                        fontWeight: 700,
                        color: tool.color,
                        marginBottom: '5px',
                        lineHeight: 1.3,
                      }}>
                        {tool.name}
                      </p>
                      <p style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '13.5px',
                        fontWeight: 400,
                        color: '#94a3b8',
                        lineHeight: 1.6,
                      }}>
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        {/* Boutons CTA */}
        <div className="animate-fade-up flex flex-wrap justify-center gap-5" style={{ marginTop: '4rem' }}>
          <a
            href="/cv-dilan-lengue.pdf"
            target="_blank"
            className="flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', fontFamily: "'Inter', sans-serif", boxShadow: '0 8px 24px rgba(99,102,241,0.35)' }}
          >
            <Download size={18} /> T{'é'}l{'é'}charger mon CV
          </a>
          <a
            href="/contact"
            className="flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold transition-all hover:-translate-y-0.5"
            style={{ fontFamily: "'Inter', sans-serif", background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.18)', color: '#f1f5f9' }}
          >
            <Mail size={18} /> Me contacter
          </a>
        </div>

      </div>
    </section>
  )
}
