import { UserContext } from "../App";
import { useContext } from "react";

export const RestaurantCard = ( { cloudinaryImageId, name, cuisines, avgRating }) => {
  const {user} = useContext(UserContext);
 
    return (
      <div className="w-[300px] px-2 bg-pink-50 shadow-lg m-2 border-2 border-gray-300">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
        <h2 className="font-bold">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating}</h4>
       {user == null ? <h4></h4> : <h4>{user}, you will love this </h4>}
      </div>
    );
  };
  