import { useState } from 'react'
import { ChevronDown, ExternalLink, Settings, Rocket, ClipboardList, GraduationCap, FileText, Download, Lock, Loader2, CheckCircle2 } from 'lucide-react'
import SectionLabel from './SectionLabel'

const epreuves = [
  {
    code: 'E4',
    emoji: '⚙️',
    icon: Settings,
    title: 'Support et mise à disposition de services informatiques',
    coef: 'Coef. 4',
    oral: 'Écrit (4h) + Pratique (40 min)',
    description: 'Gérer le patrimoine informatique, répondre aux incidents et aux demandes d\'assistance, développer la présence en ligne de l\'organisation.',
    details: [
      'Gestion du patrimoine informatique (inventaire, maintenance)',
      'Réponse aux incidents et demandes d\'assistance et de support',
      'Développement de la présence en ligne de l\'organisation',
      'Travail en mode projet (planification, suivi, documentation)',
    ],
    monProjet: 'Développement d\'une calculatrice web interactive en HTML5/CSS3/JavaScript avec manipulation du DOM, validation des entrées et gestion des erreurs.',
    color: '#22d3ee',
    docs: [
      {
        label: 'Dossier E4 — Calculatrice Web Interactive',
        url: '/dossiers/dossier-calculatrice.pdf',
        status: 'available',
        outline: [
          'Interface HTML5/CSS3',
          'Manipulation du DOM JavaScript',
          'Gestion des opérations (+, -, *, /)',
          'Validation des entrées et gestion des erreurs',
          'Protection division par zéro',
        ],
      },
    ],
  },
  {
    code: 'E5',
    emoji: '🚀',
    icon: Rocket,
    title: 'Évaluation des compétences informatiques',
    coef: 'Coef. 4',
    oral: 'Oral (10 min) + Entretien jury (30 min)',
    description: 'Évaluer l\'expérience professionnelle et les compétences développées durant la formation. Capacité à mobiliser ses connaissances dans un contexte professionnel réel et à en tirer des enseignements pertinents.',
    details: [
      'Valorisation du parcours : expérience professionnelle et accomplissements dans le domaine informatique',
      'Analyse réflexive : capacité à analyser ses activités, les problématiques rencontrées et les solutions apportées',
      'Projection professionnelle : identifier ses axes de progression et se projeter dans sa future carrière',
      'Communication professionnelle : aptitude à communiquer clairement et efficacement sur son parcours et ses réalisations',
    ],
    monProjet: 'AD DS + VLAN + GPO + Nagios + VOIP + Wireshark + Calculatrice Web (lab) · GLPI + Active Directory en entreprise (stages) — 9 projets documentés.',
    color: '#a855f3',
    docs: [
      {
        label: 'Dossier E5 — Active Directory & DNS',
        url: '/dossiers/dossier-adds-dns-dilan.pdf',
        status: 'available',
        outline: [
          'Domaine sio.lan, Windows Server 2025',
          'Installation et promotion DC',
          'Création OUs, utilisateurs, groupes de sécurité',
          'DNS intégré + DHCP avec scopes',
          'Tests de validation et plan de rollback',
        ],
      },
      {
        label: 'Dossier E5 — Segmentation Réseau VLAN',
        url: '/dossiers/dossier-segmentation-vlan.pdf',
        status: 'available',
        outline: [
          '4 VLANs PME, Cisco',
          'Switch Cisco 2960 : VLANs, ports access / trunk',
          'Routeur 2901 : Router-on-a-Stick, sous-interfaces dot1Q',
          'ACL inter-VLAN et règles de filtrage',
          'Tests connectivité + capture trame 802.1Q',
        ],
      },
      {
        label: 'Dossier E5 — GPO Sécurisation Stagiaires',
        url: '/dossiers/dossier-gpo.pdf',
        status: 'available',
        outline: [
          'OU, groupe sécurité, restrictions',
          'GPO mots de passe et verrouillage de session',
          'Restrictions USB et panneau de configuration',
          'Fond d\'écran entreprise et personnalisation',
          'Tests de validation sur postes stagiaires',
        ],
      },
      {
        label: 'Dossier E5 — Supervision Nagios',
        url: '/dossiers/dossier-nagios.pdf',
        status: 'available',
        outline: [
          'Ubuntu, interface web',
          'Installation Nagios Core',
          'Définition des hôtes / services à monitorer',
          'Plugins NRPE pour métriques Linux / Windows',
          'Configuration des alertes email',
        ],
      },
      {
        label: 'Dossier E5 — Configuration VOIP Cisco',
        url: '/dossiers/dossier-voip.pdf',
        status: 'available',
        outline: [
          'CME, IP phones',
          'Configuration Cisco Unified CME',
          'Attribution des numéros de poste',
          'Plan de numérotation et dial-peers',
          'Tests d\'appels internes et qualité audio',
        ],
      },
      {
        label: 'Dossier E5 — Analyse Réseau Wireshark',
        url: '/dossiers/dossier-wireshark.pdf',
        status: 'available',
        outline: [
          'Capture, DNS analysis',
          'Installation et configuration des filtres',
          'Analyse des trames DNS et HTTP',
          'Identification d\'anomalies réseau',
          'Documentation et rapport d\'analyse',
        ],
      },
    ],
  },
  {
    code: 'E6',
    emoji: '📋',
    icon: ClipboardList,
    title: 'Parcours de professionnalisation',
    coef: 'Coef. 3',
    oral: 'Oral (20 min) — synthèse du parcours',
    description: 'Synthèse du parcours professionnel : missions en entreprise, veille technologique, posture professionnelle et évolution.',
    details: [
      'Bilan des missions réalisées en stage',
      'Présentation de la veille technologique menée',
      'Analyse réflexive sur sa posture professionnelle',
      'Projection et projet professionnel post-diplôme',
    ],
    monProjet: 'Mon parcours : 2 stages (B&A Conseil + Les Réparateurs Mac & PC), veille cybersécurité (CERT-FR, ANSSI, NVD), projets infrastructure SISR.',
    color: '#d4af37',
    docs: [
      {
        label: 'Tableau de synthèse E6',
        url: null,
        status: 'available',
        outline: [
          'Liste des situations professionnelles par épreuve',
          'Compétences référentiel SISR mobilisées',
          'Périodes, contextes et organisations',
          'Livrables produits par situation',
          'Auto-évaluation par compétence',
        ],
      },
      {
        label: 'Rapport de veille technologique',
        url: null,
        status: 'available',
        outline: [
          'Sujet : Sécurisation d\'une infrastructure réseau',
          'Sources : ANSSI, CERT-FR, NVD, OWASP',
          'Démarche : Collecter → Trier → Tester → Documenter',
          'Synthèse comparative VLAN / VPN / Nagios',
          'Bonnes pratiques ANSSI 2025 et bibliographie',
        ],
      },
    ],
  },
]

