import { useState } from 'react'
import {
  X, FileText, Lock, Target, Server, CheckCircle2,
  ListOrdered, Award, AlertTriangle, Monitor, Settings,
  Shield, Network, Database, Globe, Cpu
} from 'lucide-react'

const projets = [
  {
    id: 1,
    title: 'Infrastructure Réseau VLAN',
    subtitle: 'Cisco Packet Tracer',
    logo: '/logos/cisco.svg',
    color: '#049FD9',
    image: '/projects/vlan.webp',
    badge: 'E5',
    badgeColor: '#a855f3',
    description: 'Segmentation VLAN et routage inter-VLAN via Router-on-a-Stick avec liens trunk 802.1Q.',
    technologies: ['Cisco IOS', 'VLAN', '802.1Q', 'TCP/IP', 'Trunk'],
    docPdf: null,
    context: "Dans le cadre d'une entreprise multi-services, le réseau initial était un réseau plat (flat network) sans segmentation, exposant l'ensemble des flux de données de chaque service. Cette architecture entraînait des problèmes de performances (broadcast storms), des risques de sécurité (accès non cloisonnés) et une difficulté de gestion. L'objectif était de concevoir une infrastructure VLAN segmentée pour isoler les différents services (Direction, Comptabilité, Technique, Invités) tout en maintenant la communication inter-services via un routage contrôlé.",
    objectives: [
      "Segmenter le réseau en 4 VLAN distincts pour isoler les flux par service",
      "Configurer le routage inter-VLAN via la méthode Router-on-a-Stick (sous-interfaces)",
      "Mettre en place les liens trunk 802.1Q entre les switches et le routeur",
      "Documenter l'adressage IP et les schémas réseau pour faciliter la maintenance"
    ],
    environment: ['Cisco Packet Tracer 8.2', 'Switch Cisco 2960 (IOS 15.0)', 'Routeur Cisco 2911 (IOS 15.4)', 'Protocole 802.1Q', 'TCP/IP v4', 'Câblage UTP Cat.6'],
    steps: [
      "Analyse du réseau existant et définition du plan d'adressage IP par VLAN (10.0.10.0/24, 10.0.20.0/24, 10.0.30.0/24, 10.0.40.0/24)",
      "Création des VLAN 10 (Direction), 20 (Comptabilité), 30 (Technique), 40 (Invités) sur les switches Cisco 2960",
      "Affectation des ports d'accès aux VLAN correspondants et configuration des ports trunk en 802.1Q",
      "Configuration des sous-interfaces sur le routeur 2911 (encapsulation dot1Q) pour le routage inter-VLAN",
      "Tests de connectivité : ping intra-VLAN et inter-VLAN, vérification de l'isolation du VLAN Invités",
      "Rédaction de la documentation technique : schéma Packet Tracer, tableau d'adressage, procédures"
    ],
    results: [
      "Isolation complète des flux réseau entre les 4 services de l'entreprise",
      "Réduction du domaine de broadcast de 100% à 25% par segment",
      "Communication inter-VLAN fonctionnelle via le routeur avec contrôle granulaire",
      "Documentation technique complète (schéma réseau, plan d'adressage, configuration IOS)"
    ],
    competences: [
      { code: 'B2.1', label: "Concevoir une solution d'infrastructure réseau" },
      { code: 'B2.2', label: "Installer, tester et déployer une solution d'infrastructure réseau" },
      { code: 'B2.3', label: "Exploiter, dépanner et superviser une solution d'infrastructure réseau" },
      { code: 'B3.5', label: "Assurer la cybersécurité d'une infrastructure réseau" },
    ],
    difficulties: [
      {
        problem: "Les sous-interfaces du routeur ne recevaient pas les trames taguées 802.1Q, empêchant tout routage inter-VLAN.",
        solution: "Le port du switch connecté au routeur était en mode access au lieu de trunk. Après passage en mode trunk avec autorisation de tous les VLAN, le routage a fonctionné immédiatement."
      },
      {
        problem: "Le VLAN Invités communiquait avec les autres VLAN malgré la segmentation souhaitée.",
        solution: "Ajout d'une ACL sur la sous-interface du VLAN 40 pour bloquer le trafic vers les réseaux internes tout en autorisant l'accès Internet uniquement."
      }
    ],
  },
  {
    id: 2,
    title: 'Active Directory',
    subtitle: 'Windows Server 2022',
    logo: '/logos/activedirectory.svg',
    color: '#00BEF2',
    image: '/projects/ad.webp',
    badge: 'E5',
    badgeColor: '#a855f3',
    description: "Déploiement d'un contrôleur de domaine AD DS & DNS intégré en environnement Windows Server.",
    technologies: ['Windows Server 2022', 'AD DS', 'DNS', 'DHCP', 'GPO'],
    docPdf: null,
    context: "L'entreprise disposait de postes de travail gérés de manière indépendante (workgroup), sans annuaire centralisé. Chaque poste avait ses propres comptes utilisateurs locaux, rendant impossible toute gestion centralisée des droits, des mots de passe et des configurations. Le besoin était de déployer un domaine Active Directory pour centraliser l'administration de l'ensemble du parc informatique (utilisateurs, postes, politiques de sécurité).",
    objectives: [
      "Installer et configurer un contrôleur de domaine Active Directory sur Windows Server 2022",
      "Intégrer les services DNS et DHCP au domaine pour une résolution de noms et attribution d'adresses automatisées",
      "Créer une structure d'Unités d'Organisation (OU) reflétant l'organigramme de l'entreprise",
      "Joindre les postes clients au domaine et déployer les premières stratégies de groupe (GPO)"
    ],
    environment: ['Windows Server 2022 Datacenter', 'Hyper-V (virtualisation)', 'AD DS (Active Directory Domain Services)', 'DNS intégré AD', 'DHCP Server', 'Windows 10/11 Pro (clients)', 'PowerShell 5.1'],
    steps: [
      "Installation de Windows Server 2022 sur hyperviseur Hyper-V, configuration IP statique et nom d'hôte (SRV-DC01)",
      "Installation du rôle AD DS via Server Manager et promotion en contrôleur de domaine (dcpromo) pour le domaine lengue.local",
      "Configuration du DNS intégré à Active Directory avec zone de recherche directe et inversée",
      "Installation et configuration du rôle DHCP : étendue 10.0.0.100-200, options serveur (DNS, passerelle)",
      "Création des OU (Direction, RH, Technique, Stagiaires) et des comptes utilisateurs avec groupes de sécurité associés",
      "Jonction des postes Windows 10/11 au domaine et vérification de l'authentification centralisée"
    ],
    results: [
      "Domaine Active Directory lengue.local opérationnel avec 1 contrôleur de domaine",
      "Authentification centralisée pour tous les utilisateurs du parc (SSO Windows)",
      "Attribution automatique des adresses IP via DHCP intégré au domaine",
      "Structure OU et groupes de sécurité prêts pour l'application de GPO"
    ],
    competences: [
      { code: 'B1.1', label: "Gérer le patrimoine informatique" },
      { code: 'B2.1', label: "Concevoir une solution d'infrastructure réseau" },
      { code: 'B2.2', label: "Installer, tester et déployer une solution d'infrastructure réseau" },
      { code: 'B3.2', label: "Préserver l'identité numérique de l'organisation" },
      { code: 'B3.3', label: "Sécuriser les équipements et les usages des utilisateurs" },
    ],
    difficulties: [
      {
        problem: "Après la promotion en contrôleur de domaine, le service DNS ne démarrait pas et les enregistrements SRV n'étaient pas créés.",
        solution: "Le problème venait d'un conflit d'adresse IP. Après attribution d'une IP statique correcte et redémarrage du service Netlogon, les enregistrements DNS se sont créés automatiquement."
      },
      {
        problem: "Les postes clients ne parvenaient pas à joindre le domaine (erreur 'Le domaine spécifié n'existe pas').",
        solution: "La configuration DNS des postes clients pointait vers un DNS externe (8.8.8.8) au lieu du serveur AD. Correction du serveur DNS préféré vers l'IP du DC (10.0.0.1) dans les paramètres DHCP."
      }
    ],
  },
  {
    id: 3,
    title: 'Serveur DHCP',
    subtitle: 'Windows Server',
    logo: '/logos/windows.svg',
    color: '#0078D4',
    image: '/projects/ad.webp',
    badge: 'E5',
    badgeColor: '#a855f3',
    description: "Configuration du rôle DHCP — étendues, réservations et options de serveur.",
    technologies: ['Windows Server 2022', 'DHCP', 'TCP/IP', 'DNS', 'PowerShell'],
    docPdf: null,
    context: "L'attribution manuelle des adresses IP sur un parc de plus de 50 postes générait des erreurs récurrentes : conflits d'adresses, oublis de configuration DNS/passerelle, temps d'intervention élevé pour chaque nouveau poste. Le service informatique perdait un temps considérable à gérer l'adressage réseau manuellement. Il était nécessaire de mettre en place un service DHCP centralisé pour automatiser et fiabiliser l'attribution des paramètres réseau.",
    objectives: [
      "Installer et configurer le rôle DHCP sur Windows Server 2022",
      "Créer des étendues adaptées à la topologie réseau avec plages d'exclusion",
      "Configurer les réservations d'adresses pour les équipements critiques (serveurs, imprimantes)",
      "Paramétrer les options de serveur (DNS, passerelle, nom de domaine) pour un déploiement automatisé"
    ],
    environment: ['Windows Server 2022', 'Console DHCP (dhcpmgmt.msc)', 'PowerShell (cmdlets DHCP)', 'TCP/IP v4', 'DNS intégré AD', 'Wireshark (analyse DORA)'],
    steps: [
      "Installation du rôle DHCP via Server Manager et autorisation du serveur dans Active Directory",
      "Création de l'étendue principale : plage 10.0.0.100 à 10.0.0.250, masque /24, bail de 8 heures",
      "Configuration des plages d'exclusion pour les adresses réservées aux serveurs (10.0.0.1-10.0.0.20)",
      "Paramétrage des options d'étendue : passerelle (10.0.0.254), serveur DNS (10.0.0.1), suffixe DNS (lengue.local)",
      "Création de réservations DHCP par adresse MAC pour les imprimantes réseau et serveurs d'impression",
      "Validation avec Wireshark : capture du processus DORA (Discover, Offer, Request, Acknowledge)"
    ],
    results: [
      "Attribution automatique des adresses IP pour l'ensemble du parc en moins de 3 secondes",
      "Zéro conflit d'adresse IP depuis la mise en production du service DHCP",
      "Réservations actives pour 8 équipements critiques (imprimantes, NAS, bornes Wi-Fi)",
      "Temps de configuration d'un nouveau poste réduit de 15 minutes à 0 (plug & play)"
    ],
    competences: [
      { code: 'B1.1', label: "Gérer le patrimoine informatique" },
      { code: 'B2.2', label: "Installer, tester et déployer une solution d'infrastructure réseau" },
      { code: 'B2.3', label: "Exploiter, dépanner et superviser une solution d'infrastructure réseau" },
    ],
    difficulties: [
      {
        problem: "Un serveur DHCP non autorisé (rogue DHCP) sur le réseau distribuait des adresses incorrectes, provoquant des conflits.",
        solution: "Identification du serveur pirate via Wireshark (analyse des paquets DHCP Offer), puis autorisation exclusive du serveur DHCP légitime dans Active Directory et désactivation du service sur la machine non autorisée."
      },
      {
        problem: "Les baux DHCP par défaut de 8 jours saturaient la plage d'adresses disponibles.",
        solution: "Réduction de la durée de bail à 8 heures pour les postes standards et 4 heures pour le VLAN Invités, libérant ainsi les adresses plus rapidement."
      }
    ],
  },
  {
    id: 4,
    title: 'GLPI & FusionInventory',
    subtitle: 'Gestion de parc ITSM',
    logo: '/logos/glpi.svg',
    color: '#8B5CF6',
    image: '/projects/glpi.webp',
    badge: 'E4',
    badgeColor: '#22d3ee',
    description: "Déploiement GLPI + FusionInventory : gestion de parc, ticketing et inventaire automatique.",
    technologies: ['GLPI 10', 'FusionInventory', 'Apache', 'MySQL', 'PHP', 'ITIL'],
    docPdf: null,
    context: "Lors de mon stage chez B&A Conseil, la gestion du parc informatique reposait sur des fichiers Excel partagés, sans suivi centralisé des interventions ni historique des incidents. Les techniciens ne disposaient d'aucun outil de ticketing conforme aux bonnes pratiques ITIL. Le manque de visibilité sur le parc matériel et logiciel compliquait les opérations de maintenance préventive et la planification des renouvellements. Il fallait déployer une solution ITSM professionnelle.",
    objectives: [
      "Déployer GLPI sur un serveur LAMP pour centraliser la gestion du parc informatique",
      "Installer et configurer le plugin FusionInventory pour l'inventaire automatique des postes",
      "Mettre en place le module de ticketing ITIL (incidents, demandes, changements)",
      "Former les utilisateurs à la création de tickets et les techniciens au traitement"
    ],
    environment: ['Debian 12 (serveur)', 'Apache 2.4', 'PHP 8.2', 'MariaDB 10.11', 'GLPI 10.0.10', 'FusionInventory Agent 2.6', 'Navigateur web (interface GLPI)'],
    steps: [
      "Installation du socle LAMP (Apache, MariaDB, PHP 8.2) sur Debian 12 et sécurisation de la base de données",
      "Déploiement de GLPI 10 : téléchargement, extraction, configuration de la base de données, assistant d'installation web",
      "Installation du plugin FusionInventory dans GLPI et configuration des règles d'import automatique",
      "Déploiement de l'agent FusionInventory sur les postes Windows (GPO) et Linux (apt) du parc",
      "Configuration du module de ticketing : catégories d'incidents, SLA, gabarits de tickets, notifications email",
      "Formation des 5 techniciens et rédaction d'un guide utilisateur pour la création de tickets"
    ],
    results: [
      "Inventaire automatique de 47 postes et 12 équipements réseau en moins de 24h",
      "Réduction du temps moyen de résolution des incidents de 4h à 1h30 grâce au ticketing structuré",
      "Traçabilité complète de chaque intervention avec historique et pièces jointes",
      "Base de connaissances GLPI alimentée avec 15 procédures de résolution courantes"
    ],
    competences: [
      { code: 'B1.1', label: "Gérer le patrimoine informatique" },
      { code: 'B1.2', label: "Répondre aux incidents et aux demandes d'assistance" },
      { code: 'B1.4', label: "Travailler en mode projet" },
      { code: 'B2.2', label: "Installer, tester et déployer une solution d'infrastructure réseau" },
    ],
    difficulties: [
      {
        problem: "L'agent FusionInventory ne remontait pas les informations de certains postes Windows : l'inventaire restait incomplet.",
        solution: "Le pare-feu Windows bloquait la communication sur le port 62354. Création d'une règle de pare-feu via GPO pour autoriser le trafic entrant/sortant de l'agent FusionInventory sur tous les postes du domaine."
      },
      {
        problem: "Les doublons d'équipements dans GLPI après chaque inventaire faussaient les statistiques du parc.",
        solution: "Configuration des règles de réconciliation dans FusionInventory basées sur le numéro de série et l'adresse MAC, permettant la fusion automatique des entrées en double."
      }
    ],
  },
  {
    id: 5,
    title: 'Authentification Sécurisée',
    subtitle: 'PHP & MySQL',
    logo: null,
    color: '#10b981',
    image: '/projects/marketplace.webp',
    badge: 'E4',
    badgeColor: '#22d3ee',
    description: "Formulaires d'authentification sécurisés avec sessions PHP et protection SQL.",
    technologies: ['PHP 8.2', 'MySQL 8', 'HTML5/CSS3', 'Sessions', 'PDO'],
    docPdf: null,
    context: "Dans le cadre d'un projet de développement web, il m'a été demandé de créer un système d'authentification sécurisé pour une application interne. L'ancien système stockait les mots de passe en clair dans la base de données et les formulaires étaient vulnérables aux injections SQL. Suite à un audit de sécurité interne, la refonte complète du module d'authentification était devenue prioritaire pour se conformer aux bonnes pratiques de sécurité applicative.",
    objectives: [
      "Développer un formulaire d'inscription et de connexion sécurisé (validation côté client et serveur)",
      "Implémenter le hachage des mots de passe avec l'algorithme bcrypt (password_hash / password_verify)",
      "Protéger les requêtes SQL contre les injections via les requêtes préparées PDO",
      "Gérer les sessions PHP de manière sécurisée (régénération d'ID, expiration, protection CSRF)"
    ],
    environment: ['PHP 8.2', 'MySQL 8.0', 'Apache 2.4 (XAMPP)', 'HTML5 / CSS3', 'PDO (PHP Data Objects)', 'phpMyAdmin', 'Navigateur DevTools (tests)'],
    steps: [
      "Conception de la base de données : table users (id, email, password_hash, role, created_at) avec contraintes d'unicité",
      "Développement du formulaire d'inscription avec validation côté serveur (regex email, longueur mot de passe, confirmation)",
      "Implémentation du hachage bcrypt avec password_hash() et vérification avec password_verify()",
      "Sécurisation des requêtes SQL : remplacement de toutes les concaténations par des requêtes préparées PDO (bindParam)",
      "Gestion des sessions sécurisées : session_regenerate_id() à chaque connexion, token CSRF dans les formulaires, cookie HttpOnly",
      "Tests de sécurité : tentatives d'injection SQL, tests XSS, vérification de la robustesse du hachage"
    ],
    results: [
      "Zéro vulnérabilité d'injection SQL détectée lors des tests de pénétration manuels",
      "Mots de passe stockés sous forme de hash bcrypt (coût 12), irréversibles même en cas de fuite de BDD",
      "Sessions sécurisées avec expiration automatique après 30 minutes d'inactivité",
      "Protection CSRF opérationnelle sur tous les formulaires de l'application"
    ],
    competences: [
      { code: 'B1.3', label: "Développer la présence en ligne" },
      { code: 'B3.1', label: "Protéger les données à caractère personnel" },
      { code: 'B3.2', label: "Préserver l'identité numérique de l'organisation" },
      { code: 'B3.4', label: "Garantir la disponibilité, l'intégrité et la confidentialité" },
    ],
    difficulties: [
      {
        problem: "Le formulaire de connexion acceptait les caractères spéciaux dans le champ email, permettant des tentatives d'injection XSS.",
        solution: "Mise en place d'une double validation : filtre FILTER_VALIDATE_EMAIL côté PHP et attribut type='email' côté HTML, plus échappement systématique avec htmlspecialchars() en sortie."
      },
      {
        problem: "Les sessions étaient fixées (session fixation) : un attaquant pouvait forcer un ID de session connu.",
        solution: "Appel systématique de session_regenerate_id(true) après chaque authentification réussie, et configuration de session.cookie_httponly et session.cookie_secure dans php.ini."
      }
    ],
  },
  {
    id: 6,
    title: 'GPO — Stratégies de groupe',
    subtitle: 'Active Directory',
    logo: '/logos/gpo.svg',
    color: '#3B82F6',
    image: '/projects/ad.webp',
    badge: 'E5',
    badgeColor: '#a855f3',
    description: "Configuration de GPO pour sécuriser et administrer les postes du domaine AD.",
    technologies: ['GPO', 'Active Directory', 'Windows Server 2022', 'GPMC', 'Sécurité'],
    docPdf: null,
    context: "Après le déploiement du domaine Active Directory, les postes clients ne disposaient d'aucune politique de sécurité unifiée : les utilisateurs pouvaient installer des logiciels librement, les mots de passe n'avaient aucune exigence de complexité, le pare-feu Windows était désactivé sur certains postes, et le bureau pouvait être modifié sans restriction. Il fallait déployer des stratégies de groupe (GPO) pour homogénéiser et sécuriser la configuration de l'ensemble du parc.",
    objectives: [
      "Définir et appliquer une politique de mots de passe robuste (complexité, expiration, historique)",
      "Restreindre l'accès au Panneau de configuration et l'installation de logiciels non autorisés",
      "Déployer des logiciels automatiquement via GPO (navigateur, antivirus, outils bureautiques)",
      "Configurer le pare-feu Windows et les règles d'audit de sécurité via stratégie de groupe"
    ],
    environment: ['Windows Server 2022 (DC)', 'Console GPMC (gpmc.msc)', 'Active Directory Users & Computers', 'Éditeur de stratégie de groupe (gpedit.msc)', 'Rsop.msc (jeu de résultats)', 'gpresult /r (diagnostic)'],
    steps: [
      "Audit de l'existant : analyse des configurations postes avec gpresult /r et identification des failles de sécurité",
      "Création de la GPO 'Politique de mots de passe' : longueur minimale 12 caractères, complexité activée, expiration 90 jours, historique 5",
      "Création de la GPO 'Restrictions utilisateurs' : blocage du Panneau de configuration, interdiction de modifier le fond d'écran, masquage des lecteurs système",
      "Création de la GPO 'Pare-feu & Sécurité' : activation du pare-feu Windows, blocage des ports non essentiels, activation de l'audit des connexions",
      "Création de la GPO 'Déploiement logiciels' : installation automatique de Firefox et LibreOffice via packages MSI",
      "Tests et validation : gpresult /r sur les postes cibles, vérification de l'application avec Rsop.msc, documentation des GPO"
    ],
    results: [
      "5 GPO déployées et liées aux OU appropriées, appliquées sur 100% des postes du domaine",
      "Conformité de tous les mots de passe aux exigences ANSSI (12 caractères, complexité, expiration)",
      "Déploiement silencieux de Firefox et LibreOffice sur 30 postes en moins de 2 heures",
      "Pare-feu Windows activé et configuré de manière uniforme sur l'ensemble du parc"
    ],
    competences: [
      { code: 'B2.2', label: "Installer, tester et déployer une solution d'infrastructure réseau" },
      { code: 'B2.3', label: "Exploiter, dépanner et superviser une solution d'infrastructure réseau" },
      { code: 'B3.2', label: "Préserver l'identité numérique de l'organisation" },
      { code: 'B3.3', label: "Sécuriser les équipements et les usages des utilisateurs" },
      { code: 'B3.4', label: "Garantir la disponibilité, l'intégrité et la confidentialité" },
    ],
    difficulties: [
      {
        problem: "La GPO de déploiement de logiciels ne s'appliquait pas : les postes ne recevaient pas les packages MSI au redémarrage.",
        solution: "Le partage réseau contenant les MSI n'avait pas les droits de lecture pour le groupe 'Ordinateurs du domaine'. Correction des ACL NTFS et des permissions de partage, puis gpupdate /force."
      },
      {
        problem: "Un conflit entre deux GPO provoquait l'écrasement de la politique de mots de passe par les paramètres par défaut du domaine.",
        solution: "Utilisation de l'onglet 'Héritage de stratégie de groupe' dans GPMC pour identifier le conflit, puis réorganisation de la priorité des GPO (order of precedence) et blocage de l'héritage sur l'OU concernée."
      }
    ],
  },
  {
    id: 7,
    title: 'VPN OpenVPN',
    subtitle: 'Debian 12 · SSL/TLS',
    logo: '/logos/openvpn.svg',
    color: '#EA7E20',
    image: '/projects/vpn.webp',
    badge: 'E5',
    badgeColor: '#a855f3',
    description: "Tunnel VPN SSL/TLS client-serveur avec PKI, certificats et routage sécurisé.",
    technologies: ['OpenVPN 2.6', 'PKI / Easy-RSA', 'iptables', 'Debian 12', 'SSL/TLS'],
    docPdf: null,
    context: "Des collaborateurs en télétravail avaient besoin d'un accès sécurisé aux ressources internes de l'entreprise (serveurs de fichiers, intranet, applications métier). L'utilisation de solutions de bureau à distance sans chiffrement exposait les données à des risques d'interception (attaque man-in-the-middle). La mise en place d'un tunnel VPN SSL/TLS permettait de créer un canal de communication chiffré entre les postes distants et le réseau interne de l'entreprise.",
    objectives: [
      "Déployer un serveur OpenVPN sur Debian 12 avec authentification par certificats X.509",
      "Créer une infrastructure PKI complète (CA, certificats serveur et clients) avec Easy-RSA",
      "Configurer le routage et les règles iptables (NAT/FORWARD) pour l'accès aux ressources internes",
      "Sécuriser les connexions avec TLS 1.3, clé tls-crypt et chiffrement AES-256-GCM"
    ],
    environment: ['Debian 12 (serveur VPN)', 'OpenVPN 2.6', 'Easy-RSA 3.1 (PKI)', 'iptables / nftables', 'TLS 1.3', 'AES-256-GCM', 'OpenVPN Connect (clients Windows/macOS)', 'Wireshark (analyse)'],
    steps: [
      "Installation d'OpenVPN et Easy-RSA sur Debian 12, initialisation de la PKI (init-pki, build-ca)",
      "Génération des certificats : CA racine, certificat serveur (build-server-full), certificats clients nominatifs (build-client-full)",
      "Configuration du serveur OpenVPN : port 1194/UDP, protocole TLS 1.3, chiffrement AES-256-GCM, sous-réseau VPN 10.8.0.0/24",
      "Configuration des règles iptables : MASQUERADE (NAT) pour le trafic VPN, FORWARD entre tun0 et eth0, journalisation",
      "Création des fichiers .ovpn clients embarquant les certificats, déploiement et test sur Windows et macOS",
      "Tests de sécurité : vérification du chiffrement avec Wireshark (trafic illisible), test de déconnexion/reconnexion automatique"
    ],
    results: [
      "Tunnel VPN opérationnel avec chiffrement AES-256-GCM et authentification par certificats X.509",
      "5 profils clients .ovpn générés et distribués de manière sécurisée aux télétravailleurs",
      "Accès sécurisé aux ressources internes (serveur de fichiers, intranet) depuis l'extérieur",
      "Aucune donnée lisible capturée par Wireshark sur le trafic VPN — chiffrement validé"
    ],
    competences: [
      { code: 'B2.1', label: "Concevoir une solution d'infrastructure réseau" },
      { code: 'B2.2', label: "Installer, tester et déployer une solution d'infrastructure réseau" },
      { code: 'B3.4', label: "Garantir la disponibilité, l'intégrité et la confidentialité" },
      { code: 'B3.5', label: "Assurer la cybersécurité d'une infrastructure réseau" },
    ],
    difficulties: [
      {
        problem: "Les clients VPN se connectaient au serveur mais ne pouvaient pas atteindre les ressources du réseau interne (pas de réponse ping).",
        solution: "L'IP forwarding n'était pas activé sur le serveur Debian (net.ipv4.ip_forward=0). Activation via sysctl.conf et ajout des règles iptables FORWARD et MASQUERADE pour le sous-réseau VPN."
      },
      {
        problem: "Le certificat du CA expirait après 1 an par défaut, ce qui invaliderait tous les certificats clients.",
        solution: "Reconfiguration d'Easy-RSA avec des durées de validité adaptées : CA = 10 ans, serveur = 5 ans, clients = 2 ans. Documentation de la procédure de renouvellement et de la CRL."
      }
    ],
  },
  {
    id: 8,
    title: 'Supervision Nagios',
    subtitle: 'Monitoring réseau',
    logo: '/logos/nagios.svg',
    color: '#00B050',
    image: '/projects/nagios.webp',
    badge: 'E5',
    badgeColor: '#a855f3',
    description: "Supervision d'infrastructure avec Nagios Core, NRPE et alertes email.",
    technologies: ['Nagios Core 4.5', 'NRPE', 'SNMP', 'Debian 12', 'Apache'],
    docPdf: null,
    context: "L'infrastructure réseau de l'entreprise ne disposait d'aucun outil de supervision : les pannes étaient détectées uniquement lorsque les utilisateurs signalaient un dysfonctionnement, parfois plusieurs heures après l'incident. L'absence de monitoring proactif entraînait des temps d'indisponibilité élevés et un impact direct sur la productivité. Il fallait déployer une solution de supervision capable de surveiller en temps réel l'état des serveurs, services et équipements réseau, et d'alerter automatiquement en cas d'anomalie.",
    objectives: [
      "Installer et configurer Nagios Core sur Debian 12 pour la supervision de l'infrastructure",
      "Déployer l'agent NRPE sur les serveurs Linux et Windows pour la collecte de métriques système",
      "Configurer la supervision SNMP pour les équipements réseau (switches, routeurs, bornes Wi-Fi)",
      "Mettre en place les notifications email et les seuils d'alerte (warning, critical) pour chaque service"
    ],
    environment: ['Debian 12 (serveur Nagios)', 'Nagios Core 4.5', 'NRPE 4.1 (agents)', 'SNMP v2c/v3', 'Apache 2.4 (interface web)', 'Postfix (envoi email)', 'Nagios Plugins 2.4', 'NSClient++ (agent Windows)'],
    steps: [
      "Installation de Nagios Core depuis les sources sur Debian 12 : compilation, configuration Apache, création de l'utilisateur nagiosadmin",
      "Installation des plugins Nagios (check_ping, check_http, check_disk, check_load, check_ssh) et du démon NRPE",
      "Déploiement de l'agent NRPE sur les serveurs Linux : configuration des checks locaux (CPU, RAM, disque, swap, processus)",
      "Configuration SNMP v2c sur les switches et routeurs Cisco : surveillance de l'état des interfaces, du trafic et de l'uptime",
      "Définition des hôtes, services et seuils dans les fichiers de configuration Nagios (hosts.cfg, services.cfg) avec templates",
      "Configuration de Postfix et des contacts Nagios pour les notifications email en cas d'alerte WARNING ou CRITICAL"
    ],
    results: [
      "Supervision en temps réel de 12 hôtes et 48 services avec rafraîchissement toutes les 5 minutes",
      "Détection automatique des pannes avec notification email en moins de 10 minutes (vs plusieurs heures auparavant)",
      "Dashboard Nagios accessible en temps réel via l'interface web pour l'équipe technique",
      "Temps moyen de détection des incidents réduit de 3 heures à 8 minutes grâce aux alertes proactives"
    ],
    competences: [
      { code: 'B1.2', label: "Répondre aux incidents et aux demandes d'assistance" },
      { code: 'B2.2', label: "Installer, tester et déployer une solution d'infrastructure réseau" },
      { code: 'B2.3', label: "Exploiter, dépanner et superviser une solution d'infrastructure réseau" },
      { code: 'B3.4', label: "Garantir la disponibilité, l'intégrité et la confidentialité" },
    ],
    difficulties: [
      {
        problem: "Le plugin check_nrpe renvoyait 'Connection refused' sur les serveurs Linux distants malgré l'installation de l'agent.",
        solution: "Le fichier nrpe.cfg ne contenait pas l'adresse IP du serveur Nagios dans la directive allowed_hosts. Ajout de l'IP du serveur Nagios et redémarrage du service NRPE."
      },
      {
        problem: "Les notifications email n'arrivaient pas : Nagios détectait les alertes mais n'envoyait aucun mail.",
        solution: "Postfix n'était pas configuré comme relais SMTP. Configuration de relayhost avec le serveur SMTP de l'entreprise et test avec la commande mail. Les notifications ont fonctionné immédiatement après."
      }
    ],
  },
]

