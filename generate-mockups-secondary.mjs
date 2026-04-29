import sharp from 'sharp'
import { mkdir } from 'fs/promises'

const W = 1280
const H = 720
const OUT_DIR = 'C:/xampp/htdocs/potfolit/public/projects'

await mkdir(OUT_DIR, { recursive: true })

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

/* AD — GPO console mockup */
function svgAD2() {
  const c = '#818cf8'
  let s = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`
  s += bg(c)
  s += badge(40, 40, 'GROUP POLICY MANAGEMENT', c)
  s += `<text x="40" y="118" font-family="'Orbitron', sans-serif" font-size="42" fill="#f1f5f9" font-weight="800">GPO Console</text>`
  s += `<text x="40" y="152" font-family="'Inter', sans-serif" font-size="18" fill="#94a3b8">Stratégies de groupe appliquées au domaine corp.local</text>`

  // Tree (left panel)
  const tx = 60, ty = 200, tw = 360
  s += `<rect x="${tx}" y="${ty}" width="${tw}" height="460" rx="10" fill="rgba(11,16,32,0.85)" stroke="${c}" stroke-opacity="0.3"/>`
  s += `<rect x="${tx}" y="${ty}" width="${tw}" height="38" rx="10" fill="rgba(255,255,255,0.04)"/>`
  s += `<text x="${tx + 16}" y="${ty + 25}" font-family="'JetBrains Mono', monospace" font-size="13" fill="${c}" font-weight="700">📁 corp.local</text>`
  const tree = [
    { ind: 1, txt: 'Default Domain Policy', icon: '📜' },
    { ind: 2, txt: 'OU = IT', icon: '📂' },
    { ind: 3, txt: 'GPO_IT_Lockdown', icon: '📜' },
    { ind: 3, txt: 'GPO_USB_Disable', icon: '📜' },
    { ind: 2, txt: 'OU = RH', icon: '📂' },
    { ind: 3, txt: 'GPO_RH_Wallpaper', icon: '📜' },
    { ind: 2, txt: 'OU = Compta', icon: '📂' },
    { ind: 3, txt: 'GPO_Compta_Drive', icon: '📜' },
    { ind: 2, txt: 'OU = Direction', icon: '📂' },
    { ind: 3, txt: 'GPO_Password_Strict', icon: '📜' },
  ]
  tree.forEach((it, i) => {
    const y = ty + 60 + i * 36
    const x = tx + 12 + (it.ind - 1) * 18
    s += `<text x="${x}" y="${y}" font-family="'Inter', sans-serif" font-size="14" fill="${it.icon === '📂' ? c : '#cbd5e1'}" font-weight="${it.icon === '📂' ? 700 : 500}">${it.icon} ${it.txt}</text>`
  })

  // Right panel — selected GPO settings
  const px = 460, py = 200, pw = W - 60 - px
  s += `<rect x="${px}" y="${py}" width="${pw}" height="460" rx="10" fill="rgba(11,16,32,0.85)" stroke="${c}" stroke-opacity="0.3"/>`
  s += `<rect x="${px}" y="${py}" width="${pw}" height="38" rx="10" fill="rgba(129,140,248,0.1)"/>`
  s += `<text x="${px + 16}" y="${py + 25}" font-family="'Inter', sans-serif" font-size="14" fill="${c}" font-weight="700">GPO_Password_Strict — Paramètres</text>`

  const settings = [
    { k: 'Longueur min. du mot de passe', v: '14 caractères', col: '#34d399' },
    { k: 'Complexité requise', v: 'Activée', col: '#34d399' },
    { k: 'Historique des mots de passe', v: '12 derniers', col: '#34d399' },
    { k: 'Durée de vie maximale', v: '90 jours', col: '#fbbf24' },
    { k: 'Verrouillage après échecs', v: '5 tentatives', col: '#34d399' },
    { k: 'Désactivation USB amovibles', v: 'Activée', col: '#34d399' },
    { k: 'Restriction RDP', v: 'Groupe Admin uniquement', col: '#34d399' },
    { k: 'Audit accès objets', v: 'Échec et Réussite', col: '#22d3ee' },
    { k: 'Pare-feu Windows', v: 'Activé tous profils', col: '#34d399' },
  ]
  settings.forEach((s2, i) => {
    const y = py + 60 + i * 42
    s += `<line x1="${px + 16}" y1="${y + 28}" x2="${px + pw - 16}" y2="${y + 28}" stroke="rgba(255,255,255,0.05)"/>`
    s += `<text x="${px + 16}" y="${y + 18}" font-family="'Inter', sans-serif" font-size="14" fill="#cbd5e1">${s2.k}</text>`
    s += `<text x="${px + pw - 16}" y="${y + 18}" font-family="'JetBrains Mono', monospace" font-size="13" fill="${s2.col}" font-weight="700" text-anchor="end">${s2.v}</text>`
  })

  s += `</svg>`
  return s
}

/* VLAN — Cisco IOS config */
function svgVLAN2() {
  const c = '#22d3ee'
  let s = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`
  s += bg(c)
  s += badge(40, 40, 'CISCO IOS CONFIGURATION', c)
  s += `<text x="40" y="118" font-family="'Orbitron', sans-serif" font-size="42" fill="#f1f5f9" font-weight="800">Switch Configuration</text>`
  s += `<text x="40" y="152" font-family="'Inter', sans-serif" font-size="18" fill="#94a3b8">Cisco Catalyst 2960 — VLAN, ports access &amp; trunk</text>`

  // Terminal panel
  const tx = 60, ty = 200, tw = W - 120, th = 480
  s += `<rect x="${tx}" y="${ty}" width="${tw}" height="${th}" rx="14" fill="rgba(6,9,18,0.95)" stroke="rgba(34,211,238,0.18)" stroke-width="2"/>`
  s += `<rect x="${tx}" y="${ty}" width="${tw}" height="38" rx="14" fill="rgba(255,255,255,0.025)"/>`
  s += `<rect x="${tx}" y="${ty + 24}" width="${tw}" height="14" fill="rgba(255,255,255,0.025)"/>`
  s += `<circle cx="${tx + 22}" cy="${ty + 19}" r="6" fill="#ff5f57"/>`
  s += `<circle cx="${tx + 44}" cy="${ty + 19}" r="6" fill="#febc2e"/>`
  s += `<circle cx="${tx + 66}" cy="${ty + 19}" r="6" fill="#28c840"/>`
  s += `<text x="${tx + tw / 2}" y="${ty + 24}" font-family="'JetBrains Mono', monospace" font-size="13" fill="#64748b" text-anchor="middle">SW01-CORE# console — Cisco IOS</text>`

  const lines = [
    { p: 'SW01-CORE>', cmd: 'enable', out: false },
    { p: 'SW01-CORE#', cmd: 'configure terminal', out: false },
    { p: '! ', out: 'Création des VLANs', comment: true },
    { p: 'SW01-CORE(config)#', cmd: 'vlan 10', out: false },
    { p: 'SW01-CORE(config-vlan)#', cmd: 'name IT', out: false },
    { p: 'SW01-CORE(config-vlan)#', cmd: 'vlan 20', out: false },
    { p: 'SW01-CORE(config-vlan)#', cmd: 'name RH', out: false },
    { p: 'SW01-CORE(config-vlan)#', cmd: 'vlan 30', out: false },
    { p: 'SW01-CORE(config-vlan)#', cmd: 'name Compta', out: false },
    { p: '! ', out: 'Trunk vers le routeur', comment: true },
    { p: 'SW01-CORE(config)#', cmd: 'interface Gi0/1', out: false },
    { p: 'SW01-CORE(config-if)#', cmd: 'switchport mode trunk', out: false },
    { p: 'SW01-CORE(config-if)#', cmd: 'switchport trunk encapsulation dot1q', out: false },
    { p: 'SW01-CORE(config-if)#', cmd: 'switchport trunk allowed vlan 10,20,30,99', out: false },
    { p: 'SW01-CORE#', cmd: 'show vlan brief', out: false },
  ]

  let y = ty + 70
  lines.forEach(l => {
    if (l.comment) {
      s += `<text x="${tx + 20}" y="${y}" font-family="'JetBrains Mono', monospace" font-size="13" fill="#64748b" font-style="italic">${l.p}${l.out}</text>`
    } else if (l.cmd !== false) {
      s += `<text x="${tx + 20}" y="${y}" font-family="'JetBrains Mono', monospace" font-size="13"><tspan fill="${c}">${l.p}</tspan> <tspan fill="#f1f5f9" font-weight="700">${l.cmd}</tspan></text>`
    }
    y += 24
  })

  // show vlan brief output table
  const tableY = y + 8
  s += `<rect x="${tx + 20}" y="${tableY}" width="${tw - 40}" height="22" fill="rgba(34,211,238,0.08)"/>`
  s += `<text x="${tx + 30}" y="${tableY + 16}" font-family="'JetBrains Mono', monospace" font-size="12" fill="${c}" font-weight="700">VLAN  NAME       STATUS    PORTS</text>`
  const vlanRows = [
    ['10', 'IT', 'active', 'Fa0/1-8'],
    ['20', 'RH', 'active', 'Fa0/9-16'],
    ['30', 'Compta', 'active', 'Fa0/17-22'],
    ['99', 'Admin', 'active', 'Fa0/24'],
  ]
  vlanRows.forEach((r, i) => {
    const yy = tableY + 22 + 22 + i * 22
    s += `<text x="${tx + 30}" y="${yy}" font-family="'JetBrains Mono', monospace" font-size="12" fill="#cbd5e1">${r[0].padEnd(6)}${r[1].padEnd(11)}${r[2].padEnd(10)}${r[3]}</text>`
  })

  s += `</svg>`
  return s
}

