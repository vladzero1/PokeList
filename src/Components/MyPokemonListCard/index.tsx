import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { CardContainer } from "../CardContainer";

//#region styled COmponent
const PokemonIcon = styled.img({
  width: "96px",
  height: "96px",
  border: "5px solid #EFC050",
});
const PokemonInfo = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: "5px",
  width: "100%",
});
const PokemonName = styled.span({
  width: "fit-content",
});
const ReleaseButtonContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
const ReleaseButton = styled.button({
  width: "70px",
  height: "30px",
});
const PokemonInfoContainer = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "0px 5px",
});
//#endregion

interface MyPokemonListCardProps {
  image?: string;
  name: string;
  nickname: string;
  onRelease: Function;
}

export const MyPokemonListCard: React.FC<MyPokemonListCardProps> = ({
  image,
  name,
  nickname,
  onRelease,
}) => {
  return (
    <CardContainer>
      <Link href={`/PokemonDetail/${name}`} passHref={true}>
        <PokemonIcon src={image} alt="Pokemon Icon" />
      </Link>
      <PokemonInfoContainer>
        <Link href={`/PokemonDetail/${name}`} passHref={true}>
          <PokemonInfo>
            <PokemonName>
              {nickname} ({name})
            </PokemonName>
          </PokemonInfo>
        </Link>
        <ReleaseButtonContainer>
          <ReleaseButton
            onClick={() => {
              onRelease();
            }}
          >
            Release
          </ReleaseButton>
        </ReleaseButtonContainer>
      </PokemonInfoContainer>
    </CardContainer>
  );
};
