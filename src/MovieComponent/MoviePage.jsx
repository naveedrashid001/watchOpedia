import { useState } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

const MoviePage = ()=>{
    const [movieState, setmovieState] = useState(()=>{
        return {movieList : ["Avanger infinty War", "Avanger Secrit War"]}
    })

// add movie function 
function HandleAddMovie (NewMovie){
    setmovieState((prevstate)=>{
        return{
            ...prevstate,
            movieList : prevstate.movieList.concat([NewMovie])
        }
    })
}


    return(
        <div className="container col-12 col-md-6 my-3 border">
            <AddMovie HandleAddMovie = {HandleAddMovie} />
            <MovieList movieList={movieState.movieList} />
        </div>
    )
}
export default MoviePage;