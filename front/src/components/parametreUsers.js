import React from "react";
import Sidebar from "../partials/sidebar";

class ParametreUsers extends React.Component {
  render() {
    return (
      <div className="row">
        <Sidebar />
        <div className="col-9 heigtht-box">
          <div className="topbar">
            <h2>Paramètres utilisateurs</h2>
          </div>
          <div className="container mt-3">
            <h2 className="admin-titre">Utilisateurs</h2>
            <div className="bg-light px-3 py-5 user-info ">
              <div className="col-12 col-md-3 lite-users pt-5">
                <h6 className="titre-membre">Membres</h6>
                <ul>
                  <li className="active">Selena Roy</li>
                  <li>Emma Waston</li>
                  <li>Jhon Robert</li>
                  <li>Anne Hathaway</li>
                  <li>Ravi Stone</li>
                  <li>Robert Downey</li>
                </ul>
              </div>
              <div className="col-12 col-md-9 px-2">
                <h3 className="user-info-titre">Informations Générales</h3>
                <div>
                  <form className="user-info-form">
                    <div className="row">
                      <div className="form-group col-12 col-md-6">
                        <label htmlFor="nom">Nom</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nom"
                          placeholder="Selena"
                        />
                      </div>
                      <div className="form-group col-12 col-md-6">
                        <label htmlFor="prenom">Prénom</label>
                        <input
                          type="text"
                          className="form-control"
                          id="prenom"
                          placeholder="Roy"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-12 col-md-6">
                        <label htmlFor="date">Date de naissance</label>
                        <input type="date" className="form-control" id="date" />
                      </div>
                      <div className="form-group col-12 col-md-6">
                        <label htmlFor="profession">Profession</label>
                        <input
                          type="text"
                          className="form-control"
                          id="profession"
                          placeholder="designer"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-12 col-md-6">
                        <label htmlFor="password">Définir mot de passe</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="********"
                        />
                      </div>
                      <div className="form-group col-12 col-md-6">
                        <label htmlFor="password">
                          Confirmer votre mot de passe
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="***********"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-12 col-md-6">
                        <label htmlFor="email">E-mail</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="selena@gmail.com"
                        />
                      </div>
                      <div className="form-group col-12 col-md-6">
                        <label htmlFor="tel">Téléphone</label>
                        <input
                          type="text"
                          className="form-control"
                          id="tel"
                          placeholder="+221 77 299 58 51"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-12 col-md-6">
                        <label htmlFor="adresse">Adresse</label>
                        <input
                          type="text"
                          className="form-control"
                          id="adresse"
                          placeholder="Dakar, Sénégal"
                        />
                      </div>
                      <div className="form-group col-12 col-md-6">
                        <label htmlFor="organisation">Organisation</label>
                        <input
                          type="text"
                          className="form-control"
                          id="organisation"
                          placeholder="Volkeno"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="btn-update-users">
                        <button className="btn">Mettre à jour</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ParametreUsers;
