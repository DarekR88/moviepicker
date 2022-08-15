import React, { useEffect } from "react";
import { testSearch } from "../../API/index.js";
import "./MainPage.scss";

const MaimPage = (props) => {
  useEffect(() => {
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