/* OpenVPN — connection log */
function svgVPN2() {
  const c = '#a78bfa'
  let s = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`
  s += bg(c)
  s += badge(40, 40, 'OPENVPN STATUS', c)
  s += `<text x="40" y="118" font-family="'Orbitron', sans-serif" font-size="42" fill="#f1f5f9" font-weight="800">Active Connections</text>`
  s += `<text x="40" y="152" font-family="'Inter', sans-serif" font-size="18" fill="#94a3b8">openvpn-status.log — clients connectés en temps réel</text>`

  const tx = 60, ty = 200, tw = W - 120, th = 460
  s += `<rect x="${tx}" y="${ty}" width="${tw}" height="${th}" rx="14" fill="rgba(11,16,32,0.92)" stroke="${c}" stroke-opacity="0.25" stroke-width="1.5"/>`

  // Header
  s += `<rect x="${tx}" y="${ty}" width="${tw}" height="46" rx="14" fill="rgba(167,139,250,0.1)"/>`
  s += `<text x="${tx + 16}" y="${ty + 30}" font-family="'JetBrains Mono', monospace" font-size="14" fill="${c}" font-weight="700">$ cat /var/log/openvpn-status.log</text>`
  s += `<rect x="${tx + tw - 80}" y="${ty + 12}" width="64" height="22" rx="11" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.5)"/>`
  s += `<text x="${tx + tw - 48}" y="${ty + 28}" font-family="'JetBrains Mono', monospace" font-size="12" fill="#34d399" text-anchor="middle" font-weight="700">LIVE</text>`

  // Table headers
  const tableY = ty + 60
  const cols = ['CLIENT', 'IP RÉELLE', 'IP VIRTUELLE', 'CONNECTÉ DEPUIS', 'BYTES IN/OUT']
  const widths = [240, 240, 200, 240, 240]
  let cx = tx + 20
  cols.forEach((cn, i) => {
    s += `<text x="${cx}" y="${tableY + 18}" font-family="'JetBrains Mono', monospace" font-size="11" fill="${c}" font-weight="700" letter-spacing="1">${cn}</text>`
    cx += widths[i]
  })
  s += `<line x1="${tx + 20}" y1="${tableY + 28}" x2="${tx + tw - 20}" y2="${tableY + 28}" stroke="rgba(255,255,255,0.08)"/>`

  // Rows
  const clients = [
    { c: 'dilan@laptop',  ip: '82.66.184.214',  vip: '10.8.0.6',  since: '14h 32min', io: '124M / 28M' },
    { c: 'martin@phone',  ip: '195.122.34.18',  vip: '10.8.0.7',  since: '02h 11min', io: '38M / 12M'  },
    { c: 'roux@desktop',  ip: '78.226.91.143',  vip: '10.8.0.8',  since: '06h 48min', io: '256M / 41M' },
    { c: 'alice@laptop',  ip: '92.184.110.55',  vip: '10.8.0.9',  since: '01h 04min', io: '14M / 5M'   },
    { c: 'bob@tablet',    ip: '176.155.62.201', vip: '10.8.0.10', since: '08h 22min', io: '92M / 18M'  },
  ]
  clients.forEach((cl, i) => {
    const y = tableY + 56 + i * 56
    s += `<rect x="${tx + 20}" y="${y - 18}" width="${tw - 40}" height="48" rx="6" fill="${i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent'}"/>`
    cx = tx + 20
    const vals = [cl.c, cl.ip, cl.vip, cl.since, cl.io]
    vals.forEach((v, j) => {
      const col = j === 0 ? '#f1f5f9' : j === 2 ? c : '#cbd5e1'
      const wt = j === 0 ? 700 : 500
      s += `<text x="${cx}" y="${y + 6}" font-family="'JetBrains Mono', monospace" font-size="13" fill="${col}" font-weight="${wt}">${v}</text>`
      cx += widths[j]
    })
    s += `<circle cx="${tx + tw - 30}" cy="${y + 2}" r="5" fill="#22c55e"/>`
  })

  // Footer summary
  s += `<text x="${tx + 20}" y="${ty + th - 20}" font-family="'Inter', sans-serif" font-size="13" fill="#94a3b8">Total : 5 clients connectés · 524 MB transférés · Cipher AES-256-GCM · Auth SHA256</text>`

  s += `</svg>`
  return s
}

