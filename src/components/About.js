import {useEffect,useState} from "react";
import { allMovies } from "./Data";
import { UserContext } from "../App";
import { useContext } from "react";


const About = () => {
  const {user} = useContext(UserContext);

    return (
      <div className="flex flex-wrap " >
      {allMovies.map((movie,index)=>{
        return (
          <div key={index} className=" m-2 w-[300px] px-2  bg-pink-50  border-2   shadow-lg border-gray-300">
            <img src={movie?.Images[2]}></img>
          <h1 className="font-bold">Title : {movie?.Title}</h1>
      <h1>Genre :{movie?.Genre} </h1>
      <h1>released  :{movie?.Year} </h1>
     
      <h1>Rating :{movie?.imdbRating} </h1>
      {user == null ? <h4></h4> : <h4>{user}, What are you watching ? </h4>}
      
      </div >
        )
      })}
      </div>



    );
  
};

export default About;
