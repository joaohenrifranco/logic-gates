import  React from 'react';
import Fase from'./components/fase/fase';

function App() {
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
    if (!allFunc) {
      return false;
    }
    const { f1, f2, f3, f4 } = allFunc;
    
    if (f1 && f2 && f3 && f4) {
      console.log(!!f4(f3(f2(f1(1, 1), 1), 1), 1)); //funçã meramente ilustrativa
      return !!f4(f3(f2(f1(1, 1), 1), 1), 1);
    }
  }

  return (
    <div className="App">
      <Fase gates={gates} map={mapa} solution={solution} />
    </div>
  );
}

export default App;
