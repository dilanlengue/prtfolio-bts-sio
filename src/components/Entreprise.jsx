import { Building2, MapPin, Users, Calendar, Phone, Globe, ExternalLink, Download, Briefcase, Smartphone, Wrench, Sparkles } from 'lucide-react'

const stages = [
  {
    current: true,
    tag: 'Stage 2ème année',
    tagColor: '#fbbf24',
    name: 'B&A Conseil',
    subtitle: 'Technologies et services de l’information',
    logo: '/logo-ba-conseil.png',
    icon: Smartphone,
    siteUrl: 'https://ba-conseil.fr',
    description:
      'B&A Conseil accompagne les organisations dans leurs enjeux informatique, télécoms et réseaux : connectivité professionnelle (internet & lignes mobiles), MDM/UEM, maintenance & infogérance, développement logiciel, fourniture de matériel/print et interventions de techniciens IT partout en France.',
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
      'Administration du parc mobile Android via la solution MDM Miradore Online',
      'Implémentation de politiques de sécurité (passcode, restrictions, COBO, tracking, mises à jour)',
      'Déploiement automatisé d’applications professionnelles via Managed Google Play',
      'Gestion des incidents MDM : première analyse de dysfonctionnement, comptes Google managés, blocages',
      'Support aux utilisateurs pour l’activation du compte manager et la configuration initiale',
      'Documentation et mise à jour des inventaires matériels (Excel, numéro de série, profils MDM)',
      'Configuration des appareils avant mise à disposition aux clients (paramétrage, apps, comptes)',
    ],
    attestationPdf: '/attestation-stage-bna.pdf',
  },
  {
    current: false,
    tag: 'Stage 1ère année',
    tagColor: '#22d3ee',
    name: 'Les Réparateurs Mac & PC',
    subtitle: 'Réparation et maintenance informatique',
    logo: '/logo-reparateurs.jpg',
    icon: Wrench,
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
      'Réinstallation et configuration des systèmes d’exploitation (Windows, macOS)',
      'Diagnostic et réparation de matériels informatiques (cartes mères, disques, RAM)',
      'Gestion et configuration de réseaux locaux (Wi-Fi, Ethernet, routeurs)',
      'Sauvegarde et restauration de données clients',
      'Assistance technique et conseil auprès des utilisateurs',
    ],
    attestationPdf: '/attestation-stage-reparateurs.pdf',
  },
]