/* ═══ ICONS MAP FOR MODAL SECTIONS ═══ */
const SectionIcon = ({ icon: Icon, color }) => (
  <div style={{
    width: '32px', height: '32px', borderRadius: '10px',
    background: `${color}15`,
    border: `1px solid ${color}25`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  }}>
    <Icon size={16} style={{ color }} />
  </div>
)

const SectionTitle = ({ icon: Icon, label, color }) => (
  <div className="flex items-center gap-3" style={{ marginBottom: '0.75rem' }}>
    <SectionIcon icon={Icon} color={color} />
    <p style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '11px', fontWeight: 700, color: '#94a3b8',
      textTransform: 'uppercase', letterSpacing: '0.1em',
      margin: 0,
    }}>
      {label}
    </p>
  </div>
)

/* ═══ PROJET CARD (unchanged) ═══ */
function ProjetCard({ projet, onClick }) {
  return (
    <div
      className="card-holo card-3d rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        background: 'rgba(11,16,32,0.75)',
        border: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={() => onClick(projet)}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.borderColor = `${projet.color}40`
        e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.4), 0 0 30px ${projet.color}15`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Image */}
      <div style={{ height: '170px', overflow: 'hidden', position: 'relative' }}>
        {projet.image && (
          <img
            src={projet.image}
            alt={projet.title}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
        )}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%)',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '3px', background: projet.color,
        }} />
        {projet.badge && (
          <span style={{
            position: 'absolute', top: '10px', right: '10px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px', fontWeight: 800,
            padding: '4px 10px', borderRadius: '6px',
            background: `${projet.badgeColor}25`,
            color: projet.badgeColor,
            backdropFilter: 'blur(8px)',
            zIndex: 3,
          }}>
            {projet.badge}
          </span>
        )}
      </div>

      {/* Logo badge */}
      <div style={{
        display: 'flex', justifyContent: 'center',
        marginTop: '-28px', position: 'relative', zIndex: 2,
      }}>
        <div style={{
          width: '56px', height: '56px', borderRadius: '16px',
          background: 'rgba(11,16,32,0.95)',
          boxShadow: `0 4px 16px rgba(0,0,0,0.3), 0 0 20px ${projet.color}10`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: `2px solid ${projet.color}30`,
          overflow: 'hidden',
        }}>
          {projet.logo ? (
            <img src={projet.logo} alt="" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
          ) : (
            <Lock size={24} style={{ color: projet.color }} />
          )}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '0.7rem 1.4rem 1.4rem', textAlign: 'center' }}>
        <h3 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '15px', fontWeight: 700, color: '#f1f5f9',
          lineHeight: 1.3, marginBottom: '3px',
        }}>
          {projet.title}
        </h3>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px', fontWeight: 600, color: projet.color,
          textTransform: 'uppercase', letterSpacing: '0.05em',
          marginBottom: '0.7rem',
        }}>
          {projet.subtitle}
        </p>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '13px', color: '#64748b', lineHeight: 1.6,
          marginBottom: '1rem',
        }}>
          {projet.description}
        </p>
        <div className="flex flex-wrap justify-center gap-1.5">
          {projet.technologies.slice(0, 4).map(tech => (
            <span key={tech} style={{
              background: `${projet.color}10`,
              color: projet.color,
              fontSize: '11px', fontWeight: 600,
              padding: '3px 10px', borderRadius: '6px',
              border: `1px solid ${projet.color}20`,
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ═══ ENRICHED PROJET MODAL ═══ */
function ProjetModal({ projet, onClose }) {
  if (!projet) return null

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        padding: '2rem 1rem',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(11,16,32,0.97)',
          maxWidth: '700px', width: '100%',
          boxShadow: `0 24px 80px rgba(0,0,0,0.6), 0 0 1px rgba(255,255,255,0.1), 0 0 60px ${projet.color}08`,
          border: '1px solid rgba(255,255,255,0.08)',
          margin: '2rem 0',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* ── 1. HEADER ── */}
        <div style={{
          background: `linear-gradient(135deg, #0f172a 0%, #1e293b 50%, ${projet.color}25 100%)`,
          padding: '1.75rem 2rem',
          position: 'relative',
          borderBottom: `2px solid ${projet.color}30`,
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '16px', right: '16px',
              width: '36px', height: '36px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <X size={16} style={{ color: '#fff' }} />
          </button>
          <div className="flex items-center gap-4">
            <div style={{
              width: '56px', height: '56px', borderRadius: '16px',
              background: 'rgba(255,255,255,0.08)',
              border: `1px solid ${projet.color}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, overflow: 'hidden',
            }}>
              {projet.logo ? (
                <img src={projet.logo} alt="" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
              ) : (
                <Lock size={24} style={{ color: '#fff' }} />
              )}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h3 style={{
                  fontFamily: "'Orbitron', system-ui, sans-serif",
                  fontSize: '1.1rem', fontWeight: 800, color: '#fff',
                  lineHeight: 1.3,
                }}>
                  {projet.title}
                </h3>
                {projet.badge && (
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px', fontWeight: 800,
                    padding: '3px 10px', borderRadius: '6px',
                    background: `${projet.badgeColor}25`,
                    color: projet.badgeColor,
                  }}>
                    {projet.badge}
                  </span>
                )}
              </div>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px', fontWeight: 600, color: projet.color,
              }}>
                {projet.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* ── 2. SCREENSHOT ── */}
        {projet.image && (
          <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
            <img src={projet.image} alt={projet.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, transparent 60%, rgba(11,16,32,0.8) 100%)',
            }} />
          </div>
        )}

        {/* ── CONTENT ── */}
        <div style={{ padding: '1.75rem 2rem 2rem' }}>

          {/* ── 3. CONTEXTE ── */}
          <div style={{ marginBottom: '1.75rem' }}>
            <SectionTitle icon={Globe} label="Contexte" color={projet.color} />
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13.5px', color: '#cbd5e1', lineHeight: 1.85,
              paddingLeft: '2.75rem',
            }}>
              {projet.context}
            </p>
          </div>

          {/* ── 4. OBJECTIFS ── */}
          <div style={{ marginBottom: '1.75rem' }}>
            <SectionTitle icon={Target} label="Objectifs" color={projet.color} />
            <ul style={{ paddingLeft: '2.75rem', margin: 0, listStyle: 'none' }}>
              {projet.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2" style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13px', color: '#cbd5e1', lineHeight: 1.7,
                  marginBottom: '0.4rem',
                }}>
                  <span style={{
                    color: projet.color, fontWeight: 700, fontSize: '14px',
                    marginTop: '1px', flexShrink: 0,
                  }}>
                    &bull;
                  </span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── 5. ENVIRONNEMENT TECHNIQUE ── */}
          <div style={{ marginBottom: '1.75rem' }}>
            <SectionTitle icon={Monitor} label="Environnement technique" color={projet.color} />
            <div className="flex flex-wrap gap-2" style={{ paddingLeft: '2.75rem' }}>
              {projet.environment.map(tech => (
                <span key={tech} style={{
                  background: `${projet.color}10`,
                  border: `1px solid ${projet.color}20`,
                  color: projet.color,
                  fontSize: '12px', fontWeight: 600,
                  padding: '5px 14px', borderRadius: '8px',
                  fontFamily: "'JetBrains Mono', monospace",
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* ── 6. ETAPES DE REALISATION ── */}
          <div style={{ marginBottom: '1.75rem' }}>
            <SectionTitle icon={ListOrdered} label="Etapes de realisation" color={projet.color} />
            <ol style={{ paddingLeft: '2.75rem', margin: 0, listStyle: 'none', counterReset: 'step' }}>
              {projet.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3" style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13px', color: '#cbd5e1', lineHeight: 1.7,
                  marginBottom: '0.6rem',
                }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px', fontWeight: 800,
                    color: '#0b1020',
                    background: projet.color,
                    width: '22px', height: '22px',
                    borderRadius: '7px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: '2px',
                  }}>
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* ── 7. RESULTATS ── */}
          <div style={{ marginBottom: '1.75rem' }}>
            <SectionTitle icon={CheckCircle2} label="Resultats" color={projet.color} />
            <ul style={{ paddingLeft: '2.75rem', margin: 0, listStyle: 'none' }}>
              {projet.results.map((res, i) => (
                <li key={i} className="flex items-start gap-2.5" style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13px', color: '#cbd5e1', lineHeight: 1.7,
                  marginBottom: '0.4rem',
                }}>
                  <CheckCircle2 size={15} style={{
                    color: '#22c55e', flexShrink: 0, marginTop: '3px',
                  }} />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── 8. COMPETENCES SISR ── */}
          <div style={{ marginBottom: '1.75rem' }}>
            <SectionTitle icon={Award} label="Competences SISR couvertes" color={projet.color} />
            <div className="flex flex-wrap gap-2" style={{ paddingLeft: '2.75rem' }}>
              {projet.competences.map(comp => (
                <div key={comp.code} style={{
                  background: 'rgba(99,102,241,0.08)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  borderRadius: '10px',
                  padding: '6px 14px',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px', fontWeight: 800,
                    color: projet.color,
                    background: `${projet.color}18`,
                    padding: '2px 8px',
                    borderRadius: '6px',
                  }}>
                    {comp.code}
                  </span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '12px', color: '#94a3b8',
                    lineHeight: 1.4,
                  }}>
                    {comp.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── 9. DIFFICULTES RENCONTREES ── */}
          <div style={{ marginBottom: '1.75rem' }}>
            <SectionTitle icon={AlertTriangle} label="Difficultes rencontrees" color="#f59e0b" />
            <div style={{ paddingLeft: '2.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {projet.difficulties.map((diff, i) => (
                <div key={i} style={{
                  background: 'rgba(245,158,11,0.05)',
                  border: '1px solid rgba(245,158,11,0.15)',
                  borderRadius: '12px',
                  padding: '1rem 1.25rem',
                }}>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px', color: '#fbbf24',
                    fontStyle: 'italic', lineHeight: 1.7,
                    marginBottom: '0.5rem',
                  }}>
                    {diff.problem}
                  </p>
                  <div className="flex items-start gap-2">
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10px', fontWeight: 700,
                      color: '#22c55e',
                      background: 'rgba(34,197,94,0.12)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      flexShrink: 0,
                      marginTop: '3px',
                    }}>
                      FIX
                    </span>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '12.5px', color: '#94a3b8',
                      lineHeight: 1.7, margin: 0,
                    }}>
                      {diff.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── 10. PDF BUTTON ── */}
          {projet.docPdf && (
            <a
              href={projet.docPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl transition-all duration-200"
              style={{
                background: projet.color, color: '#ffffff',
                fontSize: '14px', fontWeight: 700,
                textDecoration: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <FileText size={16} />
              Voir la documentation PDF
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projets() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projets" className="relative dots-bg" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center animate-fade-up" style={{ marginBottom: '4.5rem' }}>
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
              Realisations professionnelles
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
            Mes Projets
          </h2>
          <div style={{
            width: '80px', height: '3px', margin: '0 auto 1.2rem',
            background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #f472b6)',
            borderRadius: '99px',
          }} />
          <p className="mx-auto" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px', fontWeight: 500, color: '#94a3b8',
            lineHeight: 1.7, maxWidth: '560px',
          }}>
            Projets BTS SIO option SISR — Cliquez sur un projet pour voir le detail complet
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 stagger-grid">
          {projets.map(projet => (
            <ProjetCard key={projet.id} projet={projet} onClick={setSelected} />
          ))}
        </div>

      </div>

      <ProjetModal projet={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
