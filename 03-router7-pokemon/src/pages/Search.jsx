import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { fetchFromApi } from "../services/tmdb"; // Importa la función fetchFromApi
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../components/LoadingSpinner";
import SearchBox from "../components/SearchBox"; // Importa el componente SearchBox

const Search = () => {
  const [query, setQuery] = useState(""); // Estado para almacenar la consulta de búsqueda
  const [page, setPage] = useState(1); // Estado para la paginación
  const { data, loading, error } = useFetch(
    () => fetchFromApi("/search/multi", { query, page }), // Realiza la búsqueda
    [query, page] // Dependencias: query y page
  );

  const handlePageChange = (newPage) => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Desplazamiento suave al cambiar de página
    setPage(newPage);
  };

  // Función para manejar la búsqueda
  const handleSearch = () => {
    setPage(1); // Reinicia la página al realizar una nueva búsqueda
  };

  // Manejo de errores
  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-bold text-red-500">
          Error al cargar los resultados: {error}
        </p>
        <Link to="/" className="text-blue-500 px-4 py-6">
          Volver al menú principal
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 mx-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-sky-950">Buscador</h1>
      </header>
      {/* Sección de resultados */}
      <section>
        <h2 className="text-2xl font-bold text-sky-900 mb-4">
          Resultados de búsqueda
        </h2>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {/* Grid para los resultados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {data?.results?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            {/* Paginación */}
            {data?.total_pages > 1 && (
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
                  className={`px-4 py-2 bg-sky-900 text-white rounded ${
                    page === data?.total_pages
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-600"
                  }`}
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === data?.total_pages}
                >
                  Siguiente
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default Search;
