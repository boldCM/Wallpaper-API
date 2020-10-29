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

  // const createImageList= getFavourites.map((photoId)=>
  // <li key={getFavourites.toString()}>{photoId}</li>
  // ich habe h kein value definiert, ist das schlimm?
}
