import { Server, Wifi, Shield, Activity, Monitor, Terminal, Globe, Download, Mail } from 'lucide-react'

const skillCategories = [
  {
    label: 'Système',
    icon: Server,
    color: '#818cf8',
    bg: 'rgba(99,102,241,0.1)',
    border: 'rgba(99,102,241,0.25)',
    level: 82,
    items: ['Windows Server 2025', 'Active Directory', 'GPO', 'DNS / DHCP', 'Hyper-V'],
  },
  {
    label: 'Réseau',
    icon: Wifi,
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.08)',
    border: 'rgba(34,211,238,0.25)',
    level: 78,
    items: ['Cisco IOS', 'VLAN 802.1Q', 'Routage inter-VLAN', 'Wireshark', 'pfSense', 'TCP/IP'],
  },
  {
    label: 'Cybersécurité',
    icon: Shield,
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.25)',
    level: 74,
    items: ['OpenVPN / PKI', 'Nessus', 'iptables', 'OWASP', 'ANSSI SecNum', 'SSL/TLS'],
  },
  {
    label: 'Supervision',
    icon: Activity,
    color: '#34d399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.25)',
    level: 70,
    items: ['Nagios Core', 'GLPI', 'SNMP / NRPE', 'Zabbix', 'Syslog'],
  },
  {
    label: 'Virtualisation',
    icon: Monitor,
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.08)',
    border: 'rgba(251,146,60,0.25)',
    level: 76,
    items: ['VirtualBox', 'VMware ESXi', 'Proxmox VE', 'Hyper-V'],
  },
  {
    label: 'OS & Scripting',
    icon: Terminal,
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.08)',
    border: 'rgba(244,114,182,0.25)',
    level: 68,
    items: ['Linux Debian 12', 'Ubuntu Server', 'Windows 10/11', 'Bash', 'PowerShell'],
  },
  {
    label: 'Protocoles',
    icon: Globe,
    color: '#fbbf24',
    bg: 'rgba(251,191,36,0.08)',
    border: 'rgba(251,191,36,0.25)',
    level: 80,
    items: ['SSH', 'LDAP / AD', 'RDP', 'SMTP / IMAP', 'FTP / SFTP', 'IPsec', 'ARP'],
  },
]

export default function Competences() {
  return (
    <section id="competences" className="py-16 md:py-24 relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center" style={{ marginBottom: '28px' }}>
          <h2 className="animate-fade-up" style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#e6ecf8' }}>
            Mes Compétences
          </h2>
          <div className="mx-auto" style={{ width: '128px', height: '2px', background: 'linear-gradient(90deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.45) 24%, rgba(212,175,55,0.85) 50%, rgba(147,51,234,0.55) 76%, rgba(56,189,248,0) 100%)', marginTop: '16px' }} />
          <p className="animate-fade-up mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 500, color: '#c5d3e8', lineHeight: 1.75, maxWidth: '580px', marginTop: '16px' }}>
            Technologies et outils maîtrisés en administration systèmes, réseaux et cybersécurité
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.label}
                className="animate-fade-up rounded-2xl p-7 transition-all duration-300"
                style={{
                  background: 'rgba(10,15,30,0.9)',
                  border: `1px solid ${cat.color}25`,
                  transitionDelay: `${i * 0.07}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = `0 20px 48px rgba(0,0,0,0.4), 0 0 32px ${cat.color}18`
                  e.currentTarget.style.borderColor = `${cat.color}55`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = `${cat.color}25`
                }}
              >
                {/* Top bar */}
                <div style={{ height: '2px', background: cat.color, borderRadius: '999px', marginBottom: '1.2rem', opacity: 0.6 }} />

                {/* En-tête */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: cat.bg, border: `1px solid ${cat.border}` }}
                  >
                    <Icon size={22} style={{ color: cat.color }} />
                  </div>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#f1f5f9', lineHeight: 1.1 }}>
                    {cat.label}
                  </h3>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2 mb-1">
                  {cat.items.map(item => (
                    <span
                      key={item}
                      className="px-3 py-2 rounded-lg font-semibold transition-all duration-200"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', background: cat.bg, border: `1px solid ${cat.border}`, color: cat.color }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            )
          })}
        </div>

        {/* Boutons CTA */}
        <div className="animate-fade-up flex flex-wrap justify-center gap-4" style={{ transitionDelay: '0.4s' }}>
          <a
            href="/cv-dilan-lengue.pdf"
            target="_blank"
            className="flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', fontFamily: "'Inter', sans-serif", boxShadow: '0 8px 24px rgba(99,102,241,0.35)' }}
          >
            <Download size={18} /> Télécharger mon CV
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
