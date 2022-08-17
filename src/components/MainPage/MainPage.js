import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import RandomMovie from "../RandomMovie/RandomMovie";
import { multiSearch } from "../../API";

const MaimPage = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [multiData, setMultiData] = useState([]);
  const [searchType, setSearchType] = useState("all");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.setGlobalTerm(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    multiSearch(searchTerm).then((res) => {
      setMultiData(res.data.results);
    });
  };

  const setSearchAll = () => {
    setSearchType("all")
  }

  const setSearchMovies = () => {
    setSearchType("movies")
  }

  const setSearchTv = () => {
    setSearchType("tv")
  }

  const setSearchPeople = () => {
    setSearchType("people")
  }

  const renderAllSearch = () => 
    multiData.map((data) => {
      if (data.media_type === "movie") {
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
      } else if (data.media_type === "person") {
        return (
          <div className="person-card" key={data.id}>
            <h2>{data.name}</h2>
            <img
              src={`http://image.tmdb.org/t/p/w500${data.profile_path}`}
              alt=""
            />
            <p>Popularity: {data.popularity}</p>
            {data.known_for.map((knownForData) => {
              return (
                <div>
                  <h2>{knownForData.original_title}</h2>
                  <img
                    src={`http://image.tmdb.org/t/p/w500${knownForData.poster_path}`}
                    alt=""
                  />
                  <p>{knownForData.overview}</p>
                </div>
              );
            })}
            
          </div>
        );
      }
    });

  return (
    <div className="main-container">
      <div className="main-page">
        <div className="search-type-button-wrapper">
          <button onClick={setSearchAll}>All</button>
          <button onClick={setSearchMovies}>Movies</button>
          <button onClick={setSearchTv}>Tv Shows</button>
          <button onClick={setSearchPeople}>People</button>
        </div>
        <div className="mp-title">
          <p>What to Watch?</p>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} />
            <input type="submit" value="Search" />
          </form>
          {renderAllSearch()}
          <RandomMovie />
        </div>
      </div>
    </div>
  );
};

export default MaimPage;
