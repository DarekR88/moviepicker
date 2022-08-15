import React, { useState, useEffect } from "react";
import "./MainPage.scss";

const MaimPage = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="main-page">
      <div className="mp-title">
        <p>What to Watch?</p>
      </div>
    </div>
  );
};

export default MaimPage;
