import { createContext, useContext, useState } from "react";

// creacion del contexto
const PokemonContext = createContext();

// creacion del proveedor del contexto
export function PokemonProvider({ children }) {
  // hooks
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (pokemon) => {};

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
