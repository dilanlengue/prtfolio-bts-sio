import { useEffect, useRef, useState } from 'react'
import { CheckCircle, ChevronDown } from 'lucide-react'

/* ── CountUp ── */
function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1600
        const start = Date.now()
        const step = () => {
          const elapsed = Date.now() - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * target))
          if (progress < 1) requestAnimationFrame(step)
        }
        step()
      }
    }, { threshold: 0.4 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ── Tooltip Component ── */
function TechTooltip({ tag, visible }) {
  if (!visible || !tag.tooltip) return null
  return (
    <div
      className="pointer-events-none"
      style={{
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        marginBottom: '12px',
        zIndex: 100,
        minWidth: '260px',
        maxWidth: '340px',
        animation: visible ? 'tooltip-in 0.2s ease-out' : 'none',
      }}
    >
      <div
        style={{
          background: 'rgba(6,9,20,0.97)',
          border: '1px solid rgba(99,102,241,0.35)',
          borderRadius: '16px',
          padding: '18px 20px',
          backdropFilter: 'blur(24px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.7), 0 0 30px rgba(99,102,241,0.12)',
        }}
      >
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '16px',
          fontWeight: 700,
          color: '#f1f5f9',
          marginBottom: '8px',
        }}>
          {tag.label}
        </p>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '13.5px',
          color: '#94a3b8',
          lineHeight: 1.65,
          marginBottom: tag.projects ? '12px' : 0,
        }}>
          {tag.tooltip}
        </p>
        {tag.projects && (
          <>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 700, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>
              Projets :
            </p>
            <div className="flex flex-wrap gap-1.5">
              {tag.projects.map((p, i) => (
                <span key={i} style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#c7d2fe',
                  background: 'rgba(99,102,241,0.15)',
                  border: '1px solid rgba(99,102,241,0.3)',
                  borderRadius: '8px',
                  padding: '4px 12px',
                }}>
                  {p}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
      {/* Arrow */}
      <div style={{
        width: 0, height: 0,
        borderLeft: '8px solid transparent',
        borderRight: '8px solid transparent',
        borderTop: '8px solid rgba(99,102,241,0.35)',
        margin: '-1px auto 0',
      }} />
    </div>
  )
}

/* ── Interactive Tag with tooltip ── */
function InteractiveTag({ tag, catColor }) {
  const [hovered, setHovered] = useState(false)

  const isAccent = tag.accent
  const baseColor = isAccent ? (tag.color || catColor) : '#94a3b8'

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <TechTooltip tag={tag} visible={hovered} />
      <span
        className="inline-block transition-all duration-300"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '15px',
          fontWeight: isAccent ? 700 : 500,
          color: hovered ? '#f1f5f9' : baseColor,
          background: hovered
            ? `${catColor}18`
            : isAccent ? `${baseColor}10` : 'rgba(255,255,255,0.03)',
          border: `1px solid ${hovered ? `${catColor}50` : isAccent ? `${baseColor}30` : 'rgba(255,255,255,0.08)'}`,
          borderRadius: '12px',
          padding: '10px 20px',
          cursor: tag.tooltip ? 'pointer' : 'default',
          transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
          boxShadow: hovered ? `0 12px 32px ${catColor}18` : 'none',
        }}
      >
        {tag.label}
      </span>
    </div>
  )
}

/* ── CyberTerminal ── */
const terminalLines = [
  { text: '$ whoami', color: '#c5d3e8' },
  { text: 'dlengue@sisr ~ Administrateur Systemes & Reseaux', color: '#22d3ee' },
  { text: '', color: '' },
  { text: '$ nmap -sV 192.168.10.0/24', color: '#c5d3e8' },
  { text: 'Starting Nmap 7.95 -- Infrastructure scan', color: '#fbbf24' },
  { text: 'Host: 192.168.10.1  (pfSense)   Ports: 22/ssh, 443/https', color: '#34d399' },
  { text: 'Host: 192.168.10.10 (DC-SISR)   Ports: 389/ldap, 3389/rdp', color: '#34d399' },
  { text: 'Host: 192.168.10.20 (Nagios)    Ports: 80/http, 5666/nrpe', color: '#34d399' },
  { text: '', color: '' },
  { text: '$ STATUS: INFRASTRUCTURE OPERATIONNELLE', color: '#00ff88' },
]

