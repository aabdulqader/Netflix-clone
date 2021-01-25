import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import { Container, Button, Overlay, Inner, Close } from "./PlayerStyle";

export const PlayerContext = createContext();

const Player = ({ children, ...restProps }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
};

export const PlayerVideo = ({ src, ...restProps }) => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay data-testid="player">
          <Inner>
            <video id="netflix-player" autoplay="true" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close onClick={() => setShowPlayer(false)} />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

export const PlayerButton = ({ ...restProps }) => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button
      onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
      {...restProps}
    >
      Play
    </Button>
  );
};

export default Player;
