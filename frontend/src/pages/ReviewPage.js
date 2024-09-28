// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const ReviewPage = ({ productId }) => {
//   const [review, setReview] = useState('');
//   const [rating, setRating] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleReviewChange = (e) => setReview(e.target.value);
//   const handleRatingChange = (e) => setRating(Number(e.target.value));

//   const submitReview = async (e) => {
//     e.preventDefault();
//     setError('');  // Clear previous errors
//     setLoading(true);

//     if (review.trim() === '') {
//       setError('Review text is required');
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/api/submit-review', {
//         productId,
//         reviewText: review,
//         rating
//       }, {
//         withCredentials: true,
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`  // Assuming you're storing the token in localStorage
//         }
//       });

//       if (response.data.success) {
//         toast.success('Review submitted successfully!');
//         setReview('');  // Clear form
//         setRating(1);    // Reset rating
//       } else {
//         toast.error(response.data.message || 'Error submitting review');
//       }
//     } catch (error) {
//       console.error('Error submitting review:', error);
//       toast.error('Error submitting review');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="review-page">
//       <h3 className="text-2xl font-semibold mb-4">Submit a Review</h3>
//       <form onSubmit={submitReview} className="space-y-4">
//         <textarea
//           value={review}
//           onChange={handleReviewChange}
//           placeholder="Write your review..."
//           className="w-full p-2 border rounded-md resize-none"
//           rows="4"
//         />
//         <div className="flex items-center gap-4">
//           <label htmlFor="rating" className="font-medium">Rating:</label>
//           <select
//             id="rating"
//             value={rating}
//             onChange={handleRatingChange}
//             className="p-2 border rounded-md"
//           >
//             {[1, 2, 3, 4, 5].map((star) => (
//               <option key={star} value={star}>{star} Star{star > 1 ? 's' : ''}</option>
//             ))}
//           </select>
//         </div>
//         {error && <p className="text-red-600">{error}</p>}
//         <button
//           type="submit"
//           className={`px-4 py-2 rounded-md text-white ${loading ? 'bg-gray-400' : 'bg-red-600 hover:bg-red-700'}`}
//           disabled={loading}
//         >
//           {loading ? 'Submitting...' : 'Submit'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ReviewPage;


import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ReviewPage = ({ productId }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);

  const submitReview = (e) => {
    e.preventDefault();
    // Simulate form submission logic
    if (review && rating) {
      // For now, just show a success message
      toast.success('Review submitted successfully!');
      setReview('');  // Clear form
      setRating(1);    // Reset rating
    } else {
      // Show error message if fields are empty
      toast.error('Please fill in both review and rating');
    }
  };

  return (
    <div className="review-page">
      <h3>Submit a Review</h3>
      <form onSubmit={submitReview} className="review-form">
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review..."
          rows="4"
          cols="50"
          required
        />
        <div className="rating-section">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      <style jsx>{`
        .review-page {
          padding: 20px;
          max-width: 600px;
          margin: 0 auto;
        }
        .review-form {
          display: flex;
          flex-direction: column;
        }
        textarea {
          margin-bottom: 10px;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          resize: vertical;
        }
        .rating-section {
          margin-bottom: 10px;
        }
        select {
          padding: 5px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        button {
          padding: 10px 15px;
          background-color: #007bff;
          color: black;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default ReviewPage;

