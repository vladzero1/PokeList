import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import React from "react";
import {
  PokemonTypesBackgroundColour,
  PokemonTypesFontColour,
} from "../../Constant";
import { PokemonDetailQueryData } from "../../Types";
import PokemonMoveDetail from "../PokemonMoveDetail";
import PokemonTypeBox from "../PokemonTypeBox";
import TextWrapper from "../TextWrapper";

const ContentContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "290px",
  border: "1px solid black",
  borderRadius: "5%",
  alignItems: "center",
  backgroundColor: "white",
  marginTop: "10px",
});
const PokemonImage = styled.img({
  width: "96px",
  height: "96px",
});

const OuterCard = styled.div<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  border: 1px solid black;
  align-items: center;
  margin-top: 10px;
  background-color: ${({ bgColor }) => bgColor};
`;

interface PokemonDetailCardProps {
  data: PokemonDetailQueryData | undefined;
}

const PokemonDetailCard: React.FC<PokemonDetailCardProps> = ({ data }) => {
  const bgColor =
    PokemonTypesBackgroundColour[
      (data?.pokemon.types[0].type.name ||
        "normal") as keyof typeof PokemonTypesBackgroundColour
    ];
  const fontColor =
    PokemonTypesFontColour[
      (data?.pokemon.types[0].type.name ||
        "normal") as keyof typeof PokemonTypesBackgroundColour
    ];
  return (
    <OuterCard bgColor={bgColor}>
      <ContentContainer aria-label="Pokemon Detail Container">
        <PokemonImage
          loading="eager"
          src={data?.pokemon.sprites.front_default}
          alt="Pokemon Image"
        />
        <TextWrapper style={{ marginBottom: "5px" }}>
          {data?.pokemon.name}{" "}
          {data?.pokemon.types.map(({ type }) => {
            return <PokemonTypeBox name={type.name} key={type.name} />;
          })}
        </TextWrapper>
      </ContentContainer>
      <PokemonMoveDetail
        name={data ? data.pokemon.name : ""}
        fontColor={fontColor}
      />
    </OuterCard>
  );
};

export default PokemonDetailCard;
