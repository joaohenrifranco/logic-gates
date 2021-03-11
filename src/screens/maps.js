export const maps = [
  {
    rows: 2,
    columns: 4,
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
    lamp: [1, 3], //posição da lâmpada
    solution: (allFunc) => {
      if (!allFunc) {
        return false;
      }
      const { f1, f2, f3, f4 } = allFunc;

      if (f1 && f2 && f3 && f4) {
        return () => !!f3(f4(1, 1), f2(f1(1, 1), 1));
      }
    },
    gates: ["AND1", "AND1", "OR0", "AND"],
  },
  {
    rows: 4,
    columns: 5,
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
    solution: (allFunc) => {
      if (!allFunc) {
        return false;
      }
      const { f1, f2, f3, f4 } = allFunc;

      if (f1 && f2 && f3 && f4) {
        return () => !!f3(f4(1, 1), f2(f1(1, 1), 1));
      }
    },
    gates: ["AND1", "AND1", "OR0", "AND"],
  },
];
