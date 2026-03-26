import { useState, useEffect, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*<>[]{}/'

export default function ScrambleText({ text, className = '', as: Tag = 'span' }) {
  const [displayText, setDisplayText] = useState(text)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let iteration = 0
          const totalChars = text.length

          const interval = setInterval(() => {
            const lockedCount = Math.floor(iteration / 3)
            const newText = text
              .split('')
              .map((char, i) => {
                if (char === ' ') return ' '
                if (i < lockedCount) return char
                return CHARS[Math.floor(Math.random() * CHARS.length)]
              })
              .join('')
            setDisplayText(newText)
            iteration++
            if (lockedCount >= totalChars) {
              setDisplayText(text)
              clearInterval(interval)
            }
          }, 40)

          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [text])

  return (
    <Tag ref={ref} className={className} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {displayText}
    </Tag>
  )
}
