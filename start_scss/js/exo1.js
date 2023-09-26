let chaussures = [
  {
    marque: "Nike",
    titre: "Jordan Air",
    collector: true,
    taillesDispo: [28, 29, 30],
    prix: 300,
    elements: {
      lacets: "rouge",
      corps: "blanc",
      semelle: "bleu",
    },
  },
  {
    marque: "Vans",
    titre: "Old Skool",
    collector: false,
    taillesDispo: [34, 36, 38],
    prix: 70,
    elements: {
      lacets: "noir",
      corps: "marron",
    },
  },
  {
    marque: "Adidas",
    titre: "Stan Smith",
    collector: false,
    taillesDispo: [40, 42, 44],
    prix: 100,
    elements: {
      lacets: "vert",
      corps: "blanc",
    },
  },
  {
    marque: "Nike",
    titre: "Air Force",
    collector: true,
    taillesDispo: [36, 37, 38],
    prix: 200,
    elements: {
      lacets: "bleu",
      corps: "marron",
    },
  },
  {
    marque: "Nike",
    titre: "Air Max",
    collector: true,
    taillesDispo: [36, 38, 40],
    prix: 900,
    elements: {
      lacets: "jaune",
      corps: "vert",
    },
  },
  {
    marque: "Vans",
    titre: "Era",
    collector: false,
    taillesDispo: [30, 32, 40],
    prix: 40,
    elements: {
      lacets: "bleu",
      corps: "noir",
    },
  },
  {
    marque: "Vans",
    titre: "Sk8",
    collector: false,
    taillesDispo: [28, 30, 26],
    prix: 40,
    elements: {
      lacets: "bleu",
      corps: "noir",
      languette: "rouge",
    },
  },
  {
    marque: "Vans",
    titre: "Old Skool",
    collector: false,
    taillesDispo: [36, 28, 60],
    prix: 60,
    elements: {
      lacets: "blanc",
      corps: "noir",
      languette: "noir",
    },
  },
  {
    marque: "Nike",
    titre: "Nike SB",
    collector: false,
    taillesDispo: [30, 31, 32],
    prix: 50,
    elements: {
      lacets: "blanc",
      corps: "noir",
    },
  },
  {
    marque: "Adidas",
    titre: "Old Skool",
    collector: false,
    taillesDispo: [29, 30, 32],
    prix: 4000,
    elements: {
      lacets: "rouge",
      corps: "bleu",
    },
  },
];

// 1. Faire une boucle sur tout le tableau et de log les chaussures une par une

console.log("Toute les chaussues dispo");
chaussures.forEach((chaussure, index) => {
  console.log("chaussures :", index, chaussure);
});

let i = 0;

chaussures.forEach((chaussure) => {
  console.log("chaussure n° :", i++, chaussure);
});
// 2. Log un tableau de toutes les Nikes

console.log("Que les Nike");
const nikes = chaussures.filter((chaussure) => chaussure.marque === "Nike");

console.log(nikes);

// 3. Log du prix des Vans "Old Skool"
console.log("Prix vans");
const vansOldSkool = chaussures.filter(
  (chaussure) => chaussure.marque === "Vans" && chaussure.titre === "Old Skool"
);
vansOldSkool.forEach((chaussure) => {
  console.log(`Prix des Vans Old Skool : ${chaussure.prix} euros`);
});

// 4. Log un tableau de toutes les chaussures collector
console.log("Chaussure collector");
const Ccollector = chaussures.filter(
  (chaussure) => chaussure.collector === true
);

console.log(Ccollector);

// 5. Log couleur lacets de la vans Sk8

console.log("couleur lacets");

chaussures.forEach(function (chaussure) {
  if (chaussure.marque === "Vans" && chaussure.titre === "Sk8") {
    const couleurLacets = chaussure.elements.lacets;
    console.log(`Couleur des lacets de la Vans Sk8 : ${couleurLacets}`);
  }
});

// 6. Changer la couleur de la vans Sk8 en violet et log la chaussure

console.log("Changer lacets");
chaussures.forEach(function (chaussure) {
  if (chaussure.marque === "Vans" && chaussure.titre === "Sk8") {
    chaussure.elements.lacets = "violet";
    console.log(chaussure);
  }
});

// 7. Plus compliqué : Log le montant total de Toutes les Nikes

console.log("Prix total");

let total = 0;

chaussures.forEach(function (chaussure) {
  if (chaussure.marque === "Nike") {
    total += chaussure.prix;
  }
});

console.log(
  `Le montant total de toutes les chaussures Nike est de : ${total} euros`
);

// 8. Plus compliqué : Log le montant total de Toutes les paires
console.log("Prix total");

let stock = 0;

chaussures.forEach(function (chaussure) {
  if (chaussure.marque) {
    stock += chaussure.prix;
  }
});

console.log(
  `Le montant total de toutes les chaussures  est de : ${stock} euros`
);
