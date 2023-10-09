import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";


  function ModalRegister ({ setIsOpen }) {

     ////////////////////////////création d'un état pour gérer les données du formulaire//////////////////////////////////////
  const [nom, setNom] = React.useState("");
  const [prenom, setPrenom] = React.useState("");
  const [role, setRole] = React.useState("");
  const [date_naissance, setDate_naissance] = React.useState("");
  const [profession, setProfession] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password_confirmation, setPassword_confirmation] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telephone, setTelephone] = React.useState("");
  const [adresse, setAdresse] = React.useState("");
  const [organisation, setOrganisation] = React.useState("");

  ////////////////////////////création d'un état pour gérer les erreurs//////////////////////////////////////
  const [errors, setErrors] = useState({});

  //création d'une constante navigate pour la redirection
  const navigate = useNavigate();

  /////////////////////////////action au submit//////////////////////////
  const handleSubmit = (e) => {
    //empêcher le comportement par défaut du formulaire
    e.preventDefault();
    setTimeout(() => {
    //création d'un objet data pour récupérer les données du formulaire
    const data = {
      nom: nom,
      prenom: prenom,
      role: role,
      date_naissance: date_naissance,
      profession: profession,
      password: password,
      password_confirmation: password_confirmation,
      email: email,
      telephone: telephone,
      adresse: adresse,
      organisation: organisation,
    };

    /////////////////////////////envoi des données au backend//////////////////////////

    axios
      //envoi de la requête post au backend
      .post("http://localhost:8000/api/register", data)
      //récupération de la réponse du backend si la requête est réussie
      .then((res) => {
        console.log(res);
        console.log(res.data);
        //affichage d'une alerte si la requête est réussie et fermeture du modal
        alert("Membre ajouté avec succès");
        setIsOpen(false);
        
        
      })
      //récupération de l'erreur si la requête échoue
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
    } , 500);
  };

    return (
      <div className="box-form-add">
        <div className="form-add border rounded bg-light">
          <div className="close-btn text-end">
            <button className="btn fw-bold" onClick={() => setIsOpen(false)}>X</button>
          </div>
          <h3 className="text-center">Ajouter un membre</h3>
          <div>
          <form className="user-info-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-12 col-md-6">
                <label htmlFor="nom">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="nom"
                  name="nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
                {errors.nom && <p className="text-danger">{errors.nom}</p>}
              </div>
              <div className="form-group col-12 col-md-6">
                <label htmlFor="prenom">Prénom</label>
                <input
                  type="text"
                  className="form-control"
                  id="prenom"
                  name="prenom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                />
                {errors.prenom && (
                  <p className="text-danger">{errors.prenom}</p>
                )}
              </div>
            </div>
            <div className="row">
              <div className="form-group col-12 col-md-6">
                <label htmlFor="date">Date de naissance</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date_naissance"
                  value={date_naissance}
                  onChange={(e) => setDate_naissance(e.target.value)}
                />
                {errors.date_naissance && (
                  <p className="text-danger">{errors.date_naissance}</p>
                )}
              </div>
              <div className="form-group col-12 col-md-6">
                <label htmlFor="profession">Profession</label>
                <input
                  type="text"
                  className="form-control"
                  id="profession"
                  name="profession"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                />
                {errors.profession && (
                  <p className="text-danger">{errors.profession}</p>
                )}
              </div>
            </div>

            <div className="row">
              <div className="form-group col-12 col-md-6">
                <label htmlFor="password">Définir mot de passe</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <p className="text-danger">{errors.password}</p>
                )}
              </div>
              <div className="form-group col-12 col-md-6">
                <label htmlFor="confirmpassword">
                  Confirmer votre mot de passe
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmpassword"
                  name="password_confirmation"
                  value={password_confirmation}
                  onChange={(e) => setPassword_confirmation(e.target.value)}
                />
                {errors.password_confirmation && (
                  <p className="text-danger">{errors.password_confirmation}</p>
                )}
              </div>
            </div>

            <div className="row">
              <div className="form-group col-12 col-md-6">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>
              <div className="form-group col-12 col-md-6">
                <label htmlFor="tel">Téléphone</label>
                <input
                  type="text"
                  className="form-control"
                  id="tel"
                  name="telephone"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                />
                {errors.telephone && (
                  <p className="text-danger">{errors.telephone}</p>
                )}
              </div>
            </div>
            <div className="row">
              <div className="form-group col-12 col-md-6">
                <label htmlFor="adresse">Adresse</label>
                <input
                  type="text"
                  className="form-control"
                  id="adresse"
                  name="adresse"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                />
                {errors.adresse && (
                  <p className="text-danger">{errors.adresse}</p>
                )}
              </div>

              <div className="form-group col-12 col-md-6">
                <label htmlFor="organisation">Organisation</label>
                <input
                  type="text"
                  className="form-control"
                  id="organisation"
                  name="organisation"
                  value={organisation}
                  onChange={(e) => setOrganisation(e.target.value)}
                />
                {errors.organisation && (
                  <p className="text-danger">{errors.organisation}</p>
                )}
              </div>
              <div className="form-group col-12 mt-4">
                <label htmlFor="role">Rôle</label>
                <select className="form-control" name="role" onChange={(e) => setRole(e.target.value)}>
                  <option></option>
                  <option value="Admin">Admin</option>
                  <option
                    value="Membre">
                     Membre
                  </option>
                </select>
                {errors.role && <p className="text-danger">{errors.role}</p>}
              </div>
            </div>
            <div className="row">
              <div className="text-center">
                <button type="submit" className="btn register-btn">
                  Ajouter
                </button>
              </div>
            </div>
            
          </form>
          </div>
        </div>
      </div>
    );
  };


export default ModalRegister;
