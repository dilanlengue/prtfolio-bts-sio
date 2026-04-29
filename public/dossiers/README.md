# Dossiers BTS SIO SISR

Drop your finished PDFs here using these exact filenames. The portfolio code already references them — when a file appears, its card flips from "Bientôt" / "En cours" to "Disponible" with a download button.

## Expected filenames

### Épreuve E4 — Support et mise à disposition de services informatiques
- `e4-glpi-support.pdf` — Dossier E4 GLPI & support
- `rapport-stage-bna.pdf` — Rapport de stage B&A Conseil

### Épreuve E5 — Administration des systèmes et des réseaux
- `e5-active-directory.pdf` — Dossier E5 Active Directory
- `e5-vlan-cisco.pdf` — Dossier E5 Réseau VLAN Cisco
- `e5-openvpn.pdf` — Dossier E5 VPN OpenVPN
- `e5-nagios.pdf` — Dossier E5 Supervision Nagios

### Épreuve E6 — Parcours de professionnalisation
- `e6-tableau-synthese.pdf` — Tableau de synthèse E6
- `e6-veille.pdf` — Rapport de veille technologique

### Stage 1ère année
- `rapport-stage-reparateurs.pdf` — Rapport de stage Les Réparateurs Mac & PC

## Switching status to "Disponible"

After dropping the PDF, change `status: 'planned'` (or `'in-progress'`) to `status: 'available'` in:
- `src/components/BTS.jsx` — for the entries inside `epreuves[].docs[]`
- `src/components/Projets.jsx` — for the entries inside `guides[]`
