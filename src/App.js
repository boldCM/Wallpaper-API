import "./global.css";
import "./App.css";
import ImagePreview from "./components/ImagePreview";
import { useState } from "react";
import { getRandomImage } from "./api/getRandomImage";

import FavouriteImageList from "./components/FavouriteImageList";

function App() {
  const [randomImage, setRandomImage] = useState(null);

  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }

  function handleClickFavourites() {
    const photoId = randomImage.id;
    let favourites = null;

    try {
      favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    } catch (error) {
      console.error(error);
      favourites = [];
    }

    if (favourites.includes(photoId)) {
      return;
    }

    const newFavourites = [...favourites, photoId];
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
  }

  const getFavouritesId = () => {
    let favourites = null;

    try {
      favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    } catch (error) {
      console.error(error);
      favourites = [];
    }

    return favourites;
  };

  return (
    <main>
      <button className="btn" onClick={() => handleClick()}>
        Get Random Image
      </button>
      {randomImage && (
        <ImagePreview
          src={randomImage.urls.regular}
          alt={randomImage.alt_description}
          author={randomImage.user.name}
          onClickFavourites={() => handleClickFavourites()}
        />
      )}
      <div>
        {
          /* <FavouriteImage photoId={"Z68huLIdevQ"} /> */
          <FavouriteImageList photoIds={getFavouritesId()} />
        }
      </div>
    </main>
  );
}

export default App;
