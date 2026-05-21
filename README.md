# Seimosbankas Blog

Astro blog'as. Deploy'ina į [blog.seimosbankas.lt](https://blog.seimosbankas.lt).

## Straipsnio rašymas

Kurkite `.md` failą `src/content/blog/` su frontmatter:

```markdown
---
title: "Pavadinimas"
description: "SEO aprašymas (max 160 simbolių)"
date: 2026-03-10
author: "Vardas"
category: "Biudžetas"
tags: ["finansai"]
featured: false
draft: true   ← false kai parengta
cta_text: "Valdyk finansus su Seimosbankas"
cta_url: "https://seimosbankas.lt"
---
Turinys...
```

## Publikavimas

```bash
git add . && git commit -m "straipsnis: pavadinimas" && git push
```

GitHub Actions automatiškai subuildo ir deploy'ina į `blog.seimosbankas.lt` (~2 min).

## Secrets (repo Settings → Secrets → Actions)

| Secret | Reikšmė |
|---|---|
| `VPS_HOST` | VPS IP |
| `VPS_USER` | SSH vartotojas |
| `VPS_SSH_KEY` | Privatus SSH raktas |

```bash
npm install && npm run dev
```
