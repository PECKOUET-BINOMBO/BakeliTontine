import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import imgLogo from "../assets/images/fontisto_wallet.svg";
import imgDashboard from "../assets/images/category.svg";
import imgUsers from "../assets/images/user.svg";
import imgMoney from "../assets/images/healthicons_money-bag-outline.svg";
import imgParametre from "../assets/images/Vector.svg";
import imgvector from "../assets/images/dashicons_arrow-down-alt2.svg";
import { Link } from "react-router-dom";

function Sidebar() {
  const [sousMenuVisible, setSousMenuVisible] = useState(false);

  // Fonction pour basculer la visibilité du sous-menu
  const toggleSousMenu = () => {
    setSousMenuVisible(!sousMenuVisible);
  };

  const [currentPath, setCurrentPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  function getLiStyle(path) {
    return currentPath === path ? { background: "#20DF7F" } : {};
  }
  //création d'une constante navigate pour la redirection
  const navigate = useNavigate();
  // Fonction pour se déconnecter

  const handleLogout = () => { 
    localStorage.removeItem("token"); 
    localStorage.removeItem("expires_at");
    navigate("/login");
  };

  // recuperation du token
  const token = localStorage.getItem("token");
  return (
    <div className="sidebar col-3 heigtht-box">
      <Link to="/" className="logo">
        <img src={imgLogo} alt="image logo" /> <h5>Bakéli Tontine</h5>
      </Link>

      <div className="menubar">
      <ul>
  
    
      <li style={getLiStyle("/")}>
        <Link to="/">
          <img src={imgDashboard} alt="image dashboard" /> Dashboard
        </Link>
      </li>
      <li style={getLiStyle("/users")}>
        <Link to="/users">
          <img src={imgUsers} alt="image user" /> Utilisateurs
        </Link>
      </li>
      <li style={getLiStyle("/cotisations")}>
        <Link to="/cotisations">
          <img src={imgMoney} alt="image cotisations" /> Cotisations
        </Link>
      </li>
      <li onClick={toggleSousMenu} className="li-para">
        <img src={imgParametre} alt="image parametre" /> Paramètres{" "}
        <img src={imgvector} alt="image vector" />
        {sousMenuVisible && (
          <ul className="ulSous">
            <li>
              <Link to="/parametre/admin">Généraux</Link>
            </li>
            <li>
              <Link to="/parametre/users">Utilisateurs</Link>
            </li>
            <li>
              <Link to="/archives">Archives</Link>
            </li>
            <li>
              <Link to="/bloque">Membres bloqués</Link>
            </li>
          </ul>
        )}
      </li>
      {!token ? (
        <> 
      <li>
        <Link to="/register" className="a-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>
          Inscription
        </Link>
      </li>
      <li style={getLiStyle("/cotisations")}>
        <Link to="/login" className="a-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
            />
          </svg>
          Connexion
        </Link>
      </li>
      </>
    ) : null}
   
    {token ? (
    <li>
      <button
        className="btn-deconnexion"
        type="button"
        onClick={handleLogout}
      >
        <Link to="" className="a-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
          Se déconnecter
        </Link>
      </button>
    </li>
    ) : null}
  
</ul>

      </div>
    </div>
  );
}

export default Sidebar;
