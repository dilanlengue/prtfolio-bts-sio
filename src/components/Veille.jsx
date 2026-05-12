import { Shield, Mail, Phone, Smartphone, Globe, ShieldCheck, AlertTriangle, ExternalLink, QrCode, Search, Bot, TrendingUp, Building2, Users, CheckCircle2, Newspaper, BookOpen, Bell, Rss, Target, ShieldAlert, CreditCard, KeyRound, BrainCircuit, Scale, Eye, FileWarning } from 'lucide-react'

const sectionNum = (n) => ({
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '13px', fontWeight: 800,
  color: '#6366f1',
  background: 'rgba(99,102,241,0.08)',
  border: '1px solid rgba(99,102,241,0.2)',
  padding: '6px 14px', borderRadius: '10px',
  flexShrink: 0, display: 'inline-block',
})

const sectionTitle = (color = '#ffffff') => ({
  fontFamily: "'Orbitron', system-ui, sans-serif",
  fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: 800,
  color, lineHeight: 1.4,
})

const bodyText = {
  fontFamily: "'Inter', sans-serif", fontSize: '16px',
  color: '#cbd5e1', lineHeight: 1.9,
}

const card = (accent = '#a5b4fc') => ({
  padding: 'clamp(1.2rem, 4vw, 2rem)',
  background: `${accent}08`,
  border: `1px solid ${accent}18`,
  borderRadius: '16px',
})

const phishingTypes = [
  {
    icon: Mail, title: 'Phishing par Email',
    color: '#818cf8',
    image: '/veille-phishing-email.svg',
    desc: "L'attaquant envoie un faux email imitant un organisme officiel (banque, impôts, Ameli) avec un lien vers un site frauduleux qui vole les identifiants de la victime.",
    exemple: 'Faux email de la Banque Postale : "Votre compte sera suspendu sous 24h"',
    risque: 'Vol de mots de passe, données bancaires, usurpation d\'identité',
  },
  {
    icon: Smartphone, title: 'Smishing (par SMS)',
    color: '#22d3ee',
    image: '/veille-smishing.svg',
    desc: "Un SMS frauduleux prétexte une livraison de colis, un remboursement ou une alerte de sécurité pour rediriger la victime vers un faux site.",
    exemple: '"Chronopost : votre colis est en attente, confirmez votre adresse"',
    risque: 'Vol de données bancaires via de faux formulaires de paiement',
  },
  {
    icon: Phone, title: 'Vishing (par Téléphone)',
    color: '#a78bfa',
    image: '/veille-vishing.svg',
    desc: "L'attaquant appelle la victime en se faisant passer pour un conseiller bancaire ou un agent de l'État. Il crée un sentiment d'urgence pour obtenir des codes confidentiels.",
    exemple: '"Bonjour, ici votre banque. Nous avons détecté un paiement suspect"',
    risque: 'Transferts bancaires frauduleux, vol de codes de validation',
  },
  {
    icon: QrCode, title: 'Quishing (par QR Code)',
    color: '#f472b6',
    image: '/veille-quishing.svg',
    desc: "De faux QR codes sont collés sur des parcmètres, bornes de recharge ou contraventions. Le scan redirige vers un site de paiement frauduleux.",
    exemple: 'Faux QR code collé sur un PV de stationnement à Paris',
    risque: 'Paiement détourné, vol de coordonnées bancaires',
  },
  {
    icon: Target, title: 'Spear Phishing (ciblé)',
    color: '#fb923c',
    image: '/veille-spear.svg',
    desc: "Attaque personnalisée ciblant une personne précise. L'attaquant utilise des informations personnelles (nom, poste, entreprise) pour créer un message très crédible.",
    exemple: '"Jean, peux-tu valider ce virement ? — Envoyé par ton directeur"',
    risque: 'Fraude au président, vol de données d\'entreprise, espionnage',
  },
]

