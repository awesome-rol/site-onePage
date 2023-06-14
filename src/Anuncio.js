import React from 'react';
import './css/footer.css';
import './css/playerRadio.css';
import './css/style.css';
import './css/reset.css';
import anuncio1 from './img/anuncio1.jpg';
import anuncio2 from './img/anuncio2.jpg';
import anuncio3 from './img/anuncio3.jpg';
import anuncio4 from './img/anuncio4.jpg';

const Anuncio = () => {
  const posicaoRef = React.useRef();
  const imagemAnuncio = React.useRef();
  const [posicaoSlider, setPosicaoSlider] = React.useState(0);

  React.useEffect(() => {
    const { width } = posicaoRef.current.getBoundingClientRect();
    setTimeout(() => {
      if (posicaoSlider >= 0) {
        setPosicaoSlider(posicaoSlider - (width + 10));
      } else {
        setPosicaoSlider(posicaoSlider + width + 10);
      }
    }, 5000);
  }, [posicaoSlider]);

  return (
    <div
      ref={posicaoRef}
      style={{ transform: `translate(${posicaoSlider}px)` }}
      className="sliderAnuncios"
    >
      <a href="https://google.com/">
        <img
          ref={imagemAnuncio}
          className="imagemAnuncio"
          src={anuncio1}
          alt="Anúncio"
        />
      </a>
      <a href="https://google.com/">
        <img
          ref={imagemAnuncio}
          className="imagemAnuncio"
          src={anuncio2}
          alt="Anúncio"
        />
      </a>
      <a href="https://google.com/">
        <img
          ref={imagemAnuncio}
          className="imagemAnuncio"
          src={anuncio3}
          alt="Anúncio"
        />
      </a>
      <a href="https://google.com/">
        <img
          ref={imagemAnuncio}
          className="imagemAnuncio"
          src={anuncio4}
          alt="Anúncio"
        />
      </a>
    </div>
  );
};

export default Anuncio;
