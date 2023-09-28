import React, { Component, useState, useEffect } from "react";
// Importation des modules nécessaires
import ProgressBar from "./charts/caisse";
import eye from "../assets/images/eye.svg";
import ModalViewCotisation from "./modals/modalViewCotisation";
import Sidebar from "../partials/sidebar";
// Obtenez la date actuelle
const dateActuelle = new Date();

// Obtenez le mois précédent
const dateMoisPrecedent = new Date();
dateMoisPrecedent.setMonth(dateActuelle.getMonth() - 1);

// Noms des mois
const moisActuel = dateActuelle.toLocaleDateString("fr-FR", { month: "long" });
const moisPrecedent = dateMoisPrecedent.toLocaleDateString("fr-FR", {
  month: "long",
});

// Définition du composant React "Home"
function Cotisations() {
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div className="row">
      <Sidebar />
      <div className="parent-add col-9 heigtht-box">
        <div className="topbar">
          <h2>Cotisations</h2>
        </div>
        <div className="container mt-3">
          <div className="cards">
            <div className="cardCotisation">
              <h3>{moisActuel}</h3>
              <p className="somme">225.000 FCFA</p>
            </div>
            <div className="cardCotisation">
              <h3>{moisPrecedent}</h3>
              <p className="somme">100.000 FCFA</p>
            </div>
            <div className="cardCotisation cardCotisation-caisse">
              <h3>Total caisse</h3>
              <p className="somme">3.500.000 FCFA</p>
              <h6 className="boxprogress">
                <div className="progressebar" style={{ width: "77%" }}></div>
              </h6>
              <p className="text-end seuil">77% du seuil</p>
            </div>
          </div>
          <div className="suiviCotisations mt-4">
            <div className="boxCotisations">
              <table className="table">
                <tr className="thead">
                  <th scope="col">Membres</th>
                  <th scope="col">Dates début</th>
                  <th scope="col">Montants cotisés</th>
                  <th scope="col">Montants restant</th>
                  <th scope="col">Actions</th>
                </tr>
                <tr className="tbody">
                  <td>John Doe</td>
                  <td>10-10-2020</td>
                  <td>10.000 FCFA</td>
                  <td>99.000 FCFA</td>
                  <td className="tdActions">
                    <span>
                      <img
                        src={eye}
                        alt="eye"
                        onClick={() => setIsOpen2(true)}
                      />
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        {isOpen2 && <ModalViewCotisation setIsOpen2={setIsOpen2} />}
      </div>
    </div>
  );
}

export default Cotisations;
