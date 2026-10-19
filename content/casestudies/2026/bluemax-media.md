---
isIndex: false
draft: false
date: 2026-04-18T10:00:00.000Z
slug: bluemax-media-migration-wordpress-hugolify
title: BlueMax Media
description: Migration d’un site Wordpress vers Hugolify pour une société de production vidéo.
seo:
  image: https://res.cloudinary.com/uncinq/image/upload/v1792414268/logo-bluemaxmedia_nnayzs.svg
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1792414268/logo-bluemaxmedia_nnayzs.svg
hero:
  surtitle: Étude de cas
  title: BlueMax Media, migration d’un site Wordpress vers Hugolify
  image:
    src: https://res.cloudinary.com/uncinq/image/upload/v1792414268/logo-bluemaxmedia_nnayzs.svg
casestudies_services: hugolify
blocks:
  - type: paragraph
    title: Quelques mots sur la société
    text: >-
      BlueMax Media est une société de production vidéo fondée en 2015, installée entre Briançon et Annecy. Sa signature : des athlètes qui filment des athlètes, riders, alpinistes, explorateurs ou coureurs.


      Elle réalise des publicités, des contenus, des documentaires et des films pour des marques comme Salomon, Red Bull, Audi, IWC ou The North Face.
    grid: medium
    align: center
    offset: center

  - type: informations
    heading:
      title: État des lieux
      text:
        La précédente version du site a été créée grâce au système de gestion de contenu Wordpress.


        Ce logiciel écrit en PHP repose sur une base de données MySQL. Cela implique un hébergement compatible et une maintenance régulière du système, de Wordpress, du thème et de ses plugins.
    column: 4
    items:
      - title: Sécurité
        icon: shield-slash
        text:
          Sans mise à jour de ces solutions, le site Web s’expose grandement aux
          piratages.
      - title: Performance
        icon: exclamation-diamond
        text: Images non optimisées, une seule miniature pesait 2,4 Mo.
      - title: Chronophage
        icon: hourglass
        text:
          Maintenance du système, de Wordpress, du thème et de ses
          plugins.
      - title: Espace admin
        icon: kanban
        text: Non personnalisé et parasité par de nombreuses options inutiles.

  # Patchstack: 11,334 new vulnerabilities in 2025, +42% compared to 2024
  - type: quote
    quote: « Le nombre de nouvelles vulnérabilités découvertes sur WordPress a augmenté de 42 % en un an, atteignant un record de 11 334 failles recensées. »
    author:
      title: Patchstack
      text: State of WordPress Security In 2026
      url: https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/
    background: true

  # PageSpeed Insights (Lighthouse 13.0.1), 2026-02-09, from the screenshots in _audits/bluemaxmedia
  # The report (oy32md8298) has expired on pagespeed.web.dev, hence no link
  - type: datas
    heading:
      title: Analyse de l’ancien site
      text: Grâce à Google Lighthouse qui est un outil open source permettant de mesurer la qualité des pages Web. Voici, ci-dessous, le résultat sur Google PageSpeed de la page d’accueil sur mobile, mesuré le 9 février 2026.
    column: 4
    show_color: true
    show_gauge: true
    items:
      - title: Performance
        value: 71
        suffix: "%"
        limit: 100
      - title: Accessibilité
        value: 94
        suffix: "%"
        limit: 100
      - title: Meilleures pratiques
        value: 73
        suffix: "%"
        limit: 100
      - title: Référencement (SE0)
        value: 100
        suffix: "%"
        limit: 100

  - type: informations
    column: 3
    background: true
    heading:
      title: Pourquoi améliorer ces critères ?
    items:
      - icon: people
        title: Pour vos utilisateurs
        text: "Un site plus léger, c'est une meilleure expérience : les pages se
          chargent rapidement, même sur mobile et même si le réseau n’est pas
          très bon."
      - icon: graph-up-arrow
        title: Pour votre activité
        text:
          Un site Web plus rapide, c'est une meilleure performance business. Cela a
          aussi de nombreux autres impacts positifs.
      - icon: search-heart
        title: Pour votre référencement
        text: Un site Web très bien conçu est l’assurance d’être mis en avant par Google.

  - type: informations
    heading:
      title: Pourquoi la solution Hugolify ?
      text: Le choix de migrer le site vers [Hugolify](/notre-solution-et-produits/hugolify/) permet de simplifier sa conception et sa maintenabilité contrairement à d’autres solutions plus lourdes.
    column: 4
    items:
      - title: Sécurité
        icon: shield-check
        text: Pas de plugins ni de base de données, un site statique pour une approche low-code.
      - title: Légèreté
        icon: speedometer
        text: Une page d’accueil plus de trente fois plus légère que l’ancienne au chargement.
      - title: Maintenabilité
        icon: hourglass
        text: L’approche low-code permet de maintenir le site sans être chronophage.
      - title: Espace admin
        icon: kanban
        text: Dédié et simplifié grâce à Sveltia CMS.

  - type: informations
    column: 4
    background: true
    heading:
      title: Un site à l’image de la société
      text: Une nouvelle architecture pensée autour des projets, des marques et des athlètes.
    items:
      - title: 78 projets
        icon: collection
        text: Classés par type, publicités, contenus, documentaires et films.
      - title: 30 marques
        icon: briefcase
        text: Une page par client, de Salomon à Red Bull.
      - title: 20 athlètes
        icon: people
        text: Une page par athlète, de Candide Thovex à Tessa Worley.
      - title: Contenu migré
        icon: files
        text: Les projets de l’ancien site ont été exportés de Wordpress puis convertis en Markdown.

  # PageSpeed Insights (Lighthouse 13.5.0), 2026-10-19, report ajtv7pvek1
  # The report expires on pagespeed.web.dev, hence no link
  - type: datas
    heading:
      title: Analyse du nouveau site
      text: Même test, sur la page d’accueil du nouveau site conçu avec Hugolify. Voici, ci-dessous, le résultat sur Google PageSpeed sur mobile.
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
      - title: Référencement (SE0)
        value: 100
        suffix: "%"
        limit: 100

  - type: title
    heading:
      title: Comparaison technique des deux sites
      text: >-
        Pour sensiblement les mêmes besoins, voici la comparaison chiffrée des deux sites grâce aux données de Google Lighthouse. Sur le nouveau site, le lecteur de la vidéo YouTube de la page d’accueil, près d’1 Mo, n’est chargé qu’à la première interaction du visiteur : il n’entre pas dans ces mesures. Sources : les rapports Google PageSpeed de l’ancien site du 9 février 2026 et du nouveau site.
  - type: chart
    heading:
      title: Plus de trente fois plus léger
      text: Octets transférés (en Ko) au chargement de la page d’accueil.
    # PageSpeed Insights, KiB: Wordpress 2026-02-09 (Lighthouse 13.0.1), Hugolify 2026-10-19 (Lighthouse 13.5.0)
    # Hugolify excludes the YouTube player, loaded on the first user interaction
    chart:
      type: bar
      data:
        lang: JSON
        json: |-
          {
            labels: [
              'Mobile',
              'Desktop'
            ],
            datasets: [{
              label: 'Wordpress',
              data: [6808, 7604],
              backgroundColor: '#0675c4'
            }, {
              label: 'Hugolify',
              data: [188, 232],
              backgroundColor: '#A90940'
            }]
          };
    grid: small
  - type: chart
    heading:
      title: Plus rapide
      text: Vitesse de chargement en seconde (Speed index).
    # PageSpeed Insights: Wordpress 2026-02-09 (Lighthouse 13.0.1), Hugolify 2026-10-19 (Lighthouse 13.5.0)
    chart:
      type: bar
      data:
        lang: JSON
        json: |-
          {
            labels: [
              'Mobile',
              'Desktop'
            ],
            datasets: [{
              label: 'Wordpress',
              data: [8.8, 3.1],
              backgroundColor: '#0675c4'
            }, {
              label: 'Hugolify',
              data: [2.4, 0.8],
              backgroundColor: '#A90940'
            }]
          };
    grid: small

  - type: informations
    column: 6
    background: true
    heading:
      title: Stack technique du projet
      text: Frameworks et hébergements.
    items:
      - title: Hugo
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759139728/logo-hugo_mpfc7g.svg
          isLogo: true
      - title: Sveltia CMS
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1758126005/logo-sveltia-cms_eh8ftl.png
          isLogo: true
      - title: Bootstrap
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1758128591/logo-bootstrap-5_h3gtgt.svg
          isLogo: true
      - title: Uploadcare
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1792414025/logo-uploadcare_o0lkzp.svg
          isLogo: true
      - title: Github
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759141102/logo-github-white_wjzqsw.svg
          isLogo: true
      - title: Netlify
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759141001/logo-netlify-white_z99tjm.svg
          isLogo: true

  - type: informations
    column: 4
    heading:
      title: Côté développement
      text: >-
        L’utilisation des modules [Hugolify](/notre-solution-et-produits/hugolify/) pré-codés permet de limiter le temps passé et les erreurs éventuelles.
        Ainsi que de profiter de la gestion des images (lazy loading, srcset…).
    items:
      - title: Modules Hugolify
        text: 5 modules Hugolify utilisés, le thème, les projets, leurs tags, leurs types et l’admin.
        icon: git
      - title: HTML
        text: 33 templates HTML overridés ou créés.
        icon: code-slash
      - title: SASS
        text: 40 fichiers SASS overridés ou créés.
        icon: filetype-sass
      - title: Admin
        text: 7 champs personnalisés pour les vidéos, les photos et les médias.
        icon: sliders

  - type: cta
    heading:
      title: Open-source
      text: Le code est en libre accès, vous pouvez le consulter sur Github.
    ctas:
      - url: https://github.com/sebousan/bluemaxmedia
        text: Accès au repository
        blank: true

  - type: cta
    background: true
    heading:
      title: Bonne visite !
    ctas:
      - text: Découvrez le nouveau site Web de BlueMax Media
        url: https://www.bluemaxmedia.com/
        blank: true
---
