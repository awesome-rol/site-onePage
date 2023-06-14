import React from 'react';
import Footer from './Footer';
import logo from './img/logoSite.png';
import capaPadrao from './img/capa.png';
import './css/footer.css';
import './css/playerRadio.css';

import './css/style.css';
import './css/reset.css';
import Player from './Player';
import Botao from './Botao';
import iconeFacebook from './img/icones/iconeFacebook.svg';
import iconeInstagram from './img/icones/iconeInstagram.svg';
import iconeTwitter from './img/icones/iconeTwitter.svg';
import iconeYoutube from './img/icones/iconeYoutube.svg';
import iconeWhats from './img/icones/iconeWhats.svg';
import iconeApp from './img/icones/iconeApp.png';
import iconePromocao from './img/icones/iconePromocao.svg';
import iconeTV from './img/icones/iconeTV.svg';
import Anuncio from './Anuncio';

const Home = () => {
  const [tituloMusica, setTituloMusica] = React.useState(null);
  const [artista, setArtista] = React.useState(null);
  const [verificacao, setVerificao] = React.useState(true);
  const audioPlayer = React.useRef();

  React.useEffect(() => {
    setInterval(() => {
      setVerificao((verificacao) => !verificacao);
    }, 10000);
  }, []);

  React.useEffect(() => {
    async function reqMusica() {
      const req = await fetch('http://localhost:5000');
      const res = await req.text();

      const nomeMusicaSeparado = res.split('-');
      const numeroDePartes = nomeMusicaSeparado.length;
      const nomeMusicaFormatado = nomeMusicaSeparado[0].trim();
      const nomeArtistaFormatado = nomeMusicaSeparado[1].trim();

      if (numeroDePartes === 2) {
        setArtista(nomeArtistaFormatado);
        setTituloMusica(nomeMusicaFormatado);
      } else {
        setTituloMusica('Intervalo');
        setArtista('-----------');
      }
    }
    reqMusica();
  }, [verificacao]);

  return (
    <div className="absoluteContainer">
      <audio
        ref={audioPlayer}
        className="audioRadio"
        src="http://stm18.xcast.com.br:10870/stream"
      />
      <section className="mainContainer">
        <div className="main">
          <img className="logoSite" src={logo} alt="logo da rádio" />
          <div className="infoMusica">
            <img src={capaPadrao} alt="Ilustração música" />

            <div className="infoMusicaTextosContainer">
              <div className="infoMusicaTextos">
                <h3>Título Música</h3>
                <p>Nome do artista</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <nav style={{ position: 'absolute', bottom: '60px' }} className="navSite">
        <ul>
          <li>
            <Botao
              imagem={iconeTV}
              tamanho="50px"
              corBackground="transparent"
              link="/tv"
              target="_self"
            />
          </li>
          <li>
            <Botao
              imagem={iconeWhats}
              tamanho="50px"
              corBackground="transparent"
              link="https://api.whatsapp.com/send/?phone=54545454545&text&type=phone_number&app_absent=0"
              target="_blank"
            />
          </li>
          <li>
            <Botao
              imagem={iconeApp}
              tamanho="50px"
              corBackground="transparent"
              link="https://play.google.com/store/apps/details?id=com.shoutcast.stm.rdio153"
              target="_blank"
            />
          </li>
          <li>
            <Botao
              imagem={iconePromocao}
              tamanho="50px"
              corBackground="transparent"
              link="promocoes"
              target="_blank"
            />
          </li>
        </ul>
      </nav>

      <div className="containerPlayerRadio">
        <div className="bgPlayer"></div>
        <Player audio={audioPlayer} />
        <div className="redesSociais">
          <Botao
            corBackground="#c24c4c"
            tamanhoBackground="50px"
            imagem={iconeFacebook}
            tamanho="25px"
            link="https://facebook.com/"
            radius="50%"
          />
          <Botao
            corBackground="#c24c4c"
            imagem={iconeInstagram}
            tamanho="25px"
            link="https://instagram.com/"
            radius="50%"
          />
          <Botao
            corBackground="#c24c4c"
            imagem={iconeTwitter}
            tamanho="25px"
            link="https://twitter.com/"
            radius="50%"
          />
          <Botao
            corBackground="#c24c4c"
            imagem={iconeYoutube}
            tamanho="25px"
            link="https://youtube.com/"
            radius="50%"
          />
        </div>
      </div>
      <div className="anuncioContainer">
        <Anuncio />
      </div>

      <div className="pelicula"></div>

      <div className="complementoFooter"></div>
      <div className="anuncioContainer">
        <Anuncio />
      </div>
      <Footer audio={audioPlayer} />
    </div>
  );
};

export default Home;
