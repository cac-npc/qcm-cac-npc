// Liste des modules affichés sur l'écran de choix.
// obligatoire: true = coché par défaut et signalé comme socle à connaître.
// examen: nombre de questions tirées dans ce module pour l'examen blanc (répartition officielle du QCM CAC).
// Pour ajouter un module : l'ajouter ici, créer questions/<fichier>.js et l'ajouter dans index.html.
const MODULES = [
  { id: "bc1", nom: "BC1 – Sécurité", detail: "Règles de sécurité, pas de tir, commandements, incidents, armes, munitions, plomb", obligatoire: true, examen: 15 },
  { id: "bc2", nom: "BC2 – Accueillir", detail: "Accueil des publics, tir et santé, encadrement, Cibles Couleurs, valeurs", obligatoire: true, examen: 5 },
  { id: "bc3", nom: "BC3 – Faire découvrir", detail: "Les 12 disciplines, position, visée, lâcher, séquence de tir", obligatoire: true, examen: 5 },
  { id: "bc4", nom: "BC4 – S'intégrer au club", detail: "Licence, clubs, organisation fédérale, réglementation", obligatoire: true, examen: 5 },
  { id: "reglement", nom: "Règlement de la formation CAC", detail: "Accès, déroulement, validation, commissions, formation continue (sept. 2026)", obligatoire: false }
];

// Examen blanc : calqué sur l'épreuve théorique officielle (règlement CAC, § 6 et annexe).
const EXAMEN = { duree: 20, seuil: 80, eliminatoires: 10 };

const QUESTIONS = [];
