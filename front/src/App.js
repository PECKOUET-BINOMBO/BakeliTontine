import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import imgLogo from "./assets/images/fontisto_wallet.svg";
import imgDashboard from "./assets/images/category.svg";
import imgUsers from "./assets/images/user.svg";
import imgMoney from "./assets/images/healthicons_money-bag-outline.svg";
import imgParametre from "./assets/images/Vector.svg";
import imgvector from "./assets/images/dashicons_arrow-down-alt2.svg";

function App() {
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
