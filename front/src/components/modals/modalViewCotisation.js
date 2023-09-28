import React from "react";

const ModalViewCotisation = ({ setIsOpen2 }) => {
  return (
    <div className="box-form-add" onClick={() => setIsOpen2(false)}>
      <div className="viewCo pb-3 border rounded bg-light">
        <h3 className="titre-view">Détails Cotisations</h3>
        <div className="nomStatut">
          <p className="nom">Selena Roy</p>
          <p className="statut"> Designer</p>
        </div>
        <table className="table tableview">
            <tr className="thead">
                <th>Mois</th>
                <th>Date</th>
                <th>Montant</th>
            </tr>
            <tr>
                <td>Janvier</td>
                <td>12-01-2021</td>
                <td>10000</td>
            </tr>
            <tr>
                <td>Février</td>
                <td>25-02-2021</td>
                <td>100.000</td>
            </tr>
        </table>
        <div className="totalCo">
            <p> Total = 110.000 FCFA</p>
        </div>
      </div>
    </div>
  );
};

export default ModalViewCotisation;
