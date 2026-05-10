import { useState, useEffect, useCallback } from 'react'
import { Building2, MapPin, Users, Calendar, Phone, Globe, ExternalLink, CheckCircle2, Shield, Download, ChevronDown, ChevronUp, Image as ImageIcon, FileText, X, ChevronLeft, ChevronRight, ZoomIn, Maximize2 } from 'lucide-react'
import SectionLabel from './SectionLabel'

const stages = [
  {
    current: false,
    tag: 'Stage 2ème année',
    tagColor: '#06b6d4',
    name: 'B&A Conseil',
    subtitle: 'Partenaire de confiance en solutions IT',
    logo: '/logo-ba-conseil-blanc.png',
    photo: '/photo-ba-conseil.webp',
    siteUrl: 'https://ba-conseil.fr',
    description:
      'B&A Conseil est une entreprise spécialisée dans les solutions informatiques, télécoms et réseaux pour les professionnels. Elle accompagne ses clients (Galeries Lafayette, Hyundai, ministères…) dans la gestion de leur connectivité (internet haut débit & lignes mobiles), le déploiement et l\'administration de flottes mobiles via des plateformes MDM/UEM, la maintenance et l\'infogérance de leur parc informatique, ainsi que la fourniture de matériel et l\'intervention de techniciens réseau et informatique sur tout le territoire français.',
    infos: [
      { icon: MapPin, label: 'Siège social', value: 'Coignières, Yvelines' },
      { icon: Users, label: 'Taille', value: '2-10 employés' },
      { icon: Calendar, label: 'Fondée en', value: '2018' },
      { icon: Calendar, label: 'Période de stage', value: '05/01/2026 – 06/02/2026 (5 semaines)' },
      { icon: Phone, label: 'Téléphone', value: '01 84 80 19 18' },
      { icon: Globe, label: 'Site web', value: 'ba-conseil.fr', link: 'https://ba-conseil.fr' },
    ],
    specialisations: [
      'MDM/UEM', 'Infogérance', 'Télécoms', 'Internet & Lignes Mobiles',
      'Maintenance IT', 'Déploiement poste', 'Solutions Software',
      'Matériel & Print', 'Techniciens Réseau', 'Sécurité mobile',
    ],
    poste: 'Technicien Support & Administration IT',
    missions: [
      'Administration et configuration à distance des appareils mobiles et PC via la plateforme MDM Miradore (politiques de sécurité, chiffrement, gestion des accès)',
      'Enregistrement et enrôlement des smartphones et tablettes dans la solution de gestion de flotte mobile (MDM/UEM) avant leur déploiement chez les clients',
      'Configuration complète des smartphones professionnels : paramétrage des comptes e-mail, VPN, Wi-Fi, restrictions d\'usage et installation d\'applications métier',
      'Déploiement et masterisation de postes de travail sous Windows (installation OS, drivers, logiciels, jonction au domaine)',
      'Maintenance préventive et corrective du parc informatique : mises à jour système, nettoyage, remplacement de composants',
      'Installation et paramétrage d\'applications professionnelles selon les besoins spécifiques de chaque client',
      'Assistance technique on-site et à distance pour les utilisateurs finaux (support niveau 1 et 2)',
      'Gestion des tickets d\'incidents et suivi des interventions dans l\'outil de ticketing interne',
    ],
    gallery: [
      { src: '/ba-smartphone-config.jpg', caption: 'Configuration et enrôlement de smartphones professionnels via MDM' },
      { src: '/ba-it-support.jpg', caption: 'Maintenance préventive et corrective du parc informatique' },
      { src: '/ba-deploy-windows.jpg', caption: 'Intervention technicien réseau — câblage et infrastructure serveur' },
      { src: '/ba-deploiement.jpg', caption: 'Déploiement et sécurisation de postes Windows (Defender, GPO)' },
      { src: '/ba-telecom.webp', caption: 'Infrastructure télécoms et connectivité professionnelle' },
    ],
    documents: [
      { src: '/admin-procedure-config-appareils.pdf', label: 'Admin Procédure — Configuration des appareils' },
    ],
    attestationPdf: '/attestation-stage-bna.pdf',
  },
  {
    current: false,
    tag: 'Stage 1ère année',
    tagColor: '#8b5cf6',
    name: 'Les Réparateurs Mac & PC',
    subtitle: 'Centre de réparation informatique — Toutes marques',
    logo: '/logo-reparateurs.jpg',
    photo: '/photo-reparateurs.png',
    siteUrl: 'https://lesreparateursmacetpc.com',
    description:
      'Centre de réparation informatique situé à Montreuil (31 rue Franklin), spécialisé dans le diagnostic, la réparation et la maintenance d\'ordinateurs Apple et PC de toutes marques (Asus, Lenovo, MSI, HP, Samsung, Acer, Alienware, Razer…). L\'entreprise propose des diagnostics gratuits, des réparations sous 48h à 96h avec garantie 6 mois, la récupération de données sur disques durs endommagés, ainsi que la vente d\'ordinateurs et de périphériques. Accueil sans rendez-vous avec des informaticiens conseils.',
    infos: [
      { icon: MapPin, label: 'Localisation', value: '31 rue Franklin, Montreuil (Mairie de Montreuil, ligne 9)' },
      { icon: Calendar, label: 'Période de stage', value: '12/05/2025 – 21/06/2025 (7 semaines)' },
      { icon: Phone, label: 'Téléphone', value: '06 65 01 86 53' },
      { icon: Globe, label: 'Site web', value: 'lesreparateursmacetpc.com', link: 'https://lesreparateursmacetpc.com' },
    ],
    specialisations: [
      'Réparation Mac', 'Réparation PC', 'Diagnostic matériel', 'Récupération de données',
      'Remplacement écran', 'Carte mère & GPU', 'Installation OS', 'Dépannage logiciel',
    ],
    poste: 'Technicien Support Informatique',
    missions: [
      'Diagnostic et résolution d\'incidents matériels et logiciels sur PC et MacBook (identification de pannes, tests de composants, réparation)',
      'Récupération des données sur des disques durs endommagés ou défaillants à l\'aide d\'outils spécialisés',
      'Réparation matérielle : remplacement d\'écrans cassés, diagnostic de cartes mères et cartes graphiques, changement de composants (RAM, SSD, batterie)',
      'Installation et configuration des systèmes d\'exploitation (Windows, macOS) avec optimisation des performances',
      'Installation des pilotes de carte graphique, périphériques et mise à jour du BIOS/firmware',
      'Reconfiguration complète de Windows : réinstallation propre, restauration système, migration de données utilisateur',
      'Déblocage des machines et ordinateurs sans suppression des données (contournement de mots de passe, réparation de boot)',
      'Accueil des clients, diagnostic gratuit des pannes et conseil technique sur les solutions de réparation adaptées',
    ],
    gallery: [
      { src: '/reparateurs-atelier.png', caption: 'Vue de l\'atelier — espace de travail et réparations en cours' },
      { src: '/reparateurs-diagnostic.jpg', caption: 'Diagnostic matériel avancé sur carte mère avec outils spécialisés' },
      { src: '/reparateurs-ecran.jpg', caption: 'Remplacement et réparation d\'écrans sur ordinateurs portables' },
      { src: '/reparateurs-liquide.jpg', caption: 'Nettoyage et réparation après dégât des eaux — intervention d\'urgence' },
      { src: '/mac-ecran-bleu.jpg', caption: 'Diagnostic et résolution d\'écran bleu (BSOD) — erreurs système critiques' },
      { src: '/mac-ecran-casse.jpg', caption: 'Remplacement d\'écrans cassés sur MacBook et PC portables' },
      { src: '/mac-reconditionnement.jpg', caption: 'Diagnostic carte mère et remplacement de composants (RAM, SSD, batterie)' },
      { src: '/mac-restauration.png', caption: 'Ordinateurs en attente de réparation et restauration en atelier' },
      { src: '/mac-sauvegarde-recuperation.jpg', caption: 'Sauvegarde et récupération de données sur disques durs endommagés' },
    ],
    attestationPdf: '/attestation-stage-reparateurs.pdf',
  },
]

