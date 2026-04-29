import sharp from 'sharp'
import { mkdir } from 'fs/promises'

const W = 1280
const H = 720
const OUT_DIR = 'C:/xampp/htdocs/potfolit/public/projects'

await mkdir(OUT_DIR, { recursive: true })

/* ─────────── Common shared SVG fragments ─────────── */
function bg(accent) {
  return `
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a1024"/>
      <stop offset="100%" stop-color="#06080f"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <filter id="soft"><feGaussianBlur stdDeviation="0.6"/></filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${gridPattern()}
  ${cornerBrackets(accent)}
  `
}

function gridPattern() {
  let s = ''
  for (let x = 0; x <= W; x += 60) {
    s += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="rgba(34,211,238,0.04)" stroke-width="0.5"/>`
  }
  for (let y = 0; y <= H; y += 60) {
    s += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="rgba(34,211,238,0.04)" stroke-width="0.5"/>`
  }
  return s
}

function cornerBrackets(c) {
  const L = 26
  const o = 24
  return `
  <path d="M${o} ${o + L} L${o} ${o} L${o + L} ${o}" fill="none" stroke="${c}" stroke-opacity="0.5" stroke-width="2"/>
  <path d="M${W - o - L} ${o} L${W - o} ${o} L${W - o} ${o + L}" fill="none" stroke="${c}" stroke-opacity="0.5" stroke-width="2"/>
  <path d="M${o} ${H - o - L} L${o} ${H - o} L${o + L} ${H - o}" fill="none" stroke="${c}" stroke-opacity="0.5" stroke-width="2"/>
  <path d="M${W - o - L} ${H - o} L${W - o} ${H - o} L${W - o} ${H - o - L}" fill="none" stroke="${c}" stroke-opacity="0.5" stroke-width="2"/>
  `
}

function badge(x, y, label, color) {
  return `
  <rect x="${x}" y="${y}" width="${label.length * 8.6 + 22}" height="28" rx="6" fill="rgba(11,16,32,0.85)" stroke="${color}" stroke-opacity="0.45"/>
  <text x="${x + 11}" y="${y + 19}" font-family="'JetBrains Mono', monospace" font-size="13" fill="${color}" font-weight="700" letter-spacing="1">${label}</text>
  `
}

/* ─────────── 1. Active Directory ─────────── */
function svgAD() {
  const c = '#818cf8'
  let s = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">`
  s += bg(c)
  s += badge(40, 40, 'ACTIVE DIRECTORY', c)
  s += `<text x="40" y="118" font-family="'Orbitron', sans-serif" font-size="42" fill="#f1f5f9" font-weight="800">Domain Controller</text>`
  s += `<text x="40" y="152" font-family="'Inter', sans-serif" font-size="18" fill="#94a3b8">corp.local · DC01</text>`

  // Center DC server
  const cx = W / 2, cy = 420
  s += `<g transform="translate(${cx - 70}, ${cy - 70})">
    <rect x="0" y="0" width="140" height="140" rx="14" fill="rgba(129,140,248,0.12)" stroke="${c}" stroke-width="2"/>
    <rect x="20" y="22" width="100" height="14" rx="3" fill="${c}" opacity="0.55"/>
    <rect x="20" y="44" width="100" height="14" rx="3" fill="${c}" opacity="0.4"/>
    <rect x="20" y="66" width="100" height="14" rx="3" fill="${c}" opacity="0.3"/>
    <circle cx="36" cy="100" r="5" fill="#22c55e"/>
    <circle cx="56" cy="100" r="5" fill="#22c55e"/>
    <circle cx="76" cy="100" r="5" fill="#fbbf24"/>
    <circle cx="96" cy="100" r="5" fill="${c}"/>
    <text x="70" y="128" font-family="'JetBrains Mono', monospace" font-size="12" fill="${c}" text-anchor="middle" font-weight="700">DC01</text>
  </g>`

  // OUs / clients radiating
  const items = [
    { label: 'OU=IT', x: 250, y: 280 },
    { label: 'OU=RH', x: W - 290, y: 280 },
    { label: 'OU=Compta', x: 250, y: 560 },
    { label: 'OU=Direction', x: W - 310, y: 560 },
    { label: 'GPO=Default', x: 100, y: 420 },
    { label: 'DNS+DHCP', x: W - 220, y: 420 },
  ]
  items.forEach(it => {
    s += `<line x1="${cx}" y1="${cy}" x2="${it.x + 70}" y2="${it.y + 30}" stroke="${c}" stroke-opacity="0.35" stroke-width="1.5" stroke-dasharray="4 4"/>`
    s += `<rect x="${it.x}" y="${it.y}" width="140" height="60" rx="10" fill="rgba(11,16,32,0.85)" stroke="${c}" stroke-opacity="0.45"/>`
    s += `<text x="${it.x + 70}" y="${it.y + 38}" font-family="'Inter', sans-serif" font-size="15" fill="#e2e8f0" text-anchor="middle" font-weight="600">${it.label}</text>`
  })

  s += `<text x="${W - 40}" y="${H - 32}" font-family="'JetBrains Mono', monospace" font-size="11" fill="${c}" opacity="0.6" text-anchor="end">Windows Server · GPO · DNS · DHCP</text>`
  s += `</svg>`
  return s
}

