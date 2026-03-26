import { useEffect, useRef, useState } from 'react'

function ClickParticles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover)').matches
    if (!hasHover) return

    const colors = ['#6366f1', '#22d3ee', '#00ff88', '#818cf8', '#a855f7']

    const handleClick = (e) => {
      const count = 8 + Math.floor(Math.random() * 6)
      for (let i = 0; i < count; i++) {
        const particle = document.createElement('div')
        particle.className = 'click-particle'
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5
        const dist = 30 + Math.random() * 60
        const color = colors[Math.floor(Math.random() * colors.length)]
        particle.style.cssText = `
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          background: ${color};
          box-shadow: 0 0 6px ${color};
          --tx-start: 0px;
          --ty-start: 0px;
          --tx-end: ${Math.cos(angle) * dist}px;
          --ty-end: ${Math.sin(angle) * dist}px;
          width: ${2 + Math.random() * 3}px;
          height: ${2 + Math.random() * 3}px;
        `
        document.body.appendChild(particle)
        setTimeout(() => particle.remove(), 700)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}

export default function CyberCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const trailRefs = useRef([])
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover)').matches
    const isWide = window.innerWidth > 768
    if (!hasHover || !isWide) return
    setIsDesktop(true)

    document.documentElement.style.cursor = 'none'
    const style = document.createElement('style')
    style.textContent = '*, *::before, *::after { cursor: none !important; }'
    document.head.appendChild(style)

    const trail = []
    const TRAIL_LENGTH = 6
    let mouseX = -100, mouseY = -100
    let ringX = -100, ringY = -100
    let raf

    const handleMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`
      }
      trail.unshift({ x: mouseX, y: mouseY })
      if (trail.length > TRAIL_LENGTH) trail.pop()
      trailRefs.current.forEach((el, i) => {
        if (el && trail[i + 1]) {
          el.style.transform = `translate(${trail[i + 1].x}px, ${trail[i + 1].y}px)`
          el.style.opacity = String((1 - (i + 1) / TRAIL_LENGTH) * 0.5)
        }
      })
      raf = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMove)
    raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
      document.documentElement.style.cursor = ''
      style.remove()
    }
  }, [])

  return (
    <>
      {/* CRT Scan Line — always visible */}
      <div className="crt-scanline" />

      {/* Click Particles — always active on desktop */}
      <ClickParticles />

      {/* Cursor elements — desktop only */}
      {isDesktop && (
        <div className="pointer-events-none fixed inset-0 z-[9999]">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              ref={el => { trailRefs.current[i] = el }}
              className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary/50"
              style={{ opacity: 0 }}
            />
          ))}
          <div
            ref={ringRef}
            className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
            style={{ willChange: 'transform' }}
          >
            <div className="w-7 h-7 border border-primary/40 rounded-full relative">
              <div className="absolute top-1/2 -left-1 -right-1 h-px bg-primary/20" />
              <div className="absolute left-1/2 -top-1 -bottom-1 w-px bg-primary/20" />
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-px h-1 bg-primary/30" />
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-px h-1 bg-primary/30" />
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 h-px w-1 bg-primary/30" />
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 h-px w-1 bg-primary/30" />
            </div>
          </div>
          <div
            ref={dotRef}
            className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyber rounded-full"
            style={{
              boxShadow: '0 0 8px rgba(0,255,136,0.7), 0 0 16px rgba(0,255,136,0.3)',
              willChange: 'transform',
            }}
          />
        </div>
      )}
    </>
  )
}
