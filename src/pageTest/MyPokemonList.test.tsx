import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import MyPokemonList from "../pages/MyPokemonList";

describe("My Pokemon List Page", () => {
  it("Render properly", () => {
    const pokemonCard = screen.getByText("You don't have any Pokemon");
    expect(pokemonCard).toBeDefined()
  });
});
