import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CatchPokemon from "./index";

describe("Catch Pokemon Section", () => {
  beforeEach(() => {
    render(<CatchPokemon name={"bulbasaur"} image={"/"} />);
  });
  test("if Catch Button clicked", () => {
    const handleClick = jest.fn();
    const catchButton = screen.getByRole("button", { name: "Catch!" });
    catchButton.onclick = handleClick;
    fireEvent(catchButton, new MouseEvent("click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
