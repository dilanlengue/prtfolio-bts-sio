import { useState, useEffect, useCallback } from 'react'
import { RefreshCw, ExternalLink, Clock, ChevronDown, Search, Crosshair, Radar, ShieldAlert, KeyRound, Globe, BarChart3, Zap, Lock, ClipboardList, Target, ScanSearch, Waves, FileSearch, ShieldCheck, Flame, ScrollText, KeySquare, Radio, Eye, FolderSearch, FolderArchive, PenTool, FileText } from 'lucide-react'

// ── Données statiques fallback ──────────────────────────────────────────────
const staticHN = [
  { id: 1, title: 'CVE-2024-21413 — Microsoft Outlook RCE critique', url: 'https://nvd.nist.gov/', score: 847, by: 'cert_fr', time: Date.now()/1000 - 7200 },
  { id: 2, title: 'Ransomware LockBit 3.0 — PME françaises ciblées', url: 'https://www.ssi.gouv.fr/', score: 612, by: 'anssi', time: Date.now()/1000 - 18000 },
  { id: 3, title: 'Campagne phishing Microsoft 365 — vol d\'identifiants', url: 'https://www.cybermalveillance.gouv.fr/', score: 534, by: 'cybermalv', time: Date.now()/1000 - 28800 },
  { id: 4, title: 'CVE-2025-0282 — Ivanti Connect Secure RCE non authentifié', url: 'https://nvd.nist.gov/', score: 421, by: 'nvd_nist', time: Date.now()/1000 - 50400 },
  { id: 5, title: 'ANSSI — Recommandation segmentation VLAN pour PME', url: 'https://www.ssi.gouv.fr/', score: 289, by: 'anssi', time: Date.now()/1000 - 86400 },
  { id: 6, title: 'Fuite de données — 33 millions de numéros SS exposés', url: 'https://www.bleepingcomputer.com/', score: 1204, by: 'bleeping', time: Date.now()/1000 - 172800 },
]

const staticGH = [
  { full_name: 'openssl/openssl', description: 'Bibliothèque cryptographie SSL/TLS — standard industriel', stargazers_count: 24800, language: 'C' },
  { full_name: 'projectdiscovery/nuclei', description: 'Scanner de vulnérabilités basé sur templates YAML', stargazers_count: 20100, language: 'Go' },
  { full_name: 'rapid7/metasploit-framework', description: 'Framework de tests de pénétration — référence mondiale', stargazers_count: 33200, language: 'Ruby' },
  { full_name: 'snort3/snort3', description: 'Système de détection d\'intrusion réseau open-source', stargazers_count: 2100, language: 'C++' },
  { full_name: 'Cisco-Talos/ClamAV', description: 'Antivirus open source multiplateforme', stargazers_count: 4300, language: 'C' },
  { full_name: 'suricata-ids/suricata', description: 'Moteur IDS/IPS/NSM haute performance', stargazers_count: 3700, language: 'C' },
]

const langColors = {
  C: '#a78bfa', 'C++': '#34d399', Go: '#22d3ee', Python: '#fbbf24',
  Ruby: '#f87171', JavaScript: '#f59e0b', TypeScript: '#818cf8', Rust: '#fb923c',
  Java: '#f472b6', Shell: '#64748b',
}

