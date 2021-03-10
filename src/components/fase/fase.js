import React from "react";
import define from "./5cfe8598ee99cb6f@724";
import "./fase.css";
import Notebook from "@alex.garcia/observable-notebook-react";

const NotebookComponent = Notebook(React);

function Fase(props) {
  const { gates, map, solution } = props;

  function solve() {
    //essa leve gambiarra é para tipar solution como f()
    return solution;
  }
  return (
    <NotebookComponent
      define={define}
      targets={["main"]}
      redefine={{
        data3: gates,
        mapa: map,
        solution: solve,
      }}
    />
  );
}

export default Fase;
