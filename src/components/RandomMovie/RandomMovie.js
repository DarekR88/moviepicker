import React, { useState, useEffect } from "react";
import { testSearch } from "../../API/index.js";
import "./RandomMovie.scss"

const RandomMovie = (props) => {
  const [randomSearch, setRandomSearch] = useState("");

  useEffect(() => {
    testSearch(Math.floor(Math.random() * (2023 - 1939) + 1939)).then((res) => {
      setRandomSearch(res.data.results[0]);
    });
  }, []);

  return (
    <div className="random-movie-wrapper">
      <p>Random Movie</p>
      <img src={`http://image.tmdb.org/t/p/w500${randomSearch.poster_path}`}/>
      <p>Title: {randomSearch.original_title}</p>
      <p>Synopsis: {randomSearch.overview}</p>
      <p>Release Date: {randomSearch.release_date}</p>
    </div>
  );
};

export default RandomMovie;