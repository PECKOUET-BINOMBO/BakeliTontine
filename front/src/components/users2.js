import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import bgreen from "../assets/images/b-green.svg";
import bloque from "../assets/images/bloqR.svg";
import eye from "../assets/images/eye.svg";
import archive from "../assets/images/archive.svg";
import bloqR from "../assets/images/bloqR.svg";
import Sidebar from "../partials/sidebar";

class Users2 extends React.Component {
  render() {
    return (
      <div className="row">
        <Sidebar />
        <div className="col-9 heigtht-box">
          <div className="topbar">
            <h2>Utilisateurs</h2>
          </div>
          <div className="container mt-3">
            <div className="cards">
              <Link to="/users">
                <div className="cardiUsers">
                  <h3>
                    Membres actifs{" "}
                    <span>
                      <img src={bgreen} alt="bgreen" />
                    </span>
                  </h3>
                  <p>
                    <span>94</span> Membres
                  </p>
                </div>
              </Link>
              <Link to="/users/bloq">
                <div
                  className="cardiUsers"
                  style={{
                    background: "#20DF7F",
                    border: "0.763px solid #20df7f",
                    color: "#fff",
                  }}
                >
                  <h3>
                    Membres Bloqués{" "}
                    <span>
                      <img src={bloque} alt="bloque" />{" "}
                    </span>{" "}
                  </h3>
                  <p>6 Membres</p>
                </div>
              </Link>
              <Link to="/users/total">
                <div className="cardiUsers">
                  <h3>Total Effectifs</h3>
                  <p>94 Membres</p>
                </div>
              </Link>
            </div>
            <div className="boxbtn">
              <button className="btn btnAjout">Ajouter</button>
            </div>
            <div className="suiviUsers mt-4">
              <table className="table tableSuivi">
                <tr className="thead">
                  <th scope="col">Membres</th>
                  <th scope="col">Dates début</th>
                  <th scope="col">Seuils</th>
                  <th scope="col">Statuts</th>
                  <th scope="col">Actions</th>
                </tr>
                <tr className="tbody">
                  <td>John Doe</td>
                  <td>10-10-2020</td>
                  <td>300.000 FCFA</td>
                  <td
                    className="tdStatus"
                    style={{ width: "20%", color: "red" }}
                  >
                    {" "}
                    Bloqué
                  </td>
                  <td className="tdActions">
                    <span className="mx-2">
                      <img src={eye} alt="eye" />
                    </span>
                    <span>
                      <img src={bloqR} alt="bloqR" />
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users2;