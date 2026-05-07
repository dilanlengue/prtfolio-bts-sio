import { useEffect, useRef, useState, useCallback } from 'react'
import { Download, Mail, Linkedin, Github, ArrowLeft, FolderKanban, ShieldCheck, CalendarDays, Award, Server, BarChart3, Lock, FileText } from 'lucide-react'
import SectionLabel from './SectionLabel'

/* ─── CountUp ─── */
function CountUp({ target, suffix = '', prefix = '' }) {
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

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

/* ─── Data ─── */
const statsData = [
  { value: 9,  suffix: '+', label: 'PROJETS RÉALISÉS',    desc: 'Infrastructure, support & développement',  color: '#22d3ee', icon: FolderKanban },
  { value: 4,  suffix: '',  label: 'MODULES ANSSI',       desc: 'SecNumacadémie validés (88-94 %)',         color: '#22c55e', icon: ShieldCheck },
  { value: 3,  suffix: '+', label: 'ANNÉES D\'EXPÉRIENCE', desc: 'Bac+2 + HND + Licence Informatique',       color: '#f59e0b', icon: CalendarDays },
  { value: 4,  suffix: '',  label: 'CERTIFICATIONS',      desc: 'ANSSI · EBIOS · Udemy · Coursera',         color: '#a78bfa', icon: Award },
]

const apports = [
  { color: '#22d3ee', icon: Server, title: 'Administration opérationnelle',  desc: 'Windows Server, AD DS, GPO, DNS/DHCP' },
  { color: '#22c55e', icon: BarChart3, title: 'Impact mesurable',               desc: '9+ projets livrés · supervision Nagios · 3 expériences pro' },
  { color: '#a78bfa', icon: Lock, title: 'Sécurité by design',             desc: 'OpenVPN, Nessus, iptables, SecNum 100%' },
  { color: '#fbbf24', icon: FileText, title: 'Livraison documentée',           desc: 'Guides techniques, rapports de stage, documentation réseau' },
]

const domainesSmall = [
  { cat: 'Système',        tags: ['Windows Server', 'Linux Debian', 'Active Directory', 'GPO', 'WSUS'] },
  { cat: 'Réseau',         tags: ['Cisco IOS', 'VLAN 802.1Q', 'DNS / DHCP', 'TCP/IP', 'Wireshark'] },
  { cat: 'Cybersécurité',  tags: ['OpenVPN', 'Nessus', 'iptables', 'SSL/TLS', 'EBIOS RM'] },
  { cat: 'Supervision',    tags: ['Nagios', 'SNMP', 'GLPI', 'NRPE'] },
  { cat: 'Virtualisation', tags: ['VirtualBox', 'VMware', 'Proxmox', 'Hyper-V'] },
  { cat: 'Protocoles',     tags: ['SSH', 'RDP', 'LDAP', 'SMTP'] },
]

/* Full-width tech grid — style cyber's second card */
const techGrid = [
  { cat: 'Système',        tags: ['Windows Server', 'Linux Debian', 'Active Directory', 'PowerShell', 'GPO', 'WSUS'] },
  { cat: 'Réseau',         tags: ['Cisco IOS', 'VLAN 802.1Q', 'TCP/IP', 'DNS / DHCP', 'Routage', 'Wireshark'] },
  { cat: 'Cybersécurité',  tags: ['OpenVPN', 'Nessus', 'iptables', 'pfSense', 'EBIOS RM'] },
  { cat: 'Supervision',    tags: ['Nagios', 'GLPI', 'SNMP', 'NRPE'] },
  { cat: 'Virtualisation', tags: ['VirtualBox', 'VMware', 'Proxmox', 'Hyper-V'] },
  { cat: 'Protocoles',     tags: ['SSH', 'RDP', 'LDAP', 'SMTP', 'HTTPS'] },
]

/* ─── Matrix Rain Canvas ─── */
function MatrixRain({ height = 420 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let time = 0

    function resize() {
      canvas.width = canvas.parentElement.offsetWidth
      canvas.height = height
    }
    resize()
    window.addEventListener('resize', resize)

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>/{}[]=$#@!&01'
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops = Array.from({ length: columns }, () => Math.random() * -50)

    const cyberTexts = [
      '192.168.1.1', '10.0.0.254', '172.16.0.1', '192.168.10.50',
      'SSH:22', 'HTTPS:443', 'DNS:53', 'SNMP:161', 'LDAP:389', 'RDP:3389',
      'VLAN 10', 'VLAN 20', 'DMZ', 'WAN', 'LAN',
      'TCP/IP', 'AES-256', 'TLS 1.3', 'IPsec', 'SSL',
      '$ nmap -sV', '$ ping -c 4', '$ traceroute', '$ ifconfig',
      'fw:ALLOW', 'fw:DROP', 'ACL PERMIT', 'NAT INSIDE',
      '[OK]', '[ACTIVE]', '[SECURED]', 'ENCRYPTED',
      '0xFF', '0xA3', '0x1B', '0xD7',
    ]

    const nodeCount = 12
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 3 + 1.5,
      pulse: Math.random() * Math.PI * 2,
    }))

    const floatingLabels = Array.from({ length: 14 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.25,
      text: cyberTexts[Math.floor(Math.random() * cyberTexts.length)],
      opacity: Math.random() * 0.25 + 0.1,
      phase: Math.random() * Math.PI * 2,
      color: Math.random() < 0.5 ? '#22d3ee' : (Math.random() < 0.5 ? '#00ff88' : '#a78bfa'),
    }))

    function draw() {
      time++
      ctx.fillStyle = 'rgba(5,8,20,0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = 'rgba(34,211,238,0.025)'
      ctx.lineWidth = 0.5
      const gridSize = 60
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke()
      }

      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 200) {
            const alpha = 0.12 * (1 - dist / 200)
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(34,211,238,${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      nodes.forEach(n => {
        const pulse = 0.5 + 0.5 * Math.sin(time * 0.03 + n.pulse)
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 5)
        glow.addColorStop(0, `rgba(34,211,238,${0.15 * pulse})`)
        glow.addColorStop(1, 'rgba(34,211,238,0)')
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.radius * 5, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34,211,238,${0.5 * pulse})`
        ctx.fill()
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.radius * 0.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${0.6 * pulse})`
        ctx.fill()
      })

      ctx.font = `${fontSize}px "JetBrains Mono", "Fira Code", monospace`
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        if (Math.random() < 0.04) {
          ctx.fillStyle = 'rgba(255,255,255,0.9)'
        } else if (Math.random() < 0.15) {
          ctx.fillStyle = `rgba(0,255,136,${0.2 + Math.random() * 0.3})`
        } else {
          ctx.fillStyle = `rgba(34,211,238,${0.12 + Math.random() * 0.28})`
        }
        ctx.fillText(char, x, y)
        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i] += 0.5 + Math.random() * 0.4
      }

      ctx.font = '11px "JetBrains Mono", "Fira Code", monospace'
      ctx.textAlign = 'center'
      floatingLabels.forEach(label => {
        label.x += label.vx; label.y += label.vy
        if (label.x < 40 || label.x > canvas.width - 40) label.vx *= -1
        if (label.y < 20 || label.y > canvas.height - 20) label.vy *= -1
        const fade = 0.6 + 0.4 * Math.sin(time * 0.015 + label.phase)
        ctx.fillStyle = label.color.replace(')', `,${label.opacity * fade})`).replace('rgb', 'rgba')
        ctx.fillText(label.text, label.x, label.y)
      })
      ctx.textAlign = 'start'

      const scanY = (time * 0.8) % canvas.height
      const scanGrad = ctx.createLinearGradient(0, scanY - 2, 0, scanY + 2)
      scanGrad.addColorStop(0, 'rgba(34,211,238,0)')
      scanGrad.addColorStop(0.5, 'rgba(34,211,238,0.06)')
      scanGrad.addColorStop(1, 'rgba(34,211,238,0)')
      ctx.fillStyle = scanGrad
      ctx.fillRect(0, scanY - 2, canvas.width, 4)

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [height])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: `${height}px`, display: 'block', borderRadius: '16px' }}
    />
  )
}

