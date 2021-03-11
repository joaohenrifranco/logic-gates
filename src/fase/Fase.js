import React from "react";
import define from "./5cfe8598ee99cb6f@724";
import "./fase.css";
import Notebook from "@alex.garcia/observable-notebook-react";

const NotebookComponent = Notebook(React);

function Fase(props) {
  const { map, onComplete } = props;

  map.onComplete = onComplete;

  return (
    <NotebookComponent
      key={map}
      define={define}
      targets={["main"]}
      redefine={Object.assign({
        width: 954,
        mapa: map,
      })}
    />
  );
}

export default Fase;
