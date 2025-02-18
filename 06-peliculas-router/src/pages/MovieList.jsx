import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { getPopularMovies, discoverMovies, getGenres } from "../services/tmdb";
import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { useEffect } from "react";

const MovieList = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [genres, setGenres] = useState([]);

  const { data, loading, error } = useFetch(() => {
    // If any filter is active, use discoverMovies
    if (sortBy !== "popularity.desc" || genre || year) {
      return discoverMovies(page, sortBy, genre, year);
    }
    // Otherwise, use the original getPopularMovies
    return getPopularMovies(page);
  }, [page, sortBy, genre, year]);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await getGenres();
        setGenres(data.genres);
      } catch (error) {
        console.error("Error loading genres:", error);
      }
    };
    loadGenres();
  }, []);

  const handlePageChange = (newPage) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(newPage);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setPage(1); // Reset to first page when changing filters
    switch (name) {
      case "sortBy":
        setSortBy(value);
        break;
      case "genre":
        setGenre(value);
        break;
      case "year":
        setYear(value);
        break;
      default:
        break;
    }
  };

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filters Section */}
      <div className="mb-8 flex flex-wrap gap-4">
        <select
          name="sortBy"
          value={sortBy}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="popularity.desc">Más Popular</option>
          <option value="vote_average.desc">Mejor Valoradas</option>
          <option value="release_date.desc">Más Recientes</option>
          <option value="release_date.asc">Más Antiguas</option>
        </select>

        <select
          name="genre"
          value={genre}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">Todos los géneros</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>

        <select
          name="year"
          value={year}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">Todos los años</option>
          {Array.from({ length: 24 }, (_, i) => 2024 - i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Movies Grid */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {data?.results?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          {/* Pagination */}
          {data?.total_pages > 1 && (
            <div className="flex justify-center gap-4 mt-8">
              <button
                className={`px-4 py-2 bg-sky-900 text-white rounded ${
                  page === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-600"
                }`}
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
              >
                Previous
              </button>
              <span className="flex items-center">
                Page {page} of {data.total_pages}
              </span>
              <button
                className={`px-4 py-2 bg-sky-900 text-white rounded ${
                  page === data.total_pages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-600"
                }`}
                onClick={() => handlePageChange(page + 1)}
                disabled={page === data.total_pages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MovieList;