/* ─── Terminal Stages — DILAN ASCII art ─── */
const asciiArt = [
  ' ██████╗  ██╗ ██╗      █████╗  ███╗   ██╗',
  ' ██╔══██╗ ██║ ██║     ██╔══██╗ ████╗  ██║',
  ' ██║  ██║ ██║ ██║     ███████║ ██╔██╗ ██║',
  ' ██║  ██║ ██║ ██║     ██╔══██║ ██║╚██╗██║',
  ' ██████╔╝ ██║ ███████╗██║  ██║ ██║ ╚████║',
  ' ╚═════╝  ╚═╝ ╚══════╝╚═╝  ╚═╝ ╚═╝  ╚═══╝',
]

const terminalInfoLines = [
  { text: '\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550', color: '#22d3ee' },
  { text: '  B&A CONSEIL \u2014 Technologies & Services Informatiques', color: '#22d3ee', bold: true },
  { text: '\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550', color: '#22d3ee' },
  { text: '', color: '' },
  { text: '$ cat /etc/dilan/stages.conf', color: '#c5d3e8' },
  { text: '', color: '' },
  { text: '  \u250c\u2500 Stage actuel \u2014 BTS SIO 2\u00e8me ann\u00e9e \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510', color: '#22d3ee' },
  { text: '  \u2502  Entreprise   : B&A Conseil (SAS)                  \u2502', color: '#e6ecf8' },
  { text: '  \u2502  Localisation : Coigni\u00e8res, Yvelines (78)          \u2502', color: '#e6ecf8' },
  { text: '  \u2502  Effectif     : 2-10 collaborateurs                \u2502', color: '#e6ecf8' },
  { text: '  \u2502  Cr\u00e9ation     : 2018                                \u2502', color: '#e6ecf8' },
  { text: '  \u2502  P\u00e9riode      : 05/01/2026 \u2014 06/02/2026 (5 sem.)   \u2502', color: '#22d3ee' },
  { text: '  \u2502  Poste        : Technicien Support & Maintenance   \u2502', color: '#fbbf24' },
  { text: '  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518', color: '#22d3ee' },
  { text: '', color: '' },
  { text: '$ ls /missions/ba-conseil/', color: '#c5d3e8' },
  { text: '', color: '' },
  { text: '  \u25cf Diagnostic & r\u00e9solution incidents     [DONE]', color: '#22c55e' },
  { text: '  \u25cf Maintenance pr\u00e9ventive & corrective   [DONE]', color: '#22c55e' },
  { text: '  \u25cf D\u00e9ploiement postes Windows 11         [DONE]', color: '#22c55e' },
  { text: '  \u25cf Configuration MDM (Miradore UEM)      [DONE]', color: '#22c55e' },
  { text: '  \u25cf Enr\u00f4lement smartphones flotte mobile  [DONE]', color: '#22c55e' },
  { text: '', color: '' },
  { text: '$ cat /etc/dilan/stage-precedent.conf', color: '#c5d3e8' },
  { text: '', color: '' },
  { text: '  \u250c\u2500 Stage 1\u00e8re ann\u00e9e BTS SIO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510', color: '#a78bfa' },
  { text: '  \u2502  Entreprise   : Les R\u00e9parateurs Mac & PC          \u2502', color: '#e6ecf8' },
  { text: '  \u2502  Localisation : Montreuil (93)                    \u2502', color: '#e6ecf8' },
  { text: '  \u2502  P\u00e9riode      : 12/05/2025 \u2014 21/06/2025 (7 sem.)   \u2502', color: '#a78bfa' },
  { text: '  \u2502  Poste        : Technicien Support Informatique   \u2502', color: '#fbbf24' },
  { text: '  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518', color: '#a78bfa' },
  { text: '', color: '' },
  { text: '  \u250c\u2500 Objectif post-BTS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510', color: '#34d399' },
  { text: '  \u2502  Alternance Bac+3 Cybers\u00e9curit\u00e9 \u2014 sept. 2026  \u2502', color: '#e6ecf8' },
  { text: '  \u2502  MSc Cybers\u00e9curit\u00e9 \u2014 long terme                  \u2502', color: '#e6ecf8' },
  { text: '  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518', color: '#34d399' },
  { text: '', color: '' },
  { text: '  [\u2713] 2 STAGES VALID\u00c9S \u2014 ATTESTATIONS DISPONIBLES', color: '#00ff88', bold: true },
]

