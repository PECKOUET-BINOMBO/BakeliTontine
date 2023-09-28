import React from "react";


  const ModalRegister = ({ setIsOpen }) => {
    return (
      <div className="box-form-add"  onClick={() => setIsOpen(false)}>
        <div className="form-add border rounded bg-light">
          <div className="close-btn text-end">
            <button className="btn fw-bold" onClick={() => setIsOpen(false)}>X</button>
          </div>
          <h3 className="text-center">Ajouter un membre</h3>
          <div>
            <form className="user-info-form">
              <div className="row">
                <div className="form-group col-12 col-md-6">
                  <label htmlFor="nom">Nom</label>
                  <input type="text" className="form-control" id="nom" />
                </div>
                <div className="form-group col-12 col-md-6">
                  <label htmlFor="prenom">Prénom</label>
                  <input type="text" className="form-control" id="prenom" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12 col-md-6">
                  <label htmlFor="date">Date de naissance</label>
                  <input type="date" className="form-control" id="date" />
                </div>
                <div className="form-group col-12 col-md-6">
                  <label htmlFor="profession">Profession</label>
                  <input type="text" className="form-control" id="profession" />
                </div>
              </div>

              <div className="row">
                <div className="form-group col-12 col-md-6">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group col-12 col-md-6">
                  <label htmlFor="tel">Téléphone</label>
                  <input type="text" className="form-control" id="tel" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12 col-md-6">
                  <label htmlFor="adresse">Adresse</label>
                  <input type="text" className="form-control" id="adresse" />
                </div>
                <div className="form-group col-12 col-md-6">
                  <label htmlFor="organisation">Organisation</label>
                  <input
                    type="text"
                    className="form-control"
                    id="organisation"
                  />
                </div>
              </div>
              <div className="row">
                <div className="btn-update-users">
                  <button className="btn">Ajouter</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };


export default ModalRegister;
