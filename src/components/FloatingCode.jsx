import { useState, useEffect, useRef } from 'react'

const codeSnippets = [
  'nmap -sV -sC 192.168.1.0/24',
  'iptables -A INPUT -p tcp --dport 22 -j ACCEPT',
  'sudo systemctl restart sshd',
  'tcpdump -i eth0 port 80',
  'openssl genrsa -out server.key 2048',
  'ping -c 4 192.168.90.20',
  'ssh admin@srv-ad01.techplus.lan',
  'show running-config',
  'interface GigabitEthernet0/1',
  'ip route 0.0.0.0 0.0.0.0 192.168.1.1',
  'netstat -tulnp | grep :443',
  'chmod 700 /etc/ssh/sshd_config',
  'gpupdate /force',
  'Get-ADUser -Filter *',
  'New-ADOrganizationalUnit "IT"',
  'docker ps -a',
  'systemctl status nagios',
  'SELECT * FROM users WHERE role="admin"',
  'curl -X POST https://api.local/auth',
  'cat /var/log/syslog | tail -50',
  'hashcat -m 0 -a 0 hashes.txt wordlist.txt',
  'wireshark -i eth0 -k',
  'nessus --scan --target 10.0.0.0/8',
  'rsync -avz /backup/ root@srv:/data/',
  'certbot certonly --nginx -d techplus.lan',
]

const colors = [
  'rgba(99, 102, 241, VAR)',   // primary
  'rgba(0, 255, 136, VAR)',    // cyber
  'rgba(34, 211, 238, VAR)',   // accent
  'rgba(168, 85, 247, VAR)',   // purple
]

export default function FloatingCode() {
  const [items, setItems] = useState([])
  const timerRef = useRef(null)
  const idRef = useRef(0)

  useEffect(() => {
    // Check for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const spawn = () => {
      const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
      const colorBase = colors[Math.floor(Math.random() * colors.length)]
      const color = colorBase.replace('VAR', '0.12')
      const left = 5 + Math.random() * 85
      const top = 10 + Math.random() * 80
      const delay = Math.random() * 4
      const duration = 10 + Math.random() * 8
      const id = idRef.current++

      setItems(prev => {
        // Keep max 6 floating items
        const trimmed = prev.length >= 6 ? prev.slice(1) : prev
        return [...trimmed, { id, snippet, color, left, top, delay, duration }]
      })
    }

    // Spawn initial batch
    for (let i = 0; i < 4; i++) {
      setTimeout(spawn, i * 800)
    }

    // Then spawn every 3 seconds
    timerRef.current = setInterval(spawn, 3000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {items.map(item => (
        <div
          key={item.id}
          className="floating-code"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            color: item.color,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        >
          <span style={{ opacity: 0.4 }}>$ </span>{item.snippet}
        </div>
      ))}
    </div>
  )
}
