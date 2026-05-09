import { useState } from 'react'
import { Shield, AlertTriangle, Mail, Lock, Server, Eye, ExternalLink, ChevronDown, Wifi, Users, Database, Brain, ShieldCheck, AlertCircle, Clock, TrendingUp, Globe, Key, HardDrive, Search, FileWarning, Ban, Siren, Phone, ClipboardList, MonitorX, BookOpen, Cpu, MessageSquareWarning, ArrowRight, Bot, Fingerprint, ShieldAlert, Activity, Smartphone, QrCode, UserCheck, MessageCircleWarning, CreditCard, ShieldX, Megaphone } from 'lucide-react'
import SectionLabel from './SectionLabel'

const phishingTypes = [
  {
    icon: Mail, title: 'Email (Phishing)', color: '#f59e0b',
    desc: 'Emails frauduleux imitant des organismes officiels (banques, impôts, Ameli) pour voler des identifiants ou installer un malware via pièce jointe.',
    stat: '33,7%', statLabel: 'des demandes d\'assistance particuliers',
    examples: ['Faux remboursement d\'impôts', 'Alerte sécurité Microsoft 365', 'Mise à jour de carte bancaire'],
    image: '/phishing-email-lcl.jpg', imageLabel: 'Exemple réel : faux email LCL demandant une "mise à jour"',
  },
  {
    icon: Smartphone, title: 'SMS (Smishing)', color: '#06b6d4',
    desc: 'SMS frauduleux exploitant l\'urgence : faux colis en attente, amendes impayées, Ameli. Le lien redirige vers un faux site ou installe un malware.',
    stat: '+85%', statLabel: 'de hausse en 2025',
    examples: ['Faux colis La Poste', 'Faux PV ANTAI', 'Arnaque "Coucou Maman"'],
    image: '/phishing-sms-chronopost.jpg', imageLabel: 'Exemple réel : faux SMS Chronopost avec lien frauduleux',
  },
  {
    icon: Phone, title: 'Vocal (Vishing)', color: '#a855f7',
    desc: 'Appels téléphoniques frauduleux — faux conseiller bancaire, faux support Microsoft. L\'IA permet désormais de cloner une voix en 30 secondes.',
    stat: '+28%', statLabel: 'au T3 2024',
    examples: ['Faux conseiller bancaire', 'Arnaque au président (deepfake)', 'Faux support technique'],
  },
  {
    icon: QrCode, title: 'QR Code (Quishing)', color: '#ef4444',
    desc: 'Faux QR codes collés sur des avis de contravention, menus de restaurant ou bornes publiques, redirigeant vers des sites de phishing.',
    stat: '4M', statLabel: 'de tentatives en France en 2025',
    examples: ['Faux PV de stationnement', 'QR codes en restaurant', 'Faux parcmètres'],
  },
  {
    icon: Fingerprint, title: 'Spear Phishing', color: '#10b981',
    desc: 'Attaque ciblée utilisant les données personnelles de la victime (nom, poste, entreprise) pour créer un message crédible et personnalisé.',
    stat: '65%', statLabel: 'des groupes APT utilisent cette technique',
    examples: ['Email au nom du DRH', 'Faux mail de collègue', 'Fausse facture fournisseur'],
    image: '/phishing-paypal.png', imageLabel: 'Exemple réel : faux email PayPal — attaque ciblée "account limited"',
  },
  {
    icon: CreditCard, title: 'Whaling', color: '#dc2626',
    desc: 'Spear phishing ciblant les dirigeants d\'entreprise — "fraude au président". Peut impliquer des deepfakes vidéo en visioconférence.',
    stat: '25M$', statLabel: 'perdu via deepfake vidéo en 2024',
    examples: ['Fraude au président', 'Faux virement urgent', 'Visio deepfake avec le "PDG"'],
  },
]

const campaignsFrance = [
  {
    icon: '🏥', name: 'Faux Ameli / Carte Vitale', color: '#06b6d4',
    desc: '"Mise à jour de votre carte Vitale obligatoire" ou "remboursement en attente de 284,76€" — SMS et emails imitant l\'Assurance Maladie.',
    frequency: 'Permanente',
    source: 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/hameconnage-assurance-maladie-ameli',
  },
  {
    icon: '📋', name: 'Faux impots.gouv.fr', color: '#3b82f6',
    desc: '"Vous avez un remboursement de 198,50€ en attente" — exploite le calendrier fiscal (déclaration, remboursements). En 2025 : fausses alertes crypto.',
    frequency: 'Saisonnière (avril-sept.)',
    source: 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/hameconnage-impots',
  },
  {
    icon: '📦', name: 'Faux colis La Poste / Colissimo', color: '#f59e0b',
    desc: '"Votre colis est en attente de livraison — frais de port : 1,99€" — lien vers un faux site qui vole les données bancaires.',
    frequency: 'Permanente (+fêtes)',
    source: 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/hameconnage-phishing',
  },
  {
    icon: '🅿️', name: 'Faux PV de stationnement (QR)', color: '#ef4444',
    desc: 'Faux avis de contravention avec QR code collé sur les pare-brise — redirige vers un faux site ANTAI pour payer l\'amende.',
    frequency: '280 000 visites sur Cybermalveillance',
    source: 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/hameconnage-phishing',
  },
  {
    icon: '🎓', name: 'Arnaque au CPF', color: '#a855f7',
    desc: '"Vos droits CPF expirent bientôt — 2 340€ à utiliser" — sollicitation interdite par la loi du 19 décembre 2022.',
    frequency: 'Malgré interdiction légale',
    source: 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/hameconnage-phishing',
  },
  {
    icon: '👋', name: '"Coucou Maman" (Hello Mom)', color: '#f97316',
    desc: '"Salut maman, j\'ai changé de numéro, tu peux m\'envoyer de l\'argent en urgence ?" — arnaque apparue en 2023, toujours active.',
    frequency: 'En croissance',
    source: 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/hameconnage-phishing',
  },
]