/* ─────────── 2. Cisco VLAN ─────────── */
function svgVLAN() {
  const c = '#22d3ee'
  let s = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`
  s += bg(c)
  s += badge(40, 40, 'CISCO VLAN 802.1Q', c)
  s += `<text x="40" y="118" font-family="'Orbitron', sans-serif" font-size="42" fill="#f1f5f9" font-weight="800">Network Segmentation</text>`
  s += `<text x="40" y="152" font-family="'Inter', sans-serif" font-size="18" fill="#94a3b8">Router-on-a-Stick · Inter-VLAN routing</text>`

  // Router top
  const rx = W / 2 - 80, ry = 220
  s += `<rect x="${rx}" y="${ry}" width="160" height="80" rx="12" fill="rgba(34,211,238,0.12)" stroke="${c}" stroke-width="2"/>`
  s += `<text x="${rx + 80}" y="${ry + 36}" font-family="'Orbitron', sans-serif" font-size="18" fill="${c}" text-anchor="middle" font-weight="800">ROUTER</text>`
  s += `<text x="${rx + 80}" y="${ry + 60}" font-family="'JetBrains Mono', monospace" font-size="13" fill="#e2e8f0" text-anchor="middle">Cisco 2901</text>`

  // Switch middle
  const sx = W / 2 - 140, sy = 380
  s += `<rect x="${sx}" y="${sy}" width="280" height="60" rx="10" fill="rgba(34,211,238,0.18)" stroke="${c}" stroke-width="2"/>`
  s += `<text x="${sx + 140}" y="${sy + 38}" font-family="'Orbitron', sans-serif" font-size="18" fill="${c}" text-anchor="middle" font-weight="800">SWITCH · 802.1Q TRUNK</text>`

  // Trunk line
  s += `<line x1="${rx + 80}" y1="${ry + 80}" x2="${sx + 140}" y2="${sy}" stroke="${c}" stroke-width="3"/>`
  s += `<rect x="${rx + 100}" y="320" width="60" height="22" rx="4" fill="rgba(11,16,32,0.85)" stroke="${c}"/>`
  s += `<text x="${rx + 130}" y="336" font-family="'JetBrains Mono', monospace" font-size="11" fill="${c}" text-anchor="middle" font-weight="700">TRUNK</text>`

  // 4 VLAN groups bottom
  const vlans = [
    { id: 'VLAN 10', name: 'IT', col: '#22d3ee', x: 90 },
    { id: 'VLAN 20', name: 'RH', col: '#a78bfa', x: 380 },
    { id: 'VLAN 30', name: 'Compta', col: '#34d399', x: 670 },
    { id: 'VLAN 99', name: 'Admin', col: '#fbbf24', x: 960 },
  ]
  vlans.forEach(v => {
    s += `<line x1="${sx + 30 + (v.x - 90) / 3.4}" y1="${sy + 60}" x2="${v.x + 110}" y2="560" stroke="${v.col}" stroke-opacity="0.5" stroke-width="2"/>`
    s += `<rect x="${v.x}" y="560" width="220" height="100" rx="12" fill="rgba(11,16,32,0.85)" stroke="${v.col}" stroke-width="2"/>`
    s += `<text x="${v.x + 110}" y="592" font-family="'JetBrains Mono', monospace" font-size="14" fill="${v.col}" text-anchor="middle" font-weight="700">${v.id}</text>`
    s += `<text x="${v.x + 110}" y="618" font-family="'Inter', sans-serif" font-size="22" fill="#f1f5f9" text-anchor="middle" font-weight="800">${v.name}</text>`
    s += `<text x="${v.x + 110}" y="644" font-family="'Inter', sans-serif" font-size="13" fill="#94a3b8" text-anchor="middle">192.168.${v.id.split(' ')[1]}.0/24</text>`
  })

  s += `</svg>`
  return s
}

/* ─────────── 3. OpenVPN ─────────── */
function svgVPN() {
  const c = '#a78bfa'
  let s = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`
  s += bg(c)
  s += badge(40, 40, 'OPENVPN · SSL/TLS', c)
  s += `<text x="40" y="118" font-family="'Orbitron', sans-serif" font-size="42" fill="#f1f5f9" font-weight="800">Encrypted Tunnel</text>`
  s += `<text x="40" y="152" font-family="'Inter', sans-serif" font-size="18" fill="#94a3b8">PKI · CA · Server &amp; Client certificates</text>`

  // Client left
  const cy = 420
  s += `<rect x="100" y="${cy - 70}" width="180" height="140" rx="14" fill="rgba(167,139,250,0.12)" stroke="${c}" stroke-width="2"/>`
  s += `<text x="190" y="${cy - 30}" font-family="'Orbitron', sans-serif" font-size="20" fill="${c}" text-anchor="middle" font-weight="800">CLIENT</text>`
  s += `<text x="190" y="${cy - 5}" font-family="'JetBrains Mono', monospace" font-size="12" fill="#e2e8f0" text-anchor="middle">remote.dilan</text>`
  s += `<rect x="135" y="${cy + 10}" width="110" height="22" rx="3" fill="rgba(167,139,250,0.25)"/>`
  s += `<text x="190" y="${cy + 27}" font-family="'JetBrains Mono', monospace" font-size="11" fill="${c}" text-anchor="middle">client.crt</text>`
  s += `<rect x="135" y="${cy + 38}" width="110" height="22" rx="3" fill="rgba(167,139,250,0.25)"/>`
  s += `<text x="190" y="${cy + 55}" font-family="'JetBrains Mono', monospace" font-size="11" fill="${c}" text-anchor="middle">client.key</text>`

  // Server right
  s += `<rect x="${W - 280}" y="${cy - 70}" width="180" height="140" rx="14" fill="rgba(167,139,250,0.18)" stroke="${c}" stroke-width="2"/>`
  s += `<text x="${W - 190}" y="${cy - 30}" font-family="'Orbitron', sans-serif" font-size="20" fill="${c}" text-anchor="middle" font-weight="800">SERVER</text>`
  s += `<text x="${W - 190}" y="${cy - 5}" font-family="'JetBrains Mono', monospace" font-size="12" fill="#e2e8f0" text-anchor="middle">vpn.corp.local</text>`
  s += `<rect x="${W - 245}" y="${cy + 10}" width="110" height="22" rx="3" fill="rgba(167,139,250,0.25)"/>`
  s += `<text x="${W - 190}" y="${cy + 27}" font-family="'JetBrains Mono', monospace" font-size="11" fill="${c}" text-anchor="middle">server.crt</text>`
  s += `<rect x="${W - 245}" y="${cy + 38}" width="110" height="22" rx="3" fill="rgba(167,139,250,0.25)"/>`
  s += `<text x="${W - 190}" y="${cy + 55}" font-family="'JetBrains Mono', monospace" font-size="11" fill="${c}" text-anchor="middle">ca.crt</text>`

  // Tunnel
  s += `<defs><pattern id="lock" patternUnits="userSpaceOnUse" width="40" height="20"><circle cx="6" cy="10" r="2.5" fill="${c}" opacity="0.5"/></pattern></defs>`
  s += `<path d="M 280 ${cy} Q ${W / 2} ${cy - 80}, ${W - 280} ${cy}" stroke="${c}" stroke-width="4" fill="none" stroke-dasharray="14 10" opacity="0.85"/>`
  s += `<rect x="${W / 2 - 90}" y="${cy - 130}" width="180" height="38" rx="19" fill="rgba(11,16,32,0.95)" stroke="${c}" stroke-width="2"/>`
  s += `<text x="${W / 2}" y="${cy - 105}" font-family="'JetBrains Mono', monospace" font-size="14" fill="${c}" text-anchor="middle" font-weight="700">🔒 AES-256-GCM</text>`

  s += `<text x="${W / 2}" y="640" font-family="'Inter', sans-serif" font-size="16" fill="#94a3b8" text-anchor="middle">Tunnel SSL/TLS chiffré · Authentification mutuelle par certificats</text>`
  s += `</svg>`
  return s
}

