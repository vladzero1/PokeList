import styled from "@emotion/styled";
import React, { useState } from "react";
import { savePokemonImage } from "../../utils/pokemonDataHelper";
import { randomCatch } from "../../utils/randomizeCatch";
import { CatchResultSection } from "../CatchResultSection";

const CatchButton = styled.button({
  width: "96px",
  height: "96px",
  marginTop: "10px",
});

const ResultContainer = styled.div({});
const FlexContainer = styled.div({
  display: "flex",
  flexDirection: "column",
});
const CenteringContainer = styled.div({
  display: "flex",
  justifyContent: "center",
});

interface CatchPokemonSectionProps {
  name: string;
  image: string;
}

const CatchPokemonSection: React.FC<CatchPokemonSectionProps> = ({
  name,
  image,
}) => {
  // catch resul(RNG)
  const [isSuccess, setIsSuccess] = useState(false);
  // show Catch Result Section
  const [isShowResult, setIsShowResult] = useState(false);
  // for Catch Button
  const [isDisabled, setIsDisabled] = useState(false);
  // to know whether player still on progress of catching(giving nickname)
  const [isCatching, setIsCatching] = useState(false);

  const catchButtonHandler = () => {
    const catchIsSuccess = randomCatch(50);
    setIsSuccess(catchIsSuccess);
    setIsCatching(catchIsSuccess);
    setIsDisabled(catchIsSuccess);
    setIsShowResult(true);
  };
  return (
    <FlexContainer>
      <CenteringContainer>
        <ResultContainer>
          <CatchButton
            onClick={catchButtonHandler}
            disabled={isDisabled}
          >
            Catch!
          </CatchButton>
        </ResultContainer>
      </CenteringContainer>

      {isShowResult ? (
        <CatchResultSection
          isCatching={isCatching}
          isSuccess={isSuccess}
          name={name}
          onConfirm={() => {
            savePokemonImage(name, image);
            setIsDisabled(!isDisabled);
            setIsCatching(false);
          }}
        />
      ) : null}
    </FlexContainer>
  );
};

export default CatchPokemonSection;