const attacksFrance = [
  {
    date: 'Fév. 2024', target: 'Viamedis & Almerys', type: 'Fuite de données — tiers payant',
    impact: '33 millions d\'assurés sociaux exposés — état civil, n° SS, nom de l\'assureur, garanties du contrat santé.',
    detail: 'Intrusion dans les plateformes de tiers payant via des identifiants compromis de professionnels de santé. La CNIL a ouvert une enquête et rappelé les obligations RGPD.',
    color: '#ef4444',
    source: 'https://www.cnil.fr/fr/violation-de-donnees-de-deux-operateurs-de-tiers-payant-la-cnil-ouvre-une-enquete-et-rappelle-aux',
    sourceLabel: 'CNIL',
  },
  {
    date: 'Mars 2024', target: 'France Travail', type: 'Vol de données — identifiants compromis',
    impact: '43 millions de personnes exposées — noms, n° SS, identifiants, emails, téléphones (20 ans d\'historique).',
    detail: 'Des identifiants de conseillers Cap Emploi ont été compromis (probablement par phishing), donnant accès à la base de données. 3 suspects de 21-23 ans arrêtés le 19 mars 2024.',
    color: '#dc2626',
    source: 'https://www.francetravail.org/accueil/communiques/2024/france-travail-et-cap-emploi-victimes-dune-cyberattaque.html',
    sourceLabel: 'France Travail',
  },
  {
    date: 'Sept. 2024', target: 'SFR', type: 'Fuite de données — faille logicielle',
    impact: '3,6 millions de données clients publiées en ligne — identités, adresses, téléphones, emails.',
    detail: 'Exploitation d\'une faille dans le logiciel interne SIBO360 par le collectif Near2tlg. Les données ont été mises en vente puis publiées.',
    color: '#f97316',
    source: 'https://www.cybermalveillance.gouv.fr/',
    sourceLabel: 'Cybermalveillance',
  },
  {
    date: 'Oct. 2024', target: 'Free', type: 'Fuite massive — outil de gestion',
    impact: '19,2 millions de clients + 5 millions d\'IBAN compromis. Amende CNIL : 42 millions d\'euros (janv. 2026).',
    detail: 'Attaque ciblant un outil de gestion interne. La CNIL a sanctionné Free de 42M€ (27M Free Mobile + 15M Free) pour manquement à la sécurité des données.',
    color: '#ef4444',
    source: 'https://www.cnil.fr/',
    sourceLabel: 'CNIL',
  },
  {
    date: 'Avril 2024', target: 'CH Simone Veil — Cannes', type: 'Ransomware LockBit via phishing',
    impact: '61 Go publiés sur le dark web — bilans de santé, RIB, cartes d\'identité, opérations annulées.',
    detail: 'L\'attaque a commencé par un email de phishing ciblé, menant à l\'installation du ransomware LockBit. L\'hôpital a refusé de payer la rançon conformément aux recommandations ANSSI.',
    color: '#a855f7',
    source: 'https://cyberveille.esante.gouv.fr/',
    sourceLabel: 'CERT Santé',
  },
  {
    date: 'Fév. 2024', target: 'Hôpital d\'Armentières', type: 'Ransomware — urgences fermées',
    impact: 'Urgences fermées pendant 24h, données patients dérobées, fonctionnement dégradé pendant plusieurs semaines.',
    detail: 'Le vecteur initial suspecté est un email de phishing. L\'hôpital a dû rediriger les patients vers d\'autres établissements.',
    color: '#dc2626',
    source: 'https://cyberveille.esante.gouv.fr/',
    sourceLabel: 'CERT Santé',
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

const phishingRedFlags = [
  { flag: 'Domaine suspect', detail: 'microsft-security.com au lieu de microsoft.com — faute volontaire dans le nom de domaine', color: '#ef4444' },
  { flag: 'Urgence artificielle', detail: '"Votre compte sera suspendu sous 24h" — pression psychologique pour forcer l\'action', color: '#f59e0b' },
  { flag: 'Lien malveillant', detail: 'URL qui redirige vers un faux site de connexion identique à l\'original pour voler les identifiants', color: '#ef4444' },
  { flag: 'Pas de personnalisation', detail: '"Cher utilisateur" au lieu de votre vrai nom — message générique envoyé en masse', color: '#f97316' },
  { flag: 'Menace de conséquences', detail: '"Définitivement suspendu" — créer la peur pour empêcher la réflexion', color: '#dc2626' },
]

const killChain = [
  { num: '01', icon: Search, title: 'Reconnaissance', desc: 'L\'attaquant collecte des infos sur la cible : OSINT, LinkedIn, site web de l\'entreprise, organigramme', color: '#64748b' },
  { num: '02', icon: MessageSquareWarning, title: 'Préparation', desc: 'Création de l\'email/SMS frauduleux, achat du domaine usurpé, clone du site légitime', color: '#f59e0b' },
  { num: '03', icon: Mail, title: 'Envoi', desc: 'Diffusion du message de phishing — email, SMS, appel vocal, QR code ou réseau social', color: '#ef4444' },
  { num: '04', icon: Eye, title: 'Interaction', desc: 'La victime clique sur le lien, ouvre la pièce jointe ou communique ses identifiants', color: '#f97316' },
  { num: '05', icon: Key, title: 'Vol / Installation', desc: 'Identifiants volés via le faux site, ou malware installé via la pièce jointe (dropper)', color: '#a855f7' },
  { num: '06', icon: Database, title: 'Exploitation', desc: 'Accès aux comptes, mouvement latéral, exfiltration de données, déploiement ransomware', color: '#dc2626' },
]

const reactionSteps = [
  { num: '01', icon: Ban, title: 'NE PAS cliquer / répondre', desc: 'Ne cliquer sur aucun lien, ne pas ouvrir la pièce jointe, ne pas répondre au message', color: '#ef4444', priority: 'CRITIQUE' },
  { num: '02', icon: Eye, title: 'Vérifier l\'expéditeur', desc: 'Contrôler l\'adresse email réelle (pas le nom affiché), le domaine, les fautes subtiles', color: '#f59e0b', priority: 'VÉRIFICATION' },
  { num: '03', icon: Phone, title: 'Contacter l\'organisme', desc: 'Appeler directement l\'organisme par un numéro officiel (jamais celui du message)', color: '#06b6d4', priority: 'IMPORTANT' },
  { num: '04', icon: Key, title: 'Changer les mots de passe', desc: 'Si des identifiants ont été communiqués, les changer immédiatement + activer le MFA', color: '#a855f7', priority: 'URGENT' },
  { num: '05', icon: ClipboardList, title: 'Conserver les preuves', desc: 'Captures d\'écran du message, de l\'URL, de l\'expéditeur — utiles pour la plainte', color: '#f97316', priority: 'PROCÉDURE' },
  { num: '06', icon: Megaphone, title: 'Signaler', desc: 'Signal Spam (email), 33700 (SMS), Pharos (site web), Cybermalveillance.gouv.fr (assistance)', color: '#10b981', priority: 'SIGNALEMENT' },
  { num: '07', icon: Siren, title: 'Alerter en entreprise', desc: 'Prévenir le RSSI/DSI, isoler le poste si malware suspecté, ouvrir un ticket d\'incident', color: '#3b82f6', priority: 'ENTREPRISE' },
  { num: '08', icon: Shield, title: 'Déposer plainte', desc: 'Police/Gendarmerie si préjudice financier ou vol de données — CNIL sous 72h si données personnelles', color: '#8b5cf6', priority: 'LÉGAL' },
]

const counterMeasures = [
  { icon: Key, title: 'MFA obligatoire', desc: 'Authentification multi-facteurs sur tous les accès critiques : email, VPN, admin, cloud, banque en ligne', color: '#06b6d4' },
  { icon: Mail, title: 'Filtrage email avancé', desc: 'Anti-spam, SPF/DKIM/DMARC, sandboxing des pièces jointes, blocage des macros Office par GPO', color: '#ef4444' },
  { icon: Users, title: 'Sensibilisation', desc: 'Campagnes de simulation de phishing régulières, formations obligatoires — l\'humain reste le maillon faible', color: '#f59e0b' },
  { icon: ShieldAlert, title: 'Mises à jour', desc: 'Patcher OS, navigateurs et plugins — les vulnérabilités connues sont les premières exploitées après un clic', color: '#a855f7' },
  { icon: Wifi, title: 'Segmentation réseau', desc: 'VLAN, zones DMZ — limiter l\'impact si un poste est compromis via phishing', color: '#10b981' },
  { icon: HardDrive, title: 'Sauvegardes 3-2-1', desc: '3 copies, 2 supports différents, 1 hors site déconnecté — protection contre le ransomware post-phishing', color: '#3b82f6' },
]

const aiImpacts = [
  { icon: MessageSquareWarning, title: 'Phishing sans fautes', desc: 'Les LLM génèrent des emails parfaits en français, personnalisés au contexte de la cible — le principal indicateur historique (fautes) disparaît', stat: '+1 200% d\'emails', color: '#ef4444' },
  { icon: Bot, title: 'Deepfake vocal & vidéo', desc: 'Clonage de voix en 30 secondes pour le vishing. En 2024, une entreprise perd 25M$ via une visioconférence entièrement deepfake', stat: '3,5 Mds$ de pertes', color: '#a855f7' },
  { icon: Fingerprint, title: 'Hyper-personnalisation', desc: 'Chaque email est unique, adapté au poste, aux habitudes et à l\'historique de la cible — grâce aux fuites de données massives', stat: '37% de clics en +', color: '#f59e0b' },
  { icon: Cpu, title: 'Phishing-as-a-Service', desc: 'Kits clés en main sur le dark web dès 50€ (Tycoon 2FA, Mamba 2FA). Aucune compétence technique requise. +21% de kits en 2024', stat: 'Dès 50€/mois', color: '#06b6d4' },
]

const officialSources = [
  { name: 'ANSSI', desc: 'Agence Nationale de la Sécurité des SI', badge: 'GOV', color: '#3b82f6', url: 'https://cyber.gouv.fr/', detail: 'Panorama de la cybermenace 2024 — 4 386 événements traités' },
  { name: 'CERT-FR', desc: 'Centre de réponse aux incidents', badge: 'CERT', color: '#10b981', url: 'https://www.cert.ssi.gouv.fr/', detail: 'Alertes, bulletins sécurité, rapports CTI' },
  { name: 'Cybermalveillance.gouv.fr', desc: 'Plateforme nationale d\'assistance', badge: 'GOV', color: '#06b6d4', url: 'https://www.cybermalveillance.gouv.fr/', detail: '5,4 millions de visiteurs — 420 000 demandes d\'assistance (2024)' },
  { name: 'CNIL', desc: 'Commission Nationale Informatique & Libertés', badge: 'RGPD', color: '#a855f7', url: 'https://www.cnil.fr/', detail: 'Notification sous 72h en cas de fuite — sanctions Free 42M€' },
  { name: 'Signal Spam', desc: 'Signalement des emails frauduleux', badge: 'SPAM', color: '#f59e0b', url: 'https://www.signal-spam.fr/', detail: 'Extension navigateur pour signaler les spams directement' },
  { name: 'PHAROS', desc: 'Signalement de contenus illicites', badge: 'POLICE', color: '#ef4444', url: 'https://www.internet-signalement.gouv.fr/', detail: 'Plateforme du ministère de l\'Intérieur' },
  { name: 'Directive NIS2', desc: 'Nouvelle réglementation européenne', badge: 'EU', color: '#f97316', url: 'https://monespacenis2.cyber.gouv.fr/', detail: '15 000 entités concernées en France — obligations renforcées' },
]

const veilleMethode = [
  { num: '01', title: 'Collecter', desc: 'Alertes CERT-FR par email, flux RSS ANSSI, veille Cybermalveillance.gouv.fr, Google Alerts "phishing France"', color: '#06b6d4' },
  { num: '02', title: 'Trier', desc: 'Sélection par pertinence BTS SIO SISR : phishing, fuites de données, vulnérabilités, campagnes en cours en France', color: '#f59e0b' },
  { num: '03', title: 'Analyser', desc: 'Étude des rapports ANSSI/CNIL, identification des nouvelles techniques (IA, quishing), analyse des incidents récents', color: '#10b981' },
  { num: '04', title: 'Documenter', desc: 'Synthèse structurée pour le portfolio BTS SIO, fiches techniques, liens vers sources officielles vérifiées', color: '#a855f7' },
]

export default function Veille() {
  const [openAttack, setOpenAttack] = useState(null)
  const [openStep, setOpenStep] = useState(null)
  const [openType, setOpenType] = useState(0)
  const [openCampaign, setOpenCampaign] = useState(null)

  return (
    <section id="veille" className="relative" style={{ paddingTop: '12rem', paddingBottom: '10rem' }}>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ═══════════ HEADER ═══════════ */}
        <div className="text-center" style={{ marginBottom: '7rem' }}>
          <div style={{ marginBottom: '1.2rem' }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px', fontWeight: 700,
              letterSpacing: '0.2em', color: '#f59e0b',
              textTransform: 'uppercase',
              padding: '6px 18px',
              background: 'rgba(245,158,11,0.08)',
              border: '1px solid rgba(245,158,11,0.2)',
              borderRadius: '99px',
            }}>
              BTS SIO SISR — Épreuve E5
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            fontWeight: 900, letterSpacing: '-0.02em',
            lineHeight: 1.1, marginBottom: '0.8rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #f59e0b 40%, #ef4444 70%, #a855f7 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Veille Technologique
          </h2>
          <p style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: 'clamp(1rem, 3vw, 1.4rem)',
            fontWeight: 700, color: '#f59e0b', letterSpacing: '0.02em',
            marginBottom: '1rem',
          }}>
            Le Phishing — Menace n°1 en France
          </p>
          <div style={{
            width: '80px', height: '3px', margin: '0 auto 1.2rem',
            background: 'linear-gradient(90deg, #f59e0b, #ef4444, #a855f7)',
            borderRadius: '99px',
          }} />
          <p className="mx-auto" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px', fontWeight: 500, color: '#94a3b8',
            lineHeight: 1.7, maxWidth: '600px',
          }}>
            Étude approfondie du phishing (hameçonnage) en France — ses formes (email, SMS, vocal, QR code), les campagnes en cours, les incidents majeurs, l'impact de l'IA et les moyens de protection.
          </p>
        </div>

        {/* ═══════════ BANNIÈRE VISUELLE ═══════════ */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="rounded-2xl overflow-hidden relative" style={{ border: '1px solid rgba(245,158,11,0.2)' }}>
            <img src="/phishing-france-map.jpg" alt="Carte des cybermenaces en France — fuites de données massives" style={{ width: '100%', height: '340px', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.8) 100%)' }} />
            <div style={{ position: 'absolute', bottom: '1rem', left: '1.2rem', right: '1.2rem' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                Carte des fuites de données en France — 43M de comptes compromis en 2024
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden relative" style={{ border: '1px solid rgba(239,68,68,0.2)' }}>
              <img src="/phishing-illustration.jpg" alt="Illustration phishing — hacker et email piégé" style={{ width: '100%', height: '160px', objectFit: 'cover', background: '#0f172a' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%)' }} />
              <p style={{ position: 'absolute', bottom: '8px', left: '10px', right: '10px', fontFamily: "'Inter', sans-serif", fontSize: '10px', fontWeight: 700, color: '#fff' }}>
                Phishing par email
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden relative" style={{ border: '1px solid rgba(168,85,247,0.2)' }}>
              <img src="/phishing-hacker.jpg" alt="Hacker récupérant des données par hameçonnage" style={{ width: '100%', height: '160px', objectFit: 'cover', background: '#0f172a' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%)' }} />
              <p style={{ position: 'absolute', bottom: '8px', left: '10px', right: '10px', fontFamily: "'Inter', sans-serif", fontSize: '10px', fontWeight: 700, color: '#fff' }}>
                Vol de données
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden relative col-span-2" style={{ border: '1px solid rgba(6,182,212,0.2)' }}>
              <img src="/phishing-email-inbox.webp" alt="Boîte de réception email — vecteur principal du phishing" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.75) 100%)' }} />
              <p style={{ position: 'absolute', bottom: '8px', left: '10px', right: '10px', fontFamily: "'Inter', sans-serif", fontSize: '10px', fontWeight: 700, color: '#fff' }}>
                91% des cyberattaques commencent par un email de phishing
              </p>
            </div>
          </div>
        </div>

        {/* ═══════════ DÉFINITION VEILLE ═══════════ */}
        <SectionLabel label="QU'EST-CE QUE LA VEILLE ?" color="#06b6d4" mt="mt-20 mb-14" />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(6,182,212,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)' }} />
          <div className="p-10">
            <div className="flex items-start gap-6 mb-8">
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <BookOpen size={24} style={{ color: '#06b6d4' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.2rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '0.6rem' }}>
                  Définition de la veille technologique
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#cbd5e1', lineHeight: 1.8 }}>
                  La <strong style={{ color: '#06b6d4' }}>veille technologique</strong> est un processus continu et systématique de collecte, d'analyse et de diffusion d'informations sur les évolutions technologiques, les menaces émergentes et les bonnes pratiques. En BTS SIO SISR, elle permet d'anticiper les risques, d'adapter les pratiques d'administration et de rester à jour dans un environnement en constante évolution.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: 'Collecter', desc: 'Sources officielles (ANSSI, CERT-FR, CNIL), alertes, flux RSS, rapports annuels', color: '#06b6d4' },
                { title: 'Analyser', desc: 'Trier par pertinence, évaluer l\'impact, identifier les tendances et nouvelles techniques d\'attaque', color: '#3b82f6' },
                { title: 'Diffuser', desc: 'Documenter les résultats, partager les bonnes pratiques, mettre à jour les procédures de sécurité', color: '#8b5cf6' },
              ].map((step, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: 'rgba(0,0,0,0.3)', border: `1px solid ${step.color}20` }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 800, color: step.color, marginBottom: '0.5rem' }}>{step.title}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#94a3b8', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════ DÉFINITION PHISHING ═══════════ */}
        <SectionLabel label="LE PHISHING (HAMEÇONNAGE)" color="#f59e0b" mt="mt-44 mb-16" />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(245,158,11,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #f59e0b, #ef4444, #a855f7)' }} />
          <div className="p-8 md:p-12">
            <div className="flex items-start gap-6 mb-8">
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Mail size={24} style={{ color: '#f59e0b' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.2rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '0.6rem' }}>
                  Qu'est-ce que le phishing ?
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#cbd5e1', lineHeight: 1.8 }}>
                  Le <strong style={{ color: '#f59e0b' }}>phishing</strong> (ou hameçonnage) est une technique d'ingénierie sociale qui consiste à se faire passer pour un organisme ou une personne de confiance afin de <strong style={{ color: '#ef4444' }}>voler des informations personnelles</strong> (identifiants, données bancaires, mots de passe) ou d'<strong style={{ color: '#a855f7' }}>installer un logiciel malveillant</strong>. C'est la <strong style={{ color: '#f59e0b' }}>menace n°1 en France</strong> selon Cybermalveillance.gouv.fr et le vecteur initial de <strong style={{ color: '#10b981' }}>91% des cyberattaques</strong>.
                </p>
              </div>
            </div>

            {/* Types de phishing — tabs */}
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
              LES 6 FORMES DE PHISHING
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {phishingTypes.map((type, i) => (
                <button
                  key={i}
                  onClick={() => setOpenType(i)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all"
                  style={{
                    background: openType === i ? `${type.color}15` : 'rgba(0,0,0,0.2)',
                    border: `1px solid ${openType === i ? `${type.color}40` : 'rgba(255,255,255,0.06)'}`,
                    cursor: 'pointer', fontSize: '13px', fontWeight: 700,
                    color: openType === i ? type.color : '#94a3b8',
                  }}
                >
                  <type.icon size={14} />
                  {type.title.split('(')[0].trim()}
                </button>
              ))}
            </div>

            {(() => {
              const t = phishingTypes[openType]
              return (
                <div className="rounded-xl p-8" style={{ background: 'rgba(0,0,0,0.3)', border: `1px solid ${t.color}20` }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div style={{
                      width: '42px', height: '42px', borderRadius: '12px',
                      background: `${t.color}12`, border: `1px solid ${t.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <t.icon size={20} style={{ color: t.color }} />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 800, color: '#e2e8f0' }}>
                        {t.title}
                      </h4>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', fontWeight: 800,
                        color: t.color,
                      }}>{t.stat}</span>
                      <span style={{ fontSize: '11px', color: '#64748b', marginLeft: '6px' }}>{t.statLabel}</span>
                    </div>
                  </div>
                  <div className={`grid ${t.image ? 'md:grid-cols-2' : ''} gap-6 items-start`}>
                    <div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#cbd5e1', lineHeight: 1.9, marginBottom: '1.2rem' }}>
                        {t.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {t.examples.map((ex, j) => (
                          <span key={j} style={{
                            fontSize: '12px', fontWeight: 600, color: t.color,
                            background: `${t.color}10`, border: `1px solid ${t.color}20`,
                            padding: '5px 12px', borderRadius: '6px',
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

        {/* ═══════════ ANATOMIE EMAIL PHISHING ═══════════ */}
        <SectionLabel label="ANATOMIE D'UN EMAIL DE PHISHING" color="#ef4444" mt="mt-44 mb-16" />

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(245,158,11,0.15)' }}>
            <div className="flex items-center gap-2 px-5 py-3" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex gap-1.5">
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#475569', marginLeft: '8px' }}>Email — Boîte de réception</span>
            </div>
            <div className="p-5">
              <div className="space-y-2 mb-4 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-start gap-2">
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#64748b', minWidth: '36px' }}>De:</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#e2e8f0' }}>
                    support@microsft-security.com
                  </span>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#ef4444', background: 'rgba(239,68,68,0.15)', padding: '1px 8px', borderRadius: '4px', marginLeft: '4px' }}>
                    ⚠ SUSPECT
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#64748b', minWidth: '36px' }}>À:</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#94a3b8' }}>
                    j.dupont@entreprise.fr
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#64748b', minWidth: '36px' }}>Objet:</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: '#f59e0b' }}>
                    ⚠️ Urgent : Votre compte Microsoft 365 sera suspendu sous 24h
                  </span>
                </div>
              </div>

              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#cbd5e1', lineHeight: 1.8 }}>
                <p style={{ marginBottom: '0.8rem' }}>Cher utilisateur,</p>
                <p style={{ marginBottom: '0.8rem' }}>
                  Nous avons détecté une <strong>activité suspecte</strong> sur votre compte Microsoft 365. Pour des raisons de sécurité, votre compte sera <strong style={{ color: '#ef4444' }}>définitivement suspendu</strong> si vous ne vérifiez pas votre identité dans les <strong style={{ color: '#f59e0b' }}>24 prochaines heures</strong>.
                </p>
                <p style={{ marginBottom: '1.2rem' }}>
                  Veuillez cliquer sur le bouton ci-dessous pour confirmer vos informations :
                </p>

                <div style={{
                  display: 'inline-block', padding: '10px 28px', borderRadius: '8px',
                  background: 'rgba(239,68,68,0.15)', border: '2px dashed rgba(239,68,68,0.4)',
                  color: '#ef4444', fontSize: '13px', fontWeight: 700, marginBottom: '1.2rem',
                  position: 'relative',
                }}>
                  🔗 Vérifier mon compte
                  <span style={{
                    position: 'absolute', top: '-10px', right: '-10px',
                    fontSize: '9px', fontWeight: 800, color: '#fff', background: '#ef4444',
                    padding: '2px 6px', borderRadius: '4px',
                  }}>PIÈGE</span>
                </div>

                <p style={{ fontSize: '12px', color: '#475569', marginTop: '0.5rem' }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#ef4444' }}>
                    → URL réelle : http://microsft-security.phishing-kit.ru/login
                  </span>
                </p>

                <p style={{ marginTop: '1rem', color: '#94a3b8' }}>
                  Cordialement,<br />
                  L'équipe Microsoft Security
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(239,68,68,0.15)' }}>
            <div className="px-5 py-3.5" style={{ background: 'rgba(239,68,68,0.06)', borderBottom: '1px solid rgba(239,68,68,0.1)' }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 700, color: '#ef4444', letterSpacing: '0.1em' }}>
                🚩 SIGNAUX D'ALERTE
              </p>
            </div>
            <div className="p-5 space-y-5">
              {phishingRedFlags.map((rf, i) => (
                <div key={i} className="rounded-lg p-3" style={{ background: `${rf.color}08`, border: `1px solid ${rf.color}15` }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: rf.color, marginBottom: '2px' }}>
                    ⚠ {rf.flag}
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#94a3b8', lineHeight: 1.5 }}>
                    {rf.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════ EXEMPLES RÉELS ═══════════ */}
        <SectionLabel label="EXEMPLES RÉELS DE PHISHING" color="#dc2626" mt="mt-44 mb-16" />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(220,38,38,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #dc2626, #f59e0b, #06b6d4)' }} />
          <div className="p-8 md:p-12">
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 700, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
              CAPTURES D'ÉCRAN — VRAIS MESSAGES DE PHISHING
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '3rem' }}>
              Voici de vrais exemples de phishing interceptés en France — email bancaire, faux PayPal et SMS frauduleux. Apprenez à les reconnaître.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* SMS Chronopost */}
              <div className="rounded-xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(6,182,212,0.2)' }}>
                <div className="px-4 py-2.5" style={{ background: 'rgba(6,182,212,0.06)', borderBottom: '1px solid rgba(6,182,212,0.1)' }}>
                  <div className="flex items-center gap-2">
                    <Smartphone size={13} style={{ color: '#06b6d4' }} />
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 700, color: '#06b6d4' }}>SMISHING — SMS</span>
                  </div>
                </div>
                <div style={{ padding: '12px' }}>
                  <img src="/phishing-sms-chronopost.jpg" alt="Vrai SMS de phishing — faux message Chronopost avec lien frauduleux" style={{
                    width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)',
                  }} />
                </div>
                <div style={{ padding: '0 16px 16px' }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>
                    Faux SMS Chronopost
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#94a3b8', lineHeight: 1.5 }}>
                    Le lien "chronopost-online-info.com" n'est pas le vrai site de Chronopost. L'URL frauduleuse vise à voler les données bancaires.
                  </p>
                </div>
              </div>

              {/* Email LCL */}
              <div className="rounded-xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(245,158,11,0.2)' }}>
                <div className="px-4 py-2.5" style={{ background: 'rgba(245,158,11,0.06)', borderBottom: '1px solid rgba(245,158,11,0.1)' }}>
                  <div className="flex items-center gap-2">
                    <Mail size={13} style={{ color: '#f59e0b' }} />
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 700, color: '#f59e0b' }}>PHISHING — EMAIL BANCAIRE</span>
                  </div>
                </div>
                <div style={{ padding: '12px' }}>
                  <img src="/phishing-email-lcl.jpg" alt="Vrai email de phishing — faux email LCL banque" style={{
                    width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)',
                  }} />
                </div>
                <div style={{ padding: '0 16px 16px' }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>
                    Faux email LCL Banque
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#94a3b8', lineHeight: 1.5 }}>
                    Demande de "mise à jour" du numéro de client. L'adresse expéditeur et le lien ne correspondent pas au domaine officiel de LCL.
                  </p>
                </div>
              </div>

              {/* PayPal */}
              <div className="rounded-xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(168,85,247,0.2)' }}>
                <div className="px-4 py-2.5" style={{ background: 'rgba(168,85,247,0.06)', borderBottom: '1px solid rgba(168,85,247,0.1)' }}>
                  <div className="flex items-center gap-2">
                    <CreditCard size={13} style={{ color: '#a855f7' }} />
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 700, color: '#a855f7' }}>PHISHING — PAIEMENT</span>
                  </div>
                </div>
                <div style={{ padding: '12px' }}>
                  <img src="/phishing-paypal.png" alt="Vrai email de phishing — faux email PayPal account limited" style={{
                    width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)',
                  }} />
                </div>
                <div style={{ padding: '0 16px 16px' }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>
                    Faux email PayPal
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#94a3b8', lineHeight: 1.5 }}>
                    "Your account has been limited" — urgence artificielle + bouton "Update your account" menant vers un faux site identique à PayPal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════ CAMPAGNES EN FRANCE ═══════════ */}
        <SectionLabel label="CAMPAGNES DE PHISHING EN FRANCE" color="#f97316" mt="mt-44 mb-16" />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(249,115,22,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #f97316, #f59e0b, #ef4444)' }} />
          <div className="p-8 md:p-12">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '3rem' }}>
              Les campagnes de phishing les plus fréquentes visant les citoyens français — identifiées par <strong style={{ color: '#06b6d4' }}>Cybermalveillance.gouv.fr</strong>.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {campaignsFrance.map((c, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden transition-all duration-300"
                  style={{
                    background: 'rgba(0,0,0,0.3)',
                    border: `1px solid ${c.color}20`,
                    cursor: 'pointer',
                  }}
                  onClick={() => setOpenCampaign(openCampaign === i ? null : i)}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${c.color}45`; e.currentTarget.style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = `${c.color}20`; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span style={{ fontSize: '24px' }}>{c.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#e2e8f0', lineHeight: 1.2 }}>
                          {c.name}
                        </p>
                        <span style={{
                          fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', fontWeight: 700,
                          color: c.color, background: `${c.color}12`, border: `1px solid ${c.color}25`,
                          padding: '1px 6px', borderRadius: '4px',
                        }}>{c.frequency}</span>
                      </div>
                    </div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#94a3b8', lineHeight: 1.6 }}>
                      {c.desc}
                    </p>
                    {openCampaign === i && (
                      <a href={c.source} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold"
                        style={{ color: c.color, textDecoration: 'none' }}
                        onClick={e => e.stopPropagation()}
                      >
                        <ExternalLink size={11} /> Source Cybermalveillance
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════ KILL CHAIN ═══════════ */}
        <SectionLabel label="CHAÎNE D'ATTAQUE PAR PHISHING" color="#dc2626" mt="mt-44 mb-16" />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(220,38,38,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #64748b, #f59e0b, #ef4444, #f97316, #a855f7, #dc2626)' }} />
          <div className="p-8 md:p-12">
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 700, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
              DE LA RECONNAISSANCE À L'EXPLOITATION
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '3rem' }}>
              Chaque étape d'une attaque par phishing est une opportunité de détection et de blocage pour le défenseur.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {killChain.map((step, i) => (
                <div key={i} className="rounded-xl p-5 relative" style={{ background: 'rgba(0,0,0,0.3)', border: `1px solid ${step.color}25` }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 800,
                      color: step.color, background: `${step.color}15`, border: `1px solid ${step.color}30`,
                      padding: '2px 8px', borderRadius: '6px',
                    }}>{step.num}</span>
                    <step.icon size={16} style={{ color: step.color }} />
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.3rem' }}>{step.title}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#94a3b8', lineHeight: 1.5 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════ ATTAQUES EN FRANCE ═══════════ */}
        <SectionLabel label="INCIDENTS MAJEURS EN FRANCE (2024-2026)" color="#a855f7" mt="mt-44 mb-16" />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(168,85,247,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #a855f7, #ef4444, #f59e0b)' }} />
          <div className="p-8 md:p-12">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '3rem' }}>
              Cyberattaques majeures ayant touché des organisations françaises — souvent initiées par du phishing. Données vérifiées via sources officielles (CNIL, ANSSI, CERT Santé).
            </p>

            <div className="space-y-5">
              {attacksFrance.map((atk, i) => (
                <div key={i}>
                  <button
                    className="w-full flex items-center gap-6 px-5 py-4 rounded-xl transition-all text-left"
                    style={{
                      background: openAttack === i ? `${atk.color}08` : 'rgba(0,0,0,0.2)',
                      border: `1px solid ${openAttack === i ? `${atk.color}30` : 'rgba(255,255,255,0.06)'}`,
                      cursor: 'pointer',
                    }}
                    onClick={() => setOpenAttack(openAttack === i ? null : i)}
                  >
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 700,
                      color: atk.color, background: `${atk.color}15`, border: `1px solid ${atk.color}30`,
                      padding: '3px 10px', borderRadius: '6px', flexShrink: 0, minWidth: '90px', textAlign: 'center',
                    }}>{atk.date}</span>
                    <div className="flex-1 min-w-0">
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#e2e8f0' }}>
                        {atk.target}
                      </p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#64748b' }}>
                        {atk.type}
                      </p>
                    </div>
                    <ChevronDown size={16} style={{ color: '#475569', transform: openAttack === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }} />
                  </button>
                  {openAttack === i && (
                    <div className="mx-5 px-5 py-4 rounded-b-xl" style={{ background: 'rgba(0,0,0,0.3)', borderTop: `1px solid ${atk.color}15` }}>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '0.5rem' }}>
                        <strong style={{ color: atk.color }}>Impact :</strong> {atk.impact}
                      </p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '0.8rem' }}>
                        {atk.detail}
                      </p>
                      <a href={atk.source} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors"
                        style={{ color: atk.color, textDecoration: 'none' }}
                      >
                        <ExternalLink size={12} /> Source : {atk.sourceLabel}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════ STATISTIQUES ═══════════ */}
        <SectionLabel label="CHIFFRES CLÉS" color="#06b6d4" mt="mt-44 mb-16" />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {statistics.map((stat, i) => (
            <div key={i} className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: 'rgba(10,15,30,0.85)', border: `1px solid ${stat.color}20` }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${stat.color}40`}
              onMouseLeave={e => e.currentTarget.style.borderColor = `${stat.color}20`}
            >
              <div style={{ height: '3px', background: stat.color }} />
              <div className="p-8 text-center">
                <p style={{
                  fontFamily: "'Orbitron', system-ui, sans-serif",
                  fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                  fontWeight: 900, color: stat.color,
                  marginBottom: '0.3rem', lineHeight: 1,
                }}>
                  {stat.value}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.2rem' }}>
                  {stat.label}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#64748b', lineHeight: 1.4 }}>
                  {stat.detail}
                </p>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#334155', marginTop: '0.4rem' }}>
                  {stat.source}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ═══════════ IMPACT IA ═══════════ */}
        <SectionLabel label="IMPACT DE L'IA SUR LE PHISHING" color="#a855f7" mt="mt-44 mb-16" />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(168,85,247,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #a855f7, #ec4899, #ef4444)' }} />
          <div className="p-8 md:p-12">
            <div className="flex items-start gap-6 mb-6">
              <div style={{
                width: '48px', height: '48px', borderRadius: '14px',
                background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Brain size={22} style={{ color: '#a855f7' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '0.4rem' }}>
                  L'IA révolutionne le phishing
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#94a3b8', lineHeight: 1.7 }}>
                  Les LLM, le deepfake et le Phishing-as-a-Service transforment radicalement le paysage. Les emails deviennent parfaits, personnalisés et produits à l'échelle industrielle.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              {aiImpacts.map((impact, i) => (
                <div key={i} className="rounded-xl p-5" style={{ background: 'rgba(0,0,0,0.3)', border: `1px solid ${impact.color}20` }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '10px',
                      background: `${impact.color}12`, border: `1px solid ${impact.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <impact.icon size={18} style={{ color: impact.color }} />
                    </div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#e2e8f0' }}>{impact.title}</p>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '0.8rem' }}>
                    {impact.desc}
                  </p>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 700,
                    color: impact.color, background: `${impact.color}12`, border: `1px solid ${impact.color}25`,
                    padding: '3px 10px', borderRadius: '6px',
                  }}>{impact.stat}</span>
                </div>
              ))}
            </div>

            {/* Before/After */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl p-5" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(100,116,139,0.2)' }}>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 700, color: '#64748b', letterSpacing: '0.1em', marginBottom: '0.8rem' }}>
                  AVANT L'IA — Phishing classique
                </p>
                <div className="rounded-lg p-4" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#94a3b8', lineHeight: 1.6, fontStyle: 'italic' }}>
                    "Cher clien, nous avon detecte une probleme sur votre comptes bancaire. Cliquer ici pour verifier vos informations immediatement sinon votre compte sera bloquer."
                  </p>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#64748b', marginTop: '0.5rem' }}>
                  ❌ Fautes d'orthographe · Formulation maladroite · Facile à détecter
                </p>
              </div>
              <div className="rounded-xl p-5" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(239,68,68,0.2)' }}>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 700, color: '#ef4444', letterSpacing: '0.1em', marginBottom: '0.8rem' }}>
                  AVEC L'IA — Phishing augmenté
                </p>
                <div className="rounded-lg p-4" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#cbd5e1', lineHeight: 1.6, fontStyle: 'italic' }}>
                    "Bonjour M. Dupont, suite à votre dernier achat chez Amazon le 15 avril, nous avons détecté une tentative de connexion inhabituelle depuis Bucarest. Veuillez confirmer votre identité via notre portail sécurisé sous 48h."
                  </p>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#ef4444', marginTop: '0.5rem' }}>
                  ⚠ Parfait français · Personnalisé · Contexte crédible · Très difficile à détecter
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════ QUE FAIRE ═══════════ */}
        <SectionLabel label="QUE FAIRE EN CAS DE PHISHING ?" color="#10b981" mt="mt-44 mb-16" />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(16,185,129,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #ef4444, #f59e0b, #10b981)' }} />
          <div className="p-8 md:p-12">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '0.5rem' }}>
              Procédure à suivre en cas de réception ou d'interaction avec un message de phishing — basée sur les recommandations de l'<strong style={{ color: '#3b82f6' }}>ANSSI</strong> et de <strong style={{ color: '#06b6d4' }}>Cybermalveillance.gouv.fr</strong>.
            </p>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#f59e0b', marginBottom: '3rem' }}>
              ⚠ Si vous avez communiqué des identifiants, agissez immédiatement.
            </p>

            <div className="space-y-5">
              {reactionSteps.map((step, i) => (
                <div key={i}>
                  <button
                    className="w-full flex items-center gap-3 px-5 py-4 rounded-xl transition-all text-left"
                    style={{
                      background: openStep === i ? `${step.color}08` : 'rgba(0,0,0,0.2)',
                      border: `1px solid ${openStep === i ? `${step.color}30` : 'rgba(255,255,255,0.06)'}`,
                      cursor: 'pointer',
                    }}
                    onClick={() => setOpenStep(openStep === i ? null : i)}
                  >
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '10px',
                      background: `${step.color}15`, border: `1px solid ${step.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 800, color: step.color }}>{step.num}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#e2e8f0' }}>
                          {step.title}
                        </p>
                        <span style={{
                          fontSize: '9px', fontWeight: 800, color: step.color,
                          background: `${step.color}12`, border: `1px solid ${step.color}25`,
                          padding: '1px 6px', borderRadius: '4px',
                        }}>{step.priority}</span>
                      </div>
                    </div>
                    <ChevronDown size={14} style={{ color: '#475569', transform: openStep === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }} />
                  </button>
                  {openStep === i && (
                    <div className="ml-14 mr-5 px-4 py-3 rounded-b-lg" style={{ background: 'rgba(0,0,0,0.25)', borderTop: `1px solid ${step.color}10` }}>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#cbd5e1', lineHeight: 1.6 }}>
                        {step.desc}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════ CONTRE-MESURES ═══════════ */}
        <SectionLabel label="CONTRE-MESURES & BONNES PRATIQUES" color="#10b981" mt="mt-44 mb-16" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {counterMeasures.map((cm, i) => (
            <div key={i} className="rounded-2xl p-9 transition-all duration-300"
              style={{ background: 'rgba(10,15,30,0.85)', border: `1px solid ${cm.color}20` }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = `${cm.color}40`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = `${cm.color}20`
              }}
            >
              <div style={{
                width: '42px', height: '42px', borderRadius: '12px',
                background: `${cm.color}12`, border: `1px solid ${cm.color}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1rem',
              }}>
                <cm.icon size={20} style={{ color: cm.color }} />
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.4rem' }}>
                {cm.title}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>
                {cm.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ═══════════ MA DÉMARCHE ═══════════ */}
        <SectionLabel label="MA DÉMARCHE DE VEILLE" color="#f59e0b" mt="mt-44 mb-16" />

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {veilleMethode.map((step, i) => (
            <div key={i} className="rounded-2xl p-9 text-center" style={{ background: 'rgba(10,15,30,0.85)', border: `1px solid ${step.color}20` }}>
              <div className="flex items-center justify-center mx-auto mb-3" style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: `${step.color}15`, border: `1px solid ${step.color}35`,
              }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', fontWeight: 800, color: step.color }}>{step.num}</span>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: step.color, marginBottom: '0.4rem' }}>
                {step.title}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#94a3b8', lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ═══════════ SOURCES OFFICIELLES ═══════════ */}
        <SectionLabel label="SOURCES OFFICIELLES" color="#3b82f6" mt="mt-44 mb-16" />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(59,130,246,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #3b82f6, #06b6d4, #10b981)' }} />
          <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
            {officialSources.map((src, i) => (
              <a
                key={i}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 px-6 py-4 transition-all"
                style={{ textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', fontWeight: 800,
                  color: src.color, background: `${src.color}12`, border: `1px solid ${src.color}30`,
                  padding: '3px 10px', borderRadius: '6px', minWidth: '52px', textAlign: 'center',
                }}>{src.badge}</span>
                <div className="flex-1 min-w-0">
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#e2e8f0' }}>{src.name}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#64748b' }}>{src.desc} — {src.detail}</p>
                </div>
                <ExternalLink size={14} style={{ color: '#334155', flexShrink: 0 }} />
              </a>
            ))}
          </div>
        </div>

        {/* Rapports PDF */}
        <div className="grid sm:grid-cols-2 gap-8 mt-14">
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
        <div className="mt-36 rounded-2xl p-12 md:p-16" style={{ background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.15)' }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.2rem' }}>
            Conclusion
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', color: '#cbd5e1', lineHeight: 2, marginBottom: '2rem' }}>
            Le phishing reste la <strong style={{ color: '#f59e0b' }}>menace n°1 en France</strong> avec <strong style={{ color: '#ef4444' }}>64 000 demandes d'assistance en 2024</strong> sur Cybermalveillance.gouv.fr. Il est le vecteur initial de <strong style={{ color: '#10b981' }}>91% des cyberattaques</strong>, à l'origine des fuites massives de 2024 : <strong style={{ color: '#dc2626' }}>33 millions</strong> (Viamedis), <strong style={{ color: '#dc2626' }}>43 millions</strong> (France Travail), <strong style={{ color: '#dc2626' }}>19,2 millions</strong> (Free). L'intelligence artificielle amplifie cette menace avec des emails <strong style={{ color: '#a855f7' }}>parfaits et personnalisés</strong> (+1 200% d'emails de phishing) et des kits Phishing-as-a-Service accessibles <strong style={{ color: '#06b6d4' }}>dès 50€</strong>. La protection passe par une approche combinée : <strong style={{ color: '#10b981' }}>technique</strong> (MFA, filtrage email, SPF/DKIM/DMARC) et <strong style={{ color: '#a855f7' }}>humaine</strong> (sensibilisation, simulations de phishing). Chaque collaborateur est un maillon de la chaîne de sécurité.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Phishing', 'Smishing', 'Vishing', 'Quishing', 'Spear Phishing', 'ANSSI', 'CERT-FR', 'IA & Deepfake', 'Phishing-as-a-Service', 'NIS2', 'MFA', 'SPF/DKIM/DMARC'].map(tag => (
              <span key={tag} style={{
                fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600,
                color: '#f59e0b', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
                padding: '3px 10px', borderRadius: '6px',
              }}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-3 px-2">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#475569' }}>
            Veille maintenue mensuellement — dernière mise à jour : mai 2026
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#475569' }}>
            Sources : ANSSI · CERT-FR · Cybermalveillance.gouv.fr · CNIL · Signal Spam · PHAROS
          </p>
        </div>

      </div>
    </section>
  )
}
