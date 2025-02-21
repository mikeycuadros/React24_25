import { Link } from "react-router-dom";
import { getMovieImage } from "../services/tmdb";

const Reviews = () => {
  // Get all reviews from localStorage
  const allReviews = JSON.parse(localStorage.getItem("movieReviews") || "{}");

  if (Object.keys(allReviews).length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-sky-950 mb-4">
          Todas las Reseñas
        </h1>
        <p className="text-gray-600 mb-4">No hay reseñas todavía.</p>
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
        Todas las Reseñas
      </h1>
      <div className="space-y-8">
        {Object.entries(allReviews).map(([movieId, reviews]) => {
          // Move variable declarations inside a block
          const movieTitle = reviews[0]?.movieTitle || "Película desconocida";
          const moviePoster = reviews[0]?.moviePoster || "";

          return (
            <div key={movieId} className="bg-white rounded-lg shadow-md p-6">
              <Link
                to={`/movie/${movieId}`}
                className="flex items-center gap-4 mb-4 hover:text-sky-800"
              >
                <img
                  src={getMovieImage(moviePoster)}
                  alt={movieTitle}
                  className="w-16 h-24 object-cover rounded"
                />
                <h2 className="text-2xl font-bold">{movieTitle}</h2>
              </Link>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4 last:border-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{review.author}</h3>
                        <div className="text-yellow-500">
                          {"⭐".repeat(review.rating)}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
