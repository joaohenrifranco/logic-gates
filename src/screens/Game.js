import React, { useState } from "react";
import styled from "styled-components";
import Fase from "../fase/Fase";
import { maps } from "./maps.js";

function Game() {
  const [level, setLevel] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [hasWon, setHasWon] = useState(false);

  const goToNextLevel = () => {
    setLevel(level + 1);
    setHasCompleted(false);
  };

  const handleComplete = () => {
    if (!maps[level + 1]) {
      setHasWon(true);
      return;
    }
    setTimeout(() => setHasCompleted(true), 2000);
  }

  return (
    <Container>
      {!hasCompleted && !hasWon && (
        <FaseWrapper>
          <Fase
            map={maps[level]}
            onComplete={handleComplete}
          />
        </FaseWrapper>
      )}
      {hasCompleted && <ContinueButton onClick={goToNextLevel}>Próxima fase</ContinueButton>}
      {hasWon && <WinningText>Você ganhou!</WinningText>}
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
