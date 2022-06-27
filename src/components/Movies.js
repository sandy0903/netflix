import React, { useEffect, useState } from "react";
import Movie from "./Movie";
const Movies = ({title, type}) => {
  const [movies, setMovies] = useState([]);
  const API_key = "a1774b0d4b6f52d29d44e7b93620bb63";
  const url = `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${API_key}&language=en-US&page=1`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    };
    fetchData();
  }, []);

  return (
    <div className="ml-[2rem] overflow-hidden">
      <h1 className="font-bold text-3xl mt-4 mb-2">{title}</h1>

        <div className="flex flex-nowrap overflow-x-scroll">

            {movies?.map(item=><Movie movie={item}/>)}
        </div>




    </div>
  );
};

export default Movies;