const outils = [
  { Icon: Search, name: 'Nessus',     desc: 'Scan de vulnérabilités',    cat: 'Audit',       color: '#22d3ee' },
  { Icon: Waves, name: 'Wireshark',  desc: 'Analyse de trafic réseau',  cat: 'Réseau',      color: '#818cf8' },
  { Icon: Crosshair, name: 'Metasploit', desc: 'Framework pentest',     cat: 'Offensif',    color: '#f87171' },
  { Icon: Radar, name: 'Nmap',       desc: 'Découverte réseau & ports', cat: 'Réseau',      color: '#34d399' },
  { Icon: ShieldAlert, name: 'Snort', desc: 'IDS / IPS open source',   cat: 'Défensif',    color: '#fbbf24' },
  { Icon: KeyRound, name: 'KeePass', desc: 'Gestionnaire mots de passe',cat: 'Auth',        color: '#a78bfa' },
  { Icon: Globe, name: 'Shodan',     desc: 'Reconnaissance IoT/IP',     cat: 'OSINT',       color: '#fb923c' },
  { Icon: BarChart3, name: 'Nagios', desc: 'Supervision infrastructure', cat: 'Supervision', color: '#22d3ee' },
  { Icon: Zap, name: 'ClamAV',       desc: 'Antivirus open source',     cat: 'Défensif',    color: '#34d399' },
  { Icon: Lock, name: 'OpenSSL',     desc: 'Cryptographie & certificats',cat: 'Crypto',      color: '#f472b6' },
  { Icon: ClipboardList, name: 'GLPI', desc: 'Gestion de parc ITIL',    cat: 'ITSM',        color: '#fbbf24' },
  { Icon: Target, name: 'Nuclei',    desc: 'Scanner de vulnérabilités', cat: 'Audit',       color: '#f87171' },
  { Icon: ScanSearch, name: 'Burp Suite', desc: 'Tests applicatifs web', cat: 'Web',        color: '#818cf8' },
  { Icon: FileSearch, name: 'tcpdump', desc: 'Capture paquets CLI',     cat: 'Réseau',      color: '#34d399' },
]

const cats = ['Tous', 'Réseau', 'Audit', 'Défensif', 'Offensif', 'OSINT']

const sources = [
  { name: 'ANSSI',             desc: 'Agence nationale de la sécurité des SI', badge: 'GOV',   color: '#22d3ee', url: 'https://www.ssi.gouv.fr/' },
  { name: 'CERT-FR',           desc: 'Centre de réponse aux incidents',        badge: 'CERT',  color: '#34d399', url: 'https://www.cert.ssi.gouv.fr/' },
  { name: 'CVE Details',       desc: 'Base de données des vulnérabilités',     badge: 'CVE',   color: '#f87171', url: 'https://www.cvedetails.com/' },
  { name: 'BleepingComputer',  desc: 'Actualités cybersécurité',               badge: 'NEWS',  color: '#fbbf24', url: 'https://www.bleepingcomputer.com/' },
  { name: 'NIST NVD',          desc: 'National Vulnerability Database',        badge: 'NVD',   color: '#a78bfa', url: 'https://nvd.nist.gov/' },
  { name: 'Krebs on Security', desc: 'Analyses approfondies, leaks, dark web', badge: 'BLOG',  color: '#f472b6', url: 'https://krebsonsecurity.com/' },
  { name: 'Shodan',            desc: 'Moteur de recherche IoT',                badge: 'TOOL',  color: '#fb923c', url: 'https://www.shodan.io/' },
  { name: 'VirusTotal',        desc: 'Analyse fichiers & URLs',                badge: 'SCAN',  color: '#4ade80', url: 'https://www.virustotal.com/' },
  { name: 'HaveIBeenPwned',    desc: 'Vérification fuites de données',         badge: 'PWND',  color: '#e879f9', url: 'https://haveibeenpwned.com/' },
  { name: 'Cybermalveillance', desc: 'Plateforme nationale d\'assistance',     badge: 'GOV',   color: '#22d3ee', url: 'https://www.cybermalveillance.gouv.fr/' },
  { name: 'OWASP',             desc: 'Sécurité applicative',                   badge: 'OWASP', color: '#818cf8', url: 'https://owasp.org/' },
  { name: 'Exploit-DB',        desc: 'Base d\'exploits publics',              badge: 'EXPL',  color: '#f87171', url: 'https://www.exploit-db.com/' },
  { name: 'PacketStorm',       desc: 'Ressources sécurité offensives',         badge: 'SEC',   color: '#fbbf24', url: 'https://packetstormsecurity.com/' },
  { name: 'Microsoft Security',desc: 'Actualités sécurité Microsoft',          badge: 'BLOG',  color: '#818cf8', url: 'https://www.microsoft.com/security/blog/' },
]

