import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import React from "react";
import {
  PokemonTypesBackgroundColour,
  PokemonTypesFontColour,
} from "../../Constant";

type PokemonTypeBoxProps = {
  name: string;
} & React.HTMLAttributes<HTMLSpanElement>;

const PokemonTypeContainer: StyledComponent<
  {
    bgColor: string;
    color: string;
    theme?: Theme | undefined;
    as?: React.ElementType<any> | undefined;
  },
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
> = styled.span<{ bgColor: string; color: string }>`
  display: flex;
  justify-content: center;
  width: 70px;
  margin-right: 5px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-radius: 25px;
  border: 1px solid black;
`;

const PokemonTypeBox: React.FC<PokemonTypeBoxProps> = ({ name, ...props }) => {
  const bgColor =
    PokemonTypesBackgroundColour[
      name as keyof typeof PokemonTypesBackgroundColour
    ];
  const fontColor =
    PokemonTypesFontColour[name as keyof typeof PokemonTypesBackgroundColour];
  return (
    <PokemonTypeContainer bgColor={bgColor} color={fontColor} {...props}>
      {name}
    </PokemonTypeContainer>
  );
};
export default PokemonTypeBox;