/* ─────────── 4. Nagios ─────────── */
function svgNagios() {
  const c = '#34d399'
  let s = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`
  s += bg(c)
  s += badge(40, 40, 'NAGIOS CORE', c)
  s += `<text x="40" y="118" font-family="'Orbitron', sans-serif" font-size="42" fill="#f1f5f9" font-weight="800">Monitoring Dashboard</text>`
  s += `<text x="40" y="152" font-family="'Inter', sans-serif" font-size="18" fill="#94a3b8">Hosts · Services · Alerts · NRPE / SNMP</text>`

  // Status summary bar
  const statusY = 200
  const stats = [
    { label: 'OK', val: '24', col: '#22c55e' },
    { label: 'WARNING', val: '3', col: '#fbbf24' },
    { label: 'CRITICAL', val: '1', col: '#ef4444' },
    { label: 'UNKNOWN', val: '0', col: '#94a3b8' },
  ]
  stats.forEach((st, i) => {
    const x = 40 + i * 300
    s += `<rect x="${x}" y="${statusY}" width="280" height="80" rx="10" fill="rgba(11,16,32,0.85)" stroke="${st.col}" stroke-width="2"/>`
    s += `<circle cx="${x + 30}" cy="${statusY + 40}" r="9" fill="${st.col}"/>`
    s += `<text x="${x + 60}" y="${statusY + 35}" font-family="'Inter', sans-serif" font-size="13" fill="#94a3b8" font-weight="600">${st.label}</text>`
    s += `<text x="${x + 60}" y="${statusY + 62}" font-family="'Orbitron', sans-serif" font-size="28" fill="${st.col}" font-weight="800">${st.val}</text>`
  })

  // Hosts grid
  const hosts = [
    { n: 'web01.corp', s: 'OK', sv: 'HTTP, HTTPS, SSH', col: '#22c55e' },
    { n: 'db01.corp', s: 'OK', sv: 'MySQL, Backup', col: '#22c55e' },
    { n: 'mail.corp', s: 'WARN', sv: 'SMTP, IMAP', col: '#fbbf24' },
    { n: 'fw01.corp', s: 'OK', sv: 'Routing, NAT', col: '#22c55e' },
    { n: 'ad01.corp', s: 'OK', sv: 'AD, DNS, DHCP', col: '#22c55e' },
    { n: 'log01.corp', s: 'CRIT', sv: 'Disk Full', col: '#ef4444' },
  ]
  hosts.forEach((h, i) => {
    const x = 40 + (i % 3) * 400
    const y = 320 + Math.floor(i / 3) * 170
    s += `<rect x="${x}" y="${y}" width="380" height="150" rx="12" fill="rgba(11,16,32,0.85)" stroke="${h.col}" stroke-opacity="0.5" stroke-width="1.5"/>`
    s += `<circle cx="${x + 24}" cy="${y + 30}" r="7" fill="${h.col}"/>`
    s += `<text x="${x + 42}" y="${y + 36}" font-family="'JetBrains Mono', monospace" font-size="17" fill="#f1f5f9" font-weight="700">${h.n}</text>`
    s += `<text x="${x + 42}" y="${y + 60}" font-family="'Inter', sans-serif" font-size="13" fill="${h.col}" font-weight="600">[${h.s}]</text>`
    s += `<text x="${x + 24}" y="${y + 100}" font-family="'Inter', sans-serif" font-size="13" fill="#94a3b8">Services: ${h.sv}</text>`
    s += `<text x="${x + 24}" y="${y + 124}" font-family="'JetBrains Mono', monospace" font-size="11" fill="#475569">Last check · 15s ago</text>`
  })

  s += `</svg>`
  return s
}

/* ─────────── 5. Nessus ─────────── */
function svgNessus() {
  const c = '#f87171'
  let s = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`
  s += bg(c)
  s += badge(40, 40, 'VULNERABILITY SCAN', c)
  s += `<text x="40" y="118" font-family="'Orbitron', sans-serif" font-size="42" fill="#f1f5f9" font-weight="800">Nessus Audit Report</text>`
  s += `<text x="40" y="152" font-family="'Inter', sans-serif" font-size="18" fill="#94a3b8">192.168.1.0/24 · 8 hosts scanned · CVSS analysis</text>`

  // Donut chart placeholder
  const chartCx = 280, chartCy = 460, r = 140
  s += `<circle cx="${chartCx}" cy="${chartCy}" r="${r}" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="36"/>`
  // Critical (12% red)
  s += `<circle cx="${chartCx}" cy="${chartCy}" r="${r}" fill="none" stroke="#ef4444" stroke-width="36" stroke-dasharray="${r * 2 * Math.PI * 0.12} ${r * 2 * Math.PI}" transform="rotate(-90 ${chartCx} ${chartCy})"/>`
  // High (22% orange)
  const c2start = r * 2 * Math.PI * 0.12
  s += `<circle cx="${chartCx}" cy="${chartCy}" r="${r}" fill="none" stroke="#f97316" stroke-width="36" stroke-dasharray="${r * 2 * Math.PI * 0.22} ${r * 2 * Math.PI}" stroke-dashoffset="${-c2start}" transform="rotate(-90 ${chartCx} ${chartCy})"/>`
  // Medium (35% yellow)
  const c3start = r * 2 * Math.PI * 0.34
  s += `<circle cx="${chartCx}" cy="${chartCy}" r="${r}" fill="none" stroke="#fbbf24" stroke-width="36" stroke-dasharray="${r * 2 * Math.PI * 0.35} ${r * 2 * Math.PI}" stroke-dashoffset="${-c3start}" transform="rotate(-90 ${chartCx} ${chartCy})"/>`
  s += `<text x="${chartCx}" y="${chartCy - 8}" font-family="'Orbitron', sans-serif" font-size="56" fill="#f1f5f9" text-anchor="middle" font-weight="800">47</text>`
  s += `<text x="${chartCx}" y="${chartCy + 28}" font-family="'Inter', sans-serif" font-size="14" fill="#94a3b8" text-anchor="middle">CVE détectées</text>`

  // Right legend / breakdown
  const lx = 580
  const buckets = [
    { lab: 'CRITICAL · CVSS 9.0+', val: 6, col: '#ef4444' },
    { lab: 'HIGH · CVSS 7.0-8.9', val: 10, col: '#f97316' },
    { lab: 'MEDIUM · CVSS 4.0-6.9', val: 16, col: '#fbbf24' },
    { lab: 'LOW · CVSS 0.1-3.9', val: 15, col: '#22c55e' },
  ]
  buckets.forEach((b, i) => {
    const y = 290 + i * 80
    s += `<rect x="${lx}" y="${y}" width="640" height="60" rx="10" fill="rgba(11,16,32,0.85)" stroke="${b.col}" stroke-opacity="0.45"/>`
    s += `<rect x="${lx}" y="${y}" width="6" height="60" rx="3" fill="${b.col}"/>`
    s += `<text x="${lx + 24}" y="${y + 26}" font-family="'JetBrains Mono', monospace" font-size="13" fill="${b.col}" font-weight="700">${b.lab}</text>`
    s += `<text x="${lx + 24}" y="${y + 48}" font-family="'Inter', sans-serif" font-size="14" fill="#94a3b8">CVE-2024-${5400 + i * 12}, CVE-2025-${1200 + i * 7}…</text>`
    s += `<text x="${lx + 612}" y="${y + 38}" font-family="'Orbitron', sans-serif" font-size="26" fill="${b.col}" text-anchor="end" font-weight="800">${b.val}</text>`
  })
  s += `</svg>`
  return s
}

