import { useState } from 'react'
import { Shield, AlertTriangle, Mail, Eye, ExternalLink, ChevronDown, Wifi, Users, TrendingUp, Globe, Key, HardDrive, Ban, Siren, Phone, ClipboardList, MonitorX, BookOpen, ShieldCheck, ShieldAlert, Activity, Smartphone, QrCode, Fingerprint, CreditCard, Megaphone } from 'lucide-react'

function SectionHeading({ icon: Icon, title, subtitle, color, gradient }) {
  return (
    <div style={{ marginTop: '8rem', marginBottom: '4rem' }}>
      <div className="flex items-center justify-center gap-5" style={{ marginBottom: '2rem' }}>
        <div style={{ flex: 1, height: '2px', background: `linear-gradient(90deg, transparent, ${color}50)`, borderRadius: '2px' }} />
        <div style={{
          width: '64px', height: '64px', borderRadius: '18px',
          background: `${color}15`, border: `2px solid ${color}35`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: `0 0 30px ${color}20, 0 0 60px ${color}10`,
        }}>
          <Icon size={30} style={{ color }} />
        </div>
        <div style={{ flex: 1, height: '2px', background: `linear-gradient(90deg, ${color}50, transparent)`, borderRadius: '2px' }} />
      </div>
      <h2 className="text-center" style={{
        fontFamily: "'Orbitron', system-ui, sans-serif",
        fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
        fontWeight: 900, letterSpacing: '0.04em', lineHeight: 1.3, marginBottom: '1.2rem',
        background: gradient || `linear-gradient(135deg, #ffffff 0%, ${color} 100%)`,
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        filter: `drop-shadow(0 0 20px ${color}30)`,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-center mx-auto" style={{
          fontFamily: "'Inter', sans-serif", fontSize: '17px', fontWeight: 500,
          color: '#94a3b8', lineHeight: 1.9, maxWidth: '700px',
        }}>
          {subtitle}
        </p>
      )}
      <div style={{
        width: '100px', height: '3px', margin: '2rem auto 0',
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        borderRadius: '99px', boxShadow: `0 0 12px ${color}40`,
      }} />
    </div>
  )
}

const phishingTypes = [
  {
    icon: Mail, title: 'Email (Phishing)', color: '#f59e0b',
    desc: 'Emails frauduleux imitant des organismes officiels (banques, impôts, Ameli) pour voler des identifiants ou installer un malware via pièce jointe.',
    stat: '33,7%', statLabel: 'des demandes d\'assistance',
    examples: ['Faux remboursement d\'impôts', 'Alerte sécurité Microsoft 365', 'Mise à jour de carte bancaire'],
    image: '/phishing-email-lcl.jpg', imageLabel: 'Exemple réel : faux email LCL',
  },
  {
    icon: Smartphone, title: 'SMS (Smishing)', color: '#06b6d4',
    desc: 'SMS frauduleux exploitant l\'urgence : faux colis en attente, amendes impayées, Ameli. Le lien redirige vers un faux site.',
    stat: '+85%', statLabel: 'de hausse en 2025',
    examples: ['Faux colis La Poste', 'Faux PV ANTAI', 'Arnaque "Coucou Maman"'],
    image: '/phishing-sms-chronopost.jpg', imageLabel: 'Exemple réel : faux SMS Chronopost',
  },
  {
    icon: Phone, title: 'Vocal (Vishing)', color: '#a855f7',
    desc: 'Appels téléphoniques frauduleux — faux conseiller bancaire, faux support Microsoft. L\'IA permet de cloner une voix en 30 secondes.',
    stat: '+28%', statLabel: 'au T3 2024',
    examples: ['Faux conseiller bancaire', 'Arnaque au président', 'Faux support technique'],
    image: '/phishing-vishing.jpg', imageLabel: 'Vishing — appel frauduleux',
  },
  {
    icon: QrCode, title: 'QR Code (Quishing)', color: '#ef4444',
    desc: 'Faux QR codes collés sur des avis de contravention, menus de restaurant ou bornes publiques, redirigeant vers des sites de phishing.',
    stat: '4M', statLabel: 'de tentatives en 2025',
    examples: ['Faux PV de stationnement', 'QR codes en restaurant', 'Faux parcmètres'],
    image: '/phishing-quishing.jpg', imageLabel: 'Quishing — faux QR code',
  },
  {
    icon: Fingerprint, title: 'Spear Phishing', color: '#10b981',
    desc: 'Attaque ciblée utilisant les données personnelles de la victime pour créer un message crédible et personnalisé.',
    stat: '65%', statLabel: 'des groupes APT',
    examples: ['Email au nom du DRH', 'Faux mail de collègue', 'Fausse facture fournisseur'],
    image: '/phishing-paypal.png', imageLabel: 'Faux email PayPal — attaque ciblée',
  },
  {
    icon: CreditCard, title: 'Whaling', color: '#dc2626',
    desc: 'Spear phishing ciblant les dirigeants d\'entreprise — "fraude au président". Peut impliquer des deepfakes vidéo.',
    stat: '25M$', statLabel: 'perdu via deepfake en 2024',
    examples: ['Fraude au président', 'Faux virement urgent', 'Visio deepfake'],
    image: '/phishing-whaling.jpg', imageLabel: 'Whaling — fraude au président',
  },
]

