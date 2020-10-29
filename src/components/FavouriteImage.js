import "./FavouriteImage.css";
import React from "react";
import IconButton from "./IconButton";
// import getFavourites from "../api/storage";

export default function FavouriteImage({ photoId }) {
  // function deleteFavourites() {
  //   var { favourites, photoId } = getFavourites();

  //   if (favourites.includes(photoId)) {
  //     return;
  //   }

  //   localStorage.setItem("favourites", JSON.stringify(newFavourites));
  // }

  return (
    <div className="favouriteCard">
      <IconButton
        className="btn__icon"
        onClick={() => {
          alert("helloe");
        }}
      >
        ❤
      </IconButton>
      <img
        className="favouriteCard__img"
        src={`https://source.unsplash.com/${photoId}`}
        alt={`Favourite ${photoId}`}
      />
    </div>
  );
}
