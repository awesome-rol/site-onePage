import React from 'react';
import './css/style.css';
import './css/footer.css';
import './css/playerRadio.css';
import iconeVolume from './img/icones/iconeVolume.png';

const Footer = ({ audio }) => {
  const [volume, setVolume] = React.useState(50);
  const teste = React.useRef();

  function handleChange({ target }) {
    setVolume(target.value);
    audio.current.volume = volume / 100;
  }

  return (
    <div className="footerContainer">
      <div className="footerArea">
        <div className="footer">
          <p>Copyright (c) 2023 - Site OnePage Demo</p>
        </div>
      </div>
      <div className="volume">
        <img src={iconeVolume} alt="ícone de volume" />
        <input
          ref={teste}
          type="range"
          className="volumeSlider"
          value={volume}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Footer;
