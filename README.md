# QCM CAC Tir sportif

Site de révision pour le certificat de compétences **Capacité à accueillir et conseiller (CAC)** de la Fédération Française de Tir.

Site : https://cac-npc.github.io/qcm-cac-npc/

## Questionnaires

Les modules suivent les blocs de compétences (BC) du règlement CAC applicable au 1er septembre 2026.

| Module | Contenu | Source |
|---|---|---|
| BC1 – Sécurité | Règles de sécurité, pas de tir, commandements, incidents, armes, munitions, plomb | Manuel de tir sportif (03/2026) |
| BC2 – Accueillir | Accueil des publics, tir et santé, encadrement, Cibles Couleurs, valeurs | Manuel de tir sportif (03/2026) |
| BC3 – Faire découvrir | Les 12 disciplines, position, visée, lâcher, séquence de tir | Manuel de tir sportif (03/2026) |
| BC4 – S'intégrer au club | Licence, clubs, organisation fédérale ; responsabilités, assurance, armes B et C, transport, FINIADA | Manuel de tir sportif (03/2026) ; Legifrance, service-public.gouv.fr, fftir.org (oct. 2026) |
| Règlement de la formation | Accès, déroulement, validation, commissions, formation continue | Règlement CAC (09/2026) |

Chaque question indique sa source (document et page ou paragraphe).

## Fonctionnement

- **Examen blanc** calqué sur l'épreuve théorique officielle : 30 questions en 20 minutes (BC1 : 15 dont 10 éliminatoires sur la sécurité, BC2 : 5, BC3 : 5, BC4 : 5). Réussite à 80 % avec toutes les éliminatoires justes. Copie ramassée automatiquement à la fin du temps.
- **Entraînement libre** : choix des modules, 25 ou 50 questions au hasard ou toutes, mélange des questions et des réponses
- **Correction complète à la fin** : bonne réponse, explication, source, score global et par thème
- **Version papier** imprimable (questions puis corrigé sur une page séparée)

Site 100 % statique (HTML + JS, aucune dépendance).

## Ajouter ou modifier des questions

Un fichier par module dans `questions/`. Chaque question suit ce format :

```js
{
  module: "bc1", theme: "Règles de sécurité",
  q: "Texte de la question",
  choix: ["…", "…", "…", "…"],
  bonne: 1,            // index de la bonne réponse (0 = A, 1 = B…)
  eliminatoire: true,  // BC1 seulement : question de sécurité éligible comme éliminatoire à l'examen blanc
  explication: "…",
  source: "Manuel de tir sportif, p. 6 – Règles de sécurité"
}
```

Nouveau module : l'ajouter dans `questions/modules.js`, créer son fichier dans `questions/` et l'ajouter dans la liste des `<script>` de `index.html`. La répartition de l'examen blanc se règle avec le champ `examen` de chaque module et l'objet `EXAMEN` dans `questions/modules.js`.

## Déploiement

GitHub Pages, via `.github/workflows/pages.yml`, à chaque push sur `main`.

## Avertissement

Outil d'entraînement non officiel. Les règlements évoluent : en cas de doute, ce sont les documents publiés sur [fftir.org](https://www.fftir.org) et les consignes de ton RFL qui font foi.
