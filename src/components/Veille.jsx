import { useState } from 'react'
import { Shield, AlertTriangle, Mail, Eye, ExternalLink, ChevronDown, Brain, ShieldCheck, TrendingUp, Globe, Key, Ban, Phone, BookOpen, Bot, Activity, Smartphone, QrCode, Megaphone, PhoneOff, Volume2, Video, FileText, Lock, Users, CheckCircle } from 'lucide-react'

function SectionHeading({ icon: SectionIcon, title, subtitle, color, gradient, num }) {
  return (
    <div style={{ marginTop: '10rem', marginBottom: '5rem' }}>
      {num && (
        <p className="text-center" style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '14px', fontWeight: 800, letterSpacing: '0.25em',
          color: `${color}`, marginBottom: '1.5rem',
          opacity: 0.7,
        }}>
          PARTIE {num}
        </p>
      )}
      <div className="flex items-center justify-center gap-5" style={{ marginBottom: '2.5rem' }}>
        <div style={{ flex: 1, height: '2px', background: `linear-gradient(90deg, transparent, ${color}50)`, borderRadius: '2px' }} />
        <div style={{
          width: '70px', height: '70px', borderRadius: '20px',
          background: `${color}12`, border: `2px solid ${color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: `0 0 40px ${color}15, 0 0 80px ${color}08`,
        }}>
          <SectionIcon size={32} style={{ color }} />
        </div>
        <div style={{ flex: 1, height: '2px', background: `linear-gradient(90deg, ${color}50, transparent)`, borderRadius: '2px' }} />
      </div>
      <h2 className="text-center" style={{
        fontFamily: "'Orbitron', system-ui, sans-serif",
        fontSize: 'clamp(1.6rem, 4.5vw, 2.5rem)',
        fontWeight: 900, letterSpacing: '0.04em', lineHeight: 1.3, marginBottom: '1.5rem',
        background: gradient || `linear-gradient(135deg, #ffffff 0%, ${color} 100%)`,
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        filter: `drop-shadow(0 0 20px ${color}30)`,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-center mx-auto" style={{
          fontFamily: "'Inter', sans-serif", fontSize: '17px', fontWeight: 500,
          color: '#94a3b8', lineHeight: 1.9, maxWidth: '680px',
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

const sommaire = [
  { num: '01', label: 'La Veille Techno', color: '#06b6d4' },
  { num: '02', label: "C'est quoi le Phishing ?", color: '#f59e0b' },
  { num: '03', label: 'Les 8 Formes', color: '#ef4444' },
  { num: '04', label: 'Comment le repérer ?', color: '#dc2626' },
  { num: '05', label: "L'IA et le Phishing", color: '#a855f7' },
  { num: '06', label: 'Attaques récentes en France', color: '#dc2626' },
  { num: '07', label: 'Chiffres Clés 2025', color: '#06b6d4' },
  { num: '08', label: 'Comment se protéger ?', color: '#10b981' },
  { num: '09', label: 'Mes Sources', color: '#3b82f6' },
]

const phishingTypes = [
  {
    num: '1', icon: Mail, title: 'Email (Phishing classique)', color: '#f59e0b',
    desc: "Un faux email imite ta banque, les impôts ou Ameli. Il te pousse à cliquer sur un lien qui mène à un faux site pour voler tes identifiants. Avec l'IA, ces emails sont désormais sans aucune faute — 82% sont générés automatiquement.",
    tip: "Ne clique jamais sur un lien dans un email. Va toi-même sur le site officiel en tapant l'adresse dans ton navigateur.",
    stat: '3,4 Mds', statLabel: "d'emails de phishing par jour dans le monde",
    examples: ['Faux email banque', 'Faux remboursement impôts', 'Fausse alerte Microsoft'],
    image: '/phishing-email-lcl.jpg',
    imageLabel: 'Faux email LCL intercepté en France',
  },
  {
    num: '2', icon: Smartphone, title: 'SMS (Smishing)', color: '#06b6d4',
    desc: "\"Votre colis est en attente\" ou \"Vous avez une amende\". Le lien mène vers un faux site qui vole tes données bancaires. En 2025, ces arnaques ont explosé de +2 500%. Avec l'IA, les escrocs créent même de fausses photos de colis avec ton nom dessus.",
    tip: "Transfère tout SMS suspect au 33700. Le vrai Chronopost ne t'envoie jamais de lien par SMS.",
    stat: '+2 500%', statLabel: "de hausse en 2025 — 36% de taux de clic (vs 4% par email)",
    examples: ['Faux colis La Poste', 'Fausse amende ANTAI', 'Faux message Ameli'],
    image: '/phishing-sms-chronopost.jpg',
    imageLabel: 'Faux SMS Chronopost avec lien piégé',
  },
  {
    num: '3', icon: Phone, title: 'Téléphone (Vishing)', color: '#a855f7',
    desc: "Quelqu'un t'appelle en se faisant passer pour ta banque ou la police et te met la pression pour que tu donnes tes codes. L'arnaque au faux conseiller bancaire a coûté 245M€ aux Français. Depuis janvier 2026, une nouvelle loi force les appels étrangers avec faux numéro français à s'afficher \"numéro masqué\".",
    tip: "Raccroche et rappelle ta banque toi-même avec le numéro inscrit sur ta carte bancaire.",
    stat: '+442%', statLabel: "de hausse du vishing en 2024",
    examples: ['Faux conseiller bancaire', 'Faux support Microsoft', 'Faux policier'],
    image: '/phishing-vishing.jpg',
    imageLabel: "Arnaque téléphonique — faux conseiller bancaire",
  },
  {
    num: '4', icon: QrCode, title: 'QR Code (Quishing)', color: '#ef4444',
    desc: "Un faux QR code est collé sur un PV, un parcmètre ou un menu de restaurant. Tu scannes, tu arrives sur un faux site de paiement. Des faux PV ont été trouvés à Paris, Lyon et Melun. Au Royaume-Uni, +587% de signalements entre 2023 et 2025.",
    tip: "Le seul vrai site pour payer un PV : amendes.gouv.fr. Ne scanne jamais un QR code collé sur du papier dans la rue.",
    stat: '+400%', statLabel: "de hausse du quishing en 2024-2025",
    examples: ['Faux PV avec QR code', 'Faux parcmètre', 'Fausse borne de recharge'],
    image: '/phishing-quishing.jpg',
    imageLabel: 'Faux QR code sur un avis de contravention',
  },
  {
    num: '5', icon: Users, title: 'Ciblé (Spear Phishing)', color: '#10b981',
    desc: "L'escroc ne vise pas tout le monde — il vise TOI. Il cherche ton nom, ton poste, tes collègues sur LinkedIn, puis crée un message personnalisé. En 2025, le groupe Lazarus a volé 1,5 milliard de dollars à la plateforme ByBit avec cette technique — le plus gros braquage crypto de l'histoire.",
    tip: "Méfie-toi des emails qui utilisent ton prénom et citent tes collègues. Vérifie toujours par un autre canal.",
    stat: '54%', statLabel: "de taux de clic quand c'est personnalisé (vs 12% en masse)",
    examples: ['Email au nom de ton chef', 'Fausse facture fournisseur', 'Faux mail de collègue'],
    image: '/phishing-spear.jpg',
    imageLabel: 'Attaque ciblée avec recherche sur la victime',
  },
  {
    num: '6', icon: Bot, title: 'Fraude au Président (Whaling)', color: '#dc2626',
    desc: "L'escroc se fait passer pour le PDG et demande un virement urgent. Avec l'IA, il peut créer une fausse visioconférence avec le visage et la voix du patron (deepfake). En 2024, l'entreprise Arup a perdu 25 millions de dollars via une visio où TOUS les participants étaient des deepfakes.",
    tip: "Toute demande de virement urgente doit être confirmée par un appel direct sur le numéro habituel du dirigeant.",
    stat: '+131%', statLabel: "d'augmentation — 59% des entreprises ont eu un dirigeant ciblé",
    examples: ['Faux virement urgent du PDG', 'Visioconférence deepfake', 'Email du "directeur financier"'],
    image: '/phishing-whaling.jpg',
    imageLabel: 'Fraude au président ciblant les dirigeants',
  },
  {
    num: '7', icon: Globe, title: 'Réseaux Sociaux (Angler)', color: '#f97316',
    desc: "L'escroc crée un faux compte de service client sur Twitter, Instagram ou Facebook. Il guette les clients mécontents et leur répond avec un lien piégé : \"Cliquez ici pour résoudre votre ticket\". En 2024, 23% des attaques de phishing passaient par les réseaux sociaux.",
    tip: "Vérifie toujours que le compte du SAV a le badge officiel (coche bleue). Ne clique jamais sur un lien en DM.",
    stat: '23%', statLabel: 'des attaques passent par les réseaux sociaux',
    examples: ['Faux support PayPal sur Twitter', 'Faux SAV Instagram', 'Faux compte bancaire Facebook'],
    image: '/phishing-angler.jpg',
    imageLabel: 'Faux comptes SAV sur les réseaux sociaux',
  },
  {
    num: '8', icon: Lock, title: 'Faux Wi-Fi (Evil Twin)', color: '#3b82f6',
    desc: "L'escroc crée un Wi-Fi avec le même nom qu'un réseau public (café, aéroport, hôtel). Quand tu te connectes, il voit tout : mots de passe, emails, données bancaires. En 2024, un homme a été arrêté en Australie pour avoir installé des faux Wi-Fi dans 3 aéroports.",
    tip: "N'utilise jamais un Wi-Fi public pour te connecter à ta banque ou tes emails. Utilise tes données mobiles (4G/5G).",
    stat: '15$', statLabel: "le prix d'un outil pour créer un faux Wi-Fi",
    examples: ['Faux Wi-Fi "Starbucks_Free"', 'Faux Wi-Fi aéroport', 'Faux Wi-Fi hôtel'],
    image: '/phishing-evil-twin.jpg',
    imageLabel: 'Faux Wi-Fi public dans un café ou aéroport',
  },
]

const redFlags = [
  { flag: "L'adresse email est bizarre", detail: 'Exemple : "support@microsft-security.com" au lieu de "microsoft.com" — il manque le "o". Regarde TOUJOURS l\'adresse complète, pas juste le nom affiché.', color: '#ef4444' },
  { flag: 'On te met la pression', detail: '"Votre compte sera bloqué dans 24h" ou "Payez immédiatement sinon poursuites" — ils veulent que tu agisses vite sans réfléchir.', color: '#f59e0b' },
  { flag: 'Le lien est suspect', detail: "Passe ta souris sur le lien SANS cliquer — si l'adresse ne correspond pas au vrai site (ex: chronopost-online-info.com au lieu de chronopost.fr), c'est un piège.", color: '#ef4444' },
  { flag: "C'est pas personnalisé", detail: '"Cher client" ou "Cher utilisateur" au lieu de ton vrai nom — c\'est envoyé en masse à des milliers de personnes.', color: '#f97316' },
  { flag: 'On te demande des infos sensibles', detail: 'Aucune banque, aucune administration ne te demandera JAMAIS ton mot de passe, ton code de carte ou ton numéro de sécu par email, SMS ou téléphone.', color: '#dc2626' },
]

const aiThreats = [
  {
    icon: Volume2, title: 'Clonage de voix en 3 secondes',
    color: '#ef4444',
    desc: "Un numéro inconnu t'appelle. Tu décroches et tu dis juste \"Allô ?\" ou \"Bonjour\". En 3 secondes, l'escroc a enregistré ta voix. Grâce à l'IA (comme ElevenLabs), il copie ta voix avec 85% de précision (étude McAfee) et appelle tes proches en se faisant passer pour toi.",
    example: "Cas réel : une mère américaine a reçu un appel de sa fille qui pleurait et demandait 1 million de dollars de rançon. C'était SA voix — mais c'était un faux créé par IA. Heureusement, elle a vérifié que sa fille allait bien avant de payer. En 2026, près de 50% des arnaques téléphoniques utilisent le clonage de voix par IA.",
    conseil: "Ne décroche jamais un numéro inconnu. Si c'est important, la personne laissera un message. Et crée un \"mot de passe familial\" — un mot secret que seuls tes proches connaissent. L'IA peut copier une voix mais pas deviner un mot secret.",
    stat: '3 sec', statLabel: "pour copier une voix",
  },
  {
    icon: FileText, title: 'Des emails parfaits sans faute',
    color: '#a855f7',
    desc: "Avant, on repérait les phishing grâce aux fautes d'orthographe. Aujourd'hui, 82,6% des emails de phishing contiennent des éléments générés par IA (rapport KnowBe4 2025). L'IA écrit un email de phishing parfait en 5 minutes — contre 16 heures pour un humain. Et les victimes cliquent 60% plus souvent sur un email écrit par IA que sur un email classique (étude Oxford).",
    example: "\"Bonjour M. Dupont, suite à votre achat Amazon du 15 avril, nous avons détecté une connexion depuis Bucarest. Confirmez votre identité sous 48h.\" — Zéro faute, contexte crédible, personnalisé avec tes vraies habitudes d'achat (grâce aux fuites de données).",
    conseil: "Même si l'email est parfait, vérifie toujours l'adresse de l'expéditeur. Et ne clique jamais sur un lien dans un email — va directement sur le site officiel en tapant l'adresse toi-même.",
    stat: '82,6%', statLabel: "des emails phishing contiennent de l'IA",
  },
  {
    icon: Video, title: 'Fausses vidéos en direct (Deepfake)',
    color: '#06b6d4',
    desc: "L'IA peut créer une fausse vidéo d'une personne EN TEMPS RÉEL. En janvier 2024, un employé de l'entreprise Arup (Hong Kong) a participé à une visioconférence avec son directeur financier et ses collègues. Tout semblait normal — sauf que TOUTES les personnes à l'écran étaient des deepfakes créés par IA.",
    example: "L'employé pensait parler à ses vrais collègues en visio. Il a fait 15 virements pour un total de 25 millions de dollars. En mars 2025, un autre cas à Singapour : 499 000$ volés de la même façon. Ferrari a aussi été ciblé, mais l'arnaque a été détectée à temps. Les fraudes par deepfake ont augmenté de +700% aux États-Unis en 2025.",
    conseil: "En cas de demande urgente de virement en visio, raccrochez et rappelez la personne directement sur son numéro habituel. Posez une question personnelle que seul votre collègue peut connaître.",
    stat: '25M$', statLabel: 'volés par deepfake vidéo',
  },
]

const attacksFrance = [
  {
    date: 'Mars 2024', target: 'France Travail (Pôle Emploi)', type: 'Données volées par phishing',
    impact: '43 millions de personnes touchées — noms, numéros de sécu, emails, téléphones, adresses. 20 ans de données volées d\'un coup.',
    detail: "Des pirates ont volé les identifiants de conseillers Cap Emploi (probablement par phishing). Avec ces accès, ils ont aspiré toute la base de données. 3 suspects de 21-23 ans ont été arrêtés. Et en décembre 2025, France Travail a encore été touché : 1,6 million de jeunes exposés via les Missions Locales.",
    color: '#dc2626',
    source: 'https://www.francetravail.org/',
    sourceLabel: 'France Travail',
  },
  {
    date: 'Fév. 2024', target: 'Viamedis & Almerys (Mutuelles)', type: 'Fuite de données de santé',
    impact: '33 millions de personnes exposées — état civil, numéro de sécu, nom de la mutuelle, garanties du contrat santé.',
    detail: "Des pirates ont volé les identifiants de professionnels de santé pour accéder aux plateformes de tiers payant. Ça veut dire que les données médicales d'1 Français sur 2 ont été exposées. La CNIL a ouvert une enquête.",
    color: '#ef4444',
    source: 'https://www.cnil.fr/',
    sourceLabel: 'CNIL',
  },
  {
    date: 'Oct. 2024', target: 'Free (Opérateur)', type: 'Vol de données clients',
    impact: '19,2 millions de clients touchés + 5 millions de coordonnées bancaires (IBAN) volées.',
    detail: "Les pirates ont attaqué un outil interne de gestion. La CNIL a sanctionné Free de 42 millions d'euros d'amende le 14 janvier 2026 (27M€ Free Mobile + 15M€ Free). C'est la plus grosse amende CNIL de 2026.",
    color: '#f97316',
    source: 'https://www.cnil.fr/',
    sourceLabel: 'CNIL — 42M€ d\'amende',
  },
  {
    date: 'Avril 2024', target: 'Hôpital de Cannes', type: 'Ransomware après phishing',
    impact: "Données de patients publiées sur le dark web, opérations annulées, hôpital paralysé pendant des semaines.",
    detail: "Un employé a cliqué sur un lien dans un email piégé → ça a installé un virus (ransomware LockBit) qui a bloqué tout le système informatique de l'hôpital. Les pirates ont demandé une rançon, mais l'hôpital a refusé de payer (comme le recommande l'ANSSI). Résultat : 61 Go de données publiées (bilans de santé, cartes d'identité, RIB).",
    color: '#a855f7',
    source: 'https://cyberveille.esante.gouv.fr/',
    sourceLabel: 'CERT Santé',
  },
  {
    date: '2025', target: 'Cegedim Santé', type: 'Fuite de données médicales',
    impact: '15 millions de dossiers patients exposés — une des plus grosses fuites de données de santé en France.',
    detail: "Cegedim est un éditeur de logiciels médicaux utilisé par des milliers de médecins et pharmacies en France. La fuite a touché des données très sensibles (dossiers médicaux, ordonnances, diagnostics).",
    color: '#10b981',
    source: 'https://www.cybermalveillance.gouv.fr/',
    sourceLabel: 'Cybermalveillance',
  },
  {
    date: '2025', target: 'EduConnect (Éducation Nationale)', type: 'Comptes scolaires piratés',
    impact: '3,5 millions de comptes élèves compromis — noms, classes, établissements, emails des parents.',
    detail: "EduConnect est le portail utilisé par les élèves et parents pour accéder aux notes, à Pronote, etc. Des pirates ont récupéré les identifiants par phishing et les ont revendus. Ça peut servir ensuite à cibler les parents avec des arnaques personnalisées.",
    color: '#3b82f6',
    source: 'https://www.education.gouv.fr/',
    sourceLabel: 'Éducation Nationale',
  },
]

const statistics = [
  { value: '504 000', label: 'victimes aidées en 2025', detail: '+20% par rapport à 2024 sur Cybermalveillance', color: '#f59e0b', source: 'Rapport Cybermalveillance 2025' },
  { value: '108 000', label: 'demandes pour phishing', detail: '+70% en un an — le phishing explose', color: '#ef4444', source: 'Cybermalveillance 2025' },
  { value: '+2 500%', label: "d'arnaques par SMS", detail: 'Hausse des SMS frauduleux en 2025', color: '#06b6d4', source: 'Proofpoint 2025' },
  { value: '82,6%', label: 'des phishing utilisent l\'IA', detail: 'Emails écrits ou améliorés par l\'IA', color: '#a855f7', source: 'KnowBe4 2025' },
  { value: '245M€', label: 'volés par faux conseillers', detail: 'Arnaque au faux conseiller bancaire en France', color: '#dc2626', source: 'SFPF 2025' },
  { value: '+700%', label: 'de fraudes par deepfake', detail: 'Augmentation aux USA en 2025', color: '#10b981', source: 'BrightDefense 2025' },
]

const protections = [
  {
    icon: PhoneOff, title: 'Ne décroche pas les inconnus', color: '#ef4444',
    desc: "Un numéro inconnu t'appelle ? Ne décroche pas. Si c'est important, la personne laissera un message. Ça empêche le clonage de ta voix par IA.",
    tag: 'VOIX',
  },
  {
    icon: Key, title: 'Crée un mot de passe familial', color: '#f59e0b',
    desc: "Choisis un mot secret que seuls tes proches connaissent. Si quelqu'un t'appelle en urgence avec la voix d'un proche, demande-lui le mot secret. L'IA peut copier une voix mais pas deviner ce mot.",
    tag: 'FAMILLE',
  },
  {
    icon: Lock, title: 'Active la double authentification (MFA)', color: '#06b6d4',
    desc: "Active le code par SMS ou par application (Google Authenticator, Microsoft Authenticator) sur tous tes comptes importants : email, banque, réseaux sociaux. Même si ton mot de passe est volé, le pirate ne pourra pas se connecter.",
    tag: 'COMPTES',
  },
  {
    icon: Eye, title: "Vérifie TOUJOURS l'expéditeur", color: '#a855f7',
    desc: "Ne regarde pas le nom affiché — regarde l'adresse email complète. Et ne clique jamais sur un lien dans un email ou SMS. Va directement sur le site officiel en tapant l'adresse toi-même dans ton navigateur.",
    tag: 'EMAILS',
  },
  {
    icon: Ban, title: "Ne donne JAMAIS tes codes", color: '#dc2626',
    desc: "Aucune banque, aucune administration ne te demandera ton mot de passe, ton code de carte bancaire ou ton numéro de sécu par email, SMS ou téléphone. Si on te le demande, c'est une arnaque. Point.",
    tag: 'RÈGLE D\'OR',
  },
  {
    icon: Megaphone, title: 'Signale les arnaques', color: '#10b981',
    desc: "Email suspect → signal-spam.fr | SMS suspect → transfère-le au 33700 | Site frauduleux → internet-signalement.gouv.fr | Arnaque téléphonique → 0 805 805 817 (Info Escroqueries, gratuit)",
    tag: 'SIGNALEMENT',
  },
]

const nouvelleLoi = {
  title: 'Loi anti-spoofing — 1er janvier 2026',
  desc: "Depuis le 1er janvier 2026, les appels venant de l'étranger avec un faux numéro français s'affichent désormais \"numéro masqué\". C'est une nouvelle loi pour lutter contre l'usurpation de numéro (+517% en 2025). Mais attention : ça ne bloque pas les arnaques depuis la France.",
  source: 'Loi française anti-spoofing',
}

const officialSources = [
  { name: 'Cybermalveillance.gouv.fr', desc: "Le site du gouvernement pour aider les victimes — 504 000 demandes en 2025", badge: 'GOV', color: '#06b6d4', url: 'https://www.cybermalveillance.gouv.fr/' },
  { name: 'ANSSI', desc: "L'agence gouvernementale de cybersécurité — 3 586 événements traités en 2025", badge: 'GOV', color: '#3b82f6', url: 'https://cyber.gouv.fr/' },
  { name: 'CERT-FR', desc: "L'équipe d'alerte et réponse aux cyberattaques en France — alertes 24h/24", badge: 'CERT', color: '#10b981', url: 'https://www.cert.ssi.gouv.fr/' },
  { name: 'CNIL', desc: "L'autorité qui protège nos données personnelles — amendes, enquêtes RGPD", badge: 'RGPD', color: '#a855f7', url: 'https://www.cnil.fr/' },
  { name: 'Signal Spam', desc: 'Pour signaler les emails frauduleux directement depuis ton navigateur', badge: 'SPAM', color: '#f59e0b', url: 'https://www.signal-spam.fr/' },
  { name: '33700', desc: 'Pour signaler les SMS frauduleux — transfère le SMS au 33700', badge: 'SMS', color: '#ef4444', url: 'https://www.33700.fr/' },
]

export default function Veille() {
  const [openAttack, setOpenAttack] = useState(null)
  const [openAi, setOpenAi] = useState(0)

  return (
    <section id="veille" className="relative dots-bg" style={{ paddingTop: '12rem', paddingBottom: '10rem' }}>
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ═══════════ HEADER ═══════════ */}
        <div className="text-center" style={{ marginBottom: '8rem' }}>
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
            fontSize: '17px', fontWeight: 500, color: '#94a3b8',
            lineHeight: 2, maxWidth: '700px', letterSpacing: '0.01em',
          }}>
            Un escroc se fait passer pour quelqu'un de confiance — ta banque, La Poste, les impôts — pour te voler tes données. En 2025, <strong style={{ color: '#ef4444' }}>504 000 victimes</strong> en France. Avec <strong style={{ color: '#a855f7' }}>l'intelligence artificielle</strong>, ces arnaques sont devenues quasi indétectables.
          </p>
        </div>

        {/* ═══════════ ALERTE ACTUALITÉ ═══════════ */}
        <div className="rounded-2xl overflow-hidden mb-16" style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.2)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #ef4444, #f59e0b, #a855f7)' }} />
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 800,
                color: '#ef4444', background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)',
                padding: '4px 12px', borderRadius: '6px', letterSpacing: '0.1em',
              }}>ACTUALITÉ 2025-2026</span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#cbd5e1', lineHeight: 2 }}>
              <strong style={{ color: '#ef4444' }}>108 000 demandes d'aide pour phishing en 2025</strong> (+70% en 1 an). L'IA permet de <strong style={{ color: '#a855f7' }}>cloner une voix en 3 secondes</strong>, d'écrire des emails <strong style={{ color: '#a855f7' }}>sans aucune faute</strong>, et de créer des <strong style={{ color: '#06b6d4' }}>fausses vidéos en direct</strong>. En France, les données de <strong style={{ color: '#dc2626' }}>plus de 100 millions de comptes</strong> ont été exposées en 2024-2025 (France Travail, Free, Viamedis, Cegedim, EduConnect...).
            </p>
          </div>
        </div>

        {/* ═══════════ SOMMAIRE ═══════════ */}
        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(99,102,241,0.2)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #6366f1, #06b6d4, #f59e0b, #ef4444, #a855f7, #10b981)' }} />
          <div className="p-10 md:p-12">
            <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.1rem', fontWeight: 800, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '2.5rem' }}>
              Plan de la Veille — 9 parties
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 stagger-grid">
              {sommaire.map((s) => (
                <div key={s.num} className="card-holo flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: `${s.color}08`, border: `1px solid ${s.color}15` }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 800, color: s.color }}>{s.num}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: '#cbd5e1' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════ 01 — C'EST QUOI LA VEILLE ? ═══════════ */}
        <SectionHeading
          num="01" icon={BookOpen}
          title="C'est quoi la Veille ?"
          subtitle="Se tenir informé des nouvelles menaces pour mieux protéger les utilisateurs et les systèmes."
          color="#06b6d4"
          gradient="linear-gradient(135deg, #ffffff 0%, #06b6d4 60%, #3b82f6 100%)"
        />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(6,182,212,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)' }} />
          <div className="p-10 md:p-14">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', color: '#cbd5e1', lineHeight: 2.2, marginBottom: '3rem' }}>
              La <strong style={{ color: '#06b6d4' }}>veille technologique</strong>, c'est <strong style={{ color: '#22d3ee' }}>surveiller en continu</strong> les nouvelles menaces, les nouvelles arnaques et les outils pour s'en protéger. En tant qu'étudiant BTS SIO SISR, cette veille me permet de rester à jour pour protéger les systèmes et les utilisateurs. J'ai choisi le <strong style={{ color: '#f59e0b' }}>phishing</strong> parce que c'est la <strong style={{ color: '#f59e0b' }}>menace n°1 en France</strong> et qu'elle touche tout le monde au quotidien.
            </p>
            <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1rem', fontWeight: 800, color: '#06b6d4', letterSpacing: '0.08em', marginBottom: '2rem' }}>
              Ma méthode en 4 étapes
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { num: '01', title: 'Je collecte', desc: "Je m'inscris aux alertes de l'ANSSI et du CERT-FR. Je consulte Cybermalveillance.gouv.fr pour les nouvelles arnaques.", color: '#06b6d4' },
                { num: '02', title: 'Je trie', desc: "Je sélectionne ce qui concerne mon BTS SIO SISR : phishing, fuites de données, nouvelles techniques d'attaque.", color: '#3b82f6' },
                { num: '03', title: "J'analyse", desc: "J'étudie les rapports officiels (ANSSI 2025 : 3 586 événements) pour comprendre les attaques et leurs impacts.", color: '#8b5cf6' },
                { num: '04', title: 'Je documente', desc: "Je rédige une synthèse claire avec des exemples concrets et des sources vérifiées pour mon portfolio.", color: '#a855f7' },
              ].map((step, i) => (
                <div key={i} className="rounded-xl p-6 text-center" style={{ background: 'rgba(0,0,0,0.3)', border: `1px solid ${step.color}20` }}>
                  <div className="flex items-center justify-center mx-auto mb-4" style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: `${step.color}15`, border: `1px solid ${step.color}30`,
                  }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', fontWeight: 800, color: step.color }}>{step.num}</span>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 800, color: step.color, marginBottom: '0.8rem' }}>{step.title}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#94a3b8', lineHeight: 1.8 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════ 02 — C'EST QUOI LE PHISHING ? ═══════════ */}
        <SectionHeading
          num="02" icon={AlertTriangle}
          title="C'est quoi le Phishing ?"
          subtitle="L'arnaque la plus courante sur internet — et comment elle fonctionne en 3 étapes."
          color="#f59e0b"
          gradient="linear-gradient(135deg, #ffffff 0%, #f59e0b 50%, #ef4444 100%)"
        />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(245,158,11,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #f59e0b, #ef4444, #a855f7)' }} />
          <div className="p-10 md:p-14">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', color: '#cbd5e1', lineHeight: 2.2, marginBottom: '3rem' }}>
              Le <strong style={{ color: '#f59e0b' }}>phishing</strong> (hameçonnage en français), c'est quand un escroc <strong style={{ color: '#ef4444' }}>se fait passer pour un organisme de confiance</strong> — banque, impôts, Ameli, La Poste — pour te voler tes <strong style={{ color: '#ef4444' }}>mots de passe ou données bancaires</strong>. C'est la menace n°1 en France : <strong style={{ color: '#10b981' }}>108 000 demandes d'aide</strong> rien qu'en 2025, soit +70% en un an.
            </p>

            <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1rem', fontWeight: 800, color: '#f59e0b', letterSpacing: '0.08em', marginBottom: '2.5rem' }}>
              Comment ça marche — en 3 étapes
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 text-center" style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.15)' }}>
                <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.5rem', fontWeight: 900, color: '#f59e0b', marginBottom: '0.5rem' }}>1</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.5rem' }}>L'escroc prépare le piège</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#94a3b8', lineHeight: 1.8 }}>Il crée un faux email, SMS ou site web qui ressemble au vrai</p>
              </div>
              <div className="rounded-xl p-6 text-center" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)' }}>
                <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.5rem', fontWeight: 900, color: '#ef4444', marginBottom: '0.5rem' }}>2</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.5rem' }}>La victime se fait piéger</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#94a3b8', lineHeight: 1.8 }}>Elle clique sur le lien et entre son mot de passe ou ses données bancaires</p>
              </div>
              <div className="rounded-xl p-6 text-center" style={{ background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.15)' }}>
                <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.5rem', fontWeight: 900, color: '#a855f7', marginBottom: '0.5rem' }}>3</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.5rem' }}>L'escroc vole tout</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#94a3b8', lineHeight: 1.8 }}>Il utilise les identifiants pour vider le compte ou revendre les données</p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════ 03 — LES 8 FORMES ═══════════ */}
        <SectionHeading
          num="03" icon={Shield}
          title="Les 8 Formes de Phishing"
          subtitle="Le phishing ne passe pas que par email — il existe 8 façons de se faire piéger."
          color="#ef4444"
          gradient="linear-gradient(135deg, #ffffff 0%, #ef4444 50%, #f59e0b 100%)"
        />

        <div className="flex flex-col gap-10">
          {phishingTypes.map((t, i) => (
            <div key={i} className="card-holo rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: 'rgba(10,15,30,0.9)', border: `1px solid ${t.color}25` }}
            >
              <div style={{ height: '4px', background: `linear-gradient(90deg, ${t.color}, ${t.color}60, transparent)` }} />
              <div className={`grid ${t.image ? 'md:grid-cols-5' : ''} gap-0`}>

                {/* Contenu principal — 3 colonnes */}
                <div className={`${t.image ? 'md:col-span-3' : ''} p-8 md:p-10`}>
                  {/* En-tête : numéro + titre + icône */}
                  <div className="flex items-center gap-5 mb-6">
                    <div style={{
                      width: '64px', height: '64px', borderRadius: '18px',
                      background: `linear-gradient(135deg, ${t.color}20, ${t.color}08)`,
                      border: `2px solid ${t.color}40`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: `0 0 25px ${t.color}15`,
                      flexShrink: 0,
                    }}>
                      <span style={{
                        fontFamily: "'Orbitron', system-ui, sans-serif",
                        fontSize: '24px', fontWeight: 900, color: t.color,
                      }}>{t.num}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <t.icon size={20} style={{ color: t.color }} />
                        <h4 style={{
                          fontFamily: "'Orbitron', system-ui, sans-serif",
                          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                          fontWeight: 800, color: '#e2e8f0', letterSpacing: '0.02em',
                        }}>
                          {t.title}
                        </h4>
                      </div>
                      {t.stat && (
                        <div className="flex items-center gap-2 mt-2">
                          <span style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '18px', fontWeight: 900, color: t.color,
                          }}>{t.stat}</span>
                          <span style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '12px', color: '#64748b', fontWeight: 500,
                          }}>{t.statLabel}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontFamily: "'Inter', sans-serif", fontSize: '15px',
                    color: '#cbd5e1', lineHeight: 2, marginBottom: '1.2rem',
                  }}>
                    {t.desc}
                  </p>

                  {/* Conseil pratique */}
                  {t.tip && (
                    <div className="rounded-lg flex items-start gap-3" style={{
                      padding: '12px 16px', marginBottom: '1.5rem',
                      background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)',
                    }}>
                      <ShieldCheck size={16} style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }} />
                      <p style={{
                        fontFamily: "'Inter', sans-serif", fontSize: '14px',
                        fontWeight: 600, color: '#10b981', lineHeight: 1.8,
                      }}>
                        {t.tip}
                      </p>
                    </div>
                  )}

                  {/* Exemples */}
                  <div>
                    <p style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '11px', fontWeight: 700, color: t.color,
                      letterSpacing: '0.12em', marginBottom: '0.8rem',
                    }}>
                      EXEMPLES COURANTS
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {t.examples.map((ex, j) => (
                        <span key={j} className="flex items-center gap-2" style={{
                          fontSize: '13px', fontWeight: 600, color: '#e2e8f0',
                          background: `${t.color}10`, border: `1px solid ${t.color}25`,
                          padding: '7px 14px', borderRadius: '10px',
                        }}>
                          <span style={{ color: t.color, fontSize: '10px' }}>●</span>
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image — 2 colonnes */}
                {t.image && (
                  <div className="md:col-span-2 relative" style={{ minHeight: '260px' }}>
                    <img src={t.image} alt={t.imageLabel} style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      borderLeft: '1px solid rgba(255,255,255,0.04)',
                    }} />
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      padding: '12px 16px',
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
                    }}>
                      <p style={{
                        fontFamily: "'Inter', sans-serif", fontSize: '12px',
                        fontWeight: 700, color: t.color,
                      }}>
                        {t.imageLabel}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ═══════════ 04 — COMMENT LE REPÉRER ═══════════ */}
        <SectionHeading
          num="04" icon={Eye}
          title="Comment repérer un Phishing ?"
          subtitle="5 signes qui montrent que c'est une arnaque — avec un exemple concret."
          color="#dc2626"
          gradient="linear-gradient(135deg, #ffffff 0%, #dc2626 60%, #f59e0b 100%)"
        />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(220,38,38,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #dc2626, #f59e0b, #ef4444)' }} />
          <div className="p-10 md:p-14">
            {/* Faux email démo */}
            <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1rem', fontWeight: 800, color: '#dc2626', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
              Voici un faux email — repère les pièges
            </p>
            <div className="rounded-xl overflow-hidden mb-12" style={{ border: '1px solid rgba(245,158,11,0.2)' }}>
              <div className="flex items-center gap-2 px-6 py-4" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex gap-1.5">
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                </div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#475569', marginLeft: '8px' }}>Email frauduleux — tous les pièges sont annotés</span>
              </div>
              <div className="p-8">
                <div className="space-y-2 mb-5 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex items-start gap-3 flex-wrap">
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#64748b', minWidth: '35px' }}>De:</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: '#e2e8f0' }}>
                      support@microsft-security.com
                    </span>
                    <span style={{ fontSize: '10px', fontWeight: 700, color: '#ef4444', background: 'rgba(239,68,68,0.15)', padding: '2px 10px', borderRadius: '4px' }}>
                      ⚠ FAUX — il manque le "o" à microsoft
                    </span>
                  </div>
                  <div className="flex items-start gap-3 flex-wrap">
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#64748b', minWidth: '35px' }}>Objet:</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#f59e0b' }}>
                      ⚠️ Urgent : Votre compte sera suspendu sous 24h
                    </span>
                    <span style={{ fontSize: '10px', fontWeight: 700, color: '#f59e0b', background: 'rgba(245,158,11,0.15)', padding: '2px 10px', borderRadius: '4px' }}>
                      ⚠ MET LA PRESSION
                    </span>
                  </div>
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#cbd5e1', lineHeight: 2 }}>
                  <p style={{ marginBottom: '0.8rem' }}>Cher utilisateur, <span style={{ fontSize: '11px', color: '#f97316', marginLeft: '8px' }}>← pas ton vrai nom = message envoyé en masse</span></p>
                  <p style={{ marginBottom: '0.8rem' }}>
                    Votre compte sera <strong style={{ color: '#ef4444' }}>définitivement suspendu</strong> si vous ne vérifiez pas votre identité dans les <strong style={{ color: '#f59e0b' }}>24 prochaines heures</strong>.
                  </p>
                  <div style={{
                    display: 'inline-block', padding: '10px 28px', borderRadius: '8px',
                    background: 'rgba(239,68,68,0.15)', border: '2px dashed rgba(239,68,68,0.4)',
                    color: '#ef4444', fontSize: '13px', fontWeight: 700, marginBottom: '0.5rem',
                    position: 'relative',
                  }}>
                    🔗 Vérifier mon compte
                    <span style={{
                      position: 'absolute', top: '-10px', right: '-10px',
                      fontSize: '9px', fontWeight: 800, color: '#fff', background: '#ef4444',
                      padding: '2px 6px', borderRadius: '4px',
                    }}>PIÈGE</span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#ef4444', fontFamily: "'JetBrains Mono', monospace", marginTop: '0.3rem' }}>
                    → Le vrai lien caché : http://microsft-security.phishing-kit.ru/login — c'est un site russe !
                  </p>
                </div>
              </div>
            </div>

            <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1rem', fontWeight: 800, color: '#dc2626', letterSpacing: '0.08em', marginBottom: '2rem' }}>
              Les 5 signaux d'alerte
            </p>
            <div className="space-y-4">
              {redFlags.map((rf, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: `${rf.color}06`, border: `1px solid ${rf.color}15` }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: rf.color, marginBottom: '0.5rem' }}>
                    ⚠ {i + 1}. {rf.flag}
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#94a3b8', lineHeight: 1.9 }}>
                    {rf.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════ 05 — L'IA ET LE PHISHING ═══════════ */}
        <SectionHeading
          num="05" icon={Brain}
          title="L'IA rend le Phishing plus dangereux"
          subtitle="3 nouvelles techniques utilisées par les escrocs grâce à l'intelligence artificielle."
          color="#a855f7"
          gradient="linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #ef4444 100%)"
        />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(168,85,247,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #a855f7, #ef4444, #06b6d4)' }} />
          <div className="p-10 md:p-14">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', color: '#cbd5e1', lineHeight: 2.2, marginBottom: '3rem' }}>
              Avant, on repérait un phishing grâce aux <strong style={{ color: '#64748b' }}>fautes d'orthographe</strong>. C'est fini. Aujourd'hui l'IA peut <strong style={{ color: '#a855f7' }}>écrire des messages parfaits</strong>, <strong style={{ color: '#ef4444' }}>copier ta voix en 3 secondes</strong>, et même <strong style={{ color: '#06b6d4' }}>créer de fausses vidéos en direct</strong>. Voici les 3 nouvelles armes des escrocs.
            </p>

            {/* AI threat tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              {aiThreats.map((threat, i) => (
                <button key={i} onClick={() => setOpenAi(i)}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all"
                  style={{
                    background: openAi === i ? `${threat.color}15` : 'rgba(0,0,0,0.2)',
                    border: `1px solid ${openAi === i ? `${threat.color}40` : 'rgba(255,255,255,0.06)'}`,
                    cursor: 'pointer', fontSize: '15px', fontWeight: 700,
                    color: openAi === i ? threat.color : '#94a3b8',
                  }}
                >
                  <threat.icon size={18} />
                  {threat.title}
                </button>
              ))}
            </div>

            {(() => {
              const t = aiThreats[openAi]
              return (
                <div className="rounded-xl p-9" style={{ background: 'rgba(0,0,0,0.3)', border: `1px solid ${t.color}25` }}>
                  <div className="flex items-center gap-4 mb-6">
                    <div style={{
                      width: '50px', height: '50px', borderRadius: '14px',
                      background: `${t.color}12`, border: `1px solid ${t.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <t.icon size={24} style={{ color: t.color }} />
                    </div>
                    <div className="flex-1">
                      <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: 800, color: '#e2e8f0' }}>
                        {t.title}
                      </h4>
                    </div>
                    <div className="text-right">
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '16px', fontWeight: 800, color: t.color }}>{t.stat}</span>
                      <p style={{ fontSize: '12px', color: '#64748b' }}>{t.statLabel}</p>
                    </div>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#cbd5e1', lineHeight: 2, marginBottom: '1.5rem' }}>
                    {t.desc}
                  </p>
                  <div className="rounded-lg p-5 mb-5" style={{ background: `${t.color}06`, border: `1px solid ${t.color}15` }}>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 700, color: t.color, marginBottom: '0.5rem', letterSpacing: '0.1em' }}>
                      CAS RÉEL
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#e2e8f0', lineHeight: 1.9, fontStyle: 'italic' }}>
                      {t.example}
                    </p>
                  </div>
                  <div className="rounded-lg p-5" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)' }}>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 700, color: '#10b981', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>
                      COMMENT SE PROTÉGER
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#94a3b8', lineHeight: 1.9 }}>
                      {t.conseil}
                    </p>
                  </div>
                </div>
              )
            })()}

            {/* Avant / Après l'IA */}
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="rounded-xl p-8" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(100,116,139,0.2)' }}>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 700, color: '#64748b', letterSpacing: '0.1em', marginBottom: '1.2rem' }}>
                  AVANT — Facile à repérer
                </p>
                <div className="rounded-lg p-5" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#94a3b8', lineHeight: 1.9, fontStyle: 'italic' }}>
                    "Cher clien, nous avon detecte une probleme sur votre comptes. Cliquer ici pour verifier sinon votre compte sera bloquer."
                  </p>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#64748b', marginTop: '1rem' }}>
                  ❌ Plein de fautes → tu vois tout de suite que c'est faux
                </p>
              </div>
              <div className="rounded-xl p-8" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(239,68,68,0.2)' }}>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 700, color: '#ef4444', letterSpacing: '0.1em', marginBottom: '1.2rem' }}>
                  AUJOURD'HUI AVEC L'IA — Quasi impossible à repérer
                </p>
                <div className="rounded-lg p-5" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#cbd5e1', lineHeight: 1.9, fontStyle: 'italic' }}>
                    "Bonjour M. Dupont, suite à votre achat du 15 avril sur Amazon, nous avons détecté une connexion depuis Bucarest. Veuillez confirmer votre identité sous 48h."
                  </p>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#ef4444', marginTop: '1rem' }}>
                  ⚠ Zéro faute + personnalisé + contexte crédible → très dangereux
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════ 06 — ATTAQUES EN FRANCE ═══════════ */}
        <SectionHeading
          num="06" icon={AlertTriangle}
          title="Les Grosses Attaques en France (2024-2025)"
          subtitle="Les cyberattaques qui ont touché des millions de Français — la plupart commencent par du phishing."
          color="#dc2626"
          gradient="linear-gradient(135deg, #ffffff 0%, #dc2626 50%, #a855f7 100%)"
        />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(220,38,38,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #dc2626, #ef4444, #f97316, #a855f7)' }} />
          <div className="p-10 md:p-14">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', color: '#cbd5e1', lineHeight: 2.2, marginBottom: '2.5rem' }}>
              En 2024-2025, <strong style={{ color: '#ef4444' }}>plus de 100 millions de comptes français</strong> ont été compromis. La plupart de ces attaques ont commencé de la même façon : un employé a cliqué sur un lien piégé ou donné ses identifiants par erreur. En 2025, <strong style={{ color: '#f59e0b' }}>43% des petites entreprises</strong> ont été victimes d'une cyberattaque.
            </p>
            <div className="space-y-5">
              {attacksFrance.map((atk, i) => (
                <div key={i}>
                  <button
                    className="w-full flex items-center gap-6 px-7 py-6 rounded-xl transition-all text-left"
                    style={{
                      background: openAttack === i ? `${atk.color}08` : 'rgba(0,0,0,0.2)',
                      border: `1px solid ${openAttack === i ? `${atk.color}30` : 'rgba(255,255,255,0.06)'}`,
                      cursor: 'pointer',
                    }}
                    onClick={() => setOpenAttack(openAttack === i ? null : i)}
                  >
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 700,
                      color: atk.color, background: `${atk.color}15`, border: `1px solid ${atk.color}30`,
                      padding: '4px 12px', borderRadius: '6px', flexShrink: 0, minWidth: '95px', textAlign: 'center',
                    }}>{atk.date}</span>
                    <div className="flex-1 min-w-0">
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.3rem' }}>{atk.target}</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#64748b' }}>{atk.type}</p>
                    </div>
                    <ChevronDown size={16} style={{ color: '#475569', transform: openAttack === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }} />
                  </button>
                  {openAttack === i && (
                    <div className="mx-5 px-6 py-5 rounded-b-xl" style={{ background: 'rgba(0,0,0,0.3)', borderTop: `1px solid ${atk.color}15` }}>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#cbd5e1', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                        <strong style={{ color: atk.color }}>Ce qui s'est passé :</strong> {atk.impact}
                      </p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#94a3b8', lineHeight: 1.9, marginBottom: '1rem' }}>{atk.detail}</p>
                      <a href={atk.source} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold"
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

        {/* ═══════════ 07 — CHIFFRES CLÉS ═══════════ */}
        <SectionHeading
          num="07" icon={TrendingUp}
          title="Les Chiffres Clés 2025"
          subtitle="Les statistiques les plus récentes — pour comprendre l'ampleur du problème."
          color="#06b6d4"
          gradient="linear-gradient(135deg, #ffffff 0%, #06b6d4 60%, #10b981 100%)"
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 stagger-grid">
          {statistics.map((stat, i) => (
            <div key={i} className="card-holo rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: 'rgba(10,15,30,0.85)', border: `1px solid ${stat.color}20` }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${stat.color}40`}
              onMouseLeave={e => e.currentTarget.style.borderColor = `${stat.color}20`}
            >
              <div style={{ height: '3px', background: stat.color }} />
              <div className="p-8 md:p-10 text-center">
                <p style={{
                  fontFamily: "'Orbitron', system-ui, sans-serif",
                  fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
                  fontWeight: 900, color: stat.color, marginBottom: '0.8rem', lineHeight: 1,
                }}>{stat.value}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.5rem' }}>{stat.label}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>{stat.detail}</p>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#334155', marginTop: '0.8rem' }}>{stat.source}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ═══════════ 08 — COMMENT SE PROTÉGER ═══════════ */}
        <SectionHeading
          num="08" icon={ShieldCheck}
          title="Comment se Protéger ?"
          subtitle="6 réflexes simples et efficaces pour ne pas se faire piéger."
          color="#10b981"
          gradient="linear-gradient(135deg, #ef4444 0%, #f59e0b 40%, #10b981 100%)"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 stagger-grid">
          {protections.map((p, i) => (
            <div key={i} className="card-holo rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: 'rgba(10,15,30,0.85)', border: `1px solid ${p.color}20` }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = `${p.color}40` }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = `${p.color}20` }}
            >
              <div style={{ height: '3px', background: p.color }} />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '14px',
                    background: `${p.color}12`, border: `1px solid ${p.color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <p.icon size={22} style={{ color: p.color }} />
                  </div>
                  <span style={{
                    fontSize: '10px', fontWeight: 800, color: p.color,
                    background: `${p.color}12`, border: `1px solid ${p.color}25`,
                    padding: '3px 10px', borderRadius: '4px',
                  }}>{p.tag}</span>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.8rem' }}>{p.title}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#94a3b8', lineHeight: 1.9 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nouvelle loi */}
        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(59,130,246,0.04)', border: '1px solid rgba(59,130,246,0.2)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #3b82f6, #06b6d4)' }} />
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle size={20} style={{ color: '#3b82f6' }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 800, color: '#3b82f6', letterSpacing: '0.1em' }}>NOUVELLE LOI</span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.8rem' }}>{nouvelleLoi.title}</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#94a3b8', lineHeight: 1.9 }}>{nouvelleLoi.desc}</p>
          </div>
        </div>

        {/* ═══════════ 09 — SOURCES ═══════════ */}
        <SectionHeading
          num="09" icon={Globe}
          title="Mes Sources Officielles"
          subtitle="Les sites du gouvernement et les organismes officiels que j'utilise pour ma veille."
          color="#3b82f6"
          gradient="linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #06b6d4 100%)"
        />

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(59,130,246,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #3b82f6, #06b6d4, #10b981)' }} />
          <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
            {officialSources.map((src, i) => (
              <a key={i} href={src.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-6 px-8 py-7 transition-all"
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
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>{src.desc}</p>
                </div>
                <ExternalLink size={14} style={{ color: '#334155', flexShrink: 0 }} />
              </a>
            ))}
          </div>
        </div>

        {/* Rapports PDF */}
        <div className="grid sm:grid-cols-2 gap-8 mt-14">
          {[
            { title: 'Panorama de la cybermenace 2025', org: 'ANSSI — publié le 11 mars 2026', url: 'https://www.cert.ssi.gouv.fr/cti/CERTFR-2026-CTI-002/', color: '#3b82f6' },
            { title: "Rapport d'activité 2025", org: 'Cybermalveillance.gouv.fr — publié mars 2026', url: 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/rapport-activite-2025', color: '#06b6d4' },
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
        <div className="mt-40 rounded-2xl overflow-hidden" style={{ background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.2)' }}>
          <div style={{ height: '4px', background: 'linear-gradient(90deg, #f59e0b, #ef4444, #a855f7, #06b6d4, #10b981)' }} />
          <div className="p-12 md:p-16">
          <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.2rem', fontWeight: 900, color: '#f59e0b', letterSpacing: '0.08em', marginBottom: '2.5rem' }}>
            Ce qu'il faut retenir
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="rounded-xl p-6" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)' }}>
              <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.5rem', fontWeight: 900, color: '#ef4444', marginBottom: '0.5rem' }}>108 000</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#cbd5e1', lineHeight: 1.8 }}>demandes d'aide pour phishing en 2025 — <strong style={{ color: '#ef4444' }}>+70% en 1 an</strong></p>
            </div>
            <div className="rounded-xl p-6" style={{ background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.15)' }}>
              <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.5rem', fontWeight: 900, color: '#a855f7', marginBottom: '0.5rem' }}>3 sec</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#cbd5e1', lineHeight: 1.8 }}>suffisent à l'IA pour <strong style={{ color: '#a855f7' }}>cloner ta voix</strong> et appeler tes proches</p>
            </div>
            <div className="rounded-xl p-6" style={{ background: 'rgba(220,38,38,0.06)', border: '1px solid rgba(220,38,38,0.15)' }}>
              <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.5rem', fontWeight: 900, color: '#dc2626', marginBottom: '0.5rem' }}>100M+</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#cbd5e1', lineHeight: 1.8 }}>de comptes français compromis en 2024-2025</p>
            </div>
            <div className="rounded-xl p-6" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)' }}>
              <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.5rem', fontWeight: 900, color: '#10b981', marginBottom: '0.5rem' }}>8 formes</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#cbd5e1', lineHeight: 1.8 }}>de phishing : email, SMS, téléphone, QR code, ciblé, président, réseaux sociaux, Wi-Fi</p>
            </div>
          </div>

          <div className="rounded-xl p-6" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)' }}>
            <p style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '0.9rem', fontWeight: 800, color: '#10b981', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Les 3 réflexes essentiels
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                'Ne clique jamais sur un lien dans un email ou SMS',
                'Ne décroche pas les numéros inconnus (clonage de voix)',
                'Active la double authentification sur tous tes comptes',
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '16px', fontWeight: 900, color: '#10b981' }}>{i + 1}.</span>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: '#e2e8f0', lineHeight: 1.8 }}>{r}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            {['Phishing 2025', 'Smishing +2500%', 'Clonage de voix IA', 'Deepfake 25M$', 'QR Code +400%', 'France Travail 43M', 'Free 42M€ amende', '504 000 victimes', 'Loi anti-spoofing 2026'].map(tag => (
              <span key={tag} style={{
                fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600,
                color: '#f59e0b', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
                padding: '6px 16px', borderRadius: '8px',
              }}>{tag}</span>
            ))}
          </div>
          </div>
        </div>

        <div className="mt-24 flex flex-wrap items-center justify-between gap-4 px-2">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#475569' }}>
            Veille mise à jour régulièrement — dernière mise à jour : mai 2026
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#475569' }}>
            Sources : ANSSI · CERT-FR · Cybermalveillance.gouv.fr · CNIL · Rapport 2025
          </p>
        </div>

      </div>
    </section>
  )
}
