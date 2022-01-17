import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import withApollo from "../utils/ApolloHelper";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { PokemonListQuery } from "../query/PokemonList/query";
import { MyPokemonData, PokemonListQueryData } from "../Types";
import { loadMyPokemons } from "../utils/pokemonDataHelper";
import { useIntersectionObserver } from "../utils/IntersectionObserver";
import PokemonListCard from "../Components/PokemonListCard";
import LoadMoreButton from "../Components/LoadMoreButton/lazy";
import { ListContainer } from "../Components/ListContainer";

const PokemonList: NextPage = () => {
  // fetch more didn't reset loading status properly

  const { data, loading, error, fetchMore } = useQuery<PokemonListQueryData>(
    PokemonListQuery,
    {
      variables: { limit: 20, offset: 0 },
      notifyOnNetworkStatusChange: true,
    }
  );
  const [myPokemonData, setMyPokemonData] = useState<MyPokemonData>({});
  const MemoizedPokemonCard = React.memo(
    ({
      image,
      name,
      owned,
    }: {
      image: string;
      name: string;
      owned: number;
    }) => <PokemonListCard image={image} name={name} owned={owned} />
  );
  //to make sure we can build the project or it will stuck because of an error
  MemoizedPokemonCard.displayName = "Pokemon Card"; 
  
  // Pagination FetchMore updateQuery not used since it will trigger warning that the feature will be deleted on next release
  const loadMore = () => {
    if (data && data?.pokemons.count >= data?.pokemons.results.length) {
      fetchMore({
        variables: {
          limit: 20,
          offset: data.pokemons.nextOffset,
        },
        //#region code update Query if warning not issued
        // updateQuery: (prevData, { fetchMoreResult }) => {
        //   if (fetchMoreResult) {
        //     const data = {
        //       pokemons: {
        //         ...fetchMoreResult.pokemons,
        //         results: [
        //           ...prevData.pokemons.results,
        //           ...fetchMoreResult.pokemons.results,
        //         ],
        //       },
        //     };
        //     return data;
        //   }
        //   return prevData;
        // },
        //#endregion
      });
    }
  };
  const [target] = useIntersectionObserver({}, loadMore);
  useEffect(() => {
    setMyPokemonData(loadMyPokemons());
  }, []);
  return (
    <>
      <Head>
        <title>Pokemon List</title>
        <meta name="Description" content="Pokemon list on our database"></meta>
        <link rel="preconnect" href="https://graphql-pokeapi.graphcdn.app" />
        <link rel="dns-prefetch" href="https://raw.githubusercontent.com" />
      </Head>
      <ListContainer>
        {data?.pokemons.results.map(({ image, name }) => {
          const owned = myPokemonData
            ? myPokemonData[name]
              ? myPokemonData[name]?.length
              : 0
            : 0;
          return (
            <MemoizedPokemonCard
              image={image}
              name={name}
              owned={owned}
              key={name}
            />
          );
        })}
      </ListContainer>

      {error ? null : <LoadMoreButton target={target} isLoading={loading} />}
    </>
  );
};

export default withApollo({ ssr: false })(PokemonList);
