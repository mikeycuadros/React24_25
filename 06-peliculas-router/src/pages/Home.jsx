import  { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { getPopularMovies } from "../services/tmdb";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    () => getPopularMovies(page),
    [page]
  );

  const handlePageChange = (newPage) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(newPage);
  };

  // si se produce un error que hago
  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-bold text-red-500">
          Error al cargar las peliculas {error}
        </p>
        <Link to="/" className="text-blue-500 px-4 py-6">
          Volver al menu principal
        </Link>
      </div>
    );
  }

  // si no ... pues cargo las películas
  return (
    <div className="space-y-8 mx-6">
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
        <h2 className="text-2xl font-bold text-sky-900 mb-4">
          Peliculas populares
        </h2>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {/* Grid para las peliculas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {data?.results?.map((movie) => (
                // Aqui pinto las tarjetas
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            {/* Paginación */}
            <div className="flex justify-center gap-4 mt-8 mb-3">
              <button
                className={`px-4 py-2 bg-sky-900 text-white rounded ${
                  page === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-600"
                }`}
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
              >
                Anterior
              </button>
              <span className="text-gray-800 flex items-center">
                Página {data?.page} de {data?.total_pages}
              </span>
              <button
                className="px-4 py-2 bg-sky-900 text-white rounded hover:bg-blue-600"
                onClick={() => handlePageChange(page + 1)}
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
