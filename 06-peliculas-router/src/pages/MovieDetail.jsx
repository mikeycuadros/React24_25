import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import {
  getMovieDetails,
  getMovieImage,
  getMovieVideos,
} from "../services/tmdb";
import LoadingSpinner from "../components/LoadingSpinner";
import { useState } from "react";
import { useEffect } from "react";

const MovieDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(() => getMovieDetails(id), [id]);
  const [trailer, setTrailer] = useState(null);

  // Obtener el trailer después de cargar los detalles de la película
  // https://api.themoviedb.org/3/movie/939243/videos?api_key=3539fc43f3071ba9255ce12f60a40d5f
  useEffect(() => {
    const fetchTrailer = async () => {
      if (id) {
        const videos = await getMovieVideos(id);
        const trailerVideo = videos.results.find(
          (video) => video.type === "Teaser" && video.site === "YouTube"
        );
        if (trailerVideo) setTrailer(trailerVideo.key);
      }
    };

    fetchTrailer();
  }, [id]);

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

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <article className="max-w-4xl mx-auto">
      {/* Cabecera con Banner */}
      <header className="relative h-96 mb-8">
        <img
          src={getMovieImage(data?.backdrop_path, "original")}
          alt={data?.title}
          className="w-full h-full object-cover rounded"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
          <div className="absolute bottom-2 text-white p-6">
            <h1 className="text-4xl font-bold">{data?.title}</h1>
          </div>
        </div>
      </header>
      {/* contenido principal */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Seccion con el poster */}
        <section>
          <img
            src={getMovieImage(data?.poster_path)}
            alt={data?.title}
            className="w-full mb-10 rounded-lg"
          />
        </section>
        <div className="md:col-span-2 space-y-6">
          {/* Seccion del año, duracion y valoracion */}
          <section className="flex items-center gap-4 text-sm text-gray-700">
            <span className="font-bold mt-4">
              {data?.release_date?.split("-")[0]}
            </span>
            <span className="font-bold mt-4">{data?.runtime} min</span>
            <span className="font-bold mt-4">
              ⭐ {Number(data?.vote_average).toFixed(1)}
            </span>
          </section>
          {/* Seccion para los generos */}
          <section className="flex items-center gap-4 text-sm text-gray-700">
            <span>
              {data?.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mr-3"
                >
                  {genre.name}
                </span>
              ))}
            </span>
          </section>
          {/* Seccion para la sinopsis */}
          <section>
            <h2 className="font-bold text-2xl text-gray-900">Sinopsis</h2>
            <p>{data?.overview}</p>
          </section>
          {/* Seccion del video */}
          <section className="mb-4">
            <h2 className="font-bold text-2xl text-gray-900">
              Trailer oficial
            </h2>
            <iframe
              title="Trailer"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${trailer}`}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </section>
        </div>
      </div>
    </article>
  );
};

export default MovieDetail;