/* Nagios — alert timeline */
function svgNagios2() {
  const c = '#34d399'
  let s = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`
  s += bg(c)
  s += badge(40, 40, 'ALERT HISTORY', c)
  s += `<text x="40" y="118" font-family="'Orbitron', sans-serif" font-size="42" fill="#f1f5f9" font-weight="800">Recent Alerts</text>`
  s += `<text x="40" y="152" font-family="'Inter', sans-serif" font-size="18" fill="#94a3b8">Journal d'événements Nagios — dernières 24 h</text>`

  const events = [
    { t: '14:32', sev: 'CRIT', host: 'log01.corp', svc: 'Disk Space',     msg: 'DISK CRITICAL — /var 96% used',           col: '#ef4444' },
    { t: '13:18', sev: 'WARN', host: 'mail.corp',  svc: 'IMAP Connect',   msg: 'Slow response (3.2s — threshold 2s)',     col: '#fbbf24' },
    { t: '12:04', sev: 'OK',   host: 'web01.corp', svc: 'HTTP',           msg: 'HTTP OK — HTTP/1.1 200 (220 bytes)',      col: '#22c55e' },
    { t: '11:47', sev: 'OK',   host: 'web01.corp', svc: 'HTTP',           msg: 'Service recovered after 4 minutes',        col: '#22c55e' },
    { t: '11:43', sev: 'CRIT', host: 'web01.corp', svc: 'HTTP',           msg: 'CONNECTION REFUSED — port 80 closed',     col: '#ef4444' },
    { t: '09:12', sev: 'WARN', host: 'fw01.corp',  svc: 'CPU Load',       msg: 'Load average: 4.2 (threshold 3.5)',       col: '#fbbf24' },
    { t: '07:55', sev: 'OK',   host: 'ad01.corp',  svc: 'AD Replication', msg: 'AD replication healthy on all DCs',       col: '#22c55e' },
    { t: '06:20', sev: 'OK',   host: 'db01.corp',  svc: 'Backup',         msg: 'Daily backup completed — 28GB in 12min',  col: '#22c55e' },
  ]
  events.forEach((e, i) => {
    const y = 220 + i * 56
    s += `<rect x="60" y="${y}" width="${W - 120}" height="48" rx="10" fill="rgba(11,16,32,0.7)" stroke="${e.col}" stroke-opacity="0.35"/>`
    s += `<rect x="60" y="${y}" width="6" height="48" rx="3" fill="${e.col}"/>`
    s += `<text x="86" y="${y + 30}" font-family="'JetBrains Mono', monospace" font-size="14" fill="#94a3b8" font-weight="700">${e.t}</text>`
    s += `<rect x="156" y="${y + 14}" width="60" height="22" rx="4" fill="${e.col}33" stroke="${e.col}88"/>`
    s += `<text x="186" y="${y + 30}" font-family="'JetBrains Mono', monospace" font-size="11" fill="${e.col}" font-weight="700" text-anchor="middle">${e.sev}</text>`
    s += `<text x="236" y="${y + 30}" font-family="'JetBrains Mono', monospace" font-size="13" fill="#f1f5f9" font-weight="700">${e.host}</text>`
    s += `<text x="416" y="${y + 30}" font-family="'Inter', sans-serif" font-size="13" fill="#cbd5e1">${e.svc}</text>`
    s += `<text x="600" y="${y + 30}" font-family="'JetBrains Mono', monospace" font-size="12" fill="#94a3b8">${e.msg}</text>`
  })
  s += `</svg>`
  return s
}

