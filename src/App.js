import React, { useState } from "react";
import Game from "./screens/Game";
import StartScreen from "./screens/StartScreen";

const APP_STATE = {
  START_SCREEN: 0,
  GAME: 1,
};

function App() {
  const [appState, setAppState] = useState(APP_STATE.START_SCREEN);

  if (appState === APP_STATE.START_SCREEN) {
    return <StartScreen onStart={() => setAppState(APP_STATE.GAME)} />;
  }

  return <Game />;
}

export default App;
