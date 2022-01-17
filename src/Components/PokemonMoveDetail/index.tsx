import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { pokemonMovesQuery } from "../../query/PokemonDetail/query";
import { PokemonMoveQueryData } from "../../Types";

interface PokemonMoveDetailProps {
  name: string;
  fontColor: string;
}

const MoveName = styled.span<{ fontColor: string }>`
  border-bottom: 1px solid black;
  width: 100%;
  color: ${({ fontColor }) => fontColor};
  padding: 5px 0px;
`;

const ShowMoveButton = styled.button({
  marginTop: "5px",
  width: "100%",
});

const PokemonMoveDetail: React.FC<PokemonMoveDetailProps> = ({
  name,
  fontColor,
}) => {
  const [isShowing, setIsShowing] = useState(false);
  const { data, loading } = useQuery<PokemonMoveQueryData>(pokemonMovesQuery, {
    variables: { name: name },
  });
  return (
    <>
      <ShowMoveButton
        disabled={loading}
        onClick={() => {
          setIsShowing(!isShowing);
        }}
      >
        {isShowing ? "Hide all Moves" : "Show All Moves"}
      </ShowMoveButton>
      {isShowing
        ? data?.pokemon.moves.map(({ move }) => {
            return (
              <MoveName key={move.name} fontColor={fontColor}>
                {move.name}
              </MoveName>
            );
          })
        : null}
    </>
  );
};

export default PokemonMoveDetail;
