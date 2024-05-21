---
isIndex: false
draft: false
date: 2023-06-01T08:34:08.410Z
title: Venn Capital
description: Migration d’un site Wordpress vers Hugolify
seo:
  image: /images/uploads/venn-capital-share.png
image:
  src: /images/uploads/venn-capital-logo.svg
hero:
  surtitle: Étude de cas
  title: Venn Capital, migration d’un site Wordpress vers Hugolify
  image:
    src: /images/uploads/venn-capital-logo.svg
casestudies_services: hugolify
blocks:
  - type: paragraph
    title: Quelques mots sur la société
    text:
      Venn Capital a été fondée en 2019 afin de développer des stratégies actions
      innovantes, uniques en Europe à la croisée des mondes entre gestion active
      et gestion passive.
    grid: medium
    align: center
    offset: center
  - type: informations
    heading:
      title: État des lieux
      text:
        La précédente version du site a été créée grâce au système de gestion de
        contenu Wordpress avec un thème acheté sur la marketplace. Ce logiciel
        écrit en PHP repose sur une base de données MySQL. Cela implique un
        hébergement sur serveur Apache et une maintenance quotidienne du
        système, de Wordpress, du thème et de ses plugins. \

        Aucun contenu ne sera gardé.
    column: 4
    items:
      - title: Sécurité
        icon: shield-slash
        text:
          Sans mise à jour de ces solutions, le site Web s’expose grandement aux
          piratages.
      - title: Performance
        icon: exclamation-diamond
        text:
          Lenteur importante d’affichage du site Web dû au poids considérable des
          pages.
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
      image:
        src: /images/uploads/logo-google.svg
      title: Google
      text: Blog Google Search Central, 2021
      url: https://developers.google.com/search/blog/2020/11/timing-for-page-experience?hl=fr
    background: true
  - type: datas
    heading:
      title: Analyse de l’ancien site
      text: Grâce à Google Lighthouse qui est un outil open-source permettant de
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
    heading:
      title: Et son impact environnemental ?
      text:
        En se basant sur une année pour 10 000 pages vues par mois (provenant de
        website carbon calculator).
    column: 4
    show_color: false
    show_gauge: false
    items:
      - title: CO2
        text: autant que l’eau bouillante pour 15 370 tasses de thé
        value: 113.43
        suffix: kg
        limit: 100
      - title: Énergie
        text: soit l’équivalent de 1894km en voiture électrique
        value: 296
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
        text:
          Un site Web plus rapide, c'est une meilleure performance business. Cela a
          aussi de nombreux autres impacts positifs.
      - title: Pour votre empreinte carbone
        icon: globe-europe-africa
        text:
          En ayant un site Web non énergivore vous réduirez considérablement votre
          impact environnemental.
  - type: quote
    background: true
    quote: « La lenteur de notre ancien site ne nous permettait pas d’assurer un
      message clair en ligne auprès de nos clients »
    author:
      title: Pierrick Corbel
      text: Venn Capital
      image:
        src: /images/uploads/pierrick-corbel.png
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
      - title: Accessibilité *
        value: 98
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
  - type: paragraph
    grid: medium
    offset: center
    align: center
    text: "* Le 100% n’est pas atteint à cause de la couleur orange du texte qui
      n’est pas assez contrastée. Mais nous avons amélioré nettement d’autres
      aspects qui sont non quantifiables via une analyse automatique (comme la
      sémantique HTML, l’ajout d’attribut aria, le respect du RGAA…)."
  - type: datas
    heading:
      title: Et son impact environnemental
      text: Même critère de test que pour l’ancien site
    column: 4
    show_color: false
    show_gauge: false
    items:
      - title: CO2
        text: autant que l’eau bouillante pour 1383 tasses de thé
        limit: 100
        value: 10.21
        suffix: kg
      - title: Énergie
        text: soit l’équivalent de 171km en voiture électrique
        limit: 100
        value: 27
        suffix: kWh
  - type: images
    heading:
      title: Comparaison des deux sites
      text: >-
        Suite à la migration, une refonte graphique de la
        marque et du design du site a été opérée. \

        Et ceux grâce au travail soigné de [Solène Le
        Nail](https://www.behance.net/solenenouailhetas), directrice artistique.
    background: true
    images:
      - src: /images/uploads/venn-capital-screenshot-home-wp.png
        legend: Ancien site
        half: true
      - src: /images/uploads/venn-capital-screenshot-home-hugolify.png
        legend: Nouveau site
        half: true
  - type: title
    heading:
      title: Comparaison technique du front
      text:
        Pour sensiblement les mêmes besoins mais un design plus élaboré, voici la
        comparaison chiffrée des deux sites grâce aux données de Google
        Lighthouse et Website carbon calculator.
  - type: chart
    heading:
      text: Octets téléchargés (en Ko), à chaque visite de la page d’accueil sur
        mobile.
    chart:
      type: bar
      data:
        lang: JSON
        json: |-
          {
            labels: [
              'JS chargé',
              'CSS chargé',
              'Transférés à l’arrivée',
              'Transférés au total'
            ],
            datasets: [{
              label: 'Wordpress',
              data: [130, 94.5, 4300, 4400],
              fill: true,
              backgroundColor: '#0675c4'
            }, {
              label: 'Hugolify',
              data: [31.1, 20.6, 149, 384],
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
              'Requêtes à l’arrivée',
              'Requêtes au total'
            ],
            datasets: [{
              label: 'Wordpress',
              data: [13, 12, 20, 71],
              backgroundColor: '#0675c4'
            }, {
              label: 'Hugolify',
              data: [2, 1, 11, 20],
              backgroundColor: '#a90940'
            }]
          };
    grid: medium
  - type: chart
    heading:
      title: Onze fois moins énergivore
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
              data: [113.43,296],
              backgroundColor: '#0675c4'
            }, {
              label: 'Hugolify',
              data: [10.21,27],
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
              data: [6.80,1.40],
              backgroundColor: '#0675c4'
            }, {
              label: 'Hugolify',
              data: [2.00,0.70],
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


        De l’autre coté un admin dédié et simplifié pour Venn Capital.
    background: true
    images:
      - src: /images/uploads/venn-capital-screenshot-admin-wp.png
        legend: Admin Wordpress de l’ancien site
        half: true
      - src: /images/uploads/venn-capital-screenshot-admin-hugolify.png
        legend: Admin Hugolify dédié à Venn Capital
        half: true
  - type: quote
    quote: « Un Cinq en nous proposant sa solution Hugolify, nous a permis de
      simplifier la mise à jour du contenu de notre site Internet grâce à son
      espace admin dédié »
    background: true
    author:
      title: Dimitri Boismare
      text: Venn Capital
      image:
        src: /images/uploads/dimitri-boismare.png
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
        text:
          7 modules Hugolify ont été utilisés pour concevoir l’architecture de site
          Web.
        icon: git
      - title: Blocs Hugolify
        text: 1 bloc créé pour le site Web et 8 blocs Hugolify utilisés.
        icon: puzzle-fill
      - title: HTML
        text: Un cinquantaine de mini partials ont été overridés.
        icon: code-slash
      - title: SASS
        text: Un cinquantaine de micro fichiers SASS ont été overridés ou mergé.
        icon: filetype-sass
  - type: cta
    heading:
      text: Le code est en libre accès, vous pouvez le consulter sur Github.
    cta:
      url: https://github.com/sebousan/venn-capital
      text: Accès au repository
      blank: true
  - type: quote
    background: true
    quote:
      « Un cas d’étude qui nous permet de constater qu’avec Hugolify on a un
      site **trois fois plus rapide** et jusqu’à **onze fois moins énergivore**
      qu’un Wordpress avec un thème standard. »
    author:
      title: Sébastien Moulène
      text: Un Cinq
      image:
        src: /images/uploads/sebastien-moulene.jpg
  - type: cta
    heading:
      title: Bonne visite !
    cta:
      text: Découvrez le nouveau site Web de Venn Capital
      url: https://www.venn-capital.com/
      blank: true
---