const formations = [
  {
    school: 'Institut F2I',
    schoolColor: '#22d3ee',
    badge: 'Formation initiale',
    degree: 'BTS SIO — Option SISR',
    desc: 'Services Informatiques aux Organisations · Option SISR',
    pills: ['Administration systèmes', 'Réseaux & Cisco', 'Cybersécurité', 'Supervision IT'],
    borderColor: '#22d3ee',
  },
  {
    school: 'IUG Douala',
    schoolColor: '#d4af37',
    badge: 'Formation initiale',
    degree: 'HND — Software Engineering',
    desc: 'Higher National Diploma · Ingénierie logicielle',
    pills: ['Dev logiciel', 'Systèmes d\'information', 'Bases de données'],
    borderColor: '#d4af37',
  },
  {
    school: 'Université de Douala',
    schoolColor: '#a855f3',
    badge: 'Licence',
    degree: 'Licence Informatique',
    desc: 'Licence en Informatique · parcours général',
    pills: ['Algorithmique', 'Bases de données', 'Réseaux', 'Systèmes'],
    borderColor: '#a855f3',
  },
]

const liens = [
  { label: 'Fiche RNCP', url: 'https://www.francecompetences.fr/recherche/rncp/35475/' },
  { label: 'Onisep', url: 'https://www.onisep.fr/ressources/univers-metier/metiers/technicien-informatique' },
  { label: 'Cyclades', url: 'https://cyclades.education.fr/' },
]

