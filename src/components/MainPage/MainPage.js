import React, { useState, useEffect } from "react";
import { testSearch } from "../../API/index.js";
import "./MainPage.scss";

const MaimPage = (props) => {
  const [randomSearch, setRandomSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    testSearch(Math.floor(Math.random() * (2022 - 1939) + 1939)).then((res) => {
      console.log(res.data.results[0]);
    });
  });

  return (
    <div className="main-page">
      <div className="mp-title">
        <p>What to Watch?</p>
      </div>
    </div>
  );
};

export default MaimPage;
