import { useState } from 'react'
import { Building2, MapPin, Users, Calendar, Phone, Globe, ExternalLink, CheckCircle2, Shield, Download, ChevronDown, ChevronUp } from 'lucide-react'
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
  const [missionsOpen, setMissionsOpen] = useState(true)
  const [logoError, setLogoError] = useState(false)

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(10,15,30,0.9)',
        border: `1px solid ${stage.tagColor}18`,
      }}
    >
      {/* ── Bannière entreprise ── */}
      <div
        style={{
          background: `linear-gradient(135deg, rgba(10,15,35,0.95), rgba(15,20,45,0.9))`,
          padding: '3rem 2.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: `linear-gradient(90deg, transparent, ${stage.tagColor}, transparent)`,
          opacity: 0.5,
        }} />
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '200px', height: '200px',
          background: `radial-gradient(circle, ${stage.tagColor}08, transparent)`,
          pointerEvents: 'none',
        }} />

        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div
            className="flex items-center justify-center overflow-hidden"
            style={{
              width: '80px', height: '80px', borderRadius: '20px',
              background: `linear-gradient(135deg, ${stage.tagColor}15, ${stage.tagColor}08)`,
              border: `2px solid ${stage.tagColor}30`,
              marginBottom: '1.2rem',
            }}
          >
            {stage.logo && !logoError ? (
              <img
                src={stage.logo}
                alt={`Logo ${stage.name}`}
                style={{ width: '56px', height: '56px', objectFit: 'contain' }}
                onError={() => setLogoError(true)}
              />
            ) : stage.logoFallback ? (
              <span style={{ fontSize: '2rem' }}>{stage.logoFallback}</span>
            ) : (
              <Building2 size={32} style={{ color: stage.tagColor }} />
            )}
          </div>

          {/* Nom entreprise */}
          <h3 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: '1.4rem', fontWeight: 800, color: '#f1f5f9',
            letterSpacing: '0.02em', marginBottom: '0.3rem',
          }}>
            {stage.name}
          </h3>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px', fontWeight: 600, color: stage.tagColor,
            letterSpacing: '0.02em', marginBottom: '0.8rem',
          }}>
            {stage.subtitle}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {stage.current && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full" style={{
                background: `${stage.tagColor}12`, border: `1px solid ${stage.tagColor}30`,
                fontSize: '11px', fontWeight: 700, color: stage.tagColor,
              }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: stage.tagColor }} />
                Stage actuel
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full" style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
              fontSize: '11px', fontWeight: 700, color: '#94a3b8',
            }}>
              <Building2 size={11} />
              {stage.tag}
            </span>
          </div>
        </div>
      </div>

      {/* ── Contenu ── */}
      <div style={{ padding: '2rem 2.5rem 2.5rem' }}>

        {/* Description */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '14px', color: '#94a3b8', lineHeight: 1.75,
          marginBottom: '1.5rem',
        }}>
          {stage.description}
        </p>

        {/* Infos en grille */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" style={{ marginBottom: '1.5rem' }}>
          {stage.infos.map(({ icon: Icon, label, value, link }) => (
            <div key={label} className="flex items-start gap-2.5 p-3 rounded-xl" style={{
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
            }}>
              <Icon size={14} style={{ color: stage.tagColor, marginTop: '2px', flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: '10px', color: '#475569', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>
                  {label}
                </p>
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1"
                    style={{ fontSize: '13px', color: stage.tagColor, fontWeight: 600 }}>
                    {value} <ExternalLink size={10} />
                  </a>
                ) : (
                  <p style={{ fontSize: '13px', color: '#e2e8f0', fontWeight: 600 }}>{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Spécialisations */}
        <div className="flex flex-wrap gap-2" style={{ marginBottom: '1.5rem' }}>
          {stage.specialisations.map(s => (
            <span key={s} className="px-2.5 py-1 rounded-md" style={{
              background: `${stage.tagColor}08`, border: `1px solid ${stage.tagColor}18`,
              fontSize: '11px', fontWeight: 600, color: stage.tagColor,
            }}>
              {s}
            </span>
          ))}
        </div>

        {/* Missions */}
        <div className="rounded-xl overflow-hidden" style={{
          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
        }}>
          <button
            className="w-full flex items-center justify-between p-4"
            onClick={() => setMissionsOpen(!missionsOpen)}
          >
            <span className="flex items-center gap-2" style={{ fontSize: '13px', fontWeight: 700, color: '#e2e8f0' }}>
              <Shield size={15} style={{ color: stage.tagColor }} />
              Mes missions — {stage.poste}
            </span>
            {missionsOpen
              ? <ChevronUp size={16} style={{ color: '#475569' }} />
              : <ChevronDown size={16} style={{ color: '#475569' }} />}
          </button>

          {missionsOpen && (
            <div className="px-4 pb-4 space-y-2">
              {stage.missions.map((m, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={14} style={{ color: stage.tagColor, marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>{m}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Boutons */}
        <div className="flex flex-wrap gap-3 mt-5">
          <a href={stage.attestationPdf} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
            style={{
              background: `${stage.tagColor}10`, border: `1px solid ${stage.tagColor}25`,
              fontSize: '13px', fontWeight: 700, color: stage.tagColor,
            }}
            onMouseEnter={e => e.currentTarget.style.background = `${stage.tagColor}20`}
            onMouseLeave={e => e.currentTarget.style.background = `${stage.tagColor}10`}
          >
            <Download size={14} /> Attestation de stage
          </a>
          {stage.siteUrl && (
            <a href={stage.siteUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
              style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                fontSize: '13px', fontWeight: 700, color: '#94a3b8',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#e2e8f0' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.color = '#94a3b8' }}
            >
              <ExternalLink size={14} /> Visiter le site
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Entreprise() {
  return (
    <section id="entreprise" className="relative" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <h2
            className="animate-fade-up"
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#e6ecf8',
            }}
          >
            Entreprise d'accueil
          </h2>
          <div style={{
            width: '100px', height: '2px', margin: '14px auto 0',
            background: 'linear-gradient(90deg, transparent, #22d3ee, #a78bfa, transparent)',
          }} />
          <p className="animate-fade-up mx-auto" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px', fontWeight: 500, color: '#94a3b8',
            lineHeight: 1.7, maxWidth: '520px', marginTop: '0.8rem',
          }}>
            Les entreprises où j'ai effectué mes stages durant ma formation BTS SIO
          </p>
        </div>

        <SectionLabel label="MES STAGES" color="#22d3ee" />

        <div className="space-y-10">
          {stages.map((stage, i) => (
            <StageCard key={i} stage={stage} />
          ))}
        </div>
      </div>
    </section>
  )
}
