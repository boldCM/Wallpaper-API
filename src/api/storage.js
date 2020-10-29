export function getFavourites() {
  let favourites = null;

  try {
    favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  } catch (error) {
    console.error(error);
    favourites = [];
  }
  return favourites;
}
