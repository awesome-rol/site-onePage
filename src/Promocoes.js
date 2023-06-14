import React from 'react';
import imagemPromocao from './img/promocao.jpg';

import logo from './img/logoSite.png';
import './css/footer.css';
import './css/playerRadio.css';
import './css/style.css';
import './css/reset.css';

const Promocao = ({ link }) => {
  return (
    <a href={link}>
      <img
        style={{ height: '250px', width: '350px', borderRadius: '15px' }}
        src={imagemPromocao}
        alt="Promoção"
      />
    </a>
  );
};

const Promocoes = () => {
  return (
    <div
      style={{ height: '1600px', overflowY: 'auto' }}
      className="promocoesAbsoluteContainer"
    >
      <div className="promocoesContainer">
        <h1 style={{ zIndex: 1 }} className="titulo">
          Promoções
        </h1>
        <ul style={{ zIndex: 1 }} className="listaPromocoes">
          <li>
            <Promocao link="https://google.com.br/" />
          </li>
          <li>
            <Promocao link="https://google.com.br/" />
          </li>
          <li>
            <Promocao link="https://google.com.br/" />
          </li>
          <li>
            <Promocao link="https://google.com.br/" />
          </li>
          <li>
            <Promocao link="https://google.com.br/" />
          </li>
          <li>
            <Promocao link="https://google.com.br/" />
          </li>
        </ul>
        <div style={{ zIndex: 1 }} className="sideFooterContainer">
          <div className="sideFooter">
            <p>Copyright (c) 2023 - Site OnePage Demo</p>
            <img
              style={{ height: '40px', width: '40px' }}
              src={logo}
              alt="logo site"
            />
          </div>
        </div>
      </div>
      <div style={{ zIndex: 0 }} className="pelicula"></div>
    </div>
  );
};

export default Promocoes;