/* Nessus — finding detail */
function svgNessus2() {
  const c = '#f87171'
  let s = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`
  s += bg(c)
  s += badge(40, 40, 'CVE FINDING DETAIL', c)
  s += `<text x="40" y="118" font-family="'Orbitron', sans-serif" font-size="42" fill="#f1f5f9" font-weight="800">CVE-2024-5400</text>`
  s += `<text x="40" y="152" font-family="'Inter', sans-serif" font-size="18" fill="#94a3b8">Détail d'une vulnérabilité critique détectée</text>`

  // Severity panel
  s += `<rect x="60" y="200" width="380" height="200" rx="14" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2"/>`
  s += `<text x="80" y="240" font-family="'JetBrains Mono', monospace" font-size="13" fill="#fca5a5" font-weight="700" letter-spacing="1">SÉVÉRITÉ</text>`
  s += `<text x="80" y="290" font-family="'Orbitron', sans-serif" font-size="44" fill="#ef4444" font-weight="800">CRITICAL</text>`
  s += `<rect x="80" y="305" width="320" height="14" rx="7" fill="rgba(255,255,255,0.06)"/>`
  s += `<rect x="80" y="305" width="304" height="14" rx="7" fill="#ef4444"/>`
  s += `<text x="80" y="350" font-family="'Inter', sans-serif" font-size="14" fill="#cbd5e1">CVSS Score : <tspan font-weight="700" fill="#ef4444">9.5 / 10</tspan></text>`
  s += `<text x="80" y="375" font-family="'Inter', sans-serif" font-size="14" fill="#cbd5e1">Vecteur : AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H</text>`

  // Affected systems
  s += `<rect x="60" y="420" width="380" height="240" rx="14" fill="rgba(11,16,32,0.85)" stroke="rgba(248,113,113,0.3)"/>`
  s += `<text x="80" y="455" font-family="'JetBrains Mono', monospace" font-size="13" fill="${c}" font-weight="700" letter-spacing="1">SYSTÈMES IMPACTÉS</text>`
  ;[
    { h: 'web01.corp.local', os: 'Debian 11' },
    { h: 'web02.corp.local', os: 'Debian 11' },
    { h: 'mail.corp.local',  os: 'Ubuntu 22.04' },
  ].forEach((it, i) => {
    const y = 480 + i * 50
    s += `<circle cx="92" cy="${y + 4}" r="5" fill="${c}"/>`
    s += `<text x="108" y="${y + 9}" font-family="'JetBrains Mono', monospace" font-size="14" fill="#f1f5f9" font-weight="700">${it.h}</text>`
    s += `<text x="108" y="${y + 28}" font-family="'Inter', sans-serif" font-size="12" fill="#94a3b8">${it.os}</text>`
  })

  // Description / Remediation panel
  s += `<rect x="460" y="200" width="${W - 60 - 460}" height="460" rx="14" fill="rgba(11,16,32,0.85)" stroke="rgba(248,113,113,0.3)"/>`
  s += `<text x="480" y="232" font-family="'JetBrains Mono', monospace" font-size="13" fill="${c}" font-weight="700" letter-spacing="1">DESCRIPTION</text>`
  const desc = [
    'OpenSSL versions antérieures à 3.0.13 contiennent une',
    'faille de désérialisation permettant à un attaquant',
    'distant non authentifié d\'exécuter du code arbitraire',
    'via une requête TLS spécialement conçue.',
  ]
  desc.forEach((line, i) => {
    s += `<text x="480" y="${260 + i * 22}" font-family="'Inter', sans-serif" font-size="14" fill="#cbd5e1">${line}</text>`
  })

  s += `<text x="480" y="380" font-family="'JetBrains Mono', monospace" font-size="13" fill="#34d399" font-weight="700" letter-spacing="1">REMÉDIATION</text>`
  const remed = [
    '✓  Mettre à jour OpenSSL vers 3.0.13 ou supérieure',
    '✓  Redémarrer les services dépendants (nginx, postfix)',
    '✓  Vérifier les versions : openssl version',
    '✓  Auditer les logs des 30 derniers jours',
    '✓  Re-scan Nessus pour validation',
  ]
  remed.forEach((line, i) => {
    s += `<text x="480" y="${410 + i * 26}" font-family="'Inter', sans-serif" font-size="14" fill="#cbd5e1">${line}</text>`
  })

  s += `<text x="480" y="585" font-family="'JetBrains Mono', monospace" font-size="13" fill="${c}" font-weight="700" letter-spacing="1">RÉFÉRENCES</text>`
  s += `<text x="480" y="610" font-family="'JetBrains Mono', monospace" font-size="13" fill="#94a3b8">→ NVD · MITRE · ANSSI Bulletin 2024-CVE-5400</text>`
  s += `<text x="480" y="632" font-family="'JetBrains Mono', monospace" font-size="13" fill="#94a3b8">→ Vendor advisory : openssl.org/news/secadv/</text>`

  s += `</svg>`
  return s
}

