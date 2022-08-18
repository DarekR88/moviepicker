import React, { useState, useEffect } from "react";
import "./AllSearch.scss";
import { multiSearch } from "../../API";

const MaimPage = (props) => {
  const [multiData, setMultiData] = useState([]);

  useEffect(() => {
    multiSearch(props.globalTerm).then((res) => {
      setMultiData(res.data.results);
    });
  }, [props.globalTerm]);

  const renderAllSearch = () => 
    multiData.map((data) => {
      if (data.media_type === "movie") {
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
      } else if (data.media_type === "tv") {
        return (
          <div className="tv-card" key={data.id}>
            <img className="search-image"
              src={`http://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt=""
            />
            <h2>{data.original_name}</h2>
            <p>{data.overview}</p>
            <div className="divider"></div>
          </div>
        );
      } else if (data.media_type === "person") {
        return (
          <div className="person-card" key={data.id}>
            <img className="search-image"
              src={`http://image.tmdb.org/t/p/w500${data.profile_path}`}
              alt=""
            />
            <h2>{data.name}</h2>
            <p>Popularity: {data.popularity}</p>
            <div className="divider"></div>
            {data.known_for.map((knownForData) => {
              return (
                <div>
                  <img className="search-image"
                    src={`http://image.tmdb.org/t/p/w500${knownForData.poster_path}`}
                    alt=""
                  />
                  <h2>{knownForData.original_title}</h2>
                  <h2>{knownForData.original_name}</h2>
                  <p>{knownForData.overview}</p>
                  <div className="divider"></div>
                </div>
              );
            })}
            
          </div>
        );
      }
    });

  return (
    <div className="main-container">
          {renderAllSearch()}
        </div>
  );
};

export default MaimPage;
