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
        <div
          className="animate-fade-up mt-12 p-7 rounded-xl"
          style={{ background: 'rgba(10,15,30,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>
            Langues
          </p>
          <div className="space-y-3">
            {[
              { flag: '🇬🇧', lang: 'Anglais',  level: 'Langue maternelle', color: '#22d3ee' },
              { flag: '🇫🇷', lang: 'Français', level: 'C1 — Avancé',       color: '#818cf8' },
              { flag: '🇧🇷', lang: 'Portugais', level: 'Débutant',           color: '#475569' },
            ].map(({ flag, lang, level, color }) => (
              <div key={lang} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span style={{ fontSize: '1.3rem' }}>{flag}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: '#e2e8f0' }}>{lang}</span>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600, color }}>{level}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
