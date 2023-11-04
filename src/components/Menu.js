import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import ShimmerCard from "./ShimmerCard";
const Menu = ()=>{
    const params = useParams();
    const[menu, setMenu] = useState(null); 
    const {id} = params;
    useEffect(()=>{
        getRestaurantInfo();
    },[])
    async function getRestaurantInfo(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.699085&lng=76.71776&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        console.log(json);
        setMenu(json)  
    }
    return !menu ? <ShimmerCard/>: (
        <>
        <h1 className="text-xl">Menu</h1>
        <h2 className="text-xl">Restaurant id: {id} </h2>
<h2 className="text-4xl">{menu?.data?.cards[0]?.card?.card?.info?.name }</h2>
<img className="max-w-sm my-3 " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ menu?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
<h3>{menu?.data?.cards[0]?.card?.card?.info?.city }</h3>
<h3>{menu?.data?.cards[0]?.card?.card?.info?.locality }</h3>
<h3>Total Ratings :{menu?.data?.cards[0]?.card?.card?.info?.totalRatings }</h3>
<h3>Average Rating {menu?.data?.cards[0]?.card?.card?.info?.avgRatingString }</h3>
        </>
    )
}
export default Menu;