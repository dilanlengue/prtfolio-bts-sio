import { useRef, useCallback, useEffect, useState } from 'react'

export function useMagnet({ strength = 0.3, distance = 80 } = {}) {
  const ref = useRef(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch(!window.matchMedia('(hover: hover)').matches)
  }, [])

  const handleMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el || isTouch) return
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY
    const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

    if (dist < distance) {
      el.style.transform = `translate(${deltaX * strength}px, ${deltaY * strength}px)`
      el.style.transition = 'transform 0.2s ease-out'
    }
  }, [strength, distance, isTouch])

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el || isTouch) return
    el.style.transform = 'translate(0, 0)'
    el.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  }, [isTouch])

  return { ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave }
}
