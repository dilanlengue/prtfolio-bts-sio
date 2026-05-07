import { useState } from 'react'
import { ExternalLink, Wrench, GraduationCap, Award, Briefcase, MapPin } from 'lucide-react'

// Chaque entrée appartient soit à PRO (gauche) soit FORMATION (droite)
// row = numéro de ligne pour l'alignement vertical
const rows = [
  {
    date: '2025 — 2026',
    pro: {
      badge: 'PRO',
      badgeColor: '#fbbf24',
      title: 'Technicien Support & Maintenance',
      org: 'B&A Conseil',
      place: 'Île-de-France',
      sub: 'Stage · Janv/Fév 2026',
      pills: ['Support IT', 'Windows 10/11', 'Maintenance'],
      items: [
        'Diagnostic et résolution d\'incidents matériels et logiciels',
        'Maintenance préventive et corrective des postes',
        'Déploiement de postes Windows et assistance on-site',
      ],
    },
    formation: {
      badge: 'FORMATION',
      badgeColor: '#22d3ee',
      current: true,
      title: 'BTS SIO Option SISR — 2ème année',
      org: 'Institut F2I',
      orgColor: '#22d3ee',
      place: 'Vincennes',
      pills: ['Active Directory', 'Cisco', 'OpenVPN', 'Nagios'],
    },
  },
  {
    date: '2024 — 2025',
    pro: {
      badge: 'PRO',
      badgeColor: '#fbbf24',
      title: 'Technicien Support Informatique',
      org: 'Les Réparateurs Mac & PC',
      place: 'Montreuil',
      sub: 'Stage · Mai/Juil 2025',
      pills: ['Support IT', 'Réseaux', 'Réparation'],
      items: [
        'Réinstallation et configuration des systèmes d\'exploitation',
        'Diagnostic et réparation de matériels informatiques',
        'Gestion et configuration de réseaux locaux',
      ],
    },
    formation: {
      badge: 'FORMATION',
      badgeColor: '#22d3ee',
      title: 'BTS SIO Option SISR — 1ère année',
      org: 'Institut F2I',
      orgColor: '#22d3ee',
      place: 'Vincennes',
      pills: ['Réseaux', 'Linux', 'Virtualisation'],
    },
  },
  {
    date: '2024',
    pro: null,
    formation: {
      badge: 'FORMATION',
      badgeColor: '#64748b',
      title: 'HND — Software Engineering',
      org: 'IUG Douala',
      orgColor: '#64748b',
      place: 'Cameroun',
      pills: ['Dev logiciel', 'Systèmes d\'information'],
    },
  },
  {
    date: '2022 — 2023',
    pro: null,
    formation: {
      badge: 'FORMATION',
      badgeColor: '#64748b',
      title: 'Licence Informatique',
      org: 'Université de Douala',
      orgColor: '#64748b',
      place: 'Cameroun',
      pills: ['Informatique', 'Programmation', 'Systèmes'],
    },
  },
  {
    date: '2022 — 2023',
    pro: {
      badge: 'PRO',
      badgeColor: '#fbbf24',
      title: 'Technicien Informatique',
      org: 'Douala IT-Tech Solution & Innovation',
      place: 'Cameroun',
      sub: 'Technicien · 2022/2023',
      pills: ['Déploiement PC', 'Windows', 'Réseaux LAN'],
      items: [
        'Installation et configuration de 250 postes informatiques au Lycée de Nyall',
        'Câblage réseau, création de l\'infrastructure locale',
        'Paramétrage des sessions utilisateurs et gestion des droits',
      ],
    },
    formation: null,
  },
  {
    date: '2021 — 2022',
    pro: {
      badge: 'PRO',
      badgeColor: '#fbbf24',
      title: 'Stagiaire Technicien IT',
      org: 'Hi-Tech Vision',
      place: 'Cameroun',
      sub: 'Stage · 2021/2022',
      pills: ['Support IT', 'Maintenance', 'Assistance'],
      items: [
        'Assistance technique et support utilisateurs sur site',
        'Maintenance matérielle des équipements informatiques',
        'Participation aux interventions de dépannage réseau',
      ],
    },
    formation: {
      badge: 'DIPLÔME',
      badgeColor: '#64748b',
      title: 'Baccalauréat Scientifique — Série C',
      org: 'Collège La Perfection',
      orgColor: '#64748b',
      place: 'Douala, Cameroun',
      pills: ['Mathématiques', 'Sciences'],
    },
  },
]

