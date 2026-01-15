---
isIndex: false
draft: false
date: 2024-05-20T08:34:08.410Z
title: Senso
slug: senso-site-web-performant-symfony
description: Mise en place d’un site Web performant avec Symfony.
seo:
  image: https://res.cloudinary.com/uncinq/image/upload/v1759148237/senso-share_zexz18.png
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1759147854/senso-logo_it60lm.svg
hero:
  surtitle: Étude de cas
  title: Senso, mise en place d’un site Web performant avec Symfony
  image:
    src: https://res.cloudinary.com/uncinq/image/upload/v1759147854/senso-logo_it60lm.svg
blocks:
  - type: figure
    heading:
      title: Quelques mots sur la société
      text: Senso regroupe une famille d’agences (Creasenso, Sensology, Senso Art…) spécialisées en gestion de talents issues de l’art visuel ou bien du digital, les mettant en relation avec des marques et des agences.
    grid: medium
    align: center
    offset: center
    figure:
      src: https://res.cloudinary.com/uncinq/image/upload/v1759148256/senso-family_dhratc.jpg
      legend: L’équipe de Senso
      credit: © Senso

  - type: informations
    column: 3
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
        text: Un site Web très bien conçu est l’assurance d’être mis en avant par Google.
  - type: quote
    quote: « Google intègre les Core Web Vitals* dans son algorithme et décide de mettre plus facilement en avant une page qui possède une expérience utilisateur conviviale. »
    author:
      image:
        src: https://res.cloudinary.com/uncinq/image/upload/v1759146561/logo-google_ychfbh.svg
      title: Google
      text: Blog Google Search Central, 2021
      url: https://developers.google.com/search/blog/2020/11/timing-for-page-experience?hl=fr
    background: true
  
  - type: editorial
    background: true
    surtitle: article
    title: >
      *Comprendre les Core Web Vitals de Google
    text: Les métriques de performance Web définies par Google et annoncées pour la première fois en mai 2020.
    image:
      src: https://res.cloudinary.com/uncinq/image/upload/v1758116853/299.Algorithm_uu3kn0.svg
    direction: rtl
    cta:
      text: Découvrir
      url: "/nos-articles/comprendre-les-core-web-vitals-signaux-web-essentiels-de-google/"

  - type: figure
    heading:
      title: Un design système pour un écosystème
      text:
        Senso a conçu ce design système pour factoriser et homogénéiser son identité.


        Le fait d’avoir un design global permet d’alléger plusieurs choses comme le temps de développement, les risques de bugs, le poids des assets (CSS, JS…). Par contre cela augmente le temps de conception UX/UI.


        Header, Footer et autres composants sont identiques à l’ensemble des sites Web de l’écosystème.
    background: false
    grid: medium
    align: center
    offset: center
    figure:
      src: https://res.cloudinary.com/uncinq/image/upload/v1759148250/senso-da-home_mjkmxk.png
      screenshot: true

  - type: informations
    heading:
      title: Une seule application Symfony pour 4 sites Web
      text: L’équipe de {{<  blank_link text=`23Prod` link=`https://www.23prod.com/` >}} a développé un back-end avec le framework PHP {{<  blank_link text=`Symfony` link=`https://symfony.com/` >}}, le contenu est lui appelé via une API qui en fonction de l’environnement envoie les données adéquates. À l’avenir d’autres sites Web peuvent voir le jour en ayant juste à ajouter des environnements.
    column: 4
    items:
      - title: Senso Art
        text: Agent d’illustrateurs
        cta:
          text: www.senso.art
          blank: true
          url: https://www.senso.art/
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759148232/senso-sensoart_er1v8n.png
          isLogo: true
      - title: Senso Photo
        text: Agent de photographes
        cta:
          text: www.senso.photo
          blank: true
          url: https://www.senso.photo/
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759148235/senso-sensophoto_prd2mn.png
          isLogo: true
      - title: Senso Films
        text: Agence de production de films d’animation
        cta:
          text: www.sensofilms.com
          blank: true
          url: https://www.sensofilms.com/
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759148239/senso-sensofilms_z2b577.png
          isLogo: true
      - title: Senso AI
        text: Agence de production IA
        cta:
          text: www.senso-ai.com
          blank: true
          url: https://senso-ai.com/
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759148230/senso-sensoai_hyb6bi.png
          isLogo: true

  - type: quote
    background: false
    quote: « Une collaboration étroite avec les développeurs back-end de 23Prod pour permettre d’atteindre le plus haut score des signaux Web essentiels »
    author:
      title: Sébastien Moulène
      text: Un Cinq
      image:
        src: https://res.cloudinary.com/uncinq/image/upload/v1758205367/sebastien-moulene_ft0yg7.jpg
  - type: informations
    column: 5
    background: false
    heading:
      title: Stack technique du projet
      text: Frameworks et hébergements.
    items:
      - title: Symfony
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759139799/logo-symfony_p1kkrp.svg
          isLogo: true
      - title: Bootstrap
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1758128591/logo-bootstrap-5_h3gtgt.svg
          isLogo: true
      - title: Gitlab
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759140347/logo-gitlab_yjezbh.svg
          isLogo: true
      - title: Cloudimage
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759140301/logo-cloudimage_lcuuly.svg
          isLogo: true
      - title: Kubernetes
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1759139797/logo-kubernetes_d2uhy2.svg
          isLogo: true

  - type: datas
    heading:
      title: Analyse du site conçu avec Symfony
      text: Grâce à Google Lighthouse qui est un outil open source permettant de
        mesurer la qualité des pages Web. Voici, ci-dessous, {{<  blank_link text=`le résultat sur Google PageSpeed` link=`https://pagespeed.web.dev/analysis/https-www-senso-art-fr/t2nnvfep4k?form_factor=mobile` >}} du test des Core Web Vitals de la page d’accueil sur mobile.
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

  - type: informations
    column: 4
    background: true
    heading:
      title: Comment atteindre au plus près ce score ?
      text: Voici quelques bonnes pratiques à adopter en matière de développement front et back pour permettre un affiche le plus rapide.
    items:
      - title: CSS, Fonts et JS hébergés sur le même serveur
        text: Pour éviter un second appel serveur, les assets sont sur le même serveur que le site.
        icon: files
      - title: Loading différé des éléments non critique
        text: Les javascripts et fonts sont loadés en defer, la CSS est elle loadée en premier.
        icon: clock-history
      - title: Images responsives et format WebP
        text: Utilisation des srcset pour rendre disponible une multitude de formats d’image.
        icon: images
      - title: Cache et compression adéquates
        icon: file-zip
        text: Compression GZIP du HTML, CSS et JS ainsi qu’un cache suffisament long des assets.

  - type: datas
    background: true
    heading:
      title: Fichiers front-end concaténés, minifiés et purgés
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
    background: false
    quote: « Atteindre un score de 100% sur les signaux Web essentiels nous semblait un défi difficile à atteindre étant donné notre activité basée sur l’image et la vidéo. Pourtant Un Cinq et 23Prod sont parvenus à proposer une expérience riche et fluide tout en optimisant la sobriété des ressources. Bravo ! »
    author:
      title: Cédric Borderie
      text: Fondateur, Senso
      image:
        src: https://res.cloudinary.com/uncinq/image/upload/v1759149510/senso-cedric-borderie.jpg

  - type: cta
    background: true
    heading:
      title: Bonne visite !
    ctas:
      - text: Découvrez le nouveau site Web de Senso Art
        url: https://www.senso.art/
        blank: true
---
