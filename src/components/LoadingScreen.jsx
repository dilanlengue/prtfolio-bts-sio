import { useState, useEffect, useRef } from 'react'
import { Shield, Network, Server, Wifi } from 'lucide-react'

const bootMessages = [
  { text: 'Chargement des modules réseau...', done: true },
  { text: 'Connexion sécurisée établie...', done: true },
  { text: 'Initialisation de l\'interface...', done: true },
  { text: 'Chargement des projets SISR...', done: true },
  { text: 'Portfolio prêt.', done: true, highlight: true },
]

export default function LoadingScreen({ onComplete }) {
  const [messages, setMessages] = useState([])
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [started, setStarted] = useState(false)
  const completedRef = useRef(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!started) return
    let cancelled = false
    const timers = []

    // Messages progressifs
    bootMessages.forEach((msg, i) => {
      timers.push(setTimeout(() => {
        if (!cancelled) setMessages(prev => [...prev, msg])
      }, 400 + i * 420))
    })

    // Barre de progression
    const steps = [0, 15, 30, 48, 65, 80, 92, 100]
    steps.forEach((val, i) => {
      timers.push(setTimeout(() => {
        if (!cancelled) setProgress(val)
      }, 200 + i * 300))
    })

    // Completion
    timers.push(setTimeout(() => {
      if (!cancelled && !completedRef.current) {
        completedRef.current = true
        setExiting(true)
        setTimeout(() => { if (!cancelled) onComplete?.() }, 600)
      }
    }, 3000))

    return () => { cancelled = true; timers.forEach(clearTimeout) }
  }, [started, onComplete])

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #020208 0%, #050510 50%, #080818 100%)',
        opacity: exiting ? 0 : 1,
        transition: 'opacity 0.6s ease',
      }}
    >
      {/* Grille de fond */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Lueurs de fond */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] bg-accent/4 rounded-full blur-[100px] pointer-events-none" />

      {/* Contenu central */}
      <div className="relative z-10 w-full max-w-lg mx-auto px-6 flex flex-col items-center">

        {/* Photo de profil animée */}
        <div className="relative mb-8">
          <div
            className="absolute inset-[-16px] rounded-full border border-accent/25"
            style={{ animation: 'rotate-slow 8s linear infinite' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-accent rounded-full shadow-lg shadow-accent/60" />
          </div>
          <div
            className="absolute inset-[-8px] rounded-full"
            style={{ border: '1px solid rgba(34,211,238,0.2)', animation: 'pulse-ring 3s ease-in-out infinite' }}
          />
          <div
            className="w-36 h-36 rounded-full overflow-hidden"
            style={{
              border: '2px solid rgba(34,211,238,0.5)',
              boxShadow: '0 0 40px rgba(34,211,238,0.15), 0 0 80px rgba(99,102,241,0.1)',
            }}
          >
            <img src="/photo-dilan.png" alt="Dilan Lengue" className="w-full h-full object-cover object-top" />
          </div>
        </div>

        {/* Nom — affiché en grand */}
        <div className="text-center mb-2">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-2"
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              background: 'linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #22d3ee 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            DILAN LENGUE
          </h1>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span
              className="text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
              style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                background: 'rgba(99,102,241,0.12)',
                border: '1px solid rgba(99,102,241,0.3)',
                color: '#818cf8',
              }}
            >
              BTS SIO
            </span>
            <span className="text-gray-700">•</span>
            <span
              className="text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
              style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                background: 'rgba(0,255,136,0.08)',
                border: '1px solid rgba(0,255,136,0.2)',
                color: '#00ff88',
              }}
            >
              SISR
            </span>
          </div>
        </div>

        {/* Séparateur */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />

        {/* Terminal de boot */}
        <div className="w-full glass-strong rounded-xl overflow-hidden mb-6">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="ml-2 text-[10px] text-gray-600 font-mono">dilan@portfolio ~ boot</span>
          </div>
          <div className="p-4 space-y-2 min-h-[130px]">
            {messages.map((msg, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-cyber text-[10px] font-mono flex-shrink-0">✓</span>
                <span
                  className="text-[12px] font-mono"
                  style={{ color: msg.highlight ? '#00ff88' : '#94a3b8' }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            {messages.length < bootMessages.length && (
              <div className="flex items-center gap-2">
                <span className="text-primary text-[10px] font-mono">›</span>
                <span
                  className="inline-block w-[2px] h-3 bg-primary ml-0.5"
                  style={{ animation: 'typing-cursor 1s step-end infinite' }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Barre de progression avec % */}
        <div className="w-full">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-wider">Chargement</span>
            <span className="text-[11px] font-mono text-primary font-bold">{progress}%</span>
          </div>
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                transition: 'width 0.4s ease-out',
                background: 'linear-gradient(90deg, #6366f1, #22d3ee, #00ff88)',
                boxShadow: '0 0 10px rgba(0,255,136,0.4)',
              }}
            />
          </div>
        </div>

        {/* Icônes SISR en bas */}
        <div className="flex items-center gap-6 mt-8 text-gray-700">
          <div className="flex items-center gap-1.5 text-[10px] font-mono">
            <Server size={11} /> Systèmes
          </div>
          <div className="w-px h-3 bg-white/5" />
          <div className="flex items-center gap-1.5 text-[10px] font-mono">
            <Wifi size={11} /> Réseaux
          </div>
          <div className="w-px h-3 bg-white/5" />
          <div className="flex items-center gap-1.5 text-[10px] font-mono">
            <Shield size={11} /> Cybersécurité
          </div>
        </div>
      </div>
    </div>
  )
}
