import { gql } from "@apollo/client";

// want to query move id too but some weird behaviour where the name output is element instead
export const pokemonDetailQuery = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

export const pokemonMovesQuery = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      moves {
        move {
          name
        }
      }
    }
  }
`;
