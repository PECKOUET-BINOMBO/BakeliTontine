import React from "react";
import eye from "../assets/images/eye.svg";
import bloqR from "../assets/images/bloqR.svg";
import Sidebar from "../partials/sidebar";

class Bloque extends React.Component {
  render() {
    return (
      <div className="row">
        <Sidebar />
        <div className="col-9 heigtht-box">
          <div className="topbar">
            <h2>Paramètres membres bloqués</h2>
          </div>
          <div className="container mt-3">
            <div className="bg-light p-5 archive">
              <h3>6 Membres bloqués</h3>
              <div className="suiviUsers mt-4">
                <table className="table tableSuivi tableSuivi-archive">
                  <tr className="thead">
                    <th scope="col">Membres</th>
                    <th scope="col">Dates début</th>
                    <th scope="col">Actions</th>
                  </tr>
                  <tr className="tbody">
                    <td>John Doe</td>
                    <td>10-10-2020</td>
                    <td className="tdActions">
                      <span>
                        <img src={eye} alt="eye" />
                      </span>
                      <span className="mx-2">
                        <img src={bloqR} alt="bloqR" />
                      </span>
                    </td>
                  </tr>
                  <tr className="tbody">
                    <td>Selena Roy</td>
                    <td>20-10-2022</td>
                    <td className="tdActions">
                      <span>
                        <img src={eye} alt="eye" />
                      </span>
                      <span className="mx-2">
                        <img src={bloqR} alt="bloqR" />
                      </span>
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

export default Bloque;
