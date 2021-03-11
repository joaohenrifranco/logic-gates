import React, { useState } from "react";
import styled from "styled-components";
import Fase from "../components/fase/fase";
import { maps } from "./maps.js";

function Game() {
  const [level, setLevel] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);

  const goToNextLevel = () => {
    setLevel(level + 1);
    setHasCompleted(false);
  };


  return (
    <Container>
      {!hasCompleted && (
        <FaseWrapper>
          <Fase
            map={maps[level]}
            onComplete={() => setHasCompleted(true)}
          />
        </FaseWrapper>
      )}
      {hasCompleted && <ContinueButton onClick={goToNextLevel}>Próxima fase</ContinueButton>}
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
