import { ApolloClient, InMemoryCache } from "@apollo/client";
import { withApollo as createWithApollo } from "next-apollo";
import { PokemonListData } from "../Types";

// using Type Policies since fetchmore updateQuery warning
const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemons: {
            keyArgs: false,
            merge(
              existing: PokemonListData | undefined,
              incoming: PokemonListData
            ): PokemonListData {
              if (incoming.nextOffset === existing?.nextOffset) {
                return existing;
              }
              return {
                ...incoming,
                results: [...(existing?.results || []), ...incoming.results],
              };
            },
          },
        },
      },
    },
  }),
  uri: "https://graphql-pokeapi.graphcdn.app",
});

export default createWithApollo(client);
