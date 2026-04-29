import { Link, useLocation } from 'react-router-dom'
import {
  Home,
  User,
  Layers,
  FileText,
  Briefcase,
  FolderKanban,
  GraduationCap,
  Radar,
  Mail,
} from 'lucide-react'

const items = [
  { path: '/',            label: 'Présentation', Icon: Home },
  { path: '/a-propos',    label: 'À propos',     Icon: User },
  { path: '/competences', label: 'Compétences',  Icon: Layers },
  { path: '/cv',          label: 'CV',           Icon: FileText },
  { path: '/entreprise',  label: 'Entreprise',   Icon: Briefcase },
  { path: '/projets',     label: 'Projets',      Icon: FolderKanban },
  { path: '/bts',         label: 'BTS SIO',      Icon: GraduationCap },
  { path: '/veille',      label: 'Veille',       Icon: Radar },
  { path: '/contact',     label: 'Contact',      Icon: Mail },
]

export default function SideNav() {
  const location = useLocation()

  return (
    <nav
      className="hidden lg:flex flex-col gap-2 fixed left-0 top-0 bottom-0 z-40"
      style={{
        width: '64px',
        background: 'rgba(8,12,26,0.92)',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        paddingTop: '24px',
        paddingBottom: '24px',
        alignItems: 'center',
      }}
      aria-label="Navigation principale"
    >
      {items.map(({ path, label, Icon }) => {
        const isActive = location.pathname === path
        return (
          <Link
            key={path}
            to={path}
            aria-label={label}
            title={label}
            className="group relative flex items-center justify-center transition-all"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              color: isActive ? '#22d3ee' : '#64748b',
              background: isActive ? 'rgba(34,211,238,0.1)' : 'transparent',
              border: isActive ? '1px solid rgba(34,211,238,0.3)' : '1px solid transparent',
            }}
            onMouseEnter={e => {
              if (!isActive) {
                e.currentTarget.style.color = '#cbd5e1'
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              }
            }}
            onMouseLeave={e => {
              if (!isActive) {
                e.currentTarget.style.color = '#64748b'
                e.currentTarget.style.background = 'transparent'
              }
            }}
          >
            <Icon size={20} />

            {/* Active indicator dot on left edge */}
            {isActive && (
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '3px',
                  height: '24px',
                  background: 'linear-gradient(180deg, #6366f1, #22d3ee)',
                  borderRadius: '0 3px 3px 0',
                  boxShadow: '0 0 12px rgba(34,211,238,0.5)',
                }}
              />
            )}

            {/* Tooltip on hover */}
            <span
              className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                left: 'calc(100% + 12px)',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(11,16,32,0.95)',
                border: '1px solid rgba(34,211,238,0.25)',
                color: '#e2e8f0',
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                fontWeight: 600,
                padding: '5px 12px',
                borderRadius: '8px',
                whiteSpace: 'nowrap',
                boxShadow: '0 6px 24px rgba(0,0,0,0.4)',
                zIndex: 50,
              }}
            >
              {label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
