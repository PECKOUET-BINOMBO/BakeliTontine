import React, { Component ,useState, useEffect } from 'react';
// Importation des modules nécessaires
import { Line} from "react-chartjs-2"; // Importation des composants graphiques
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Enregistrement des composants Chart.js pour les utiliser ultérieurement
ChartJS.register(
  ArcElement, // Élément d'arc (pour les graphiques en anneau et en disque)
  CategoryScale, // Échelle de catégorie (utilisée pour l'axe x)
  LinearScale, // Échelle linéaire (utilisée pour l'axe y)
  BarElement, // Élément de barre (pour les données de barre, même si votre graphique est une ligne)
  Title, // Titre du graphique
  LineController, // Contrôleur de ligne (pour gérer les données de ligne)
  LineElement, // Élément de ligne (pour les graphiques en ligne)
  PointElement, // Élément de point (pour gérer les points sur la ligne)
  Tooltip, // Tooltip (info-bulle pour le graphique)
  Legend // Légende (pour afficher la légende du graphique)
);

function ProgressLine() {
  // variables d'état pour les données du graphique en ligne
  const [montantJanvier, setMontantJanvier] = useState(50000);
  const [montantFevrier, setMontantFevrier] = useState(80000);
  const [montantMars, setMontantMars] = useState(100000);
  const [montantAvril, setMontantAvril] = useState(20000);
  const [montantMai, setMontantMai] = useState(100000);
  const [montantJuin, setMontantJuin] = useState(225000);
  const [montantJuillet, setMontantJuillet] = useState(40000);
  const [montantAout, setMontantAout] = useState(40000);
  const [montantSeptembre, setMontantSeptembre] = useState(100000);
  // const [montantOctobre, setMontantOctobre] = useState(0);
  // const [montantNovembre, setMontantNovembre] = useState(0);
  // const [montantDecembre, setMontantDecembre] = useState(0);

  // Définition des données du graphique en ligne
  const data = {
    labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre"//, "Octobre", //"Novembre", "Décembre"
   ], // Nom des mois
    datasets: [
      {
        data: [montantJanvier, montantFevrier, montantMars, montantMars, montantAvril, montantMai, montantJuin, montantJuillet, montantAout, montantSeptembre
          //, montantOctobre, montantNovembre, montantDecembre
        ], // Valeurs des mois
        label: "Cotisations", // Nom de la série de données
        backgroundColor: "#093545", // Couleur de fond des barres
        borderColor: "#20DF7F", // Couleur de la ligne du graphique
        pointBorderColor: "#093545", // Couleur des points sur la ligne
        fill: true, // Remplir la zone sous la ligne
        //tension: 0.4                   // Tension de la ligne (lissage)
      },
    ],
  };
  // Options de configuration du graphique en ligne
  const options = {
    responsive: true, // Rend le graphique réactif
    plugins: {
      legend: false, // Affiche la légende du graphique
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true, // Commencer l'axe y à zéro
            stepSize: 20, // Écart entre les étiquettes de l'axe y
            max: 100, // Valeur maximale sur l'axe y
          },
        },
      ],
    },
  };

  return (
    <div className="chart mt-3">
      <h3>Evolution des cotisations en fonction du temps</h3>
      <Line data={data} options={options} />
    </div>
  );
}

export default ProgressLine;
