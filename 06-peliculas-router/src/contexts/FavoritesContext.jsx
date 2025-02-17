import { useState } from "react";
import { createContext } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider() {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (movie) => {
    if (favorites.some((movie) => movie.id === movie.id)) {
      return;
    }
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };
}
