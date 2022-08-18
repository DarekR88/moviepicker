import React, { useState, useEffect } from "react";
import "./TvSearch.scss";
import { tvSearch } from "../../API";

const TvSearch = (props) => {
  const [tvData, setTvData] = useState([]);

  useEffect(() => {
    tvSearch(props.globalTerm).then((res) => {
      setTvData(res.data.results);
    });
  }, [props.globalTerm]);

  const renderShows = () =>
    tvData.map((data) => {
      return (
        <div className="tv-card" key={data.id}>
          <img
            src={`http://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt=""
          />
          <h2>{data.original_name}</h2>
          <p>{data.overview}</p>
          <div className="divider"></div>
        </div>
      );
    });

  return (
  <div className="movie-container">
    {renderShows()}
  </div>
  )
};

export default TvSearch;
