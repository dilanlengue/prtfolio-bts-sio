import { useState } from 'react'
import { Building2, MapPin, Users, Calendar, Phone, Globe, ExternalLink, CheckCircle2, Shield, Download, ChevronDown, ChevronUp } from 'lucide-react'
import SectionLabel from './SectionLabel'

const stages = [
  {
    current: false,
    tag: 'Stage 2ème année',
    tagColor: '#06b6d4',
    name: 'B&A Conseil',
    subtitle: 'Technologies et services de l\'information',
    logo: '/logo-ba-conseil-blanc.png',
    photo: '/photo-ba-conseil.webp',
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
      'Récupération des données sur des disques durs endommagés',
    ],
    attestationPdf: '/attestation-stage-bna.pdf',
  },
  {
    current: false,
    tag: 'Stage 1ère année',
    tagColor: '#8b5cf6',
    name: 'Les Réparateurs Mac & PC',
    subtitle: 'Réparation et maintenance informatique',
    logo: '/logo-reparateurs.jpg',
    photo: '/photo-reparateurs.png',
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
      'Installation et configuration des systèmes d\'exploitation (Windows, macOS)',
      'Installation des pilotes de carte graphique et périphériques',
      'Réparation de PC et MacBook (diagnostic matériel et logiciel)',
      'Reconfiguration complète de Windows',
      'Déblocage des machines et ordinateurs sans suppression des données',
      'Assistance technique et support utilisateurs',
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
        background: '#ffffff',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
      }}
    >
      {/* ── Photo bannière ── */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <img
          src={stage.photo}
          alt={stage.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            filter: 'brightness(0.5)',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)',
        }} />

        <div style={{
          position: 'absolute', bottom: '1.5rem', left: '2rem', right: '2rem',
          display: 'flex', alignItems: 'flex-end', gap: '1rem',
        }}>
          <div style={{
            width: '64px', height: '64px', borderRadius: '14px',
            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, overflow: 'hidden',
          }}>
            {stage.logo && !logoError ? (
              <img src={stage.logo} alt="" style={{ width: '44px', height: '44px', objectFit: 'contain' }}
                onError={() => setLogoError(true)} />
            ) : (
              <Building2 size={28} style={{ color: '#fff' }} />
            )}
          </div>
          <div>
            <h3 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.5rem', fontWeight: 800, color: '#ffffff',
              lineHeight: 1.2, marginBottom: '4px',
              textShadow: '0 1px 4px rgba(0,0,0,0.3)',
            }}>
              {stage.name}
            </h3>
            <p style={{
              fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.85)',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)',
            }}>
              {stage.subtitle}
            </p>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
            {stage.current && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{
                background: 'rgba(34,211,238,0.2)', backdropFilter: 'blur(8px)',
                border: '1px solid rgba(34,211,238,0.4)',
                fontSize: '11px', fontWeight: 700, color: '#fff',
              }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#22d3ee' }} />
                Stage actuel
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{
              background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.25)',
              fontSize: '11px', fontWeight: 700, color: '#fff',
            }}>
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
          fontSize: '14px', color: '#64748b', lineHeight: 1.8,
          marginBottom: '1.5rem',
        }}>
          {stage.description}
        </p>

        {/* Infos en grille */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" style={{ marginBottom: '1.5rem' }}>
          {stage.infos.map(({ icon: Icon, label, value, link }) => (
            <div key={label} className="flex items-start gap-2.5 p-3 rounded-xl" style={{
              background: '#f8fafc', border: '1px solid #e2e8f0',
            }}>
              <Icon size={14} style={{ color: stage.tagColor, marginTop: '2px', flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>
                  {label}
                </p>
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1"
                    style={{ fontSize: '13px', color: stage.tagColor, fontWeight: 600 }}>
                    {value} <ExternalLink size={10} />
                  </a>
                ) : (
                  <p style={{ fontSize: '13px', color: '#1e293b', fontWeight: 600 }}>{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Spécialisations */}
        <div className="flex flex-wrap gap-2" style={{ marginBottom: '1.5rem' }}>
          {stage.specialisations.map(s => (
            <span key={s} className="px-2.5 py-1 rounded-md" style={{
              background: `${stage.tagColor}10`, border: `1px solid ${stage.tagColor}25`,
              fontSize: '11px', fontWeight: 600, color: stage.tagColor,
            }}>
              {s}
            </span>
          ))}
        </div>

        {/* Missions */}
        <div className="rounded-xl overflow-hidden" style={{
          background: '#f8fafc', border: '1px solid #e2e8f0',
        }}>
          <button
            className="w-full flex items-center justify-between p-4"
            onClick={() => setMissionsOpen(!missionsOpen)}
            style={{ cursor: 'pointer' }}
          >
            <span className="flex items-center gap-2" style={{ fontSize: '13px', fontWeight: 700, color: '#1e293b' }}>
              <Shield size={15} style={{ color: stage.tagColor }} />
              Mes missions — {stage.poste}
            </span>
            {missionsOpen
              ? <ChevronUp size={16} style={{ color: '#94a3b8' }} />
              : <ChevronDown size={16} style={{ color: '#94a3b8' }} />}
          </button>

          {missionsOpen && (
            <div className="px-4 pb-4 space-y-2">
              {stage.missions.map((m, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={14} style={{ color: stage.tagColor, marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>{m}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Boutons */}
        <div className="flex flex-wrap gap-3 mt-5">
          <a href={stage.attestationPdf} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all"
            style={{
              background: stage.tagColor, color: '#fff',
              fontSize: '13px', fontWeight: 700,
            }}
          >
            <Download size={14} /> Attestation de stage
          </a>
          {stage.siteUrl && (
            <a href={stage.siteUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all"
              style={{
                background: '#f1f5f9', border: '1px solid #e2e8f0',
                fontSize: '13px', fontWeight: 700, color: '#475569',
                textDecoration: 'none',
              }}
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
        <div className="text-center animate-fade-up" style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '1.2rem' }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px', fontWeight: 700,
              letterSpacing: '0.2em', color: '#06b6d4',
              textTransform: 'uppercase',
              padding: '6px 18px',
              background: 'rgba(6,182,212,0.08)',
              border: '1px solid rgba(6,182,212,0.2)',
              borderRadius: '99px',
            }}>
              Stages & Expériences
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #06b6d4 40%, #8b5cf6 70%, #f472b6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Entreprise d'accueil
          </h2>
          <div style={{
            width: '80px', height: '3px', margin: '0 auto 1.2rem',
            background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #f472b6)',
            borderRadius: '99px',
          }} />
          <p className="mx-auto" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px', fontWeight: 500, color: '#94a3b8',
            lineHeight: 1.7, maxWidth: '520px',
          }}>
            Les structures qui m'ont accueilli en stage durant ma formation BTS SIO SISR
          </p>
        </div>

        <SectionLabel label="MES STAGES" color="#22d3ee" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {stages.map((stage, i) => (
            <StageCard key={i} stage={stage} />
          ))}
        </div>
      </div>
    </section>
  )
}