const statistics = [
  { value: '64K', label: 'Demandes phishing', detail: 'Cybermalveillance.gouv.fr — 2024', color: '#f59e0b', source: 'Rapport activité 2024' },
  { value: '33M', label: 'Assurés exposés', detail: 'Viamedis + Almerys — fév. 2024', color: '#ef4444', source: 'CNIL' },
  { value: '43M', label: 'Personnes touchées', detail: 'France Travail — mars 2024', color: '#dc2626', source: 'France Travail' },
  { value: '+85%', label: 'Hausse smishing', detail: 'SMS frauduleux en 2025', color: '#06b6d4', source: 'Cybermalveillance 2025' },
  { value: '42M€', label: 'Amende CNIL', detail: 'Sanction Free — janv. 2026', color: '#a855f7', source: 'CNIL' },
  { value: '91%', label: 'Cyberattaques', detail: 'Commencent par du phishing', color: '#10b981', source: 'ANSSI / CERT-FR' },
]

const reactionSteps = [
  { num: '01', icon: Ban, title: 'NE PAS cliquer / répondre', desc: 'Ne cliquer sur aucun lien, ne pas ouvrir la pièce jointe, ne pas répondre au message', color: '#ef4444', priority: 'CRITIQUE' },
  { num: '02', icon: Eye, title: 'Vérifier l\'expéditeur', desc: 'Contrôler l\'adresse email réelle (pas le nom affiché), le domaine, les fautes subtiles', color: '#f59e0b', priority: 'VÉRIFICATION' },
  { num: '03', icon: Phone, title: 'Contacter l\'organisme', desc: 'Appeler directement l\'organisme par un numéro officiel (jamais celui du message)', color: '#06b6d4', priority: 'IMPORTANT' },
  { num: '04', icon: Key, title: 'Changer les mots de passe', desc: 'Si des identifiants ont été communiqués, les changer immédiatement + activer le MFA', color: '#a855f7', priority: 'URGENT' },
  { num: '05', icon: ClipboardList, title: 'Conserver les preuves', desc: 'Captures d\'écran du message, de l\'URL, de l\'expéditeur — utiles pour la plainte', color: '#f97316', priority: 'PROCÉDURE' },
  { num: '06', icon: Megaphone, title: 'Signaler', desc: 'Signal Spam (email), 33700 (SMS), Pharos (site web), Cybermalveillance.gouv.fr (assistance)', color: '#10b981', priority: 'SIGNALEMENT' },
]

