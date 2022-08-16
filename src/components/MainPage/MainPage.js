import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import RandomMovie from "../RandomMovie/RandomMovie";

const MaimPage = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm)
  }

  return (
    <div className="main-page">
      <div className="mp-title">
        <p>What to Watch?</p>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} />
          <input type="submit" value="Search" />
        </form>
        <RandomMovie />
      </div>
    </div>
  );
};

export default MaimPage;
