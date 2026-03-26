import { useRef, useCallback, useEffect, useState } from 'react'

export function useTilt({ maxTilt = 8, scale = 1.02, speed = 400 } = {}) {
  const ref = useRef(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch(!window.matchMedia('(hover: hover)').matches)
  }, [])

  const handleMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el || isTouch) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateY = ((x - centerX) / centerX) * maxTilt
    const rotateX = ((centerY - y) / centerY) * maxTilt
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
    el.style.transition = 'transform 100ms ease-out'
  }, [maxTilt, scale, isTouch])

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el || isTouch) return
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
    el.style.transition = `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`
  }, [speed, isTouch])

  return { ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave }
}
