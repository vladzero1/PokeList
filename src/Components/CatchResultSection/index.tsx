import styled from "@emotion/styled";
import React, { useState } from "react";
import { savePokemon } from "../../utils/pokemonDataHelper";
import TextWrapper from "../TextWrapper";

const WarningText = styled.span({
  color: "red",
});

interface CatchResultSectionProps {
  isCatching: boolean;
  isSuccess: boolean | null;
  name: string;
  onConfirm: Function;
}

export const CatchResultSection: React.FC<CatchResultSectionProps> = ({
  isCatching,
  isSuccess,
  name,
  onConfirm,
}) => {
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState<Error | null>(null);

  return (
    <>
      {isSuccess ? (
        <>
          <TextWrapper>
            <span>Success! Give {name} an unique nickname</span>
          </TextWrapper>
          <div>
            <label>Nickname: </label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            />
            <button
              type="submit"
              onClick={() => {
                try {
                  savePokemon(name, nickname);
                  onConfirm();
                  setError(null);
                } catch (error) {
                  setError(error as Error);
                }
              }}
              disabled={!isCatching}
            >
              confirm
            </button>
          </div>
          {isCatching ? null : <span>{nickname} is now your friend!</span>}
          {error ? <WarningText>{error.message}</WarningText> : null}
        </>
      ) : (
        <TextWrapper>
          <span>Failure! </span>
          <span>{name} broke the PokeBall</span>
        </TextWrapper>
      )}
    </>
  );
};
