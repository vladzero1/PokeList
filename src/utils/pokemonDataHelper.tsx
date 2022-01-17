import { MyPokemonData, PokemonsImage } from "../Types";

export const saveRawPokemonData = (data: MyPokemonData) => {
  const stringifyData = JSON.stringify(data);
  localStorage.setItem("MyPokemons", stringifyData);
  return true;
};

export const savePokemon = (name: string, nickname: string) => {
  const myPokemons = localStorage.getItem("MyPokemons");
  if (nickname === "") {
    throw Error("Nickname must not be empty");
  }
  if (myPokemons === null) {
    //make new Data
    const newMyPokemons = {
      [name]: [nickname],
    };
    const data = JSON.stringify(newMyPokemons);
    localStorage.setItem("MyPokemons", data);
  } else {
    //inserting the new Nicknames
    const newMyPokemons: MyPokemonData = JSON.parse(myPokemons);
    const pokemonNicknames = newMyPokemons[name];
    //make sure the data for specific pokemon is exist
    if (pokemonNicknames) {
      if (pokemonNicknames.some((currNickname) => currNickname === nickname)) {
        throw Error("Nickname is already used");
      }
      pokemonNicknames.push(nickname);
      newMyPokemons[name] = pokemonNicknames;
    } else {
      newMyPokemons[name] = [nickname];
    }
    saveRawPokemonData(newMyPokemons);
  }
  return true;
};

export const loadMyPokemons = () => {
  const myPokemons = localStorage.getItem("MyPokemons");
  const data: MyPokemonData = myPokemons ? JSON.parse(myPokemons) : {};
  return data;
};

export const removePokemon = (
  data: MyPokemonData,
  name: string,
  nickname: string
) => {
  const index = data[name].findIndex(
    (pokemonNickname) => pokemonNickname === nickname
  );
  data[name].splice(index, 1);
  if (data[name].length === 0) {
    delete data[name];
  }
  return data;
};

export const savePokemonImage = (name: string, image: string) => {
  const pokemonsImage = localStorage.getItem("pokemonsImage");
  if (pokemonsImage === null) {
    //make new Data
    const newMyPokemons = {
      [name]: image,
    };
    const data = JSON.stringify(newMyPokemons);
    localStorage.setItem("pokemonsImage", data);
  } else {
    const pokemonImageObj: PokemonsImage = JSON.parse(pokemonsImage);
    pokemonImageObj[name] = image;
    const data = JSON.stringify(pokemonImageObj);
    localStorage.setItem("pokemonsImage", data);
  }
};

export const loadMyPokemonsImage = () => {
  const pokemonsImage = localStorage.getItem("pokemonsImage");
  const data: PokemonsImage = pokemonsImage ? JSON.parse(pokemonsImage) : {};
  return data;
};
