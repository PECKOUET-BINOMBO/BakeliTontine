import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Users from "./components/users";
import Users2 from "./components/users2";
import Users3 from "./components/users3";
import Cotisations from "./components/cotisations";
import General from "./components/parametre";
import ParametreUsers from "./components/parametreUsers";
import Archive from "./components/archives";
import Bloque from "./components/bloque";


function App() {
//recuperation du token
  const token = localStorage.getItem("token");
//recuperation de la date d'expiration du token
  const expires_at = localStorage.getItem("expires_at");

  //création d'une constante navigate pour la redirection
  const navigate = useNavigate();

  if(token && expires_at){
//convertir la date actuelle en millisecondes
    const date = Date.now();
    //convertir en millisecondes
    const millisecondes = date * 1000;
    

    //si le token est expiré
    if(millisecondes > expires_at){
      localStorage.clear();
      navigate("/login");
      
    }
  }





  




  const [currentPath, setCurrentPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  function getLiStyle(path) {
    return currentPath === path ? { background: "#20DF7F" } : {};
  }

  return (
    <div className="App">
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/bloq" element={<Users2 />} />
          <Route path="/users/total" element={<Users3 />} />
          <Route path="/cotisations" element={<Cotisations />} />
          <Route path="/parametre/admin" element={<General />} />
          <Route path="/parametre/users" element={<ParametreUsers />} />
          <Route path="/archives" element={<Archive />} />
          <Route path="/bloque" element={<Bloque />} />
        </Routes>
    </div>
  );
}

export default App;
