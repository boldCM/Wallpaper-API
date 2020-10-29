import React from "react";
import ReactDOM from "react-dom";
import FavouriteImage from "./FavouriteImage";
import { render, screen } from "@testing-library/react";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FavouriteImage photoId="UjD08DRW24E" />, div);
});
it("renders img from unsplash", () => {
  render(<FavouriteImage photoId="UjD08DRW24E" />);
  const imageElement = screen.getByRole("img");
  expect(imageElement).toBeInTheDocument();
  expect(
    imageElement.src.startsWith("https://source.unsplash.com/UjD08DRW24E")
  ).toBeTruthy();
});
