import { useState } from 'react'
import { Building2, MapPin, Users, Calendar, Phone, Globe, ExternalLink, ChevronDown, ChevronUp, CheckCircle2, Shield, Download } from 'lucide-react'
import SectionLabel from './SectionLabel'

const stages = [
  {
    current: true,
    tag: 'Stage 2ème année',
    tagColor: '#22d3ee',
    name: 'B&A Conseil',
    subtitle: 'Technologies et services de l\'information',
    logo: '/logo-ba-conseil.png',
    logoFallback: null,
    siteUrl: 'https://ba-conseil.fr',
    description:
      'B&A Conseil accompagne les organisations dans leurs enjeux informatique, télécoms et réseaux : connectivité professionnelle (internet & lignes mobiles), MDM/UEM, maintenance & infogérance, développement logiciel, fourniture de matériel/print et interventions de techniciens IT partout en France.',
    infos: [
      { icon: MapPin, label: 'Siège social', value: 'Coignières, Yvelines' },
      { icon: Users, label: 'Taille', value: '2-10 employés' },
      { icon: Calendar, label: 'Fondée en', value: '2018' },
      { icon: Calendar, label: 'Période de stage', value: '05/01/2026 – 06/02/2026 (5 semaines)' },
      { icon: Phone, label: 'Téléphone', value: '01 84 80 19 18' },
      { icon: Globe, label: 'Site web', value: 'ba-conseil.fr', link: 'https://ba-conseil.fr' },
    ],
    specialisations: [
      'Telecom expense management', 'EMM', 'MTP', 'PTI', 'Formations',
      'Couverture Radio Indoor', 'Opérateur', 'MDM/UEM', 'Infogérance', 'Développement logiciel',
    ],
    poste: 'Technicien Support & Maintenance',
    missions: [
      'Diagnostic et résolution d\'incidents matériels et logiciels',
      'Maintenance préventive et corrective des postes de travail',
      'Déploiement de postes Windows et assistance on-site',
      'Configuration de smartphones avant leur mise à disposition aux clients',
      'Installation et paramétrage d\'applications professionnelles',
      'Utilisation de Miradore pour gérer et configurer les appareils à distance',
      'Enregistrement des téléphones dans une solution de gestion de flotte mobile (MDM)',
    ],
    attestationPdf: '/attestation-stage-bna.pdf',
  },
  {
    current: false,
    tag: 'Stage 1ère année',
    tagColor: '#a78bfa',
    name: 'Les Réparateurs Mac & PC',
    subtitle: 'Réparation et maintenance informatique',
    logo: '/logo-reparateurs.jpg',
    logoFallback: '🔧',
    siteUrl: 'https://lesreparateursmacetpc.com',
    description:
      'Entreprise spécialisée dans la réparation, la maintenance et le dépannage de matériels informatiques (Mac et PC). Intervention sur site et en atelier pour les particuliers et professionnels.',
    infos: [
      { icon: MapPin, label: 'Localisation', value: 'Montreuil, Seine-Saint-Denis' },
      { icon: Calendar, label: 'Période de stage', value: '12/05/2025 – 21/06/2025 (7 semaines)' },
      { icon: Phone, label: 'Téléphone', value: '06 65 01 86 53' },
      { icon: Globe, label: 'Site web', value: 'lesreparateursmacetpc.com', link: 'https://lesreparateursmacetpc.com' },
    ],
    specialisations: [
      'Réparation Mac', 'Réparation PC', 'Maintenance', 'Dépannage', 'Installation OS', 'Réseaux LAN',
    ],
    poste: 'Technicien Support Informatique',
    missions: [
      'Réinstallation et configuration des systèmes d\'exploitation',
      'Diagnostic et réparation de matériels informatiques (Mac & PC)',
      'Gestion et configuration de réseaux locaux',
      'Assistance technique et support utilisateurs',
      'Maintenance préventive et nettoyage des équipements',
    ],
    attestationPdf: '/attestation-stage-reparateurs.pdf',
  },
]

