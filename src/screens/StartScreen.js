import React from "react";
import styled from "styled-components";

function StartScreen(props) {
  const { onStart } = props;

  return (
    <Container>
      <Title>The Final Light</Title>
      <StartButton onClick={onStart}>Jogar!</StartButton>
    </Container>
  );
}

const Title = styled.h1`
  font-size: 3em;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: white;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(https://wallpaperaccess.com/full/28951.jpg);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
`;

const StartButton = styled.button`
  height: 10%;
  width: 30%;
  border: none;
  background-color: white;
  color: black;
  font-size: 30px;
  border-radius: 10px;
  :hover {
    color: black;
  }
  :active {
    color: yellow;
  }
`;

export default StartScreen;
