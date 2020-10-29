import "./FavouriteImage.css";
import React from "react";
// import src from "*.avif";
import IconButton from "./IconButton";

export default function FavouriteImage({ photoId, onClickFavourites }) {
  return (
    <div className="favouriteCard">
      <IconButton onClick={onClickFavourites}>❤</IconButton>
      <img
        className="favouriteCard__img"
        src={`https://source.unsplash.com/${photoId}`}
        alt={`Favourite ${photoId}`}
      />
    </div>
  );
}
