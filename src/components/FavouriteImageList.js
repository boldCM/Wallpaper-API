import React from "react";
import FavouriteImage from "./FavouriteImage";
import "./FavouriteImageList.css";

export default function FavouriteImageList({ photoIds }) {
  return (
    <div className="FavouriteImageList">
      {photoIds.map((photoId) => (
        <FavouriteImage key={photoId} photoId={photoId} />
      ))}
    </div>
  );
}
