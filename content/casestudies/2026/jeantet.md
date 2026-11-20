---
isIndex: false
draft: false
date: 2026-11-16T08:00:00.000Z
slug: jeantet-migration-wordpress-lawyerify
title: Jeantet
description: Migration d’un site Wordpress vers Lawyerify pour un cabinet d’avocats d’affaires indépendant.
seo:
  image: https://res.cloudinary.com/uncinq/image/upload/v1795095996/share-migration-wordpress-to-lawyerify_m3lztk.png
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1795006291/logo-jeantet_cysdxk.svg
hero:
  surtitle: Étude de cas
  title: Jeantet, migration d’un site Wordpress vers Lawyerify
  image:
    src: https://res.cloudinary.com/uncinq/image/upload/v1795006291/logo-jeantet_cysdxk.svg
casestudies_services: lawyerify
blocks:
  # A figure block, as in 14-pyramides-notaires.md: the presentation, then the photo below it
  - type: figure
    heading:
      title: Quelques mots sur le cabinet
      text: >-
        Fondé en 1924, Jeantet est l’un des principaux cabinets d’avocats d’affaires français indépendants. Pluridisciplinaire, il intervient aussi bien sur les acquisitions et les restructurations que sur les contentieux à fort enjeu.


        Il conseille de grands groupes nationaux et internationaux, des banques et institutions financières, des fonds d’investissement, mais aussi des PME, l’État, les collectivités territoriales et des organisations professionnelles. La moitié de ses clients sont à l’international.
    align: center
    grid: medium
    offset: center
    figure:
      src: https://res.cloudinary.com/uncinq/image/upload/v1795089097/jeantet-office_lsg6qy.jpg
      alt: Le hall d’accueil du cabinet Jeantet, sous une verrière, avec son escalier en pierre et sa banque d’accueil
      legend: L’accueil du cabinet Jeantet
      credit: © Jeantet

  - type: informations
    column: 4
    background: true
    heading:
      title: État des lieux
      text:
        La précédente version du site a été créée grâce au système de gestion de contenu Wordpress, avec le thème Enfold et l’extension WPML pour les quatre langues.


        Wordpress, écrit en PHP, repose sur une base de données MySQL, ce qui implique un hébergement compatible.
    # Old site facts from _audits/jeantet/wordpress-jeantet-fr-2026-11-18.md: at least 13 plugins seen
    # from outside, not counting the WPML modules; server response of /avocats/ 6.5 to 9 s in
    # Lighthouse (19 s with curl)
    items:
      - title: Sécurité
        icon: shield-slash
        text: Au moins 13 extensions, autant de portes d’entrée sans mises à jour régulières.
      - title: Performance
        icon: exclamation-diamond
        text: Plus de 5 Mo transférés au chargement de la page d’accueil, dont 4 Mo pour l’anti-spam des formulaires, et un serveur qui mettait plus de 6 s à renvoyer la page des avocats.
      - title: Chronophage
        icon: hourglass
        text: >-
          Wordpress, le thème Enfold, WPML et ses modules, plus les extensions : tout est à mettre à jour.
      - title: Espace admin
        icon: kanban
        text: Non personnalisé et parasité par de nombreuses options inutiles.

  # Patchstack: 11,334 new vulnerabilities in 2025, +42% compared to 2024, as in bluemax-media.md
  - type: quote
    quote: « Le nombre de nouvelles vulnérabilités découvertes sur WordPress a augmenté de 42 % en un an, atteignant un record de 11 334 failles recensées. »
    author:
      title: Patchstack
      text: State of WordPress Security In 2026
      url: https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/
    # Same background as "État des lieux" above, on purpose: the quote backs its "Sécurité" card,
    # the two read as one section
    background: true

  # PageSpeed Insights (Lighthouse 13.6.0), mobile, 2026-11-16 09:15, report 3qnbqz2sij, still online
  # on 2026-11-18 once the old site was gone. Screenshot in _audits/jeantet, in case PageSpeed drops it.
  # Core Web Vitals: Chrome UX Report, origin, last 28 days: LCP 4.1 s, INP 115 ms, CLS 0, FCP 3.5 s, TTFB 2.7 s
  - type: datas
    background: true
    heading:
      title: Analyse de l’ancien site du cabinet
      text: >-
        Google Lighthouse, un outil open source, mesure la qualité des pages Web. Voici, ci-dessous, {{<  blank_link text=`le résultat sur Google PageSpeed` link=`https://pagespeed.web.dev/analysis/https-www-jeantet-fr/3qnbqz2sij?form_factor=mobile` >}} de la page d’accueil sur mobile, mesuré le 16 novembre 2026.


        Les données réelles des visiteurs, collectées par Chrome sur les 28 derniers jours, vont dans le même sens : le site échoue à l’évaluation des [Core Web Vitals](/nos-articles/comprendre-les-core-web-vitals-signaux-web-essentiels-de-google/) de Google. Le plus grand élément de la page met 4,1 s à s’afficher, quand Google recommande moins de 2,5 s.
    column: 4
    show_color: true
    show_gauge: true
    items:
      - title: Performance
        value: 63
        suffix: "%"
        limit: 100
      - title: Accessibilité
        value: 85
        suffix: "%"
        limit: 100
      - title: Meilleures pratiques
        value: 96
        suffix: "%"
        limit: 100
      - title: Référencement (SEO)
        value: 100
        suffix: "%"
        limit: 100

  - type: informations
    column: 3
    heading:
      title: Pourquoi améliorer ces critères ?
    # BBC: web.dev, "Why does speed matter?", checked on 2026-11-19. The often-quoted Google figure
    # (bounce +32 % from 1 to 3 s) lost its source: the Think with Google page now redirects.
    items:
      - icon: people
        title: Pour les clients du cabinet
        text: >-
          La moitié sont à l’international : un site léger s’affiche vite, même sur mobile et en déplacement.
      - icon: graph-up-arrow
        title: Pour son activité
        text: >-
          Chaque seconde compte : {{<  blank_link text=`la BBC perdait 10 % de visiteurs en plus` link=`https://web.dev/articles/why-speed-matters` >}} pour chaque seconde de chargement supplémentaire.
      - icon: search-heart
        title: Pour son référencement
        text: >-
          Google tient compte de la vitesse, de la réactivité et de la stabilité des pages, les Core Web Vitals, pour classer ses résultats.
      # RSE, social side. No PageSpeed score here: Lighthouse only checks a few accessibility criteria
      # automatically. The improvement is on all the RGAA criteria (the user, 2026-11-19); skip link
      # "Contenu principal" and pause button on the hero video checked on the live home page
      - icon: universal-access-circle
        title: Pour l’accessibilité
        text: >-
          Volet social de la RSE : une accessibilité nettement améliorée sur l’ensemble des critères du RGAA, le référentiel français, du lien d’évitement au bouton pause de la vidéo.
      # RSE, environmental side. Saved per page, mobile, Lighthouse 13.6.0 (compare_pages.py in
      # _audits/jeantet/lighthouse): home 4.00 MiB (medians, the hero video stays), lawyer 4.33,
      # article 4.49, news 4.59, lawyers 5.09, expertise 5.17, expertises 5.39, contact 8.33. The old
      # site's Turnstile payloads (two 1.5 MiB XHR with a one-time token) were downloaded again on
      # every page, so the savings add up over a visit. Pages on Netlify's CDN and media on
      # Cloudinary's, instead of Apache with PHP and MySQL (HTTP/1.1, 1.5 to 5.4 s server response).
      # Energy stays qualitative: nothing was measured in kWh or CO2. The old site had WP Super Cache,
      # so the text does not claim that each page used to be computed on every visit.
      - icon: leaf
        title: Pour l’environnement
        text: >-
          Volet environnemental de la RSE : jusqu’à 8 Mo de moins à chaque page vue. Moins de données à transporter, moins de serveurs sollicités : un site plus sobre, qui consomme moins d’énergie.
      # Security: no PHP, MySQL or plugins on the new site, see "État des lieux" and the Patchstack
      # quote above; shield-check answers the shield-slash of the old site's "Sécurité" card
      - icon: shield-check
        title: Pour sa sécurité
        text: >-
          Sans PHP, base de données ni extensions à mettre à jour, la surface d’attaque se réduit fortement : les failles de Wordpress ne le concernent plus.

  # TODO: Agnès Beauchamps's real quote, the lorem ipsum is a placeholder; the page is draft: false.
  # Role written "Direction de la communication": change it to the exact title she uses.
  # No background: "Un site à l’image du cabinet" below has one.
  - type: quote
    background: false
    quote: « Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. »
    author:
      title: Agnès Beauchamps
      text: Direction de la communication, Jeantet
      image:
        src: https://res.cloudinary.com/uncinq/image/upload/v1795098597/agnes-beauchamps_zsrgly.jpg

  # Counts from the jeantet repo on 2026-11-16. Checked at go-live, 2026-11-18, repo and live sitemap:
  # - 16 expertises: right
  # - 135 persons published in fr and in en, this block says 134
  # - 563 posts in fr and 387 in en, 950 in all, this block says "Plus de 750"
  # - de and zh are declared but disabled in hugo.yaml ("not published yet"): www.jeantet.fr/de/ and
  #   /zh/ answer 404, the site is only in fr and en for now, this block says 4 languages
  - type: informations
    background: true
    column: 4
    heading:
      title: Un site à l’image du cabinet
      text: Une nouvelle architecture pensée autour des expertises et des avocats du cabinet.
    items:
      - title: 16 expertises
        icon: briefcase
        text: Une page par expertise, avec ses avocats et ses actualités.
      - title: 134 avocats
        icon: people
        text: Une fiche dédiée pour chaque avocat, associés, counsels et collaborateurs.
      - title: 4 langues
        icon: translate
        text: Le site est disponible en français, en anglais (en allemand et en chinois bientôt).
      - title: Contenu migré
        icon: files
        text: Plus de 750 actualités de l’ancien site ont été exportées de Wordpress puis converties en Markdown.

  # As in 14-pyramides-notaires.md. Figma screenshot, 1355 x 863 px: frames Homepage v1, A propos,
  # Expertises, Secteurs and Actualités, each in desktop and mobile. Title changed from 14P's
  # "à l’image de…", which the block above already uses.
  - type: figure
    heading:
      title: Un design system signé Bonhomme
      text: >-
        Le studio de design {{<  blank_link text=`Bonhomme` link=`https://www.bonhommeparis.com/fr/` >}} a conçu le design system du nouveau site dans Figma : couleurs, typographies, espacements et une bibliothèque de composants. Chaque page, de l’accueil aux actualités, est un assemblage de ces mêmes blocs, déclinés en desktop et en mobile. Le site reste cohérent de bout en bout, et le cabinet l’enrichit lui-même sans jamais sortir de son identité.
    background: true
    grid: medium
    align: center
    offset: center
    figure:
      src: https://res.cloudinary.com/uncinq/image/upload/v1795089787/screenshot-jeantet-figma_wlhdcd.png
      alt: Capture d’écran du fichier Figma du design system de Jeantet
      legend: Maquettes Figma des pages accueil, à propos, expertises, secteurs et actualités, en desktop et mobile
      screenshot: true

  - type: quote
    background: true
    quote: « Une nouvelle collaboration très fructueuse sur ce beau projet. L'implication dans les problématiques contemporaines d'eco-conception et d'accessibilité fait de Un Cinq un partenaire remarquable. »
    author:
      title: Emmanuel Cruellas
      text: Co-fondateur, Bonhomme
      image:
        src: https://res.cloudinary.com/uncinq/image/upload/v1759149716/emmanuel-cruellas.jpg

  # After the design system: what was built (design, then admin) before the performance results.
  # Sveltia CMS screenshot, 2880 x 1744 px: the Pages collection, the others in the sidebar
  # (Expertises 157, Actualités 563, Personnes 135, Distinctions 226…). No background: the design
  # system figure and the Bonhomme quote above have one, the performance blocks below have none.
  - type: figure
    background: true
    heading:
      title: Un espace d’administration sur mesure
      text: >-
        Fini l’admin Wordpress compliqué et parasité par des fonctionnalités inutiles au cabinet. Place à un admin dédié et simplifié pour Jeantet, où chaque type de contenu a sa collection, des actualités aux distinctions.
    grid: medium
    offset: center
    figure:
      src: https://res.cloudinary.com/uncinq/image/upload/v1795093839/screenshot-jeantet-admin_tvl6ll.png
      alt: Capture d’écran de l’admin Sveltia CMS de Jeantet, avec ses collections pages, expertises, actualités, personnes et distinctions
      legend: Admin Lawyerify dédié à Jeantet, dans Sveltia CMS
      screenshot: true

  # PageSpeed Insights (Lighthouse 13.6.0), mobile, 2026-11-19 18:37, after the accessibility fixes,
  # report muj2nr2fo4: 100 everywhere, on mobile and on desktop. Mobile metrics: FCP 1.1 s, LCP 1.6 s,
  # TBT 0 ms, CLS 0, Speed Index 2.2 s, 1199 KiB. Desktop: Speed Index 0.9 s, 1824 KiB.
  # The report of go-live evening, 2026-11-18 22:49 (5vtive4ipp): 99, 93, 100, 100 on mobile.
  # Screenshots of both in _audits/jeantet. The link points to the full-page capture of muj2nr2fo4 on
  # Cloudinary, not to pagespeed.web.dev, where shared reports expire after some months; the full
  # report (JSON, HTML) is in _audits/jeantet/pagespeed.
  - type: datas
    heading:
      title: Analyse du nouveau site du cabinet
      text: >-
        Même test, sur la page d’accueil du nouveau site conçu avec Lawyerify. Voici, ci-dessous, {{<  blank_link text=`le résultat sur Google PageSpeed` link=`https://res.cloudinary.com/uncinq/image/upload/v1795110570/muj2nr2fo4-pagespeed-fullpage-jeantet_kdpgje.png` >}} sur mobile, mesuré le 19 novembre 2026, au lendemain de la mise en ligne : 100 sur 100 partout, sur mobile comme sur ordinateur.
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

  # PageSpeed Insights kept failing on the old site, and so did a first local run (NO_FCP: no
  # paint within Lighthouse's 30 s limit). Both sites measured the same way on 2026-11-18, locally
  # with Lighthouse 13.6.0, the PageSpeed version, maxWaitForFcp raised to 90 s: median of 3 runs
  # per form factor. Wordpress in the afternoon, Lawyerify on www.jeantet.fr at 22:52, after go-live.
  # Reports in _audits/jeantet/lighthouse, the new site's in lawyerify-live.
  # Gains below, home page, mobile medians:
  # - total 5318.5 -> 1218.1 KiB: -77 %, 4.4 times lighter (5.2 -> 1.2 MiB)
  # - JS 606.5 -> 80.2 KiB: -87 %
  # - Speed Index 9.82 -> 2.39 s: -76 %, 4.1 times faster
  # - performance score, the two PageSpeed mobile reports above: 63 -> 100, +59 % (+37 points)
  #   (3qnbqz2sij of 2026-11-16 -> muj2nr2fo4 of 2026-11-19; it was 99, +57 %, on go-live evening)
  # Left out since the two charts that followed were removed: CSS 131 -> 51.6 KiB (-61 %), desktop
  # Speed Index 4.4 -> 0.8 s. Speed Index runs: Wordpress mobile 8.9, 9.8, 16.2 s, desktop 4.4, 4.1,
  # 10.0 s (PageSpeed mobile on 2026-11-16, report 3qnbqz2sij: 31.5 s); Lawyerify mobile 2.4, 2.4,
  # 2.1 s, desktop 0.8, 0.9, 0.8 s (PageSpeed on 2026-11-18, report 5vtive4ipp: 2.9 s on mobile,
  # 0.8 s on desktop).
  # Wordpress: about 3990 KiB of its total come from Cloudflare Turnstile, the anti-spam of the two
  # Contact Form 7 forms of the home page, also with a regular, non-headless Chrome.
  # Lawyerify: the hero video, jeantet_home_hero.webm (Cloudinary, q_auto, 576 px wide on mobile),
  # weighs 795 KiB of its total. Its JS counts Matomo (44 KiB) and the Pagefind search UI (28 KiB).
  # Netlify still served main.min.css uncompressed in 2 runs out of 6 (264 KiB instead of 49 KiB
  # with brotli) and main.js in 1 (28 KiB instead of 8 KiB), which the medians leave out. CSS and JS
  # are still sent with max-age=0, must-revalidate.
  # The gauges have no show_color: it would paint the reductions orange, since 76 and 77 are below 90.
  - type: datas
    heading:
      title: Quatre fois plus léger, quatre fois plus rapide
      text: >-
        Et pourtant, le nouveau site est bien plus ambitieux : une vidéo ouvre sa page d’accueil. Voici la comparaison chiffrée de cette page sur mobile, grâce aux données de Google Lighthouse. Pour les deux sites, ce sont les médianes de trois mesures du 18 novembre 2026, le jour de la mise en ligne.
    column: 4
    show_gauge: false
    # No minus sign: the titles carry the direction ("en moins", "en plus"), so every gauge reads as
    # a gain. A "+" in front of a reduction would read as an increase.
    items:
      - title: Données en moins
        value: 77
        suffix: "%"
        limit: 100
        text: 1,2 Mo transférés à chaque visite, vidéo comprise, contre 5,2 Mo.
      - title: JavaScript en moins
        value: 87
        suffix: "%"
        limit: 100
        text: 80 Ko chargés, contre 606 Ko.
      - title: Temps d’affichage en moins
        value: 76
        suffix: "%"
        limit: 100
        text: 2,4 s pour afficher la page, contre 9,8 s.
      - title: Performance en plus
        value: 59
        suffix: "%"
        limit: 100
        text: 100 sur 100 dans Google PageSpeed, contre 63.

  - type: informations
    column: 6
    background: true
    heading:
      title: Stack technique du projet
      text: Frameworks et hébergements.
    items:
      # From the jeantet repo: Sveltia CMS on the GitHub backend (Jeantet-AARPI/jeantet), media on
      # Jeantet's Cloudinary account (no local storage), Netlify runs "yarn build:search" (Hugo, then
      # the Pagefind search index) on each commit
      - title: Hugo
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759139728/logo-hugo_mpfc7g.svg
          isLogo: true
        text: Génération du site statique.
      - title: Pagefind
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1795097258/logo-pagefind-picto_ybeiup.svg
          isLogo: true
        text: Recherche sans serveur.
      - title: Sveltia CMS
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1795040379/sveltia-cms_vi0wwh.svg
          isLogo: true
        text: Administration des contenus.
      - title: Cloudinary
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1795096168/cloudinary_cloud_glyph_white_ngqjyb.svg
          isLogo: true
        text: Images et vidéo optimisées.
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

  # Jeantet in the CMS: 563 posts in fr and 387 in en, 135 persons per language; de and zh stay
  # editable in Sveltia CMS while they are disabled on the site. No figure in the quote, so it does
  # not contradict "Plus de 750 actualités" above.
  - type: quote
    background: true
    quote: >-
      « Avec des centaines d’actualités et de fiches avocats en plusieurs langues, Sveltia CMS était le choix évident : un CMS headless rapide, pensé pour le multilingue, sans base de données ni serveur à maintenir. »
    author:
      title: Sébastien Moulène
      text: Un Cinq
      image:
        src: https://res.cloudinary.com/uncinq/image/upload/v1758205367/sebastien-moulene_ft0yg7.jpg

  # Screenshot of the home page, desktop, 3024 x 1638 px
  - type: figure
    grid: medium
    offset: center
    figure:
      src: https://res.cloudinary.com/uncinq/image/upload/v1795041070/screenshot-jeantet-home_h2pu8y.png
      screenshot: true
      alt: Capture d’écran de la page d’accueil du nouveau site Jeantet
      legend: Page d’accueil du nouveau site Jeantet

  - type: cta
    background: true
    heading:
      title: Bonne visite !
    ctas:
      - text: Découvrez le nouveau site Web de Jeantet
        url: https://www.jeantet.fr/
        blank: true
---
