import { useState } from "react";
import { useReviews } from "../contexts/ReviewsContext";

const ReviewForm = ({ movieId, movieDetails }) => {
  const { addReview } = useReviews();
  const [formData, setFormData] = useState({
    rating: 5,
    comment: "",
    author: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.comment.trim() || !formData.author.trim()) {
      return;
    }
    addReview(movieId, {
      ...formData,
      movieTitle: movieDetails.title,
      moviePoster: movieDetails.poster_path,
    });
    setFormData({ rating: 5, comment: "", author: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <div>
        <label className="block text-gray-700 mb-2">Nombre:</label>
        <input
          type="text"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
          placeholder="Tu nombre"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Puntuación:</label>
        <select
          value={formData.rating}
          onChange={(e) =>
            setFormData({ ...formData, rating: Number(e.target.value) })
          }
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {"⭐".repeat(num)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Comentario:</label>
        <textarea
          value={formData.comment}
          onChange={(e) =>
            setFormData({ ...formData, comment: e.target.value })
          }
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
          rows="4"
          placeholder="Escribe tu reseña aquí..."
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-sky-900 text-white py-2 px-4 rounded hover:bg-sky-800 transition-colors"
      >
        Publicar Reseña
      </button>
    </form>
  );
};

export default ReviewForm;
