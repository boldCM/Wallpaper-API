import React from "react";
import "./ImagePreview.css";
import IconButton from "./IconButton";

export default function ImagePreview({ src, alt, author, onClickFavourites }) {
  return (
    <div className="imageContainer">
      <IconButton onClick={onClickFavourites}>❤</IconButton>
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor"> Author: {author}</p>
    </div>
  );
}
