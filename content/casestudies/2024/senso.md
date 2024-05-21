---
isIndex: false
draft: false
date: 2024-05-20T08:34:08.410Z
title: Senso
slug: senso-site-web-performant-symfony
description: Mise en place d’un site Web performant avec Symfony
seo:
  image: /images/uploads/senso-share.png
image:
  src: /images/uploads/senso-logo.svg
hero:
  surtitle: Étude de cas
  title: Senso, mise en place d’un site Web performant avec Symfony
  image:
    src: /images/uploads/senso-logo.svg
blocks:
  - type: figure
    heading:
      title: Quelques mots sur la société
      text: Senso regroupe une famille d'agences spécialisées en gestion de talents mettant en relation des talents avec des marques et des agences.
    grid: medium
    align: center
    offset: center
    figure:
      src: /images/uploads/senso-family.jpg
      legend: L’équipe de Senso
      credit: © Senso

  - type: informations
    column: 4
    background: true
    heading:
      title: Pourquoi concevoir un site Web performant ?
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
        text: Un site Web très bien conçu est l’assurance d’être bien traité par Google
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
    background: true

  - type: figure
    heading:
      title: Un design système pour un eco-système
      text: Senso a conçu le design sytème sur Figma. Header, Footer et autres composants sont identiques pour l'ensemble des sites Web de l’éco-système.
    background: false
    grid: medium
    align: center
    offset: center
    figure:
      src: /images/uploads/senso-website.png
      screenshot: true

  - type: informations
    heading:
      title: Une application Symfony pour 3 sites Web
      text: L’équipe de [23Prod](https://www.23prod.com/) a développé un back-end avec le framework PHP Symfony, le contenu est lui appelé via une API qui en fonction de l’environnement envoie les données adéquates.
    column: 3
    items:
      - title: Senso Art
        text: Agent d’illustrateurs
        cta:
          text: Site Web
          target: blank
          url: https://www.senso.art/
      - title: Senso Photo
        text: Agent de photographes
        cta:
          text: Site Web
          target: blank
          url: https://www.senso.photo/
      - title: Senso Films
        text: Agence de production de films d’animation
        cta:
          text: Site Web
          target: blank
          url: https://www.sensofilms.com/
  - type: informations
    column: 5
    background: false
    heading:
      title: Stack technique du projet
      text: Frameworks et hébergements.
    items:
      - title: Symfony
        image:
          src: /images/uploads/logo-symfony.svg
          isLogo: true
      - title: Bootstrap
        image:
          src: /images/uploads/logo-bootstrap-5.svg
          isLogo: true
      - title: Gitlab
        image:
          src: /images/uploads/logo-gitlab.svg
          isLogo: true
      - title: Cloudimage
        image:
          src: /images/uploads/logo-cloudimage.png
          isLogo: true

  - type: datas
    heading:
      title: Analyse du site conçu avec Symfony
      text: Grâce à Google Lighthouse qui est un outil open-source permettant de
        mesurer la qualité des pages Web. Voici, ci-dessous, [le résultat](https://pagespeed.web.dev/analysis/https-www-senso-art-fr/t2nnvfep4k?form_factor=mobile) du test des Core Web Vitals de la page d’accueil sur mobile.


        [Comprendre les Core Web Vitals](/comprendre-core-web-vitals-signaux-web-essentiels/)
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
  - type: datas
    background: true
    heading:
      title: Fichiers concaténés, minifiés et purgés
      text: Pour une performance optimale, le fichier CSS est appelé en priorité haute alors que les fichiers javascript sont eux en defer.
    column: 4
    show_color: false
    show_gauge: false
    items:
      - title: 1 seul CSS chargé
        value: 13.0
        suffix: Ko
        limit: 100
      - title: 2 fichiers JS chargés
        value: 25.2
        suffix: Ko
        limit: 100

  - type: quote
    background: true
    quote: « Une collaboration étroite avec 23Prod pour permettre d’atteindre le plus haut score des signaux Web essentiels »
    author:
      title: Sébastien Moulène
      text: Un Cinq
      image:
        src: /images/uploads/sebastien-moulene.jpg
  - type: cta
    heading:
      title: Bonne visite !
    cta:
      text: Découvrez le nouveau site Web de Senso Art
      url: https://www.senso.art/
      blank: true
---
