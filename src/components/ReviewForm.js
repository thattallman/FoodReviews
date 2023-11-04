import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ReviewForm = () => {
    const [name, setName] = useState('');
    const [movieName, setMovieName] = useState('');
    const [userReview, setUserReview] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:9090/postReviews", {
                nameOfPerson: name,
                movieName: movieName,
                movieReview: userReview
            });
            navigate("/reviews");
        } catch (error) {
            // Handle error
            console.error("Error adding review:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="login-form-container bg-white p-8 rounded shadow-md w-96 mt-4">
                <h2 className="text-2xl font-semibold mb-4">Tell us about your reviews</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="userName" className="block text-gray-600">Name :</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="userName" className="block text-gray-600">Movie Name :</label>
                        <input
                            type="text"
                            value={movieName}
                            onChange={(e) => setMovieName(e.target.value)}
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="userName" className="block text-gray-600">Movie Review</label>
                        <textarea
                            value={userReview}
                            onChange={(e) => setUserReview(e.target.value)}
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;
