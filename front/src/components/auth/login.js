import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import signUp from "../../assets/images/signup.png";

function Login() {
  axios
    //envoi de la requête post au backend
    .get("http://localhost:8000/api/login")
    //récupération de la réponse du backend si la requête est réussie
    .then((res) => {
      const tokenExpire = res.data; // Utilisez "const" pour déclarer la variable dans laquelle vous souhaitez stocker la réponse de la requête
      console.log(tokenExpire);
    })
    //récupération de l'erreur si la requête échoue
    .catch((err) => {
      console.log(err.response.data);
    });

  ////////////////////////////création d'un état pour gérer les données du formulaire//////////////////////////////////////
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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
      email: email,
      password: password,
    };

    
      //envoi de la requête post au backend
      axios.post("http://localhost:8000/api/login", data)
        //récupération de la réponse du backend si la requête est réussie
        .then((res) => {
          console.log(res.data);
          //réinitialisation du formulaire
          setEmail("");
          setPassword("");
          //recupération de la date d'expiration du token
        const tokenExpire = res.data.expires_at;
        //convertir en date
        const date = new Date(tokenExpire).getTime();
        //convertir en millisecondes
        const millisecondes = date * 1000;

        if (res.data.token) {
          //stockage du token dans le localstorage
          localStorage.setItem("token", res.data.token);
          //stockage de la date d'expiration du token dans le localstorage
          localStorage.setItem("expires_at", millisecondes);
          //stockage de l'id de l'utilisateur dans le localstorage
          localStorage.setItem("id", res.data.user.id);
          //stockage du nom de l'utilisateur dans le localstorage
          localStorage.setItem("name", res.data.user.name);
          //stockage du prénom de l'utilisateur dans le localstorage
          localStorage.setItem("prenom", res.data.user.prenom);
          //stockage de la date d'anniversaire de l'utilisateur dans le localstorage
          localStorage.setItem("date_naissance", res.data.user.date_naissance);

          //stockage du rôle de l'utilisateur dans le localstorage
          localStorage.setItem("role", res.data.user.role);
          //stockage de l'email de l'utilisateur dans le localstorage
          localStorage.setItem("email", res.data.user.email);
          //stockage du numéro de téléphone de l'utilisateur dans le localstorage
          localStorage.setItem("telephone", res.data.user.telephone);
          //stockage de l'adresse de l'utilisateur dans le localstorage
          localStorage.setItem("adresse", res.data.user.adresse);
          //stockage de la profession de l'utilisateur dans le localstorage
          localStorage.setItem("profession", res.data.user.profession);
          //stockage de l'organisation de l'utilisateur dans le localstorage
          localStorage.setItem("organisation", res.data.user.organisation);
        }
          //redirection vers la page d'accueil
          navigate("/");
        })
        //récupération de l'erreur si la requête échoue
        .catch((err) => {
          console.log(err.response.data);
          setErrors(err.response.data);
        });
    }, 500);// temps d'attente de 500ms avant l'envoi de la requête
  };

  return (
    <div className="">
      <div className="row register">
        <div className="imgSign col-5">
          <img src={signUp} alt="signUp" />
        </div>
        <div className=" loginForm col-7">
          <h2>Bienvenue sur Bakéli-tontine</h2>
          <h3 className="text-center">Connectez-vous</h3>

          <form className="login-form" onSubmit={handleSubmit}>
            {errors.message && (
              <p className="text-danger text-center">{errors.message}</p>
            )}
            <div className="row">
              <div className="form-group col-12">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name={email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>
            </div>
            <div className="row">
              <div className="form-group col-12">
                <label htmlFor="password">Mot de passe</label>
                <input
                  type="password"
                  className="form-control"
                  id="paswword"
                  name={password}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <p className="text-danger">{errors.password}</p>
                )}
              </div>
            </div>

            <div className="row">
              <div className="text-center">
                <button className="btn register-btn">Connexion</button>
              </div>
            </div>
            <div className="row text-center compte">
              <p>
                Vous n'avez pas de compte,{" "}
                <Link to="/register">inscrivez-vous!</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
