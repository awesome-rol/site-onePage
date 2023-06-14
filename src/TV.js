import React from 'react';
import './css/style.css';
import './css/reset.css';
import './css/footer.css';
import './css/playerRadio.css';
import Clappr from '@clappr/player';
import fecharIcone from './img/icones/fecharIcone.png';

const TV = () => {
  function player() {
    new Clappr.Player({
      source: 'https://stmv2.samcast.com.br/cmdtv/cmdtv/playlist.m3u8',
      parentId: '#playerTVContainer',
      width: '100vw',
      height: '100vh',
      autoPlay: true,
      controls: true,
      muted: false,
    });
  }

  React.useEffect(() => {
    player();
  }, []);

  return (
    <div>
      <div id="playerTVContainer" style={{ position: 'relative' }}>
        <div>
          <a href="/">
            <img
              style={{
                color: 'white',
                position: 'absolute',
                zIndex: 10,
                top: 15,
                right: 15,
                height: '50px',
                width: '50px',
                backgroundColor: '#000',
                border: '3px solid #000',
                borderRadius: '15px',
              }}
              src={fecharIcone}
              alt="Fechar TV"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TV;
