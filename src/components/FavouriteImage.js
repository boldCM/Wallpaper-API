import "./FavouriteImage.css";
import React from "react";
// import src from "*.avif";

export default function FavouriteImage() {
  return (
    <div className="favouriteCard">
      <img
        className="favouriteCard__img"
        src="https://source.unsplash.com/UjD08DRW24E"
        alt="Something's happening"
      />
    </div>
  );
}