/* GLPI — ticket detail */
function svgGLPI2() {
  const c = '#fbbf24'
  let s = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`
  s += bg(c)
  s += badge(40, 40, 'TICKET #1042', c)
  s += `<text x="40" y="118" font-family="'Orbitron', sans-serif" font-size="42" fill="#f1f5f9" font-weight="800">Support Ticket</text>`
  s += `<text x="40" y="152" font-family="'Inter', sans-serif" font-size="18" fill="#94a3b8">Workflow ITIL — incident d'impression résolu</text>`

  // Ticket header
  s += `<rect x="60" y="200" width="${W - 120}" height="80" rx="14" fill="rgba(251,191,36,0.08)" stroke="${c}" stroke-width="2"/>`
  s += `<text x="80" y="232" font-family="'Orbitron', sans-serif" font-size="22" fill="#f1f5f9" font-weight="800">Imprimante PRT-LASER-03 hors service</text>`
  s += `<text x="80" y="258" font-family="'Inter', sans-serif" font-size="14" fill="#94a3b8">Demandeur : L. Martin (RH) · Type : Incident · Catégorie : Impression</text>`
  s += `<rect x="${W - 200}" y="220" width="120" height="40" rx="8" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.6)"/>`
  s += `<text x="${W - 140}" y="246" font-family="'JetBrains Mono', monospace" font-size="14" fill="#22c55e" font-weight="700" text-anchor="middle">RÉSOLU</text>`

  // Workflow timeline
  const steps = [
    { t: '08:42', actor: 'L. Martin',       action: 'Création du ticket', desc: 'Imprimante en erreur, voyant rouge', col: '#94a3b8' },
    { t: '09:15', actor: 'D. Lengue',       action: 'Prise en charge',    desc: 'Diagnostic à distance — toner vide', col: '#22d3ee' },
    { t: '09:48', actor: 'D. Lengue',       action: 'Intervention',       desc: 'Remplacement toner + tests d\'impression', col: '#a78bfa' },
    { t: '10:12', actor: 'D. Lengue',       action: 'Validation',         desc: 'Tests OK · documentation mise à jour',  col: '#fbbf24' },
    { t: '10:18', actor: 'L. Martin',       action: 'Clôture',            desc: 'Résolution validée · satisfaction 5/5', col: '#22c55e' },
  ]
  steps.forEach((st, i) => {
    const y = 320 + i * 64
    // Vertical connector
    if (i < steps.length - 1) {
      s += `<line x1="92" y1="${y + 24}" x2="92" y2="${y + 64 + 4}" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>`
    }
    s += `<circle cx="92" cy="${y + 16}" r="10" fill="rgba(11,16,32,1)" stroke="${st.col}" stroke-width="2.5"/>`
    s += `<rect x="120" y="${y}" width="${W - 60 - 120}" height="48" rx="8" fill="rgba(11,16,32,0.7)" stroke="rgba(255,255,255,0.06)"/>`
    s += `<text x="140" y="${y + 22}" font-family="'JetBrains Mono', monospace" font-size="13" fill="${st.col}" font-weight="700">${st.t}</text>`
    s += `<text x="220" y="${y + 22}" font-family="'Inter', sans-serif" font-size="14" fill="#f1f5f9" font-weight="700">${st.action}</text>`
    s += `<text x="220" y="${y + 40}" font-family="'Inter', sans-serif" font-size="13" fill="#94a3b8">${st.desc}</text>`
    s += `<text x="${W - 80}" y="${y + 32}" font-family="'Inter', sans-serif" font-size="13" fill="#cbd5e1" text-anchor="end">${st.actor}</text>`
  })

  s += `</svg>`
  return s
}

