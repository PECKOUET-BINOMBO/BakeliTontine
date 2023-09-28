import React from "react";
import profil from "../assets/images/pp.png";
import Sidebar from "../partials/sidebar";

class General extends React.Component {
  render() {
    return (
      <div className="row">
        <Sidebar />
        <div className="col-9 heigtht-box">
          <div className="topbar">
            <h2>Paramètres</h2>
          </div>

          <div className="container mt-4">
            <h2 className="admin-titre">Admin</h2>
            <div className="bg-light box-para-admin py-4">
              <div className="col-12 col-lg-4 box-para">
                <h5>Profil</h5>
                <div className="photo-profil">
                  <img src={profil} alt="photo de profil" />
                </div>
                <div>
                  <p className="nom">Ndiaga Sall</p>
                  <p className="statut">Admin</p>
                </div>
                <div className="btn-profil">
                  <button className="btn">Editer profil</button>
                </div>
              </div>

              <div className="col-12 col-lg-7  profil-info">
                <h6>Informations Générales</h6>
                <div>
                  <p>Prénom</p>
                  <p>Ndiaga</p>
                </div>
                <div>
                  <p>Nom</p>
                  <p>Sall</p>
                </div>
                <div>
                  <p>statut</p>
                  <p>Admin</p>
                </div>
                <div>
                  <p>E-mail</p>
                  <p>ndiaye@gmail.com</p>
                </div>
                <h6>Statistiques</h6>
                <div>
                  <p>Nombre de membres ajoutés</p>
                  <p>25</p>
                </div>
                <div>
                  <p>Nombre de membres archivés</p>
                  <p>10</p>
                </div>
                <div>
                  <p>Nombre de membres bloqué</p>
                  <p>5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default General;
