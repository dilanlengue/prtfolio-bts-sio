import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p style={{
          fontFamily: "'Orbitron', system-ui, sans-serif",
          fontSize: 'clamp(5rem, 15vw, 8rem)',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1,
          marginBottom: '1rem',
        }}>
          404
        </p>
        <h1 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#e2e8f0',
          marginBottom: '0.75rem',
        }}>
          Page introuvable
        </h1>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '15px',
          color: '#64748b',
          marginBottom: '2rem',
          lineHeight: 1.7,
        }}>
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold transition-all hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            textDecoration: 'none',
            boxShadow: '0 8px 24px rgba(99,102,241,0.3)',
          }}
        >
          <Home size={16} /> Retour à l'accueil
        </Link>
      </div>
    </section>
  )
}