const casReelsFrance = [
  {
    date: 'Mars 2024',
    titre: 'France Travail — Vol de données de 43 millions de Français',
    icon: Users,
    color: '#fca5a5',
    image: '/veille-france-travail.svg',
    desc: "Des hackers ont piraté la base de données de France Travail (ex-Pôle Emploi) et volé les noms, prénoms, numéros de sécurité sociale, adresses email et postales de 43 millions de personnes inscrites depuis 20 ans.",
    impact: [
      '43 millions de personnes touchées',
      'Noms, prénoms, numéros de sécurité sociale volés',
      'Risque majeur d\'usurpation d\'identité pour des millions de Français',
      'Données revendues sur le dark web',
    ],
    source: 'Cybermalveillance.gouv.fr',
    url: 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/violation-donnees-personnelles-france-travail',
  },
  {
    date: 'Octobre 2024',
    titre: 'Free — Fuite de données de 19 millions de clients',
    icon: Globe,
    color: '#93c5fd',
    image: '/veille-free.svg',
    desc: "L'opérateur Free a subi une cyberattaque qui a exposé les données personnelles de 19 millions d'abonnés. 5 millions d'IBAN ont aussi été compromis. La CNIL a infligé une amende de 42 millions d'euros.",
    impact: [
      '19 millions de clients touchés',
      '5 millions d\'IBAN volés',
      '42 millions d\'euros d\'amende par la CNIL',
      'Campagnes de phishing ciblées utilisant les données volées',
    ],
    source: 'CNIL',
    url: 'https://www.cnil.fr/fr/fuite-de-donnees-de-free-la-cnil-a-sanctionne-loperateur-dune-amende-de-42-millions-deuros',
  },
]

