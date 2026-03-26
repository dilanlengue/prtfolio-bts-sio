import sharp from 'sharp';

const W = 1536;
const H = 1024;

// Build a rich cyber/IT overlay SVG with strong visible elements
function buildSVG() {
  let svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="topG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#080c1a" stop-opacity="1"/>
      <stop offset="50%" stop-color="#080c1a" stop-opacity="0.97"/>
      <stop offset="85%" stop-color="#080c1a" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#080c1a" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="botG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#080c1a" stop-opacity="0"/>
      <stop offset="15%" stop-color="#080c1a" stop-opacity="0.7"/>
      <stop offset="50%" stop-color="#080c1a" stop-opacity="0.97"/>
      <stop offset="100%" stop-color="#080c1a" stop-opacity="1"/>
    </linearGradient>
    <filter id="glow1"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="glow2"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>

  <!-- Dark overlays -->
  <rect x="0" y="0" width="${W}" height="290" fill="url(#topG)"/>
  <rect x="0" y="740" width="${W}" height="284" fill="url(#botG)"/>
`;

  // ===== GRID — visible cyber grid =====
  // Top grid
  for (let x = 0; x <= W; x += 80) {
    const op = (x % 240 === 0) ? 0.18 : 0.08;
    svg += `  <line x1="${x}" y1="0" x2="${x}" y2="280" stroke="rgba(34,211,238,${op})" stroke-width="0.6"/>\n`;
  }
  for (let y = 0; y <= 280; y += 80) {
    const op = (y % 240 === 0) ? 0.18 : 0.08;
    svg += `  <line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="rgba(34,211,238,${op})" stroke-width="0.6"/>\n`;
  }
  // Bottom grid
  for (let x = 0; x <= W; x += 80) {
    const op = (x % 240 === 0) ? 0.15 : 0.07;
    svg += `  <line x1="${x}" y1="750" x2="${x}" y2="${H}" stroke="rgba(34,211,238,${op})" stroke-width="0.6"/>\n`;
  }
  for (let y = 750; y <= H; y += 80) {
    const op = (y % 240 === 0) ? 0.15 : 0.07;
    svg += `  <line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="rgba(34,211,238,${op})" stroke-width="0.6"/>\n`;
  }

  // ===== HEXAGONS — large visible hexagons =====
  function hex(cx, cy, r, color, op) {
    const pts = [];
    for (let a = 0; a < 6; a++) {
      const angle = Math.PI / 3 * a - Math.PI / 6;
      pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
    }
    return `  <polygon points="${pts.join(' ')}" fill="none" stroke="${color}" stroke-opacity="${op}" stroke-width="1.2"/>\n`;
  }

  // Top hexagons - big and visible
  const topHexes = [
    { x: 120, y: 80, r: 35, c: 'rgba(34,211,238,1)', o: 0.2 },
    { x: 320, y: 50, r: 28, c: 'rgba(99,102,241,1)', o: 0.18 },
    { x: 500, y: 90, r: 32, c: 'rgba(34,211,238,1)', o: 0.15 },
    { x: 700, y: 60, r: 40, c: 'rgba(0,255,136,1)', o: 0.12 },
    { x: 900, y: 85, r: 30, c: 'rgba(99,102,241,1)', o: 0.18 },
    { x: 1100, y: 55, r: 35, c: 'rgba(34,211,238,1)', o: 0.15 },
    { x: 1300, y: 80, r: 28, c: 'rgba(0,255,136,1)', o: 0.12 },
    { x: 1450, y: 45, r: 25, c: 'rgba(99,102,241,1)', o: 0.16 },
    { x: 200, y: 170, r: 22, c: 'rgba(34,211,238,1)', o: 0.12 },
    { x: 600, y: 180, r: 26, c: 'rgba(99,102,241,1)', o: 0.1 },
    { x: 1000, y: 165, r: 24, c: 'rgba(34,211,238,1)', o: 0.1 },
    { x: 1350, y: 175, r: 20, c: 'rgba(0,255,136,1)', o: 0.08 },
  ];
  topHexes.forEach(h => { svg += hex(h.x, h.y, h.r, h.c, h.o); });

  // Bottom hexagons
  const botHexes = [
    { x: 100, y: 880, r: 30, c: 'rgba(34,211,238,1)', o: 0.15 },
    { x: 300, y: 920, r: 35, c: 'rgba(99,102,241,1)', o: 0.18 },
    { x: 520, y: 870, r: 28, c: 'rgba(0,255,136,1)', o: 0.12 },
    { x: 740, y: 910, r: 38, c: 'rgba(34,211,238,1)', o: 0.15 },
    { x: 960, y: 875, r: 30, c: 'rgba(99,102,241,1)', o: 0.16 },
    { x: 1180, y: 920, r: 32, c: 'rgba(34,211,238,1)', o: 0.12 },
    { x: 1400, y: 880, r: 26, c: 'rgba(0,255,136,1)', o: 0.14 },
    { x: 200, y: 970, r: 22, c: 'rgba(99,102,241,1)', o: 0.1 },
    { x: 650, y: 980, r: 25, c: 'rgba(34,211,238,1)', o: 0.1 },
    { x: 1100, y: 975, r: 20, c: 'rgba(0,255,136,1)', o: 0.08 },
  ];
  botHexes.forEach(h => { svg += hex(h.x, h.y, h.r, h.c, h.o); });

  // ===== CIRCUIT BOARD TRACES — very visible =====
  const circuits = [
    // Top circuits
    { d: 'M0,100 H200 L220,80 H380 L400,100 H520 L530,85 H650', c: '34,211,238', o: 0.25 },
    { d: 'M1536,120 H1350 L1330,100 H1180 L1160,120 H1000 L990,105 H850', c: '99,102,241', o: 0.2 },
    { d: 'M300,200 H450 L465,185 H580 L590,200 H700', c: '0,255,136', o: 0.15 },
    { d: 'M900,190 H1050 L1060,175 H1200 L1215,190 H1350', c: '34,211,238', o: 0.15 },
    { d: 'M0,230 H100 L115,215 H250 L260,230 H350', c: '99,102,241', o: 0.12 },
    { d: 'M1200,220 H1350 L1360,205 H1450 L1460,220 H1536', c: '34,211,238', o: 0.12 },
    // Bottom circuits
    { d: 'M0,830 H180 L200,815 H350 L370,830 H500 L510,818 H620', c: '34,211,238', o: 0.2 },
    { d: 'M1536,850 H1380 L1360,835 H1200 L1185,850 H1050 L1040,838 H900', c: '99,102,241', o: 0.18 },
    { d: 'M250,940 H400 L415,925 H550 L560,940 H700', c: '0,255,136', o: 0.15 },
    { d: 'M850,930 H1000 L1010,918 H1150 L1165,930 H1300', c: '34,211,238', o: 0.15 },
    { d: 'M0,980 H120 L135,965 H280 L290,980 H400', c: '99,102,241', o: 0.12 },
    { d: 'M1150,970 H1300 L1310,958 H1430 L1440,970 H1536', c: '34,211,238', o: 0.12 },
  ];
  circuits.forEach(c => {
    svg += `  <path d="${c.d}" stroke="rgba(${c.c},${c.o})" stroke-width="1.5" fill="none"/>\n`;
  });

  // ===== NODES with strong glow =====
  const topNodes = [
    { x: 120, y: 80, r: 4, c: '34,211,238', o: 0.7 },
    { x: 320, y: 50, r: 3.5, c: '99,102,241', o: 0.65 },
    { x: 500, y: 90, r: 3, c: '34,211,238', o: 0.6 },
    { x: 700, y: 60, r: 5, c: '0,255,136', o: 0.5 },
    { x: 900, y: 85, r: 3.5, c: '99,102,241', o: 0.65 },
    { x: 1100, y: 55, r: 4, c: '34,211,238', o: 0.6 },
    { x: 1300, y: 80, r: 3, c: '0,255,136', o: 0.5 },
    { x: 200, y: 170, r: 3, c: '34,211,238', o: 0.5 },
    { x: 400, y: 100, r: 2.5, c: '99,102,241', o: 0.45 },
    { x: 600, y: 180, r: 3.5, c: '99,102,241', o: 0.45 },
    { x: 800, y: 150, r: 3, c: '34,211,238', o: 0.4 },
    { x: 1000, y: 165, r: 3, c: '34,211,238', o: 0.4 },
    { x: 1350, y: 175, r: 2.5, c: '0,255,136', o: 0.35 },
    { x: 1450, y: 45, r: 3, c: '99,102,241', o: 0.55 },
    { x: 520, y: 25, r: 2.5, c: '0,255,136', o: 0.45 },
    { x: 250, y: 230, r: 2, c: '34,211,238', o: 0.3 },
  ];

  const botNodes = [
    { x: 100, y: 880, r: 3.5, c: '34,211,238', o: 0.6 },
    { x: 300, y: 920, r: 4, c: '99,102,241', o: 0.6 },
    { x: 520, y: 870, r: 3, c: '0,255,136', o: 0.5 },
    { x: 740, y: 910, r: 4.5, c: '34,211,238', o: 0.55 },
    { x: 960, y: 875, r: 3.5, c: '99,102,241', o: 0.55 },
    { x: 1180, y: 920, r: 3, c: '34,211,238', o: 0.5 },
    { x: 1400, y: 880, r: 3, c: '0,255,136', o: 0.45 },
    { x: 200, y: 970, r: 2.5, c: '99,102,241', o: 0.4 },
    { x: 500, y: 830, r: 2.5, c: '34,211,238', o: 0.4 },
    { x: 650, y: 980, r: 3, c: '34,211,238', o: 0.4 },
    { x: 850, y: 950, r: 2.5, c: '99,102,241', o: 0.35 },
    { x: 1100, y: 975, r: 2.5, c: '0,255,136', o: 0.35 },
    { x: 1300, y: 945, r: 3, c: '34,211,238', o: 0.4 },
  ];

  [...topNodes, ...botNodes].forEach(n => {
    // Big glow
    svg += `  <circle cx="${n.x}" cy="${n.y}" r="${n.r * 6}" fill="rgba(${n.c},${n.o * 0.15})" filter="url(#glow2)"/>\n`;
    // Main node
    svg += `  <circle cx="${n.x}" cy="${n.y}" r="${n.r}" fill="rgba(${n.c},${n.o})" filter="url(#glow1)"/>\n`;
    // White center
    svg += `  <circle cx="${n.x}" cy="${n.y}" r="${n.r * 0.35}" fill="rgba(255,255,255,${n.o * 0.8})"/>\n`;
  });

  // ===== CONNECTION LINES between nodes =====
  const topConnections = [
    [120,80,320,50], [320,50,500,90], [500,90,700,60], [700,60,900,85], [900,85,1100,55], [1100,55,1300,80], [1300,80,1450,45],
    [120,80,200,170], [320,50,400,100], [500,90,600,180], [700,60,800,150], [900,85,1000,165], [1100,55,1350,175],
    [200,170,400,100], [400,100,600,180], [600,180,800,150], [800,150,1000,165], [1000,165,1350,175],
    [520,25,700,60], [250,230,200,170], [250,230,400,100],
  ];
  topConnections.forEach(([x1,y1,x2,y2]) => {
    svg += `  <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(34,211,238,0.12)" stroke-width="0.8"/>\n`;
  });

  const botConnections = [
    [100,880,300,920], [300,920,520,870], [520,870,740,910], [740,910,960,875], [960,875,1180,920], [1180,920,1400,880],
    [100,880,200,970], [300,920,500,830], [520,870,650,980], [740,910,850,950], [960,875,1100,975], [1180,920,1300,945],
    [200,970,650,980], [650,980,1100,975], [500,830,850,950], [850,950,1300,945],
  ];
  botConnections.forEach(([x1,y1,x2,y2]) => {
    svg += `  <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(34,211,238,0.1)" stroke-width="0.8"/>\n`;
  });

  // ===== DATA LABELS — big, visible, IT-themed =====
  const topLabels = [
    { x: 60, y: 30, t: '192.168.1.0/24', c: '34,211,238', o: 0.4, s: 11 },
    { x: 300, y: 25, t: 'SSH:22', c: '0,255,136', o: 0.35, s: 10 },
    { x: 550, y: 18, t: 'HTTPS:443', c: '99,102,241', o: 0.3, s: 10 },
    { x: 800, y: 30, t: '10.0.0.1/8', c: '34,211,238', o: 0.35, s: 11 },
    { x: 1050, y: 22, t: 'VLAN 10', c: '0,255,136', o: 0.3, s: 10 },
    { x: 1280, y: 28, t: 'TLS 1.3', c: '99,102,241', o: 0.3, s: 10 },
    { x: 150, y: 130, t: '$ nmap -sV', c: '0,255,136', o: 0.28, s: 10 },
    { x: 450, y: 145, t: 'DNS:53', c: '34,211,238', o: 0.25, s: 9 },
    { x: 750, y: 125, t: 'fw:ALLOW', c: '0,255,136', o: 0.22, s: 9 },
    { x: 1050, y: 140, t: 'AES-256', c: '99,102,241', o: 0.25, s: 9 },
    { x: 1350, y: 130, t: 'SNMP:161', c: '34,211,238', o: 0.22, s: 9 },
    { x: 70, y: 210, t: 'TCP/IP', c: '34,211,238', o: 0.2, s: 9 },
    { x: 400, y: 220, t: '[SECURED]', c: '0,255,136', o: 0.18, s: 9 },
    { x: 750, y: 200, t: 'LDAP:389', c: '99,102,241', o: 0.18, s: 9 },
    { x: 1100, y: 215, t: 'DMZ', c: '34,211,238', o: 0.2, s: 10 },
    { x: 1400, y: 205, t: 'IPsec', c: '0,255,136', o: 0.18, s: 9 },
  ];

  const botLabels = [
    { x: 60, y: 850, t: '172.16.0.0/12', c: '34,211,238', o: 0.35, s: 11 },
    { x: 350, y: 845, t: 'OSPF', c: '0,255,136', o: 0.3, s: 10 },
    { x: 600, y: 855, t: 'PKI', c: '99,102,241', o: 0.3, s: 11 },
    { x: 850, y: 848, t: 'RDP:3389', c: '34,211,238', o: 0.3, s: 10 },
    { x: 1120, y: 852, t: 'BGP', c: '0,255,136', o: 0.28, s: 10 },
    { x: 1350, y: 845, t: 'WPA3', c: '99,102,241', o: 0.28, s: 10 },
    { x: 150, y: 950, t: '$ ping -c 4', c: '0,255,136', o: 0.25, s: 10 },
    { x: 450, y: 960, t: 'VLAN 99', c: '34,211,238', o: 0.22, s: 9 },
    { x: 780, y: 945, t: 'NAT', c: '99,102,241', o: 0.22, s: 10 },
    { x: 1050, y: 955, t: '[ACTIVE]', c: '0,255,136', o: 0.2, s: 9 },
    { x: 1300, y: 960, t: 'SSL/TLS', c: '34,211,238', o: 0.2, s: 9 },
    { x: 100, y: 1005, t: '0xFF42', c: '99,102,241', o: 0.15, s: 9 },
    { x: 500, y: 1000, t: 'ACL PERMIT', c: '34,211,238', o: 0.15, s: 9 },
    { x: 900, y: 1008, t: 'ENCRYPTED', c: '0,255,136', o: 0.15, s: 9 },
    { x: 1250, y: 1002, t: 'RADIUS', c: '99,102,241', o: 0.15, s: 9 },
  ];

  [...topLabels, ...botLabels].forEach(l => {
    svg += `  <text x="${l.x}" y="${l.y}" font-family="'Courier New', monospace" font-size="${l.s}" font-weight="bold" fill="rgba(${l.c},${l.o})">${l.t}</text>\n`;
  });

  // ===== SCAN LINES =====
  svg += `  <rect x="0" y="140" width="${W}" height="1.5" fill="rgba(34,211,238,0.2)"/>\n`;
  svg += `  <rect x="0" y="141.5" width="${W}" height="12" fill="rgba(34,211,238,0.03)"/>\n`;
  svg += `  <rect x="0" y="890" width="${W}" height="1.5" fill="rgba(34,211,238,0.18)"/>\n`;
  svg += `  <rect x="0" y="891.5" width="${W}" height="12" fill="rgba(34,211,238,0.03)"/>\n`;

  // ===== SMALL BINARY/HEX RAIN COLUMNS =====
  const binaryChars = '01001011001101010110100110';
  for (let col = 0; col < 8; col++) {
    const x = 50 + col * 200;
    for (let row = 0; row < 8; row++) {
      const y = 15 + row * 30;
      if (y > 250) break;
      const ch = binaryChars[Math.floor(Math.random() * binaryChars.length)];
      const op = 0.08 + Math.random() * 0.12;
      svg += `  <text x="${x}" y="${y}" font-family="monospace" font-size="10" fill="rgba(0,255,136,${op})">${ch}</text>\n`;
    }
  }
  for (let col = 0; col < 8; col++) {
    const x = 50 + col * 200;
    for (let row = 0; row < 8; row++) {
      const y = 780 + row * 30;
      if (y > H) break;
      const ch = binaryChars[Math.floor(Math.random() * binaryChars.length)];
      const op = 0.06 + Math.random() * 0.1;
      svg += `  <text x="${x}" y="${y}" font-family="monospace" font-size="10" fill="rgba(0,255,136,${op})">${ch}</text>\n`;
    }
  }

  svg += `</svg>`;
  return svg;
}

async function run() {
  const svgBuffer = Buffer.from(buildSVG());

  await sharp('C:/xampp/htdocs/potfolit/public/photo-dilan-original.png')
    .composite([{ input: svgBuffer, top: 0, left: 0 }])
    .toFile('C:/xampp/htdocs/potfolit/public/photo-dilan-new.png');

  const fs = await import('fs');
  fs.copyFileSync(
    'C:/xampp/htdocs/potfolit/public/photo-dilan-new.png',
    'C:/xampp/htdocs/potfolit/public/photo-dilan.png'
  );
  fs.unlinkSync('C:/xampp/htdocs/potfolit/public/photo-dilan-new.png');
  console.log('Done! Photo updated with strong cyber/IT elements.');
}

run().catch(e => console.error(e));
