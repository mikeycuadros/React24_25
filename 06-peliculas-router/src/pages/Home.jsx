import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { getPopularMovies } from "../services/tmdb";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    () => getPopularMovies(page),
    [page]
  );

  // si se produce un error que hago
  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-bold text-red-500">
          Error al carar las peliculas {error}
        </p>
        <Link to="/" className="text-blue-500 px-4 py-6">
          Volver al menu principal
        </Link>
      </div>
    );
  }

  // si no ... pues cargo las películas
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-sky-950">
          Bienvenido al VideoClub
        </h1>
        <p className="mt-4 text-gray-800">
          Aqui podras encontrar las peliculas mas populares del momento
        </p>
      </header>
      {/* seccion de las peliculas */}
      <section>
        <h2 className="text-2xl font-bold text-sky-900 mb-2">
          Peliculas populares
        </h2>
        {loading ? (
          <div>Cargando...</div>
        ) : (
          <>
            {/* Grid para las peliculas */}
            <div className="grid grid-cols-2 gap-6  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {data?.results?.map((movie) => (
                // Aqui pinto las tarjetas
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>

            {/* botones para paginar */}
            <div className="flex justify-center gap-4 mt-6 mb-4">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
              >
                Anterior
              </button>
              <span className="text-lg font-bold">Página {page}</span>
              <button
                onClick={() => setPage((prev) => prev + 1)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Siguiente
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
