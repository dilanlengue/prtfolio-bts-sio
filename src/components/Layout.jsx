import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import TopNav from './TopNav'
import CyberBackground from './CyberBackground'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  useEffect(() => {
    const h = e => {
      document.documentElement.style.setProperty('--mx', e.clientX + 'px')
      document.documentElement.style.setProperty('--my', e.clientY + 'px')
    }
    window.addEventListener('mousemove', h)
    return () => window.removeEventListener('mousemove', h)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#080c1a' }}>
      <div className="cursor-glow" />
      <div className="aurora" />
      <div className="mesh-gradient" />
      <CyberBackground />
      <TopNav />
      <div className="relative z-10" style={{ paddingTop: '80px' }}>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