function StageSection({ stage }) {
  const Icon = stage.icon
  const logoError = false

  return (
    <div className="animate-fade-up" style={{ marginBottom: '5rem' }}>
      <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '2.5rem' }}>

        {/* Carte entreprise — gauche */}
        <div className="lg:col-span-1">
          <div
            className="rounded-2xl overflow-hidden transition-all duration-300 sticky top-8"
            style={{
              background: `linear-gradient(160deg, ${stage.tagColor}10, rgba(11,16,32,0.92))`,
              border: `1.5px solid ${stage.tagColor}25`,
              padding: '2.2rem 1.8rem',
              textAlign: 'center',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = `${stage.tagColor}50`
              e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.35), 0 0 40px ${stage.tagColor}10`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = `${stage.tagColor}25`
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Tag */}
            <div className="flex justify-center gap-2 mb-6">
              {stage.current && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{
                  background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.2)',
                  fontSize: '11px', fontWeight: 700, color: '#34d399', fontFamily: "'Inter', sans-serif",
                }}>
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
                  Stage actuel
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{
                background: `${stage.tagColor}10`, border: `1px solid ${stage.tagColor}30`,
                fontSize: '11px', fontWeight: 700, color: stage.tagColor, fontFamily: "'Inter', sans-serif",
              }}>
                <Building2 size={12} />
                {stage.tag}
              </span>
            </div>

            {/* Logo */}
            <div className="flex items-center justify-center mx-auto" style={{
              width: '90px', height: '90px', borderRadius: '22px',
              background: `linear-gradient(135deg, ${stage.tagColor}18, ${stage.tagColor}06)`,
              border: `2px solid ${stage.tagColor}35`,
              boxShadow: `0 0 30px ${stage.tagColor}12`,
              marginBottom: '1.5rem',
              overflow: 'hidden',
            }}>
              {stage.logo ? (
                <img src={stage.logo} alt={stage.name} style={{ width: '65px', height: '65px', objectFit: 'contain' }} onError={e => e.target.style.display = 'none'} />
              ) : (
                <Icon size={40} style={{ color: stage.tagColor }} />
              )}
            </div>

            {/* Nom entreprise */}
            <h4 style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: '18px', fontWeight: 800, color: '#f1f5f9',
              marginBottom: '0.5rem',
            }}>
              {stage.name}
            </h4>

            {/* Subtitle */}
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 500,
              color: '#94a3b8', marginBottom: '1.2rem', lineHeight: 1.5,
            }}>
              {stage.subtitle}
            </p>

            {/* Poste */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px', fontWeight: 700, color: stage.tagColor,
              textTransform: 'uppercase', letterSpacing: '0.06em',
              marginBottom: '1.2rem',
              padding: '8px 16px',
              background: `${stage.tagColor}08`,
              border: `1px solid ${stage.tagColor}20`,
              borderRadius: '10px',
              display: 'inline-block',
            }}>
              {stage.poste}
            </p>

            {/* Infos compactes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1rem' }}>
              {stage.infos.map(({ icon: InfoIcon, label, value, link }) => (
                <div key={label} className="flex items-center gap-2.5" style={{ justifyContent: 'center' }}>
                  <InfoIcon size={14} style={{ color: stage.tagColor, flexShrink: 0 }} />
                  {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: '12.5px', color: stage.tagColor, fontWeight: 600, textDecoration: 'none' }}
                    >
                      {value}
                    </a>
                  ) : (
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12.5px', color: '#cbd5e1', fontWeight: 500 }}>
                      {value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Spécialisations */}
            <div style={{ marginTop: '1.5rem' }}>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: '10px', fontWeight: 700,
                color: '#475569', textTransform: 'uppercase', letterSpacing: '0.12em',
                marginBottom: '0.6rem',
              }}>
                Sp{'é'}cialisations
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {stage.specialisations.map(s => (
                  <span key={s} style={{
                    fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600,
                    color: `${stage.tagColor}cc`, background: `${stage.tagColor}08`,
                    border: `1px solid ${stage.tagColor}18`, borderRadius: '6px',
                    padding: '4px 10px',
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Boutons */}
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a href={stage.attestationPdf} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl transition-all duration-200"
                style={{
                  padding: '10px 16px', textDecoration: 'none',
                  background: `${stage.tagColor}12`, border: `1px solid ${stage.tagColor}30`,
                  color: stage.tagColor, fontFamily: "'Inter', sans-serif",
                  fontSize: '13px', fontWeight: 700,
                }}
                onMouseEnter={e => e.currentTarget.style.background = `${stage.tagColor}22`}
                onMouseLeave={e => e.currentTarget.style.background = `${stage.tagColor}12`}
              >
                <Download size={14} />
                Attestation de stage
              </a>
              {stage.siteUrl && (
                <a href={stage.siteUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl transition-all duration-200"
                  style={{
                    padding: '10px 16px', textDecoration: 'none',
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                    color: '#94a3b8', fontFamily: "'Inter', sans-serif",
                    fontSize: '13px', fontWeight: 600,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#e2e8f0' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.color = '#94a3b8' }}
                >
                  <ExternalLink size={14} />
                  Visiter le site
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Contenu — droite */}
        <div className="lg:col-span-2">

          {/* Description de l'entreprise */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4 style={{
              fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 800,
              color: '#f1f5f9', marginBottom: '1rem',
              display: 'flex', alignItems: 'center', gap: '0.6rem',
            }}>
              <Building2 size={18} style={{ color: stage.tagColor }} />
              Description de l{'’'}entreprise
            </h4>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 400,
              color: '#94a3b8', lineHeight: 1.9,
              paddingLeft: '1.2rem',
              borderLeft: `3px solid ${stage.tagColor}35`,
              background: `linear-gradient(90deg, ${stage.tagColor}06, transparent)`,
              padding: '1.2rem 1.5rem',
              borderRadius: '0 12px 12px 0',
            }}>
              {stage.description}
            </p>
          </div>

          {/* Missions — toujours visibles */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 800,
              color: '#f1f5f9', marginBottom: '0.5rem',
              display: 'flex', alignItems: 'center', gap: '0.6rem',
            }}>
              <Briefcase size={18} style={{ color: stage.tagColor }} />
              Mes missions — {stage.poste}
            </h4>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 500,
              color: '#64748b', marginBottom: '1.2rem',
            }}>
              {stage.missions.length} missions r{'é'}alis{'é'}es durant ce stage
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {stage.missions.map((m, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl transition-all duration-200"
                  style={{
                    padding: '1rem 1.3rem',
                    background: 'rgba(11,16,32,0.55)',
                    border: '1px solid rgba(255,255,255,0.04)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `${stage.tagColor}25`
                    e.currentTarget.style.background = `linear-gradient(90deg, ${stage.tagColor}06, transparent)`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
                    e.currentTarget.style.background = 'rgba(11,16,32,0.55)'
                  }}
                >
                  <div className="flex-shrink-0 flex items-center justify-center rounded-lg" style={{
                    width: '30px', height: '30px', marginTop: '1px',
                    background: `${stage.tagColor}12`, border: `1px solid ${stage.tagColor}28`,
                  }}>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '11px', fontWeight: 800, color: stage.tagColor,
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: "'Inter', sans-serif", fontSize: '14.5px',
                    color: '#cbd5e1', lineHeight: 1.7, fontWeight: 400,
                  }}>
                    {m}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Entreprise() {
  return (
    <section id="entreprise" className="relative" style={{ paddingTop: '8rem', paddingBottom: '10rem' }}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <div className="animate-fade-up" style={{ marginBottom: '1.5rem' }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '13px', fontWeight: 700,
              letterSpacing: '0.2em', color: '#fbbf24',
              textTransform: 'uppercase',
              padding: '6px 18px',
              background: 'rgba(251,191,36,0.06)',
              border: '1px solid rgba(251,191,36,0.15)',
              borderRadius: '99px',
            }}>
              Entreprises d{'’'}accueil
            </span>
          </div>
          <h2
            className="animate-fade-up"
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #f1f5f9 0%, #fbbf24 50%, #22d3ee 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 8s linear infinite',
            }}
          >
            Mes Stages en Entreprise
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #fbbf24, #22d3ee)', borderRadius: '99px', margin: '0 auto 1.8rem' }} />
          <p
            className="animate-fade-up mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px', fontWeight: 500,
              color: '#94a3b8', lineHeight: 1.8,
              maxWidth: '620px',
            }}
          >
            Pr{'é'}sentation des entreprises et des missions r{'é'}alis{'é'}es
            durant ma formation BTS SIO option SISR.
          </p>
        </div>

        {/* Stages */}
        {stages.map((stage, i) => (
          <div key={stage.name}>
            {/* Séparateur entre les deux stages */}
            {i > 0 && (
              <div className="flex items-center gap-4" style={{ margin: '1rem 0 4rem' }}>
                <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />
                <Sparkles size={16} style={{ color: '#818cf8', opacity: 0.4 }} />
                <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />
              </div>
            )}
            <StageSection stage={stage} />
          </div>
        ))}
      </div>
    </section>
  )
}