function TerminalStages() {
  const [lines, setLines] = useState([])
  const started = useRef(false)

  useEffect(() => {
    if (started.current) return
    started.current = true
    let idx = 0
    const interval = setInterval(() => {
      if (idx < terminalInfoLines.length) {
        setLines(prev => [...prev, terminalInfoLines[idx]])
        idx++
      } else {
        clearInterval(interval)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ background: 'rgba(5,5,12,0.98)', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(34,211,238,0.12)' }}>
      <div className="flex items-center gap-2 px-5 py-3" style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f56' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#27c93f' }} />
        <span className="ml-3" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '12px', color: '#475569' }}>
          dilan@bna-conseil:~# <span style={{ color: '#22d3ee' }}>secure-shell</span>
        </span>
        <div className="ml-auto flex items-center gap-2">
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#22c55e' }}>{'\u25cf'} ENCRYPTED</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#475569' }}>TLS 1.3</span>
        </div>
      </div>
      <div className="px-5 pt-5 overflow-x-auto" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>
        {asciiArt.map((line, i) => (
          <div key={i} style={{ color: '#22d3ee', whiteSpace: 'pre', fontSize: 'clamp(7px, 1.8vw, 13px)', lineHeight: 1.15, opacity: 0.85 }}>{line}</div>
        ))}
        <div style={{ fontSize: '11px', color: '#475569', textAlign: 'center', marginTop: '6px', letterSpacing: '0.3em' }}>
          B&A CONSEIL {'\u00b7'} TECHNOLOGIES &amp; SERVICES IT
        </div>
      </div>
      <div className="px-5 pb-5 pt-3 overflow-x-auto" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '11.5px', lineHeight: 1.75 }}>
        {lines.map((line, i) => (
          <div key={i} style={{ color: line.color || 'transparent', whiteSpace: 'pre', fontWeight: line.bold ? 700 : 400 }}>
            {line.text || '\u00A0'}
          </div>
        ))}
        <span style={{ color: '#00ff88', animation: 'pulse 1s infinite' }}>{'\u2588'}</span>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════ */
