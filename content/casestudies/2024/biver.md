---
isIndex: false
draft: true
date: 2024-06-03T08:34:08.410Z
casestudies_services: hugolify
title: Biver
slug: biver-site-performant-hugolify
description: Mise en place d’un site performant avec Hugolify
seo:
  image: /images/uploads/biver-share.png
image:
  src: /images/uploads/biver-logo.svg
hero:
  surtitle: Étude de cas
  title: Biver, mise en place d’un site performant avec Hugolify
  image:
    src: /images/uploads/biver-logo.svg
blocks:
  - type: figure
    heading:
      title: Quelques mots sur la société
      text: La maison Biver a établi ses quartiers non loin des rives du Lac Léman, dans le petit village suisse de Givrins entre Genève et la vallée de Joux. Sous la direction d'un duo père-fils dynamique et grâce au savoir-faire des maîtres horlogers, ils insufflent une âme à chacune des créations.
    grid: medium
    align: center
    offset: center
    figure:
      src: /images/uploads/biver-famille.jpg
      legend: Jean-Claude et Pierre Biver
      credit: © Biver

  - type: informations
    heading:
      title: Pourquoi la solution Hugolify ?
      text: Le choix de développer le site vitrine avec Hugolify permet de simplifier la conception et sa maintenabilité contrairement à un site conçu avec Wordpress, Drupal par exemple.
    column: 5
    items:
      - title: Sécurité
        icon: shield-slash
        text: Pas de plugins ni de base de données, site statique pour une approche low-code.
      - title: Performance
        icon: speedometer
        text: Focus sur les Core Web Vitals de Google PageSpeed Insight.
      - title: Accessibilité
        icon: universal-access-circle
        text: Respect du référenciel général d’amélioration d’accessibilité (RGAA).
      - title: Maintenabilité
        icon: hourglass
        text: L’approche low-code permet de maintenir le site sans être chronophage.
      - title: Espace admin
        icon: kanban
        text: Dédié et simplifié grâce à Decap CMS.
    background: true
  - type: informations
    column: 5
    background: true
    heading:
      title: Stack technique de Hugolify
      text: Frameworks et hébergements.
    items:
      - title: Hugo
        image:
          src: /images/uploads/logo-hugo.svg
          isLogo: true
      - title: Decap CMS
        image:
          src: /images/uploads/logo-decap.svg
          isLogo: true
      - title: Bootstrap
        image:
          src: /images/uploads/logo-bootstrap-5.svg
          isLogo: true
      - title: Github
        image:
          src: /images/uploads/logo-github.svg
          isLogo: true
      - title: Netlify
        image:
          src: /images/uploads/logo-netlify.svg
          isLogo: true

  - type: informations
    column: 4
    background: false
    heading:
      title: Pourquoi concevoir un site performant ?
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
        text: Un site Web très bien conçu est l’assurance d’être mis en avant par Google
      - title: Pour votre empreinte carbone
        icon: globe-europe-africa
        text:
          En ayant un site Web non énergivore vous réduirez considérablement votre
          impact environnemental.
  - type: quote
    quote: « Google intègre les Core Web Vitals dans son algorithme et décide de mettre plus facilement en avant une page qui possède une expérience utilisateur conviviale »
    author:
      image:
        src: /images/uploads/logo-google.svg
      title: Google
      text: Blog Google Search Central, 2021
      url: https://developers.google.com/search/blog/2020/11/timing-for-page-experience?hl=fr
    background: false

  - type: figure
    heading:
      title: Un design responsive réussi.
      text: Le studio [Bonhomme](https://www.bonhommeparis.com/fr/) nous a fait confiance pour gérer l’entièreté du développement et intégration. de leur côté ils ont réalisé un UX/UI modulaire.
    background: true
    grid: medium
    align: center
    offset: center
    figure:
      src: /images/uploads/biver-home.png
      screenshot: true

  - type: quote
    background: true
    quote: « Un design modulaire et atomique permet de tirer le meilleur d’Hugolify. »
    author:
      title: Sébastien Moulène
      text: Un Cinq
      image:
        src: /images/uploads/sebastien-moulene.jpg

  - type: figure
    heading:
      title: Un espace d’administration dédié et simplifié
      text: >-
        Grâce à l’utilisation de Decap CMS et une configuration personnalisé.
    background: false
    grid: medium
    align: center
    offset: center
    figure:
      src: /images/uploads/biver-admin-hugolify.png
      legend: Admin Hugolify dédié à Biver
      screenshot: true

  - type: informations
    column: 4
    background: false
    heading:
      title: Côté développement
      text: >-
        L’utilisation des modules Hugolify pré-codé permet de limiter le temps passé et les erreurs éventuelles.
        Ainsi que de profiter de la gestion des images (lazy loading, srcset…).
    items:
      - title: Modules Hugolify
        text: 2 modules créés pour le site Web et 9 modules Hugolify ont été utilisés pour concevoir l’architecture du site Web.
        icon: git
      - title: Blocs Hugolify
        text: 5 blocs créés pour le site Web et 8 blocs Hugolify utilisés.
        icon: puzzle-fill
      - title: HTML
        text: Un cinquantaine de mini partials ont été overridés.
        icon: code-slash
      - title: SASS
        text: Un cinquantaine de micro fichiers SASS ont été overridés ou mergé.
        icon: filetype-sass

  - type: datas
    heading:
      title: Fichiers concaténés, minifiés et purgés
      text: Pour une performance optimale, le fichier CSS est appelé en priorité haute alors que le fichier javascript est lui en defer.
    column: 4
    show_color: false
    show_gauge: false
    items:
      - title: 1 seul CSS chargé
        value: 24.2
        suffix: Ko
        limit: 100
      - title: 1 seul JS chargé
        value: 23.6
        suffix: Ko
        limit: 100

  - type: datas
    heading:
      title: Analyse du site conçu avec Hugolify
      text: Grâce à Google Lighthouse qui est un outil open-source permettant de
        mesurer la qualité des pages Web. Voici, ci-dessous, le résultat du test des Core Web Vitals de la page
        d’accueil sur mobile.
    column: 4
    show_color: true
    show_gauge: true
    items:
      - title: Performance
        limit: 100
        suffix: "%"
        value: 100
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
        limit: 100
        suffix: "%"
    background: true

  - type: quote
    background: true
    quote: « Le choix d’Hugolify permet d’avoir une site Web robuste, rapide, accessible à tous et évolutif rapidement. Tout en étant pérenne et low-code »
    author:
      title: Sébastien Moulène
      text: Un Cinq
      image:
        src: /images/uploads/sebastien-moulene.jpg
  - type: cta
    heading:
      title: Bonne visite !
    cta:
      text: Découvrez le nouveau site Web de Biver
      url: https://www.jcbiver.com/
      blank: true
---
