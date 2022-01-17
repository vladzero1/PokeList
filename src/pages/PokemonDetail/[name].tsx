import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import CatchPokemonSection from "../../Components/CatchPokemonSection/lazy";
import { Loader } from "../../Components/Loader";
import PokemonDetailCard from "../../Components/PokemonDetailCard";
import { pokemonDetailQuery } from "../../query/PokemonDetail/query";
import { PokemonDetailQueryData } from "../../Types";
import withApollo from "../../utils/ApolloHelper";

const CenteringContainer = styled.div({
  display: "flex",
  justifyContent: "center",
});

const PokemonDetailContainer = styled.div({
  minHeight: "832px",
  display: "flex",
  flexDirection: "column",
});

const PokemonDetail: NextPage = ({}) => {
  const router = useRouter();
  const { name } = router.query;
  const { data, loading } = useQuery<PokemonDetailQueryData>(
    pokemonDetailQuery,
    {
      variables: { name: name || "" },
    }
  );
  return (
    <PokemonDetailContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Head>
            <title>{name}</title>
            <link
              rel="preconnect"
              href="https://graphql-pokeapi.graphcdn.app"
            />
            <meta
              name="Description"
              content="This Page Contain details of Selected Pokemon"
            ></meta>
          </Head>
          <CenteringContainer>
            <PokemonDetailCard data={data} />
          </CenteringContainer>

          <CenteringContainer>
            <CatchPokemonSection
              id={data ? data.pokemon.id : ""}
              name={data ? data?.pokemon.name : ""}
              image={data ? data?.pokemon.sprites.front_default : ""}
            />
          </CenteringContainer>
        </>
      )}
    </PokemonDetailContainer>
  );
};

export default withApollo({ ssr: true })(PokemonDetail);