function formatTime(unix) {
  if (!unix) return ''
  const diff = Date.now() / 1000 - unix
  if (diff < 3600) return `${Math.floor(diff / 60)}m`
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`
  return `${Math.floor(diff / 86400)}j`
}

function getDomain(url) {
  try { return new URL(url).hostname.replace('www.', '') }
  catch { return 'news.ycombinator.com' }
}

function formatStars(n) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`
  return String(n)
}

export default function Veille() {
  const [activeCat, setActiveCat] = useState('Tous')
  const [hnStories, setHnStories]   = useState(null)   // null = chargement
  const [ghTrends, setGhTrends]     = useState(null)
  const [hnLoading, setHnLoading]   = useState(false)
  const [ghLoading, setGhLoading]   = useState(false)

  const fetchHN = useCallback(() => {
    setHnLoading(true)
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(r => r.json())
      .then(ids => Promise.all(
        ids.slice(0, 6).map(id =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(r => r.json())
        )
      ))
      .then(stories => setHnStories(stories))
      .catch(() => setHnStories(staticHN))
      .finally(() => setHnLoading(false))
  }, [])

  const fetchGH = useCallback(() => {
    setGhLoading(true)
    fetch('https://api.github.com/search/repositories?q=cybersecurity+security+networking&sort=stars&order=desc&per_page=6')
      .then(r => r.json())
      .then(data => setGhTrends(data.items?.slice(0, 6) || staticGH))
      .catch(() => setGhTrends(staticGH))
      .finally(() => setGhLoading(false))
  }, [])

  useEffect(() => { fetchHN(); fetchGH() }, [fetchHN, fetchGH])

  const filteredOutils = activeCat === 'Tous' ? outils : outils.filter(o => o.cat === activeCat)
  const displayHN = hnStories || staticHN
  const displayGH = ghTrends || staticGH

  return (
    <section id="veille" className="relative" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center" style={{ marginBottom: '28px' }}>
          <h2 className="animate-fade-up" style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#e6ecf8' }}>
            Veille Technologique
          </h2>
          <div style={{ width: '128px', height: '2px', margin: '16px auto 0', background: 'linear-gradient(90deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.45) 24%, rgba(212,175,55,0.85) 50%, rgba(147,51,234,0.55) 76%, rgba(56,189,248,0) 100%)' }} />
          <p className="animate-fade-up mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 500, color: '#c5d3e8', lineHeight: 1.75, maxWidth: '580px', marginTop: '1rem' }}>
            Dashboard live — cybersécurité & réseaux
          </p>
        </div>

        {/* Ligne 1 — HN + GitHub */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">

          {/* Hacker News LIVE */}
          <div className="animate-fade-up rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.9)', border: '1px solid rgba(34,211,238,0.15)' }}>
            <div className="flex items-center gap-2.5 px-5 py-3.5" style={{ background: 'rgba(255,255,255,0.025)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span className="font-bold text-white text-base" style={{ fontFamily: "'Inter', sans-serif" }}>Hacker News</span>
              <span className="px-2.5 py-0.5 rounded text-xs font-bold" style={{ background: 'rgba(248,113,113,0.15)', color: '#f87171', fontFamily: "'Inter', sans-serif" }}>LIVE</span>
              <button
                className="ml-auto transition-all"
                style={{ color: hnLoading ? '#22d3ee' : '#475569' }}
                onClick={fetchHN}
                disabled={hnLoading}
              >
                <RefreshCw size={14} className={hnLoading ? 'animate-spin' : ''} />
              </button>
            </div>
            <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
              {hnStories === null ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-3 px-5 py-3.5">
                    <div className="w-4 h-3 rounded animate-pulse mt-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 rounded animate-pulse" style={{ background: 'rgba(255,255,255,0.06)', width: '80%' }} />
                      <div className="h-2 rounded animate-pulse" style={{ background: 'rgba(255,255,255,0.04)', width: '50%' }} />
                    </div>
                  </div>
                ))
              ) : (
                displayHN.map((story, i) => (
                  <div
                    key={story.id || i}
                    className="flex items-start gap-3 px-5 py-3.5 transition-all"
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <span className="flex-shrink-0 w-5 text-right" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '12px', color: '#334155', marginTop: '2px' }}>
                      {i + 1}.
                    </span>
                    <div className="flex-1 min-w-0">
                      <a
                        href={story.url || `https://news.ycombinator.com/item?id=${story.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block font-semibold leading-snug mb-1 transition-colors"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#e2e8f0' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#22d3ee'}
                        onMouseLeave={e => e.currentTarget.style.color = '#e2e8f0'}
                      >
                        {story.title}
                      </a>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#475569' }}>▲ {story.score || 0}</span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#475569' }}>{story.by}</span>
                        {story.url && <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#475569' }}>{getDomain(story.url)}</span>}
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#334155' }}>
                          <Clock size={10} className="inline mr-0.5" />{formatTime(story.time)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Tendances GitHub */}
          <div className="animate-fade-up rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.9)', border: '1px solid rgba(34,211,238,0.15)', transitionDelay: '0.08s' }}>
            <div className="flex items-center gap-2.5 px-5 py-3.5" style={{ background: 'rgba(255,255,255,0.025)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span className="font-bold text-white text-base" style={{ fontFamily: "'Inter', sans-serif" }}>Tendances GitHub</span>
              <span className="px-2.5 py-0.5 rounded text-xs font-bold" style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8', fontFamily: "'Inter', sans-serif" }}>7J</span>
              <button
                className="ml-auto"
                style={{ color: ghLoading ? '#818cf8' : '#475569' }}
                onClick={fetchGH}
                disabled={ghLoading}
              >
                <RefreshCw size={14} className={ghLoading ? 'animate-spin' : ''} />
              </button>
            </div>
            <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
              {ghTrends === null ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="px-5 py-3.5 space-y-2">
                    <div className="h-3 rounded animate-pulse" style={{ background: 'rgba(255,255,255,0.06)', width: '60%' }} />
                    <div className="h-2 rounded animate-pulse" style={{ background: 'rgba(255,255,255,0.04)', width: '80%' }} />
                  </div>
                ))
              ) : (
                displayGH.map((repo, i) => (
                  <div
                    key={repo.full_name || i}
                    className="px-5 py-3.5 transition-all"
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <a
                        href={`https://github.com/${repo.full_name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold transition-colors"
                        style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '13px', color: '#818cf8' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#a5b4fc'}
                        onMouseLeave={e => e.currentTarget.style.color = '#818cf8'}
                      >
                        {repo.full_name}
                      </a>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#475569' }}>★ {formatStars(repo.stargazers_count)}</span>
                        {repo.language && (
                          <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: `${langColors[repo.language] || '#64748b'}15`, color: langColors[repo.language] || '#64748b', fontFamily: "'Inter', sans-serif" }}>
                            {repo.language}
                          </span>
                        )}
                      </div>
                    </div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#64748b', lineHeight: 1.5 }}>
                      {repo.description}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Ligne 2 — Outils + Sources */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Outils cybersécurité */}
          <div className="animate-fade-up rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.9)', border: '1px solid rgba(34,211,238,0.15)', transitionDelay: '0.12s' }}>
            <div className="flex items-center gap-2.5 px-5 py-3.5" style={{ background: 'rgba(255,255,255,0.025)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span className="font-bold text-white text-base" style={{ fontFamily: "'Inter', sans-serif" }}>Outils cybersécurité</span>
              <span className="px-2.5 py-0.5 rounded text-xs font-bold" style={{ background: 'rgba(34,211,238,0.12)', color: '#22d3ee', fontFamily: "'Inter', sans-serif" }}>{outils.length}</span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-2 mb-6">
                {filteredOutils.map((outil, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl transition-all"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(34,211,238,0.04)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                  >
                    <div className="flex items-center justify-center rounded-lg flex-shrink-0" style={{ width: '30px', height: '30px', background: `${outil.color || '#22d3ee'}12`, border: `1px solid ${outil.color || '#22d3ee'}25` }}>
                      {outil.Icon && <outil.Icon size={15} style={{ color: outil.color || '#22d3ee' }} />}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-xs truncate" style={{ color: '#e2e8f0', fontFamily: "'Inter', sans-serif" }}>{outil.name}</p>
                      <p className="text-xs truncate" style={{ color: '#475569', fontFamily: "'Inter', sans-serif" }}>{outil.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {cats.map(cat => {
                  const count = cat === 'Tous' ? outils.length : outils.filter(o => o.cat === cat).length
                  return (
                    <button
                      key={cat}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
                      style={{
                        background: activeCat === cat ? 'rgba(34,211,238,0.15)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${activeCat === cat ? 'rgba(34,211,238,0.4)' : 'rgba(255,255,255,0.08)'}`,
                        color: activeCat === cat ? '#22d3ee' : '#64748b',
                        fontFamily: "'Inter', sans-serif",
                      }}
                      onClick={() => setActiveCat(cat)}
                    >
                      {cat}
                      <span className="px-1.5 py-0.5 rounded text-xs" style={{ background: activeCat === cat ? 'rgba(34,211,238,0.2)' : 'rgba(255,255,255,0.06)', color: activeCat === cat ? '#22d3ee' : '#475569' }}>
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Sites de référence */}
          <div className="animate-fade-up rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.9)', border: '1px solid rgba(34,211,238,0.15)', transitionDelay: '0.16s' }}>
            <div className="flex items-center gap-2.5 px-5 py-3.5" style={{ background: 'rgba(255,255,255,0.025)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span className="font-bold text-white text-base" style={{ fontFamily: "'Inter', sans-serif" }}>Sites de référence</span>
              <span className="px-2.5 py-0.5 rounded text-xs font-bold" style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8', fontFamily: "'Inter', sans-serif" }}>{sources.length}</span>
            </div>
            <div className="overflow-y-auto" style={{ maxHeight: '360px' }}>
              {sources.map((src, i) => (
                <a
                  key={i}
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 transition-all"
                  style={{ borderBottom: i < sources.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.025)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <span className="px-2 py-0.5 rounded text-xs font-bold flex-shrink-0" style={{ background: `${src.color}12`, border: `1px solid ${src.color}30`, color: src.color, fontFamily: "'Inter', sans-serif", minWidth: '48px', textAlign: 'center' }}>
                    {src.badge}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm" style={{ color: '#e2e8f0', fontFamily: "'Inter', sans-serif" }}>{src.name}</p>
                    <p className="text-xs" style={{ color: '#64748b', fontFamily: "'Inter', sans-serif" }}>{src.desc}</p>
                  </div>
                  <ExternalLink size={12} style={{ color: '#334155', flexShrink: 0 }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Note données live + scroll hint */}
        <div className="text-center mt-4 mb-2">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#334155' }}>
            Données récupérées en temps réel via APIs publiques (HN Firebase, GitHub Search).
          </p>
          <div className="flex flex-col items-center gap-1 mt-5">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#334155' }}>Faites défiler pour découvrir</p>
            <ChevronDown size={16} style={{ color: '#334155' }} />
          </div>
        </div>

        {/* ── Article Veille ── */}
        <VeilleArticle />

      </div>
    </section>
  )
}

function VeilleArticle() {
  const [openEx, setOpenEx] = useState(null)

  const bonnesPratiques = [
    { Icon: Lock, title: 'Segmentation VLAN', desc: 'Isoler les flux réseau par zone fonctionnelle (serveurs, postes, DMZ)', color: '#22d3ee' },
    { Icon: Flame, title: 'Pare-feu iptables', desc: 'Règles strictes : DROP par défaut, ACCEPT explicite par service', color: '#f87171' },
    { Icon: ScrollText, title: 'Audit trail', desc: 'Logs centralisés avec Syslog + GLPI pour traçabilité des incidents', color: '#fbbf24' },
    { Icon: KeySquare, title: 'SSL/TLS partout', desc: 'Chiffrement de tous les flux — HTTP → HTTPS, FTP → SFTP', color: '#a78bfa' },
    { Icon: Radio, title: 'Recommandations ANSSI', desc: 'Application du guide ANSSI 2025 pour la sécurité des PME', color: '#34d399' },
    { Icon: Eye, title: 'Supervision 24/7', desc: 'Nagios Core avec alertes email/SMS sur seuils critiques', color: '#818cf8' },
  ]

  const comparatif = [
    { solution: 'OpenVPN',    avantages: 'Open source, très stable, AES-256', limites: 'Configuration plus lourde',      cas: 'Accès distant entreprise',   monChoix: true },
    { solution: 'WireGuard',  avantages: 'Ultra rapide, léger, moderne',      limites: 'Moins de support legacy',        cas: 'Accès distant performant',    monChoix: false },
    { solution: 'IPSec/IKEv2',avantages: 'Standard industrie, robuste',       limites: 'Complexité de configuration',    cas: 'Grandes entreprises',         monChoix: false },
    { solution: 'PPTP',       avantages: 'Simple à configurer',               limites: 'Chiffrement faible, obsolète',   cas: 'À éviter absolument',         monChoix: false },
  ]

  const demarche = [
    { num: '01', Icon: FolderSearch, color: '#22d3ee', title: 'Collecter', desc: 'CERT-FR, NVD, GitHub trends via RSS et alertes email quotidiennes' },
    { num: '02', Icon: FolderArchive, color: '#fbbf24', title: 'Trier',     desc: 'Protocoles, criticité CVE, impact potentiel sur l\'infrastructure SISR' },
    { num: '03', Icon: PenTool, color: '#34d399', title: 'Tester',    desc: 'Sandbox VirtualBox, déploiement progressif, validation en production' },
    { num: '04', Icon: FileText, color: '#a78bfa', title: 'Documenter',desc: 'Fiches E4/E5, guides d\'installation, rapports de stage structurés' },
  ]

  const exemples = [
    {
      id: 'vlan', title: 'Configuration VLAN Cisco 802.1Q', lang: 'IOS',
      code: `Switch# configure terminal\nSwitch(config)# vlan 10\nSwitch(config-vlan)# name SERVEURS\nSwitch(config-vlan)# vlan 20\nSwitch(config-vlan)# name POSTES\nSwitch(config-vlan)# vlan 99\nSwitch(config-vlan)# name DMZ\nSwitch(config)# interface GigabitEthernet0/1\nSwitch(config-if)# switchport mode trunk\nSwitch(config-if)# switchport trunk allowed vlan 10,20,99`,
    },
    {
      id: 'iptables', title: 'Règles iptables Linux (pare-feu serveur)', lang: 'Bash',
      code: `# Politique par défaut : tout bloquer\niptables -P INPUT DROP\niptables -P FORWARD DROP\niptables -P OUTPUT ACCEPT\n\n# Autoriser loopback\niptables -A INPUT -i lo -j ACCEPT\n\n# Autoriser connexions établies\niptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT\n\n# SSH (port 22) — réseau admin seulement\niptables -A INPUT -s 192.168.10.0/24 -p tcp --dport 22 -j ACCEPT\n\n# OpenVPN\niptables -A INPUT -p udp --dport 1194 -j ACCEPT`,
    },
  ]

  return (
    <div className="mt-8 rounded-2xl overflow-hidden" style={{ background: 'rgba(10,15,30,0.85)', border: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #22d3ee, #00ff88, #818cf8)' }} />
      <div className="p-8 md:p-12">

        {/* Badges + titre */}
        <div className="flex flex-wrap gap-2 mb-5">
          {[{ label: 'BTS SIO SISR', color: '#22d3ee' }, { label: 'VEILLE', color: '#a78bfa' }].map(b => (
            <span key={b.label} className="px-3 py-1 rounded text-xs font-bold uppercase tracking-wider" style={{ background: `${b.color}15`, border: `1px solid ${b.color}35`, color: b.color, fontFamily: "'Inter', sans-serif" }}>
              {b.label}
            </span>
          ))}
        </div>

        <h2 style={{ fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 800, color: '#f1f5f9', letterSpacing: '0.04em', lineHeight: 1.15, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          Sécurisation d'une infrastructure réseau en entreprise
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#64748b', marginBottom: '2.5rem' }}>
          Comment sécuriser une infrastructure réseau tout en l'intégrant avec Active Directory et une supervision centralisée ?
        </p>

        {/* CONTEXTE & ENJEUX */}
        <div className="mb-10">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 700, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1rem' }}>Contexte &amp; Enjeux</p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#94a3b8', lineHeight: 1.75, maxWidth: '720px' }}>
            Dans le cadre de mon BTS SIO SISR, j'ai mené une veille approfondie sur la sécurisation des infrastructures réseau en entreprise. Face à la multiplication des cyberattaques ciblant les PME françaises (source ANSSI 2025), la segmentation réseau et le chiffrement des flux sont devenus des impératifs. Cette étude couvre les solutions déployées lors de mes stages.
          </p>
        </div>

        {/* ARCHITECTURE */}
        <div className="mb-10">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1.2rem' }}>Architecture déployée</p>
          <div className="rounded-xl p-6 flex flex-wrap items-center justify-center gap-3" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)', fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>
            {[
              { label: 'Utilisateurs', color: '#64748b' }, { label: '→', color: '#334155' },
              { label: 'Switch Cisco', color: '#22d3ee' }, { label: '→', color: '#334155' },
              { label: 'VLAN 10/20/99', color: '#a78bfa' }, { label: '→', color: '#334155' },
              { label: 'Routeur + OpenVPN', color: '#00ff88' }, { label: '→', color: '#334155' },
              { label: 'Internet', color: '#64748b' },
            ].map((item, i) => (
              <span key={i} style={{ fontSize: '13px', fontWeight: item.label === '→' ? 400 : 700, color: item.color }}>{item.label}</span>
            ))}
          </div>
          <p className="mt-2 text-center" style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#475569' }}>
            Supervision Nagios Core · Pare-feu iptables · Linux Debian 12 · Cisco IOS
          </p>
        </div>

        {/* SOLUTIONS TESTÉES */}
        <div className="mb-10">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 700, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1.2rem' }}>Solutions testées</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'VLAN 802.1Q', color: '#22d3ee', items: ['Isolation des flux réseau', 'Réduction de la surface d\'attaque', 'Configuration Cisco IOS', 'Trunk entre switchs'] },
              { title: 'OpenVPN',     color: '#00ff88', items: ['Chiffrement AES-256-GCM', 'Authentification PKI / certificats', 'Accès distant sécurisé', 'Compatible Linux + Windows'] },
              { title: 'Nagios Core', color: '#a78bfa', items: ['Supervision SNMP en temps réel', 'Alertes email sur incidents', 'Plugins NRPE personnalisés', 'Dashboard centralisant les hosts'] },
            ].map(sol => (
              <div key={sol.title} className="rounded-xl p-6" style={{ background: 'rgba(0,0,0,0.25)', border: `1px solid ${sol.color}20` }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 800, color: sol.color, marginBottom: '0.85rem' }}>{sol.title}</p>
                <div className="space-y-1.5">
                  {sol.items.map((it, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span style={{ color: sol.color, fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '11px', flexShrink: 0, marginTop: '1px' }}>→</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#94a3b8', lineHeight: 1.5 }}>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BONNES PRATIQUES */}
        <div className="mb-10">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 700, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1.2rem' }}>
            Bonnes pratiques (Recommandations ANSSI 2025)
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {bonnesPratiques.map((bp, i) => (
              <div key={i} className="p-2">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex items-center justify-center rounded-lg flex-shrink-0" style={{ width: '30px', height: '30px', background: `${bp.color}12`, border: `1px solid ${bp.color}25` }}>
                    {bp.Icon && <bp.Icon size={16} style={{ color: bp.color }} />}
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: '#e2e8f0' }}>{bp.title}</span>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#64748b', lineHeight: 1.6 }}>{bp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COMPARATIF */}
        <div className="mb-10">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1.2rem' }}>Comparatif des solutions</p>
          <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
            <table className="w-full">
              <thead>
                <tr style={{ background: 'rgba(0,0,0,0.4)' }}>
                  <th className="px-4 py-3 text-left" style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Solution</th>
                  <th className="px-4 py-3 text-left" style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 700, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Avantages</th>
                  <th className="px-4 py-3 text-left" style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 700, color: '#f87171', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Limites</th>
                  <th className="px-4 py-3 text-left" style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Cas d'usage</th>
                </tr>
              </thead>
              <tbody>
                {comparatif.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: '#e2e8f0' }}>{row.solution}</span>
                        {row.monChoix && <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: 'rgba(34,211,238,0.12)', border: '1px solid rgba(34,211,238,0.25)', color: '#22d3ee', fontFamily: "'Inter', sans-serif" }}>Mon choix</span>}
                      </div>
                    </td>
                    <td className="px-4 py-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#22d3ee' }}>{row.avantages}</td>
                    <td className="px-4 py-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#f87171' }}>{row.limites}</td>
                    <td className="px-4 py-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#a78bfa' }}>{row.cas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* MA DÉMARCHE */}
        <div className="mb-10">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 700, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1.2rem' }}>Ma démarche de veille</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {demarche.map((step, i) => (
              <div key={i} className="rounded-xl p-6 flex flex-col items-center text-center" style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center justify-center rounded-full mb-3 text-xs font-bold" style={{ width: '32px', height: '32px', background: `${step.color}18`, border: `1px solid ${step.color}40`, color: step.color, fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>
                  {step.num}
                </div>
                <div className="flex items-center justify-center rounded-lg mb-1" style={{ width: '36px', height: '36px', background: `${step.color}12`, border: `1px solid ${step.color}25` }}>
                  {step.Icon && <step.Icon size={18} style={{ color: step.color }} />}
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: step.color, marginBottom: '0.4rem' }}>{step.title}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EXEMPLES D'IMPLÉMENTATION */}
        <div className="mb-10">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 700, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1.2rem' }}>Exemples d'implémentation</p>
          <div className="space-y-3">
            {exemples.map(ex => (
              <div key={ex.id} className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
                <button
                  className="w-full flex items-center justify-between px-5 py-4"
                  style={{ background: 'rgba(0,0,0,0.3)', cursor: 'pointer' }}
                  onClick={() => setOpenEx(openEx === ex.id ? null : ex.id)}
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.25)', color: '#fbbf24', fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>{ex.lang}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: '#e2e8f0' }}>{ex.title}</span>
                  </div>
                  <ChevronDown size={16} style={{ color: '#475569', transform: openEx === ex.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {openEx === ex.id && (
                  <pre className="px-5 py-4 overflow-x-auto text-xs leading-relaxed" style={{ background: 'rgba(0,0,0,0.5)', color: '#94a3b8', fontFamily: "'JetBrains Mono', 'Fira Code', monospace", borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    {ex.code}
                  </pre>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CHOIX FINAL */}
        <div className="rounded-2xl p-7" style={{ background: 'rgba(34,211,238,0.04)', border: '1px solid rgba(34,211,238,0.15)' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 700, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1rem' }}>Choix final retenu</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['VLAN 802.1Q', 'OpenVPN', 'Nagios Core', 'iptables', 'Linux Debian 12'].map(t => (
              <span key={t} className="px-3 py-1 rounded-lg text-xs font-semibold" style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)', color: '#22d3ee', fontFamily: "'Inter', sans-serif" }}>{t}</span>
            ))}
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#94a3b8', lineHeight: 1.75 }}>
            Déployer VLAN 802.1Q via Cisco IOS pour segmenter le réseau, sécuriser les accès distants via OpenVPN avec PKI, et superviser l'infrastructure avec Nagios Core — en conformité avec les recommandations ANSSI 2025.
          </p>
        </div>

        {/* Footer article */}
        <div className="mt-8 pt-6 flex flex-wrap items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#334155' }}>
            Veille maintenue mensuellement — mise à jour : mars 2026
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#334155' }}>
            Sources : ANSSI · CERT-FR · NVD · BleepingComputer · Krebs on Security
          </p>
        </div>

      </div>
    </div>
  )
}
