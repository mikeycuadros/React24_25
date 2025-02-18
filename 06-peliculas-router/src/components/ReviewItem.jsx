import { useReviews } from '../contexts/ReviewsContext';

const ReviewItem = ({ review, movieId }) => {
  const { removeReview } = useReviews();
  const date = new Date(review.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-semibold text-gray-800">{review.author}</h3>
          <div className="text-yellow-500">{'⭐'.repeat(review.rating)}</div>
        </div>
        <button
          onClick={() => removeReview(movieId, review.id)}
          className="text-red-500 hover:text-red-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <p className="text-gray-600 mb-2">{review.comment}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
};

export default ReviewItem;