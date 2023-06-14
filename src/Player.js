import React from 'react';
import botaoPlay from './img/icones/iconePlay.svg';
import botaoPause from './img/icones/iconePause.svg';

const Player = ({ audio }) => {
  const [icone, setIcone] = React.useState(botaoPlay);
  const [togglePlay, setTogglePlay] = React.useState(true);

  function handleClick() {
    if (togglePlay) {
      setIcone(botaoPause);
      audio.current.play();
    } else {
      setIcone(botaoPlay);
      audio.current.pause();
    }
    setTogglePlay(!togglePlay);
  }
  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          border: 'none',
          background: 'none',
          position: 'relative',
          cursor: 'pointer',
          zIndex: 2,
        }}
      >
        <img style={{ height: '80px' }} src={icone} alt="reproduzir rádio" />
      </button>
    </div>
  );
};

export default Player;
