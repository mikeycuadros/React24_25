// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";

// const Search = () => {
//   const [search, setSearch] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsLoading(true);
//     try {
//       const response = await fetch(
//         `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
//       );
//       if (!response.ok) {
//         toast.error("Error al buscar el pokemon", {
//           style: {
//             background: "#fee2e2",
//             color: "black",
//             border: "2px solid red",
//           },
//           icon: "❌",
//         });
//         return;
//       }
//       console.log(await response.json());
//       // pinto una tarjeta con los detalles del pokemon
//       // o redirijo a una pagina de detalles
//       navigate(`/search/${search.toLowerCase()}`);
//     } catch (error) {
//       toast.error("Error al buscar el pokemon", {
//         style: {
//           background: "·fee2e2",
//           color: "white",
//           border: "2px solid red",
//         },
//         icon: "❌",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg"
//       >
//         <div className="flex gap-2">
//           <input
//             type="text"
//             value={search}
//             onChange={(event) => setSearch(event.target.value)}
//             className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-rose-500"
//             placeholder="Introduce el nombre del Pokémon"
//           />
//           <button
//             type="submit"
//             className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-300"
//           >
//             Buscar
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Search;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { ROUTES } from "../routes/paths";

const Search = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (search.length < 2) {
      setResults([]);
      return;
    }

    const fetchPokemonList = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=1000"
        );
        if (!response.ok)
          throw new Error("No se pudo obtener la lista de Pokémon");

        const data = await response.json();
        const filtered = await Promise.all(
          data.results
            .filter((pokemon) => pokemon.name.includes(search.toLowerCase()))
            .map(async (pokemon) => {
              const detailsResponse = await fetch(pokemon.url);
              const details = await detailsResponse.json();
              return {
                name: pokemon.name,
                image: details.sprites.front_default,
              };
            })
        );
        setResults(filtered);
      } catch (error) {
        toast.error("Error al buscar Pokémon", {
          style: {
            background: "#fee2e2",
            color: "black",
            border: "2px solid red",
          },
          icon: "❌",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemonList();
  }, [search]);

  return (
    <div className="container mx-auto p-4">
      <form className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
        <div className="flex gap-2">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-rose-500"
            placeholder="Introduce el nombre del Pokémon"
          />
        </div>
      </form>

      {isLoading && <p className="text-center mt-4">Cargando...</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {results.map((pokemon) => (
          <div
            key={pokemon.name}
            className="bg-gray-100 p-4 rounded-lg shadow-md text-center"
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="mx-auto w-24 h-24"
            />
            <p className="capitalize font-semibold mt-2">{pokemon.name}</p>
            <Link
              className="bg-green-700 text-white px-4 py-2 rounded hover:bg-slate-900"
              to={`${ROUTES.SEARCH}/${pokemon.name}`}
            >
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
