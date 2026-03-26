import { useState, useEffect, useRef } from 'react'

const alerts = [
  { icon: '🛡️', title: 'Firewall Active', msg: 'Toutes les règles iptables sont opérationnelles' },
  { icon: '🔍', title: 'Scan terminé', msg: 'Nessus : 0 vulnérabilité critique détectée' },
  { icon: '🔒', title: 'VPN connecté', msg: 'Tunnel OpenVPN chiffré — 256-bit AES' },
  { icon: '📡', title: 'Réseau surveillé', msg: 'Nagios : tous les services UP' },
  { icon: '✅', title: 'GPO appliquée', msg: 'Politique de sécurité déployée sur 12 postes' },
  { icon: '🔐', title: 'Certificat ANSSI', msg: 'SecNumAcadémie — validation complète' },
  { icon: '📊', title: 'Monitoring actif', msg: 'CPU: 23% | RAM: 41% | Disk: 67%' },
  { icon: '🌐', title: 'DNS résolu', msg: 'techplus.lan → 192.168.90.20 (SRV-AD01)' },
  { icon: '⚡', title: 'VLAN configuré', msg: 'VLAN 10, 20, 30 — Trunks actifs' },
  { icon: '🔄', title: 'Backup complet', msg: 'Sauvegarde incrémentale réussie — 2.3 GB' },
]

export default function CyberAlerts() {
  const [current, setCurrent] = useState(null)
  const [visible, setVisible] = useState(false)
  const timerRef = useRef(null)
  const indexRef = useRef(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const showAlert = () => {
      const alert = alerts[indexRef.current % alerts.length]
      indexRef.current++
      setCurrent(alert)
      setVisible(true)

      // Hide after 4 seconds
      setTimeout(() => setVisible(false), 4000)
    }

    // First alert after 8 seconds
    timerRef.current = setTimeout(() => {
      showAlert()
      // Then every 15 seconds
      timerRef.current = setInterval(showAlert, 15000)
    }, 8000)

    return () => {
      clearTimeout(timerRef.current)
      clearInterval(timerRef.current)
    }
  }, [])

  if (!current) return null

  return (
    <div className={`cyber-alert ${visible ? 'visible' : ''}`}>
      <div className="flex items-start gap-3">
        <span className="alert-icon text-lg">{current.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="alert-title">{current.title}</span>
            <span className="alert-time">{new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
          </div>
          <p className="text-[10px] text-gray-500 leading-relaxed">{current.msg}</p>
        </div>
      </div>
      {/* Progress bar at bottom */}
      <div className="mt-2 h-[2px] bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: visible ? '0%' : '100%',
            transition: visible ? 'width 4s linear' : 'none',
            background: 'linear-gradient(90deg, #00ff88, #22d3ee)',
          }}
        />
      </div>
    </div>
  )
}
