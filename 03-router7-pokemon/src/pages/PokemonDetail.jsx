import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
// para traer la rota que llega a este componente usamos useParams y useNavigate
const PokemonDetail = () => {
  // pokemon trae la data a traves de la funcionalidad loader de react-router-dom
  const pokemon = useLoaderData();
  // hook para navergar entre rutas (navegacion programatica)
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        {/* Boton para volver hacia atras */}
        <button
          className="mb-4 text-blue-400 hover:text-blue-800"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
        {/* Imagen del pokemon */}
        <img
          className="w-48 h-48 mx-auto"
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
        <h1 className="text-3xl font-bold text-center mt-4">{pokemon.name}</h1>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <h2 className="text-xl font-semibold mb-2">Estadisticas</h2>
          <div>
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name}>
                <p className="capitalize">
                  {stat.stat.name}: {stat.base_stat}
                </p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Tipos</h2>
            {pokemon.types.map((type) => (
              <div className="flex gap-2">
                <p key={type.type.name} className="capitalize">
                  {type.type.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button
          className="bg-red-500 text-white px-4 py-4 rounded hover:bg-slate-900 justify-center"
          onClick={() => {
            console.log("Añadido a favoritos");
          }}
        >
          Añadir a favoritos
        </button>
      </div>
    </div>
  );
};

export default PokemonDetail;
