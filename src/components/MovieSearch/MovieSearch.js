import React, { useState, useEffect } from "react";
import "./MovieSearch.scss";
import { movieSearch } from "../../API";

const MovieSearch = (props) => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    movieSearch(props.globalTerm).then((res) => {
      setMovieData(res.data.results);
    });
  }, [props.globalTerm]);

  const renderMovies = () =>
    movieData.map((data) => {
      return (
        <div className="movie-card" key={data.id}>
          <img className="search-image"
            src={`http://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt=""
          />
          <h2>{data.original_title}</h2>
          <p>{data.overview}</p>
          <div className="divider"></div>
        </div>
      );
    });

  return (
  <div className="movie-container">
    {renderMovies()}
  </div>
  )
};

export default MovieSearch;