/* ─── Dossier card with status + outline ─── */
function statusMeta(status) {
  if (status === 'available') {
    return {
      label: 'Disponible',
      color: '#22c55e',
      bg: 'rgba(34,197,94,0.12)',
      border: 'rgba(34,197,94,0.4)',
      Icon: CheckCircle2,
    }
  }
  if (status === 'in-progress') {
    return {
      label: 'En cours de rédaction',
      color: '#fbbf24',
      bg: 'rgba(251,191,36,0.12)',
      border: 'rgba(251,191,36,0.4)',
      Icon: Loader2,
    }
  }
  return {
    label: 'Planifié',
    color: '#94a3b8',
    bg: 'rgba(148,163,184,0.1)',
    border: 'rgba(148,163,184,0.3)',
    Icon: Lock,
  }
}

function DossierCard({ doc, accent }) {
  const [expanded, setExpanded] = useState(false)
  const meta = statusMeta(doc.status || 'planned')
  const StatusIcon = meta.Icon
  const isReady = doc.status === 'available' && doc.url

  return (
    <div
      className="rounded-xl"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.07)',
        overflow: 'hidden',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <FileText size={18} style={{ color: accent, flexShrink: 0 }} />
        <span
          className="flex-1"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            fontWeight: 700,
            color: '#f1f5f9',
            lineHeight: 1.4,
          }}
        >
          {doc.label}
        </span>
        <span
          className="flex items-center gap-1.5 rounded-md flex-shrink-0"
          style={{
            background: meta.bg,
            border: `1px solid ${meta.border}`,
            padding: '4px 9px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10.5px',
            fontWeight: 700,
            color: meta.color,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          <StatusIcon size={11} className={doc.status === 'in-progress' ? 'animate-spin' : ''} style={{ animationDuration: '3s' }} />
          {meta.label}
        </span>
      </div>

      {/* Outline preview (expandable) */}
      {doc.outline && doc.outline.length > 0 && (
        <>
          <button
            type="button"
            onClick={() => setExpanded(v => !v)}
            className="w-full flex items-center justify-between px-4 py-2 transition-colors"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.05)',
              background: expanded ? 'rgba(255,255,255,0.02)' : 'transparent',
              color: '#94a3b8',
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: '0.02em',
            }}
            aria-expanded={expanded}
          >
            <span>{expanded ? 'Masquer le plan' : 'Voir le plan du dossier'}</span>
            <ChevronDown
              size={14}
              style={{
                transform: expanded ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s',
              }}
            />
          </button>
          {expanded && (
            <ul className="px-5 pb-4 space-y-1.5">
              {doc.outline.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    color: '#cbd5e1',
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: accent, marginTop: '2px', flexShrink: 0 }}>›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      {/* Action button */}
      <div
        className="px-4 py-2.5 flex items-center justify-end"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.18)' }}
      >
        {isReady ? (
          <a
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md transition-all hover:-translate-y-0.5"
            style={{
              background: `${accent}1a`,
              border: `1px solid ${accent}55`,
              color: accent,
              padding: '5px 12px',
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              fontWeight: 700,
              textDecoration: 'none',
            }}
            onClick={e => e.stopPropagation()}
          >
            <Download size={12} /> Télécharger PDF
          </a>
        ) : (
          <span
            className="flex items-center gap-1.5 rounded-md"
            style={{
              background: 'rgba(34,197,94,0.08)',
              border: '1px solid rgba(34,197,94,0.25)',
              color: '#22c55e',
              padding: '5px 12px',
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              fontWeight: 600,
            }}
          >
            <CheckCircle2 size={11} /> Dossier préparé
          </span>
        )}
      </div>
    </div>
  )
}

