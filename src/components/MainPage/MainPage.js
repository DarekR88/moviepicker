import React, { useEffect } from "react";
import { testSearch } from "../../API/index.js";
import "./MainPage.scss";

const MaimPage = (props) => {

  function getRandomArbitrary() {
    return console.log(Math.floor(Math.random() * (2022 - 1939) + 1939));
  }

  useEffect(() => {
    getRandomArbitrary()
    testSearch();
  });

  return (
    <div className="main-page">
      <div className="mp-title">
        <p>What to Watch?</p>
      </div>
    </div> 
  )

};

export default MaimPage;
