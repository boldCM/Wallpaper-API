import React from "react";
import ReactDOM from "react-dom";
import FavouriteImage from "./FavouriteImage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FavouriteImage photoID="SomeID" />, div);
});