/* Linux — config files tree */
function svgLinux2() {
  const c = '#fb923c'
  let s = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`
  s += bg(c)
  s += badge(40, 40, 'SYSTEM CONFIGURATION', c)
  s += `<text x="40" y="118" font-family="'Orbitron', sans-serif" font-size="42" fill="#f1f5f9" font-weight="800">Service Architecture</text>`
  s += `<text x="40" y="152" font-family="'Inter', sans-serif" font-size="18" fill="#94a3b8">Diagramme des services hébergés sur srv01</text>`

  // Server in center
  const cx = W / 2, cy = 460
  s += `<rect x="${cx - 100}" y="${cy - 60}" width="200" height="120" rx="14" fill="rgba(251,146,60,0.14)" stroke="${c}" stroke-width="2"/>`
  s += `<text x="${cx}" y="${cy - 22}" font-family="'Orbitron', sans-serif" font-size="22" fill="${c}" text-anchor="middle" font-weight="800">SRV01</text>`
  s += `<text x="${cx}" y="${cy + 6}" font-family="'JetBrains Mono', monospace" font-size="14" fill="#e2e8f0" text-anchor="middle">Debian 12</text>`
  s += `<text x="${cx}" y="${cy + 28}" font-family="'Inter', sans-serif" font-size="13" fill="#94a3b8" text-anchor="middle">192.168.1.10</text>`

  const services = [
    { name: 'SSH',      port: '22',        path: '/etc/ssh/sshd_config',     col: '#22d3ee', x: 200, y: 250 },
    { name: 'Apache',   port: '80, 443',   path: '/etc/apache2/apache2.conf', col: '#22c55e', x: cx - 110, y: 220 },
    { name: 'vsftpd',   port: '21',        path: '/etc/vsftpd.conf',          col: '#a78bfa', x: W - 320, y: 250 },
    { name: 'iptables', port: 'firewall',  path: '/etc/iptables/rules.v4',    col: '#ef4444', x: 200, y: 580 },
    { name: 'fail2ban', port: 'IDS',       path: '/etc/fail2ban/jail.local',  col: '#fbbf24', x: cx - 110, y: 620 },
    { name: 'rsyslog',  port: 'logging',   path: '/etc/rsyslog.conf',         col: '#34d399', x: W - 320, y: 580 },
  ]
  services.forEach(sv => {
    const sx = sv.x, sy = sv.y, sw = 220, sh = 80
    // Connection line
    s += `<line x1="${sx + sw / 2}" y1="${sy + sh / 2}" x2="${cx}" y2="${cy}" stroke="${sv.col}" stroke-opacity="0.3" stroke-width="1.5" stroke-dasharray="4 4"/>`
    s += `<rect x="${sx}" y="${sy}" width="${sw}" height="${sh}" rx="10" fill="rgba(11,16,32,0.85)" stroke="${sv.col}" stroke-width="1.5"/>`
    s += `<rect x="${sx}" y="${sy}" width="6" height="${sh}" rx="3" fill="${sv.col}"/>`
    s += `<text x="${sx + 18}" y="${sy + 24}" font-family="'JetBrains Mono', monospace" font-size="14" fill="${sv.col}" font-weight="700">${sv.name}</text>`
    s += `<text x="${sx + 18}" y="${sy + 46}" font-family="'Inter', sans-serif" font-size="12" fill="#94a3b8">port: ${sv.port}</text>`
    s += `<text x="${sx + 18}" y="${sy + 64}" font-family="'JetBrains Mono', monospace" font-size="11" fill="#64748b">${sv.path}</text>`
  })

  s += `</svg>`
  return s
}

/* Backup — restore drill */
function svgBackup2() {
  const c = '#06b6d4'
  let s = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`
  s += bg(c)
  s += badge(40, 40, 'RESTORE DRILL', c)
  s += `<text x="40" y="118" font-family="'Orbitron', sans-serif" font-size="42" fill="#f1f5f9" font-weight="800">Recovery Test</text>`
  s += `<text x="40" y="152" font-family="'Inter', sans-serif" font-size="18" fill="#94a3b8">Test mensuel de restauration — vérification d'intégrité</text>`

  // Stats top
  const stats = [
    { lab: 'RTO RÉEL',          val: '14 min',  col: '#22c55e' },
    { lab: 'RPO RÉEL',          val: '&lt; 24h',   col: '#22d3ee' },
    { lab: 'INTÉGRITÉ',         val: '100 %',   col: '#22c55e' },
    { lab: 'DERNIÈRE RESTAURATION', val: '02/04/2026', col: '#fbbf24' },
  ]
  stats.forEach((st, i) => {
    const x = 60 + i * 300
    s += `<rect x="${x}" y="200" width="280" height="100" rx="12" fill="rgba(11,16,32,0.85)" stroke="${st.col}" stroke-opacity="0.4"/>`
    s += `<text x="${x + 20}" y="232" font-family="'JetBrains Mono', monospace" font-size="11" fill="#94a3b8" letter-spacing="1" font-weight="700">${st.lab}</text>`
    s += `<text x="${x + 20}" y="276" font-family="'Orbitron', sans-serif" font-size="28" fill="${st.col}" font-weight="800">${st.val}</text>`
  })

  // Timeline / steps
  const steps = [
    { t: '00:00', a: 'Démarrage du test',         d: 'Création VM cible vide · 100 GB',                         ok: true },
    { t: '00:02', a: 'Connexion au backup',       d: 'Borg repository → /backup/srv01-borg',                    ok: true },
    { t: '00:05', a: 'Restauration des données',  d: 'borg extract … · 312 GB transférés · vérification SHA256', ok: true },
    { t: '00:11', a: 'Boot de la VM',             d: 'Initrd OK · systemd OK · services démarrés',              ok: true },
    { t: '00:13', a: 'Tests applicatifs',         d: 'Apache up · MySQL queries OK · 2 348 fichiers vérifiés',  ok: true },
    { t: '00:14', a: 'Validation finale',         d: 'Aucune perte · checksums identiques · journal exporté',    ok: true },
  ]
  steps.forEach((st, i) => {
    const y = 340 + i * 56
    s += `<rect x="60" y="${y}" width="${W - 120}" height="48" rx="10" fill="rgba(11,16,32,0.7)" stroke="${st.ok ? 'rgba(34,197,94,0.35)' : 'rgba(239,68,68,0.35)'}"/>`
    s += `<rect x="60" y="${y}" width="6" height="48" rx="3" fill="${st.ok ? '#22c55e' : '#ef4444'}"/>`
    s += `<text x="86" y="${y + 30}" font-family="'JetBrains Mono', monospace" font-size="14" fill="${c}" font-weight="700">${st.t}</text>`
    s += `<text x="186" y="${y + 30}" font-family="'Inter', sans-serif" font-size="14" fill="#f1f5f9" font-weight="700">${st.a}</text>`
    s += `<text x="386" y="${y + 30}" font-family="'Inter', sans-serif" font-size="13" fill="#cbd5e1">${st.d}</text>`
    s += `<text x="${W - 100}" y="${y + 30}" font-family="'JetBrains Mono', monospace" font-size="13" fill="#22c55e" text-anchor="end" font-weight="700">${st.ok ? 'OK ✓' : 'FAIL'}</text>`
  })

  s += `</svg>`
  return s
}