/* ─────────── 6. GLPI ─────────── */
function svgGLPI() {
  const c = '#fbbf24'
  let s = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`
  s += bg(c)
  s += badge(40, 40, 'GLPI · ITSM', c)
  s += `<text x="40" y="118" font-family="'Orbitron', sans-serif" font-size="42" fill="#f1f5f9" font-weight="800">Asset Management</text>`
  s += `<text x="40" y="152" font-family="'Inter', sans-serif" font-size="18" fill="#94a3b8">Inventory · Tickets · ITIL · FusionInventory</text>`

  // Stats row
  const statY = 200
  const stats = [
    { lab: 'POSTES', val: '142', col: '#22d3ee' },
    { lab: 'SERVEURS', val: '18', col: '#a78bfa' },
    { lab: 'TICKETS OUVERTS', val: '7', col: '#fbbf24' },
    { lab: 'RÉSOLUS / 30J', val: '124', col: '#22c55e' },
  ]
  stats.forEach((st, i) => {
    const x = 40 + i * 300
    s += `<rect x="${x}" y="${statY}" width="280" height="80" rx="10" fill="rgba(11,16,32,0.85)" stroke="${st.col}" stroke-opacity="0.45"/>`
    s += `<text x="${x + 20}" y="${statY + 32}" font-family="'JetBrains Mono', monospace" font-size="11" fill="#94a3b8" font-weight="600" letter-spacing="1">${st.lab}</text>`
    s += `<text x="${x + 20}" y="${statY + 64}" font-family="'Orbitron', sans-serif" font-size="32" fill="${st.col}" font-weight="800">${st.val}</text>`
  })

  // Inventory rows table
  const tabY = 320
  s += `<rect x="40" y="${tabY}" width="${W - 80}" height="48" rx="8" fill="rgba(34,211,238,0.08)"/>`
  const cols = ['#', 'NOM', 'TYPE', 'OS', 'STATUT', 'ASSIGNÉ']
  cols.forEach((cn, i) => {
    s += `<text x="${60 + i * 195}" y="${tabY + 30}" font-family="'JetBrains Mono', monospace" font-size="12" fill="#22d3ee" font-weight="700">${cn}</text>`
  })
  const rows = [
    ['#1042', 'PC-IT-04', 'Poste', 'Win 11', 'En service', 'L. Martin'],
    ['#1043', 'SRV-AD01', 'Serveur', 'Win Srv 25', 'En service', 'D. Lengue'],
    ['#1044', 'PC-RH-08', 'Poste', 'Win 11', 'Maintenance', 'M. Roux'],
    ['#1045', 'PRT-LASER-03', 'Imprimante', 'HP', 'En panne', '—'],
    ['#1046', 'SRV-WEB02', 'Serveur', 'Debian 12', 'En service', 'D. Lengue'],
  ]
  rows.forEach((r, i) => {
    const y = tabY + 48 + i * 56
    s += `<rect x="40" y="${y}" width="${W - 80}" height="48" rx="6" fill="rgba(11,16,32,0.5)" stroke="rgba(255,255,255,0.04)"/>`
    r.forEach((cell, j) => {
      const col = j === 4
        ? (cell === 'En service' ? '#22c55e' : cell === 'Maintenance' ? '#fbbf24' : '#ef4444')
        : '#e2e8f0'
      s += `<text x="${60 + j * 195}" y="${y + 30}" font-family="'Inter', sans-serif" font-size="14" fill="${col}" font-weight="${j === 4 ? 700 : 500}">${cell}</text>`
    })
  })

  s += `</svg>`
  return s
}

/* ─────────── 7. Linux ─────────── */
function svgLinux() {
  const c = '#fb923c'
  let s = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`
  s += bg(c)
  s += badge(40, 40, 'LINUX · DEBIAN 12', c)
  s += `<text x="40" y="118" font-family="'Orbitron', sans-serif" font-size="42" fill="#f1f5f9" font-weight="800">Multi-Service Server</text>`
  s += `<text x="40" y="152" font-family="'Inter', sans-serif" font-size="18" fill="#94a3b8">SSH · Apache · vsftpd · iptables firewall</text>`

  // Terminal window
  const tx = 60, ty = 200, tw = W - 120, th = 480
  s += `<rect x="${tx}" y="${ty}" width="${tw}" height="${th}" rx="14" fill="rgba(6,9,18,0.95)" stroke="rgba(34,211,238,0.18)" stroke-width="2"/>`
  s += `<rect x="${tx}" y="${ty}" width="${tw}" height="38" rx="14" fill="rgba(255,255,255,0.025)"/>`
  s += `<rect x="${tx}" y="${ty + 24}" width="${tw}" height="14" fill="rgba(255,255,255,0.025)"/>`
  s += `<circle cx="${tx + 22}" cy="${ty + 19}" r="6" fill="#ff5f57"/>`
  s += `<circle cx="${tx + 44}" cy="${ty + 19}" r="6" fill="#febc2e"/>`
  s += `<circle cx="${tx + 66}" cy="${ty + 19}" r="6" fill="#28c840"/>`
  s += `<text x="${tx + tw / 2}" y="${ty + 24}" font-family="'JetBrains Mono', monospace" font-size="13" fill="#64748b" text-anchor="middle">root@srv01: /etc — bash</text>`

  // Terminal lines
  const lines = [
    { p: 'root@srv01', sep: ':', path: '/etc', cmd: 'systemctl status apache2 ssh vsftpd', out: null },
    { out: '● apache2.service · active (running)' },
    { out: '● ssh.service · active (running)' },
    { out: '● vsftpd.service · active (running)' },
    { p: 'root@srv01', sep: ':', path: '/etc', cmd: 'iptables -L INPUT --line-numbers', out: null },
    { out: 'num  target  prot  source       destination  policy' },
    { out: '1    ACCEPT  tcp   any          dpt:22       SSH' },
    { out: '2    ACCEPT  tcp   192.168.1.0  dpt:80,443   HTTP/S' },
    { out: '3    ACCEPT  tcp   192.168.1.0  dpt:21       FTP' },
    { out: '4    DROP    all   any          any          DEFAULT' },
    { p: 'root@srv01', sep: ':', path: '/etc', cmd: 'fail2ban-client status', out: null },
    { out: '|- Number of jails: 3   |- Banned IPs: 12' },
    { p: 'root@srv01', sep: ':', path: '/etc', cmd: '_', out: null, blink: true },
  ]
  let y = ty + 70
  lines.forEach(l => {
    if (l.cmd != null) {
      s += `<text x="${tx + 20}" y="${y}" font-family="'JetBrains Mono', monospace" font-size="14"><tspan fill="#22d3ee">${l.p}</tspan><tspan fill="#475569">${l.sep}</tspan><tspan fill="#a78bfa">${l.path}</tspan><tspan fill="#475569">$ </tspan><tspan fill="#f1f5f9" font-weight="700">${l.cmd}</tspan></text>`
      if (l.blink) {
        s += `<rect x="${tx + 20 + (l.p.length + 1 + l.path.length + 2 + l.cmd.length) * 8.5}" y="${y - 13}" width="9" height="17" fill="${c}"/>`
      }
    } else if (l.out) {
      s += `<text x="${tx + 36}" y="${y}" font-family="'JetBrains Mono', monospace" font-size="13" fill="${l.out.startsWith('●') ? '#22c55e' : '#cbd5e1'}">${l.out.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</text>`
    }
    y += 28
  })
  s += `</svg>`
  return s
}

