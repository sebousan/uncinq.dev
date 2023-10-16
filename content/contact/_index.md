---
isPage: true
title: Contact
description: Pour toutes informations ou intérogations concernant la solution.
hero:
  title: Contact
  text: Pour toutes informations ou intérogations concernant la solution.
  align: center
  cta:
    text: Par e-mail à contact@uncinq.dev
    url: mailto:contact@uncinq.dev
    blank: false
  cta_second:
    url: "tel:+33678858604"
    blank: false
    text: Par téléphone au 06 78 85 86 04
blocks:
  - type: embed
    heading:
      title: Ou prendre rendez-vous en ligne ?
    background: true
    embed: >-
      <!-- Cal inline embed code begins -->
      <div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline"></div>
      <script type="text/javascript">
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", {origin:"https://app.cal.com"});
      Cal("inline", {
        elementOrSelector:"#my-cal-inline",
        calLink: "sebousan/30min"
      });
      Cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#060c84"}}});
      </script>
      <!-- Cal inline embed code ends -->
  - type: informations
    background: false
    heading:
      title: Nous suivre sur les réseaux sociaux
    column: 4
    items:
      - title: Github
        icon: github
        cta:
          text: Nous suivre
          blank: true
          url: https://github.com/hugolify
      - title: Linkedin
        icon: linkedin
        cta:
          text: Nous suivre
          blank: true
          url: https://www.linkedin.com/company/un-cinq
      - title: Twitter
        icon: twitter
        cta:
          text: Nous suivre
          blank: true
          url: https://twitter.com/uncinq
---