function CyberTerminal() {
  const [lines, setLines] = useState([])

  useEffect(() => {
    let idx = 0
    const interval = setInterval(() => {
      if (idx < terminalLines.length) {
        const line = terminalLines[idx]
        setLines(prev => [...prev, line])
        idx++
      } else {
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ background: 'rgba(5,5,12,0.98)', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(34,211,238,0.12)' }}>
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-5 py-3" style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f56' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#27c93f' }} />
        <span className="ml-3" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '12px', color: '#475569' }}>
          dlengue@sisr:~
        </span>
      </div>
      {/* Terminal body */}
      <div className="p-5" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '12.5px', lineHeight: 1.9, minHeight: '200px' }}>
        {lines.map((line, i) => (
          <div key={i} style={{ color: line.color || 'transparent', whiteSpace: 'pre' }}>
            {line.text || '\u00A0'}
          </div>
        ))}
        <span style={{ color: '#00ff88', animation: 'pulse 1s infinite' }}>_</span>
      </div>
    </div>
  )
}

/* ── Data ── */
const statsData = [
  { value: 8,  suffix: '+', label: 'PROJETS REALISES',     color: '#22d3ee' },
  { value: 16, suffix: '+', label: 'PROTOCOLES MAITRISES', color: '#a78bfa' },
  { value: 4,  suffix: '',  label: 'MODULES ANSSI',        color: '#34d399' },
  { value: 2,  suffix: '',  label: 'STAGES EFFECTUES',     color: '#fbbf24' },
]

const apports = [
  { color: '#22d3ee', title: 'Administration operationnelle',  desc: 'Windows Server, AD DS, GPO, DNS — deploiement d\'infrastructure complete' },
  { color: '#00ff88', title: 'Resultats mesurables',           desc: '8+ projets livres, supervision Nagios, 4 experiences professionnelles' },
  { color: '#a78bfa', title: 'Securite integree',              desc: 'OpenVPN, Nessus, iptables — SecNumacademie ANSSI validee (4 modules)' },
  { color: '#fbbf24', title: 'Documentation technique',        desc: 'Dossiers E4/E5, rapports de stage, guides d\'installation structures' },
]

