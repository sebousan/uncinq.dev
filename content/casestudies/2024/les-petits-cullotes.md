---
isIndex: false
draft: true
date: 2024-09-13T08:34:08.410Z
title: Les Petits Culottés
slug: lpc-audit-performant-prestashop
description: Audit de performance d’un site Prestashop.
image:
  src: /images/uploads/lpc-logo.svg
hero:
  surtitle: Étude de cas
  title: Les Petits Culottés, audit de performance d’un site Prestashop
  image:
    src: /images/uploads/lpc-logo.svg
blocks:
  - type: figure
    heading:
      title: Quelques mots sur la société
      text: …
    grid: medium
    align: center
    offset: center

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
        value: 37
        suffix: "%"
        limit: 100
      - title: Accessibilité
        value: 82
        suffix: "%"
        limit: 100
      - title: Meilleures pratiques
        value: 79
        suffix: "%"
        limit: 100
      - title: Référencement (SE0)
        value: 100
        suffix: "%"
        limit: 100

  - type: datas
    heading:
      title: Analyse du site après notre intervention
      text: Grâce à Google Lighthouse qui est un outil open-source permettant de mesurer la qualité des pages Web. Voici, ci-dessous, {{<  blank_link text=`le résultat sur Google PageSpeed` link=`https://pagespeed.web.dev/analysis/https-les-petits-culottes-perf-23prod-dev-fr/u1scdmongm?form_factor=mobile` >}} du test des Core Web Vitals de la page d’accueil sur mobile.
    column: 4
    show_color: true
    show_gauge: true
    items:
      - title: Performance
        value: 80
        limit: 100
        suffix: "%"
      - title: Accessibilité
        value: 100
        limit: 100
        suffix: "%"
      - title: Meilleures pratiques
        value: 100
        limit: 100
        suffix: "%"
      - title: Référencement (SE0)
        value: 100
        limit: 100
        suffix: "%"
    background: true

  - type: cta
    heading:
      title: Bonne visite !
    cta:
      text: Découvrez le nouveau site Web des Petits Culottés
      url: https://www.lespetitsculottes.com/fr/
      blank: true
---