function Lightbox({ images, index, onClose, onPrev, onNext, tagColor }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handler)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handler)
    }
  }, [onClose, onPrev, onNext])

  const img = images[index]

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.92)',
        backdropFilter: 'blur(20px)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        animation: 'lbFadeIn 0.25s ease',
        cursor: 'zoom-out',
      }}
    >
      {/* Counter */}
      <div style={{
        position: 'absolute', top: '1.5rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', alignItems: 'center', gap: '8px',
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '12px', fontWeight: 700, color: '#94a3b8',
          padding: '6px 16px', borderRadius: '99px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}>
          {index + 1} / {images.length}
        </span>
      </div>

      {/* Close */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose() }}
        style={{
          position: 'absolute', top: '1.5rem', right: '1.5rem',
          width: '44px', height: '44px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: '#fff',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
      >
        <X size={20} />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          style={{
            position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)',
            width: '48px', height: '48px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#fff',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = `${tagColor}40`; e.currentTarget.style.borderColor = tagColor }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          style={{
            position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)',
            width: '48px', height: '48px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#fff',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = `${tagColor}40`; e.currentTarget.style.borderColor = tagColor }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
        >
          <ChevronRight size={22} />
        </button>
      )}

      {/* Image */}
      <img
        onClick={(e) => e.stopPropagation()}
        src={img.src}
        alt={img.caption}
        style={{
          maxWidth: '85vw', maxHeight: '75vh',
          objectFit: 'contain',
          borderRadius: '12px',
          boxShadow: `0 25px 80px rgba(0,0,0,0.5), 0 0 40px ${tagColor}15`,
          cursor: 'default',
          animation: 'lbSlideUp 0.3s ease',
        }}
      />

      {/* Caption */}
      <div style={{
        marginTop: '1.5rem',
        maxWidth: '600px', textAlign: 'center',
        padding: '12px 24px', borderRadius: '12px',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '14px', fontWeight: 600, color: '#e2e8f0',
          lineHeight: 1.5,
        }}>
          {img.caption}
        </p>
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div style={{
          display: 'flex', gap: '6px',
          marginTop: '1.2rem',
        }}>
          {images.map((_, di) => (
            <button
              key={di}
              onClick={(e) => { e.stopPropagation(); /* navigate to index handled by parent */ }}
              style={{
                width: di === index ? '24px' : '8px',
                height: '8px', borderRadius: '99px',
                background: di === index ? tagColor : 'rgba(255,255,255,0.2)',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes lbFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes lbSlideUp { from { opacity: 0; transform: translateY(20px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </div>
  )
}

function GallerySection({ gallery, tagColor }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const goPrev = useCallback(() => setLightboxIndex(i => (i - 1 + gallery.length) % gallery.length), [gallery.length])
  const goNext = useCallback(() => setLightboxIndex(i => (i + 1) % gallery.length), [gallery.length])

  const heroImg = gallery[0]
  const restImgs = gallery.slice(1)

  return (
    <div className="mt-6">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-4">
        <div style={{
          width: '32px', height: '32px', borderRadius: '10px',
          background: `linear-gradient(135deg, ${tagColor}20, ${tagColor}08)`,
          border: `1px solid ${tagColor}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <ImageIcon size={15} style={{ color: tagColor }} />
        </div>
        <div>
          <p style={{ fontSize: '14px', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.01em' }}>
            En pratique
          </p>
          <p style={{ fontSize: '11px', fontWeight: 500, color: '#94a3b8' }}>
            {gallery.length} photos — Cliquez pour agrandir
          </p>
        </div>
      </div>

      {/* Hero image (first one, large) */}
      <div
        onClick={() => openLightbox(0)}
        className="rounded-xl overflow-hidden mb-3"
        style={{
          position: 'relative', cursor: 'pointer',
          border: '1px solid #e2e8f0',
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = `0 12px 40px ${tagColor}20, 0 0 0 1px ${tagColor}40`
          e.currentTarget.style.borderColor = `${tagColor}50`
          e.currentTarget.style.transform = 'translateY(-3px)'
          e.currentTarget.querySelector('.hero-overlay').style.opacity = '1'
          e.currentTarget.querySelector('.hero-img').style.transform = 'scale(1.04)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.borderColor = '#e2e8f0'
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.querySelector('.hero-overlay').style.opacity = '0'
          e.currentTarget.querySelector('.hero-img').style.transform = 'scale(1)'
        }}
      >
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            className="hero-img"
            src={heroImg.src}
            alt={heroImg.caption}
            style={{
              width: '100%', height: '280px', objectFit: 'cover',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%)',
          }} />
          {/* Hover overlay with icon */}
          <div className="hero-overlay" style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(135deg, ${tagColor}30, rgba(0,0,0,0.3))`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: 0, transition: 'opacity 0.35s ease',
          }}>
            <div style={{
              width: '56px', height: '56px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(8px)',
              border: '2px solid rgba(255,255,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Maximize2 size={22} style={{ color: '#fff' }} />
            </div>
          </div>
          {/* Caption at bottom */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '1rem 1.25rem',
          }}>
            <p style={{
              fontSize: '14px', fontWeight: 700, color: '#ffffff',
              textShadow: '0 1px 4px rgba(0,0,0,0.5)',
              lineHeight: 1.4,
            }}>
              {heroImg.caption}
            </p>
          </div>
        </div>
      </div>

      {/* Rest of images in grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {restImgs.map((img, i) => (
          <div
            key={i}
            onClick={() => openLightbox(i + 1)}
            className="rounded-lg overflow-hidden"
            style={{
              position: 'relative', cursor: 'pointer',
              border: '1px solid #e2e8f0',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = `0 8px 25px ${tagColor}15`
              e.currentTarget.style.borderColor = `${tagColor}40`
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)'
              e.currentTarget.querySelector('.thumb-overlay').style.opacity = '1'
              e.currentTarget.querySelector('.thumb-img').style.transform = 'scale(1.08)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = '#e2e8f0'
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.querySelector('.thumb-overlay').style.opacity = '0'
              e.currentTarget.querySelector('.thumb-img').style.transform = 'scale(1)'
            }}
          >
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img
                className="thumb-img"
                src={img.src}
                alt={img.caption}
                style={{
                  width: '100%', height: '130px', objectFit: 'cover',
                  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
              {/* Hover overlay */}
              <div className="thumb-overlay" style={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(180deg, ${tagColor}20 0%, rgba(0,0,0,0.6) 100%)`,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: '6px',
                opacity: 0, transition: 'opacity 0.3s ease',
              }}>
                <ZoomIn size={18} style={{ color: '#fff' }} />
                <span style={{
                  fontSize: '10px', fontWeight: 700, color: '#fff',
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                }}>
                  Agrandir
                </span>
              </div>
              {/* Number badge */}
              <div style={{
                position: 'absolute', top: '8px', right: '8px',
                width: '22px', height: '22px', borderRadius: '6px',
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(4px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '10px', fontWeight: 700, color: '#fff',
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                {i + 2}
              </div>
            </div>
            <div style={{
              padding: '8px 10px',
              background: '#fafbfc', borderTop: '1px solid #f1f5f9',
            }}>
              <p style={{
                fontSize: '11px', fontWeight: 600, color: '#475569',
                lineHeight: 1.3,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}>
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={gallery}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
          tagColor={tagColor}
        />
      )}
    </div>
  )
}

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
          {stage.infos.map((info) => {
            const InfoIcon = info.icon
            const { label, value, link } = info
            return (
            <div key={label} className="flex items-start gap-2.5 p-3 rounded-xl" style={{
              background: '#f8fafc', border: '1px solid #e2e8f0',
            }}>
              <InfoIcon size={14} style={{ color: stage.tagColor, marginTop: '2px', flexShrink: 0 }} />
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
            )
          })}
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

        {/* Galerie illustrations */}
        {stage.gallery && stage.gallery.length > 0 && (
          <GallerySection gallery={stage.gallery} tagColor={stage.tagColor} />
        )}

        {/* ── Ressources & Documents ── */}
        <div className="mt-6 rounded-2xl overflow-hidden" style={{
          background: '#0f172a',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.06,
            background: `radial-gradient(circle at 20% 50%, ${stage.tagColor} 0%, transparent 60%), radial-gradient(circle at 80% 50%, #8b5cf6 0%, transparent 60%)`,
          }} />
          <div style={{ position: 'relative', padding: '1.75rem 2rem' }}>
            <p className="flex items-center gap-2.5" style={{
              fontSize: '14px', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.01em', marginBottom: '1.25rem',
            }}>
              <span style={{
                width: '28px', height: '28px', borderRadius: '8px',
                background: `linear-gradient(135deg, ${stage.tagColor}, ${stage.tagColor}cc)`,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <FileText size={14} style={{ color: '#fff' }} />
              </span>
              Ressources & Documents
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Attestation */}
              <a href={stage.attestationPdf} target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-5 rounded-xl text-center"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(8px)',
                  textDecoration: 'none',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = `${stage.tagColor}60`; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: `linear-gradient(135deg, ${stage.tagColor}, ${stage.tagColor}bb)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 4px 15px ${stage.tagColor}40`,
                }}>
                  <Download size={22} style={{ color: '#fff' }} />
                </div>
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: '#f1f5f9', marginBottom: '3px' }}>
                    Attestation de stage
                  </p>
                  <p style={{ fontSize: '11px', color: '#64748b', fontWeight: 500 }}>
                    Document officiel PDF
                  </p>
                </div>
              </a>

              {/* Documents complémentaires */}
              {stage.documents && stage.documents.map((doc, i) => (
                <a key={i} href={doc.src} target="_blank" rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-5 rounded-xl text-center"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(8px)',
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = `${stage.tagColor}60`; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '14px',
                    background: 'rgba(255,255,255,0.08)',
                    border: `1px solid ${stage.tagColor}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <FileText size={22} style={{ color: stage.tagColor }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: 700, color: '#f1f5f9', marginBottom: '3px', lineHeight: 1.3 }}>
                      {doc.label}
                    </p>
                    <p style={{ fontSize: '11px', color: '#64748b', fontWeight: 500 }}>
                      Procédure technique PDF
                    </p>
                  </div>
                </a>
              ))}

              {/* Site web */}
              {stage.siteUrl && (
                <a href={stage.siteUrl} target="_blank" rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-5 rounded-xl text-center"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(8px)',
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = `${stage.tagColor}60`; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '14px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Globe size={22} style={{ color: '#94a3b8' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', fontWeight: 700, color: '#f1f5f9', marginBottom: '3px' }}>
                      Site officiel
                    </p>
                    <p style={{ fontSize: '11px', color: '#64748b', fontWeight: 500 }}>
                      {stage.siteUrl.replace('https://', '')}
                    </p>
                  </div>
                </a>
              )}
            </div>
          </div>
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
            Les structures qui m'ont accueilli en stage durant ma formation BTS SIO option SISR
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
