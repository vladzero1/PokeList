import React from "react";
import { render, screen } from "@testing-library/react";
import { CatchResultSection } from "./index";

describe("Catch Result Section", () => {
  it("renders properly during success on catching", () => {
    render(
      <CatchResultSection
        isCatching={false}
        isSuccess={true}
        name={"Bulbasaur"}
        onConfirm={() => {}}
      />
    );
    const description = screen.getByText("Nickname:");
    expect(description).toBeVisible();
  });
});
