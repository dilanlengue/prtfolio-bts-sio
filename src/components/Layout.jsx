import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import TopNav from './TopNav'
import SideNav from './SideNav'
import CyberBackground from './CyberBackground'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#080c1a' }}>
      <CyberBackground />
      <SideNav />
      <TopNav />
      <div className="relative z-10 pt-20 lg:pt-0 lg:pl-16">
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
