import React from "react";
import { usePokemon } from "../context/PokemonContext";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/paths";

const Favorites = () => {
  const { favorites, removeFromFavorites } = usePokemon();

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Favoritos</h1>
        <p>No hay favoritos agregados.</p>
        <Link
          to={ROUTES.HOME}
          className="text-blue-500 hover:underline block mt-4"
        >
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Tus pokemons favoritos</h1>
      <div className="grid grid-cols-1 md:cols-2 lg:grid-cols-3 gap-4">
        {/* aqui renderizamos tarjetas con los pokemons favoritos */}
        {favorites.map((pokemon) => (
          <div
            key={pokemon.id}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg"
          >
            <img
              className="mx-auto h-16 w-16"
              src={pokemon.sprites.other.showdown.front_default}
              alt={pokemon.name}
            />
            <h2 className="text-xl capitalize font-semibold text-center mt-4">
              {pokemon.name}
            </h2>
            <div className="mt-4 space-y-2">
              <Link
                className="block w-full text-center bg-blue-500 text-white px-4 py-2"
                to={`${ROUTES.SEARCH}/${pokemon.name}`}
              >
                Ver detalles
              </Link>
              <button
                className="block w-full text-center bg-orange-400 text-white px-4 py-2"
                onClick={() => removeFromFavorites(pokemon.name)}
              >
                Eliminar de favoritos
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
