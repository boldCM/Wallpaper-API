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
    const oldFavourites = JSON.parse(localStorage.getItem("favourites")) || [];

    const isFavourite = oldFavourites.includes(imgId);

    if (isFavourite) {
      return;
    }

    const newFavourites = [...oldFavourites, imgId];
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
