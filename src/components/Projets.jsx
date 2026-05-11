import { useState } from 'react'
import {
  X, FileText, Lock, Target, Server, CheckCircle2,
  ListOrdered, Award, AlertTriangle, Monitor, Settings,
  Shield, Network, Database, Globe, Cpu
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
    id: 4,
    title: 'Supervision Nagios',
    subtitle: 'Ubuntu Server',
    logo: '/logos/nagios.svg',
    color: '#00B050',
    image: '/projects/nagios.webp',
    badge: 'E5',
    badgeColor: '#a855f3',
    description: "Installation et configuration de Nagios Core sur Ubuntu pour la supervision d'infrastructure réseau.",
    technologies: ['Nagios Core', 'Ubuntu', 'Apache', 'Perl', 'Monitoring'],
    docPdf: '/dossiers/dossier-nagios.pdf',
    warning: "Ce projet a été réalisé sur une machine virtuelle Ubuntu à des fins de formation. Le mot de passe nagiosadmin utilisé est un mot de passe de test. En production, il est impératif d'utiliser HTTPS, des mots de passe robustes et de restreindre l'accès à l'interface web.",
    context: "Pour assurer la disponibilité et la performance de l'infrastructure réseau, il est essentiel de disposer d'un outil de supervision. Nagios Core est une solution open source de référence permettant de surveiller en temps réel l'état des serveurs, services et équipements réseau. Ce projet consiste à installer Nagios Core depuis les sources sur une VM Ubuntu et à configurer l'interface web de supervision.",
    objectives: [
      "Installer les dépendances nécessaires (Apache, Perl, bibliothèques graphiques) sur Ubuntu",
      "Compiler et installer Nagios Core depuis les sources",
      "Créer l'utilisateur nagios et le groupe nagcmd pour la gestion des droits",
      "Configurer Apache avec les modules nécessaires (mod_rewrite, mod_cgi)",
      "Accéder à l'interface web Nagios via le navigateur"
    ],
    environment: ['Ubuntu Server (VM)', 'Nagios Core (compilation sources)', 'Apache 2.4', 'Perl', 'Bibliothèques GD (graphiques)', 'IP : 192.168.56.102', 'htpasswd (authentification web)'],
    steps: [
      "Mise à jour du système Ubuntu et installation des dépendances : apache2, php, perl, libgd-dev, build-essential, unzip",
      "Création de l'utilisateur nagios et du groupe nagcmd : useradd nagios, groupadd nagcmd, usermod -aG nagcmd nagios",
      "Téléchargement des sources Nagios Core, extraction et compilation (./configure, make all, make install)",
      "Installation des fichiers de configuration (make install-config), du script de démarrage (make install-daemoninit) et de la configuration web (make install-webconf)",
      "Création du compte d'accès web nagiosadmin via htpasswd pour l'authentification à l'interface",
      "Activation des modules Apache mod_rewrite et mod_cgi, puis redémarrage d'Apache",
      "Démarrage du service Nagios et accès à l'interface web : https://192.168.56.102/nagios"
    ],
    results: [
      "Nagios Core installé et opérationnel sur Ubuntu Server (VM)",
      "Interface web accessible à https://192.168.56.102/nagios avec authentification nagiosadmin",
      "Tableau de bord de supervision affichant l'état des hôtes et services en temps réel",
      "Service Nagios configuré pour démarrage automatique au boot du serveur"
    ],
    competences: [
      { code: 'B1.2', label: "Répondre aux incidents et aux demandes d'assistance" },
      { code: 'B2.2', label: "Installer, tester et déployer une solution d'infrastructure réseau" },
      { code: 'B2.3', label: "Exploiter, dépanner et superviser une solution d'infrastructure réseau" },
      { code: 'B3.4', label: "Garantir la disponibilité, l'intégrité et la confidentialité" },
    ],
    difficulties: [
      {
        problem: "La compilation de Nagios échouait avec des erreurs de bibliothèques GD manquantes (libgd-dev).",
        solution: "Installation des paquets manquants (apt install libgd-dev libpng-dev libjpeg-dev) puis relance de ./configure et make all. La compilation s'est terminée sans erreur."
      },
      {
        problem: "L'interface web Nagios affichait une erreur 403 Forbidden après l'installation.",
        solution: "Les modules Apache mod_cgi et mod_rewrite n'étaient pas activés. Activation avec a2enmod cgi rewrite puis redémarrage d'Apache (systemctl restart apache2). L'interface est devenue accessible."
      }
    ],
  },
  {
    id: 5,
    title: 'Téléphonie VOIP Cisco',
    subtitle: 'Cisco CME · Packet Tracer',
    logo: '/logos/cisco.svg',
    color: '#EA7E20',
    image: '/projects/vpn.webp',
    badge: 'E5',
    badgeColor: '#a855f3',
    description: "Mise en place d'une infrastructure VOIP Cisco avec CME, IP Phones et téléphones analogiques.",
    technologies: ['Cisco CME', 'VOIP', 'DHCP', 'Switch 2960', 'Routeur 2811'],
    docPdf: '/dossiers/dossier-voip.pdf',
    warning: "Ce projet a été réalisé sur Cisco Packet Tracer (simulateur) dans un cadre pédagogique. Les numéros de téléphone et configurations sont fictifs. En production, des considérations de QoS, de sécurité SIP et de dimensionnement doivent être prises en compte.",
    context: "Une entreprise souhaite déployer une solution de téléphonie IP pour remplacer son infrastructure téléphonique analogique vieillissante. Le projet consiste à configurer une infrastructure VOIP complète utilisant Cisco Call Manager Express (CME) sur des routeurs 2811, avec des téléphones IP 7960 et des téléphones analogiques connectés via un switch 2960.",
    objectives: [
      "Configurer 2 routeurs Cisco 2811 avec le service CME (Call Manager Express)",
      "Mettre en place un switch Cisco 2960 pour connecter 3 téléphones IP 7960",
      "Configurer le DHCP sur le routeur pour l'attribution automatique des adresses aux IP Phones",
      "Intégrer 2 téléphones analogiques à l'infrastructure VOIP",
      "Tester les appels entre les différents postes téléphoniques"
    ],
    environment: ['Cisco Packet Tracer', '2 Routeurs Cisco 2811', 'Switch Cisco 2960', '3 IP Phones Cisco 7960', '2 Téléphones analogiques', 'Cisco CME (Call Manager Express)', 'DHCP', 'Réseau 192.168.10.0/24'],
    steps: [
      "Configuration de l'adressage IP sur les routeurs 2811 et le switch 2960 (réseau 192.168.10.0/24)",
      "Configuration du DHCP sur le routeur principal pour l'attribution des IP aux téléphones (option 150 pour TFTP)",
      "Configuration du switch 2960 : activation des ports pour les IP Phones avec alimentation PoE",
      "Configuration CME sur le routeur : max-ephones 10, max-dn 10, ip source-address 192.168.10.100 port 2000",
      "Configuration de l'auto-assignation des numéros (auto assign 1 to 10) et création des fichiers CNF (create cnf)",
      "Connexion et enregistrement des 3 IP Phones 7960 et des 2 téléphones analogiques",
      "Tests d'appels : vérification de la communication entre tous les postes téléphoniques"
    ],
    results: [
      "Infrastructure VOIP fonctionnelle avec 3 IP Phones Cisco 7960 enregistrés sur CME",
      "2 téléphones analogiques intégrés à l'infrastructure VOIP via les ports FXS",
      "DHCP opérationnel avec attribution automatique des adresses et de l'option TFTP (150)",
      "Appels internes fonctionnels entre tous les postes téléphoniques (IP et analogiques)"
    ],
    competences: [
      { code: 'B2.1', label: "Concevoir une solution d'infrastructure réseau" },
      { code: 'B2.2', label: "Installer, tester et déployer une solution d'infrastructure réseau" },
      { code: 'B2.3', label: "Exploiter, dépanner et superviser une solution d'infrastructure réseau" },
    ],
    difficulties: [
      {
        problem: "Les IP Phones ne s'enregistraient pas sur le CME : l'écran restait sur 'Configuring IP' en boucle.",
        solution: "L'option 150 (adresse du serveur TFTP) n'était pas configurée dans le pool DHCP. Ajout de 'option 150 ip 192.168.10.100' dans la configuration du pool DHCP, les téléphones se sont enregistrés après redémarrage."
      },
      {
        problem: "Les téléphones analogiques n'émettaient aucune tonalité malgré leur connexion physique au routeur.",
        solution: "Les interfaces FXS (Foreign Exchange Station) du routeur n'étaient pas configurées avec les dial-peers correspondants. Création des dial-peers POTS et association aux numéros de directory pour les ports analogiques."
      }
    ],
  },
  {
    id: 6,
    title: 'Calculatrice Web Interactive',
    subtitle: 'HTML5 / CSS3 / JavaScript',
    logo: null,
    color: '#10b981',
    image: '/projects/marketplace.webp',
    badge: 'E4',
    badgeColor: '#22d3ee',
    description: "Développement d'une calculatrice web interactive avec manipulation du DOM et validation des entrées.",
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'DOM', 'Responsive'],
    docPdf: '/dossiers/dossier-calculatrice.pdf',
    warning: "Ce projet est un exercice pédagogique de développement web. Le code JavaScript présenté utilise des fonctions de base (parseFloat, switch) à des fins d'apprentissage. En production, des bibliothèques de calcul précis (ex: decimal.js) seraient recommandées pour éviter les erreurs d'arrondi en virgule flottante.",
    context: "Dans le cadre du bloc de compétences B1 (Support et mise à disposition de services informatiques), ce projet consiste à développer une calculatrice web fonctionnelle en utilisant les technologies front-end HTML5, CSS3 et JavaScript. L'application permet d'effectuer les 4 opérations arithmétiques de base avec une interface utilisateur intuitive et une validation des entrées.",
    objectives: [
      "Créer une interface de calculatrice responsive en HTML5 et CSS3",
      "Implémenter les 4 opérations arithmétiques (addition, soustraction, multiplication, division)",
      "Utiliser la manipulation du DOM (getElementById, innerText) pour l'interaction utilisateur",
      "Valider les entrées utilisateur (parseFloat, isNaN) et gérer les cas d'erreur (division par zéro)"
    ],
    environment: ['HTML5', 'CSS3', 'JavaScript (vanilla)', 'Manipulation DOM (getElementById)', 'parseFloat / isNaN', 'Structure switch/case', 'Navigateur web moderne'],
    steps: [
      "Création de la structure HTML : champs de saisie pour les deux opérandes, boutons pour les 4 opérations, zone d'affichage du résultat",
      "Mise en forme CSS3 : design responsive, boutons stylisés, zone de résultat mise en évidence",
      "Récupération des valeurs utilisateur via getElementById et conversion avec parseFloat",
      "Implémentation de la logique de calcul avec une structure switch/case pour les 4 opérations",
      "Validation des entrées : vérification avec isNaN pour détecter les saisies non numériques",
      "Gestion de la division par zéro : affichage d'un message d'erreur explicite",
      "Affichage du résultat via innerText dans la zone dédiée"
    ],
    results: [
      "Calculatrice web fonctionnelle avec les 4 opérations de base (+ - × ÷)",
      "Validation des entrées opérationnelle : détection des valeurs non numériques avec message d'erreur",
      "Gestion de la division par zéro avec message d'avertissement clair",
      "Interface responsive et ergonomique adaptée aux écrans desktop et mobile"
    ],
    competences: [
      { code: 'B1.3', label: "Développer la présence en ligne" },
      { code: 'B1.1', label: "Gérer le patrimoine informatique" },
    ],
    difficulties: [
      {
        problem: "Les calculs avec des nombres décimaux produisaient des résultats incorrects (ex: 0.1 + 0.2 = 0.30000000000000004).",
        solution: "Utilisation de la méthode toFixed(2) pour arrondir les résultats à 2 décimales, éliminant les erreurs de virgule flottante IEEE 754 dans l'affichage."
      },
      {
        problem: "Le champ de saisie acceptait des caractères non numériques (lettres, symboles) sans avertissement.",
        solution: "Ajout d'une validation avec isNaN(parseFloat(valeur)) avant chaque calcul, avec affichage d'un message 'Veuillez entrer des nombres valides' en cas de saisie incorrecte."
      }
    ],
  },
  {
    id: 7,
    title: 'Analyse Réseau Wireshark',
    subtitle: 'Linux · Capture & Analyse',
    logo: '/logos/wireshark.svg',
    color: '#1679A7',
    image: '/projects/nagios.webp',
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
