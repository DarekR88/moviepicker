import React, { useState, useRef, useEffect } from "react";
import AllSearch from "../AllSearch/AllSearch";
import MovieSearch from "../MovieSearch/MovieSearch";
import TvSearch from "../TvSearch/TvSearch";
import PeopleSearch from "../PeopleSearch/PeopleSearch";
import "./MainPage.scss";

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("all");
  const [globalTerm, setGlobalTerm] = useState("");
  const [searchSize, setSearchSize] = useState("large");

  let results;

  const setSearchAll = () => {
    setSearchType("all");
  };

  const setSearchMovies = () => {
    setSearchType("movies");
  };

  const setSearchTv = () => {
    setSearchType("tv");
  };

  const setSearchPeople = () => {
    setSearchType("people");
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGlobalTerm(searchTerm);
    setSearchSize("small");
  };

  if (searchType === "all") {
    results = <AllSearch globalTerm={globalTerm} />;
  }

  switch (searchType) {
    case "all":
      results = <AllSearch globalTerm={globalTerm} />;
      break;
    case "movies":
      results = <MovieSearch globalTerm={globalTerm} />;
      break;
    case "tv":
      results = <TvSearch globalTerm={globalTerm} />;
      break;
    case "people":
      results = <PeopleSearch globalTerm={globalTerm} />;
      break;
    default:
      console.log("no results");
  }

  return (
    <div className="main-page">
      <div className="form-wrapper">
        <form className={`search-form-${searchSize}`} onSubmit={handleSubmit}>
          <input className={`search-field-${searchSize}`} type="text" onChange={handleChange} />
          <input className={`submit-button-${searchSize}`} type="submit" value="Search" />
        </form>
      </div>
      <div className="search-type-button-wrapper">
        <button className={`search-button-${searchSize}`} onClick={setSearchAll}>All</button>
        <button className={`search-button-${searchSize}`} onClick={setSearchMovies}>Movies</button>
        <button className={`search-button-${searchSize}`} onClick={setSearchTv}>Tv Shows</button>
        <button className={`search-button-${searchSize}`} onClick={setSearchPeople}>People</button>
      </div>

      {results}
    </div>
  );
};

export default MainPage;
