import { useState } from 'react'
import {
  X, FileText, Lock, Target, Server, CheckCircle2,
  ListOrdered, Award, AlertTriangle, Monitor, Settings,
  Shield, Network, Database, Globe, Cpu, Lightbulb
} from 'lucide-react'

const projets = [
  {
    id: 1,
    title: 'Active Directory & DNS',
    subtitle: 'Windows Server 2025',
    logo: '/logos/activedirectory.svg',
    color: '#00BEF2',
    image: '/projects/ad.webp',
    badge: 'E5',
    badgeColor: '#a855f3',
    description: "Déploiement d'un contrôleur de domaine AD DS avec DNS intégré sur Windows Server 2025 — forêt sio.lan.",
    technologies: ['Windows Server 2025', 'AD DS', 'DNS', 'PowerShell', 'Hyper-V'],
    docPdf: '/dossiers/dossier-adds-dns-dilan.pdf',
    warning: "Ce projet a été réalisé dans un environnement virtualisé (Hyper-V) à des fins pédagogiques. Les configurations présentées (mot de passe administrateur, structure OU) doivent être adaptées et renforcées avant toute mise en production.",
    context: "Dans le cadre de la formation BTS SIO SISR, il était nécessaire de mettre en place une infrastructure Active Directory centralisée pour gérer les utilisateurs, les postes et les ressources réseau. Le serveur SVR-WND (Windows Server 2025, IP 172.16.1.1) a été configuré comme contrôleur de domaine pour la forêt sio.lan, avec un service DNS intégré pour la résolution de noms interne.",
    objectives: [
      "Installer et configurer le rôle AD DS sur Windows Server 2025",
      "Promouvoir le serveur en contrôleur de domaine pour une nouvelle forêt sio.lan",
      "Configurer le service DNS intégré à Active Directory",
      "Créer une structure d'Unités d'Organisation (OU) et des comptes utilisateurs"
    ],
    environment: ['Windows Server 2025 (SVR-WND)', 'Hyper-V (virtualisation)', 'AD DS (Active Directory Domain Services)', 'DNS intégré AD', 'IP statique 172.16.1.1', 'Forêt sio.lan'],
    steps: [
      "Installation de Windows Server 2025 sur Hyper-V et configuration de l'IP statique 172.16.1.1 sur le serveur SVR-WND",
      "Installation du rôle AD DS via le Gestionnaire de serveur (Ajout de rôles et fonctionnalités)",
      "Promotion du serveur en contrôleur de domaine : création d'une nouvelle forêt avec le domaine sio.lan",
      "Vérification du service DNS : zone de recherche directe sio.lan créée automatiquement avec les enregistrements SRV",
      "Création des Unités d'Organisation (OU) pour structurer l'annuaire selon les services de l'entreprise",
      "Création des comptes utilisateurs dans les OU correspondantes avec attribution des droits appropriés"
    ],
    results: [
      "Contrôleur de domaine opérationnel pour la forêt sio.lan sur Windows Server 2025",
      "Service DNS intégré fonctionnel avec résolution de noms interne automatique",
      "Structure OU organisée reflétant l'organigramme de l'entreprise",
      "Comptes utilisateurs créés et fonctionnels avec authentification centralisée"
    ],
    competences: [
      { code: 'B2.1', label: "Concevoir une solution d'infrastructure réseau" },
      { code: 'B2.2', label: "Installer, tester et déployer une solution d'infrastructure réseau" },
      { code: 'B3.2', label: "Préserver l'identité numérique de l'organisation" },
      { code: 'B3.3', label: "Sécuriser les équipements et les usages des utilisateurs" },
    ],
    bilan: "Ce projet m'a appris l'importance cruciale du DNS dans une infrastructure Active Directory — sans résolution de noms correcte, aucun service ne fonctionne. J'ai compris que la planification de l'architecture (OU, groupes, nommage) est aussi importante que la configuration technique elle-même. En production, je veillerais à documenter chaque étape et à prévoir un plan de rollback.",
    difficulties: [
      {
        problem: "Après l'installation du rôle AD DS, la promotion en contrôleur de domaine échouait avec une erreur de prérequis DNS.",
        solution: "Le serveur n'avait pas de serveur DNS configuré dans ses paramètres réseau. Configuration du DNS préféré sur 127.0.0.1 (lui-même) avant la promotion, ce qui a permis l'installation automatique du DNS intégré."
      },
      {
        problem: "Les enregistrements SRV (_ldap, _kerberos) n'apparaissaient pas dans la zone DNS après la promotion.",
        solution: "Redémarrage du service Netlogon (net stop netlogon && net start netlogon) pour forcer la re-création des enregistrements SRV nécessaires à la localisation du contrôleur de domaine."
      }
    ],
  },
  {
    id: 2,
    title: 'Segmentation VLAN',
    subtitle: 'Cisco Packet Tracer',
    logo: '/logos/cisco.svg',
    color: '#049FD9',
    image: '/projects/vlan.webp',
    badge: 'E5',
    badgeColor: '#a855f3',
    description: "Segmentation réseau d'une PME en 4 VLAN avec routage inter-VLAN Router-on-a-Stick et DHCP.",
    technologies: ['Cisco IOS', 'VLAN', '802.1Q', 'DHCP', 'Router-on-a-Stick'],
    docPdf: '/dossiers/dossier-segmentation-vlan.pdf',
    warning: "Ce projet a été réalisé sur Cisco Packet Tracer (simulateur) à des fins pédagogiques. Les adressages IP et configurations présentés sont adaptés à un environnement de lab et doivent être redimensionnés pour un déploiement en production.",
    context: "Une PME dispose de plusieurs services (IT, Comptabilité, RH) partageant un réseau plat sans segmentation. Cette architecture expose les flux de chaque service aux autres, crée des problèmes de performance (broadcast) et empêche tout contrôle d'accès entre services. L'objectif est de segmenter le réseau en VLAN distincts pour isoler les flux tout en permettant la communication inter-services via un routage contrôlé.",
    objectives: [
      "Créer 4 VLAN : VLAN 10 (IT, 192.168.10.0/24), VLAN 20 (Comptabilité, 192.168.20.0/24), VLAN 30 (RH, 192.168.30.0/24), VLAN 99 (Wi-Fi invité, 192.168.99.0/24)",
      "Configurer le routage inter-VLAN via la méthode Router-on-a-Stick avec sous-interfaces",
      "Mettre en place des pools DHCP sur le routeur pour chaque VLAN avec ip helper-address",
      "Tester la connectivité intra-VLAN et inter-VLAN"
    ],
    environment: ['Cisco Packet Tracer', 'Switch Cisco 2960', 'Routeur Cisco (Router-on-a-Stick)', 'Protocole 802.1Q', 'DHCP pools', 'ip helper-address'],
    steps: [
      "Création des VLAN 10 (IT), 20 (Comptabilité), 30 (RH) et 99 (Wi-Fi invité) sur le switch Cisco 2960",
      "Affectation des ports d'accès aux VLAN correspondants (switchport mode access, switchport access vlan X)",
      "Configuration du port trunk entre le switch et le routeur (switchport mode trunk, encapsulation dot1q)",
      "Configuration des sous-interfaces sur le routeur avec encapsulation dot1Q pour chaque VLAN",
      "Mise en place des pools DHCP sur le routeur pour attribution automatique des IP par VLAN",
      "Configuration de ip helper-address sur les sous-interfaces pour relayer les requêtes DHCP",
      "Tests de connectivité : ping intra-VLAN et inter-VLAN, vérification de l'isolation du VLAN 99 invité"
    ],
    results: [
      "4 VLAN fonctionnels avec isolation complète des flux entre les services",
      "Routage inter-VLAN opérationnel via Router-on-a-Stick",
      "Attribution automatique des adresses IP par DHCP pour chaque VLAN",
      "VLAN 99 Wi-Fi invité isolé des réseaux internes de l'entreprise"
    ],
    competences: [
      { code: 'B2.1', label: "Concevoir une solution d'infrastructure réseau" },
      { code: 'B2.2', label: "Installer, tester et déployer une solution d'infrastructure réseau" },
      { code: 'B2.3', label: "Exploiter, dépanner et superviser une solution d'infrastructure réseau" },
      { code: 'B3.5', label: "Assurer la cybersécurité d'une infrastructure réseau" },
    ],
    bilan: "Ce projet m'a fait comprendre l'importance de la segmentation réseau pour la sécurité et la performance. La méthode Router-on-a-Stick, bien que fonctionnelle en lab, montre ses limites en production (goulot d'étranglement). En entreprise, j'opterais pour un switch de couche 3. J'ai aussi appris à diagnostiquer méthodiquement les problèmes réseau couche par couche (modèle OSI).",
    difficulties: [
      {
        problem: "Le routage inter-VLAN ne fonctionnait pas : les sous-interfaces du routeur ne recevaient pas les trames taguées.",
        solution: "Le port du switch connecté au routeur était en mode access au lieu de trunk. Passage en mode trunk avec autorisation de tous les VLAN (switchport mode trunk), le routage a fonctionné immédiatement."
      },
      {
        problem: "Les postes du VLAN 20 (Comptabilité) n'obtenaient pas d'adresse IP via DHCP malgré la configuration du pool.",
        solution: "La commande ip helper-address manquait sur la sous-interface du VLAN 20. Ajout de ip helper-address pointant vers le routeur lui-même pour relayer les requêtes DHCP broadcast vers le pool DHCP."
      }
    ],
  },
  {
    id: 3,
    title: 'Stratégies de Groupe (GPO)',
    subtitle: 'Active Directory',
    logo: '/logos/activedirectory.svg',
    color: '#3B82F6',
    image: '/projects/ad.webp',
    badge: 'E5',
    badgeColor: '#a855f3',
    description: "Sécurisation des comptes stagiaires via GPO : restriction du CMD et du Panneau de configuration.",
    technologies: ['GPO', 'Active Directory', 'Windows Server', 'GPMC', 'Sécurité'],
    docPdf: '/dossiers/dossier-gpo.pdf',
    warning: "Ce projet a été réalisé dans un environnement Active Directory de test. Les restrictions GPO appliquées aux stagiaires sont un exemple pédagogique. En production, une analyse des besoins métier et une politique de sécurité globale doivent être définies avant déploiement.",
    context: "Dans le cadre de la gestion des stagiaires au sein du domaine Active Directory, il est nécessaire de restreindre certains accès pour des raisons de sécurité. Les stagiaires ne doivent pas pouvoir accéder à l'invite de commandes (CMD) ni au Panneau de configuration, afin d'éviter toute modification non autorisée de la configuration des postes de travail. Une stratégie de groupe (GPO) doit être mise en place et liée à l'OU Stagiaires.",
    objectives: [
      "Créer une Unité d'Organisation (OU) dédiée aux stagiaires dans Active Directory",
      "Créer un groupe de sécurité global 'Groupe Stagiaires' et y ajouter les utilisateurs concernés",
      "Configurer une GPO pour bloquer l'accès à l'invite de commandes (CMD)",
      "Configurer une GPO pour interdire l'accès au Panneau de configuration",
      "Tester l'application des restrictions sur un poste client joint au domaine"
    ],
    environment: ['Windows Server (contrôleur de domaine)', 'Console GPMC (gpmc.msc)', 'Active Directory Users & Computers', 'Éditeur de stratégie de groupe', 'Windows 10/11 (poste client)', 'gpresult /r (diagnostic)'],
    steps: [
      "Création de l'OU 'Stagiaires' dans Active Directory Users and Computers",
      "Création du groupe de sécurité 'Groupe Stagiaires' (type Global) dans l'OU Stagiaires",
      "Création des comptes utilisateurs stagiaires et ajout au groupe 'Groupe Stagiaires'",
      "Ouverture de la console GPMC et création d'une nouvelle GPO liée à l'OU Stagiaires",
      "Configuration de la GPO : User Configuration → Administrative Templates → System → Empêcher l'accès à l'invite de commandes (Activé)",
      "Configuration de la GPO : User Configuration → Administrative Templates → Control Panel → Interdire l'accès au Panneau de configuration et aux paramètres PC (Activé)",
      "Test sur un poste Windows 10/11 joint au domaine : connexion avec un compte stagiaire et vérification que CMD et Panneau de configuration sont bien bloqués"
    ],
    results: [
      "OU Stagiaires créée avec groupe de sécurité global associé",
      "GPO appliquée : invite de commandes (CMD) bloquée pour tous les stagiaires",
      "GPO appliquée : Panneau de configuration inaccessible pour les comptes stagiaires",
      "Tests validés sur poste client : les restrictions s'appliquent correctement à la connexion"
    ],
    competences: [
      { code: 'B2.2', label: "Installer, tester et déployer une solution d'infrastructure réseau" },
      { code: 'B2.3', label: "Exploiter, dépanner et superviser une solution d'infrastructure réseau" },
      { code: 'B3.2', label: "Préserver l'identité numérique de l'organisation" },
      { code: 'B3.3', label: "Sécuriser les équipements et les usages des utilisateurs" },
      { code: 'B3.4', label: "Garantir la disponibilité, l'intégrité et la confidentialité" },
    ],
    bilan: "Ce projet m'a montré la puissance des GPO pour sécuriser un parc à grande échelle, mais aussi les risques de restrictions trop agressives qui peuvent bloquer des outils légitimes. J'ai appris à toujours tester une GPO sur un groupe pilote avant de la déployer largement, et à utiliser gpresult /r pour diagnostiquer les problèmes d'application.",
    difficulties: [
      {
        problem: "La GPO ne s'appliquait pas sur le poste client malgré la liaison à l'OU Stagiaires.",
        solution: "Le compte utilisateur était dans l'OU Users par défaut et non dans l'OU Stagiaires. Déplacement du compte dans la bonne OU, puis gpupdate /force sur le poste client pour forcer l'application."
      },
      {
        problem: "La restriction CMD bloquait également PowerShell, ce qui n'était pas souhaité pour certains scripts automatisés.",
        solution: "La politique 'Empêcher l'accès à l'invite de commandes' possède une option pour désactiver aussi le traitement des scripts. Configuration de cette option sur 'Non' pour autoriser l'exécution des scripts batch tout en bloquant l'accès interactif à CMD."
      }
    ],
  },
  {
    id: 7,
    title: 'GLPI — Gestion de Parc & Ticketing',
    subtitle: 'Debian · Apache · MariaDB',
    logo: null,
    color: '#f97316',
    image: '/projects/glpi.webp',
    badge: 'E6',
    badgeColor: '#f59e0b',
    description: "Déploiement de GLPI sur serveur Debian pour la gestion du parc informatique et le suivi des incidents en entreprise.",
    technologies: ['GLPI', 'Debian', 'Apache', 'MariaDB', 'PHP', 'FusionInventory'],
    docPdf: null,
    warning: "Ce projet a été réalisé dans le cadre d'un stage en entreprise. Certaines captures d'écran ont été anonymisées pour protéger les données clients. L'infrastructure présentée a été adaptée aux besoins spécifiques de l'entreprise.",
    context: "Dans le cadre du stage de 2ème année chez B&A Conseil, l'entreprise avait besoin d'un outil centralisé pour gérer son parc informatique (smartphones, PC, tablettes) et suivre les tickets d'incidents des clients. GLPI (Gestionnaire Libre de Parc Informatique) a été choisi comme solution open source pour sa flexibilité et sa compatibilité avec l'agent d'inventaire FusionInventory, permettant une remontée automatique du matériel.",
    objectives: [
      "Installer et configurer GLPI sur un serveur Debian avec Apache et MariaDB",
      "Configurer la base de données MariaDB dédiée à GLPI avec les droits appropriés",
      "Déployer l'agent FusionInventory pour l'inventaire automatique du parc informatique",
      "Mettre en place le module Helpdesk pour la gestion des tickets d'incidents",
      "Créer les catégories de tickets, les profils utilisateurs et les règles d'attribution"
    ],
    environment: ['Debian Server', 'Apache 2.4', 'MariaDB', 'PHP 8.x', 'GLPI 10.x', 'FusionInventory Agent', 'Navigateur web (interface)'],
    steps: [
      "Installation de Debian Server et mise à jour du système (apt update && apt upgrade)",
      "Installation de la pile LAMP : Apache, MariaDB et PHP avec les extensions requises (php-xml, php-curl, php-gd, php-intl, php-ldap)",
      "Création de la base de données GLPI dans MariaDB et attribution des droits à l'utilisateur dédié",
      "Téléchargement et extraction de GLPI dans /var/www/html/, configuration des permissions Apache",
      "Lancement de l'assistant d'installation GLPI via le navigateur : connexion à la base de données et initialisation",
      "Installation et configuration de l'agent FusionInventory sur les postes clients pour la remontée automatique d'inventaire",
      "Configuration du module Helpdesk : création des catégories de tickets (Matériel, Logiciel, Réseau, MDM), profils techniciens et règles d'attribution automatique"
    ],
    results: [
      "GLPI opérationnel avec interface web accessible pour l'équipe technique de B&A Conseil",
      "Inventaire automatique du parc via FusionInventory : remontée des PC, smartphones et tablettes",
      "Module Helpdesk fonctionnel : création, suivi et clôture des tickets d'incidents",
      "Tableaux de bord de suivi du parc informatique et des interventions en temps réel"
    ],
    competences: [
      { code: 'B1.1', label: "Gérer le patrimoine informatique" },
      { code: 'B1.2', label: "Répondre aux incidents et aux demandes d'assistance" },
      { code: 'B1.3', label: "Développer la présence en ligne" },
      { code: 'B2.2', label: "Installer, tester et déployer une solution d'infrastructure réseau" },
    ],
    bilan: "Déployer GLPI en entreprise m'a montré la différence entre un exercice de lab et un besoin réel : il faut adapter l'outil aux processus existants de l'entreprise et former les utilisateurs. J'ai appris à configurer un outil ITSM complet (inventaire + ticketing) et à mesurer son impact sur la réactivité du support. Cette expérience a renforcé ma compréhension de la gestion de parc informatique en conditions réelles.",
    difficulties: [
      {
        problem: "L'installation de GLPI échouait à l'étape de connexion à la base de données avec une erreur d'accès refusé.",
        solution: "L'utilisateur MariaDB n'avait pas les droits sur la base GLPI. Exécution de GRANT ALL PRIVILEGES ON glpi.* TO 'glpi_user'@'localhost'; puis FLUSH PRIVILEGES pour appliquer les permissions."
      },
      {
        problem: "FusionInventory ne remontait pas les inventaires : les postes clients n'apparaissaient pas dans GLPI.",
        solution: "L'URL du serveur GLPI n'était pas correctement configurée dans l'agent FusionInventory. Modification du fichier agent.cfg avec l'URL complète du plugin (http://serveur/glpi/plugins/fusioninventory/) et redémarrage de l'agent."
      }
    ],
  },
  {
    id: 8,
    title: 'Active Directory — Gestion en Entreprise',
    subtitle: 'Windows Server · Stage',
    logo: '/logos/activedirectory.svg',
    color: '#0ea5e9',
    image: '/projects/ad.webp',
    badge: 'E6',
    badgeColor: '#f59e0b',
    description: "Administration d'un domaine Active Directory en entreprise : gestion des utilisateurs, OU et stratégies de sécurité.",
    technologies: ['AD DS', 'Windows Server', 'DNS', 'GPO', 'PowerShell', 'DHCP'],
    docPdf: null,
    warning: "Ce projet a été réalisé dans le cadre d'un stage en entreprise. Les noms de domaine, adresses IP et comptes utilisateurs présentés ont été modifiés pour des raisons de confidentialité.",
    context: "Durant le stage, j'ai été amené à administrer l'infrastructure Active Directory existante de l'entreprise. Contrairement au projet E5 réalisé en lab, cette expérience m'a confronté à un environnement de production avec de vrais utilisateurs, des contraintes de disponibilité et des politiques de sécurité strictes. J'ai géré les comptes utilisateurs, les groupes de sécurité, les unités d'organisation et le déploiement de stratégies de groupe (GPO) sur le domaine de l'entreprise.",
    objectives: [
      "Administrer les comptes utilisateurs Active Directory (création, modification, désactivation, réinitialisation de mots de passe)",
      "Organiser l'annuaire avec des Unités d'Organisation (OU) reflétant la structure de l'entreprise",
      "Déployer des GPO de sécurité : politique de mots de passe, verrouillage de comptes, restrictions logicielles",
      "Gérer les groupes de sécurité pour le contrôle d'accès aux ressources partagées (dossiers, imprimantes)",
      "Joindre de nouveaux postes au domaine et vérifier la bonne application des stratégies"
    ],
    environment: ['Windows Server (contrôleur de domaine)', 'Active Directory Users & Computers', 'Console GPMC (gpmc.msc)', 'PowerShell (scripts AD)', 'DNS intégré AD', 'DHCP', 'Postes Windows 10/11'],
    steps: [
      "Audit de l'infrastructure AD existante : recensement des OU, groupes de sécurité et GPO en place",
      "Création et gestion des comptes utilisateurs dans les OU appropriées selon les services (IT, Commercial, Direction)",
      "Configuration des groupes de sécurité globaux pour l'accès aux partages réseau et aux imprimantes",
      "Déploiement de GPO de sécurité : politique de complexité des mots de passe (12 caractères, expiration 90 jours), verrouillage après 5 tentatives",
      "Création de GPO de déploiement logiciel pour l'installation automatique des applications métier sur les postes",
      "Jonction de nouveaux postes Windows au domaine : vérification DNS, jonction, test d'authentification avec compte du domaine",
      "Documentation des procédures d'administration AD pour assurer la continuité de service"
    ],
    results: [
      "Annuaire AD structuré et à jour avec les comptes de tous les collaborateurs et stagiaires",
      "GPO de sécurité appliquées sur l'ensemble du domaine : politique de mots de passe renforcée, verrouillage automatique",
      "Accès aux ressources partagées contrôlé via les groupes de sécurité avec le principe du moindre privilège",
      "Nouveaux postes intégrés au domaine avec application automatique des stratégies de sécurité et des logiciels métier"
    ],
    competences: [
      { code: 'B2.2', label: "Installer, tester et déployer une solution d'infrastructure réseau" },
      { code: 'B2.3', label: "Exploiter, dépanner et superviser une solution d'infrastructure réseau" },
      { code: 'B3.2', label: "Préserver l'identité numérique de l'organisation" },
      { code: 'B3.3', label: "Sécuriser les équipements et les usages des utilisateurs" },
      { code: 'B3.4', label: "Garantir la disponibilité, l'intégrité et la confidentialité" },
    ],
    bilan: "Administrer un AD en production m'a confronté aux réalités du terrain : des utilisateurs qui oublient leurs mots de passe, des GPO qui entrent en conflit, des appareils non gérés qui verrouillent des comptes. J'ai développé une méthodologie de diagnostic (Event Viewer, gpresult, dcdiag) et compris l'importance de documenter chaque changement. La différence entre le lab et la production, c'est l'impact sur les vrais utilisateurs.",
    difficulties: [
      {
        problem: "Un compte utilisateur verrouillé empêchait un collaborateur d'accéder à son poste, sans que la source du verrouillage soit identifiable.",
        solution: "Utilisation de l'outil Event Viewer sur le contrôleur de domaine pour analyser les journaux de sécurité (Event ID 4740). Identification de la source : un ancien appareil mobile tentait de s'authentifier avec l'ancien mot de passe. Suppression de la connexion sur l'appareil et déverrouillage du compte."
      },
      {
        problem: "Une GPO de restriction logicielle bloquait une application métier légitime sur les postes du service Commercial.",
        solution: "Création d'une exception dans la GPO via une règle de chemin d'accès (Path Rule) pour autoriser l'exécutable de l'application métier. Application de la GPO uniquement à l'OU Commercial avec filtrage de sécurité sur le groupe concerné."
      }
    ],
  },
  {
    id: 9,
    title: 'Analyse Réseau Wireshark',
    subtitle: 'Linux · Capture & Analyse',
    logo: '/logos/wireshark.svg',
    color: '#1679A7',
    image: '/projects/linux.webp',
    badge: 'E5',
    badgeColor: '#a855f3',
    description: "Installation de Wireshark sur Linux, capture de trafic réseau et analyse détaillée d'un paquet DNS.",
    technologies: ['Wireshark', 'Linux', 'DNS', 'UDP', 'TCP/IP'],
    docPdf: '/dossiers/dossier-wireshark.pdf',
    warning: "L'analyse de trafic réseau doit être effectuée uniquement sur des réseaux dont vous avez l'autorisation explicite. La capture de paquets sur un réseau tiers sans autorisation constitue une infraction pénale. Ce projet a été réalisé dans un environnement contrôlé à des fins éducatives.",
    context: "La maîtrise de l'analyse réseau est une compétence essentielle pour un technicien SISR. Wireshark est l'outil de référence pour la capture et l'analyse de trames réseau. Ce projet consiste à installer Wireshark sur une machine Linux, configurer les permissions nécessaires, capturer du trafic réseau et analyser en détail un paquet DNS pour comprendre les mécanismes de résolution de noms.",
    objectives: [
      "Installer Wireshark sur une distribution Linux et configurer les permissions utilisateur",
      "Capturer du trafic réseau en temps réel sur l'interface active",
      "Filtrer et identifier les paquets DNS dans la capture",
      "Analyser en détail la structure d'un paquet DNS (couches 2, 3, 4 et 7 du modèle OSI)"
    ],
    environment: ['Linux (distribution)', 'Wireshark', 'usermod (gestion permissions)', 'Protocole DNS (port 53)', 'UDP', 'IP source : 192.168.84.152', 'IP destination : 8.8.8.8 (Google DNS)', 'Port source : 53433'],
    steps: [
      "Installation de Wireshark via le gestionnaire de paquets (apt install wireshark)",
      "Configuration des permissions : ajout de l'utilisateur au groupe wireshark (usermod -aG wireshark $USER)",
      "Déconnexion/reconnexion pour appliquer les permissions du groupe",
      "Lancement de Wireshark et sélection de l'interface réseau active pour la capture",
      "Capture du trafic réseau pendant une navigation web pour générer des requêtes DNS",
      "Application du filtre 'dns' pour isoler les paquets de résolution de noms",
      "Analyse détaillée d'un paquet DNS : IP source 192.168.84.152 → IP destination 8.8.8.8, port source 53433 → port destination 53 (DNS), protocole UDP, requête DNS de type A"
    ],
    results: [
      "Wireshark installé et fonctionnel sur Linux avec permissions correctes (sans sudo)",
      "Capture de trafic réseau réussie sur l'interface active",
      "Paquet DNS identifié et analysé : requête UDP du poste (192.168.84.152:53433) vers Google DNS (8.8.8.8:53)",
      "Compréhension des couches OSI validée : Ethernet (L2) → IP (L3) → UDP (L4) → DNS (L7)"
    ],
    competences: [
      { code: 'B2.3', label: "Exploiter, dépanner et superviser une solution d'infrastructure réseau" },
      { code: 'B3.4', label: "Garantir la disponibilité, l'intégrité et la confidentialité" },
      { code: 'B3.5', label: "Assurer la cybersécurité d'une infrastructure réseau" },
    ],
    bilan: "Ce projet m'a appris à lire et interpréter le trafic réseau, compétence essentielle pour tout administrateur SISR. Comprendre les couches OSI en pratique (pas seulement en théorie) m'a permis de mieux diagnostiquer les problèmes réseau. J'ai aussi pris conscience des enjeux légaux et éthiques de la capture de paquets — on ne peut analyser que le trafic pour lequel on a une autorisation explicite.",
    difficulties: [
      {
        problem: "Wireshark ne listait aucune interface réseau disponible pour la capture (liste vide).",
        solution: "L'utilisateur n'avait pas été ajouté au groupe wireshark. Exécution de 'sudo usermod -aG wireshark $USER' puis déconnexion/reconnexion de la session Linux pour appliquer les nouvelles permissions de groupe."
      },
      {
        problem: "La capture contenait des milliers de paquets rendant l'analyse impossible sans filtrage.",
        solution: "Utilisation du filtre d'affichage 'dns' dans la barre de filtre Wireshark pour isoler uniquement les paquets DNS, réduisant le nombre de paquets affichés aux seules requêtes et réponses de résolution de noms."
      }
    ],
  },
]

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
            <Cpu size={24} style={{ color: projet.color }} />
          )}
        </div>
      </div>

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
        {/* HEADER */}
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
                <Cpu size={24} style={{ color: '#fff' }} />
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

        {/* WARNING BANNER */}
        {projet.warning && (
          <div style={{
            background: 'rgba(245,158,11,0.08)',
            borderBottom: '1px solid rgba(245,158,11,0.2)',
            padding: '1rem 2rem',
            display: 'flex', alignItems: 'flex-start', gap: '12px',
          }}>
            <Shield size={18} style={{ color: '#f59e0b', flexShrink: 0, marginTop: '2px' }} />
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '12.5px', color: '#fbbf24',
              lineHeight: 1.7, margin: 0, fontStyle: 'italic',
            }}>
              <strong>Mise en garde :</strong> {projet.warning}
            </p>
          </div>
        )}

        {/* SCREENSHOT */}
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

        {/* CONTENT */}
        <div style={{ padding: '1.75rem 2rem 2rem' }}>

          {/* CONTEXTE */}
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

          {/* OBJECTIFS */}
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

          {/* ENVIRONNEMENT TECHNIQUE */}
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

          {/* ETAPES */}
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

          {/* RESULTATS */}
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

          {/* ANALYSE RÉFLEXIVE / BILAN */}
          {projet.bilan && (
            <div style={{ marginBottom: '1.75rem' }}>
              <SectionTitle icon={Lightbulb} label="Analyse réflexive" color="#10b981" />
              <div style={{
                paddingLeft: '2.75rem',
                background: 'rgba(16,185,129,0.06)',
                border: '1px solid rgba(16,185,129,0.18)',
                borderRadius: '12px',
                padding: '1rem 1.25rem 1rem 2.75rem',
              }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13.5px', color: '#a7f3d0',
                  lineHeight: 1.85, margin: 0, fontStyle: 'italic',
                }}>
                  {projet.bilan}
                </p>
              </div>
            </div>
          )}

          {/* COMPETENCES SISR */}
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

          {/* DIFFICULTES */}
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

          {/* PDF BUTTON */}
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

        {/* E5 — Administration des systèmes et réseaux */}
        <div className="animate-fade-up" style={{ marginBottom: '3rem' }}>
          <div className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px', fontWeight: 800,
              padding: '5px 14px', borderRadius: '8px',
              background: 'rgba(168,85,243,0.15)',
              color: '#a855f3',
              border: '1px solid rgba(168,85,243,0.3)',
            }}>
              E5
            </span>
            <h3 style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: '1.1rem', fontWeight: 700, color: '#e2e8f0',
              margin: 0,
            }}>
              Administration des systèmes et réseaux
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 stagger-grid">
            {projets.filter(p => p.badge === 'E5').map(projet => (
              <ProjetCard key={projet.id} projet={projet} onClick={setSelected} />
            ))}
          </div>
        </div>

        {/* E6 — Parcours de professionnalisation */}
        <div className="animate-fade-up">
          <div className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px', fontWeight: 800,
              padding: '5px 14px', borderRadius: '8px',
              background: 'rgba(245,158,11,0.15)',
              color: '#f59e0b',
              border: '1px solid rgba(245,158,11,0.3)',
            }}>
              E6
            </span>
            <h3 style={{
              fontFamily: "'Orbitron', system-ui, sans-serif",
              fontSize: '1.1rem', fontWeight: 700, color: '#e2e8f0',
              margin: 0,
            }}>
              Parcours de professionnalisation
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 stagger-grid">
            {projets.filter(p => p.badge === 'E6').map(projet => (
              <ProjetCard key={projet.id} projet={projet} onClick={setSelected} />
            ))}
          </div>
        </div>

      </div>

      <ProjetModal projet={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
