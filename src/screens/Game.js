import React, { useState } from "react";
import styled from "styled-components";
import Fase from "../fase/Fase";
import Chronometer from "./chronometer"
import { maps } from "./maps.js";

function Game() {
  const [level, setLevel] = useState(1);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [hasLost, setHasLost] = useState(false);

  const youLose = () => {
    setHasLost(true);
  }
  const goToNextLevel = () => {
    setLevel(level + 1);
    setHasCompleted(false);
  };

  const handleComplete = () => {
    if (!maps[level + 1]) {
      setTimeout(() => setHasWon(true), 2000);
      return;
    }
    setTimeout(() => setHasCompleted(true), 2000);
  }

  return (
    <Container>
      {!hasCompleted && !hasWon && !hasLost &&(
        <FaseWrapper>
          <Chronometer youLose={youLose} />
          <Fase
            map={maps[level]}
            onComplete={handleComplete}
          />
        </FaseWrapper>
      )}
      {hasCompleted && <ContinueButton onClick={goToNextLevel}>Próxima fase</ContinueButton>}
      {hasWon && <WinningText>Você ganhou!</WinningText>}
      {hasLost && <WinningText>Você perdeu!</WinningText>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const FaseWrapper = styled.div`
  width: 60vw;
`;
    
const WinningText = styled.div`
  height: 10%;
  width: 30%;
  border: none;
  background-color: red;
  color: white;
  font-size: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContinueButton = styled.button`
  height: 10%;
  width: 30%;
  border: none;
  background-color: red;
  color: white;
  font-size: 30px;
  border-radius: 10px;
  :hover {
    color: black;
  }
  :active {
    color: yellow;
  }
`;

export default Game;
