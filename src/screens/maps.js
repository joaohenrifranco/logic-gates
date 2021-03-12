export const maps = [
  {
    rows: 3,
    columns: 5,
    postions: [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 0],
    ],
    connections: [
      [
        [0, 0],
        [0, 1, 1],
      ], //a conexão é entre duas posições, sendo [saida]para[entrada],
      [
        [0, 1],
        [0, 2, 1],
      ], //[entrada] tem um terceiro indice para a porta: 0->em cima, 1->abaixo
      [
        [0, 2],
        [0, 3, 0],
      ],
      [
        [1, 0],
        [0, 3, 1],
      ],
      [
        [0, 3],
        [1, 3, 1],
      ],
    ],
    default:[
      [0,0,1,0],  //[posição x, y, porta de cima, porta de baixo]
      [1,0,"x",0],  // [_,_,1,0] 1:vermelho, 0:azul
      [0,2,"x","x"], //[_,_,1,'x'] nem 1 nem 0, transparent
    ],
    lamp: [1, 3], //posição da lâmpada
    solution: (allFunc) => {
      if (!allFunc) {
        return false;
      }
      const { f0, f1, f2, f3, f4 } = allFunc;

      if (f0 && f1 && f2 && f3 && f4) {
        return () => !!f3(f4(1, 1), f2(1, f1(1, f0(0,1)) ));
      }
    },
    gates: ["AND1", "AND1", "OR0", "AND", "OR"],
  },
  {
    rows: 6,
    columns: 6,
    postions: [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 3],
      [1, 4],
      [2, 0],
      [2, 1],
      [2, 2],
      [3, 0],
      [3, 1],
    ],
    connections: [
      [
        [0, 0],
        [0, 1, 0],
      ],
      [
        [1, 0],
        [0, 1, 1],
      ],
      [
        [0, 1],
        [0, 2, 1],
      ],
      [
        [2, 0],
        [2, 1, 0],
      ],
      [
        [3, 0],
        [3, 1, 1],
      ],
      [
        [3, 1],
        [2, 1, 1],
      ],
      [
        [2, 1],
        [2, 2, 1],
      ],
      [
        [0, 2],
        [1, 3, 0],
      ],
      [
        [2, 2],
        [1, 3, 1],
      ],
      [
        [1, 3],
        [1, 4, 1],
      ],
      [
        [1, 4],
        [3, 4, 1],
      ],
    ],
    lamp: [3, 4],
    default:[
      [0,0,"x",1],  //[posição x, y, porta de cima, porta de baixo]
      [0,2,0,"x"], //[_,_,1,'x'] nem 1 nem 0, transparent
      [1,0,"x",0],
      [2,0,0,1],
      [3,0,"x",1],
    ],
    solution: (allFunc) => {
      if (!allFunc) {
        return false;
      }
      const { f0, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10 } = allFunc;

      if (f0 && f1 && f2 && f4 && f5 && f6 && f7 && f8 && f9 && f10) {
        return () => !!f5(1,f4(f2(1,f1(f0(1,0),f3(1,1))),f8(1,f7(f6(1,0),f10(1,f9(1,0))))));
      }
    },
    gates: ["OR0", "AND", "AND","OR0", "AND", "AND","OR0", "AND", "AND","OR0", "AND", "AND"],
  },
];
