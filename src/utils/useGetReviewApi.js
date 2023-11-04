
import { useState,useEffect } from "react";
const useGetReviewApi = ()=>{
    const [reviewApi, SetReviewApi] = useState();
    useEffect(()=>{
        getReviews()
    },[])
    async function getReviews(){
        try{
        const review = await fetch("http://localhost:9090/getReviews");
        const json = await review.json();
        SetReviewApi(json);
        console.log(json);
        } catch (error) {
            console.error("Error fetching reviews: ", error);
            // Handle errors, such as setting an error state
        }
    }

    
    return reviewApi;
}
export default useGetReviewApi;