import React, { useState, useEffect } from "react";
import "./MovieSearch.scss";
import { movieSearch } from "../../API";

const MaimPage = (props) => {
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
          <h2>{data.original_title}</h2>
          <img
            src={`http://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt=""
          />
          <p>{data.overview}</p>
        </div>
      );
    });

  return (
  <div className="movie-container">
    {renderMovies()}
  </div>
  )
};

export default MaimPage;