/* Marketplace — admin dashboard */
function svgMarketplace2() {
  const c = '#f472b6'
  let s = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`
  s += bg(c)
  s += badge(40, 40, 'ADMIN DASHBOARD', c)
  s += `<text x="40" y="118" font-family="'Orbitron', sans-serif" font-size="42" fill="#f1f5f9" font-weight="800">Backoffice</text>`
  s += `<text x="40" y="152" font-family="'Inter', sans-serif" font-size="18" fill="#94a3b8">Tableau de bord administrateur — ventes &amp; produits</text>`

  // KPIs
  const kpis = [
    { lab: 'VENTES / 30J',  val: '1 487 €',  col: '#22c55e' },
    { lab: 'COMMANDES',     val: '34',       col: '#22d3ee' },
    { lab: 'PRODUITS',      val: '128',      col: '#a78bfa' },
    { lab: 'UTILISATEURS',  val: '276',      col: '#fbbf24' },
  ]
  kpis.forEach((k, i) => {
    const x = 60 + i * 300
    s += `<rect x="${x}" y="200" width="280" height="100" rx="12" fill="rgba(11,16,32,0.85)" stroke="${k.col}" stroke-opacity="0.4"/>`
    s += `<text x="${x + 20}" y="232" font-family="'JetBrains Mono', monospace" font-size="11" fill="#94a3b8" letter-spacing="1" font-weight="700">${k.lab}</text>`
    s += `<text x="${x + 20}" y="276" font-family="'Orbitron', sans-serif" font-size="30" fill="${k.col}" font-weight="800">${k.val}</text>`
  })

  // Chart
  const cxL = 60, cxT = 340, cxW = 700, cxH = 280
  s += `<rect x="${cxL}" y="${cxT}" width="${cxW}" height="${cxH}" rx="14" fill="rgba(11,16,32,0.85)" stroke="rgba(244,114,182,0.25)"/>`
  s += `<text x="${cxL + 20}" y="${cxT + 28}" font-family="'JetBrains Mono', monospace" font-size="12" fill="${c}" font-weight="700" letter-spacing="1">VENTES — DERNIERS 7 JOURS</text>`

  // Bar chart
  const data = [42, 78, 56, 95, 110, 64, 88]
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  const maxv = Math.max(...data)
  const barW = 70
  const startX = cxL + 60
  const baseY = cxT + cxH - 50
  data.forEach((v, i) => {
    const h = (v / maxv) * 180
    const x = startX + i * 90
    s += `<rect x="${x}" y="${baseY - h}" width="${barW}" height="${h}" rx="4" fill="${c}" opacity="0.7"/>`
    s += `<rect x="${x}" y="${baseY - h}" width="${barW}" height="3" rx="2" fill="${c}"/>`
    s += `<text x="${x + barW / 2}" y="${baseY + 22}" font-family="'JetBrains Mono', monospace" font-size="13" fill="#94a3b8" text-anchor="middle" font-weight="600">${days[i]}</text>`
    s += `<text x="${x + barW / 2}" y="${baseY - h - 8}" font-family="'JetBrains Mono', monospace" font-size="11" fill="#cbd5e1" text-anchor="middle" font-weight="700">${v}€</text>`
  })

  // Right list — top products
  const lx = 800, ly = 340, lw = W - 60 - 800, lh = 280
  s += `<rect x="${lx}" y="${ly}" width="${lw}" height="${lh}" rx="14" fill="rgba(11,16,32,0.85)" stroke="rgba(244,114,182,0.25)"/>`
  s += `<text x="${lx + 20}" y="${ly + 28}" font-family="'JetBrains Mono', monospace" font-size="12" fill="${c}" font-weight="700" letter-spacing="1">TOP PRODUITS</text>`
  ;[
    { name: 'Casque Audio',  qty: 14, prc: 79.9  },
    { name: 'Clavier RGB',   qty: 9,  prc: 129.0 },
    { name: 'Souris Pro',    qty: 7,  prc: 49.5  },
    { name: 'Webcam HD',     qty: 4,  prc: 64.9  },
  ].forEach((p, i) => {
    const y = ly + 60 + i * 50
    s += `<text x="${lx + 20}" y="${y}" font-family="'Inter', sans-serif" font-size="14" fill="#f1f5f9" font-weight="700">${p.name}</text>`
    s += `<text x="${lx + lw - 20}" y="${y}" font-family="'JetBrains Mono', monospace" font-size="13" fill="${c}" text-anchor="end" font-weight="700">${p.qty} × ${p.prc}€</text>`
    s += `<rect x="${lx + 20}" y="${y + 8}" width="${lw - 40}" height="3" rx="1.5" fill="rgba(255,255,255,0.04)"/>`
    s += `<rect x="${lx + 20}" y="${y + 8}" width="${(p.qty / 14) * (lw - 40)}" height="3" rx="1.5" fill="${c}" opacity="0.7"/>`
  })

  s += `</svg>`
  return s
}

const set = [
  { name: 'ad-2',          svg: svgAD2 },
  { name: 'vlan-2',        svg: svgVLAN2 },
  { name: 'vpn-2',         svg: svgVPN2 },
  { name: 'nagios-2',      svg: svgNagios2 },
  { name: 'nessus-2',      svg: svgNessus2 },
  { name: 'glpi-2',        svg: svgGLPI2 },
  { name: 'linux-2',       svg: svgLinux2 },
  { name: 'backup-2',      svg: svgBackup2 },
  { name: 'marketplace-2', svg: svgMarketplace2 },
]

for (const item of set) {
  const buf = Buffer.from(item.svg())
  const out = `${OUT_DIR}/${item.name}.webp`
  await sharp(buf).webp({ quality: 86, effort: 6 }).toFile(out)
  console.log(`✓ ${item.name}.webp`)
}
console.log(`\nGenerated ${set.length} secondary mockups`)
