import "./global.css";
import "./App.css";
import ImagePreview from "./components/ImagePreview";
import { useState } from "react";
import { getRandomImage } from "./api/getRandomImage";

function App() {
  const [randomImage, setRandomImage] = useState(null);

  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }

  function handleClickFavourites() {
    const imgId = randomImage.id;
    let favourites = null;

    try {
      favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    } catch (error) {
      console.error(error);
      favourites = [];
    }

    if (favourites.includes(imgId)) {
      return;
    }

    const newFavourites = [...favourites, imgId];
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
  }

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
    </main>
  );
}

export default App;
