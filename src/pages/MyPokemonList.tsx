import React, { useEffect, useState } from "react";
import { MyPokemonListCard } from "../Components/MyPokemonListCard";
import { MyPokemonData, PokemonsImage } from "../Types";
import {
  loadMyPokemons,
  loadMyPokemonsImage,
  removePokemon,
  saveRawPokemonData,
} from "../utils/pokemonDataHelper";
import withApollo from "../utils/ApolloHelper";
import { NextPage } from "next";
import { ListContainer } from "../Components/ListContainer";
import styled from "@emotion/styled";

const DescriptionContainer = styled.div({
  minHeight: "1000px",
});

const MyPokemonList: NextPage = () => {
  const [myPokemonsData, setMyPokemonsData] = useState<MyPokemonData>({});
  // this one is using local storage because the graphql API no query by array of pokemons name
  // next js cannot use local storage outside useEffect which restrict the use of useQuery of pokemon after load the data
  // can be improved by add the query said above or customize the nextJS to support full CSR
  const [pokemonsImageData, setPokemonsImageData] = useState<PokemonsImage>({});
  const allPokemonId = Object.keys(myPokemonsData || {});

  useEffect(() => {
    setMyPokemonsData(loadMyPokemons());
    setPokemonsImageData(loadMyPokemonsImage());
  }, []);

  if (allPokemonId.length > 0) {
    return (
      <ListContainer>
        {allPokemonId.map((name) => {
          return myPokemonsData[name].map((nickname) => {
            return (
              <MyPokemonListCard
                image={pokemonsImageData[name]}
                name={name}
                nickname={nickname}
                onRelease={() => {
                  const newData = removePokemon(myPokemonsData, name, nickname);
                  saveRawPokemonData(newData);
                  setMyPokemonsData({ ...newData });
                }}
                key={nickname}
              />
            );
          });
        })}
      </ListContainer>
    );
  } else {
    return (
      <DescriptionContainer>
        <span>{`You don't have any Pokemon. Time to Catch Some!`}</span>
      </DescriptionContainer>
    );
  }
};

export default withApollo({ ssr: false })(MyPokemonList);