function EpreuveCard({ ep }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="card-holo rounded-2xl transition-all duration-300 cursor-pointer"
      style={{
        background: 'rgba(11,16,32,0.62)',
        border: open ? `2px solid ${ep.color}80` : `1px solid ${ep.color}30`,
        padding: open ? '0' : '24px 20px',
        boxShadow: open ? `0 0 32px ${ep.color}15` : 'none',
      }}
      onClick={() => setOpen(!open)}
      onMouseEnter={e => { if (!open) e.currentTarget.style.borderColor = `${ep.color}55` }}
      onMouseLeave={e => { if (!open) e.currentTarget.style.borderColor = `${ep.color}30` }}
    >
      {/* Collapsed view */}
      {!open && (
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center rounded-xl mb-2" style={{ width: '44px', height: '44px', background: `${ep.color}12`, border: `1px solid ${ep.color}30` }}>
            {ep.icon && <ep.icon size={22} style={{ color: ep.color }} />}
          </div>
          <span style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.25rem', fontWeight: 800, color: ep.color, letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>
            {ep.code}
          </span>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12.5px', color: '#c5d3e8', lineHeight: 1.55, marginBottom: '0.8rem' }}>
            {ep.title}
          </p>
          <span
            className="flex items-center gap-1 font-bold"
            style={{ color: ep.color, fontFamily: "'Inter', sans-serif", fontSize: '10.5px', letterSpacing: '0.04em' }}
          >
            ▼ détails
          </span>
        </div>
      )}

      {/* Expanded view — style cyber */}
      {open && (
        <div>
          {/* Top color bar */}
          <div style={{ height: '3px', background: ep.color, borderRadius: '16px 16px 0 0' }} />

          <div style={{ padding: '24px' }}>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-lg" style={{ width: '38px', height: '38px', background: `${ep.color}12`, border: `1px solid ${ep.color}30` }}>
                  {ep.icon && <ep.icon size={20} style={{ color: ep.color }} />}
                </div>
                <span style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.25rem', fontWeight: 800, color: ep.color, letterSpacing: '-0.02em' }}>
                  {ep.code}
                </span>
              </div>
              <span
                className="font-bold"
                style={{ color: ep.color, fontFamily: "'Inter', sans-serif", fontSize: '10.5px', letterSpacing: '0.04em' }}
              >
                ▲ fermer
              </span>
            </div>

            {/* Title */}
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: '#f1f5f9', marginBottom: '12px', lineHeight: 1.4 }}>
              {ep.title}
            </h4>

            {/* Coef + Oral badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="rounded-lg" style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 700, color: ep.color, background: `${ep.color}18`, border: `1px solid ${ep.color}35`, padding: '3px 10px' }}>
                {ep.coef}
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#94a3b8' }}>
                {ep.oral}
              </span>
            </div>

            {/* Description */}
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#c5d3e8', lineHeight: 1.7, marginBottom: '16px' }}>
              {ep.description}
            </p>

            {/* Bullet points */}
            <div className="space-y-2 mb-5">
              {ep.details.map((d, j) => (
                <div key={j} className="flex items-start gap-2">
                  <span style={{ color: ep.color, fontSize: '7px', flexShrink: 0, marginTop: '6px' }}>●</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#c5d3e8', lineHeight: 1.55 }}>{d}</span>
                </div>
              ))}
            </div>

            {/* Mon projet — highlighted box */}
            <div className="rounded-xl" style={{ background: `${ep.color}08`, border: `1px solid ${ep.color}20`, padding: '14px 16px', marginBottom: '14px' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: 1.6 }}>
                <span style={{ color: ep.color, fontWeight: 700 }}>Mon projet : </span>
                <span style={{ color: '#c5d3e8' }}>{ep.monProjet}</span>
              </p>
            </div>

            {/* Documents — structured cards with status + outline */}
            {ep.docs && ep.docs.length > 0 && (
              <div className="space-y-3">
                {ep.docs.map((doc, j) => (
                  <DossierCard key={j} doc={doc} accent={ep.color} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default function BTS() {
  return (
    <section id="bts" className="relative dots-bg cyber-grid" style={{ paddingTop: '10rem', paddingBottom: '10rem', background: 'rgba(8,12,24,0.25)' }}>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="text-center" style={{ marginBottom: '28px' }}>
          {/* Two badges — gold + cyan style cyber */}
          <div className="inline-flex items-center gap-2" style={{ marginBottom: '12px' }}>
            <span
              className="rounded-full"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '1.1px',
                textTransform: 'uppercase',
                color: '#d4af37',
                background: 'rgba(212,175,55,0.12)',
                border: '1px solid rgba(212,175,55,0.25)',
                padding: '4px 12px',
              }}
            >
              Niveau 5 · Bac+2
            </span>
            <span
              className="rounded-full"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '1.1px',
                textTransform: 'uppercase',
                color: '#22d3ee',
                background: 'rgba(34,211,238,0.1)',
                border: '1px solid rgba(34,211,238,0.25)',
                padding: '4px 12px',
              }}
            >
              Diplôme d'État
            </span>
          </div>

          {/* Big title — gradient white→cyan→purple */}
          <h2
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: 'clamp(2rem, 5vw, 2.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1.6,
              textTransform: 'none',
              background: 'linear-gradient(135deg, #e6ecf8 30%, #22d3ee 70%, #a855f3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0px',
            }}
          >
            BTS SIO
          </h2>

          {/* Subtitle */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px',
            fontWeight: 500,
            color: '#c5d3e8',
            marginBottom: '0px',
          }}>
            Services Informatiques aux Organisations
          </p>

          {/* Separator — gold/cyan/purple gradient line */}
          <div
            className="mx-auto"
            style={{
              width: '128px',
              height: '2px',
              background: 'linear-gradient(90deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.45) 24%, rgba(212,175,55,0.85) 50%, rgba(147,51,234,0.55) 76%, rgba(56,189,248,0) 100%)',
              marginTop: '16px',
              marginBottom: '24px',
            }}
          />

          {/* Info card — transparent bg, thin cyan border */}
          <div
            className="inline-block rounded-xl"
            style={{
              border: '1px solid rgba(34,211,238,0.15)',
              padding: '14px 20px',
            }}
          >
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 400, color: '#e6ecf8', lineHeight: 1.7 }}>
              <span style={{ color: '#22d3ee', fontWeight: 700 }}>Institut F2I</span>
              {' '}(groupe IEF2I) · Option SISR · 2 stages (B&amp;A Conseil + Les Réparateurs Mac &amp; PC) · Diplôme visé{' '}
              <span style={{ color: '#d4af37', fontWeight: 700 }}>juin 2026</span>
            </p>
          </div>
        </div>

        {/* Section divider */}
        <SectionLabel label="MON OPTION" color="#22d3ee" />

        {/* ── SISR — Mon option ── */}
        <div style={{ marginBottom: '48px' }}>
          <div
            className="rounded-2xl"
            style={{ background: 'rgba(11,16,32,0.62)', border: '1px solid rgba(34,211,238,0.25)', padding: '32px' }}
          >
            <div className="flex items-center gap-2.5 flex-wrap" style={{ marginBottom: '6px' }}>
              <span style={{ fontSize: '1.3rem' }}>🔧</span>
              <h3 style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: '20px',
                fontWeight: 800,
                color: '#22d3ee',
                letterSpacing: '-0.5px',
                textTransform: 'none',
                margin: 0,
              }}>
                SISR
              </h3>
              <span
                className="rounded-full"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '10.4px',
                  fontWeight: 700,
                  color: '#22d3ee',
                  background: 'rgba(34,211,238,0.125)',
                  border: '1px solid rgba(34,211,238,0.21)',
                  padding: '2px 8px',
                }}
              >
                Mon option
              </span>
            </div>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12.5px', fontWeight: 500, color: '#c5d3e8', marginBottom: '12px' }}>
              Solutions d'Infrastructure, Systèmes et Réseaux
            </p>

            <div className="flex items-center gap-1.5 mb-4">
              <span style={{ color: '#22d3ee', fontSize: '8px' }}>●</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600, color: '#22d3ee' }}>
                Infrastructure
              </span>
            </div>

            <div className="space-y-2" style={{ marginBottom: '16px' }}>
              {[
                'Administration systèmes & réseaux',
                'Virtualisation, déploiement de services, supervision',
                'Sécurité d\'exploitation & continuité de service',
                'Maintenance et support utilisateurs',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span style={{ color: '#22d3ee', fontSize: '7px', flexShrink: 0, marginTop: '5px' }}>●</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12.2px', color: '#c5d3e8', lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {['Linux', 'Windows Server', 'Active Directory', 'VMware', 'Cisco', 'Firewall'].map(t => (
                <span key={t} className="rounded-md" style={{ fontFamily: "'Inter', sans-serif", fontSize: '11.5px', fontWeight: 500, color: '#22d3ee', background: 'rgba(34,211,238,0.07)', border: '1px solid rgba(34,211,238,0.125)', padding: '2px 8px' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── ÉPREUVES PROFESSIONNELLES ── */}
        <div style={{ marginBottom: '48px' }}>
          <p
            className="text-center"
            style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: '13px',
              fontWeight: 700,
              color: '#64748b',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: '32px',
            }}
          >
            Épreuves professionnelles
          </p>

          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            {epreuves.map(ep => (
              <EpreuveCard key={ep.code} ep={ep} />
            ))}
          </div>

          {/* Liens externes */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {liens.map(lien => (
              <a
                key={lien.label}
                href={lien.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg transition-all"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '12.5px', fontWeight: 600, background: 'rgba(11,16,32,0.62)', border: '1px solid rgba(255,255,255,0.08)', color: '#c5d3e8', padding: '8px 14px' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,211,238,0.3)'; e.currentTarget.style.color = '#22d3ee' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#c5d3e8' }}
              >
                {lien.label} <ExternalLink size={12} />
              </a>
            ))}
          </div>
        </div>

        {/* ── PARCOURS SCOLAIRE ── */}
        <div>
          <div className="text-center" style={{ marginBottom: '28px' }}>
            <h2
              style={{
                fontFamily: "'Orbitron', system-ui, sans-serif",
                fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                background: 'linear-gradient(135deg, #e6ecf8 30%, #22d3ee 70%, #a855f3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '8px',
                textTransform: 'none',
              }}
            >
              Parcours scolaire
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 500, color: '#c5d3e8', marginBottom: '0px' }}>
              Formation initiale avec stages en entreprise
            </p>
            <div
              className="mx-auto"
              style={{
                width: '80px',
                height: '2px',
                background: 'linear-gradient(90deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.45) 24%, rgba(212,175,55,0.85) 50%, rgba(147,51,234,0.55) 76%, rgba(56,189,248,0) 100%)',
                marginTop: '12px',
              }}
            />
          </div>

          <SectionLabel label="MON PARCOURS DE FORMATION" color="#d4af37" />

          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {formations.map((f, i) => (
              <div
                key={i}
                className="animate-fade-up rounded-2xl transition-all duration-200"
                style={{ background: 'rgba(11,16,32,0.62)', border: '1px solid rgba(255,255,255,0.07)', borderLeft: `3px solid ${f.borderColor}`, padding: '24px', transitionDelay: `${i * 0.07}s` }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.3)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: f.schoolColor }}>{f.school}</span>
                  <span className="rounded" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#64748b', fontFamily: "'Inter', sans-serif", fontSize: '10.5px', fontWeight: 600, padding: '2px 8px' }}>{f.badge}</span>
                </div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 800, color: '#f1f5f9', letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: '4px' }}>{f.degree}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '10px' }}>{f.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {f.pills.map(p => (
                    <span key={p} className="rounded" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', color: '#c5d3e8', fontFamily: "'Inter', sans-serif", fontSize: '11px', padding: '2px 6px' }}>{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bannière Objectif */}
          <div
            className="animate-fade-up rounded-2xl flex flex-wrap items-center justify-between gap-4"
            style={{ background: 'rgba(11,16,32,0.62)', border: '1px solid rgba(34,211,238,0.15)', padding: '20px 24px' }}
          >
            <div className="flex items-center gap-3">
              <span style={{ fontSize: '1.3rem' }}>🎯</span>
              <div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 800, color: '#22d3ee', letterSpacing: '-0.01em' }}>
                  Objectif : Administrateur Systèmes &amp; Réseaux
                </span>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>
                  Consolider infra · sécurité · cloud — viser MSc Cybersécurité &amp; Réseaux
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Linux avancé', 'CCNA', 'CompTIA Sec+', 'Azure', 'Cybersécurité'].map(t => (
                <span key={t} className="rounded-md font-semibold" style={{ background: 'rgba(34,211,238,0.07)', border: '1px solid rgba(34,211,238,0.125)', color: '#22d3ee', fontFamily: "'Inter', sans-serif", fontSize: '11px', padding: '2px 8px' }}>{t}</span>
              ))}
            </div>
          </div>

          <p className="text-center" style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#475569', marginTop: '20px' }}>
            Documents et attestations disponibles sur demande
          </p>
        </div>

      </div>
    </section>
  )
}
