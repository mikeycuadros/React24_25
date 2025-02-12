import { Link } from "react-router-dom";
import { getMovieImage } from "../services/tmdb";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie?.id}`} className="group">
      <article className="card transform transition-transform duration-200 group-hover:scale-105">
        <div className="relative aspect-[2/3]">
          {/* Imagen y descripcion */}
          <img
            src={getMovieImage(movie?.poster_path)}
            alt={movie?.title}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
          <div className="absolute top-2 right-2 bg-black text-white px-2 py-4 rounded-lg">
            {/* Puntuación */}⭐ {Number(movie?.vote_average).toFixed(1)}
          </div>
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