export default function Veille() {
  return (
    <section id="veille" className="relative" style={{ paddingTop: '10rem', paddingBottom: '8rem' }}>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ═══════════ HEADER ═══════════ */}
        <div className="animate-fade-up text-center" style={{ marginBottom: '5rem' }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13px', fontWeight: 700, letterSpacing: '0.15em',
            color: '#a5b4fc', padding: '8px 20px',
            background: 'rgba(165,180,252,0.1)', border: '1px solid rgba(165,180,252,0.25)',
            borderRadius: '99px',
          }}>
            BTS SIO SISR — {'É'}preuve E5
          </span>
          <h2 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            fontWeight: 900, color: '#ffffff', marginTop: '2rem', marginBottom: '1rem',
          }}>
            Veille Technologique
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: '18px',
            color: '#94a3b8', lineHeight: 1.8, maxWidth: '550px', margin: '0 auto',
          }}>
            Sujet de veille : <strong style={{ color: '#fca5a5' }}>Le Phishing</strong> — la menace n°1 en cybersécurité en France
          </p>
        </div>


        {/* ═══════════ 01 — QU'EST-CE QUE LA VEILLE TECHNOLOGIQUE ? ═══════════ */}
        <div className="animate-fade-up" style={{ marginBottom: '5rem' }}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span style={sectionNum()}>01</span>
            <h3 style={sectionTitle('#a5b4fc')}>Qu'est-ce que la Veille Technologique ?</h3>
          </div>

          <div style={card('#a5b4fc')}>
            <p style={{ ...bodyText, fontSize: '17px', color: '#e2e8f0', marginBottom: '1.5rem' }}>
              La <strong style={{ color: '#a5b4fc' }}>veille technologique</strong> consiste {'à'} surveiller en permanence les {'é'}volutions technologiques, les nouvelles menaces et les bonnes pratiques dans son domaine professionnel. C'est une comp{'é'}tence essentielle du r{'é'}f{'é'}rentiel BTS SIO.
            </p>
            <p style={{ ...bodyText, marginBottom: '2rem' }}>
              En tant que futur administrateur syst{'è'}mes et r{'é'}seaux, la veille me permet d'<strong style={{ color: '#a5b4fc' }}>anticiper les menaces</strong>, de <strong style={{ color: '#a5b4fc' }}>maintenir mes comp{'é'}tences {'à'} jour</strong> et de <strong style={{ color: '#a5b4fc' }}>proposer des solutions adapt{'é'}es</strong> aux nouvelles cyberattaques.
            </p>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              Mes outils de veille
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: Bell, name: 'Google Alerts', desc: 'Alertes automatiques par email sur les mots-clés "phishing", "cyberattaque France", "hameçonnage"', url: 'https://www.google.fr/alerts' },
                { icon: Rss, name: 'IT-Connect', desc: 'Site d\'actualité IT et cybersécurité — articles détaillés sur les nouvelles menaces', url: 'https://www.it-connect.fr/' },
                { icon: Shield, name: 'CERT-FR / ANSSI', desc: 'Bulletins d\'alerte officiels du gouvernement français sur les cybermenaces', url: 'https://www.cert.ssi.gouv.fr/' },
                { icon: Newspaper, name: 'Cybermalveillance.gouv.fr', desc: 'Plateforme nationale d\'aide aux victimes — rapports annuels et fiches réflexes', url: 'https://www.cybermalveillance.gouv.fr/' },
              ].map((tool, i) => {
                const ToolIcon = tool.icon
                return (
                  <a key={i} href={tool.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-start gap-3 rounded-xl transition-all duration-200 group"
                    style={{
                      padding: '1rem 1.2rem',
                      background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.15)',
                      textDecoration: 'none',
                    }}
                  >
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '10px',
                      background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <ToolIcon size={18} style={{ color: '#818cf8' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: '#e2e8f0' }}>{tool.name}</p>
                        <ExternalLink size={12} style={{ color: '#818cf8', opacity: 0.5 }} className="group-hover:opacity-100" />
                      </div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, marginTop: '4px' }}>{tool.desc}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>


        {/* ═══════════ 02 — C'EST QUOI LE PHISHING ? ═══════════ */}
        <div className="animate-fade-up" style={{ marginBottom: '5rem' }}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span style={sectionNum()}>02</span>
            <h3 style={sectionTitle('#fca5a5')}>C'est quoi le Phishing ?</h3>
          </div>

          <div style={card('#fca5a5')}>
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              {/* Illustration */}
              <div className="flex-shrink-0 mx-auto lg:mx-0" style={{
                width: '140px', height: '140px', borderRadius: '20px',
                background: 'linear-gradient(135deg, rgba(252,165,165,0.15), rgba(252,165,165,0.05))',
                border: '1px solid rgba(252,165,165,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <ShieldAlert size={60} style={{ color: '#fca5a5' }} />
              </div>

              <div className="flex-1">
                <p style={{ ...bodyText, fontSize: '17px', color: '#e2e8f0', marginBottom: '1rem' }}>
                  Le <strong style={{ color: '#fca5a5' }}>phishing</strong> (ou hame{'ç'}onnage) est une technique de <strong style={{ color: '#fca5a5' }}>cyberattaque par ingénierie sociale</strong>. L'attaquant se fait passer pour un organisme de confiance (banque, imp{'ô'}ts, s{'é'}curit{'é'} sociale, La Poste) pour tromper la victime et lui voler ses informations personnelles.
                </p>
                <p style={{ ...bodyText, marginBottom: '1.5rem' }}>
                  C'est l'attaque <strong style={{ color: '#fca5a5' }}>la plus r{'é'}pandue en France</strong> avec plus de 108 000 demandes d'aide enregistr{'é'}es en 2024 sur Cybermalveillance.gouv.fr. J'ai choisi ce sujet car il touche aussi bien les particuliers que les entreprises et qu'il est au c{'œ'}ur de la cybersécurité.
                </p>

                <div className="flex flex-wrap gap-3">
                  {['Mots de passe', 'Données bancaires', 'Numéro de sécu', 'Identité'].map((item, i) => (
                    <span key={i} style={{
                      fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600,
                      color: '#fca5a5', background: 'rgba(252,165,165,0.08)',
                      border: '1px solid rgba(252,165,165,0.2)',
                      padding: '6px 14px', borderRadius: '8px',
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* ═══════════ 03 — LES 5 TYPES DE PHISHING ═══════════ */}
        <div className="animate-fade-up" style={{ marginBottom: '5rem' }}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span style={sectionNum()}>03</span>
            <h3 style={sectionTitle('#a5b4fc')}>Les 5 types de Phishing</h3>
          </div>

          <div className="flex flex-col gap-5">
            {phishingTypes.map((t, i) => {
              const TypeIcon = t.icon
              return (
                <div key={i} style={{ ...card(t.color), position: 'relative', overflow: 'hidden' }}>
                  <div className="flex flex-col sm:flex-row gap-5">
                    {/* Illustration visuelle */}
                    <div className="flex-shrink-0 mx-auto sm:mx-0" style={{
                      width: '100px', height: '100px', borderRadius: '16px',
                      background: `linear-gradient(135deg, ${t.color}20, ${t.color}08)`,
                      border: `1px solid ${t.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <TypeIcon size={44} style={{ color: t.color }} />
                    </div>

                    <div className="flex-1">
                      <h4 style={{
                        fontFamily: "'Inter', sans-serif", fontSize: '18px',
                        fontWeight: 800, color: t.color, marginBottom: '0.6rem',
                      }}>
                        {i + 1}. {t.title}
                      </h4>
                      <p style={{ ...bodyText, marginBottom: '0.8rem' }}>{t.desc}</p>

                      <div className="rounded-lg" style={{
                        padding: '0.8rem 1rem',
                        background: 'rgba(0,0,0,0.2)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        marginBottom: '0.6rem',
                      }}>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#94a3b8' }}>
                          <strong style={{ color: '#e2e8f0' }}>Exemple :</strong> {t.exemple}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <AlertTriangle size={14} style={{ color: '#fbbf24', flexShrink: 0 }} />
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: '#fbbf24' }}>
                          {t.risque}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>


        {/* ═══════════ 04 — IMPACT RÉEL SUR LA SOCIÉTÉ ═══════════ */}
        <div className="animate-fade-up" style={{ marginBottom: '5rem' }}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span style={sectionNum()}>04</span>
            <h3 style={sectionTitle('#fbbf24')}>Impact r{'é'}el sur la soci{'é'}t{'é'}</h3>
          </div>

          {/* Stats chiffrées */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" style={{ marginBottom: '2rem' }}>
            {[
              { stat: '108 000', label: 'demandes d\'aide en France (2024)', icon: Users, color: '#fca5a5' },
              { stat: '+70%', label: 'd\'augmentation en 2 ans', icon: TrendingUp, color: '#fb923c' },
              { stat: '1,2 Md€', label: 'de pertes estimées en France / an', icon: CreditCard, color: '#fbbf24' },
              { stat: '#1', label: 'menace cyber en France', icon: AlertTriangle, color: '#f472b6' },
            ].map((s, i) => {
              const StatIcon = s.icon
              return (
                <div key={i} className="text-center rounded-2xl" style={{
                  padding: '1.5rem 1rem',
                  background: `${s.color}08`, border: `1px solid ${s.color}18`,
                }}>
                  <StatIcon size={28} style={{ color: s.color, margin: '0 auto 0.8rem' }} />
                  <p style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
                    fontWeight: 900, color: s.color, marginBottom: '0.3rem',
                  }}>
                    {s.stat}
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#94a3b8', lineHeight: 1.5 }}>
                    {s.label}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Risques détaillés */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Risques pour les particuliers */}
            <div style={card('#fb923c')}>
              <div className="flex items-center gap-3 mb-4">
                <Users size={22} style={{ color: '#fb923c' }} />
                <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 800, color: '#fb923c' }}>
                  Risques pour les particuliers
                </h4>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  'Vol de mots de passe et accès aux comptes',
                  'Prélèvements bancaires frauduleux',
                  'Usurpation d\'identité',
                  'Perte de données personnelles',
                  'Inscription à des services payants',
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <AlertTriangle size={14} style={{ color: '#fb923c', marginTop: '4px', flexShrink: 0 }} />
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#e2e8f0', lineHeight: 1.6 }}>{r}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Risques pour les entreprises */}
            <div style={card('#f472b6')}>
              <div className="flex items-center gap-3 mb-4">
                <Building2 size={22} style={{ color: '#f472b6' }} />
                <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 800, color: '#f472b6' }}>
                  Risques pour les entreprises
                </h4>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  'Fraude au président (faux virement)',
                  'Ransomware suite à un clic sur un lien',
                  'Fuite de données clients (RGPD)',
                  'Perte de confiance et atteinte à l\'image',
                  'Amendes CNIL (jusqu\'à 4% du CA)',
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <AlertTriangle size={14} style={{ color: '#f472b6', marginTop: '4px', flexShrink: 0 }} />
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#e2e8f0', lineHeight: 1.6 }}>{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* ═══════════ 05 — CAS CONCRETS RÉCENTS EN FRANCE ═══════════ */}
        <div className="animate-fade-up" style={{ marginBottom: '5rem' }}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span style={sectionNum()}>05</span>
            <h3 style={sectionTitle('#fca5a5')}>Cas concrets r{'é'}cents en France</h3>
          </div>

          <div className="flex flex-col gap-5">
            {casReelsFrance.map((cas, i) => {
              const CasIcon = cas.icon
              return (
                <div key={i} style={{ ...card(cas.color), position: 'relative' }}>
                  <div className="flex flex-col md:flex-row gap-5">
                    {/* Illustration */}
                    <div className="flex-shrink-0 mx-auto md:mx-0" style={{
                      width: '120px', height: '120px', borderRadius: '20px',
                      background: `linear-gradient(135deg, ${cas.color}20, ${cas.color}05)`,
                      border: `1px solid ${cas.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <CasIcon size={50} style={{ color: cas.color }} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span style={{
                          fontFamily: "'JetBrains Mono', monospace", fontSize: '12px',
                          fontWeight: 700, color: cas.color,
                          background: `${cas.color}12`, border: `1px solid ${cas.color}25`,
                          padding: '4px 12px', borderRadius: '8px',
                        }}>
                          {cas.date}
                        </span>
                      </div>

                      <h4 style={{
                        fontFamily: "'Inter', sans-serif", fontSize: '17px',
                        fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem', lineHeight: 1.4,
                      }}>
                        {cas.titre}
                      </h4>

                      <p style={{ ...bodyText, fontSize: '15px', marginBottom: '1rem' }}>{cas.desc}</p>

                      <div className="flex flex-col gap-2 mb-4">
                        {cas.impact.map((imp, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <FileWarning size={14} style={{ color: cas.color, marginTop: '3px', flexShrink: 0 }} />
                            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: '#e2e8f0', lineHeight: 1.5 }}>{imp}</p>
                          </div>
                        ))}
                      </div>

                      <a href={cas.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: cas.color, textDecoration: 'none' }}
                      >
                        <ExternalLink size={14} />
                        Source : {cas.source}
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>


        {/* ═══════════ 06 — COMMENT SE PROTÉGER ? ═══════════ */}
        <div className="animate-fade-up" style={{ marginBottom: '5rem' }}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span style={sectionNum()}>06</span>
            <h3 style={sectionTitle('#6ee7b7')}>Comment se prot{'é'}ger ?</h3>
          </div>

          <div style={card('#6ee7b7')}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Eye, title: 'Vérifier l\'expéditeur', desc: 'Toujours contrôler l\'adresse email et le nom de domaine avant de cliquer' },
                { icon: Shield, title: 'Ne jamais donner ses codes', desc: 'Aucune banque ou administration ne demande vos mots de passe par email ou téléphone' },
                { icon: KeyRound, title: 'Activer le MFA', desc: 'La double authentification (MFA) bloque 99% des accès non autorisés même si le mot de passe est volé' },
                { icon: Globe, title: 'Aller sur le site officiel', desc: 'En cas de doute, taper directement l\'URL dans le navigateur au lieu de cliquer sur un lien' },
                { icon: Scale, title: 'Signaler les arnaques', desc: 'Utiliser signal-spam.fr, le 33700 (SMS) ou internet-signalement.gouv.fr' },
                { icon: BookOpen, title: 'Se former', desc: 'Sensibiliser les employés et la famille aux techniques de phishing — la vigilance est la première défense' },
              ].map((p, i) => {
                const ProtIcon = p.icon
                return (
                  <div key={i} className="flex items-start gap-3 rounded-xl" style={{
                    padding: '1rem',
                    background: 'rgba(110,231,183,0.04)', border: '1px solid rgba(110,231,183,0.1)',
                  }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '10px',
                      background: 'rgba(110,231,183,0.1)', border: '1px solid rgba(110,231,183,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <ProtIcon size={18} style={{ color: '#6ee7b7' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>{p.title}</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>{p.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>


        {/* ═══════════ 07 — L'IA ET LE PHISHING ═══════════ */}
        <div className="animate-fade-up" style={{ marginBottom: '5rem' }}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span style={sectionNum()}>07</span>
            <h3 style={sectionTitle('#c4b5fd')}>
              <span className="flex items-center gap-3">
                <BrainCircuit size={24} style={{ color: '#c4b5fd' }} />
                L'IA et le Phishing — la nouvelle menace
              </span>
            </h3>
          </div>

          <div style={card('#c4b5fd')}>
            <p style={{ ...bodyText, fontSize: '17px', color: '#e2e8f0', marginBottom: '2rem' }}>
              L'intelligence artificielle a radicalement chang{'é'} le phishing. Les attaquants utilisent d{'é'}sormais des outils d'IA g{'é'}n{'é'}rative pour cr{'é'}er des messages parfaits, sans faute d'orthographe, dans n'importe quelle langue.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              {[
                { icon: Mail, stat: '82%', title: 'Emails générés par IA', desc: 'Des emails de phishing sont maintenant créés par des IA, avec un langage parfait et personnalisé', color: '#818cf8' },
                { icon: Phone, stat: '3 sec', title: 'Clone vocal par IA', desc: 'Il suffit de 3 secondes d\'audio pour cloner une voix et passer de faux appels téléphoniques', color: '#a78bfa' },
                { icon: Bot, stat: 'Deepfakes', title: 'Vidéos truquées', desc: 'L\'IA crée de fausses vidéos de dirigeants pour lancer des fraudes au président', color: '#c4b5fd' },
                { icon: Search, stat: 'OSINT + IA', title: 'Ciblage automatisé', desc: 'L\'IA analyse les réseaux sociaux pour personnaliser automatiquement les attaques', color: '#e9d5ff' },
              ].map((item, i) => {
                const ItemIcon = item.icon
                return (
                  <div key={i} className="rounded-xl" style={{
                    padding: '1.2rem',
                    background: `${item.color}08`, border: `1px solid ${item.color}18`,
                  }}>
                    <div className="flex items-center gap-3 mb-3">
                      <ItemIcon size={20} style={{ color: item.color }} />
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: '16px',
                        fontWeight: 900, color: item.color,
                      }}>
                        {item.stat}
                      </span>
                    </div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>{item.title}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col gap-2">
              <a href="https://www.it-connect.fr/intelligence-artificielle-ia-phishing/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2" style={{ textDecoration: 'none' }}>
                <ExternalLink size={14} style={{ color: '#c4b5fd' }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#c4b5fd' }}>IT-Connect — L'IA et le phishing (2025)</span>
              </a>
              <a href="https://cyber.gouv.fr/actualites/panorama-de-la-cybermenace-2025/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2" style={{ textDecoration: 'none' }}>
                <ExternalLink size={14} style={{ color: '#c4b5fd' }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#c4b5fd' }}>ANSSI — Panorama de la cybermenace 2025</span>
              </a>
            </div>
          </div>
        </div>


        {/* ═══════════ 08 — ARTICLES ET SOURCES ═══════════ */}
        <div className="animate-fade-up" style={{ marginBottom: '5rem' }}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span style={sectionNum()}>08</span>
            <h3 style={sectionTitle('#a5b4fc')}>Articles et sources</h3>
          </div>

          <div className="flex flex-col gap-3">
            {[
              {
                titre: "Qu'est-ce que le phishing ou hameçonnage ?",
                source: 'Cybermalveillance.gouv.fr', date: '2024',
                desc: 'Définition complète, exemples et conseils de prévention par le gouvernement',
                url: 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/dossier-phishing',
              },
              {
                titre: 'Rapport d\'activité 2024 — +70% de phishing',
                source: 'Cybermalveillance.gouv.fr', date: '2025',
                desc: 'Bilan annuel : 108 000 demandes d\'aide pour phishing, hausse de 70%',
                url: 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/rapport-activite-2024',
              },
              {
                titre: 'Panorama de la cybermenace 2025',
                source: 'ANSSI / CERT-FR', date: '2025',
                desc: 'Rapport officiel de l\'État sur les principales menaces cyber en France',
                url: 'https://cyber.gouv.fr/actualites/panorama-de-la-cybermenace-2025/',
              },
              {
                titre: "L'IA générative et le phishing — état des lieux",
                source: 'IT-Connect', date: '2025',
                desc: 'Analyse détaillée de l\'utilisation de l\'IA dans les attaques de phishing',
                url: 'https://www.it-connect.fr/intelligence-artificielle-ia-phishing/',
              },
            ].map((art, i) => (
              <a key={i} href={art.url} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-xl transition-all duration-200 group"
                style={{
                  padding: '1.2rem 1.4rem', textDecoration: 'none',
                  background: 'rgba(165,180,252,0.04)', border: '1px solid rgba(165,180,252,0.1)',
                }}
              >
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'rgba(165,180,252,0.08)', border: '1px solid rgba(165,180,252,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px',
                }}>
                  <Newspaper size={16} style={{ color: '#a5b4fc' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: '#e2e8f0' }}>
                      {art.titre}
                    </p>
                    <ExternalLink size={12} style={{ color: '#a5b4fc', opacity: 0.4 }} className="group-hover:opacity-100" />
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '4px' }}>{art.desc}</p>
                  <div className="flex items-center gap-3">
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 700, color: '#818cf8' }}>{art.date}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#64748b' }}>{art.source}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>


        {/* ═══════════ 09 — PROJET PROFESSIONNEL ═══════════ */}
        <div className="animate-fade-up" style={{ marginBottom: '3rem' }}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span style={sectionNum()}>09</span>
            <h3 style={sectionTitle('#6ee7b7')}>Mon Projet Professionnel</h3>
          </div>

          <div style={card('#6ee7b7')}>
            <p style={{
              fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.2rem',
              fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem',
            }}>
              Objectif : Devenir Pentester
            </p>
            <p style={{ ...bodyText, marginBottom: '2rem' }}>
              Ma veille sur le phishing renforce ma volonté de travailler dans la cybersécurité offensive. Comprendre les techniques d'attaque est essentiel pour pouvoir les d{'é'}tecter et les contrer.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { etape: 'BTS SIO SISR', desc: 'Administration réseau, systèmes et sécurité', actuel: true },
                { etape: 'Licence Pro Cybersécurité', desc: 'Ex : LP Réseaux et Cybersécurité (CY Cergy), LP Analyste en cybersécurité (CNAM)' },
                { etape: 'Mastère Cybersécurité (Bac+5)', desc: 'Ex : Mastère Expert Cybersécurité (ESIEA), Master CyberSécurité (ENSICAEN)' },
                { etape: 'Pentester', desc: 'Tests d\'intrusion, audit de sécurité, recherche de vulnérabilités' },
              ].map((e, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: e.actuel ? 'rgba(110,231,183,0.15)' : 'rgba(165,180,252,0.08)',
                    border: e.actuel ? '2px solid #6ee7b7' : '1px solid rgba(165,180,252,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: '14px',
                      fontWeight: 800, color: e.actuel ? '#6ee7b7' : '#a5b4fc',
                    }}>{i + 1}</span>
                  </div>
                  <div>
                    <p style={{
                      fontFamily: "'Inter', sans-serif", fontSize: '16px',
                      fontWeight: 700, color: e.actuel ? '#6ee7b7' : '#e2e8f0',
                    }}>
                      {e.etape} {e.actuel && <span style={{ fontSize: '13px', opacity: 0.8 }}>{'←'} en cours</span>}
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#94a3b8' }}>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
