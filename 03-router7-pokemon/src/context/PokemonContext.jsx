import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

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
      toast.error(`${pokemon.name} ya se encuentra en tus favoritos`, {
        style: {
          background: "red",
          color: "white",
          border: "2px solid red",
        },
      });
      return;
    }
    // si no esta repetido lo agregamos
    setFavorites((prevFavorites) => [...prevFavorites, pokemon]);
    // sonner de todo ok
    toast.success(` ${pokemon.name} agregado a tus favoritos`, {
      style: {
        background: "#fee2e2",
        color: "black",
        border: "2px solid red",
      },
      icon: "👌",
    });
  };

  const removeFromFavorites = (pokemonId) => {
    // filtramos los favoritos que no coincidan con el id del pokemon a eliminar
    setFavorites((prevFavorites) =>
      prevFavorites.filter((pokemon) => pokemon?.id !== pokemonId)
    );
    // sonner de pokemon borrado de favoritos
    toast.success(`${pokemon.name} eliminado de tus favoritos`, {
      style: {
        background: "#fee2e2",
        color: "white",
        border: "2px solid red",
      },
      icon: "🗑️",
    });
  };

  // funcionas

  return (
    <PokemonContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </PokemonContext.Provider>
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
  return context;
};
