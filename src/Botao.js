import React from 'react';
import './css/footer.css';
import './css/playerRadio.css';
import './css/style.css';
import './css/reset.css';

const Botao = ({ imagem, alt, link, tamanho, ...props }) => {
  function handleClick() {
    console.log('clicou');
  }

  return (
    <button
      className="botaoGeral"
      style={{
        backgroundColor: [props.corBackground],
        border: 'none',
        borderRadius: [props.radius],
      }}
      onClick={handleClick}
    >
      <a href={link} target={props.target}>
        <img
          className="imagemBotao"
          style={{
            backgroundolor: 'none',
          }}
          src={imagem}
          alt={alt}
        />
      </a>
    </button>
  );
};

export default Botao;
