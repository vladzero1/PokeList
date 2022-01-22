import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { CardContainer } from "../CardContainer";

export type PokemonListCardProps = {
  image: string;
  name: string;
  owned: number;
};

const PokemonIcon = styled.img({
  width: "98px",
  height: "98px",
  border: "5px solid #EFC050",
});
const PokemonInfo = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: "5px",
});

const PokemonListCard: React.FC<PokemonListCardProps> = ({
  image,
  name,
  owned,
}): JSX.Element => {
  return (
    <Link href={`/PokemonDetail/${name}`} passHref={true}>
      <CardContainer>
        <PokemonIcon src={image} alt={"Pokemon Image"}></PokemonIcon>

        <PokemonInfo>
          <div aria-label="Pokemon Name">{name}</div>
          <span>owned: {owned}</span>
        </PokemonInfo>
      </CardContainer>
    </Link>
  );
};

export default PokemonListCard;
