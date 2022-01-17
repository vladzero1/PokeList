import { gql } from "@apollo/client";

// self reminder
//change this to graphql file extension after complete this for best practice
export const PokemonListQuery = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      nextOffset
      prevOffset
      results {
        name
        image
      }
    }
  }
`;