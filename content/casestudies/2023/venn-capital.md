---
isIndex: false
draft: true
date: 2023-05-10T08:34:08.410Z
title: Venn Capital
description: Migration d’un site Wordpress vers Hugolify
image:
  src: /images/uploads/venn-capital-logo.svg
hero:
  surtitle: Étude de cas
  title: "Venn Capital, Migration d’un site Wordpress vers Hugolify"
  image:
    src: /images/uploads/venn-capital-logo.svg
blocks:
  - type: paragraph
    title: Quelques mots sur la société
    text: >-
      Venn a été fondée en 2019 afin de développer des stratégies actions innovantes, uniques en Europe à la croisée des mondes entre gestion active et gestion passive.
    grid: medium
    align: center
    offset: center
  - align: start
    grid: small
    text: >-
      La précédente version du site a été créé grâce au système de gestion de
      contenu Wordpress. Ce logiciel écrit en PHP repose sur une base de données
      MySQL. Cela implique un hébergement sur serveur Apache et une maintenance
      quotidienne du système, de wordpress et de ses plugins.


      Sans mise à jour de ces solutions, vous vous exposez grandement au piratage de votre site web.
    background: false
    offset: start
    title: État des lieux
    type: editorial
    image:
      src: /images/uploads/logo-wordpress.png
    direction: rtl
  - type: quote
    quote: « La maintenance chronophage de notre ancienne solution ne nous permettait pas de garantir notre site en ligne sur le long terme »
    author:
      title: Pierrick Corbel
      text: Venn Capital
      image:
        src: /images/uploads/pierrick-corbel.png
  - type: datas
    title: Analyse de l’ancien site du cabinet
    text: Grâce à Google Lighthouse qui est un outil open source permettant de mesurer la qualité des pages Web. Voici, ci-dessous, le test de la page d’accueil sur mobile.
    column: 4
    show_color: true
    show_gauge: true
    items:
      - title: Performance
        value: 65
        suffix: "%"
        limit: 100
      - title: Accessibilité
        value: 74
        suffix: "%"
        limit: 100
      - title: Meilleures pratiques
        value: 100
        suffix: "%"
        limit: 100
      - title: Référencement (SE0)
        value: 92
        suffix: "%"
        limit: 100
  - type: datas
    title: Et son impact environnemental ?
    text: En se basant sur une année pour 10000 pages vues par mois (provenant de website carbon calculator)
    column: 4
    show_color: false
    show_gauge: false
    items:
      - title: CO2
        text: autant que l'eau bouillante pour 15370 tasses de thé
        value: 113.43
        suffix: "kg"
        limit: 100
      - title: Énergie
        text: soit l’équivalent de 1894km en voiture électrique
        value: 296
        suffix: "kWh"
        limit: 100
  - type: informations
    column: 3
    background: false
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
          impact environnemental.
  - type: datas
    title: Analyse du nouveau site du cabinet
    text: Grâce à Lawyerify, tous les voyants sont au vert !
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
  - type: datas
    title: Et son impact environnemental 
    text: Même critère de test que pour l'ancien site
    column: 4
    show_color: false
    show_gauge: false
    items:
      - title: CO2
        text: autant que l'eau bouillante pour 1806 tasses de thé
        limit: 100
        suffix: "kg"
        value: 13.33
      - title: Énergie
        text: soit l’équivalent de 223km en voiture électrique
        value: 35
        suffix: "kWh"
        limit: 100
  - type: quote
    quote: « Un Cinq en nous proposant sa solution Hugolify, nous a permis de simplifier et de rendre plus agréable la mise à jour du contenu de notre site Internet »
    author:
      title: Dimitri Boismare
      text: Venn Capital
      image:
        src: /images/uploads/dimitri-boismare.png
  - type: images
    title: Comparaison des espaces d’administration
    text: D’un côté un admin compliqué et parasité par des fonctionnalités inutiles
      au site web. De l’autre coté un admin dédié et simplifié pour Venn Capital.
    background: false
    images:
      - src: /images/uploads/venn-capital-screenshot-admin-wp.png
        legend: Admin Wordpress de l’ancien site
        half: true
      - src: /images/uploads/venn-capital-screenshot-admin-hugolify.png
        legend: Admin Hugolify dédié à Venn Capital
        half: true
  - type: title
    title: Comparaison des deux sites
    text: Pour sensiblement les mêmes besoins, voici la comparaison chiffrée des deux sites grâce aux données de Google Lighthouse et Website carbon calculator
  - type: chart
    text: Octets téléchargés (en Ko), à chaque visite.
    chart:
      type: bar
      data:
        lang: JSON
        json: |-
          {
            labels: [
              'JS chargé',
              'CSS chargé',
              'transférés à l’arrivée',
              'transférés au total'
            ],
            datasets: [{
              label: 'Wordpress',
              data: [130, 94.5, 4300, 4400],
              fill: true,
              backgroundColor: '#0675c4'
            }, {
              label: 'Hugolify',
              data: [31.1, 40.9, 268, 525],
              fill: true,
              backgroundColor: '#A90940'
            }]
          };
    grid: medium
  - type: chart
    text: Nombre de fichiers et de requêtes, à chaque visite.
    chart:
      type: bar
      data:
        lang: JSON
        json: |-
          {
            labels: [
              'fichiers JS chargés',
              'fichiers CSS chargés',
              'requêtes à l’arrivée',
              'requêtes au total'
            ],
            datasets: [{
              label: 'Wordpress',
              data: [13, 12, 35, 38],
              backgroundColor: '#0675c4'
            }, {
              label: 'Hugolify',
              data: [2, 1, 11, 22],
              backgroundColor: '#a90940'
            }]
          };
    grid: medium
  - type: chart
    text: Vitesse de chargement sur mobile (en seconde)
    chart:
      type: bar
      data:
        lang: JSON
        json: |-
          {
            labels: [
              'Temps de chargement',
              'Temps de chargement total'
            ],
            datasets: [{
              label: 'Wordpress',
              data: [2.11,7.90],
              backgroundColor: '#0675c4'
            }, {
              label: 'Hugolify',
              data: [1.41,2.30],
              backgroundColor: '#A90940'
            }]
          };
    grid: small
  - type: chart
    text: Empreinte carbone (sur 1 an, avec 10000 pages vues par mois)
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
              data: [113.43,296],
              backgroundColor: '#0675c4'
            }, {
              label: 'Hugolify',
              data: [13.33,35],
              backgroundColor: '#A90940'
            }]
          };
    grid: small
  # - type: images
  #   title: Comparaison des sites
  #   text: Nous avons profité de la migration pour faire un refonte graphique de la marque et du design du site.
  #   background: false
  #   images:
  #     - src: /images/uploads/venn-capital-screenshot-home-wp.png
  #       legend: Ancien site
  #       half: true
  #     - src: /images/uploads/venn-capital-screenshot-home-hugolify.png
  #       legend: Nouveau site
  #       half: true
  - type: quote
    quote: « Un cas d’étude qui nous permet de constater qu’avec Hugolify on a un site trois fois plus rapide et huit à neuf fois moins énergivore qu’un site “no code”. »
    author:
      title: Sébastien Moulène
      text: Un Cinq
      image:
        src: /images/uploads/sebastien-moulene.jpg
  - type: cta
    title: Bonne visite !
    cta:
      text: Découvrez le nouveau site web de Venn Capital
      url: https://www.venn-capital.com/
      blank: true
---
