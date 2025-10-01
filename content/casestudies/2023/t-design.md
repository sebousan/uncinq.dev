---
isIndex: false
draft: false
date: 2023-01-02T19:34:08.410Z
title: Tdesign
slug: tdeisgn-site-performant-hugolify
slug: tdeisgn-architecture-migration-php-hugo
description: Migration d’un site PHP vers Architectify.
casestudies_services: architectify
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1759318513/logo-tdesign-white_va5ao4.svg
hero:
  surtitle: Étude de cas
  title: Tdesign, Migration d’un site PHP vers Architectify
  image:
    src: https://res.cloudinary.com/uncinq/image/upload/v1759318513/logo-tdesign-white_va5ao4.svg
blocks:
  - type: figure
    heading:
      title: Quelques mots sur le cabinet
      text: L’équipe de Tdesign se repose sur un pool de créatifs d’horizons variés et complémentaires, architectes, archi d’intérieurs, décorateurs, artistes peintre, illustrateurs, photographes et perspectivistes 3D, qui nourrit aujourd’hui une certaine émulation pour développer une approche théorique basée sur un gros travail d’analyse, de recherches et d’écoute en amont de la conception.
    grid: medium
    align: center
    offset: center
    figure:
      src: https://res.cloudinary.com/uncinq/image/upload/v1759319724/tdesign-intro_d4mwq6.jpg
      credit: © T design
  
  - type: informations
    column: 5
    heading:
      title: État des lieux
      text: La précédente version du site a été créé grâce à un système de gestion de
        contenu propriétaire. Écrit en PHP, il repose sur une base de données
        MySQL. Cela implique un hébergement sur serveur Apache et une maintenance
        du système.
    items:
      - title: PHP
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759319100/logo-php_pbfuln.svg
          isLogo: true
      - title: MySQL
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759319108/logo-mysql_nuglys.svg
          isLogo: true
      - title: Apache
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759319105/logo-apache_kmy2ap.svg
          isLogo: true
  
  
  - type: datas
    heading:
      title: Analyse de l’ancien site du cabinet
      text: Grâce à Google Lighthouse qui est un outil open source permettant de
        mesurer la qualité des pages Web. Voici, ci-dessous, le test de la page
        d’accueil sur mobile.
    column: 4
    show_color: true
    show_gauge: true
    items:
      - title: Performance
        value: 71
        suffix: "%"
        limit: 100
      - title: Accessibilité
        value: 96
        suffix: "%"
        limit: 100
      - title: Meilleures pratiques
        value: 83
        suffix: "%"
        limit: 100
      - title: Référencement (SE0)
        value: 79
        suffix: "%"
        limit: 100
  
  - type: informations
    column: 3
    background: false
    heading:
      title: Pourquoi améliorer ces critères ?
    items:
      - icon: people
        title: Pour vos utilisateurs
        text: "Un site plus léger, c'est une meilleure expérience : les pages se
          chargent rapidement, même sur mobile et même si le réseau n'est pas
          très bon."
      - icon: graph-up-arrow
        title: Pour votre activité
        text: Un site web plus rapide, c'est une meilleure performance business. Cela a
          aussi de nombreux autres impacts positifs.
      - title: Pour votre empreinte carbone
        icon: globe-europe-africa
        text: En ayant un site web non énergivore vous réduirez considérablement votre
          impact environnemental
  
  
  - type: figure
    background: true
    grid: medium
    offset: center
    heading:
      title: Un espace d’administration simplifié
    figure:
      src: https://res.cloudinary.com/uncinq/image/upload/v1759307201/tdesign-screenshot-admin_w0qux5.png
      legend: Admin Architectify dédié au cabinet

  - type: informations
    column: 5
    background: true
    heading:
      title: Stack technique du projet
      text: Frameworks et hébergements.
    items:
      - title: Hugo
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759139728/logo-hugo_mpfc7g.svg
          isLogo: true
      - title: Netlify CMS
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1758126072/logo-netlify-cms_yrrarb.svg
          isLogo: true
      - title: Bootstrap
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1758128591/logo-bootstrap-5_h3gtgt.svg
          isLogo: true
      - title: Github
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759141102/logo-github-white_wjzqsw.svg
          isLogo: true
      - title: Netlify
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759141001/logo-netlify-white_z99tjm.svg
          isLogo: true
  
  - type: datas
    background: true
    heading:
      title: Analyse du nouveau site du cabinet
      text: Grâce à Architectify, tous les voyants sont au vert !
    column: 4
    show_color: true
    show_gauge: true
    items:
      - title: Performance
        limit: 100
        suffix: "%"
        value: 98
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

  - type: figure
    background: true
    grid: medium
    offset: center
    figure:
      src: https://res.cloudinary.com/uncinq/image/upload/v1758214805/tdesign_ctqfz1.png
      screenshot: true
      alt: Capture d’écran de la page d’accueil du site T design architecture
      legend: Page d’accueil du site T design architecture
  
  - type: quote
    quote: « Il nous fallait un site évolutif et maintenable dans le temps. Architectify nous a permis d’associer évolution et site Web bas carbone et accessible. »
    author:
      title: Frédéric Thet
      text: T design architecture
      image:
        src: https://res.cloudinary.com/uncinq/image/upload/v1759318088/frederic-thet_ywpofk.jpg
  
  - type: cta
    background: true
    heading:
      title: Bonne visite !
    ctas:
      - text: Découvrez le site Web du cabinet T design architecture
        url: https://tdesignarchitecture.com/
        blank: true
---
