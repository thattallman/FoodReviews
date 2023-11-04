import { RestaurantCard } from "./Card";
import { useState,useEffect } from "react";
import ShimmerUI from "./Shimmer";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import Form from "./Form";
export const Body = () => {
  
  const [searchText, setSearchText] = useState("burger...");
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [AllRestaurant, setAllRestaurant] = useState([]);

 
  useEffect(()=>{
    // this will be called after every render 
    // we define API calls here with empty depedency arrray 
    //getdata.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    getRestaurantData();
  },[])

  async function getRestaurantData(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
     setAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setfilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  
  function filterData(searchText, restaurant) {
  
    const filterData = restaurant.filter((x) =>
      x.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }

 if (AllRestaurant.length === 0){
  return <ShimmerCard />
}
else {
  return  (
    <>
    <div className="p-5 bg-pink-50 m-2 shadow-lg">
      <input
        type="text"
        placeholder="Search"
        className="searchBox p-2 mx-2 "
        value={searchText}
        onChange={(e) => {
         
          setSearchText(e.target.value);
          
          
        }}
      ></input>
      <button 
        className="submit-btn p-[10px] mx-5 bg-blue-700 text-pink-100 rounded-lg hover:bg-blue-800 "
        onClick={() => {
          const data = filterData(searchText, AllRestaurant);
          setfilteredRestaurant(data);
        }}
      >
        Search
      </button>
      </div>
      <div className=" flex flex-wrap">
        {filteredRestaurant.map((restaurant) => {
          return <Link to={`/restaurant/${restaurant.info.id}`}><RestaurantCard key={restaurant.info.id} {...restaurant.info }/></Link> ;
        })}
      </div>
      
    </>
  );
      }
};
