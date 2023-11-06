---
isIndex: false
draft: false
date: 2023-09-18T08:34:08.410Z
title: Miriam Lasserre
description: Migration d’un site Wordpress vers Hugolify
seo:
  image: /images/uploads/miriamlasserre-share.png
image:
  src: /images/uploads/miriamlasserre-logo.svg
hero:
  surtitle: Étude de cas
  title: Miriam Lasserre, migration d’un site Wordpress vers Hugolify
  image:
    src: /images/uploads/miriamlasserre-logo.svg
casestudies_services: hugolify
blocks:
  - type: paragraph
    title: Quelques mots sur Miram
    text: >-
      Miriam est une Styliste et Personal Shopper basée à Saint Germain-des-Prés, Paris. \

      Elle a créé son site en 2016 et a voulu le faire évoluer tout en gardant le design de celui-ci.
    grid: medium
    align: center
    offset: center
  - type: informations
    heading:
      title: État des lieux
      text: La précédente version du site a été créée grâce au système de gestion de contenu Wordpress avec un thème acheté sur la marketplace. Ce logiciel écrit en PHP repose sur une base de données MySQL. Cela implique un hébergement sur serveur Apache et une maintenance quotidienne du système, de Wordpress, du thème et de ses plugins.
    column: 4
    items:
      - title: Sécurité
        icon: shield-slash
        text: Sans mise à jour de ces solutions, le site Web s’expose grandement aux
          piratages.
      - title: Performance
        icon: exclamation-diamond
        text: Pas d’optimisation des images, du javascript et du CSS.
      - title: Chronophage
        icon: hourglass
        text: Maintenance quotidienne du système, de Wordpress, du thème et de ses
          plugins.
      - title: Espace admin
        icon: kanban
        text: Non personnalisé et parasité par de nombreuses options inutiles.
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
        value: 76
        suffix: "%"
        limit: 100
      - title: Accessibilité
        value: 69
        suffix: "%"
        limit: 100
      - title: Meilleures pratiques
        value: 83
        suffix: "%"
        limit: 100
      - title: Référencement (SE0)
        value: 92
        suffix: "%"
        limit: 100
  - type: datas
    heading:
      title: Et son impact environnemental ?
      text: En se basant sur une année pour 10 000 pages vues par mois (provenant de
        website carbon calculator).
    column: 4
    show_color: false
    show_gauge: false
    items:
      - title: CO2
        text: autant que l’eau bouillante pour 2 084 tasses de thé
        value: 15.38
        suffix: kg
        limit: 100
      - title: Énergie
        text: soit l’équivalent de 257km en voiture électrique
        value: 40
        suffix: kWh
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
        text: Un site Web plus rapide, c'est une meilleure performance business. Cela a
          aussi de nombreux autres impacts positifs.
      - title: Pour votre empreinte carbone
        icon: globe-europe-africa
        text: En ayant un site Web non énergivore vous réduirez considérablement votre
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
        value: 100
        suffix: "%"
        limit: 100
      - title: Accessibilité *
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
  - type: paragraph
    grid: medium
    offset: center
    align: center
    text: "*Accessibilité : nous avons amélioré nettement d’autres
      aspects qui sont non quantifiables via une analyse automatique (comme la sémantique HTML, l’ajout d’attribut aria, le respect du RGAA…)."
  - type: datas
    heading:
      title: Et son impact environnemental
      text: Même critère de test que pour l’ancien site
    column: 4
    show_color: false
    show_gauge: false
    items:
      - title: CO2
        text: autant que l’eau bouillante pour 1 081 tasses de thé
        value: 7.97
        suffix: kg
        limit: 100
      - title: Énergie
        text: soit l’équivalent de 133km en voiture électrique
        value: 21
        suffix: kWh
        limit: 100
  - type: title
    heading:
      title: Comparaison technique du front
      text: Pour sensiblement les mêmes besoins mais un design plus élaboré, voici la
        comparaison chiffrée des deux sites grâce aux données de Google
        Lighthouse et Website carbon calculator.
  - type: chart
    heading:
      text: Octets téléchargés (en Ko), à chaque visite de la page d’accueil sur desktop.
    chart:
      type: bar
      data:
        lang: JSON
        json: |-
          {
            labels: [
              'JS chargé',
              'CSS chargé',
              'Transférés au total'
            ],
            datasets: [{
              label: 'Wordpress',
              data: [81, 23, 549],
              fill: true,
              backgroundColor: '#0675c4'
            }, {
              label: 'Hugolify',
              data: [23, 14.7, 335],
              fill: true,
              backgroundColor: '#A90940'
            }]
          };
    grid: medium
  - type: chart
    heading:
      text: Nombre de fichiers et de requêtes, à chaque visite.
    chart:
      type: bar
      data:
        lang: JSON
        json: |-
          {
            labels: [
              'Fichiers JS chargés',
              'Fichiers CSS chargés',
              'Requêtes au total’
            ],
            datasets: [{
              label: 'Wordpress',
              data: [8, 5, 24],
              backgroundColor: '#0675c4'
            }, {
              label: 'Hugolify',
              data: [1, 1, 13],
              backgroundColor: '#a90940'
            }]
          };
    grid: medium
  - type: chart
    heading:
      title: Deux fois moins énergivore
      text: Empreinte carbone (sur 1 an, avec 10 000 pages vues par mois).
    chart:
      type: bar
      data:
        lang: JSON
        json: |-
          {
            labels: [
              'CO2',
              'Kwh'
            ],
            datasets: [{
              label: 'Wordpress',
              data: [15.38,40],
              backgroundColor: '#0675c4'
            }, {
              label: 'Hugolify',
              data: [7.97,21],
              backgroundColor: '#A90940'
            }]
          };
    grid: small
  - type: chart
    heading:
      title: Trois fois plus rapide
      text: Vitesse de chargement en seconde.
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
              data: [4.30,1.00],
              backgroundColor: '#0675c4'
            }, {
              label: 'Hugolify',
              data: [1.50,0.50],
              backgroundColor: '#A90940'
            }]
          };
    grid: small
  - type: images
    heading:
      title: Comparaison des espaces d’administration
      text: >-
        D’un côté un admin compliqué et parasité par des fonctionnalités
        inutiles au site web. 


        De l’autre coté un admin dédié et simplifié pour Miriam Lasserre.
    background: true
    images:
      - src: /images/uploads/miriamlasserre-screenshot-admin-wp.png
        legend: Admin Wordpress de l’ancien site
        half: true
      - src: /images/uploads/miriamlasserre-screenshot-admin-hugolify.png
        legend: Admin Hugolify dédié à Miriam Lasserre
        half: true
  - type: quote
    quote: « Un espace admin simplifié, une maintenance du site Web tout autant, voilà ce qui m’a encouragée à choisir cette solution »
    background: true
    author:
      title: Miriam Lasserre
      image:
        src: /images/uploads/miriam-lasserre.jpg
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
        text: 4 modules Hugolify ont été utilisés pour concevoir l’architecture de site Web.
        icon: git
      - title: Blocs Hugolify
        text: 1 bloc créé pour le site Web et 2 blocs Hugolify utilisés.
        icon: puzzle-fill
      - title: HTML
        text: Une dizaine de mini partials ont été overridés et une vingtaine créés.
        icon: code-slash
      - title: SASS
        text: Un vingtaine de micro fichiers SASS ont été overridés, mergés ou créés.
        icon: filetype-sass
  - type: cta
    heading:
      text: Le code est en libre accès, vous pouvez le consulter sur Github.
    cta:
      url: https://github.com/sebousan/miriamlasserre
      text: Accès au repository
      blank: true
  - type: quote
    background: true
    quote: « Même avec un thème Wordpress dédié nous arrivons à avoir un site Web **deux fois plus rapide** et jusqu’à **deux fois moins énergivore**. »
    author:
      title: Sébastien Moulène
      text: Un Cinq
      image:
        src: /images/uploads/sebastien-moulene.jpg
  - type: cta
    heading:
      title: Bonne visite !
    cta:
      text: Découvrez le site Web de Miriam Lasserre
      url: https://www.miriamlasserre.com/
      blank: true
---
