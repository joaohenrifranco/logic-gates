import React from "react";
import Board from "./components/board";
import Row from "./components/row";
import "./App.css";

function App() {
  const board_CI = [
    ["AND", "AND", "AND", "AND"],
    ["AND", "", "AND", "AND"],
    ["", "AND", "AND", ""],
    ["AND", "AND", "AND", "AND"],
  ];

  const deck = ["OR", "OR", "OR"];

  return (
    <div className="App">
      <Board matrix={board_CI} />
      <div className="deck">
        <Row blocks={deck} />
      </div>
    </div>
  );
}

export default App;
