import React from 'react';
import logo from '../assets/logo.svg';
import './styles.css';
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
const index = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />

        </header>
        <main>
          <h1> Seu marketplace de coleta de residuos</h1>
          <p>Ajudamos pessoas a encontrar um ponto de coleta</p>
          <Link to="/create-point">
            <span>
              <FiLogIn></FiLogIn>
            </span>
            <strong> Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default index;