/* ─────────── 8b. Sauvegarde / PRA ─────────── */
function svgBackup() {
  const c = '#06b6d4'
  let s = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`
  s += bg(c)
  s += badge(40, 40, 'BACKUP STRATEGY · 3-2-1', c)
  s += `<text x="40" y="118" font-family="'Orbitron', sans-serif" font-size="42" fill="#f1f5f9" font-weight="800">Backup &amp; Recovery</text>`
  s += `<text x="40" y="152" font-family="'Inter', sans-serif" font-size="18" fill="#94a3b8">rsync · Borg Backup · cron · Plan de Reprise d'Activité</text>`

  // 3-2-1 strategy diagram
  const sourceX = 200, srcY = 380
  // Source server
  s += `<rect x="${sourceX - 80}" y="${srcY - 60}" width="160" height="120" rx="14" fill="rgba(6,182,212,0.16)" stroke="${c}" stroke-width="2"/>`
  s += `<text x="${sourceX}" y="${srcY - 22}" font-family="'Orbitron', sans-serif" font-size="18" fill="${c}" text-anchor="middle" font-weight="800">SOURCE</text>`
  s += `<text x="${sourceX}" y="${srcY + 4}" font-family="'JetBrains Mono', monospace" font-size="13" fill="#e2e8f0" text-anchor="middle">srv-prod</text>`
  s += `<text x="${sourceX}" y="${srcY + 28}" font-family="'Inter', sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">/etc · /home · /var</text>`
  s += `<text x="${sourceX}" y="${srcY + 46}" font-family="'JetBrains Mono', monospace" font-size="11" fill="#34d399" text-anchor="middle">340 GB</text>`

  // 3 copies destinations
  const dests = [
    { x: 600, y: 240, label: 'COPIE 1', dest: 'NAS local', tech: 'rsync · daily', note: 'Disque dur · même site', col: '#22c55e' },
    { x: 600, y: 400, label: 'COPIE 2', dest: 'Serveur secondaire', tech: 'Borg · weekly', note: 'Bande LTO · même site', col: '#a78bfa' },
    { x: 600, y: 560, label: 'COPIE 3', dest: 'Cloud distant', tech: 'rclone · monthly', note: 'Hors-site · chiffré', col: '#fbbf24' },
  ]
  dests.forEach(d => {
    s += `<line x1="${sourceX + 80}" y1="${srcY}" x2="${d.x}" y2="${d.y + 50}" stroke="${d.col}" stroke-opacity="0.4" stroke-width="2" stroke-dasharray="6 6"/>`
    s += `<rect x="${d.x}" y="${d.y}" width="540" height="100" rx="12" fill="rgba(11,16,32,0.85)" stroke="${d.col}" stroke-width="2"/>`
    s += `<rect x="${d.x}" y="${d.y}" width="6" height="100" rx="3" fill="${d.col}"/>`
    s += `<text x="${d.x + 24}" y="${d.y + 30}" font-family="'JetBrains Mono', monospace" font-size="13" fill="${d.col}" font-weight="700" letter-spacing="1">${d.label}</text>`
    s += `<text x="${d.x + 24}" y="${d.y + 54}" font-family="'Orbitron', sans-serif" font-size="20" fill="#f1f5f9" font-weight="800">${d.dest}</text>`
    s += `<text x="${d.x + 24}" y="${d.y + 78}" font-family="'Inter', sans-serif" font-size="13" fill="#94a3b8">${d.note}</text>`
    s += `<text x="${d.x + 510}" y="${d.y + 38}" font-family="'JetBrains Mono', monospace" font-size="12" fill="${d.col}" text-anchor="end" font-weight="600">${d.tech}</text>`
    s += `<circle cx="${d.x + 510}" cy="${d.y + 64}" r="6" fill="${d.col}"/>`
    s += `<text x="${d.x + 498}" y="${d.y + 68}" font-family="'JetBrains Mono', monospace" font-size="10" fill="#94a3b8" text-anchor="end">OK</text>`
  })

  // Footer line
  s += `<text x="${W / 2}" y="680" font-family="'Inter', sans-serif" font-size="14" fill="#94a3b8" text-anchor="middle">Stratégie 3-2-1 · 3 copies · 2 supports · 1 hors-site · Test de restauration mensuel</text>`
  s += `</svg>`
  return s
}