const domaines = [
  {
    cat: 'Systeme',
    color: '#818cf8',
    tags: [
      { label: 'Windows Server', accent: true, color: '#818cf8', tooltip: 'Serveur Microsoft pour la gestion d\'infrastructure reseau, Active Directory, DNS et DHCP.', projects: ['Deploiement AD & GPO', 'Infrastructure B&A Conseil'] },
      { label: 'Linux Debian', accent: false, tooltip: 'Distribution Linux stable utilisee en production pour les serveurs et la supervision reseau.', projects: ['Serveur Nagios', 'Serveur OpenVPN'] },
      { label: 'Active Directory', accent: true, color: '#22d3ee', tooltip: 'Service d\'annuaire Microsoft pour la gestion centralisee des utilisateurs, groupes et strategies.', projects: ['Deploiement AD & GPO', 'Infrastructure complete'] },
      { label: 'GPO', accent: true, color: '#22d3ee', tooltip: 'Group Policy Objects — Strategies de groupe pour la configuration automatisee des postes et la securite.', projects: ['Deploiement AD & GPO'] },
      { label: 'Hyper-V', accent: false, tooltip: 'Hyperviseur Microsoft integre a Windows Server pour la virtualisation de machines.', projects: ['Infrastructure B&A Conseil'] },
    ],
  },
  {
    cat: 'Reseau',
    color: '#22d3ee',
    tags: [
      { label: 'Cisco IOS', accent: true, color: '#34d399', tooltip: 'Systeme d\'exploitation Cisco pour la configuration de routeurs et switches en environnement professionnel.', projects: ['Configuration VLAN', 'Routage inter-VLAN'] },
      { label: 'VLAN 802.1Q', accent: false, tooltip: 'Norme IEEE de segmentation reseau en reseaux virtuels pour isoler le trafic et securiser l\'infrastructure.', projects: ['Configuration VLAN 802.1Q'] },
      { label: 'DNS / DHCP', accent: false, tooltip: 'Protocoles fondamentaux : resolution de noms de domaine et attribution automatique d\'adresses IP.', projects: ['Deploiement AD & GPO'] },
      { label: 'TCP/IP', accent: false, tooltip: 'Suite de protocoles fondamentaux d\'Internet et des reseaux locaux — couches transport et reseau.' },
      { label: 'pfSense', accent: true, color: '#34d399', tooltip: 'Pare-feu open source base sur FreeBSD pour le filtrage, le NAT et la gestion VPN.', projects: ['Mise en place pfSense', 'Infrastructure securisee'] },
      { label: 'Wireshark', accent: false, tooltip: 'Analyseur de protocoles reseau pour capturer et inspecter le trafic en temps reel.' },
    ],
  },
  {
    cat: 'Cybersecurite',
    color: '#a78bfa',
    tags: [
      { label: 'OpenVPN', accent: true, color: '#f87171', tooltip: 'Solution VPN open source avec chiffrement SSL/TLS pour des connexions securisees site-a-site.', projects: ['Mise en place OpenVPN + PKI'] },
      { label: 'Nessus', accent: true, color: '#f87171', tooltip: 'Scanner de vulnerabilites professionnel pour auditer et securiser les systemes et reseaux.', projects: ['Audit de securite reseau'] },
      { label: 'iptables', accent: false, tooltip: 'Outil de filtrage de paquets Linux pour configurer le pare-feu et proteger les serveurs.' },
      { label: 'SSL/TLS', accent: true, color: '#f87171', tooltip: 'Protocoles de chiffrement pour securiser les communications reseau et authentifier les serveurs.' },
      { label: 'OWASP', accent: true, color: '#f87171', tooltip: 'Organisation de reference en securite web — Top 10 des vulnerabilites et bonnes pratiques.', projects: ['Securisation application web'] },
      { label: 'ANSSI SecNum', accent: false, tooltip: 'Formation SecNumacademie de l\'ANSSI — 4 modules valides en cybersecurite nationale.' },
    ],
  },
  {
    cat: 'Supervision',
    color: '#34d399',
    tags: [
      { label: 'Nagios Core', accent: true, color: '#a78bfa', tooltip: 'Outil de supervision reseau pour surveiller les hotes, services et alerter en cas d\'incident.', projects: ['Supervision Nagios SNMP/NRPE'] },
      { label: 'SNMP', accent: false, tooltip: 'Simple Network Management Protocol — protocole de supervision pour collecter les metriques reseau.' },
      { label: 'NRPE', accent: false, tooltip: 'Nagios Remote Plugin Executor — agent distant pour executer des controles sur les serveurs supervises.' },
      { label: 'GLPI', accent: true, color: '#a78bfa', tooltip: 'Gestionnaire de parc informatique et helpdesk pour le suivi des assets et tickets.', projects: ['Gestion de parc IT'] },
      { label: 'Zabbix', accent: false, tooltip: 'Plateforme de supervision enterprise pour le monitoring en temps reel et les tableaux de bord.' },
    ],
  },
  {
    cat: 'Virtualisation',
    color: '#fb923c',
    tags: [
      { label: 'VirtualBox', accent: false, tooltip: 'Hyperviseur type 2 d\'Oracle pour creer et gerer des machines virtuelles en environnement de test.' },
      { label: 'VMware ESXi', accent: true, color: '#fbbf24', tooltip: 'Hyperviseur bare-metal professionnel pour la virtualisation d\'infrastructure en datacenter.', projects: ['Infrastructure virtualisee'] },
      { label: 'Proxmox VE', accent: true, color: '#fbbf24', tooltip: 'Plateforme open source de virtualisation combinant KVM et LXC avec interface web.', projects: ['Lab virtualisation'] },
      { label: 'Hyper-V', accent: false, tooltip: 'Hyperviseur Microsoft integre a Windows Server pour la virtualisation en production.' },
    ],
  },
  {
    cat: 'OS & Scripting',
    color: '#f472b6',
    tags: [
      { label: 'Debian 12', accent: false, tooltip: 'Distribution Linux stable et fiable, utilisee pour les serveurs en production.' },
      { label: 'Ubuntu Server', accent: false, tooltip: 'Distribution Linux populaire pour les serveurs, basee sur Debian avec mises a jour regulieres.' },
      { label: 'Windows 10/11', accent: false, tooltip: 'Systemes d\'exploitation client Microsoft pour les postes de travail en entreprise.' },
      { label: 'Bash', accent: true, color: '#f472b6', tooltip: 'Shell Unix pour l\'automatisation de taches systeme et l\'ecriture de scripts d\'administration.' },
      { label: 'PowerShell', accent: true, color: '#f472b6', tooltip: 'Shell Microsoft pour l\'administration Windows, Active Directory et l\'automatisation.', projects: ['Scripts AD & GPO'] },
    ],
  },
  {
    cat: 'Protocoles',
    color: '#fbbf24',
    tags: [
      { label: 'SSH', accent: false, tooltip: 'Secure Shell — protocole chiffre pour l\'acces distant securise aux serveurs.' },
      { label: 'RDP', accent: false, tooltip: 'Remote Desktop Protocol — acces graphique a distance aux machines Windows.' },
      { label: 'LDAP', accent: true, color: '#818cf8', tooltip: 'Lightweight Directory Access Protocol — interrogation d\'annuaires comme Active Directory.', projects: ['Deploiement AD'] },
      { label: 'SMTP / IMAP', accent: false, tooltip: 'Protocoles de messagerie — envoi (SMTP) et reception (IMAP) des emails.' },
      { label: 'IPsec', accent: true, color: '#818cf8', tooltip: 'Suite de protocoles pour securiser les communications IP avec chiffrement et authentification.', projects: ['VPN site-a-site'] },
      { label: 'FTP / SFTP', accent: false, tooltip: 'Protocoles de transfert de fichiers — SFTP ajoute une couche SSH securisee.' },
    ],
  },
]

