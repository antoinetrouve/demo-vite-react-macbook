export type Options = {
  processors: Information[];
  memories: Information[];
  gpus: Information[];
  storages: Information[];
  finalCut: Information;
  logicPro: Information;
};

export type Information = {
  name: string;
  price: number;
};

export function FetchData(): Options {
  const options = {
    processors: [
      {
        name: "Processeur Intel Core i7 hexacœur de 9e génération à 2,6 GHz (Turbo Boost jusqu’à 4,5 GHz)",
        price: 0,
      },
      {
        name: "Processeur Intel Core i9 8 cœurs de 9e génération à 2,4 GHz (Turbo Boost jusqu’à 5 GHz)",
        price: 360,
      },
    ],
    memories: [
      { name: "16 Go de mémoire DDR4 à 2 400 MHz", price: 0 },
      { name: "32 Go de mémoire DDR4 à 2 400 MHz", price: 480 },
    ],
    gpus: [
      { name: "Radeon Pro 555X avec 4 Go de mémoire GDDR5", price: 0 },
      { name: "Radeon Pro 560X avec 4 Go de mémoire GDDR5", price: 120 },
    ],
    storages: [
      { name: "SSD de 256 Go", price: 0 },
      { name: "SSD de 512 Go", price: 240 },
      { name: "SSD de 1 To", price: 480 },
      { name: "SSD de 2 To", price: 960 },
      { name: "SSD de 4 To", price: 1920 },
    ],
    finalCut: {
      name: "Final Cut Pro X",
      price: 329.99,
    },
    logicPro: {
      name: "Logic Pro X",
      price: 229.99,
    },
  };

  return options;
}