/* ─────────── 9. Marketplace Web ─────────── */
function svgMarketplace() {
  const c = '#f472b6'
  let s = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`
  s += bg(c)
  s += badge(40, 40, 'PHP · MYSQL · MVC', c)
  s += `<text x="40" y="118" font-family="'Orbitron', sans-serif" font-size="42" fill="#f1f5f9" font-weight="800">Marketplace Web</text>`
  s += `<text x="40" y="152" font-family="'Inter', sans-serif" font-size="18" fill="#94a3b8">Authentification · Catalogue · Panier · Responsive</text>`

  // Browser window
  const bx = 60, by = 200, bw = W - 120, bh = 480
  s += `<rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="14" fill="rgba(11,16,32,0.92)" stroke="rgba(244,114,182,0.25)" stroke-width="2"/>`
  s += `<rect x="${bx}" y="${by}" width="${bw}" height="42" rx="14" fill="rgba(255,255,255,0.04)"/>`
  s += `<rect x="${bx}" y="${by + 28}" width="${bw}" height="14" fill="rgba(255,255,255,0.04)"/>`
  s += `<circle cx="${bx + 22}" cy="${by + 21}" r="6" fill="#ff5f57"/>`
  s += `<circle cx="${bx + 44}" cy="${by + 21}" r="6" fill="#febc2e"/>`
  s += `<circle cx="${bx + 66}" cy="${by + 21}" r="6" fill="#28c840"/>`
  s += `<rect x="${bx + 100}" y="${by + 10}" width="${bw - 130}" height="22" rx="11" fill="rgba(0,0,0,0.4)"/>`
  s += `<text x="${bx + 116}" y="${by + 26}" font-family="'JetBrains Mono', monospace" font-size="12" fill="#94a3b8">https://marketplace.local/catalog</text>`

  // Header bar
  s += `<rect x="${bx}" y="${by + 42}" width="${bw}" height="60" fill="rgba(244,114,182,0.08)"/>`
  s += `<text x="${bx + 30}" y="${by + 80}" font-family="'Orbitron', sans-serif" font-size="22" fill="${c}" font-weight="800">SHOP.LENGUE</text>`
  ;['Accueil', 'Catalogue', 'Panier (3)', 'Connexion'].forEach((nv, i) => {
    s += `<text x="${bx + bw - 480 + i * 110}" y="${by + 80}" font-family="'Inter', sans-serif" font-size="14" fill="#cbd5e1" font-weight="600">${nv}</text>`
  })

  // Product cards 4 cols
  const products = [
    { name: 'Casque Audio', price: '79.90', col: '#22d3ee' },
    { name: 'Clavier RGB', price: '129.00', col: '#a78bfa' },
    { name: 'Souris Pro', price: '49.50', col: '#34d399' },
    { name: 'Webcam HD', price: '64.90', col: '#fbbf24' },
  ]
  products.forEach((p, i) => {
    const x = bx + 30 + i * 270
    const y = by + 130
    s += `<rect x="${x}" y="${y}" width="240" height="320" rx="10" fill="rgba(11,16,32,0.85)" stroke="rgba(255,255,255,0.06)"/>`
    s += `<rect x="${x + 12}" y="${y + 12}" width="216" height="160" rx="6" fill="${p.col}" opacity="0.18"/>`
    s += `<rect x="${x + 12 + 60}" y="${y + 12 + 50}" width="96" height="60" rx="6" fill="${p.col}" opacity="0.4"/>`
    s += `<text x="${x + 20}" y="${y + 200}" font-family="'Inter', sans-serif" font-size="16" fill="#f1f5f9" font-weight="700">${p.name}</text>`
    s += `<text x="${x + 20}" y="${y + 226}" font-family="'JetBrains Mono', monospace" font-size="13" fill="#94a3b8">REF-${1000 + i * 7}</text>`
    s += `<text x="${x + 20}" y="${y + 270}" font-family="'Orbitron', sans-serif" font-size="22" fill="${p.col}" font-weight="800">${p.price} €</text>`
    s += `<rect x="${x + 20}" y="${y + 286}" width="200" height="30" rx="6" fill="${c}" opacity="0.85"/>`
    s += `<text x="${x + 120}" y="${y + 306}" font-family="'Inter', sans-serif" font-size="13" fill="#0a1024" text-anchor="middle" font-weight="700">Ajouter au panier</text>`
  })

  s += `</svg>`
  return s
}

/* ─────────── Render ─────────── */
const set = [
  { name: 'ad', svg: svgAD },
  { name: 'vlan', svg: svgVLAN },
  { name: 'vpn', svg: svgVPN },
  { name: 'nagios', svg: svgNagios },
  { name: 'nessus', svg: svgNessus },
  { name: 'glpi', svg: svgGLPI },
  { name: 'linux', svg: svgLinux },
  { name: 'backup', svg: svgBackup },
  { name: 'marketplace', svg: svgMarketplace },
]

for (const item of set) {
  const buf = Buffer.from(item.svg())
  const out = `${OUT_DIR}/${item.name}.webp`
  await sharp(buf).webp({ quality: 86, effort: 6 }).toFile(out)
  console.log(`✓ ${item.name}.webp`)
}
console.log(`\nGenerated ${set.length} mockups in ${OUT_DIR}`)
