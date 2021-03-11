import React, {useState} from "react";
import styled from "styled-components";
import Fase from "../components/fase/fase";
import { maps } from './maps.js'

function Game() {
  const [level, setLevel] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);


  const goToNextLevel = () => {
    setLevel(level + 1)
    setHasCompleted(false)
  }

  return (
    <Container>
      <FaseWrapper>
        <Fase map={maps[level]} onComplete={() => setHasCompleted(true)} />
      </FaseWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FaseWrapper = styled.div`
  width: 60vw;
`

export default Game;
