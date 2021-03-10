import React from "react";
import define from "./5cfe8598ee99cb6f@724";
import './fase.css';
const Notebook = require("@alex.garcia/observable-notebook-react")(React)

function Fase (props){
    const {gates,map, solution} = props;

    function solve(){
      //essa leve gambiarra é para tipar solution como f()
      return solution
    } 
    return (<Notebook
        define={define}
        targets= {["main"]} 
        redefine= {{
          "data3":gates,
          "mapa":map,
          "solution":solve
          }}                 
        />
      );
};

export default Fase;