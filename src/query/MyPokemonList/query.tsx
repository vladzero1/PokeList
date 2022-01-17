import { gql } from "@apollo/client";

export const PokemonQuery = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      sprites {
        front_default
      }
    }
  }
`;
