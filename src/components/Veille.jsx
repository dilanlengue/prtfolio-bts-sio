import { Shield, Mail, Phone, Smartphone, Globe, Lock, Eye, ShieldCheck, AlertTriangle, ExternalLink, QrCode, Search, Bot, Sparkles } from 'lucide-react'

const phishingTypes = [
  {
    icon: Mail, title: 'Phishing par Email',
    desc: "Un faux email qui imite ta banque ou les impôts. Il te demande de cliquer sur un lien pour voler tes identifiants.",
    exemple: 'Faux email de ta banque qui dit "Votre compte est bloqué"',
  },
  {
    icon: Smartphone, title: 'Smishing (par SMS)',
    desc: "Un faux SMS type \"Votre colis est en attente\". Le lien mène vers un faux site qui vole tes données bancaires.",
    exemple: 'Faux SMS Chronopost ou Ameli',
  },
  {
    icon: Phone, title: 'Vishing (par Téléphone)',
    desc: "Quelqu'un t'appelle en se faisant passer pour ta banque et te met la pression pour que tu donnes tes codes.",
    exemple: 'Faux conseiller bancaire qui demande ton code',
  },
  {
    icon: QrCode, title: 'Quishing (par QR Code)',
    desc: "Un faux QR code collé sur un PV ou un parcmètre. Tu scannes et tu arrives sur un faux site de paiement.",
    exemple: 'Faux QR code sur une contravention',
  },
  {
    icon: Globe, title: 'Spear Phishing (ciblé)',
    desc: "L'attaquant te vise personnellement. Il utilise ton nom, ton poste et tes collègues pour créer un message crédible.",
    exemple: 'Email personnalisé avec le nom de ton chef',
  },
]

const protections = [
  "Ne clique jamais sur un lien dans un email ou SMS suspect",
  "Vérifie toujours l'adresse de l'expéditeur",
  "Ne donne jamais tes mots de passe par téléphone",
  "Active la double authentification (MFA) sur tes comptes",
  "En cas de doute, va directement sur le site officiel",
  "Signale les arnaques sur signal-spam.fr ou au 33700",
]