/* ─── DASHBOARD — layout propre layout ─── */
/* ═══════════════════════════════════════ */
export default function Dashboard() {
  const [showTerminal, setShowTerminal] = useState(false)
  const toggleTerminal = useCallback(() => setShowTerminal(prev => !prev), [])

  return (
    <section id="dashboard" className="relative" style={{ paddingTop: '12rem', paddingBottom: '6rem' }}>
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Profile card ── */}
        <div
          className="animate-fade-up rounded-2xl overflow-hidden mb-24"
          style={{ background: 'linear-gradient(145deg, rgba(11,16,32,0.75), rgba(15,20,40,0.55))', border: '1px solid rgba(129,140,248,0.12)', boxShadow: '0 24px 60px rgba(0,0,0,0.35), 0 0 40px rgba(99,102,241,0.04)' }}
        >
          {/* Accent bar */}
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #6366f1, #22d3ee, #a78bfa)' }} />

          <div className="px-8 md:px-20 pt-24 pb-20 text-center">

            {/* Photo */}
            <div className="flex justify-center mb-10">
              <div style={{ width: '130px', height: '130px', borderRadius: '50%', padding: '3px', background: 'linear-gradient(135deg, #6366f1, #22d3ee)', boxShadow: '0 0 40px rgba(99,102,241,0.2), 0 0 80px rgba(34,211,238,0.08)' }}>
                <img src="/photo-dilan.png" alt="Dilan Lengue" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>

            {/* Name */}
            <h2
              style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: 'clamp(2.6rem, 6vw, 3.6rem)',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #818cf8, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: '1.2rem',
              }}
            >
              Dilan Lengue
            </h2>

            {/* Subtitle */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              fontWeight: 400,
              color: '#94a3b8',
              marginBottom: '2rem',
              letterSpacing: '0.02em',
            }}>
              {'É'}tudiant BTS SIO SISR {'·'} 23 ans {'·'} Bilingue FR / EN
            </p>

            {/* Badges row */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <span
                className="inline-flex items-center rounded-full"
                style={{
                  background: 'rgba(34,211,238,0.1)',
                  border: '1px solid rgba(34,211,238,0.3)',
                  color: '#22d3ee',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '15px',
                  fontWeight: 600,
                  padding: '12px 28px',
                  letterSpacing: '0.01em',
                }}
              >
                Alternant Admin. Syst{'\u00e8'}mes & R{'\u00e9'}seaux
              </span>

              <div
                className="inline-flex items-center gap-2.5 rounded-full"
                style={{
                  background: 'rgba(34,197,94,0.08)',
                  border: '1px solid rgba(34,197,94,0.2)',
                  padding: '12px 28px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#cbd5e1',
                }}
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse" style={{ background: '#22c55e' }} />
                <span style={{ fontWeight: 600, color: '#e2e8f0' }}>Disponible</span>
                <span style={{ color: '#334155' }}>|</span>
                Stagiaire B&A Conseil {'\u00b7'} 2 stages 2025-2026
              </div>
            </div>

          </div>
        </div>

        {/* ── À propos de moi ── */}
        <div className="animate-fade-up mb-32" style={{ transitionDelay: '0.06s' }}>

          {/* Titre */}
          <div className="flex items-center gap-4 mb-12">
            <div style={{ height: '3px', flex: 1, background: 'linear-gradient(90deg, #6366f1, transparent)', borderRadius: '2px' }} />
            <p style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: '15px',
              fontWeight: 700,
              color: '#818cf8',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
            }}>
              {'À'} propos de moi
            </p>
            <div style={{ height: '3px', flex: 1, background: 'linear-gradient(90deg, transparent, #22d3ee)', borderRadius: '2px' }} />
          </div>

          {/* Paragraphe 1 */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '18px',
            fontWeight: 400,
            color: '#e2e8f0',
            lineHeight: 2.1,
            marginBottom: '2rem',
          }}>
            Je m'appelle <span style={{ color: '#22d3ee', fontWeight: 700 }}>Dilan Lengue</span>, j'ai <span style={{ color: '#22d3ee', fontWeight: 700 }}>23 ans</span> et je suis {'é'}tudiant en <span style={{ color: '#818cf8', fontWeight: 700 }}>BTS SIO</span> (Services Informatiques aux Organisations), option <span style={{ color: '#818cf8', fontWeight: 700 }}>SISR</span> (Solutions d'Infrastructure, Syst{'è'}mes et R{'é'}seaux) {'à'} l'Institut F2I. <span style={{ color: '#22d3ee', fontWeight: 700 }}>Bilingue fran{'ç'}ais / anglais</span>, passionn{'é'} par les technologies de l'information, j'ai choisi cette sp{'é'}cialisation pour d{'é'}velopper mes comp{'é'}tences en administration r{'é'}seau, gestion de serveurs et s{'é'}curit{'é'} informatique.
          </p>

          {/* Paragraphe 2 */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '18px',
            fontWeight: 400,
            color: '#e2e8f0',
            lineHeight: 2.1,
            marginBottom: '2rem',
          }}>
            Au cours de ma formation, j'ai eu l'opportunit{'é'} de mettre mes connaissances en pratique {'à'} travers plusieurs projets techniques et stages en entreprise. Rigoureux, curieux et motiv{'é'}, j'aime relever des d{'é'}fis techniques et trouver des solutions efficaces aux probl{'è'}mes rencontr{'é'}s.
          </p>

          {/* Paragraphe 3 */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '18px',
            fontWeight: 400,
            color: '#e2e8f0',
            lineHeight: 2.1,
          }}>
            {'À'} travers ce portfolio, je souhaite partager mon parcours, mes projets et les comp{'é'}tences que j'ai acquises dans le cadre de mon BTS. Mon projet professionnel est de devenir <span style={{ color: '#a78bfa', fontWeight: 700 }}>Expert en Cybers{'é'}curit{'é'} & Pen Tester</span> et sp{'é'}cialiste en s{'é'}curisation des infrastructures.
          </p>

        </div>


        {/* ── Section divider ── */}
        <SectionLabel label="STATISTIQUES" color="#22d3ee" mt="my-32" />

        {/* ── Stats row — 4 cards with icon + desc ── */}
        <div className="animate-fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" style={{ transitionDelay: '0.08s' }}>
          {statsData.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className="flex flex-col rounded-2xl p-8 transition-all duration-300"
                style={{
                  background: 'rgba(11,16,32,0.7)',
                  border: `1px solid ${s.color}22`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = `${s.color}55`
                  e.currentTarget.style.boxShadow = `0 14px 36px rgba(0,0,0,0.3), 0 0 24px ${s.color}1a`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = `${s.color}22`
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Icon header */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="flex items-center justify-center rounded-xl"
                    style={{
                      width: '52px',
                      height: '52px',
                      background: `${s.color}15`,
                      border: `1px solid ${s.color}40`,
                    }}
                  >
                    <Icon size={26} style={{ color: s.color }} />
                  </div>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10.5px',
                      fontWeight: 700,
                      color: s.color,
                      letterSpacing: '0.08em',
                      opacity: 0.7,
                    }}
                  >
                    /{s.label.split(' ')[0].slice(0, 4).toLowerCase()}
                  </span>
                </div>

                {/* Big value */}
                <span
                  style={{
                    fontFamily: "'Orbitron', system-ui, sans-serif",
                    fontSize: 'clamp(2.2rem, 4.5vw, 2.8rem)',
                    fontWeight: 900,
                    color: s.color,
                    lineHeight: 1,
                    marginBottom: '0.6rem',
                    letterSpacing: '-0.03em',
                  }}
                >
                  <CountUp target={s.value} suffix={s.suffix} />
                </span>

                {/* Label */}
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '12.5px',
                    fontWeight: 700,
                    color: '#f1f5f9',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '0.4rem',
                  }}
                >
                  {s.label}
                </span>

                {/* Description */}
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    fontWeight: 400,
                    color: '#94a3b8',
                    lineHeight: 1.5,
                  }}
                >
                  {s.desc}
                </span>
              </div>
            )
          })}
        </div>

        {/* ── Section divider ── */}
        <SectionLabel label="MON PROFIL" color="#a78bfa" mt="my-32" />

        {/* ── CE QUE J'APPORTE + DOMAINES CLÉS — 2 cols ── */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">

          {/* CE QUE J'APPORTE */}
          <div
            className="animate-fade-up rounded-2xl p-8 md:p-12"
            style={{ background: 'rgba(11,16,32,0.65)', border: '1px solid rgba(255,255,255,0.1)', transitionDelay: '0.12s' }}
          >
            <p
              style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: '13px',
                fontWeight: 700,
                color: '#22d3ee',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '2.5rem',
              }}
            >
              CE QUE J'APPORTE
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
              {apports.map((item, i) => {
                const ItemIcon = item.icon
                return (
                  <div key={i} className="flex gap-5" style={{ paddingBottom: i < apports.length - 1 ? '2rem' : 0, borderBottom: i < apports.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                    <div
                      className="flex items-center justify-center rounded-xl flex-shrink-0"
                      style={{
                        width: '50px',
                        height: '50px',
                        background: `${item.color}14`,
                        border: `1px solid ${item.color}40`,
                      }}
                    >
                      {ItemIcon && <ItemIcon size={24} style={{ color: item.color }} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: item.color, marginBottom: '0.5rem', lineHeight: 1.3 }}>
                        {item.title}
                      </p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14.5px', color: '#cbd5e1', lineHeight: 1.8 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* DOMAINES CLÉS */}
          <div
            className="animate-fade-up rounded-2xl p-8 md:p-12"
            style={{ background: 'rgba(11,16,32,0.65)', border: '1px solid rgba(255,255,255,0.1)', transitionDelay: '0.16s' }}
          >
            <p
              style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: '13px',
                fontWeight: 700,
                color: '#a78bfa',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '2.5rem',
              }}
            >
              DOMAINES CL{'\u00c9'}S
            </p>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 18px' }}>
              <tbody>
                {domainesSmall.map((row, i) => (
                  <tr key={i}>
                    <td
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '13.5px',
                        fontWeight: 700,
                        color: '#64748b',
                        whiteSpace: 'nowrap',
                        paddingRight: '20px',
                        verticalAlign: 'top',
                        paddingTop: '8px',
                      }}
                    >
                      {row.cat}
                    </td>
                    <td>
                      <div className="flex flex-wrap" style={{ gap: '10px' }}>
                        {row.tags.map(tag => (
                          <span
                            key={tag}
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '13px',
                              fontWeight: 500,
                              color: '#e2e8f0',
                              background: 'rgba(255,255,255,0.05)',
                              border: '1px solid rgba(255,255,255,0.1)',
                              borderRadius: '10px',
                              padding: '7px 16px',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Section divider ── */}
        <SectionLabel label="TECHNOLOGIES MAÎTRISÉES" color="#34d399" mt="my-32" />

        {/* ── Full-width tech grid card — style cyber's second pills section ── */}
        <div
          className="animate-fade-up rounded-2xl p-8 md:p-12 mb-24"
          style={{ background: 'rgba(11,16,32,0.65)', border: '1px solid rgba(255,255,255,0.1)', transitionDelay: '0.2s' }}
        >
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 16px' }}>
            <tbody>
              {techGrid.map((row, i) => (
                <tr key={i}>
                  <td
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#64748b',
                      whiteSpace: 'nowrap',
                      paddingRight: '24px',
                      verticalAlign: 'top',
                      paddingTop: '10px',
                    }}
                  >
                    {row.cat}
                  </td>
                  <td>
                    <div className="flex flex-wrap" style={{ gap: '12px' }}>
                      {row.tags.map(tag => (
                        <span
                          key={tag}
                          className="transition-all duration-200"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '14px',
                            fontWeight: 500,
                            color: '#e2e8f0',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '10px',
                            padding: '9px 20px',
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = 'rgba(34,211,238,0.1)'
                            e.currentTarget.style.borderColor = 'rgba(34,211,238,0.3)'
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Mes Réseaux — LinkedIn, GitHub, Discord ── */}
        <SectionLabel label="MES RÉSEAUX" color="#818cf8" mt="my-20" />

        <div className="animate-fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '2rem', marginTop: '2rem' }}>
          {[
            { label: 'LinkedIn', desc: 'Profil professionnel', href: 'https://www.linkedin.com/in/dilan-lengue', color: '#0A66C2', icon: (<svg viewBox="0 0 24 24" fill="currentColor" width="38" height="38"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>) },
            { label: 'GitHub', desc: 'Mes projets', href: 'https://github.com/dilan-lengue', color: '#e6ecf8', icon: (<svg viewBox="0 0 24 24" fill="currentColor" width="38" height="38"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>) },
            { label: 'Discord', desc: 'Communauté', href: '#contact', color: '#5865F2', icon: (<svg viewBox="0 0 24 24" fill="currentColor" width="38" height="38"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/></svg>) },
            { label: 'Email', desc: 'Me contacter', href: 'mailto:lenguedilan@gmail.com', color: '#22d3ee', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="38" height="38"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>) },
          ].map((net, i) => (
            <a key={i} href={net.href} target={net.href.startsWith('http') ? '_blank' : undefined} rel={net.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex flex-col items-center gap-4 rounded-2xl transition-all duration-300"
              style={{ textDecoration: 'none', padding: '2.5rem 2rem', background: 'linear-gradient(145deg, rgba(11,16,32,0.8), rgba(15,20,40,0.65))', border: `2px solid ${net.color}18` }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${net.color}55`; e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.35), 0 0 30px ${net.color}12`; e.currentTarget.style.transform = 'translateY(-6px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = `${net.color}18`; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div className="flex items-center justify-center rounded-2xl" style={{ width: '80px', height: '80px', background: `${net.color}10`, border: `2px solid ${net.color}30`, boxShadow: `0 0 24px ${net.color}08`, color: net.color }}>{net.icon}</div>
              <div className="text-center">
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', fontWeight: 800, color: '#f1f5f9', marginBottom: '4px' }}>{net.label}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 500, color: '#94a3b8' }}>{net.desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* ── INFRASTRUCTURE ── */}
        <SectionLabel label="INFRASTRUCTURE" color="#22d3ee" mt="my-32" />

        {/* ── Matrix Rain + Terminal ── */}
        <div className="animate-fade-up mt-8" style={{ transitionDelay: '0.28s' }}>
          <div
            className="rounded-2xl overflow-hidden relative"
            style={{
              background: 'rgba(5,8,20,0.95)',
              border: '1px solid rgba(34,211,238,0.1)',
            }}
          >
            <button
              onClick={toggleTerminal}
              className="absolute top-4 right-4 z-20 flex items-center gap-2 rounded-xl transition-all hover:-translate-y-0.5"
              style={{
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                fontSize: '13px',
                fontWeight: 600,
                color: '#22d3ee',
                background: 'rgba(5,8,20,0.85)',
                border: '1px solid rgba(34,211,238,0.25)',
                padding: '8px 16px',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
              }}
            >
              <ArrowLeft size={14} />
              {showTerminal ? 'Retour' : 'Mes stages ?'}
            </button>

            <div style={{ minHeight: '420px' }}>
              {showTerminal ? (
                <div className="animate-fade-up">
                  <TerminalStages />
                </div>
              ) : (
                <MatrixRain height={420} />
              )}
            </div>
          </div>
        </div>

        {/* ── Contact + CV ── */}
        <div className="animate-fade-up flex flex-wrap justify-center gap-5" style={{ marginTop: '4rem' }}>
          <a href="/contact" className="flex items-center gap-2 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600, color: '#0b1020', background: 'rgba(255,255,255,0.95)', padding: '16px 32px' }}>
            <Mail size={18} /> Me contacter
          </a>
          <a href="/cv-dilan-lengue.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600, color: '#e6ecf8', background: 'transparent', border: '1px solid rgba(34,211,238,0.25)', padding: '16px 32px' }}>
            <Download size={18} /> T{'é'}l{'é'}charger mon CV
          </a>
        </div>


      </div>
    </section>
  )
}
