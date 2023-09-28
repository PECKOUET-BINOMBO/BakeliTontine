import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signUp from "../../assets/images/signup.png";
import axios from "axios";

function Register() {
  ////////////////////////////création d'un état pour gérer les données du formulaire//////////////////////////////////////
  const [nom, setNom] = React.useState("");
  const [prenom, setPrenom] = React.useState("");
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
    //création d'un objet data pour récupérer les données du formulaire
    const data = {
      nom: nom,
      prenom: prenom,
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
        //redirection vers la page de connexion
        navigate("/login");
      })
      //récupération de l'erreur si la requête échoue
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });



  };

  return (
    <div className="">
      <div className="row register">
        <div className="imgSign col-5">
          <img src={signUp} alt="signUp" />
        </div>
        <div className=" signForm col-7">
          <h3 className="text-center">Inscription</h3>
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
                {errors.nom && (<p className="text-danger">{errors.nom}</p>)}
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
                {errors.prenom && (<p className="text-danger">{errors.prenom}</p>)}
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
                {errors.date_naissance && (<p className="text-danger">{errors.date_naissance}</p>)}
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
               {errors.profession && (<p className="text-danger">{errors.profession}</p>)}
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
                {errors.password && (<p className="text-danger">{errors.password}</p>)}
                
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
                {errors.password_confirmation && (<p className="text-danger">{errors.password_confirmation}</p>)}
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
               {errors.email && (<p className="text-danger">{errors.email}</p>)}
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
              {errors.telephone && (<p className="text-danger">{errors.telephone}</p>)}
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
                {errors.adresse && (<p className="text-danger">{errors.adresse}</p>)}
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
               {errors.organisation && (<p className="text-danger">{errors.organisation}</p>)}
              </div>
            </div>
            <div className="row">
              <div className="text-center">
                <button type="submit" className="btn register-btn">
                  S'inscrire
                </button>
              </div>
            </div>
            <div className="row text-center compte">
              <p>
                Vous avez déjà un compte,{" "}
                <Link to="/login">Connectez-vous!</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
