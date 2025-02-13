import { Link } from "react-router-dom";
import { getMovieImage } from "../services/tmdb";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="group">
      <article className="card transform transition-transform duration-200 group-hover:scale-105">
        <div className="relative aspect-[2/3]">
          {/* Imagen y descripcion */}

          <img
            src={getMovieImage(movie.poster_path)}
            alt={movie.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <h2 className="text-sm font-semibold text-gray-700 uppercase mb-2 text-center">
            {movie.title}
          </h2>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