const actualites = [
  { date: '2024', titre: 'France Travail', desc: '43 millions de personnes touchées par un vol de données.', url: 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/violation-donnees-personnelles-france-travail' },
  { date: '2024', titre: 'Free', desc: '19 millions de clients touchés, 42M€ d\'amende CNIL.', url: 'https://www.cnil.fr/fr/fuite-de-donnees-de-free-la-cnil-a-sanctionne-loperateur-dune-amende-de-42-millions-deuros' },
  { date: '2025', titre: 'Phishing +70%', desc: '108 000 demandes d\'aide pour phishing en France.', url: 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/rapport-activite-2024' },
  { date: '2025', titre: 'IA et Phishing', desc: '82% des emails de phishing sont générés par l\'IA.', url: 'https://www.it-connect.fr/intelligence-artificielle-ia-phishing/' },
]

export default function Veille() {
  return (
    <section id="veille" className="relative" style={{ paddingTop: '10rem', paddingBottom: '8rem' }}>
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10">

        {/* HEADER */}
        <div className="text-center" style={{ marginBottom: '6rem' }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13px', fontWeight: 700, letterSpacing: '0.15em',
            color: '#a5b4fc', padding: '8px 20px',
            background: 'rgba(165,180,252,0.1)', border: '1px solid rgba(165,180,252,0.25)',
            borderRadius: '99px',
          }}>
            BTS SIO SISR — Veille Technologique
          </span>
          <h2 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: 'clamp(2rem, 5vw, 2.8rem)',
            fontWeight: 900, color: '#ffffff', marginTop: '2rem', marginBottom: '1rem',
          }}>
            Veille Technologique : Le Phishing
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: '18px',
            color: '#cbd5e1', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto',
          }}>
            La menace n°1 en cybersécurité en France.
          </p>
        </div>

        {/* 1 — DÉFINITION VEILLE TECHNOLOGIQUE */}
        <div style={{ marginBottom: '5rem' }}>
          <h3 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: '1.3rem', fontWeight: 800, color: '#a5b4fc',
            marginBottom: '1.5rem',
          }}>
            C'est quoi la Veille Technologique ?
          </h3>
          <div className="rounded-xl" style={{
            padding: '2rem', background: 'rgba(165,180,252,0.06)',
            border: '1px solid rgba(165,180,252,0.15)',
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: '17px',
              color: '#e2e8f0', lineHeight: 2,
            }}>
              La <strong style={{ color: '#a5b4fc' }}>veille technologique</strong>, c'est le fait de se tenir informé en permanence des nouvelles technologies, des menaces et des évolutions dans son domaine. En cybersécurité, c'est essentiel pour anticiper les nouvelles attaques et protéger les systèmes.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: '16px',
              color: '#cbd5e1', lineHeight: 1.9, marginTop: '1rem',
            }}>
              Pour mon BTS SIO, j'ai choisi de faire ma veille sur <strong style={{ color: '#fca5a5' }}>le phishing</strong>, car c'est la cyberattaque la plus courante en France et celle qui touche le plus de personnes.
            </p>
          </div>
        </div>

        {/* 2 — DÉFINITION PHISHING */}
        <div style={{ marginBottom: '5rem' }}>
          <h3 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: '1.3rem', fontWeight: 800, color: '#a5b4fc',
            marginBottom: '1.5rem',
          }}>
            C'est quoi le Phishing ?
          </h3>
          <div className="rounded-xl" style={{
            padding: '2rem', background: 'rgba(165,180,252,0.06)',
            border: '1px solid rgba(165,180,252,0.15)',
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: '17px',
              color: '#e2e8f0', lineHeight: 2,
            }}>
              Le <strong style={{ color: '#a5b4fc' }}>phishing</strong> (hameçonnage), c'est quand un attaquant se fait passer pour un organisme de confiance (banque, impôts, La Poste) pour voler tes <strong style={{ color: '#fca5a5' }}>mots de passe</strong> ou tes <strong style={{ color: '#fca5a5' }}>données bancaires</strong>.
            </p>
          </div>
        </div>

        {/* 3 — LES 5 TYPES */}
        <div style={{ marginBottom: '5rem' }}>
          <h3 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: '1.3rem', fontWeight: 800, color: '#a5b4fc',
            marginBottom: '1.5rem',
          }}>
            Les 5 types de Phishing
          </h3>
          <div className="flex flex-col gap-5">
            {phishingTypes.map((t, i) => (
              <div key={i} className="rounded-xl" style={{
                padding: '1.8rem', background: 'rgba(165,180,252,0.05)',
                border: '1px solid rgba(165,180,252,0.12)',
              }}>
                <div className="flex items-center gap-4 mb-3">
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: 'rgba(165,180,252,0.1)', border: '1px solid rgba(165,180,252,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <t.icon size={22} style={{ color: '#a5b4fc' }} />
                  </div>
                  <h4 style={{
                    fontFamily: "'Inter', sans-serif", fontSize: '17px',
                    fontWeight: 700, color: '#ffffff',
                  }}>
                    {i + 1}. {t.title}
                  </h4>
                </div>
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontSize: '16px',
                  color: '#cbd5e1', lineHeight: 1.9, marginBottom: '0.8rem',
                }}>
                  {t.desc}
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontSize: '14px',
                  color: '#94a3b8', fontStyle: 'italic',
                }}>
                  Exemple : {t.exemple}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 — IMPACT DE L'IA */}
        <div style={{ marginBottom: '5rem' }}>
          <h3 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: '1.3rem', fontWeight: 800, color: '#c4b5fd',
            marginBottom: '1.5rem',
          }}>
            <span className="flex items-center gap-3">
              <Bot size={24} style={{ color: '#c4b5fd' }} />
              L'impact de l'IA sur le Phishing
            </span>
          </h3>
          <div className="rounded-xl" style={{
            padding: '2rem', background: 'rgba(196,181,253,0.06)',
            border: '1px solid rgba(196,181,253,0.15)',
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: '17px',
              color: '#e2e8f0', lineHeight: 2, marginBottom: '1.5rem',
            }}>
              L'intelligence artificielle a rendu le phishing beaucoup plus dangereux. Aujourd'hui, les attaquants utilisent l'IA pour :
            </p>
            <div className="flex flex-col gap-4 mb-5">
              {[
                { stat: '82%', text: "des emails de phishing sont maintenant générés par l'IA, avec zéro faute d'orthographe" },
                { stat: '3 sec', text: "suffisent à l'IA pour cloner une voix et passer de faux appels (vishing)" },
                { stat: 'Deepfakes', text: "l'IA peut créer de fausses vidéos de dirigeants pour arnaquer des entreprises" },
                { stat: '+70%', text: "d'augmentation des attaques de phishing en France entre 2023 et 2025" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: '14px',
                    fontWeight: 800, color: '#c4b5fd',
                    background: 'rgba(196,181,253,0.1)', border: '1px solid rgba(196,181,253,0.2)',
                    padding: '6px 12px', borderRadius: '8px', flexShrink: 0, minWidth: '80px', textAlign: 'center',
                  }}>
                    {item.stat}
                  </span>
                  <p style={{
                    fontFamily: "'Inter', sans-serif", fontSize: '16px',
                    color: '#cbd5e1', lineHeight: 1.8,
                  }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <a href="https://www.it-connect.fr/intelligence-artificielle-ia-phishing/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3" style={{ textDecoration: 'none' }}>
                <ExternalLink size={14} style={{ color: '#c4b5fd', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#c4b5fd' }}>
                  IT-Connect — L'IA et le phishing (2025)
                </span>
              </a>
              <a href="https://cyber.gouv.fr/actualites/panorama-de-la-cybermenace-2025/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3" style={{ textDecoration: 'none' }}>
                <ExternalLink size={14} style={{ color: '#c4b5fd', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#c4b5fd' }}>
                  ANSSI — Panorama de la cybermenace 2025
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* 5 — SE PROTÉGER */}
        <div style={{ marginBottom: '5rem' }}>
          <h3 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: '1.3rem', fontWeight: 800, color: '#6ee7b7',
            marginBottom: '1.5rem',
          }}>
            Comment se protéger ?
          </h3>
          <div className="rounded-xl" style={{
            padding: '2rem', background: 'rgba(110,231,183,0.05)',
            border: '1px solid rgba(110,231,183,0.15)',
          }}>
            <div className="flex flex-col gap-4">
              {protections.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ShieldCheck size={18} style={{ color: '#6ee7b7', marginTop: '3px', flexShrink: 0 }} />
                  <p style={{
                    fontFamily: "'Inter', sans-serif", fontSize: '16px',
                    color: '#e2e8f0', lineHeight: 1.8,
                  }}>
                    {p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6 — ACTUALITÉS avec liens */}
        <div style={{ marginBottom: '5rem' }}>
          <h3 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: '1.3rem', fontWeight: 800, color: '#fca5a5',
            marginBottom: '1.5rem',
          }}>
            Actualités récentes
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {actualites.map((a, i) => (
              <a key={i} href={a.url} target="_blank" rel="noopener noreferrer"
                className="rounded-xl" style={{
                  padding: '1.5rem', background: 'rgba(252,165,165,0.05)',
                  border: '1px solid rgba(252,165,165,0.12)', textDecoration: 'none', display: 'block',
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: '12px',
                    fontWeight: 700, color: '#fca5a5',
                  }}>
                    {a.date}
                  </span>
                  <ExternalLink size={14} style={{ color: '#fca5a5', opacity: 0.5 }} />
                </div>
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontSize: '16px',
                  fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem',
                }}>
                  {a.titre}
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontSize: '15px',
                  color: '#cbd5e1', lineHeight: 1.8,
                }}>
                  {a.desc}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* 7 — OUTILS DE VEILLE */}
        <div style={{ marginBottom: '5rem' }}>
          <h3 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: '1.3rem', fontWeight: 800, color: '#a5b4fc',
            marginBottom: '1.5rem',
          }}>
            <span className="flex items-center gap-3">
              <Search size={22} style={{ color: '#a5b4fc' }} />
              Mes outils de veille
            </span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            <a href="https://www.google.fr/alerts" target="_blank" rel="noopener noreferrer"
              className="rounded-xl" style={{
                padding: '1.5rem', textDecoration: 'none',
                background: 'rgba(165,180,252,0.05)', border: '1px solid rgba(165,180,252,0.12)',
                display: 'block',
              }}
            >
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                Google Alerts
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#cbd5e1', lineHeight: 1.8 }}>
                Je reçois des alertes email automatiques dès qu'un nouvel article parle de "phishing", "cyberattaque France" ou "hameçonnage".
              </p>
            </a>
            <a href="https://www.it-connect.fr/" target="_blank" rel="noopener noreferrer"
              className="rounded-xl" style={{
                padding: '1.5rem', textDecoration: 'none',
                background: 'rgba(165,180,252,0.05)', border: '1px solid rgba(165,180,252,0.12)',
                display: 'block',
              }}
            >
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                IT-Connect
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#cbd5e1', lineHeight: 1.8 }}>
                Site français d'actualité IT et cybersécurité. Je consulte leurs articles sur les nouvelles menaces et les bonnes pratiques.
              </p>
            </a>
          </div>
        </div>

        {/* 8 — SOURCES */}
        <div style={{ marginBottom: '5rem' }}>
          <h3 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: '1.3rem', fontWeight: 800, color: '#a5b4fc',
            marginBottom: '1.5rem',
          }}>
            Sources et articles
          </h3>
          <div className="flex flex-col gap-4">
            {[
              {
                titre: "Qu'est-ce que le phishing ou hameçonnage ?",
                source: 'Cybermalveillance.gouv.fr',
                url: 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/dossier-phishing',
              },
              {
                titre: 'Que faire en cas de phishing ? — Fiche réflexe',
                source: 'Cybermalveillance.gouv.fr',
                url: 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/hameconnage-phishing',
              },
              {
                titre: 'Panorama de la cybermenace 2025',
                source: 'ANSSI / CERT-FR',
                url: 'https://cyber.gouv.fr/actualites/panorama-de-la-cybermenace-2025/',
              },
              {
                titre: "L'IA générative et le phishing — état des lieux",
                source: 'IT-Connect',
                url: 'https://www.it-connect.fr/intelligence-artificielle-ia-phishing/',
              },
              {
                titre: 'Les menaces liées au phishing en 2025',
                source: 'CERT-FR / ANSSI',
                url: 'https://cyber.gouv.fr/publications',
              },
            ].map((art, i) => (
              <a key={i} href={art.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl transition-all"
                style={{
                  padding: '1.2rem 1.5rem', textDecoration: 'none',
                  background: 'rgba(165,180,252,0.05)', border: '1px solid rgba(165,180,252,0.12)',
                }}
              >
                <ExternalLink size={18} style={{ color: '#a5b4fc', flexShrink: 0 }} />
                <div className="flex-1">
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: '#e2e8f0' }}>
                    {art.titre}
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#94a3b8', marginTop: '0.3rem' }}>
                    {art.source}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 9 — PROJET PROFESSIONNEL */}
        <div style={{ marginBottom: '5rem' }}>
          <h3 style={{
            fontFamily: "'Orbitron', system-ui, sans-serif",
            fontSize: '1.3rem', fontWeight: 800, color: '#6ee7b7',
            marginBottom: '1.5rem',
          }}>
            Mon Projet Professionnel
          </h3>
          <div className="rounded-xl" style={{
            padding: '2rem', background: 'rgba(110,231,183,0.05)',
            border: '1px solid rgba(110,231,183,0.15)',
          }}>
            <p style={{
              fontFamily: "'Orbitron', system-ui, sans-serif", fontSize: '1.2rem',
              fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem',
            }}>
              Devenir Pentester
            </p>
            <div className="flex flex-col gap-4 mb-5">
              {[
                { etape: 'BTS SIO SISR', desc: 'Administration réseau, systèmes et sécurité', actuel: true },
                { etape: 'Licence Pro Métiers de l\'informatique — parcours Cybersécurité', desc: 'Ex : LP Réseaux et Cybersécurité (CY Cergy), LP Analyste en cybersécurité (CNAM)' },
                { etape: 'Mastère Cybersécurité (Bac+5)', desc: 'Ex : Mastère Expert Cybersécurité (ESIEA), Master CyberSécurité (ENSICAEN)' },
                { etape: 'Pentester', desc: 'Tests d\'intrusion, audit de sécurité, recherche de vulnérabilités' },
              ].map((e, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: e.actuel ? 'rgba(110,231,183,0.15)' : 'rgba(165,180,252,0.08)',
                    border: e.actuel ? '2px solid #6ee7b7' : '1px solid rgba(165,180,252,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: '13px',
                      fontWeight: 800, color: e.actuel ? '#6ee7b7' : '#a5b4fc',
                    }}>{i + 1}</span>
                  </div>
                  <div>
                    <p style={{
                      fontFamily: "'Inter', sans-serif", fontSize: '16px',
                      fontWeight: 700, color: e.actuel ? '#6ee7b7' : '#e2e8f0',
                    }}>
                      {e.etape} {e.actuel && '← en cours'}
                    </p>
                    <p style={{
                      fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#94a3b8',
                    }}>
                      {e.desc}
                    </p>
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
