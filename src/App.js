import  React from 'react';
import Board from './components/board';
import Row from './components/row';
import './App.css';
import Fase from'./components/fase/fase';

function App() {

  const board_CI = [
    ["AND","AND","AND", "AND"],
    ["AND","","AND", "AND"],
    ["","AND","AND", ""],
    ["AND","AND","AND", "AND"],
]

  const deck = ["OR", "OR", "OR"]

  const mapa = {
    "rows":2,
    "columns":4,
    "postions":[[0,0],[0,1],[0,2],[0,3],[1,0]],
    "connections":[
      [[0,0],[0,1,1]], //a conexão é entre duas posições, sendo [saida]para[entrada],
      [[0,1],[0,2,1]], //[entrada] tem um terceiro indice para a porta: 0->em cima, 1->abaixo
      [[0,2],[0,3,0]],
      [[1,0],[0,3,1]],
      //[[0,3],[1,3,1]]
    ],
    "lamp":[1,3] //posição da lâmpada
    
  };

  const gates = ['AND1','AND1','OR0','AND'];

  function solution(allFunc) {
    if (allFunc) {
      let f0 = allFunc.f0;
      let f1 = allFunc.f1;
      let f2 = allFunc.f2;
      let f3 = allFunc.f3;
      let f4 = allFunc.f4;
      if (f1 && f2 && f3 && f4) {
        console.log(!!f4(f3(f2(f1(1, 1), 1), 1), 1)); //funçã meramente ilustrativa
        return !!f4(f3(f2(f1(1, 1), 1), 1), 1);
      }
    }
    else return false
  }

  return (
    <div className="App">
      {/* <Board matrix={board_CI} /> */}
      <div className="deck" >
      <Row blocks={deck}/>
      <Fase 
      gates={gates}
      map = {mapa}
      solution={solution}

      ></Fase>
      </ div >
    </div>
  );
}

export default App;
