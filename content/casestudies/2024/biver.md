---
isIndex: false
draft: true
date: 2024-05-06T08:34:08.410Z
title: Biver
slug: biver-migration-wordpress-hugo
description: Migration d’un site Wordpress vers Hugolify
seo:
  image: /images/uploads/biver-share.png
image:
  src: /images/uploads/biver-logo.svg
hero:
  surtitle: Étude de cas
  title: Biver, migration d’un site Wordpress vers Hugolify
  image:
    src: /images/uploads/biver-logo.svg
casestudies_services: hugolify
blocks:
  - type: figure
    heading:
      title: Quelques mots sur la société
      text: La maison Biver a établi ses quartiers non loin des rives du Lac Léman, dans le petit village suisse de Givrins entre Genève et la vallée de Joux. Sous la direction d'un duo père-fils dynamique et grâce au savoir-faire des maîtres horlogers, ils insufflent une âme à chacune de nos créations.
    grid: medium
    align: center
    offset: center
    figure:
      src: /images/uploads/biver-jc.jpg
      legend: Jean-Claude Biver
      credit: © Biver
  - type: informations
    heading:
      title: État des lieux
      text:
        La précédente version du site a été créée grâce au système de gestion de
        contenu Wordpress avec un thème acheté sur la marketplace. Ce logiciel
        écrit en PHP repose sur une base de données MySQL. Cela implique un
        hébergement sur serveur Apache et une maintenance quotidienne du
        système, de Wordpress, du thème et de ses plugins.
    column: 4
    items:
      - title: Sécurité
        icon: shield-slash
        text:
          Sans mise à jour de ces solutions, le site Web s’expose grandement aux
          piratages.
      - title: Performance
        icon: exclamation-diamond
        text: Manque d’optimisation des assets et du Javascript.
      - title: Chronophage
        icon: hourglass
        text:
          Maintenance quotidienne du système, de Wordpress, du thème et de ses
          plugins.
      - title: Espace admin
        icon: kanban
        text: Non personnalisé et parasité par de nombreuses options inutiles.
  - type: quote
    quote: « Google intègre les Core Web Vitals dans son algorithme et décide de mettre plus facilement en avant une page qui possède une expérience utilisateur conviviale »
    author:
      title: Google
      text: Blog Google Search Central, 2021
      url: https://developers.google.com/search/blog/2020/11/timing-for-page-experience?hl=fr
    background: true
  - type: datas
    heading:
      title: Analyse de l’ancien site
      text: Grâce à Google Lighthouse qui est un outil open source permettant de
        mesurer la qualité des pages Web. Voici, ci-dessous, le test de la page
        d’accueil sur mobile.
    column: 4
    show_color: true
    show_gauge: true
    items:
      - title: Performance
        value: 65
        suffix: "%"
        limit: 100
      - title: Accessibilité
        value: 81
        suffix: "%"
        limit: 100
      - title: Meilleures pratiques
        value: 96
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
      title: Pourquoi améliorer ces critères ?
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
      - title: Pour votre empreinte carbone
        icon: globe-europe-africa
        text:
          En ayant un site Web non énergivore vous réduirez considérablement votre
          impact environnemental.

  - type: datas
    heading:
      title: Analyse du nouveau site
      text: Grâce à Hugolify, tous les voyants sont au vert !
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
  - type: images
    heading:
      title: Un design réalisé par le studio Bonhomme
      text: Le studio nous a fait confiance pour gérer l’entièreté du développement et intégration.
    background: true
    images:
      - src: /images/uploads/biver-home.png
        legend: Nouveau site
        half: true
        screenshot: true
  - type: quote
    background: true
    quote: « Un design modulaire et atomique permet de tirer le meilleur d’Hugolify. »
    author:
      title: Sébastien Moulène
      text: Un Cinq
      image:
        src: /images/uploads/sebastien-moulene.jpg
  - type: title
    heading:
      title: Comparaison technique du front
      text:
        Passage d’un site one-page à un site complet composé d’un catague produit et d’actualités, voici la
        comparaison chiffrée des deux sites grâce aux données de Google Lighthouse.
  - type: chart
    heading:
      text: À chaque visite de la page d’accueil sur mobile.
    chart:
      type: bar
      data:
        lang: JSON
        json: |-
          {
            labels: [
              'JS chargé (en Ko)',
              'CSS chargé (en Ko)',
              'Fichiers JS chargés',
              'Fichiers CSS chargés'
            ],
            datasets: [{
              label: 'Wordpress',
              data: [149, 8, 2, 1],
              fill: true,
              backgroundColor: '#0675c4'
            }, {
              label: 'Hugolify',
              data: [23.6, 24.2, 1, 1],
              fill: true,
              backgroundColor: '#A90940'
            }]
          };
    grid: medium

  - type: images
    heading:
      title: Comparaison des espaces d’administration
      text: >-
        D’un côté un admin compliqué et parasité par des fonctionnalités
        inutiles au site web. 


        De l’autre coté un admin dédié et simplifié pour Biver.
    background: true
    images:
      - src: /images/uploads/wordpress-admin.png
        legend: Exemple admin Wordpress
        half: true
        screenshot: true
      - src: /images/uploads/biver-admin-hugolify.png
        legend: Admin Hugolify dédié à Biver
        half: true
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

  - type: informations
    column: 5
    background: false
    heading:
      title: Stack technique
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

  - type: quote
    background: true
    quote: « Cette migration permet d'avoir une site robuste, rapide, accessible à tous et évolutif rapidement. Tout en étant pérenne et low-code »
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
