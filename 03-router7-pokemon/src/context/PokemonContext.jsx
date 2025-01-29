import { createContext, useContext, useState } from "react";

// creacion del contexto
const PokemonContext = createContext();

// creacion del proveedor del contexto
export function PokemonProvider({ children }) {
  // hooks
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (pokemon) => {
    // verificamos si el pokemon ya esta en favoritos
    if (favorites.some((poke) => poke.id === pokemon.id)) {
      // lanzamos error con sonner
      return;
    }
    // si no esta repetido lo agregamos
    setFavorites((prevFavoritos) => [...prevFavoritos, pokemon]);
  };

  const removeFromFavorites = (pokemonId) => {};

  // funcionas

  return (
    <PokemonContext.Provider value={{}}>{children}</PokemonContext.Provider>
  );
}

// me creo un hook personalizado para cargar el contexto
export const usePokemon = () => {
  // para usar el contexto hacia:
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error(
      "usePokemon debe estar dentro del proveedor PokemonProvider"
    );
  }
};
