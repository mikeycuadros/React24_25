import { Link } from "react-router-dom";
import { getMovieImage } from "../services/tmdb";
import { useFavorites } from "../contexts/FavoritesContext";

const MovieCard = ({ movie }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const isMovieFavorite = isFavorite(movie?.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault(); // Prevent navigation when clicking the favorite button
    if (isMovieFavorite) {
      removeFavorite(movie.id, movie.title); // Pass both id and title
    } else {
      addFavorite(movie);
    }
  };

  return (
    <Link to={`/movie/${movie?.id}`} className="group">
      <article className="card transform transition-transform duration-200 group-hover:scale-105">
        <div className="relative aspect-[2/3]">
          <img
            src={getMovieImage(movie?.poster_path)}
            alt={movie?.title}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
          <div className="absolute top-2 right-2 bg-black text-white px-2 py-4 rounded-lg">
            ⭐ {Number(movie?.vote_average).toFixed(1)}
          </div>
          {/* Add favorite button */}
          <button
            onClick={handleFavoriteClick}
            className={`absolute top-2 left-2 p-2 rounded-full transition-colors ${
              isMovieFavorite 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            <svg 
              className="w-6 h-6 text-white"
              fill={isMovieFavorite ? "currentColor" : "none"}
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
              />
            </svg>
          </button>
          <div className="p-4">
            <h2 className="text-sm font-semibold text-gray-700 uppercase mb-2 text-center group-hover:text-sky-800">
              {movie?.title}
            </h2>
            <p className="text-sm text-gray-600 group-hover:text-gray-800">
              {movie?.release_date.split("-")[0]}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;