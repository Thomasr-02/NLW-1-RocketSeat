import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

const CreatePoint: React.FC = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta"/>
        <Link to='/'>
          <FiArrowLeft>

          </FiArrowLeft>
          Voltar para home  
        </Link>
      </header>
      <form action="
      ">
        <h1> Cadastro do <br/> ponto de coleta</h1>
        
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input 
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div id="field-group">
            <div className="field">
                <label htmlFor="email">E-mail </label>
                <input 
                  type="text"
                  name="email"
                  id="email"
                />
              </div>

              <div className="field">
                <label htmlFor="name">Itens de coleta  </label>
                <input 
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
          </div>

        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
          </legend>
        </fieldset>
        
        
        <fieldset>
          <legend>
            <h2>Itens de coleta</h2>
          </legend>
        </fieldset>


      </form>
      
    </div>
  );
}

export default CreatePoint;