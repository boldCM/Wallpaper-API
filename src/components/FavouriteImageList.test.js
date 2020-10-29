import React from "react";
import { render, screen } from "@testing-library/react";
import FavouriteImageList from "./FavouriteImageList";

it("render multiple FavouriteImages based on photoIds", () => {
  const photoIds = ["UjD08DRW24E", "k38v31SkZdo", "AW_P_NU9MI8"];
  render(<FavouriteImageList photoIds={photoIds} />);
  const imageElements = screen.getAllByRole("img");
  expect(imageElements.length).toBe(photoIds.lengths);
});