function StageCard({ stage }) {
  const [missionsOpen, setMissionsOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 card-lift"
      style={{
        background: 'rgba(10,15,30,0.85)',
        border: `1px solid ${stage.tagColor}20`,
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = `${stage.tagColor}45`)}
      onMouseLeave={e => (e.currentTarget.style.borderColor = `${stage.tagColor}20`)}
    >
      {/* Banner top bar */}
      <div style={{ height: '3px', background: `linear-gradient(90deg, ${stage.tagColor}, ${stage.tagColor}60)` }} />

      <div className="p-6 md:p-8">
        {/* Tags */}
        <div className="flex items-center gap-3 mb-5 flex-wrap">
          {stage.current && (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
              style={{
                background: `${stage.tagColor}15`,
                border: `1px solid ${stage.tagColor}35`,
                color: stage.tagColor,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: stage.tagColor }} />
              Stage actuel
            </span>
          )}
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
            style={{
              background: `${stage.tagColor}12`,
              border: `1px solid ${stage.tagColor}30`,
              color: stage.tagColor,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <Building2 size={12} />
            {stage.tag}
          </span>
        </div>

        {/* Company header with logo */}
        <div className="flex items-center gap-4 mb-4">
          {/* Logo */}
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
            style={{
              background: `${stage.tagColor}10`,
              border: `1px solid ${stage.tagColor}25`,
            }}
          >
            {stage.logo && !logoError ? (
              <img
                src={stage.logo}
                alt={`Logo ${stage.name}`}
                className="w-12 h-12 object-contain"
                onError={() => setLogoError(true)}
              />
            ) : stage.logoFallback ? (
              <span style={{ fontSize: '1.8rem' }}>{stage.logoFallback}</span>
            ) : (
              <Building2 size={28} style={{ color: stage.tagColor }} />
            )}
          </div>

          <div className="flex-1">
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.5rem',
                fontWeight: 800,
                color: '#f1f5f9',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}
            >
              {stage.name}
            </h3>
            <div className="flex items-center gap-2 flex-wrap mt-1">
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: stage.tagColor }}>
                {stage.subtitle}
              </p>
              {stage.siteUrl && (
                <a
                  href={stage.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-all"
                  style={{ color: '#64748b', fontSize: '12px' }}
                  onMouseEnter={e => e.currentTarget.style.color = stage.tagColor}
                  onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                >
                  <ExternalLink size={11} /> Site web
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px',
            color: '#94a3b8',
            lineHeight: 1.75,
            marginBottom: '1.5rem',
          }}
        >
          {stage.description}
        </p>

        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {stage.infos.map(({ icon: Icon, label, value, link }) => (
            <div
              key={label}
              className="flex items-start gap-3 p-3.5 rounded-xl transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${stage.tagColor}25`}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
            >
              <Icon size={16} style={{ color: stage.tagColor, marginTop: '2px', flexShrink: 0 }} />
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#475569', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {label}
                </p>
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: stage.tagColor, fontWeight: 600 }}
                  >
                    {value} <ExternalLink size={11} />
                  </a>
                ) : (
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#e2e8f0', fontWeight: 600 }}>
                    {value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Spécialisations */}
        <div className="mb-6">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '11px',
              fontWeight: 700,
              color: '#475569',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '0.6rem',
            }}
          >
            Spécialisations
          </p>
          <div className="flex flex-wrap gap-2">
            {stage.specialisations.map(s => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
                style={{
                  background: `${stage.tagColor}10`,
                  border: `1px solid ${stage.tagColor}25`,
                  color: stage.tagColor,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Missions accordion */}
        <div
          className="rounded-xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <button
            className="w-full flex items-center justify-between p-4 transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
            onClick={() => setMissionsOpen(!missionsOpen)}
          >
            <span className="flex items-center gap-2 text-sm font-bold" style={{ color: '#e2e8f0' }}>
              <Shield size={16} style={{ color: stage.tagColor }} />
              Mes missions — {stage.poste}
            </span>
            {missionsOpen ? (
              <ChevronUp size={18} style={{ color: '#475569' }} />
            ) : (
              <ChevronDown size={18} style={{ color: '#475569' }} />
            )}
          </button>

          {missionsOpen && (
            <div className="px-4 pb-4 space-y-2.5">
              {stage.missions.map((m, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} style={{ color: stage.tagColor, marginTop: '3px', flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '14px',
                      color: '#94a3b8',
                      lineHeight: 1.65,
                    }}
                  >
                    {m}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Attestation link */}
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={stage.attestationPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all"
            style={{
              background: `${stage.tagColor}12`,
              border: `1px solid ${stage.tagColor}30`,
              color: stage.tagColor,
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={e => e.currentTarget.style.background = `${stage.tagColor}25`}
            onMouseLeave={e => e.currentTarget.style.background = `${stage.tagColor}12`}
          >
            <Download size={14} />
            Attestation de stage
          </a>
          {stage.siteUrl && (
            <a
              href={stage.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#94a3b8',
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.color = '#e2e8f0'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.color = '#94a3b8'
              }}
            >
              <ExternalLink size={14} />
              Visiter le site
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Entreprise() {
  return (
    <section id="entreprise" className="relative" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <h2
            className="animate-fade-up"
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: '#e6ecf8',
            }}
          >
            Entreprise d'accueil
          </h2>
          <div
            style={{
              width: '128px',
              height: '2px',
              margin: '16px auto 0',
              background: 'linear-gradient(90deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.45) 24%, rgba(212,175,55,0.85) 50%, rgba(147,51,234,0.55) 76%, rgba(56,189,248,0) 100%)',
            }}
          />
          <p
            className="animate-fade-up mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              fontWeight: 500,
              color: '#c5d3e8',
              lineHeight: 1.75,
              maxWidth: '580px',
              marginTop: '1rem',
            }}
          >
            Présentation des entreprises et stages réalisés durant ma formation BTS SIO
          </p>
        </div>

        {/* Section divider */}
        <SectionLabel label="MES STAGES" color="#22d3ee" />

        {/* Stage cards */}
        <div className="space-y-10">
          {stages.map((stage, i) => (
            <StageCard key={i} stage={stage} />
          ))}
        </div>
      </div>
    </section>
  )
}
