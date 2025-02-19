import { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "./ToastContext";

const ReviewsContext = createContext();

export const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem("movieReviews");
    return savedReviews ? JSON.parse(savedReviews) : {};
  });

  const { addToast } = useToast();

  useEffect(() => {
    localStorage.setItem("movieReviews", JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (movieId, review) => {
    const newReview = {
      id: Date.now(),
      ...review,
      date: new Date().toISOString(),
    };

    setReviews((prev) => ({
      ...prev,
      [movieId]: [...(prev[movieId] || []), newReview],
    }));

    addToast("Reseña añadida correctamente", "success");
  };

  const removeReview = (movieId, reviewId) => {
    setReviews((prev) => {
      const updatedReviews = {
        ...prev,
        [movieId]: prev[movieId].filter((review) => review.id !== reviewId),
      };

      // Si no hay más reseñas para esta película, elimina la entrada completa
      if (updatedReviews[movieId].length === 0) {
        delete updatedReviews[movieId];
      }

      return updatedReviews;
    });

    addToast("Reseña eliminada correctamente", "info");
  };

  const getMovieReviews = (movieId) => {
    return reviews[movieId] || [];
  };

  return (
    <ReviewsContext.Provider
      value={{
        addReview,
        removeReview,
        getMovieReviews,
      }}
    >
      {children}
    </ReviewsContext.Provider>
  );
};

export const useReviews = () => {
  const context = useContext(ReviewsContext);
  if (!context) {
    throw new Error("useReviews must be used within a ReviewsProvider");
  }
  return context;
};
