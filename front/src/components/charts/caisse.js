import React, { useState, useEffect } from "react";

// Fonction utilitaire pour ajouter des points comme séparateurs de milliers
function formatterNombreAvecPoints(nombre) {
  return nombre.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function ProgressBar() {
  const [montantActuel, setMontantActuel] = useState(3500000);
  const [montantTotal, setMontantTotal] = useState(5000000);
  const [pourcentageProgression, setPourcentageProgression] = useState(0);

  useEffect(() => {
    // Calculez le pourcentage de progression en fonction du montant actuel et total.
    const nouveauPourcentage = (montantActuel / montantTotal) * 100;
    setPourcentageProgression(nouveauPourcentage);
  }, [montantActuel, montantTotal]);

  return (
    <div className="box-caisse">
      <h3>Total caisse</h3>
      <p className="p-caisse">
        <span>{formatterNombreAvecPoints(montantActuel)} FCFA</span> /{" "}
        {formatterNombreAvecPoints(montantTotal)} FCFA
      </p>
      <h6 className="boxprogress">
        <div
          className="progressebar"
          style={{ width: `${pourcentageProgression}%` }}
        ></div>
      </h6>
      
    </div>
  );
}

export default ProgressBar;
