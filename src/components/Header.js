import { useState,useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { restaurantImage } from "./Data"; // Make sure to import restaurantImage
import useOnline from "../utils/useOnline";
import { UserContext } from "../App";


const Title = () => {
  return (
    <Link to="/">
      <img
        key="2223"
        src={restaurantImage}
        alt="a beautiful image"
        className="p-1 h-28"
      />
    </Link>
  );
};

export const HeaderComponent = () => {
  const {user,setUser} = useContext(UserContext);
  const [logButton, setLogButton] = useState(false);
  const navidate = useNavigate();
  const offline = useOnline();


  return (
    <div className="flex justify-between bg-pink-50 shadow-lg" key="1022">
      <Title />
        <ul className="flex py-10 ">
          <li className="px-2" >
            <Link to="/">Food</Link>
          </li>
          <li className="px-2">
            <Link to="/about">Movies</Link>
          </li>
          <li className= "px-2" >
            <Link to="/contact">Contact</Link>
          </li  >
          <li className= "px-2" >
            <Link to="/reviews">Reviews</Link>
          </li  >
          <li className= "px-2" >Cart</li>
          { offline ?  <li className= "px-2" >🟢(online)</li> :  <li className= "px-2" >🔴(offline)</li>}
          {user == null ? <p className="mx-10 text-2xl">Please log in</p> : <p className="mx-10 text-2xl">Welcome {user}!</p>}

          
          </ul>
          
          {logButton ? (
            <button className= "px-2 " onClick={() => {
              setUser(null);

              setLogButton(false)}}>
              LogOut
            </button>
          ) : (
            <button
              className="auth-button px-4"
              onClick={() => {
                setLogButton(true);
                navidate("/auth");
              }}
            >
              LogIn
            </button>
          )}
       
      
    </div>
  );
};