const realisations = [
  'Deploiement Active Directory & GPO sur Windows Server 2025',
  'Configuration reseau Cisco VLAN 802.1Q inter-VLAN',
  'Mise en place OpenVPN avec PKI et certificats SSL',
  'Supervision Nagios Core — alertes SNMP/NRPE',
]

/* ══════════════════════════════════════════════════ */
export default function APropos() {
  return (
    <section id="apropos" className="relative" style={{ paddingTop: '6rem', paddingBottom: '8rem' }}>

      {/* Top gradient line separator */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', maxWidth: '90%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.4), rgba(99,102,241,0.4), transparent)' }} />

      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── About Card (like Sagar's main about box) ── */}
        <div
          className="animate-fade-up rounded-3xl mb-16"
          style={{
            background: 'rgba(11,16,32,0.62)',
            border: '1px solid rgba(255,255,255,0.06)',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Name */}
          <h2
            className="text-center mb-3"
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: 'clamp(1.8rem, 5vw, 2.25rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: '#e6ecf8',
              textTransform: 'none',
              lineHeight: 1.1,
            }}
          >
            Dilan Lengue
          </h2>

          {/* Role with animated underline */}
          <div className="text-center mb-6">
            <span
              className="inline-block relative"
              style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: 'clamp(0.9rem, 2vw, 1.15rem)',
                fontWeight: 600,
                color: '#22d3ee',
                letterSpacing: '0.06em',
              }}
            >
              Administrateur Syst&egrave;mes &amp; R&eacute;seaux
              {/* Animated underline */}
              <span style={{
                position: 'absolute',
                bottom: '-4px',
                left: '20%',
                right: '20%',
                height: '2px',
                borderRadius: '2px',
                background: 'linear-gradient(90deg, #22d3ee, #818cf8, #22d3ee)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s ease-in-out infinite',
              }} />
            </span>
          </div>

          {/* Status badge */}
          <div className="flex justify-center mb-7">
            <div
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full"
              style={{
                background: 'rgba(0,255,136,0.04)',
                border: '1px solid rgba(0,255,136,0.18)',
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: '#94a3b8',
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 animate-pulse" style={{ background: '#00ff88' }} />
              <span style={{ color: '#00ff88', fontWeight: 700 }}>Disponible</span>
              <span style={{ color: '#334155', margin: '0 2px' }}>|</span>
              <span style={{ fontWeight: 500 }}>Stage &middot; 2026</span>
            </div>
          </div>

          {/* Tech line */}
          <p className="text-center mb-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#c5d3e8', letterSpacing: '0.02em' }}>
            Windows Server &middot; Linux &middot; Cisco &middot; OpenVPN &middot; Nagios &middot; pfSense
          </p>
          {/* School + objective */}
          <p className="text-center" style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#c5d3e8' }}>
            BTS SIO SISR &middot; Institut F2I, Vincennes &middot; Diplome{' '}
            <span style={{ color: '#fbbf24', fontWeight: 600 }}>juin 2026</span>
            {' '}&mdash;{' '}
            <span style={{ color: '#22d3ee', fontWeight: 600 }}>Objectif : Admin Sys &amp; Reseaux</span>
          </p>
        </div>

        {/* ── Stats row ── */}
        <div className="animate-fade-up grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {statsData.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-10 px-5 text-center rounded-2xl transition-all duration-300"
              style={{
                background: 'rgba(11,16,32,0.62)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${s.color}40`
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.3), 0 0 20px ${s.color}10`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', fontWeight: 800, color: s.color, lineHeight: 1, letterSpacing: '0.02em', marginBottom: '0.8rem' }}>
                <CountUp target={s.value} suffix={s.suffix} />
              </span>
              <span style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '12px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Two columns: CE QUE J'APPORTE + DOMAINES CLES (small pills) ── */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">

          {/* CE QUE J'APPORTE */}
          <div
            className="animate-fade-up rounded-2xl p-8 md:p-9"
            style={{ background: 'rgba(11,16,32,0.62)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '12px', fontWeight: 700, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem' }}>
              CE QUE J'APPORTE
            </p>
            <div className="space-y-7">
              {apports.map((item, i) => (
                <div key={i} className="pl-5" style={{ borderLeft: `3px solid ${item.color}` }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: item.color, marginBottom: '0.4rem' }}>
                    {item.title}
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#c5d3e8', lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* DOMAINES CLES — small overview pills */}
          <div
            className="animate-fade-up rounded-2xl p-8 md:p-9"
            style={{ background: 'rgba(11,16,32,0.62)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '12px', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem' }}>
              DOMAINES CLES
            </p>
            <div className="space-y-5">
              {domaines.map((row, i) => (
                <div key={i} className="flex flex-wrap items-center gap-2.5">
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: row.color, width: '110px', minWidth: '110px' }}>
                    {row.cat}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {row.tags.slice(0, 4).map((tag, j) => (
                      <span key={j} style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '12px',
                        fontWeight: 500,
                        color: '#94a3b8',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '8px',
                        padding: '4px 10px',
                      }}>
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── COMPETENCES DETAILLEES — Large Interactive Tags with Tooltips ── */}
        <div
          className="animate-fade-up rounded-2xl mb-16"
          style={{
            background: 'rgba(6,9,18,0.85)',
            border: '1px solid rgba(99,102,241,0.12)',
            padding: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          {/* Header with decorative line */}
          <div className="flex items-center gap-3 mb-4">
            <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '11px', color: 'rgba(129,140,248,0.4)' }}>//</span>
            <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '12px', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
              COMPETENCES TECHNIQUES
            </p>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(99,102,241,0.3), transparent)' }} />
          </div>

          <p className="mb-10" style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
            Survolez une technologie pour voir sa description et les projets associes
          </p>

          <div className="space-y-8">
            {domaines.map((row, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-5" style={{ paddingBottom: '1.5rem', borderBottom: i < domaines.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none' }}>
                <span className="flex-shrink-0 flex items-center gap-2" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '14px', fontWeight: 700, color: row.color, width: '140px', minWidth: '140px', paddingTop: '10px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: row.color, opacity: 0.6 }} />
                  {row.cat}
                </span>
                <div className="flex flex-wrap gap-3">
                  {row.tags.map(tag => (
                    <InteractiveTag key={tag.label} tag={tag} catColor={row.color} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Realisations + Terminal side by side ── */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">

          {/* Realisations */}
          <div
            className="animate-fade-up rounded-2xl p-8 md:p-9"
            style={{ background: 'rgba(11,16,32,0.62)', border: '1px solid rgba(34,211,238,0.1)' }}
          >
            <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '12px', fontWeight: 700, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem' }}>
              REALISATIONS CLES
            </p>
            <div className="space-y-5">
              {realisations.map((r, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} style={{ color: '#22d3ee', flexShrink: 0, marginTop: '3px' }} />
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#94a3b8', lineHeight: 1.7 }}>{r}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal */}
          <div className="animate-fade-up">
            <CyberTerminal />
          </div>
        </div>

        {/* ── CTA Buttons ── */}
        <div className="animate-fade-up flex flex-wrap justify-center gap-4 mb-16">
          {[
            { label: 'T\u00e9l\u00e9charger mon CV', href: '/cv-dilan-lengue.pdf', target: '_blank', variant: 'primary' },
            { label: 'Me contacter',       href: '#contact',             target: undefined,  variant: 'white' },
            { label: 'LinkedIn',           href: 'https://www.linkedin.com/in/dilan-lengue', target: '_blank', variant: 'dark' },
            { label: 'GitHub',             href: 'https://github.com/dilan-lengue',          target: '_blank', variant: 'dark' },
          ].map((btn, i) => {
            const variantStyles = {
              primary: {
                background: 'rgba(25,35,75,0.95)',
                border: '1.5px solid rgba(99,102,241,0.5)',
                color: '#c7d2fe',
                boxShadow: '0 2px 12px rgba(99,102,241,0.15)',
              },
              white: {
                background: '#f1f5f9',
                border: '1.5px solid #e2e8f0',
                color: '#0f172a',
                boxShadow: '0 2px 12px rgba(255,255,255,0.08)',
              },
              dark: {
                background: 'rgba(15,22,50,0.95)',
                border: '1.5px solid rgba(255,255,255,0.15)',
                color: '#e2e8f0',
                boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
              },
            }
            const s = variantStyles[btn.variant]
            return (
              <a
                key={i}
                href={btn.href}
                target={btn.target}
                rel={btn.target === '_blank' ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'inline-block',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  padding: '14px 32px',
                  borderRadius: '9999px',
                  transition: 'all 0.3s ease',
                  ...s,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  if (btn.variant === 'primary') {
                    e.currentTarget.style.background = 'rgba(40,55,100,0.95)'
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.7)'
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(99,102,241,0.25)'
                  } else if (btn.variant === 'white') {
                    e.currentTarget.style.background = '#ffffff'
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,255,255,0.15)'
                  } else {
                    e.currentTarget.style.background = 'rgba(25,35,65,0.95)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.4)'
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  Object.assign(e.currentTarget.style, s)
                }}
              >
                {btn.label}
              </a>
            )
          })}
        </div>

        {/* ── Scroll hint ── */}
        <div className="flex flex-col items-center gap-3" style={{ animation: 'float 2.5s ease-in-out infinite' }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#334155', letterSpacing: '0.15em' }}>
            Faites defiler pour decouvrir
          </span>
          <ChevronDown size={18} style={{ color: '#22d3ee' }} />
        </div>

      </div>
    </section>
  )
}