const protectionMeasures = [
  { icon: Key, title: 'MFA obligatoire', desc: 'Authentification multi-facteurs sur tous les accès critiques : email, VPN, admin, cloud', color: '#06b6d4' },
  { icon: Mail, title: 'Filtrage email', desc: 'Anti-spam, SPF/DKIM/DMARC, sandboxing des pièces jointes, blocage des macros Office', color: '#ef4444' },
  { icon: Users, title: 'Sensibilisation', desc: 'Campagnes de simulation de phishing régulières — l\'humain reste le maillon faible', color: '#f59e0b' },
  { icon: HardDrive, title: 'Sauvegardes 3-2-1', desc: '3 copies, 2 supports, 1 hors site — protection contre le ransomware post-phishing', color: '#3b82f6' },
]

const officialSources = [
  { name: 'ANSSI', desc: 'Agence Nationale de la Sécurité des SI', badge: 'GOV', color: '#3b82f6', url: 'https://cyber.gouv.fr/', detail: 'Panorama de la cybermenace 2024' },
  { name: 'CERT-FR', desc: 'Centre de réponse aux incidents', badge: 'CERT', color: '#10b981', url: 'https://www.cert.ssi.gouv.fr/', detail: 'Alertes et bulletins sécurité' },
  { name: 'Cybermalveillance.gouv.fr', desc: 'Plateforme nationale d\'assistance', badge: 'GOV', color: '#06b6d4', url: 'https://www.cybermalveillance.gouv.fr/', detail: '420 000 demandes d\'assistance (2024)' },
  { name: 'CNIL', desc: 'Commission Nationale Informatique & Libertés', badge: 'RGPD', color: '#a855f7', url: 'https://www.cnil.fr/', detail: 'Sanctions et notifications de fuites' },
  { name: 'Signal Spam', desc: 'Signalement des emails frauduleux', badge: 'SPAM', color: '#f59e0b', url: 'https://www.signal-spam.fr/', detail: 'Extension navigateur pour signaler' },
  { name: 'PHAROS', desc: 'Signalement de contenus illicites', badge: 'POLICE', color: '#ef4444', url: 'https://www.internet-signalement.gouv.fr/', detail: 'Ministère de l\'Intérieur' },
]

