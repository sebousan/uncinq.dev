---
isIndex: false
draft: false
date: 2026-10-17T10:00:00.000Z
slug: 14-pyramides-notaires-migration-wordpress-lawyerify
title: 14 Pyramides Notaires
description: Migration d’un site Wordpress vers Lawyerify pour un office notarial parisien.
seo:
  image: https://res.cloudinary.com/uncinq/image/upload/v1795095996/share-migration-wordpress-to-lawyerify_m3lztk.png
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1792251897/14pyramides-logo_opv94d.svg
hero:
  surtitle: Étude de cas
  title: 14 Pyramides Notaires, migration d’un site Wordpress vers Lawyerify
  image:
    src: https://res.cloudinary.com/uncinq/image/upload/v1792251897/14pyramides-logo_opv94d.svg
casestudies_services: lawyerify
blocks:
  - type: figure
    heading:
      title: Quelques mots sur l’office
      text: >-
        14 Pyramides est un office notarial historique de Paris, installé avenue Mac-Mahon dans le 17e arrondissement.


        L’étude réunit 16 notaires associés, 25 notaires salariés et 80 juristes, soit plus de 120 professionnels. Elle accompagne investisseurs institutionnels, promoteurs, aménageurs et acteurs publics, établissements financiers, mais aussi entreprises, dirigeants et familles.
    grid: medium
    align: center
    offset: center
    figure:
      src: https://res.cloudinary.com/uncinq/image/upload/v1792251949/14pyramides-team_vgujey.jpg
      legend: Office notarial 14 Pyramides
      credit: © 14 Pyramides

  # Backgrounds go by section, as in jeantet.md: the old site (background), why improve (none),
  # what was built (background), the results (none), the stack (background), then the home page
  # capture (none) and the CTA (background).

  # Old site from its Wayback Machine snapshot of 2026-10-03
  # (web.archive.org/web/20261003210633/https://14pyramides.notaires.fr/): custom theme "14p";
  # plugins seen from outside: GDPR Cookie Compliance, Contact Form 7, Contact Form 7 Honeypot,
  # Akismet. Home HTML of 1,366,010 bytes, 1.2 MB of which are two base64 PNG images inlined in
  # SVGs. PageSpeed mobile in October 2026: 4613 KiB transferred.
  - type: informations
    column: 4
    background: true
    heading:
      title: État des lieux
      text: >-
        La précédente version du site a été créée grâce au système de gestion de contenu Wordpress, avec un thème sur mesure.


        Wordpress, écrit en PHP, repose sur une base de données MySQL, ce qui implique un hébergement compatible.
    items:
      - title: Sécurité
        icon: shield-slash
        text: Des extensions pour les cookies, les formulaires et l’anti-spam, autant de portes d’entrée sans mises à jour régulières.
      - title: Performance
        icon: exclamation-diamond
        text: Plus de 4,5 Mo transférés au chargement de la page d’accueil, et un code HTML de 1,3 Mo, alourdi par deux images intégrées.
      - title: Chronophage
        icon: hourglass
        text: >-
          Wordpress, son thème sur mesure et ses extensions : tout est à mettre à jour.
      - title: Espace admin
        icon: kanban
        text: Non personnalisé et parasité par de nombreuses options inutiles.

  # Patchstack: 11,334 new vulnerabilities in 2025, +42% compared to 2024, as in jeantet.md
  # Same background as "État des lieux" above, on purpose: the quote backs its "Sécurité" card
  - type: quote
    quote: « Le nombre de nouvelles vulnérabilités découvertes sur WordPress a augmenté de 42 % en un an, atteignant un record de 11 334 failles recensées. »
    author:
      title: Patchstack
      text: State of WordPress Security In 2026
      url: https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/
    background: true

  # PageSpeed Insights (Lighthouse 13.5.0), mobile, October 2026, report p5w6lytuak. It had expired
  # on 2026-11-20 ("Il n'existe aucun rapport pour l'ID"), like l4c2349ult and i1n9synvmc, and no
  # capture of it was kept: hence no link.
  - type: datas
    background: true
    heading:
      title: Analyse de l’ancien site de l’office
      text: >-
        Google Lighthouse, un outil open source, mesure la qualité des pages Web. Voici, ci-dessous, le résultat sur Google PageSpeed de la page d’accueil sur mobile, mesuré en octobre 2026.
    column: 4
    show_color: true
    show_gauge: true
    items:
      - title: Performance
        value: 53
        suffix: "%"
        limit: 100
      - title: Accessibilité
        value: 76
        suffix: "%"
        limit: 100
      - title: Meilleures pratiques
        value: 96
        suffix: "%"
        limit: 100
      - title: Référencement (SEO)
        value: 92
        suffix: "%"
        limit: 100

  # BBC: web.dev, "Why does speed matter?", checked on 2026-11-19, as in jeantet.md
  - type: informations
    column: 3
    heading:
      title: Pourquoi améliorer ces critères ?
    items:
      - icon: people
        title: Pour les clients de l’office
        text: >-
          Investisseurs, promoteurs, entreprises ou familles : un site léger s’affiche vite, même sur mobile et en déplacement.
      - icon: graph-up-arrow
        title: Pour son activité
        text: >-
          Chaque seconde compte : {{<  blank_link text=`la BBC perdait 10 % de visiteurs en plus` link=`https://web.dev/articles/why-speed-matters` >}} pour chaque seconde de chargement supplémentaire.
      - icon: search-heart
        title: Pour son référencement
        text: >-
          Google tient compte de la vitesse, de la réactivité et de la stabilité des pages, les Core Web Vitals, pour classer ses résultats.
      # TODO: confirm the RGAA wording for 14P (written for Jeantet by the user). Checked on the live
      # home page on 2026-11-20: skip link "Contenu principal", 18 focus-visible rules (keyboard
      # navigation), 28 prefers-reduced-motion rules. No PageSpeed score here, see jeantet.md.
      - icon: universal-access-circle
        title: Pour l’accessibilité
        text: >-
          Volet social de la RSE : une accessibilité nettement améliorée au regard des critères du RGAA, le référentiel français, du lien d’évitement à la navigation au clavier.
      # Home page, PageSpeed mobile: 4613 KiB in October, 587 KiB for the live site on 2026-11-20
      # (report rpy5md65b1), so 3.93 MiB less. Inner pages of the old site were
      # not measured before it went offline: no per-page figure, unlike Jeantet.
      - icon: leaf
        title: Pour l’environnement
        text: >-
          Volet environnemental de la RSE : près de 4 Mo de moins sur la page d’accueil. Moins de données à transporter, moins de serveurs sollicités : un site plus sobre, qui consomme moins d’énergie.
      - icon: shield-check
        title: Pour sa sécurité
        text: >-
          Plus de Wordpress ni d’extensions à surveiller : le site ne craint plus les failles qui les visent, et l’office n’a plus de mises à jour urgentes à gérer.

  # Counts checked in the 14pyramides repo on 2026-11-20: 6 expertises and 16 persons per language,
  # fr and en; 69 posts per language
  - type: informations
    column: 3
    background: true
    heading:
      title: Un site à l’image de l’étude
      text: Une nouvelle architecture pensée autour des expertises et des équipes de l’office.
    items:
      - title: 6 expertises
        icon: briefcase
        text: Foncier et droit public, immobilier des particuliers, organisation et transmission du patrimoine, financement immobilier, immobilier institutionnel, promotion construction.
      - title: 16 associés
        icon: people
        text: Une fiche dédiée pour chaque notaire associé.
      - title: Bilingue
        icon: translate
        text: Le site est disponible en français et en anglais.

  # Title changed from "Un design system à l’image de l’office", as in jeantet.md: the block above
  # already says "à l’image de l’étude"
  - type: figure
    heading:
      title: Un design system signé Bonhomme
      text: >-
        Le studio de design {{<  blank_link text=`Bonhomme` link=`https://www.bonhommeparis.com/fr/` >}} a traduit la charte de 14 Pyramides en design system dans Figma : couleurs, typographies, espacements et une bibliothèque de composants. Chaque page est un assemblage de ces mêmes blocs, déclinés en desktop et en mobile. Le site reste cohérent de bout en bout, et l’office l’enrichit lui-même sans jamais sortir de sa charte.
    background: true
    grid: medium
    align: center
    offset: center
    figure:
      src: https://res.cloudinary.com/uncinq/image/upload/v1792251417/14pyramides-figma_m42h2j.png
      alt: Capture d’écran du fichier Figma du design system de 14 Pyramides
      legend: Maquettes Figma des pages accueil, expertises et à propos, en desktop et mobile
      screenshot: true

  # Moved after the design system, as in jeantet.md: what was built, then the performance results
  - type: figure
    heading:
      title: Un espace d’administration sur mesure
      text: >-
        Fini l’admin Wordpress compliqué et parasité par des fonctionnalités inutiles à l’office. Place à un admin dédié et simplifié pour 14 Pyramides, construit avec Decap CMS.
    background: true
    grid: medium
    offset: center
    figure:
      src: https://res.cloudinary.com/uncinq/image/upload/v1792250347/14pyramides-admin-lawyerify_ahjxd8.png
      alt: Capture d’écran de l’admin Decap CMS de 14 Pyramides
      legend: Admin Lawyerify dédié à 14 Pyramides, dans Decap CMS
      screenshot: true

  # PageSpeed Insights (Lighthouse 13.6.0), live site, 2026-11-20 11:19, report rpy5md65b1: 100
  # everywhere, on mobile and on desktop. Mobile: FCP 1.1 s, LCP 1.7 s, TBT 0 ms, CLS 0, Speed Index
  # 2.1 s, 587 KiB (JS 5.3, CSS 37.0); desktop: Speed Index 0.8 s, 381 KiB. Archived in
  # _audits/14pyramides/pagespeed (JSON, HTML, full-page capture).
  # The link points to the full-page capture on Cloudinary, not to pagespeed.web.dev, where shared
  # reports expire within about a month, as in jeantet.md
  # Before: preprod report i1n9synvmc of 2026-10-19 (99, 100, 100, 100), expired.
  - type: datas
    heading:
      title: Analyse du nouveau site de l’office
      text: >-
        Même test, sur la page d’accueil du nouveau site conçu avec Lawyerify. Voici, ci-dessous, {{<  blank_link text=`le résultat sur Google PageSpeed` link=`https://res.cloudinary.com/uncinq/image/upload/v1795170706/rpy5md65b1-pagespeed-fullpage_nadtlr.png` >}} sur mobile, mesuré le 20 novembre 2026 sur le site en ligne : 100 sur 100 partout, sur mobile comme sur ordinateur.
    column: 4
    show_color: true
    show_gauge: true
    items:
      - title: Performance
        value: 100
        suffix: "%"
        limit: 100
      - title: Accessibilité
        value: 100
        suffix: "%"
        limit: 100
      - title: Meilleures pratiques
        value: 100
        suffix: "%"
        limit: 100
      - title: Référencement (SEO)
        value: 100
        suffix: "%"
        limit: 100

  # Replaces the "Comparaison technique" title and its two charts, as in jeantet.md. Home page,
  # mobile. Wordpress: PageSpeed (Lighthouse 13.5.0), 2026-10-17, and for the Speed Index a local
  # Lighthouse 13.5.0 run the same day. Lawyerify: PageSpeed report rpy5md65b1 of the live site,
  # 2026-11-20 (Lighthouse 13.6.0).
  # - total 4613 -> 587 KiB: 87 % less, 7.9 times lighter (4.5 MiB -> 0.57 MiB)
  # - JS 906 -> 5.3 KiB: 99 % less
  # - CSS 147 -> 37.0 KiB: 75 % less
  # - Speed Index mobile 7.2 -> 2.1 s: 71 % less, 3.4 times faster; desktop 1.7 -> 0.8 s
  # - performance score, PageSpeed mobile: 53 -> 100, +89 % (+47 points)
  # Before, with the preprod report i1n9synvmc of 2026-10-19: 671 KiB, JS 5.8, CSS 36.8, Speed Index
  # 1.9 s mobile and 0.9 s desktop, performance 99.
  # No minus sign: the titles carry the direction, so every value reads as a gain.
  - type: datas
    heading:
      title: Près de huit fois plus léger, plus de trois fois plus rapide
      text: >-
        Voici la comparaison chiffrée de la page d’accueil des deux sites sur mobile, grâce aux données de Google Lighthouse : en octobre 2026 pour l’ancien site, le 20 novembre pour le nouveau.
    column: 4
    items:
      - title: Données en moins
        value: 87
        suffix: "%"
        limit: 100
        text: 590 Ko transférés à chaque visite, contre 4,5 Mo.
      - title: JavaScript en moins
        value: 99
        suffix: "%"
        limit: 100
        text: 5 Ko chargés, contre 906 Ko.
      - title: Temps d’affichage en moins
        value: 71
        suffix: "%"
        limit: 100
        text: 2,1 s pour afficher la page, contre 7,2 s.
      - title: Performance en plus
        value: 89
        prefix: "+"
        suffix: "%"
        limit: 100
        text: 100 sur 100 dans Google PageSpeed, contre 53.

  # From the 14pyramides repo: Decap CMS, media stored in the repo and served by the site (no
  # Cloudinary), no Pagefind; Netlify runs "yarn build" (Hugo) on each commit
  - type: informations
    column: 4
    background: true
    heading:
      title: Stack technique du projet
      text: Frameworks et hébergements.
    items:
      - title: Hugo
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759139728/logo-hugo_mpfc7g.svg
          isLogo: true
        text: Génération du site statique.
      - title: Decap CMS
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1758125974/logo-decap-cms_s1xnvt.svg
          isLogo: true
        text: Administration des contenus.
      - title: Github
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759141102/logo-github-white_wjzqsw.svg
          isLogo: true
        text: Code et contenus versionnés.
      - title: Netlify
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1795097257/logo-netlify-picto_clrkf6.svg
          isLogo: true
        text: Mise en ligne et hébergement.

  # As in jeantet.md, after the stack, with the same background. Figures from the gains block above:
  # 7.9 times lighter (4613 -> 587 KiB), 3.4 times faster (Speed Index 7.2 -> 2.1 s), home page, mobile.
  - type: quote
    background: true
    quote: >-
      « Près de huit fois plus léger, plus de trois fois plus rapide : un site qui s’affiche tout de suite, même sur mobile, c’est d’abord plus de confort pour chaque visiteur de l’office. »
    author:
      title: Sébastien Moulène
      text: Un Cinq
      image:
        src: https://res.cloudinary.com/uncinq/image/upload/v1758205367/sebastien-moulene_ft0yg7.jpg

  # Live home page on 2026-11-20, 1512 x 819 at device scale 2, 3024 x 1638 px, like jeantet.md
  - type: figure
    grid: medium
    offset: center
    figure:
      src: https://res.cloudinary.com/uncinq/image/upload/v1795166257/screenshot-14pyramides-home_trxmtv.png
      screenshot: true
      alt: Capture d’écran de la page d’accueil du nouveau site 14 Pyramides
      legend: Page d’accueil du nouveau site 14 Pyramides

  - type: cta
    background: true
    heading:
      title: Bonne visite !
    ctas:
      - text: Découvrez le nouveau site Web de 14 Pyramides Notaires
        url: https://14pyramides.notaires.fr/
        blank: true
---
