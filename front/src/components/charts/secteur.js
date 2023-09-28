import React, { Component, useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2"; // Importation des composants graphiques

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

function Secteur() {
  // Définition des données du graphique en disque
  const data2 = {
    labels: ["Terminé", "En cours", "Archivé", "Bloqué"], // Nom des secteurs

    datasets: [
      {
        label: false, // Nom de la série de données

        data: [18, 49.48, 23.62, 9.04], // Valeurs de la série de données
        backgroundColor: ["#20DF7F", "#093545", "#FFA8A7", "#FDD09FB2"], // Couleurs des secteurs
        borderColor: ["#20DF7F", "#093545", "#FFA8A7", "#FDD09FB2"], // Couleurs des lignes des secteurs
        legend: true, // Affiche la légende du graphique
      },
    ],
  };
  // Options de configuration du graphique en disque
  const options2 = {
    responsive: true, // Rend le graphique réactif
    plugins: {
      legend: {
        position: "bottom", // Position de la légende
      },
    },
  };

  return (
    <div className="chart doughnut mt-3">
      <h3>Statistiques</h3>
      <Doughnut data={data2} options={options2} className="disk" />
    </div>
  );
}

export default Secteur;
