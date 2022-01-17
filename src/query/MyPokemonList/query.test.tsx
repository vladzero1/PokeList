import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

describe("PokemonList", () => {
  it("Render Load properly", () => {
    render(<MockedProvider ></MockedProvider>);
    const pokemonCard = screen.getByText("charmander");
  });
});
