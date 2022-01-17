export type PokemonBasicData = {
  name: string;
  image: string;
};

export type PokemonListData = {
  count: number;
  nextOffset: number;
  prevOffset: number;
  results: PokemonBasicData[];
};
export type PokemonListQueryData = {
  pokemons: {
    count: number;
    nextOffset: number;
    prevOffset: number;
    results: PokemonBasicData[];
  };
};
export type PokemonMove = {
  move: {
    name: string;
  };
};
export type PokemonType = {
  type: {
    name: string;
  };
};

export type PokemonDetailQueryData = {
  pokemon: {
    id: string;
    name: string;
    sprites: {
      front_default: string;
    };
    types: PokemonType[];
  };
};

export type PokemonMoveQueryData = {
  pokemon: {
    id: string;
    name: string;
    moves: PokemonMove[];
  };
};

export type NavData = {
  description: string;
  url: string;
};

export type PokemonQueryData = {
  pokemon: {
    id: string;
    sprites: {
      front_default: string;
    };
  };
};

export type MyPokemonData = {
  [x: string]: string[];
};

export type PokemonsImage = {
  [x: string]: string;
};
