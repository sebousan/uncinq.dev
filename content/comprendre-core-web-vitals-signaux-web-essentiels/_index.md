---
isPage: true
draft: false
title: Comprendre les Core Web Vitals (Signaux Web essentiels) de Google
description: Les métriques de performance Web annoncées pour la première fois en mai 2020.
image:
  src: /images/uploads/299.Algorithm.svg
seo:
  image: /images/uploads/share-core-web-vitals.png
hero:
  title: Comprendre les Core Web Vitals de Google
  text: Les métriques de performance Web annoncées pour la première fois en mai 2020.
  image:
    src: /images/uploads/299.Algorithm.svg
blocks:
  - type: informations
    heading:
      title: Les métriques essentielles
      text: Les Core Web Vitals (les signaux Web essentiels en français) sont un ensemble de métriques de performance Web essentielles définies par Google pour évaluer l’expérience utilisateur sur un site Web. Ces métriques se concentrent sur la vitesse de chargement, l’interactivité et la stabilité visuelle d’une page Web.
    items:
      - title: Largest Contentful Paint (LCP)
        text: Mesure le temps nécessaire pour que le plus grand élément visible de la page (généralement une image ou un bloc de texte) soit complètement chargé. Google recommande que LCP se produise en moins de 2,5s.
        image:
          src: /images/uploads/lcp.png
          isLogo: true
      - title: Interaction to Next Paint (INP)
        text: Mesure le temps écoulé entre l’interaction d’un utilisateur sur un site Web (comme un clic sur un bouton) et le moment où la page affiche la prochaine mise à jour significative à l’écran. Un INP rapide garantit une interactivité réactive et une expérience utilisateur fluide. Il remplace en 2024 le FID (First Input Delay).
        image:
          src: /images/uploads/inp.png
          isLogo: true
      - title: Cumulative Layout Shift (CLS)
        text: Mesure la stabilité visuelle de la page en évaluant le décalage inattendu du contenu lorsque la page se charge. Une CLS inférieure à 0,1 est considérée comme satisfaisante.
        image:
          src: /images/uploads/cls.png
          isLogo: true

  - type: quote
    quote: « Avec l’introduction récente de l’INP, il devient plus difficile d’avoir un score élevé. L’indicateur n’analyse pas seulement au chargement initial mais pendant toute la durée de navigation ce qui rend l’impact des scripts tiers beaucoup plus important. »
    author:
      title: Sébastien Moulène
      text: Un Cinq
      image:
        src: /images/uploads/sebastien-moulene.jpg

  - type: informations
    column: 4
    heading:
      title: Les autres indicateurs
    items:
      - title: First Contentful Paint (FCP)
        text: Il mesure le moment où le premier élément visuel du contenu (comme du texte ou une image) apparaît à l’écran lors du chargement d’une page Web. Il indique à l’utilisateur que la page se charge et devient visible. Un FCP rapide améliore l’impression de rapidité et d’interactivité du site. Google recommande un FCP de moins de 1,2s pour une expérience utilisateur optimale.
      - title: Time to First Byte (TTFB)
        text: Représente le temps entre la demande d’un utilisateur et la première réponse du serveur. Un TTFB rapide est essentiel pour des chargements de page rapides et une meilleure expérience utilisateur. C’est un indicateur clé de la performance web.
      - title: Total Blocking Time (TBT)
        text: Le Total Blocking Time mesure le temps total pendant lequel la page est bloquée, c’est-à-dire le temps pendant lequel l’utilisateur ne peut pas interagir. Le TBT est essentiel pour évaluer l’interactivité de la page. Un TBT inférieur à 300ms est considéré comme bon.
      - title: Speed Index
        text: Le Speed Index mesure à quelle vitesse le contenu principal d'une page devient visible. Il prend en compte la progression de l’affichage au fil du temps et évalue la rapidité avec laquelle l’utilisateur peut voir et interagir avec le contenu. Un Speed Index bas signifie que le contenu se charge rapidement, ce qui améliore l’expérience utilisateur.

  - type: paragraph
    offset: center
    align: center
    grid: medium

    title: Pourquoi ces métriques sont-elles importantes ?
    text: >-
      Elles visent à garantir que les visiteurs bénéficient d'une expérience fluide, rapide et prévisible lors de la navigation sur un site. Google utilise ces métriques pour classer les pages dans ses résultats de recherche, donnant la priorité aux pages offrant une meilleure expérience utilisateur en termes de performance.
    background: true
  - type: informations
    background: true
    column: 4
    items:
      - title: Meilleure expérience utilisateur
        icon: person-hearts
      - title: Classement Google élevé
        icon: search-heart
      - title: Améliorer le taux de conversion
        icon: graph-up-arrow
      - title: Réduire le taux de rebond
        icon: graph-down-arrow
  - type: quote
    quote: « Google utilise les Core Web Vitals comme facteurs de classement dans son algorithme de recherche. »
    author:
      title: Sébastien Moulène
      text: Un Cinq
      image:
        src: /images/uploads/sebastien-moulene.jpg
    background: true
  - type: informations
    heading:
      title: Comment mesurer les Core Web Vitals ?
      text: Grâce aux outils mis en place par Google.
    column: 4
    items:
      - title: PageSpeed Insights
        text: L’outil de test de performance proposé par Google
        image:
          src: /images/uploads/logo-google-pagespeed-insights.svg
          isLogo: true
        cta:
          text: Tester PageSpeed
          blank: true
          url: https://pagespeed.web.dev/
      - title: Lighthouse
        text: Outil automatisé open-source permettant de mesurer la qualité des pages Web
        image:
          src: /images/uploads/logo-google-lighthouse.svg
          isLogo: true
        cta:
          text: Github de Lighthouse
          blank: true
          url: https://github.com/GoogleChrome/lighthouse
      - title: Web Vitals
        text: Extension Google Chrome
        image:
          src: /images/uploads/logo-webvitals.png
          isLogo: true
        cta:
          text: Télécharger l’extension Chrome
          blank: true
          url: https://chromewebstore.google.com/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma
  - type: quote
    quote: « Il est important de surveiller régulièrement les Core Web Vitals et de les optimiser pour garantir que votre site Web offre une expérience utilisateur de qualité et conserve ou améliore son classement dans les résultats de recherche de Google. »
    author:
      title: Sébastien Moulène
      text: Un Cinq
      image:
        src: /images/uploads/sebastien-moulene.jpg
  - type: cta
    background: true
    heading:
      title: Optimisez votre site Web dès aujourd’hui
      text: Nous auditons et appliquons les optimisations.
    cta:
      text: Contactez-nous
      url: /contact/
---
