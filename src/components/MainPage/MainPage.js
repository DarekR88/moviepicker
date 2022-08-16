import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import RandomMovie from "../RandomMovie/RandomMovie";

const MaimPage = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="main-page">
      <div className="mp-title">
        <p>What to Watch?</p>
        <RandomMovie />
      </div>
    </div>
  );
};

export default MaimPage;
