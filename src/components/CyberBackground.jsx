import { useEffect, useRef } from 'react'

export default function CyberBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let nodes = []
    let ipLabels = []
    let time = 0

    // Adresses IP réseau réalistes pour effet cyber
    const ipPool = [
      '192.168.1.1', '10.0.0.1', '172.16.0.254', '192.168.10.50',
      '10.10.20.1', '192.168.100.1', '172.16.5.10', '10.0.1.254',
      '192.168.0.254', '10.10.10.1', '172.16.0.1', '192.168.50.100',
      '10.0.2.15', '192.168.1.254', '172.16.10.5', '10.10.0.254',
      '0.0.0.0/0', '255.255.255.0', 'fe80::1', '::1',
      'DNS:53', 'SSH:22', 'HTTPS:443', 'SNMP:161',
      'VLAN 10', 'VLAN 20', 'VLAN 99', 'DMZ',
      'TCP/IP', 'AES-256', 'TLS 1.3', 'PKI',
    ]

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    function init() {
      // Types de nœuds cybersécurité
      const types = [
        { color: { r: 99,  g: 102, b: 241 }, weight: 40 }, // indigo — nœud réseau
        { color: { r: 34,  g: 211, b: 238 }, weight: 30 }, // cyan — connexion
        { color: { r: 0,   g: 255, b: 136 }, weight: 20 }, // vert — sécurisé
        { color: { r: 248, g: 113, b: 113 }, weight: 10 }, // rouge — alerte
      ]

      const count = Math.min(90, Math.floor((canvas.width * canvas.height) / 14000))
      nodes = Array.from({ length: count }, () => {
        const roll = Math.random() * 100
        let cumul = 0
        let chosen = types[0]
        for (const t of types) {
          cumul += t.weight
          if (roll < cumul) { chosen = t; break }
        }
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 2.2 + 0.8,
          opacity: Math.random() * 0.4 + 0.15,
          phase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.018 + 0.006,
          color: chosen.color,
          isHub: Math.random() < 0.12,
        }
      })

      // Créer des labels IP flottants
      const labelCount = Math.min(18, Math.floor(count * 0.22))
      ipLabels = Array.from({ length: labelCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.08,
        text: ipPool[Math.floor(Math.random() * ipPool.length)],
        opacity: Math.random() * 0.18 + 0.08,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    resize()
    window.addEventListener('resize', resize)

    const MAX_DIST = 160

    function animate() {
      time++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Grille cyber
      ctx.strokeStyle = 'rgba(99,102,241,0.03)'
      ctx.lineWidth = 1
      const grid = 90
      for (let x = 0; x < canvas.width; x += grid) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += grid) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke()
      }

      // Déplacer les nœuds
      nodes.forEach(n => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0) { n.x = 0; n.vx *= -1 }
        if (n.x > canvas.width)  { n.x = canvas.width;  n.vx *= -1 }
        if (n.y < 0) { n.y = 0; n.vy *= -1 }
        if (n.y > canvas.height) { n.y = canvas.height; n.vy *= -1 }
      })

      // Lignes de connexion
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = 0.16 * (1 - dist / MAX_DIST)
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
            grad.addColorStop(0, `rgba(${a.color.r},${a.color.g},${a.color.b},${alpha})`)
            grad.addColorStop(1, `rgba(${b.color.r},${b.color.g},${b.color.b},${alpha})`)
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = grad
            ctx.lineWidth = 0.9
            ctx.stroke()
          }
        }
      }

      // Dessiner les nœuds
      nodes.forEach(n => {
        const pulse = 0.5 + 0.4 * Math.sin(time * n.pulseSpeed + n.phase)
        const { r, g, b } = n.color
        const radius = n.isHub ? n.r * 2.5 : n.r
        const alpha = n.opacity * pulse

        // Halo pour hub
        if (n.isHub) {
          const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, radius * 6)
          glow.addColorStop(0, `rgba(${r},${g},${b},${alpha * 0.4})`)
          glow.addColorStop(1, `rgba(${r},${g},${b},0)`)
          ctx.beginPath()
          ctx.arc(n.x, n.y, radius * 6, 0, Math.PI * 2)
          ctx.fillStyle = glow
          ctx.fill()
        }

        // Corps du nœud
        ctx.beginPath()
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`
        ctx.fill()

        // Point central blanc brillant
        ctx.beginPath()
        ctx.arc(n.x, n.y, radius * 0.45, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${alpha * 0.65})`
        ctx.fill()
      })

      // Adresses IP flottantes
      ctx.font = '11px "Fira Code", monospace'
      ctx.textAlign = 'center'
      ipLabels.forEach(label => {
        label.x += label.vx
        label.y += label.vy
        if (label.x < 30 || label.x > canvas.width - 30) label.vx *= -1
        if (label.y < 15 || label.y > canvas.height - 15) label.vy *= -1
        const fade = 0.6 + 0.4 * Math.sin(time * 0.012 + label.phase)
        const a = label.opacity * fade
        ctx.fillStyle = `rgba(34,211,238,${a})`
        ctx.fillText(label.text, label.x, label.y)
      })

      // Paquet de données voyageant (effet "transmission")
      const packetNode = nodes[Math.floor((time * 0.3) % nodes.length)]
      if (packetNode) {
        const p = 0.5 + 0.5 * Math.sin(time * 0.05)
        ctx.beginPath()
        ctx.arc(packetNode.x, packetNode.y, 4 * p, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,255,136,${0.6 * p})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      {/* Fond navy profond */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 65% 35%, #0b1530 0%, #080c1a 50%, #040810 100%)',
        }}
      />

      {/* Canvas réseau */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Lueur indigo haut-gauche */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-0"
        style={{
          width: '650px',
          height: '550px',
          background: 'radial-gradient(ellipse at top left, rgba(99,102,241,0.11) 0%, transparent 65%)',
        }}
      />

      {/* Lueur cyan bas-droite */}
      <div
        className="fixed bottom-0 right-0 pointer-events-none z-0"
        style={{
          width: '700px',
          height: '550px',
          background: 'radial-gradient(ellipse at bottom right, rgba(34,211,238,0.09) 0%, transparent 65%)',
        }}
      />

      {/* Lueur verte bas-gauche (sécurité) */}
      <div
        className="fixed bottom-0 left-0 pointer-events-none z-0"
        style={{
          width: '400px',
          height: '300px',
          background: 'radial-gradient(ellipse at bottom left, rgba(0,255,136,0.04) 0%, transparent 70%)',
        }}
      />
    </>
  )
}
