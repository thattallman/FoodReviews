import { useState, useEffect } from "react";
import useGetReviewApi from "../utils/useGetReviewApi";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";

const Section = ({ name, review, movie, isVisible, setIsVisible }) => {
  return (
    <>
      <div className="bg-pink-50 m-2 p-2 ">
        <div className="flex">
          <h1 className="text-2xl "> {name}</h1>
          <button
            className="p-[5px] mx-2 bg-pink-300 text-pink-100 rounded-lg hover:bg-pink-400"
            onClick={() => {
              isVisible ? setIsVisible() : setIsVisible(movie);
            }}
          >
            {isVisible ? "hide" : "show"}
          </button>
        </div>
        <h2 className="text-xl">Movie Name : {movie} </h2>

        {isVisible && <p className="text-lg">{review}</p>}
      </div>
    </>
  );
};
const Reviews = () => {
  const [visibleReview, setVisibleReview] = useState(null);
  const reviewApi = useGetReviewApi();

  if (!reviewApi || reviewApi.length === 0) {
    return <ShimmerCard />;
  }
  return (
    <>
      <h1 className="text-3xl text-gray-800 m-2 p-2">User Reviews</h1>
      <div className="flex flex-wrap ">
        {reviewApi.map((review, index) => (
          <Section
            key={index}
            name={review?.nameOfPerson}
            review={review?.movieReview}
            movie={review?.movieName}
            isVisible={visibleReview === review?.movieName}
            setIsVisible={() => {
              if (visibleReview === review?.movieName) {
                setVisibleReview(null);
              } else {
                setVisibleReview(review?.movieName);
              }
            }}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link to={"/reviewForm"}>
          <button className=" bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
            Submit your Reviews
          </button>
        </Link>
      </div>
    </>
  );
};

export default Reviews;