function EntryCard({ entry, side }) {
  const [open, setOpen] = useState(false)
  if (!entry) return <div />
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-200"
      style={{
        background: 'rgba(10,15,30,0.85)',
        border: `1px solid ${entry.badgeColor}22`,
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = `${entry.badgeColor}50`}
      onMouseLeave={e => e.currentTarget.style.borderColor = `${entry.badgeColor}22`}
    >
      <div style={{ height: '2px', background: entry.badgeColor, opacity: 0.6 }} />
      <div className="p-7">
        {/* Badge + sub */}
        <div className="flex items-center gap-2 mb-2.5 flex-wrap">
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider"
            style={{
              background: `${entry.badgeColor}15`,
              border: `1px solid ${entry.badgeColor}35`,
              color: entry.badgeColor,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {entry.current && <span className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse align-middle" style={{ background: entry.badgeColor }} />}
            {entry.badge === 'PRO' && <Briefcase size={11} />}
            {entry.badge === 'FORMATION' && <GraduationCap size={11} />}
            {entry.badge === 'DIPLÔME' && <Award size={11} />}
            {entry.badge}
          </span>
          {entry.sub && (
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#475569' }}>{entry.sub}</span>
          )}
        </div>

        {/* Titre */}
        <h3
          style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.25rem', fontWeight: 800, color: '#f1f5f9', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '0.4rem' }}
        >
          {entry.title}
        </h3>

        {/* Org */}
        <p className="flex items-center gap-1.5" style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600, color: entry.orgColor || entry.badgeColor, marginBottom: '0.7rem' }}>
          {entry.org}
          {entry.place && (
            <span className="inline-flex items-center gap-1" style={{ color: '#475569', fontWeight: 500 }}>
              <MapPin size={12} /> {entry.place}
            </span>
          )}
        </p>

        {/* Pills */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {entry.pills.map(p => (
            <span
              key={p}
              className="px-3 py-1 rounded-lg"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', color: '#64748b', fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 500 }}
            >
              {p}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 flex-wrap">
          {entry.items && (
            <button
              className="text-sm font-bold transition-all"
              style={{ color: entry.badgeColor, fontFamily: "'Inter', sans-serif" }}
              onClick={() => setOpen(!open)}
            >
              {open ? '↑ masquer' : 'Voir ↗'}
            </button>
          )}
          {entry.url && (
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-bold"
              style={{ color: '#818cf8', fontFamily: "'Inter', sans-serif" }}
            >
              <ExternalLink size={10} /> Attestation ↗
            </a>
          )}
        </div>

        {/* Détails */}
        {open && entry.items && (
          <div className="mt-3 space-y-1.5 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {entry.items.map((it, i) => (
              <div key={i} className="flex items-start gap-2">
                <span style={{ color: entry.badgeColor, flexShrink: 0, fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '13px', fontWeight: 700, marginTop: '2px' }}>→</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#94a3b8', lineHeight: 1.65 }}>{it}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Parcours() {
  return (
    <section id="parcours" className="relative" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center" style={{ marginBottom: '28px' }}>
          <h2 className="animate-fade-up" style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#e6ecf8' }}>
            Mon Parcours
          </h2>
          <div style={{ width: '128px', height: '2px', margin: '16px auto 0', background: 'linear-gradient(90deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.45) 24%, rgba(212,175,55,0.85) 50%, rgba(147,51,234,0.55) 76%, rgba(56,189,248,0) 100%)' }} />
          <p className="animate-fade-up mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 500, color: '#c5d3e8', lineHeight: 1.75, maxWidth: '580px', marginTop: '1rem' }}>
            De l'informatique aux réseaux — 2021 à aujourd'hui
          </p>
        </div>

        {/* Légende */}
        <div className="flex items-center justify-center gap-8 mb-12">
          {[
            { color: '#fbbf24', label: 'Professionnel' },
            { color: '#22d3ee', label: 'Formation' },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm" style={{ background: color }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#64748b', fontWeight: 500 }}>{label}</span>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <span style={{ fontSize: '14px' }}>⚡</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#64748b', fontWeight: 500 }}>Formation initiale · stages</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {rows.map((row, i) => (
            <div key={i} className="flex items-start gap-0">

              {/* Date + dot — desktop */}
              <div className="hidden md:flex flex-col items-end mr-4 flex-shrink-0" style={{ width: '90px', paddingTop: '1.5rem' }}>
                <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '11px', color: '#475569', fontWeight: 600, textAlign: 'right', lineHeight: 1.4 }}>
                  {row.date}
                </span>
              </div>

              {/* Dot + ligne */}
              <div className="hidden md:flex flex-col items-center mr-4 flex-shrink-0">
                <div
                  className="w-3 h-3 rounded-full mt-6 flex-shrink-0"
                  style={{
                    background: row.pro ? '#fbbf24' : '#22d3ee',
                    boxShadow: `0 0 8px ${row.pro ? '#fbbf24' : '#22d3ee'}60`,
                    border: '2px solid #080c1a',
                  }}
                />
                {i < rows.length - 1 && (
                  <div className="w-px flex-1 mt-1" style={{ background: 'rgba(255,255,255,0.06)', minHeight: '24px' }} />
                )}
              </div>

              {/* Cards grid */}
              <div className="flex-1 grid md:grid-cols-2 gap-4">
                {/* Colonne gauche — PRO */}
                <div>
                  {/* Date mobile */}
                  {row.pro && (
                    <p className="md:hidden text-xs font-bold mb-2" style={{ color: '#475569', fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>{row.date}</p>
                  )}
                  <EntryCard entry={row.pro} side="left" />
                </div>

                {/* Colonne droite — FORMATION */}
                <div>
                  {!row.pro && (
                    <p className="md:hidden text-xs font-bold mb-2" style={{ color: '#475569', fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>{row.date}</p>
                  )}
                  <EntryCard entry={row.formation} side="right" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Langues */}
        <div className="animate-fade-up" style={{ marginTop: '6rem' }}>
          {/* Titre section — grand et stylé */}
          <div className="text-center mb-14">
            <h3
              style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #818cf8 0%, #22d3ee 50%, #00ff88 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradient-shift 6s linear infinite',
                marginBottom: '1rem',
                letterSpacing: '-0.01em',
              }}
            >
              Mes Langues
            </h3>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              color: '#64748b',
              maxWidth: '450px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}>
              Bilingue, je communique aussi bien en anglais qu'en français dans un contexte professionnel.
            </p>
          </div>

          {/* Cards langues — 2 colonnes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                flag: (
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <circle cx="28" cy="28" r="26" fill="#012169" stroke="rgba(34,211,238,0.3)" strokeWidth="1.5"/>
                    <path d="M4 8L52 48M52 8L4 48" stroke="#fff" strokeWidth="5"/>
                    <path d="M4 8L52 48M52 8L4 48" stroke="#C8102E" strokeWidth="2.5"/>
                    <path d="M28 4V52M4 28H52" stroke="#fff" strokeWidth="8"/>
                    <path d="M28 4V52M4 28H52" stroke="#C8102E" strokeWidth="5"/>
                  </svg>
                ),
                lang: 'Anglais',
                level: 'Bilingue',
                percent: 90,
                color: '#22d3ee',
                desc: 'Maîtrise complète à l\'oral et à l\'écrit. Communication fluide en contexte professionnel et technique.',
              },
              {
                flag: (
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <circle cx="28" cy="28" r="26" fill="#fff" stroke="rgba(129,140,248,0.3)" strokeWidth="1.5"/>
                    <path d="M4 6C4 6 4 50 4 50C12 50 19 50 19 50V6C19 6 12 6 4 6Z" fill="#002395"/>
                    <path d="M37 6V50H52C52 50 52 6 52 6H37Z" fill="#ED2939"/>
                  </svg>
                ),
                lang: 'Français',
                level: 'Courant — C1',
                percent: 80,
                color: '#818cf8',
                desc: 'Niveau avancé, usage quotidien en formation et en milieu professionnel.',
              },
            ].map(({ flag, lang, level, percent, color, desc }) => (
              <div
                key={lang}
                className="relative rounded-3xl overflow-hidden transition-all duration-500"
                style={{
                  background: 'linear-gradient(145deg, rgba(11,16,32,0.8), rgba(15,20,40,0.65))',
                  border: `1.5px solid ${color}20`,
                  padding: '2.5rem 2rem',
                  backdropFilter: 'blur(12px)',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                  e.currentTarget.style.borderColor = `${color}60`
                  e.currentTarget.style.boxShadow = `0 24px 60px rgba(0,0,0,0.4), 0 0 40px ${color}15`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.borderColor = `${color}20`
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Glow bar */}
                <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '2px', background: `linear-gradient(90deg, transparent, ${color}, transparent)`, opacity: 0.5 }} />

                {/* Background glow */}
                <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '200px', background: `radial-gradient(circle, ${color}08, transparent)`, pointerEvents: 'none' }} />

                {/* Drapeau */}
                <div className="flex justify-center mb-6">
                  <div style={{
                    borderRadius: '50%',
                    overflow: 'hidden',
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.03)',
                    border: `2.5px solid ${color}35`,
                    boxShadow: `0 0 30px ${color}12, 0 8px 24px rgba(0,0,0,0.3)`,
                  }}>
                    {flag}
                  </div>
                </div>

                {/* Nom langue */}
                <h4 style={{
                  fontFamily: "'Orbitron', system-ui, sans-serif",
                  fontSize: '1.3rem',
                  fontWeight: 800,
                  color: '#f1f5f9',
                  textAlign: 'center',
                  marginBottom: '0.4rem',
                }}>
                  {lang}
                </h4>

                {/* Niveau */}
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '13px',
                  fontWeight: 700,
                  color,
                  textAlign: 'center',
                  letterSpacing: '0.1em',
                  marginBottom: '1.2rem',
                  textShadow: `0 0 10px ${color}30`,
                }}>
                  {level}
                </p>

                {/* Description */}
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: '#94a3b8',
                  textAlign: 'center',
                  lineHeight: 1.7,
                  marginBottom: '1.8rem',
                }}>
                  {desc}
                </p>

                {/* Barre de progression */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    flex: 1,
                    height: '8px',
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: '99px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      width: `${percent}%`,
                      height: '100%',
                      background: `linear-gradient(90deg, ${color}80, ${color})`,
                      borderRadius: '99px',
                      boxShadow: `0 0 14px ${color}40`,
                      transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    }} />
                  </div>
                  <span style={{
                    fontFamily: "'Orbitron', system-ui, sans-serif",
                    fontSize: '15px',
                    fontWeight: 800,
                    color,
                    minWidth: '42px',
                    textAlign: 'right',
                    textShadow: `0 0 8px ${color}30`,
                  }}>
                    {percent}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
