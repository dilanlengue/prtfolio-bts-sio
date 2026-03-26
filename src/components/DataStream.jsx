import { useMemo } from 'react'

function generateStream(seed) {
  const chars = '0123456789ABCDEF'
  const segments = []
  for (let i = 0; i < 120; i++) {
    if (Math.random() > 0.85) {
      segments.push(' :: ')
    } else if (Math.random() > 0.7) {
      segments.push(` ${['SYN', 'ACK', 'PSH', 'FIN', 'RST', 'OK', 'TCP', 'UDP', 'DNS', 'ARP', 'SSH'][Math.floor(Math.random() * 11)]} `)
    } else {
      let hex = ''
      const len = 2 + Math.floor(Math.random() * 6)
      for (let j = 0; j < len; j++) {
        hex += chars[Math.floor(Math.random() * chars.length)]
      }
      segments.push(hex + ' ')
    }
  }
  return segments.join('')
}

export default function DataStream() {
  const streams = useMemo(() => [
    generateStream(1),
    generateStream(2),
    generateStream(3),
  ], [])

  return (
    <div className="data-stream my-4 select-none">
      {streams.map((stream, i) => (
        <div key={i} className="data-stream-line">
          {stream}{stream}
        </div>
      ))}
    </div>
  )
}
