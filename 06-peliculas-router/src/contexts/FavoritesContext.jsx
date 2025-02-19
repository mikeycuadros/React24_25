import { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "./ToastContext";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { addToast } = useToast();
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    setFavorites((prev) => [...prev, movie]);
    addToast(`${movie.title} añadida a favoritos`, "success");
  };

  const removeFavorite = (movieId, title) => {
    setFavorites((prev) => {
      const newFavorites = prev.filter((movie) => movie.id !== movieId);
      addToast(`${title} eliminada de favoritos`, "info");
      return newFavorites;
    });
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const getFavorites = () => favorites;

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        getFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
