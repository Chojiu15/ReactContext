import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const Movies = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <>
      <h1>My Movies are :</h1>
      {movies.map((element, index) => {
        return (
          <div key={index}>
            <p> Name : {element.name} </p>
            <p> Type : {element.type}</p>
            <p> Price : {element.price}</p>
          </div>
        );
      })}
    </>
  );
};

export default Movies;