export default function Veille() {
  const [openType, setOpenType] = useState(0)
  const [openStep, setOpenStep] = useState(null)

  return (
    <section id="veille" className="relative" style={{ paddingTop: '12rem', paddingBottom: '10rem' }}>
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ═══════════ HEADER ═══════════ */}
        <div className="text-center" style={{ marginBottom: '6rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '13px', fontWeight: 700,
              letterSpacing: '0.2em', color: '#f59e0b',
              textTransform: 'uppercase',
              padding: '8px 22px',
              background: 'rgba(245,158,11,0.08)',
              border: '1px solid rgba(245,158,11,0.2)',
              borderRadius: '99px',
            }}>
              BTS SIO SISR — Épreuve E6
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900, letterSpacing: '-0.02em',
            lineHeight: 1.2, marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #f59e0b 40%, #ef4444 70%, #a855f7 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Veille Technologique
          </h2>
          <p style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            fontWeight: 700, color: '#f59e0b', letterSpacing: '0.03em',
            marginBottom: '1.8rem',
          }}>
            Le Phishing — Menace n°1 en France
          </p>
          <div style={{
            width: '80px', height: '3px', margin: '0 auto 2rem',
            background: 'linear-gradient(90deg, #f59e0b, #ef4444, #a855f7)',
            borderRadius: '99px',
          }} />
          <p className="mx-auto" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px', fontWeight: 500, color: '#94a3b8',
            lineHeight: 1.9, maxWidth: '640px',
          }}>
            Étude du phishing en France — ses formes, les chiffres clés, les exemples réels et les moyens de protection.
          </p>
        </div>

        {/* ═══════════ BANNIÈRE VISUELLE ═══════════ */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl overflow-hidden relative" style={{ border: '1px solid rgba(245,158,11,0.2)' }}>
            <img src="/phishing-france-map.jpg" alt="Carte des cybermenaces en France" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.8) 100%)' }} />
            <div style={{ position: 'absolute', bottom: '1rem', left: '1.2rem', right: '1.2rem' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                43M de comptes compromis en France en 2024
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden relative" style={{ border: '1px solid rgba(239,68,68,0.2)' }}>
              <img src="/phishing-illustration.jpg" alt="Phishing par email" style={{ width: '100%', height: '140px', objectFit: 'cover', background: '#0f172a' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%)' }} />
              <p style={{ position: 'absolute', bottom: '8px', left: '10px', fontSize: '10px', fontWeight: 700, color: '#fff' }}>Phishing par email</p>
            </div>
            <div className="rounded-2xl overflow-hidden relative" style={{ border: '1px solid rgba(168,85,247,0.2)' }}>
              <img src="/phishing-hacker.jpg" alt="Vol de données" style={{ width: '100%', height: '140px', objectFit: 'cover', background: '#0f172a' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%)' }} />
              <p style={{ position: 'absolute', bottom: '8px', left: '10px', fontSize: '10px', fontWeight: 700, color: '#fff' }}>Vol de données</p>
            </div>
            <div className="rounded-2xl overflow-hidden relative col-span-2" style={{ border: '1px solid rgba(6,182,212,0.2)' }}>
              <img src="/phishing-email-inbox.webp" alt="Boîte de réception" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.75) 100%)' }} />
              <p style={{ position: 'absolute', bottom: '8px', left: '10px', fontSize: '10px', fontWeight: 700, color: '#fff' }}>91% des cyberattaques commencent par un email de phishing</p>
            </div>
          </div>
        </div>

        {/* ═══════════ DÉFINITION VEILLE ═══════════ */}
        <SectionHeading
          icon={BookOpen}
          title="Qu'est-ce que la Veille ?"
          subtitle="Le processus de veille technologique en cybersécurité — un pilier du BTS SIO SISR."
          color="#06b6d4"
          gradient="linear-gradient(135deg, #ffffff 0%, #06b6d4 60%, #3b82f6 100%)"
        />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(6,182,212,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)' }} />
          <div className="p-10 md:p-14">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#cbd5e1', lineHeight: 2, marginBottom: '2.5rem' }}>
              La <strong style={{ color: '#06b6d4' }}>veille technologique</strong> est un processus continu de collecte, d'analyse et de diffusion d'informations sur les évolutions technologiques et les menaces émergentes. En BTS SIO SISR, elle permet d'anticiper les risques et de rester à jour dans un environnement en constante évolution.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { title: 'Collecter', desc: 'Sources officielles (ANSSI, CERT-FR, CNIL), alertes, flux RSS', color: '#06b6d4' },
                { title: 'Analyser', desc: 'Trier par pertinence, évaluer l\'impact, identifier les tendances', color: '#3b82f6' },
                { title: 'Diffuser', desc: 'Documenter les résultats, partager les bonnes pratiques', color: '#8b5cf6' },
              ].map((step, i) => (
                <div key={i} className="rounded-xl p-7" style={{ background: 'rgba(0,0,0,0.3)', border: `1px solid ${step.color}20` }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 800, color: step.color, marginBottom: '1rem' }}>{step.title}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#94a3b8', lineHeight: 1.9 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════ DÉFINITION PHISHING ═══════════ */}
        <SectionHeading
          icon={AlertTriangle}
          title="Le Phishing (Hameçonnage)"
          subtitle="La technique d'attaque n°1 en France — ses 6 formes et comment les reconnaître."
          color="#f59e0b"
          gradient="linear-gradient(135deg, #ffffff 0%, #f59e0b 50%, #ef4444 100%)"
        />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(245,158,11,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #f59e0b, #ef4444, #a855f7)' }} />
          <div className="p-10 md:p-14">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#cbd5e1', lineHeight: 2, marginBottom: '2.5rem' }}>
              Le <strong style={{ color: '#f59e0b' }}>phishing</strong> est une technique d'ingénierie sociale consistant à se faire passer pour un organisme de confiance afin de <strong style={{ color: '#ef4444' }}>voler des informations personnelles</strong> ou d'<strong style={{ color: '#a855f7' }}>installer un malware</strong>. C'est la <strong style={{ color: '#f59e0b' }}>menace n°1 en France</strong> et le vecteur initial de <strong style={{ color: '#10b981' }}>91% des cyberattaques</strong>.
            </p>

            <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.1rem', fontWeight: 800, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>
              Les 6 Formes de Phishing
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {phishingTypes.map((type, i) => (
                <button
                  key={i}
                  onClick={() => setOpenType(i)}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all"
                  style={{
                    background: openType === i ? `${type.color}15` : 'rgba(0,0,0,0.2)',
                    border: `1px solid ${openType === i ? `${type.color}40` : 'rgba(255,255,255,0.06)'}`,
                    cursor: 'pointer', fontSize: '14px', fontWeight: 700,
                    color: openType === i ? type.color : '#94a3b8',
                  }}
                >
                  <type.icon size={18} />
                  {type.title.split('(')[0].trim()}
                </button>
              ))}
            </div>

            {(() => {
              const t = phishingTypes[openType]
              return (
                <div className="rounded-xl p-9" style={{ background: 'rgba(0,0,0,0.3)', border: `1px solid ${t.color}20` }}>
                  <div className="flex items-center gap-4 mb-7">
                    <div style={{
                      width: '46px', height: '46px', borderRadius: '12px',
                      background: `${t.color}12`, border: `1px solid ${t.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <t.icon size={22} style={{ color: t.color }} />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', fontWeight: 800, color: '#e2e8f0' }}>
                        {t.title}
                      </h4>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 800, color: t.color }}>{t.stat}</span>
                      <span style={{ fontSize: '12px', color: '#64748b', marginLeft: '8px' }}>{t.statLabel}</span>
                    </div>
                  </div>
                  <div className={`grid ${t.image ? 'md:grid-cols-2' : ''} gap-8 items-start`}>
                    <div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#cbd5e1', lineHeight: 2, marginBottom: '1.5rem' }}>
                        {t.desc}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {t.examples.map((ex, j) => (
                          <span key={j} style={{
                            fontSize: '13px', fontWeight: 600, color: t.color,
                            background: `${t.color}10`, border: `1px solid ${t.color}20`,
                            padding: '6px 14px', borderRadius: '8px',
                          }}>{ex}</span>
                        ))}
                      </div>
                    </div>
                    {t.image && (
                      <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${t.color}25` }}>
                        <img src={t.image} alt={t.imageLabel} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                        <div style={{ padding: '12px 16px', background: `${t.color}08`, borderTop: `1px solid ${t.color}15` }}>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 700, color: t.color }}>
                            {t.imageLabel}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })()}
          </div>
        </div>

        {/* ═══════════ EXEMPLES RÉELS ═══════════ */}
        <SectionHeading
          icon={MonitorX}
          title="Exemples Réels de Phishing"
          subtitle="Captures d'écran de vrais messages frauduleux interceptés en France."
          color="#dc2626"
          gradient="linear-gradient(135deg, #ffffff 0%, #dc2626 60%, #f59e0b 100%)"
        />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(220,38,38,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #dc2626, #f59e0b, #06b6d4)' }} />
          <div className="p-10 md:p-14">
            <div className="flex flex-col gap-12">
              {/* SMS Chronopost */}
              <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(6,182,212,0.25)' }}>
                <div className="px-8 py-5 flex items-center gap-3" style={{ background: 'rgba(6,182,212,0.08)', borderBottom: '1px solid rgba(6,182,212,0.15)' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '12px',
                    background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Smartphone size={20} style={{ color: '#06b6d4' }} />
                  </div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '15px', fontWeight: 800, color: '#06b6d4', letterSpacing: '0.08em' }}>SMISHING — SMS FRAUDULEUX</span>
                </div>
                <div className="grid md:grid-cols-2 gap-0">
                  <div style={{ padding: '24px', background: 'rgba(0,0,0,0.2)' }}>
                    <img src="/phishing-sms-chronopost.jpg" alt="Vrai SMS de phishing Chronopost" style={{
                      width: '100%', maxHeight: '500px', objectFit: 'contain', borderRadius: '12px',
                      border: '2px solid rgba(6,182,212,0.2)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(6,182,212,0.1)',
                    }} />
                  </div>
                  <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '1rem' }}>
                      Faux SMS Chronopost
                    </h4>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#94a3b8', lineHeight: 2, marginBottom: '1.5rem' }}>
                      Le lien "chronopost-online-info.com" n'est pas le vrai site de Chronopost. L'URL frauduleuse vise a voler les donnees bancaires.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#ef4444', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', padding: '6px 14px', borderRadius: '8px' }}>Fausse URL</span>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#f59e0b', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', padding: '6px 14px', borderRadius: '8px' }}>Urgence artificielle</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email LCL */}
              <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(245,158,11,0.25)' }}>
                <div className="px-8 py-5 flex items-center gap-3" style={{ background: 'rgba(245,158,11,0.08)', borderBottom: '1px solid rgba(245,158,11,0.15)' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '12px',
                    background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Mail size={20} style={{ color: '#f59e0b' }} />
                  </div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '15px', fontWeight: 800, color: '#f59e0b', letterSpacing: '0.08em' }}>PHISHING — EMAIL BANCAIRE</span>
                </div>
                <div className="grid md:grid-cols-2 gap-0">
                  <div style={{ padding: '24px', background: 'rgba(0,0,0,0.2)' }}>
                    <img src="/phishing-email-lcl.jpg" alt="Vrai email de phishing LCL" style={{
                      width: '100%', maxHeight: '500px', objectFit: 'contain', borderRadius: '12px',
                      border: '2px solid rgba(245,158,11,0.2)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(245,158,11,0.1)',
                    }} />
                  </div>
                  <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '1rem' }}>
                      Faux email LCL Banque
                    </h4>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#94a3b8', lineHeight: 2, marginBottom: '1.5rem' }}>
                      Demande de "mise a jour" du numero de client. L'adresse expediteur et le lien ne correspondent pas au domaine officiel de LCL.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#ef4444', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', padding: '6px 14px', borderRadius: '8px' }}>Faux expediteur</span>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#f59e0b', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', padding: '6px 14px', borderRadius: '8px' }}>Usurpation bancaire</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PayPal */}
              <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(168,85,247,0.25)' }}>
                <div className="px-8 py-5 flex items-center gap-3" style={{ background: 'rgba(168,85,247,0.08)', borderBottom: '1px solid rgba(168,85,247,0.15)' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '12px',
                    background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <CreditCard size={20} style={{ color: '#a855f7' }} />
                  </div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '15px', fontWeight: 800, color: '#a855f7', letterSpacing: '0.08em' }}>PHISHING — PAIEMENT EN LIGNE</span>
                </div>
                <div className="grid md:grid-cols-2 gap-0">
                  <div style={{ padding: '24px', background: 'rgba(0,0,0,0.2)' }}>
                    <img src="/phishing-paypal.png" alt="Vrai email de phishing PayPal" style={{
                      width: '100%', maxHeight: '500px', objectFit: 'contain', borderRadius: '12px',
                      border: '2px solid rgba(168,85,247,0.2)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(168,85,247,0.1)',
                    }} />
                  </div>
                  <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '1rem' }}>
                      Faux email PayPal
                    </h4>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#94a3b8', lineHeight: 2, marginBottom: '1.5rem' }}>
                      "Your account has been limited" — urgence artificielle + bouton menant vers un faux site identique a PayPal.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#ef4444', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', padding: '6px 14px', borderRadius: '8px' }}>Compte limite</span>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#a855f7', background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', padding: '6px 14px', borderRadius: '8px' }}>Site clone</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════ STATISTIQUES ═══════════ */}
        <SectionHeading
          icon={TrendingUp}
          title="Chiffres Clés"
          subtitle="Les statistiques les plus marquantes du phishing en France."
          color="#06b6d4"
          gradient="linear-gradient(135deg, #ffffff 0%, #06b6d4 60%, #10b981 100%)"
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {statistics.map((stat, i) => (
            <div key={i} className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: 'rgba(10,15,30,0.85)', border: `1px solid ${stat.color}20` }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${stat.color}40`}
              onMouseLeave={e => e.currentTarget.style.borderColor = `${stat.color}20`}
            >
              <div style={{ height: '3px', background: stat.color }} />
              <div className="p-8 md:p-10 text-center">
                <p style={{
                  fontFamily: "'Orbitron', system-ui, sans-serif",
                  fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                  fontWeight: 900, color: stat.color, marginBottom: '0.8rem', lineHeight: 1,
                }}>
                  {stat.value}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.5rem' }}>
                  {stat.label}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#64748b', lineHeight: 1.7 }}>
                  {stat.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ═══════════ QUE FAIRE + PROTECTION ═══════════ */}
        <SectionHeading
          icon={Shield}
          title="Se Protéger du Phishing"
          subtitle="Que faire en cas de phishing et les bonnes pratiques de protection."
          color="#10b981"
          gradient="linear-gradient(135deg, #ef4444 0%, #f59e0b 40%, #10b981 100%)"
        />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(16,185,129,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #ef4444, #f59e0b, #10b981)' }} />
          <div className="p-10 md:p-14">
            <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1rem', fontWeight: 800, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>
              En cas de phishing
            </p>

            <div className="space-y-4 mb-14">
              {reactionSteps.map((step, i) => (
                <div key={i}>
                  <button
                    className="w-full flex items-center gap-5 px-7 py-5 rounded-xl transition-all text-left"
                    style={{
                      background: openStep === i ? `${step.color}08` : 'rgba(0,0,0,0.2)',
                      border: `1px solid ${openStep === i ? `${step.color}30` : 'rgba(255,255,255,0.06)'}`,
                      cursor: 'pointer',
                    }}
                    onClick={() => setOpenStep(openStep === i ? null : i)}
                  >
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px',
                      background: `${step.color}15`, border: `1px solid ${step.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 800, color: step.color }}>{step.num}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: '#e2e8f0' }}>
                          {step.title}
                        </p>
                        <span style={{
                          fontSize: '10px', fontWeight: 800, color: step.color,
                          background: `${step.color}12`, border: `1px solid ${step.color}25`,
                          padding: '2px 8px', borderRadius: '4px',
                        }}>{step.priority}</span>
                      </div>
                    </div>
                    <ChevronDown size={14} style={{ color: '#475569', transform: openStep === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }} />
                  </button>
                  {openStep === i && (
                    <div className="ml-14 mr-5 px-6 py-5 rounded-b-lg" style={{ background: 'rgba(0,0,0,0.25)', borderTop: `1px solid ${step.color}10` }}>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#cbd5e1', lineHeight: 1.9 }}>
                        {step.desc}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ width: '60px', height: '2px', background: 'rgba(16,185,129,0.3)', borderRadius: '2px', marginBottom: '1.5rem' }} />
            <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>
              Bonnes pratiques de protection
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {protectionMeasures.map((cm, i) => (
                <div key={i} className="rounded-xl p-7" style={{ background: 'rgba(0,0,0,0.3)', border: `1px solid ${cm.color}20` }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div style={{
                      width: '42px', height: '42px', borderRadius: '12px',
                      background: `${cm.color}12`, border: `1px solid ${cm.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <cm.icon size={20} style={{ color: cm.color }} />
                    </div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: '#e2e8f0' }}>
                      {cm.title}
                    </p>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#94a3b8', lineHeight: 1.9 }}>
                    {cm.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════ SOURCES OFFICIELLES ═══════════ */}
        <SectionHeading
          icon={Globe}
          title="Sources Officielles"
          subtitle="Sources gouvernementales utilisées pour cette veille technologique."
          color="#3b82f6"
          gradient="linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #06b6d4 100%)"
        />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(59,130,246,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #3b82f6, #06b6d4, #10b981)' }} />
          <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
            {officialSources.map((src, i) => (
              <a
                key={i}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 px-8 py-6 transition-all"
                style={{ textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 800,
                  color: src.color, background: `${src.color}12`, border: `1px solid ${src.color}30`,
                  padding: '4px 12px', borderRadius: '6px', minWidth: '56px', textAlign: 'center',
                }}>{src.badge}</span>
                <div className="flex-1 min-w-0">
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.3rem' }}>{src.name}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#64748b' }}>{src.desc} — {src.detail}</p>
                </div>
                <ExternalLink size={14} style={{ color: '#334155', flexShrink: 0 }} />
              </a>
            ))}
          </div>
        </div>

        {/* Rapports PDF */}
        <div className="grid sm:grid-cols-2 gap-8 mt-10">
          {[
            { title: 'Panorama de la cybermenace 2024', org: 'ANSSI / CERT-FR', url: 'https://www.cert.ssi.gouv.fr/uploads/CERTFR-2025-CTI-003.pdf', color: '#3b82f6' },
            { title: 'Rapport d\'activité 2024', org: 'Cybermalveillance.gouv.fr', url: 'https://www.cybermalveillance.gouv.fr/medias/2025/03/250327_RA_2024_SCREEN.pdf', color: '#06b6d4' },
          ].map((doc, i) => (
            <a key={i} href={doc.url} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-6 rounded-xl p-4 transition-all"
              style={{ background: 'rgba(10,15,30,0.85)', border: `1px solid ${doc.color}20`, textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${doc.color}40`}
              onMouseLeave={e => e.currentTarget.style.borderColor = `${doc.color}20`}
            >
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: `${doc.color}12`, border: `1px solid ${doc.color}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Activity size={18} style={{ color: doc.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: '#e2e8f0' }}>{doc.title}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#64748b' }}>{doc.org}</p>
              </div>
              <ExternalLink size={14} style={{ color: '#475569', flexShrink: 0 }} />
            </a>
          ))}
        </div>

        {/* ═══════════ CONCLUSION ═══════════ */}
        <div className="mt-28 rounded-2xl p-12 md:p-16" style={{ background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.15)' }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '2rem' }}>
            Conclusion
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', color: '#cbd5e1', lineHeight: 2.1, marginBottom: '2rem' }}>
            Le phishing reste la <strong style={{ color: '#f59e0b' }}>menace n°1 en France</strong> avec <strong style={{ color: '#ef4444' }}>64 000 demandes d'assistance en 2024</strong>. Il est le vecteur initial de <strong style={{ color: '#10b981' }}>91% des cyberattaques</strong>. La protection passe par une approche combinée : <strong style={{ color: '#10b981' }}>technique</strong> (MFA, filtrage, SPF/DKIM/DMARC) et <strong style={{ color: '#a855f7' }}>humaine</strong> (sensibilisation, vigilance). Chaque collaborateur est un maillon de la chaîne de sécurité.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Phishing', 'Smishing', 'Vishing', 'Quishing', 'ANSSI', 'CERT-FR', 'MFA', 'SPF/DKIM/DMARC'].map(tag => (
              <span key={tag} style={{
                fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600,
                color: '#f59e0b', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
                padding: '5px 14px', borderRadius: '8px',
              }}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 px-2">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#475569' }}>
            Veille maintenue mensuellement — dernière mise à jour : mai 2026
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#475569' }}>
            Sources : ANSSI · CERT-FR · Cybermalveillance.gouv.fr · CNIL
          </p>
        </div>

      </div>
    </section>
  )
}
