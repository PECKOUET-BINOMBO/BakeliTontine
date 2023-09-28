import React, { Component, useState, useEffect } from "react";
import imgCaisse from "../assets/images/caisse.svg";
// importation graphique en ligne
import ProgressLine from "./charts/line";
// Importation graphique en disque
import Secteur from "./charts/secteur";
// Importation des modules nécessaires
import ProgressBar from "./charts/caisse";
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
class Home extends Component {
  render() {
    return (
      <div className="row">
        <Sidebar />
        <div className="pages col-9 heigtht-box">
          <div className="topbar">
            <h2>Admin Dashboard</h2>
          </div>
          <div className="container mt-3">
            <div className="cards">
              <div className="cardi">
                <h3>{moisActuel}</h3>
                <p>225.000 FCFA</p>
                <h6>Nombre de cotisations: 27 </h6>
              </div>
              <div className="cardi">
                <h3>{moisPrecedent}</h3>
                <p>100.000 FCFA</p>
                <h6>Nombre de cotisations: 23 </h6>
              </div>
              <div className="cardi cardi-caisse">
                <div className="box-img-caisse">
                  <img src={imgCaisse} alt="image caisse" />
                </div>
                <ProgressBar />
              </div>
            </div>
            <div className="charts">
              <ProgressLine />
              <Secteur />
            </div>
            <div className="suiviMembres mt-4">
              <div className="boxsuivi">
                {/* mois actuel */}
                <h4>{moisActuel}</h4>
                <table className="table">
                  <tr className="thead">
                    <th scope="col">Membres</th>
                    <th scope="col">Montants</th>
                    <th scope="col">Dates</th>
                    <th scope="col">Statuts</th>
                  </tr>
                  <tr className="tbody">
                    <td>John Doe</td>
                    <td>10.000 FCFA</td>
                    <td>10-10-2020</td>
                    <td
                      style={{
                        fontWeight: 600,
                        color: "#20DF7F",
                        fontSize: "12.52px",
                        fontStyle: "normal",
                      }}
                    >
                      Validé
                    </td>
                  </tr>
                  <tr className="tbody">
                    <td>John Doe</td>
                    <td>10.000 FCFA</td>
                    <td>10-10-2020</td>
                    <td
                      style={{
                        fontWeight: 600,
                        color: "#093545",
                        fontSize: "12.52px",
                        fontStyle: "normal",
                      }}
                    >
                      En attente
                    </td>
                  </tr>
                </table>
              </div>
              <div className="boxsuivi">
                <h4>Top progression</h4>
                <table className="table tableSuivi">
                  <tr className="thead">
                    <th scope="col">Membres</th>
                    <th scope="col">Dates début</th>
                    <th scope="col">Progressions</th>
                  </tr>
                  <tr className="tbody">
                    <td>John Doe</td>
                    <td>10-10-2020</td>
                    <td className="tdProgress">
                      <div className="progressMembres">
                        <div
                          className="progressebar"
                          style={{ width: "20%" }}
                        ></div>
                      </div>
                      <span className="progressMembresSpan">20%</span>
                    </td>
                  </tr>
                  <tr className="tbody">
                    <td>John Doe</td>
                    <td>10-10-2020</td>
                    <td className="tdProgress">
                      <div className="progressMembres">
                        <div
                          className="progressebar"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <span className="progressMembresSpan">80%</span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
