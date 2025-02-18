import { useFavorites } from "../contexts/FavoritesContext";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { getFavorites } = useFavorites();
  const favorites = getFavorites();

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-sky-950 mb-4">Mis Favoritos</h1>
        <p className="text-gray-600 mb-4">No tienes películas favoritas aún.</p>
        <Link 
          to="/" 
          className="inline-block bg-sky-900 text-white px-6 py-2 rounded hover:bg-sky-800"
        >
          Explorar películas
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-sky-950 mb-8 text-center">
        Mis Favoritos ({favorites.length})
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;