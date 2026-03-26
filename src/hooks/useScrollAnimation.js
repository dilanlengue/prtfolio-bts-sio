import { useEffect } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Add glitch reveal to section headings when they first appear
            const heading = entry.target.matches('h2') ? entry.target : entry.target.querySelector('h2')
            if (heading && !heading.classList.contains('glitch-reveal')) {
              heading.classList.add('glitch-reveal')
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const observeElements = () => {
      const elements = document.querySelectorAll(
        '.animate-fade-up:not(.visible), .animate-fade-left:not(.visible), .animate-fade-right:not(.visible), .animate-scale:not(.visible)'
      )
      elements.forEach((el) => observer.observe(el))
    }

    // Initial observation after render
    const timer = setTimeout(observeElements, 100)

    // Watch for new elements added to the DOM
    const mutation = new MutationObserver(observeElements)
    mutation.observe(document.body, { childList: true, subtree: true })

    return () => {
      clearTimeout(timer)
      observer.disconnect()
      mutation.disconnect()
    }
  }, [])
}
